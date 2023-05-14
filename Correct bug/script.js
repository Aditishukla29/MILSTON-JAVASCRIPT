const cart = [2, 1, 4];

function doubleCart() {
  for (let i = 0; i < cart.length; i++) {
    cart[i] *= 2;
  }
  
  const cartItems = document.querySelectorAll("#cart li");
  for (let i = 0; i < cartItems.length; i++) {
    const itemQty = cart[i];
    cartItems[i].textContent = `Item ${i + 1}: ${itemQty}`;
  }
}
