// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
});

// Mobile Nav Toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Cart System
let cart = [];

function addToCart(itemName, price) {
  cart.push({ item: itemName, price: price });
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalElement = document.getElementById("total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";
    itemElement.innerHTML = `
      <span>${item.item} - ₹${item.price}</span>
      <button onclick="removeFromCart(${index})" class="remove-btn">🗑️</button>
    `;
    cartItemsContainer.appendChild(itemElement);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  totalElement.textContent = `Total: ₹${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
