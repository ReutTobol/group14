// Define the backend server URL
const API_BASE_URL = 'http://localhost:5000';

// Function to format price in Israeli Shekels
function formatPrice(price) {
    return `₪${price.toLocaleString()}`;
}

// Function to get base price plus storage price
function calculateTotalPrice(basePrice, storageOption) {
    const storagePrice = storageOption ? storageOption.priceAdd : 0;
    return basePrice + storagePrice;
}

// Function to create a product card
function createProductCard(product, category) {
    // Pre-fetch the image
    const img = new Image();
    img.src = `${API_BASE_URL}${product.image}`;
    
    const hasColorOptions = product.colors && product.colors.length > 0;
    const hasStorageOptions = product.storage && product.storage.length > 0;

    const optionsHtml = (hasColorOptions || hasStorageOptions) ? `
        <div class="product-options">
            ${hasColorOptions ? `
                <div class="color-preview">
                    ${product.colors.slice(0, 3).map(color => `
                        <span class="color-dot" style="background-color: ${color.value}" title="${color.name}"></span>
                    `).join('')}
                    ${product.colors.length > 3 ? `
                        <span class="color-more">+${product.colors.length - 3}</span>
                    ` : ''}
                </div>
            ` : ''}
            ${hasStorageOptions ? `
                <div class="storage-preview">
                    <span>${product.storage[0].size}</span>
                    ${product.storage.length > 1 ? `
                        <span class="storage-separator">-</span>
                        <span>${product.storage[product.storage.length - 1].size}</span>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    ` : '';

    return `
        <div class="product-card" data-product-id="${product._id}">
            <div class="product-image">
                <img src="${API_BASE_URL}${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${optionsHtml}
                <p class="product-price">${formatPrice(product.basePrice)}</p>
            </div>
        </div>
    `;
}

// Function to handle API errors
function handleApiError(error) {
    console.error('API Error:', error);
    if (error.response) {
        // Server responded with an error status
        return `שגיאת שרת: ${error.response.status}`;
    } else if (error.request) {
        // Request was made but no response received
        return 'לא ניתן להתחבר לשרת. אנא בדוק את החיבור שלך.';
    } else {
        // Something else went wrong
        return 'שגיאה בלתי צפויה. אנא נסה שוב מאוחר יותר.';
    }
}

// Function to display products for a category
export async function displayProducts(category) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) {
        console.error('Product grid element not found');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/products/${category}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        
        if (!products || products.length === 0) {
            productGrid.innerHTML = '<div class="error-message">לא נמצאו מוצרים בקטגוריה זו</div>';
            return;
        }

        productGrid.innerHTML = products.map(product => createProductCard(product, category)).join('');
        
        // Add click event listeners
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const productId = card.dataset.productId;
                navigateToProductPage(category, productId);
            });
        });

        updateNavigationHighlight(category);
    } catch (error) {
        const errorMessage = handleApiError(error);
        productGrid.innerHTML = `<div class="error-message">${errorMessage}</div>`;
    }
}

// Function to get product details
export async function getProductDetails(category, productId) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/product/${category}/${productId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        const errorMessage = handleApiError(error);
        throw new Error(errorMessage);
    }
}

// Function to navigate to product details page
function navigateToProductPage(category, productId) {
    window.location.href = `../pages/product.html?category=${category}&id=${productId}`;
}

// Function to update navigation highlighting
function updateNavigationHighlight(currentCategory) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(`category=${currentCategory}`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Helper function to get URL parameters
export function getUrlParams() {
    try {
        const params = new URLSearchParams(window.location.search);
        return {
            category: params.get('category') || 'mac',
            productId: params.get('id')
        };
    } catch (error) {
        console.error('Error parsing URL parameters:', error);
        return { category: 'mac', productId: null };
    }
}

// Function to handle errors
export function handleError(message, container) {
    console.error(message);
    if (container) {
        container.innerHTML = `
            <div class="error-message">
                <h2>שגיאה</h2>
                <p>${message}</p>
                <a href="../pages/products.html" class="btn-secondary">חזור לדף הראשי</a>
            </div>
        `;
    }
}

// Update product page with details and options
export function updateProductPage(product) {
    try {
        document.getElementById('product-image').src = `${API_BASE_URL}${product.image}`;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.fullDescription || product.description;
        document.getElementById('product-price').textContent = formatPrice(product.basePrice);

        // Add color options if available
        const colorOptions = document.getElementById('color-options');
        const colorGroup = colorOptions?.closest('.option-group');
        if (colorGroup && product.colors && product.colors.length > 0) {
            colorOptions.innerHTML = product.colors.map((color, index) => `
                <div class="color-option ${index === 0 ? 'selected' : ''}" data-color="${color.name}">
                    <span class="color-swatch" style="background-color: ${color.value}"></span>
                    <span>${color.name}</span>
                </div>
            `).join('');

            // Add click handlers for color options
            colorOptions.querySelectorAll('.color-option').forEach(option => {
                option.addEventListener('click', () => {
                    colorOptions.querySelectorAll('.color-option').forEach(opt =>
                        opt.classList.remove('selected')
                    );
                    option.classList.add('selected');

                    // Update selected color in current product
                    if (window.currentProduct) {
                        window.currentProduct.selectedColor = option.dataset.color;
                    }
                });
            });
        } else if (colorGroup) {
            colorGroup.style.display = 'none';
        }

        // Add storage options if available
        const storageOptions = document.getElementById('storage-options');
        const storageGroup = storageOptions?.closest('.option-group');
        if (storageGroup && product.storage && product.storage.length > 0) {
            storageOptions.innerHTML = product.storage.map((storage, index) => `
                <div class="storage-option ${index === 0 ? 'selected' : ''}" 
                     data-storage="${storage.size}" 
                     data-price-add="${storage.priceAdd}">
                    <span class="storage-size">${storage.size}</span>
                    <span class="storage-price">
                        ${storage.priceAdd > 0 ? `+${formatPrice(storage.priceAdd)}` : 'כלול'}
                    </span>
                </div>
            `).join('');

            // Add click handlers for storage options
            storageOptions.querySelectorAll('.storage-option').forEach(option => {
                option.addEventListener('click', () => {
                    storageOptions.querySelectorAll('.storage-option').forEach(opt =>
                        opt.classList.remove('selected')
                    );
                    option.classList.add('selected');

                    // Update price based on selected storage
                    const priceAdd = parseInt(option.dataset.priceAdd) || 0;
                    const totalPrice = product.basePrice + priceAdd;
                    document.getElementById('product-price').textContent = formatPrice(totalPrice);

                    // Update selected storage in current product
                    if (window.currentProduct) {
                        window.currentProduct.selectedStorage = option.dataset.storage;
                        window.currentProduct.currentPrice = formatPrice(totalPrice);
                    }
                });
            });
        } else if (storageGroup) {
            storageGroup.style.display = 'none';
        }

        // Update specifications list
        const specsList = document.getElementById('product-specs');
        if (specsList && product.specs) {
            specsList.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');
        }

        // Store current product data globally
        window.currentProduct = {
            ...product,
            selectedColor: product.colors?.[0]?.name || null,
            selectedStorage: product.storage?.[0]?.size || null,
            currentPrice: formatPrice(product.basePrice),
            totalPrice: product.basePrice
        };
    } catch (error) {
        handleError('שגיאה בטעינת פרטי המוצר', document.querySelector('.product-page-container'));
    }
}
