const products = {
    mac: [
        {
            id: 'macbook-pro-14',
            name: 'MacBook Pro 14"',
            price: '7,999₪',
            image: '../img/products/macbook-pro-14.jpg',
            description: 'מחשב נייד חזק במיוחד עם שבב M2 Pro',
            specs: [
                'שבב M2 Pro',
                'מסך Liquid Retina XDR',
                'זיכרון 16GB',
                'אחסון 512GB'
            ]
        },
        // Add more Mac products
    ],
    ipad: [
        // iPad products
    ],
    iphone: [
        // iPhone products
    ],
    watch: [
        // Watch products
    ],
    accessories: [
        // Accessories
    ]
};

// Initialize product gallery
function initProductGallery() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    const category = window.location.pathname.split('/').pop().replace('.html', '');
    const categoryProducts = products[category] || [];

    productGrid.innerHTML = categoryProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price}</div>
            </div>
        </div>
    `).join('');

    // Add click handlers to product cards
    productGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

// Initialize product details page
function initProductDetails() {
    const productContent = document.querySelector('.product-content');
    if (!productContent) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Find product in all categories
    let product;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }

    if (!product) return;

    productContent.innerHTML = `
        <div class="product-gallery">
            <img src="${product.image}" alt="${product.name}" class="main-image">
        </div>
        <div class="product-details">
            <h1 class="product-title">${product.name}</h1>
            <p class="product-description">${product.description}</p>
            <div class="product-specs">
                ${product.specs.map(spec => `<div>${spec}</div>`).join('')}
            </div>
            <div class="product-price-large">${product.price}</div>
            <button class="add-to-cart">הוסף לסל</button>
        </div>
    `;
}


// Search functionality
function initSearch() {
    const searchBar = document.querySelector('.search-bar');
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'search-results';
    searchBar.parentNode.appendChild(searchResultsContainer);

    // Add search results styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .search-results {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
        }
        .search-result-item {
            padding: 10px;
            cursor: pointer;
            border-bottom: 1px solid #eee;
        }
        .search-result-item:hover {
            background-color: #f5f5f5;
        }
        .no-results {
            padding: 10px;
            text-align: center;
            color: #666;
        }
    `;
    document.head.appendChild(style);

    // Search handler
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        if (searchTerm.length < 2) {
            searchResultsContainer.style.display = 'none';
            return;
        }

        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );

        displaySearchResults(results, searchResultsContainer);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && !searchResultsContainer.contains(e.target)) {
            searchResultsContainer.style.display = 'none';
        }
    });

    // Focus handler to show results again
    searchBar.addEventListener('focus', (e) => {
        if (e.target.value.length >= 2) {
            searchResultsContainer.style.display = 'block';
        }
    });
}

// Display search results
function displaySearchResults(results, container) {
    container.style.display = 'block';

    if (results.length === 0) {
        container.innerHTML = '<div class="no-results">לא נמצאו תוצאות</div>';
        return;
    }

    container.innerHTML = results.map(product => `
        <div class="search-result-item" data-url="${product.url}">
            ${product.name} - ${product.category}
        </div>
    `).join('');

    // Add click handlers to search results
    container.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const isInPagesDir = window.location.pathname.includes('/pages/');
            const basePath = isInPagesDir ? '../' : '';
            const url = item.getAttribute('data-url');
            window.location.href = `${basePath}${url}`;
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuButton.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
}


// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initMobileMenu();
    initProductGallery();
    initProductDetails();
});