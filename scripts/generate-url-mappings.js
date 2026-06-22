#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Generiert eine Mapping-Datei mit translationKey -> URLs für alle Sprachversionen
 * Output: public/url-mappings.json und exports/url-mappings.json
 */

const CONTENT_DIR = path.join(__dirname, '../content');
const LANGUAGES = ['de', 'en', 'fr', 'it'];
const BASE_URL = process.env.HUGO_BASEURL || 'https://i14y-ch.github.io/handbook';

// Mapping: sprache -> slug Präfix (für Verzeichnisse)
const LANG_PATHS = {
  de: 'de',
  en: 'en',
  fr: 'fr',
  it: 'it'
};

/**
 * Extrahiert Frontmatter aus Markdown-Datei
 */
function extractFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;
    return yaml.load(match[1]);
  } catch (error) {
    console.error(`Fehler beim Lesen von ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Extrahiert alle Überschriften aus Markdown-Inhalt
 * Generiert Hugo-konforme Anker
 */
function extractHeadings(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Nur Content nach Frontmatter verarbeiten
    const contentMatch = content.match(/^---\n[\s\S]*?\n---\n([\s\S]*)/);
    if (!contentMatch) return [];
    
    const bodyContent = contentMatch[1];
    const headings = [];
    
    // Regex für Markdown-Überschriften (## H2, ### H3, etc.)
    const headingRegex = /^(#{2,6})\s+(.+?)(?:\s*{[^}]*})?$/gm;
    let match;
    
    while ((match = headingRegex.exec(bodyContent)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      
      // Anker generieren: Kleinbuchstaben, Bindestriche, keine Sonderzeichen
      const anchor = text
        .toLowerCase()
        .replace(/[^\w\s-äöüß]/g, '') // Entfernt Sonderzeichen, behält Umlaute
        .replace(/\s+/g, '-') // Leerzeichen durch Bindestriche
        .replace(/-+/g, '-'); // Mehrfache Bindestriche entfernen
      
      headings.push({
        level,
        text,
        anchor
      });
    }
    
    return headings;
  } catch (error) {
    console.error(`Fehler beim Extrahieren von Überschriften aus ${filePath}:`, error.message);
    return [];
  }
}

/**
 * Rekursiv alle Markdown-Dateien durchsuchen
 */
function findMarkdownFiles(dir, language) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && item !== 'search') {
      // search-Seiten ausschließen
      files.push(...findMarkdownFiles(fullPath, language));
    } else if (stat.isFile() && item.endsWith('.md') && item !== '_index.md') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Konstruiert die URL für eine Seite
 */
function buildUrl(language, filePath, contentDir) {
  // Relative Pfad vom content/xx/ Verzeichnis
  const langContentDir = path.join(contentDir, language);
  let relativePath = path.relative(langContentDir, filePath);

  // Windows-Pfade konvertieren
  relativePath = relativePath.replace(/\\/g, '/');

  // .md entfernen
  relativePath = relativePath.replace(/\.md$/, '');

  // index -> /
  if (relativePath.endsWith('/index') || relativePath === 'index') {
    relativePath = relativePath.replace(/\/index$|^index$/, '');
  }

  const langPrefix = LANG_PATHS[language];
  const urlPath = relativePath ? `/${langPrefix}/${relativePath}/` : `/${langPrefix}/`;

  return BASE_URL + urlPath;
}

/**
 * Hauptfunktion
 */
function generateMappings() {
  const mappings = {};

  console.log('📍 Generiere URL-Mappings...\n');

  for (const language of LANGUAGES) {
    const langDir = path.join(CONTENT_DIR, language);

    if (!fs.existsSync(langDir)) {
      console.warn(`⚠️  Sprache ${language} nicht gefunden: ${langDir}`);
      continue;
    }

    console.log(`🔍 Durchsuche ${language}...`);
    const mdFiles = findMarkdownFiles(langDir, language);

    for (const filePath of mdFiles) {
      const frontmatter = extractFrontmatter(filePath);
      if (!frontmatter) continue;

      const translationKey = frontmatter.translationKey;
      if (!translationKey) {
        console.warn(
          `⚠️  Kein translationKey in ${path.relative(CONTENT_DIR, filePath)}`
        );
        continue;
      }

      // Mapping initialisieren
      if (!mappings[translationKey]) {
        mappings[translationKey] = {
          title: {},
          slug: {},
          urls: {},
          sections: {}
        };
      }

      const url = buildUrl(language, filePath, CONTENT_DIR);
      mappings[translationKey].title[language] = frontmatter.title || '';
      mappings[translationKey].slug[language] = frontmatter.slug || '';
      mappings[translationKey].urls[language] = url;

      // Überschriften/Abschnitte extrahieren
      const headings = extractHeadings(filePath);
      if (headings.length > 0) {
        if (!mappings[translationKey].sections[language]) {
          mappings[translationKey].sections[language] = {};
        }
        
        for (const heading of headings) {
          // Nur H2 und H3 als Abschnitte
          if (heading.level <= 3) {
            const sectionUrl = `${url}#${heading.anchor}`;
            mappings[translationKey].sections[language][heading.anchor] = {
              title: heading.text,
              level: heading.level,
              url: sectionUrl
            };
          }
        }
      }

      console.log(`  ✓ ${translationKey} (${language})`);
    }
  }

  // Sortieren nach translationKey
  const sortedMappings = {};
  Object.keys(mappings)
    .sort()
    .forEach(key => {
      sortedMappings[key] = mappings[key];
    });

  return sortedMappings;
}

/**
 * Speichert Mappings in Dateien
 */
function saveMappings(mappings) {
  const json = JSON.stringify(mappings, null, 2);

  // public/url-mappings.json (wird deployed)
  const publicDir = path.join(__dirname, '../public');
  const publicFile = path.join(publicDir, 'url-mappings.json');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(publicFile, json);
  console.log(`\n✅ Gespeichert: ${publicFile}`);

  // exports/url-mappings.json (für Dokumentation/Repository)
  const exportsDir = path.join(__dirname, '../exports');
  const exportsFile = path.join(exportsDir, 'url-mappings.json');
  fs.mkdirSync(exportsDir, { recursive: true });
  fs.writeFileSync(exportsFile, json);
  console.log(`✅ Gespeichert: ${exportsFile}`);

  // Statistik
  const count = Object.keys(mappings).length;
  console.log(`\n📊 Insgesamt: ${count} eindeutige translationKeys`);
}

// Ausführung
try {
  const mappings = generateMappings();
  saveMappings(mappings);
  console.log('\n✨ URL-Mappings erfolgreich generiert!');
  process.exit(0);
} catch (error) {
  console.error('❌ Fehler:', error);
  process.exit(1);
}
