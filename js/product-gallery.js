// Product data organized by category
const productData = {
    mac: [
        {
            id: 1,
            name: "MacBook Pro 14″",
            description: "M3 Pro, 18GB RAM, 512GB SSD",
            price: "₪7,999",
            image: "/group14/img/macbook.webp",
            fullDescription: `
                MacBook Pro 14″ עם שבב M3 Pro מציע ביצועים מרשימים ויכולות עיבוד מתקדמות. 
                מסך Liquid Retina XDR מספק איכות תצוגה מעולה, עם 18GB זיכרון RAM ו-512GB אחסון SSD.
                מושלם למשתמשי מקצוע בתחומי עיצוב, עריכת וידאו ועבודות דרישנות.
            `,
            specs: [
                "שבב Apple M3 Pro",
                "18GB RAM",
                "512GB SSD",
                "מסך 14.2 אינץ' Liquid Retina XDR",
                "כולל 3 יציאות Thunderbolt 4"
            ]
        },
        {
            id: 2,
            name: "iMac 24″",
            description: "M3, 8GB RAM, 256GB SSD",
            price: "₪5,999",
            image: "/group14/img/imac.jpg",
            fullDescription: `
                iMac 24″ מציג עיצוב דק ומודרני עם שבב M3 מהדור החדש. 
                מסך 4.5K Retina מספק צבעים חיים ופרטים מדויקים. 
                מתאים לע
            `
        }
    ],
    ipad: [
        {
            id: 3,
            name: "iPad Pro 12.9″",
            description: "M2, 256GB, Wi-Fi",
            price: "₪4,999",
            image: "/api/placeholder/200/200"
        }
    ],
    iphone: [
        {
            id: 4,
            name: "iPhone 15 Pro",
            description: "256GB, כחול טיטניום",
            price: "₪5,499",
            image: "/api/placeholder/200/200"
        }
    ],
    watch: [
        {
            id: 5,
            name: "Apple Watch Series 9",
            description: "45mm GPS + Cellular",
            price: "₪2,499",
            image: "/api/placeholder/200/200"
        }
    ],
    accessories: [
        {
            id: 6,
            name: "AirPods Pro",
            description: "דור שני עם MagSafe",
            price: "₪999",
            image: "/api/placeholder/200/200"
        }
    ]
};

// Function to create a product card
function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
        </div>
    `;
}

// Function to display products for a category
export function displayProducts(category) {
    const productGrid = document.getElementById('productGrid');
    const products = productData[category] || [];

    productGrid.innerHTML = products.map(createProductCard).join('');

    // Add click event listeners to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            console.log("Clicked on productId:", productId)
            navigateToProductPage(category, productId);
        });
    });

    // Highlight the current category in the navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.href.includes(category + '.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function navigateToProductPage(category, productId) {
    // Navigate to the dedicated product page
    window.location.href = `/group14/pages/${category}-product.html?id=${productId}`;
}

export async function getProductDetails(category, productId) {
    const products = productData[category];
    const product = products.find(p => p.id === parseInt(productId));
    return product || null;
}