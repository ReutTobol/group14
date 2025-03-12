async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    let html = await response.text();

    // Check if we're in the pages directory or root
    const path = window.location.pathname;
    const isInPagesDir = path.includes("/pages/");
    const isRoot =
      path === "/" || path.endsWith("/part2/") || path.endsWith("/part2");
    const prefix = isInPagesDir ? ".." : ".";

    // Replace the prefix placeholder
    html = html.replace(/\{\{prefix\}\}/g, prefix);

    // Handle navigation paths
    if (isInPagesDir) {
      html = html.replace(/href="([^"\/]*)\.html/g, 'href="$1.html');
      html = html.replace(/href="index\.html/g, 'href="../index.html"');
    } else {
      html = html.replace(
        /href="(?!index\.)([^"\/]*)\.html/g,
        'href="pages/$1.html'
      );
    }

    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error loading component:", error);
    return false;
  }
}

async function checkAuthState() {
  try {
    const authLinks = document.querySelector(".auth-links");
    const userMenu = document.querySelector(".user-menu");

    if (!authLinks || !userMenu) {
      console.warn("Auth elements not found, retrying...");
      return false;
    }

    // Hide login link if we're on the login page
    const isLoginPage = window.location.pathname.includes("login.html");
    if (isLoginPage) {
      authLinks.style.display = "none";
      return true;
    }

    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      authLinks.style.display = "none";
      userMenu.classList.remove("hidden");

      const userName = userMenu.querySelector(".user-name");
      if (userName) {
        userName.textContent = `${user.firstName} ${user.lastName}`;
      }

      const logoutBtn = userMenu.querySelector(".logout-btn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
          try {
            localStorage.removeItem("user");
            window.location.reload();
          } catch (error) {
            console.error("Logout failed:", error);
          }
        });
      }
    } else {
      authLinks.style.display = "block";
      userMenu.classList.add("hidden");
    }
    return true;
  } catch (error) {
    console.error("Error checking auth state:", error);
    return false;
  }
}

async function initializeHeaderEvents() {
  // Logo navigation
  const logo = document.querySelector(".text-logo");
  if (logo) {
    logo.addEventListener("click", () => {
      const path = window.location.pathname;
      const isInPagesDir = path.includes("/pages/");
      const isInPart2 = path.includes("/part2/");

      if (isInPagesDir) {
        window.location.href = "../index.html";
      } else if (isInPart2) {
        window.location.href = "./index.html";
      } else {
        window.location.href = "/index.html";
      }
    });
  }

  // Add mobile menu button
  const nav = document.querySelector(".nav-container");
  const menuButton = document.createElement("button");
  menuButton.className = "menu-button";
  menuButton.innerHTML = "☰";
  nav.appendChild(menuButton);

  // Mobile menu toggle
  const navLinks = document.querySelector(".nav-links");
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuButton.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuButton.innerHTML = "☰";
    }
  });
}

async function setupUserMenu() {
  const userMenu = document.querySelector(".user-menu");
  if (!userMenu) return;

  userMenu.addEventListener("click", (e) => {
    const dropdown = userMenu.querySelector(".dropdown-content");
    dropdown.classList.toggle("show");
    e.stopPropagation();
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    const dropdown = userMenu.querySelector(".dropdown-content");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  });
}

async function loadHeader() {
  try {
    const path = window.location.pathname;
    const isInPagesDir = path.includes("/pages/");
    const componentPath = isInPagesDir
      ? "../components/header.html"
      : "components/header.html";

    // Load the header component
    const loaded = await loadComponent("header-component", componentPath);
    if (!loaded) {
      console.error("Failed to load header component");
      return;
    }

    // Initialize components with retry mechanism
    let retries = 0;
    const maxRetries = 3;

    const initializeComponents = async () => {
      const authInitialized = await checkAuthState();
      if (!authInitialized && retries < maxRetries) {
        retries++;
        setTimeout(initializeComponents, 100 * retries); // Exponential backoff
        return;
      }

      await initializeHeaderEvents();
      setupUserMenu();
    };

    await initializeComponents();
  } catch (error) {
    console.error("Error loading header:", error);
  }
}

// Initialize if this script is loaded directly
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadHeader);
} else {
  loadHeader();
}

// Export the functions
export { loadHeader, loadComponent, checkAuthState };
