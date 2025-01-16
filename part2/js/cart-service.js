// cart-service.js
export const CartService = {
    getCart() {
        try {
            const cart = localStorage.getItem('applespot_cart');
            return cart ? JSON.parse(cart) : [];
        } catch (error) {
            console.error('Error getting cart:', error);
            return [];
        }
    },

    saveCart(cart) {
        try {
            localStorage.setItem('applespot_cart', JSON.stringify(cart));
            window.dispatchEvent(new CustomEvent('cart-updated', {
                detail: {
                    cartSize: cart.reduce((total, item) => total + item.quantity, 0)
                }
            }));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    },

    addToCart(product) {
        try {
            const cart = this.getCart();
            const quantity = product.quantity || 1;

            // Check if product is already in cart
            const existingItem = cart.find(item => item.sku === product.sku);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    category: product.category,
                    name: product.name,
                    price: product.currentPrice || product.currentbasePrice,
                    image: product.image,
                    sku: product.sku,
                    quantity: quantity
                });
            }

            this.saveCart(cart);
            return true;
        } catch (error) {
            console.error('Error adding to cart:', error);
            return false;
        }
    },

    removeFromCart(product) {
        const cart = this.getCart();
        const updatedCart = cart.filter(item => {
            return item.sku !== product.sku
        });
        this.saveCart(updatedCart);
    },

    updateQuantity(productId, quantity) {
        if (quantity < 1) return;

        const cart = this.getCart();
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            this.saveCart(cart);
        }
    },

    clearCart() {
        this.saveCart([]);
    },

    getCartSize() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + item.quantity, 0);
    },

    getCartTotal() {
        const cart = this.getCart();
        return cart.reduce((total, item) => {
            const price = this.getItemPrice(item)
            return total + (price * item.quantity);
        }, 0);
    },

    getItemPrice(item) {
        return parseFloat(item.price.toString().replace('₪', '').replace(',', ''));
    }
};