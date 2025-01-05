// Function to load components
async function loadComponent(elementId, componentPath, basePath = '') {
    try {
        const response = await fetch(componentPath);
        let html = await response.text();

        // Replace base path placeholder
        html = html.replace(/{{group14}}/g, basePath);

        document.getElementById(elementId).innerHTML = html;

        // Reinitialize any necessary event listeners
        initializeHeaderEvents();
    } catch (error) {
        console.error('Error loading component:', error);
    }
}


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