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
                מתאים לעבודה משרדית ושימוש ביתי.
            `,
            specs: [
                "שבב Apple M3",
                "8GB RAM",
                "256GB SSD",
                "מסך 24 אינץ' 4.5K Retina",
                "מצלמת FaceTime HD 1080p"
            ]
        }
    ],
    ipad: [
        {
            id: 3,
            name: "iPad Pro 12.9″",
            description: "M2, 256GB, Wi-Fi",
            price: "₪4,999",
            image: "/api/placeholder/200/200",
            fullDescription: `
                iPad Pro 12.9″ עם שבב M2 מספק ביצועים חזקים במיוחד. 
                מסך Liquid Retina XDR עם ProMotion לחוויית משתמש מושלמת.
                אידיאלי לאמנים, מעצבים ואנשי מקצוע.
            `,
            specs: [
                "שבב Apple M2",
                "256GB אחסון",
                "Wi-Fi 6E",
                "מסך Liquid Retina XDR",
                "תמיכה ב-Apple Pencil דור 2"
            ]
        }
    ],
    iphone: [
        {
            id: 4,
            name: "iPhone 15 Pro",
            description: "256GB, כחול טיטניום",
            price: "₪5,499",
            image: "/group14/img/iphone16.jpeg",
            fullDescription: `
                iPhone 15 Pro מציע חווית צילום מקצועית עם מערך מצלמות משולש.
                מסגרת טיטניום חזקה ועמידה, שבב A17 Pro לביצועים מעולים.
                כולל חיבור USB-C ותמיכה בטעינה מהירה.
            `,
            specs: [
                "שבב A17 Pro",
                "256GB אחסון",
                "מסך Super Retina XDR",
                "מערך מצלמות Pro",
                "סוללה ליום שלם"
            ]
        }
    ],
    watch: [
        {
            id: 5,
            name: "Apple Watch Series 9",
            description: "45mm GPS + Cellular",
            price: "₪2,499",
            image: "/api/placeholder/200/200",
            fullDescription: `
                Apple Watch Series 9 עם מעבד S9 חדש ומסך בהיר במיוחד.
                מעקב בריאות מתקדם, GPS מדויק ותמיכה בסלולר.
                עיצוב אלגנטי ועמידות למים.
            `,
            specs: [
                "מעבד S9",
                "מסך Always-On Retina",
                "חיישן דופק חשמלי",
                "GPS + Cellular",
                "עמידות למים עד 50 מטר"
            ]
        }
    ],
    accessories: [
        {
            id: 6,
            name: "AirPods Pro",
            description: "דור שני עם MagSafe",
            price: "₪999",
            image: "/api/placeholder/200/200",
            fullDescription: `
                AirPods Pro דור 2 עם ביטול רעשים אקטיבי משופר.
                סאונד מרחבי עם מעקב תנועת ראש דינמי.
                נוחות מרבית לשימוש ממושך.
            `,
            specs: [
                "שבב H2",
                "ביטול רעשים אקטיבי",
                "מצב שקיפות משופר",
                "סאונד מרחבי",
                "עמידות למים ואבק IPX4"
            ]
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
    if (!productGrid) {
        console.error('Product grid element not found');
        return;
    }

    const products = productData[category];
    if (!products) {
        productGrid.innerHTML = '<div class="error-message">קטגוריה לא נמצאה</div>';
        return;
    }

    productGrid.innerHTML = products.map(createProductCard).join('');

    // Add click event listeners to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            navigateToProductPage(category, productId);
        });
    });

    // Update navigation highlighting
    updateNavigationHighlight(category);
}

// Function to navigate to the product details page
function navigateToProductPage(category, productId) {
    window.location.href = `/group14/pages/product.html?category=${category}&id=${productId}`;
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

// Function to get product details
export async function getProductDetails(category, productId) {
    if (!productData[category]) {
        throw new Error(`Category '${category}' not found`);
    }

    const product = productData[category].find(p => p.id === parseInt(productId));
    if (!product) {
        throw new Error(`Product with ID ${productId} not found in category ${category}`);
    }

    return product;
}

// Helper function to get URL parameters
export function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category') || 'mac',
        productId: params.get('id')
    };
}

// Function to handle errors
export function handleError(message, container) {
    console.error(message);
    if (container) {
        container.innerHTML = `
            <div class="error-message">
                <h2>שגיאה</h2>
                <p>${message}</p>
                <a href="/group14/pages/products.html" class="btn-secondary">חזור לדף הראשי</a>
            </div>
        `;
    }
}