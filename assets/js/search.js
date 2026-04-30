// Wait for Lunr to be available, then initialize search
function initializeSearch() {
  if (typeof lunr === 'undefined') {
    // Lunr not ready yet, retry in 100ms
    setTimeout(initializeSearch, 100);
    return;
  }

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (!searchInput) return;
  
  const searchUrl = searchInput.getAttribute('data-search-url');
  
  let searchIndex = null;
  let searchData = {};

  function formatPathFallback(url) {
    const cleaned = (url || '')
      .replace(/^\/+|\/+$/g, '')
      .split('/')
      .filter(Boolean);

    if (cleaned.length === 0) return '';

    const languageCodes = new Set(['de', 'fr', 'it', 'en']);
    const relevantParts = languageCodes.has(cleaned[0]) ? cleaned.slice(1) : cleaned;

    return relevantParts
      .map(part => decodeURIComponent(part).replace(/-/g, ' '))
      .join(' › ');
  }
  
  // Fetch the search index
  fetch(searchUrl)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      searchData = {};
      const documents = [];
      
      data.forEach((page, idx) => {
        searchData[idx] = page;
        documents.push({
          id: idx.toString(),
          title: page.title,
          body: page.content,
          keywords: page.keywords
        });
      });
      
      // Build Lunr index
      searchIndex = lunr(function() {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('keywords', { boost: 5 });
        this.field('body');
        
        documents.forEach(doc => {
          this.add(doc);
        });
      });
    })
    .catch(err => console.error('Error loading search index:', err));
  
  // Search handler
  searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    
    if (!query || !searchIndex) {
      searchResults.style.display = 'none';
      return;
    }
    
    const results = searchIndex.search(query);
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      searchResults.style.display = 'block';
      return;
    }
    
    const resultsHtml = results
      .slice(0, 10)
      .map(result => {
        const page = searchData[result.ref];
        const location = page.breadcrumbs || formatPathFallback(page.url);
        return `
          <a href="${page.url}" class="search-result-item">
            <div class="search-result-title">${page.title}</div>
            <div class="search-result-location">${location}</div>
            <div class="search-result-description">${page.description || page.content.substring(0, 175)}...</div>
          </a>
        `;
      })
      .join('');
    
    searchResults.innerHTML = resultsHtml;
    searchResults.style.display = 'block';
  });
  
  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#search-box')) {
      searchResults.style.display = 'none';
    }
  });
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSearch);
} else {
  initializeSearch();
}
