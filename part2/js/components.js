// Function to load a component
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        let html = await response.text();

        // Check if we're in the pages directory or root
        const path = window.location.pathname;
        const isInPagesDir = path.includes('/pages/');
        const isRoot = path === '/' || path.endsWith('/part2/') || path.endsWith('/part2');
        const prefix = isInPagesDir ? '..' : '.';

        // Replace the prefix placeholder
        html = html.replace(/\{\{prefix\}\}/g, prefix);

        // Handle navigation paths
        if (isInPagesDir) {
            html = html.replace(/href="([^"\/]*)\.html/g, 'href="$1.html');
            html = html.replace(/href="index\.html/g, 'href="../index.html"');
        } else {
            html = html.replace(/href="(?!index\.)([^"\/]*)\.html/g, 'href="pages/$1.html');
        }

        // Insert the HTML first
        document.getElementById(elementId).innerHTML = html;

        // Return true to indicate successful loading
        return true;
    } catch (error) {
        console.error("Error loading component:", error);
        return false;
    }
}

// Function to initialize header events
function initializeHeaderEvents() {
    // Menu button functionality
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Logo navigation
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", () => {
            const isInPagesDir = window.location.pathname.includes('/pages/');
            window.location.href = isInPagesDir ? "../index.html" : "index.html";
        });
    }

    // Check authentication state after elements are loaded
    checkAuthState();
}

// Function to check authentication state
async function checkAuthState() {
    // Wait for elements to be available
    const authLinks = document.querySelector('.auth-links');
    const userMenu = document.querySelector('.user-menu');
    
    // Check if elements exist before proceeding
    if (!authLinks || !userMenu) {
        console.error('Required elements not found');
        return;
    }
    
    try {
        let user = JSON.parse(localStorage.getItem('user'));
        
        if (user) {
            // User is authenticated
            authLinks.style.display = 'none'; // Hide login link
            userMenu.style.display = 'flex'; // Show user menu
            
            const dropdownContent = userMenu.querySelector('.dropdown-content');
            const userName = dropdownContent.querySelector('.user-name');
            userName.textContent = `${user.firstName} ${user.lastName}`;
            
            // Toggle dropdown on user icon click
            const userIcon = userMenu.querySelector('.user-icon');
            userIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdownContent.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                dropdownContent.classList.remove('show');
            });
            
            // Setup logout handler
            const logoutBtn = userMenu.querySelector('.logout-btn');
            logoutBtn.addEventListener('click', async () => {
                try {
                    const response = await fetch('http://localhost:5000/api/logout', {
                        method: 'POST',
                        credentials: 'include'
                    });
                    
                    if (response.ok) {
                        localStorage.removeItem('user');
                        window.location.reload();
                    }
                } catch (error) {
                    console.error('Logout failed:', error);
                }
            });
        } else {
            // User is not authenticated
            authLinks.style.display = 'block'; // Show login link
            userMenu.style.display = 'none'; // Hide user menu
        }
    } catch (error) {
        console.error('Error checking auth state:', error);
        // On error, show login link
        authLinks.style.display = 'block';
        userMenu.style.display = 'none';
    }
}

// Function to load header
async function loadHeader() {
    try {
        const path = window.location.pathname;
        const isInPagesDir = path.includes('/pages/');
        const componentPath = isInPagesDir ? '../components/header.html' : 'components/header.html';
        
        // Wait for component to load before initializing events
        const loaded = await loadComponent('header-component', componentPath);
        if (loaded) {
            initializeHeaderEvents();
        }
    } catch (error) {
        console.error("Error loading header:", error);
        const headerComponent = document.getElementById("header-component");
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
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadHeader);
} else {
    loadHeader();
}

// Export functions
window.loadComponent = loadComponent;
window.initializeHeaderEvents = initializeHeaderEvents;
window.loadHeader = loadHeader;