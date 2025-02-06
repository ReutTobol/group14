// Function to load a component
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        let html = await response.text();
        
        // Check if we're in the pages directory
        const isInPagesDir = window.location.pathname.includes('/pages/');
        const prefix = isInPagesDir ? '..' : '.';
        
        // Replace image and link paths based on current location
        if (isInPagesDir) {
            // In pages directory
            html = html.replace(/href="([^"]*)\.html/g, 'href="$1.html');
        } else {
            // In root directory
            html = html.replace(/href="([^"]*)\.html/g, 'href="pages/$1.html');
        }
        
        // Replace the prefix placeholder for images
        html = html.replace(/\{\{prefix\}\}/g, prefix);
        
        document.getElementById(elementId).innerHTML = html;
        initializeHeaderEvents();
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Function to initialize header events
function initializeHeaderEvents() {
    // Existing menu button functionality
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Logo navigation functionality
    const logo = document.querySelector('.logo');
    const appleReseller = document.querySelector('.auth-reseller');

    [logo, appleReseller].forEach(element => {
        if (element) {
            element.style.cursor = 'pointer';
            element.addEventListener('click', () => {
                const isInPagesDir = window.location.pathname.includes('/pages/');
                window.location.href = isInPagesDir ? '../index.html' : 'index.html';
            });
        }
    });
}

// Function to load header component
async function loadHeader() {
    try {
        const response = await fetch('../components/header.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        const headerComponent = document.getElementById('header-component');
        if (headerComponent) {
            headerComponent.innerHTML = content;
        } else {
            console.error('Header component element not found');
        }
    } catch (error) {
        console.error('Error loading header:', error);
        const headerComponent = document.getElementById('header-component');
        if (headerComponent) {
            headerComponent.innerHTML = `
                <div class="error-message">
                    <p>שגיאה בטעינת התפריט</p>
                </div>
            `;
        }
    }
}

// Initialize if this script is loaded directly
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}

window.loadComponent = loadComponent;
window.initializeHeaderEvents = initializeHeaderEvents; 
window.loadHeader = loadHeader;
