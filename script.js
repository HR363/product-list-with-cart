document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartQuantity = document.querySelector('.cart-quantity');
  const cartEmpty = document.querySelector('.cart-empty');
  const cartFull = document.querySelector('.cart-full');

  let cartItems = [];

  // Cart UI Update
  // This function updates the cart UI based on the number of items in the cart
  function updateCartUI() {
    const count = cartItems.length;

    cartQuantity.textContent = `${count}`;

    if (count === 0) {
      cartEmpty.style.display = 'block';
      cartFull.style.display = 'none';
    } else {
      cartEmpty.style.display = 'none';
      cartFull.style.display = 'block';

      cartFull.innerHTML = `
        <h2>Your Cart</h2>
        <p>You have ${count} item${count !== 1 ? 's' : ''} in your cart.</p>
        <button class="checkout">Checkout</button>
        <button class="continue-shopping">Continue Shopping</button>
      `;

      document.querySelector('.checkout').addEventListener('click', handleCheckout);
      document.querySelector('.continue-shopping').addEventListener('click', handleContinueShopping);
    }
  }
  // Add to Cart Logic
  // This function is called when the "Add to Cart" button is clicked
  function handleAddToCart(e) {
    const card = e.target.closest('article');
    const name = card.querySelector('h2')?.textContent.trim() || "Unnamed Dessert";
    const price = card.querySelector('.price')?.textContent.trim() || "N/A";

    cartItems.push({ name, price });
    updateCartUI();
  }

  // Checkout Logic
  function handleCheckout() {
    alert("Thank you for your order!");
    cartItems = [];
    updateCartUI();
  }

  // Continue Shopping
  function handleContinueShopping() {
    alert("Browse more desserts!");
  }

  // Event Listeners
  addToCartButtons.forEach(button => {
    button.addEventListener('click', handleAddToCart);
  });

  // Initial UI Update
  updateCartUI();
});