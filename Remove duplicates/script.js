function removeDuplicates() {
    const cartList = document.getElementById("cart-list");
    const itemsArray = Array.from(cartList.children);
    const uniqueItems = new Set(itemsArray.map(item => item.textContent));
  
    cartList.innerHTML = "";
  
    uniqueItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      cartList.appendChild(li);
    });
  }
  