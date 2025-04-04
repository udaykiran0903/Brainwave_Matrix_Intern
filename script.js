let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';  // Clear the current cart items

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    totalPriceElement.innerText = totalPrice.toFixed(2);
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

function checkout() {
    alert('Proceeding to checkout!');
    // You can redirect to a checkout page or process further
    cart = [];
    totalPrice = 0;
    updateCart();
    closeCart();
}






function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Save cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));

    // Redirect to checkout.html
    window.location.href = 'checkout.html';
}
