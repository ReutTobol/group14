let searchTimeout;
const searchDelay = 300;

export function initializeSearch() {
    const searchBar = document.querySelector('.search-bar');
    if (!searchBar) return;

    // Create results container with updated structure
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    resultsContainer.innerHTML = `
        <div class="search-results-header">
            <span class="search-results-title">תוצאות חיפוש</span>
            <button class="close-search">&times;</button>
        </div>
        <div class="search-results-content"></div>
    `;
    
    // Append to search container
    const searchContainer = searchBar.parentNode;
    searchContainer.style.position = 'relative'; // Ensure relative positioning
    searchContainer.appendChild(resultsContainer);

    // Handle search input
    searchBar.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(async () => {
            const query = e.target.value.trim();
            
            if (query.length >= 2) {
                try {
                    const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`);
                    if (!response.ok) throw new Error('Search failed');
                    
                    const results = await response.json();
                    displayResults(results, resultsContainer.querySelector('.search-results-content'));
                    showSearchResults();
                } catch (error) {
                    console.error('Search error:', error);
                }
            } else {
                hideSearchResults();
            }
        }, searchDelay);
    });

    // Close search when clicking the close button
    resultsContainer.querySelector('.close-search').addEventListener('click', hideSearchResults);

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSearchResults();
        }
    });
}

function getProductPath() {
    const path = window.location.pathname;
    
    // Check if we're in the pages directory
    if (path.includes('/pages/')) {
        return './product.html'; // We're already in pages directory
    } 
    // Check if we're in part2 root
    else if (path.includes('/part2/') || path.endsWith('/part2') || path === '/') {
        return 'pages/product.html'; // We need to go into pages directory
    }
    // Fallback
    return 'pages/product.html';
}

function displayResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<div class="no-results">לא נמצאו תוצאות</div>';
        return;
    }

    const productPath = getProductPath();

    container.innerHTML = results.map(product => `
        <a href="${productPath}?id=${product.id}&category=${product.category}" class="search-result-item">
            <div class="search-result-info">
                <div class="search-result-name">${product.name} - ₪${product.price.toLocaleString()}</div>
            </div>
        </a>
    `).join('');
}

function showSearchResults() {
    const results = document.querySelector('.search-results');
    if (results) {
        results.style.display = 'block';
    }
}

function hideSearchResults() {
    const results = document.querySelector('.search-results');
    if (results) {
        results.style.display = 'none';
    }
}