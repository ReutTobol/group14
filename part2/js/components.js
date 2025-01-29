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