#!/usr/bin/env node
/**
 * scripts/build-mdbook.js
 *
 * Converts the Hugo handbook (content/de/) to mdBook format, builds an HTML
 * book with pre-processed Mermaid diagrams, and exports a PDF via Playwright.
 *
 * Prerequisites (one-time):
 *   ~/.local/bin/mdbook          v0.5.2+
 *   ~/.local/bin/mdbook-mermaid  v0.17.0+
 *   npx playwright install chromium
 *
 * Usage:
 *   node scripts/build-mdbook.js           # convert + build + PDF
 *   node scripts/build-mdbook.js --no-pdf  # convert + build only
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const http = require('http');
const { spawnSync } = require('child_process');

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const ROOT_DIR    = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'content', 'de');
const STATIC_DIR  = path.join(ROOT_DIR, 'static');
const MDBOOK_DIR  = path.join(ROOT_DIR, 'mdbook');
const SRC_DIR     = path.join(MDBOOK_DIR, 'src');
const BOOK_DIR    = path.join(MDBOOK_DIR, 'book');
const EXPORTS_DIR = path.join(ROOT_DIR, 'exports');
const PDF_PATH    = path.join(EXPORTS_DIR, 'handbook-de-mdbook.pdf');

// Pages to exclude from the PDF — edit mdbook/pdf-config.json to change the list
const PDF_CONFIG             = JSON.parse(fs.readFileSync(path.join(MDBOOK_DIR, 'pdf-config.json'), 'utf8'));
const EXCLUDE_SECTIONS       = new Set(PDF_CONFIG.excludeSections || []);
const EXCLUDE_TRANS_KEYS     = new Set(PDF_CONFIG.excludeTranslationKeys || []);

// ---------------------------------------------------------------------------
// Locate binaries
// ---------------------------------------------------------------------------
function findBin(name) {
  const candidates = [
    path.join(process.env.HOME || '', '.local', 'bin', name),
    `/usr/local/bin/${name}`,
    `/usr/bin/${name}`,
  ];
  for (const p of candidates) {
    try { fs.accessSync(p, fs.constants.X_OK); return p; } catch { /* skip */ }
  }
  return name; // hope it is on PATH
}

const MDBOOK     = findBin('mdbook');
const MDBOOK_MMD = findBin('mdbook-mermaid');

// ---------------------------------------------------------------------------
// Minimal YAML front-matter parser
// Returns { meta: {title, weight, draft, type}, body: string }
// ---------------------------------------------------------------------------
function parseFrontmatter(source) {
  const meta = { title: '', description: '', weight: Infinity, draft: false, type: 'docs' };
  const m = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta, body: source };

  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+)\s*:\s*(.*)/);
    if (!kv) continue;
    const [, key, raw] = kv;
    const val = raw.trim().replace(/^['"]|['"]$/g, '');
    switch (key) {
      case 'title':          meta.title          = val.replace(/\\"/g, '"'); break;
      case 'description':    meta.description    = val;                       break;
      case 'weight':         meta.weight         = parseInt(val, 10) || 0;    break;
      case 'draft':          meta.draft          = val === 'true';            break;
      case 'type':           meta.type           = val;                       break;
      case 'translationKey': meta.translationKey = val;                       break;
    }
  }
  return { meta, body: source.slice(m[0].length) };
}

// ---------------------------------------------------------------------------
// Compute the relative path prefix to reach src/ root from a file at `depth`
// (depth 0 = file in src/, depth 1 = one folder below, …)
// ---------------------------------------------------------------------------
function imgPrefix(depth) {
  return '../'.repeat(depth);
}

// ---------------------------------------------------------------------------
// Convert a Hugo image src to a mdBook-relative path
// ---------------------------------------------------------------------------
function convertSrc(src, prefix) {
  if (src.startsWith('/handbook/img/')) return `${prefix}img/${src.slice(14)}`;
  if (src.startsWith('/handbook/'))    return `${prefix}${src.slice(10)}`;
  if (src.startsWith('/img/'))         return `${prefix}img/${src.slice(5)}`;
  return src;
}

// ---------------------------------------------------------------------------
// Convert Hugo shortcodes → plain Markdown
// ---------------------------------------------------------------------------
function convertContent(body, depth) {
  const pfx = imgPrefix(depth);
  let s = body;

  // 1. Raw HTML <details> blocks – expand first so later blockquote conversions
  //    (alert, pageinfo) don't hide the content behind collapsed elements.
  //    <summary>…</summary> becomes a bold label; the body is shown verbatim.
  s = s.replace(
    /<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi,
    (_, summary, inner) => {
      const label = summary.replace(/<[^>]+>/g, '').trim();
      return `**${label}**\n\n${inner.trim()}`;
    }
  );

  // 2. Mermaid shortcode  {{< mermaid … >}} … {{< /mermaid >}}
  s = s.replace(
    /\{\{<\s*mermaid[^>]*>\s*\}\}([\s\S]*?)\{\{<\s*\/mermaid\s*>\s*\}\}/g,
    (_, inner) => `\`\`\`mermaid\n${inner.trim()}\n\`\`\``
  );

  // 2b. Fix literal \n sequences in mermaid diagrams → <br/> line breaks.
  //     Mermaid's \n support varies; <br/> works universally in node labels.
  //     Use \r?\n to handle both CRLF and LF source files.
  s = s.replace(
    /(`{3}mermaid\r?\n)([\s\S]*?)(`{3})/g,
    (_, open, diagram, close) => open + diagram.replace(/\\n/g, '<br/>') + close
  );

  // 3. Alert  {{< alert title="…" color="…" >}} … {{< /alert >}}
  //    Rendered as an HTML box so it stays visually distinct in the PDF.
  s = s.replace(
    /\{\{<\s*alert([^>]*?)>\s*\}\}([\s\S]*?)\{\{<\s*\/alert\s*>\s*\}\}/g,
    (_, attrs, inner) => {
      const titleM = attrs.match(/title\s*=\s*["']([^"']*)["']/);
      const colorM = attrs.match(/color\s*=\s*["']([^"']*)["']/);
      const title  = titleM ? titleM[1].replace(/<[^>]+>/g, '') : '';
      const color  = colorM ? colorM[1] : 'info';
      const titleHtml = title ? `<div class="alert-title">${title}</div>` : '';
      // Wrap in HTML; blank lines around the div let mdBook parse inner Markdown
      return `\n<div class="alert alert-${color}">\n${titleHtml}\n\n${inner.trim()}\n\n</div>\n`;
    }
  );

  // 3. Card  {{< card header="…" title="…" footer="…" >}} … {{< /card >}}
  s = s.replace(
    /\{\{<\s*card([^>]*?)>\s*\}\}([\s\S]*?)\{\{<\s*\/card\s*>\s*\}\}/g,
    (_, attrs, inner) => {
      const titleM  = attrs.match(/title\s*=\s*["']([^"']*)["']/);
      const headerM = attrs.match(/header\s*=\s*["']([^"']*)["']/);
      const footerM = attrs.match(/footer\s*=\s*["']([^"']*)["']/);
      const lines = [];
      if (headerM) lines.push(`*${headerM[1]}*`);
      if (titleM)  lines.push(`**${titleM[1].replace(/__/g, '')}**`);
      lines.push(inner.trim());
      if (footerM) lines.push(`*${footerM[1]}*`);
      return lines.join('\n\n');
    }
  );

  // 4. Pageinfo  {{< pageinfo >}} … {{< /pageinfo >}}
  s = s.replace(
    /\{\{<\s*pageinfo[^>]*>\s*\}\}([\s\S]*?)\{\{<\s*\/pageinfo\s*>\s*\}\}/g,
    (_, inner) => inner.trim().replace(/^/mg, '> ')
  );

  // 5. Figure  {{< figure src="…" alt="…" caption="…" … >}}
  s = s.replace(
    /\{\{<\s*figure([^>]+?)>\s*\}\}/g,
    (_, attrs) => {
      const srcM     = attrs.match(/src\s*=\s*["']([^"']*)["']/);
      const altM     = attrs.match(/alt\s*=\s*["']([^"']*)["']/);
      const captionM = attrs.match(/caption\s*=\s*["']([^"']*)["']/);
      if (!srcM) return '';
      const src     = convertSrc(srcM[1], pfx);
      const alt     = altM ? altM[1] : '';
      const caption = captionM ? `\n*${captionM[1]}*` : '';
      return `![${alt}](${src})${caption}`;
    }
  );

  // 6. Video  {{< video src="…" … >}}
  s = s.replace(
    /\{\{<\s*video([^>]+?)>\s*\}\}/g,
    (_, attrs) => {
      const srcM = attrs.match(/src\s*=\s*["']([^"']*)["']/);
      return srcM ? `*[Video: ${path.basename(srcM[1])}]*` : '';
    }
  );

  // 7. YouTube  {{< youtube_custom id="…" … >}}
  s = s.replace(
    /\{\{<\s*youtube_custom([^>]+?)>\s*\}\}/g,
    (_, attrs) => {
      const idM = attrs.match(/id\s*=\s*["']([^"']*)["']/);
      return idM ? `*[YouTube: https://youtu.be/${idM[1]}]*` : '';
    }
  );

  // 8. table_of_contents  (mdBook generates its own ToC)
  s = s.replace(/\{\{<\s*table_of_contents[^>]*>\s*\}\}/g, '');

  // 9. event-card  (time-sensitive, not needed in PDF)
  s = s.replace(/\{\{<\s*event-card[\s\S]*?>\s*\}\}/g, '');

  // 10. tabs / tab wrappers – keep inner content
  s = s.replace(/\{\{<\s*\/?tabs[^>]*>\s*\}\}/g, '');
  s = s.replace(/\{\{<\s*tab\b[^>]*>\s*\}\}/g, '');
  s = s.replace(/\{\{<\s*\/tab\s*>\s*\}\}/g, '');

  // 11. Catch-all: remove any remaining Hugo shortcodes
  s = s.replace(/\{\{[<%][^}]+[>%]\}\}/g, '');

  // 12. Markdown image paths  ![alt](/handbook/img/…)
  s = s.replace(
    /!\[([^\]]*)\]\(\/handbook\/img\/([^)]+)\)/g,
    (_, alt, rest) => `![${alt}](${pfx}img/${rest})`
  );

  return s;
}

// ---------------------------------------------------------------------------
// Recursive content tree builder
// ---------------------------------------------------------------------------
function buildTree(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const indexEntry = entries.find(
    e => e.isFile() && (e.name === '_index.md' || e.name === 'index.md')
  );

  let indexMeta = { title: path.basename(dir), weight: Infinity };
  let indexFileName = null;
  if (indexEntry) {
    const raw = fs.readFileSync(path.join(dir, indexEntry.name), 'utf-8');
    const { meta } = parseFrontmatter(raw);
    indexMeta = meta;
    indexFileName = indexEntry.name;
  }

  const pages = [];
  const subdirs = [];

  for (const e of entries) {
    if (e.isDirectory()) {
      subdirs.push(path.join(dir, e.name));
    } else if (
      e.isFile() &&
      e.name.endsWith('.md') &&
      e.name !== '_index.md' &&
      e.name !== 'index.md'
    ) {
      const fullPath = path.join(dir, e.name);
      const { meta } = parseFrontmatter(fs.readFileSync(fullPath, 'utf-8'));
      if (!meta.draft && meta.type !== 'print' &&
          !(meta.translationKey && EXCLUDE_TRANS_KEYS.has(meta.translationKey))) {
        pages.push({ name: e.name, fullPath, meta });
      }
    }
  }

  pages.sort((a, b) => a.meta.weight - b.meta.weight);

  const subTrees = subdirs
    .map(d => buildTree(d))
    .filter(t => !(t.indexMeta.translationKey && EXCLUDE_TRANS_KEYS.has(t.indexMeta.translationKey)))
    .sort((a, b) => a.indexMeta.weight - b.indexMeta.weight);

  return { dir, indexMeta, indexFileName, pages, subTrees };
}

// ---------------------------------------------------------------------------
// Write mdBook source files and accumulate SUMMARY.md lines
// ---------------------------------------------------------------------------
function writeTree(tree, depth, relPath, summaryLines) {
  const outDir = path.join(SRC_DIR, relPath);
  fs.mkdirSync(outDir, { recursive: true });

  // --- Section intro page ---
  const indexOutName = 'index.md';
  const indexOutRel  = (relPath ? relPath + '/' : '') + indexOutName;

  if (tree.indexFileName) {
    const raw = fs.readFileSync(path.join(tree.dir, tree.indexFileName), 'utf-8');
    const { meta, body } = parseFrontmatter(raw);
    const converted = convertContent(body, depth);
    const title = meta.title || tree.indexMeta.title;
    const lead  = meta.description ? `*${meta.description}*\n\n` : '';
    fs.writeFileSync(
      path.join(outDir, indexOutName),
      `# ${title}\n\n${lead}${converted}`
    );
  }

  // --- SUMMARY entry for this section ---
  const indent = '  '.repeat(depth - 1);
  if (depth === 1) {
    summaryLines.push(`\n# ${tree.indexMeta.title}\n`);
  }
  summaryLines.push(
    `${indent}- [${tree.indexMeta.title}](${indexOutRel})`
  );

  // --- Regular pages in this section ---
  for (const page of tree.pages) {
    const raw = fs.readFileSync(page.fullPath, 'utf-8');
    const { meta, body } = parseFrontmatter(raw);
    const outName = page.name;
    const outRel  = (relPath ? relPath + '/' : '') + outName;
    const converted = convertContent(body, depth);
    const title = meta.title || outName.replace('.md', '');
    const lead  = meta.description ? `*${meta.description}*\n\n` : '';
    fs.writeFileSync(
      path.join(outDir, outName),
      `# ${title}\n\n${lead}${converted}`
    );
    summaryLines.push(`${'  '.repeat(depth)}- [${title}](${outRel})`);
  }

  // --- Recurse into sub-sections ---
  for (const sub of tree.subTrees) {
    const subName = path.basename(sub.dir);
    const subRel  = relPath ? `${relPath}/${subName}` : subName;
    writeTree(sub, depth + 1, subRel, summaryLines);
  }
}

// ---------------------------------------------------------------------------
// Copy a directory recursively (non-markdown assets)
// ---------------------------------------------------------------------------
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, item.name);
    const d = path.join(dest, item.name);
    if (item.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

// ---------------------------------------------------------------------------
// Extract h1/h2 headings with their ids from the generated print.html and
// return a structured list used to build the PDF table of contents.
// ---------------------------------------------------------------------------
function extractHeadings(html) {
  const entries = [];
  // mdBook renders: <h1 id="slug"><a class="header" href="#slug">Title</a></h1>
  const re = /<h([12])[^>]*\sid="([^"]+)"[^>]*>[\s\S]*?<a[^>]*class="header"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const level = m[1];
    const id    = m[2];
    const text  = m[3].replace(/<[^>]+>/g, '').trim();
    if (text) entries.push({ level, id, text });
  }
  return entries;
}

// ---------------------------------------------------------------------------
// Parse SUMMARY.md and return TOC entries up to maxDepth levels.
// Depth is derived from leading-space indentation (2 spaces = one level).
// ---------------------------------------------------------------------------
function parseSummaryEntries(summaryPath, maxDepth) {
  const lines = fs.readFileSync(summaryPath, 'utf-8').split(/\r?\n/);
  const entries = [];
  for (const line of lines) {
    // Matches both `- [Title](file)` and bare `[Title](file)` (root welcome)
    const m = line.match(/^( *)-?\s*\[([^\]]+)\]\(([^)]+)\)/);
    if (!m) continue;
    const depth = Math.floor(m[1].length / 2) + 1;
    if (depth > maxDepth) continue;
    entries.push({ title: m[2], file: m[3], depth });
  }
  return entries;
}

// ---------------------------------------------------------------------------
// Minimal static HTTP server (serves mdBook output for Playwright)
// ---------------------------------------------------------------------------
function startStaticServer(rootPath, port) {
  const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.svg':  'image/svg+xml',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif':  'image/gif',
    '.woff': 'font/woff',
    '.woff2':'font/woff2',
    '.ttf':  'font/ttf',
    '.json': 'application/json; charset=utf-8',
  };

  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    let filePath  = path.join(rootPath, urlPath.replace(/^\/+/, ''));
    if (urlPath.endsWith('/')) filePath = path.join(filePath, 'index.html');

    // Path traversal guard
    if (!filePath.startsWith(rootPath + path.sep) && filePath !== rootPath) {
      res.statusCode = 403; res.end('Forbidden'); return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) { res.statusCode = 404; res.end('Not Found'); return; }
      const ext = path.extname(filePath).toLowerCase();
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      res.end(data);
    });
  });

  return new Promise(resolve => server.listen(port, () => resolve(server)));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const noPdf = process.argv.includes('--no-pdf');

  // ------ 1. Prepare src/ directory ------
  console.log('⏳  Preparing mdBook source …');
  fs.rmSync(SRC_DIR, { recursive: true, force: true });
  fs.mkdirSync(SRC_DIR, { recursive: true });
  fs.mkdirSync(EXPORTS_DIR, { recursive: true });

  // Root intro page (content/de/_index.md → src/README.md)
  const rootRaw = fs.readFileSync(path.join(CONTENT_DIR, '_index.md'), 'utf-8');
  const { meta: rootMeta, body: rootBody } = parseFrontmatter(rootRaw);
  const rootLead = rootMeta.description ? `*${rootMeta.description}*\n\n` : '';
  fs.writeFileSync(
    path.join(SRC_DIR, 'README.md'),
    `# ${rootMeta.title || 'Handbuch'}\n\n${rootLead}${convertContent(rootBody, 0)}`
  );

  // Build content tree (skip root _index.md – handled above)
  const topTree = buildTree(CONTENT_DIR);

  const summaryLines = [
    '# Handbuch Interoperabilitätsplattform I14Y\n',
    // Use the actual page title so SUMMARY entry matches the h1 for TOC lookup
    `[${rootMeta.title || 'Willkommen'}](README.md)`,
  ];

  for (const sub of topTree.subTrees) {
    const sectionName = path.basename(sub.dir);
    if (EXCLUDE_SECTIONS.has(sectionName)) continue;
    if (sub.indexMeta.translationKey && EXCLUDE_TRANS_KEYS.has(sub.indexMeta.translationKey)) continue;
    writeTree(sub, 1, sectionName, summaryLines);
  }

  fs.writeFileSync(
    path.join(SRC_DIR, 'SUMMARY.md'),
    summaryLines.join('\n') + '\n'
  );

  // ------ 2. Copy static images ------
  console.log('📁  Copying static images …');
  copyDir(path.join(STATIC_DIR, 'img'), path.join(SRC_DIR, 'img'));

  // ------ 3. mdbook-mermaid install (idempotent) ------
  console.log('🔧  Installing mdbook-mermaid …');
  const installResult = spawnSync(
    MDBOOK_MMD, ['install', MDBOOK_DIR],
    { stdio: 'inherit', env: { ...process.env } }
  );
  if (installResult.status !== 0) throw new Error('mdbook-mermaid install failed');

  // ------ 4. mdbook build ------
  console.log('📖  Building mdBook …');
  // Ensure ~/.local/bin is on PATH so mdBook can find mdbook-mermaid
  const localBin = path.join(process.env.HOME || '', '.local', 'bin');
  const buildEnv = {
    ...process.env,
    PATH: [localBin, process.env.PATH].filter(Boolean).join(path.delimiter),
  };
  const buildResult = spawnSync(
    MDBOOK, ['build'],
    { stdio: 'inherit', cwd: MDBOOK_DIR, env: buildEnv }
  );
  if (buildResult.status !== 0) throw new Error('mdbook build failed');

  // ------ 4a. Embed FontAwesome for Mermaid fa:fa-* icon support ------
  // mdbook-mermaid bundles mermaid.js but not FontAwesome; copy the CSS and
  // woff2 fonts into the book output so fa: prefixed icons render in the PDF.
  const FA_DIR = path.join(ROOT_DIR, 'node_modules', '@fortawesome', 'fontawesome-free');
  if (fs.existsSync(FA_DIR)) {
    console.log('🔤  Embedding FontAwesome for Mermaid icons …');
    // Rewrite font paths: all.min.css uses ../webfonts/ relative to its own
    // directory; we place fontawesome.css at the book root, so ./webfonts/ is correct.
    let faCss = fs.readFileSync(path.join(FA_DIR, 'css', 'all.min.css'), 'utf-8');
    faCss = faCss.replace(/\.\.\/webfonts\//g, './webfonts/');
    fs.writeFileSync(path.join(BOOK_DIR, 'fontawesome.css'), faCss);
    copyDir(path.join(FA_DIR, 'webfonts'), path.join(BOOK_DIR, 'webfonts'));
    // Inject the <link> into print.html (the page Playwright renders)
    const printHtmlPath = path.join(BOOK_DIR, 'print.html');
    let printHtml = fs.readFileSync(printHtmlPath, 'utf-8');
    if (!printHtml.includes('fontawesome.css')) {
      printHtml = printHtml.replace(
        '</head>',
        '  <link rel="stylesheet" href="fontawesome.css">\n</head>'
      );
      fs.writeFileSync(printHtmlPath, printHtml);
    }
  }

  // ------ 4b. Inject title page and table of contents ------
  console.log('📄  Injecting title page and table of contents …');
  const printHtmlPath2 = path.join(BOOK_DIR, 'print.html');
  let printHtml2 = fs.readFileSync(printHtmlPath2, 'utf-8');

  // German-locale date string
  const prodDate = new Date().toLocaleDateString('de-CH', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const titlePageHtml = `
<div class="pdf-title-page">
  <div class="pdf-title-accent"></div>
  <h1 class="pdf-main-title">Handbuch Interoperabilitätsplattform I14Y</h1>
  <p class="pdf-author">Interoperabilitätsstelle<br>Bundesamt für Statistik</p>
  <p class="pdf-date">Stand: ${prodDate}</p>
</div>
`;

  // Build TOC from SUMMARY.md structure (depth 1–3) rather than from HTML
  // heading levels, so within-page subheadings (e.g. glossary terms) are excluded.
  const summaryEntries = parseSummaryEntries(path.join(SRC_DIR, 'SUMMARY.md'), 3);
  const allH1s = extractHeadings(printHtml2).filter(h => h.level === '1');
  const titleToId = new Map(allH1s.map(h => [h.text.toLowerCase().trim(), h.id]));
  const tocItems = summaryEntries
    .map(({ title, depth }) => {
      const id = titleToId.get(title.toLowerCase().trim()) || '';
      if (!id) return null;
      return `<li class="pdf-toc-h${depth}" data-toc-id="${id}"><a href="#${id}">${title}</a><span class="pdf-toc-dots"></span><span class="pdf-toc-pagenum">?</span></li>`;
    })
    .filter(Boolean)
    .join('\n    ');
  const tocPageHtml = `
<div class="pdf-toc-page">
  <h2 class="pdf-toc-heading">Inhaltsverzeichnis</h2>
  <ul class="pdf-toc-list">
    ${tocItems}
  </ul>
</div>
`;

  // Inject both pages right before <main> (the mdBook content area)
  printHtml2 = printHtml2.replace('<main>', titlePageHtml + tocPageHtml + '<main>');
  fs.writeFileSync(printHtmlPath2, printHtml2);

  if (noPdf) {
    console.log('✅  mdBook built. Skipping PDF (--no-pdf flag set).');
    console.log(`    Open: file://${BOOK_DIR}/index.html`);
    return;
  }

  // ------ 5. PDF via Playwright ------
  console.log('🖨️   Generating PDF via Playwright …');
  const PORT = 1315;
  const server = await startStaticServer(BOOK_DIR, PORT);
  const printUrl = `http://localhost:${PORT}/print.html`;

  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    const page    = await browser.newPage({ viewport: { width: 1280, height: 800 } });

    const response = await page.goto(printUrl, { waitUntil: 'networkidle' });
    if (!response || !response.ok()) {
      throw new Error(`Failed to load ${printUrl} (HTTP ${response ? response.status() : 'none'})`);
    }

    // Wait until all Mermaid containers have a rendered <svg>
    await page.waitForFunction(
      () => {
        const containers = Array.from(
          document.querySelectorAll('pre.mermaid, .mermaid, [class*="language-mermaid"]')
        );
        if (containers.length === 0) return true;
        return containers.every(el => el.querySelector('svg'));
      },
      { timeout: 120_000 }
    );

    // Fill TOC page numbers from element positions in the continuous layout.
    // A4 content height = 297mm - 15mm top - 15mm bottom = 267mm at 96 CSS px/in.
    await page.evaluate(() => {
      // --- Cap oversized mermaid SVGs to one page height ---
      const MAX_SVG_H = 240 * 96 / 25.4; // 240mm in CSS px
      document.querySelectorAll('pre.mermaid svg, .mermaid svg').forEach(svg => {
        // Ensure viewBox exists so the SVG scales proportionally
        if (!svg.getAttribute('viewBox')) {
          const w = parseFloat(svg.getAttribute('width'))  || svg.getBoundingClientRect().width;
          const h = parseFloat(svg.getAttribute('height')) || svg.getBoundingClientRect().height;
          if (w && h) svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        }
        // Remove fixed dimensions so CSS max-height / height:auto can take effect
        svg.removeAttribute('height');
        svg.removeAttribute('width');
        svg.style.height = 'auto';
        svg.style.maxHeight = MAX_SVG_H + 'px';
        svg.style.width = '100%';
      });

      function absTop(el) {
        let top = 0;
        while (el) { top += el.offsetTop; el = el.offsetParent; }
        return top;
      }
      const PAGE_H = 267 * 96 / 25.4; // ≈ 1009 CSS px per A4 content page
      const titleEl = document.querySelector('.pdf-title-page');
      const tocEl   = document.querySelector('.pdf-toc-page');
      const titleH  = titleEl ? titleEl.offsetHeight : PAGE_H;
      const tocH    = tocEl   ? tocEl.offsetHeight   : PAGE_H;
      // page-break-after:always on each cover element → each spans ceil(h/PAGE_H) pages
      const COVER_PAGES = Math.ceil(titleH / PAGE_H) + Math.ceil(tocH / PAGE_H);
      const mainEl  = document.querySelector('main');
      const mainTop = mainEl ? absTop(mainEl) : 0;
      document.querySelectorAll('[data-toc-id]').forEach(li => {
        const id     = li.getAttribute('data-toc-id');
        const target = document.getElementById(id);
        if (!target) return;
        const offsetFromMain = Math.max(0, absTop(target) - mainTop);
        const pageInContent  = Math.floor(offsetFromMain / PAGE_H) + 1;
        const span = li.querySelector('.pdf-toc-pagenum');
        if (span) span.textContent = String(pageInContent + COVER_PAGES);
      });
    });

    await page.pdf({
      path: PDF_PATH,
      printBackground: true,
      format: 'A4',
      margin: { top: '15mm', right: '12mm', bottom: '15mm', left: '12mm' },
    });

    await browser.close();
  } finally {
    server.close();
  }

  console.log(`✅  PDF written to ${PDF_PATH}`);
}

main().catch(err => {
  console.error('❌ ', err.message || err);
  process.exit(1);
});
