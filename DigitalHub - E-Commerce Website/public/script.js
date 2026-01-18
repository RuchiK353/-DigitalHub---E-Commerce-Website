// Shared JavaScript Functions

function createProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}" class="product-image" onerror="this.src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'">
      <div class="product-body">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-footer">
          <button class="btn-view" onclick="viewProduct(${product.id})">View Details</button>
        </div>
      </div>
    </div>
  `;
}

function viewProduct(id) {
  window.location.href = `product-detail.html?id=${id}`;
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('show');
  });
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal();
  }
});

// Add to cart simulation
function addToCart(productId, productName) {
  const modal = document.getElementById('successModal');
  if (modal) {
    document.getElementById('modalMessage').textContent = `'${productName}' added to cart successfully!`;
    modal.classList.add('show');
  }
}

// Smooth scroll on page load with hash
window.addEventListener('load', function() {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
