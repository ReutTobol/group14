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

function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  if (!cartCount) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  if (totalItems > 0) {
    cartCount.textContent = totalItems;
    cartCount.classList.remove("hidden");
  } else {
    cartCount.classList.add("hidden");
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
  menuButton.className = "mobile-menu-button";
  menuButton.setAttribute('aria-label', 'Toggle menu');
  menuButton.innerHTML = "☰";
  nav.appendChild(menuButton);

  const navLinks = document.querySelector(".nav-links");
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuButton.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuButton.innerHTML = "☰";
    }
  });

  updateCartCount();

  window.addEventListener("storage", (e) => {
    if (e.key === "cart") {
      updateCartCount();
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

  document.addEventListener("click", () => {
    const dropdown = userMenu.querySelector(".dropdown-content");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  });

  const editBtn = userMenu.querySelector(".edit-account-btn");
  const modal = document.getElementById("account-modal");
  const form = document.getElementById("update-account-form");


  // Update the modal and form handling
  editBtn.addEventListener("click", async () => {
    // Just open the modal with empty form initially
    modal.classList.remove('hidden');
    
    // Get current user data from localStorage for initial values
    const currentUser = JSON.parse(localStorage.getItem('user')) || {};
    
    // Populate form with current data
    form.firstName.value = currentUser.firstName || '';
    form.lastName.value = currentUser.lastName || '';
    form.phone.value = currentUser.phone || '';
    form.address.value = currentUser.address || '';
    form.zipCode.value = currentUser.zipCode || '';
    form.shippingNotes.value = currentUser.shippingNotes || '';
    form.newsletter.checked = currentUser.newsletter || false;
  });

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get current user from localStorage
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (!currentUser || !currentUser._id) {
      alert('Please log in first');
      return;
    }

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      address: form.address.value,
      zipCode: form.zipCode.value,
      shippingNotes: form.shippingNotes.value,
      newsletter: form.newsletter.checked
    };

    try {
      const response = await fetch(`/api/user/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          // Update displayed user name
          const userName = userMenu.querySelector(".user-name");
          if (userName) {
            userName.textContent = `${formData.firstName} ${formData.lastName}`;
          }
          modal.classList.add('hidden');
          alert('הפרטים עודכנו בהצלחה!');
          
          // Update local storage with new user data
          const updatedUser = { ...currentUser, ...formData };
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
      } else {
        // Show verification message for any error
        alert('התקשר לעסק על מנת לוודא את פרטיך');
      }
    } catch (error) {
      console.error('Error updating account:', error);
      alert('התקשר לעסק על מנת לוודא את פרטיך');
    }
  });

  // Add modal close button handler
  const closeModal = modal.querySelector(".close-modal");
  closeModal.addEventListener("click", () => {
    modal.classList.add('hidden');
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  const viewOrdersBtn = userMenu.querySelector(".view-orders-btn");
  const ordersModal = document.getElementById("orders-modal");
  const ordersCloseModal = ordersModal.querySelector(".close-modal");
  const ordersList = document.getElementById("orders-list");

  async function loadUserOrders() {
    try {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      if (!currentUser || !currentUser.email) {
        alert('Please log in first');
        return;
      }

      const response = await fetch(`/api/user-orders/${currentUser.email}`);
      const orders = await response.json();

      if (Array.isArray(orders)) {
        ordersList.innerHTML = orders.map(order => `
          <div class="order-item">
            <span class="order-number">הזמנה מספר: ${order.order_number}</span>
            <button class="cancel-order-btn" data-order-id="${order._id}">
              ביטול הזמנה
            </button>
          </div>
        `).join('') || '<p>לא נמצאו הזמנות</p>';

        const cancelButtons = ordersList.querySelectorAll('.cancel-order-btn');
        cancelButtons.forEach(button => {
          button.addEventListener('click', async () => {
            if (confirm('האם אתה בטוח שברצונך לבטל את ההזמנה?')) {
              const orderId = button.dataset.orderId;
              try {
                const response = await fetch(`/api/orders/${orderId}`, {
                  method: 'DELETE'
                });

                if (response.ok) {
                  button.closest('.order-item').remove();
                  if (!ordersList.children.length) {
                    ordersList.innerHTML = '<p>לא נמצאו הזמנות</p>';
                  }
                  alert('ההזמנה בוטלה בהצלחה');
                } else {
                  alert('אירעה שגיאה בביטול ההזמנה');
                }
              } catch (error) {
                console.error('Error canceling order:', error);
                alert('אירעה שגיאה בביטול ההזמנה');
              }
            }
          });
        });
      }
    } catch (error) {
      console.error('Error loading orders:', error);
      ordersList.innerHTML = '<p>אירעה שגיאה בטעינת ההזמנות</p>';
    }
  }

  viewOrdersBtn.addEventListener("click", async () => {
    ordersModal.classList.remove('hidden');
    await loadUserOrders();
  });

  ordersCloseModal.addEventListener("click", () => {
    ordersModal.classList.add('hidden');
  });

  window.addEventListener("click", (e) => {
    if (e.target === ordersModal) {
      ordersModal.classList.add('hidden');
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

    let retries = 0;
    const maxRetries = 3;

    const initializeComponents = async () => {
      const authInitialized = await checkAuthState();
      if (!authInitialized && retries < maxRetries) {
        retries++;
        setTimeout(initializeComponents, 100 * retries); 
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
