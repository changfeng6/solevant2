// Cart State Management
let cart = JSON.parse(localStorage.getItem('solevant_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  initCartUI();
  setupCartEventListeners();
  updateCartUI();
});

// Setup cart drawer HTML dynamic generation if it doesn't exist on page
function initCartUI() {
  // Check if cart drawer overlay already exists
  if (!document.getElementById('cart-drawer-wrapper')) {
    const drawerHTML = `
      <div id="cart-drawer-wrapper">
        <div class="cart-drawer-overlay" id="cart-overlay"></div>
        <div class="cart-drawer" id="cart-drawer">
          <div class="cart-header">
            <span class="cart-title">您的購物車</span>
            <button class="icon-btn" id="close-cart-btn" aria-label="Close cart">
              <svg class="icon-svg" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div class="cart-items-list" id="cart-items-container">
            <!-- Items populated by JS -->
          </div>
          <div class="cart-footer">
            <div class="cart-total-row">
              <span>小計:</span>
              <span class="cart-total-price" id="cart-total-amount">NT$ 0</span>
            </div>
            <button class="btn btn-primary checkout-btn" id="checkout-btn">前往結帳</button>
          </div>
        </div>
      </div>
      
      <!-- Checkout Success Modal -->
      <div class="modal" id="checkout-modal">
        <div class="modal-overlay" id="modal-close-overlay"></div>
        <div class="modal-container">
          <div class="modal-icon">
            <svg class="icon-svg" viewBox="0 0 24 24" style="width: 36px; height: 36px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 class="modal-title">感謝您的訂購！</h3>
          <p class="modal-desc">我們已收到您的訂單，系統將會寄送確認電子郵件至您的信箱。商品預計於 2-3 個工作天內出貨。</p>
          <button class="btn btn-primary" id="modal-confirm-btn" style="width: 100%;">好的，我知道了</button>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', drawerHTML);
  }
}

function setupCartEventListeners() {
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const checkoutBtn = document.getElementById('checkout-btn');
  const modalCloseOverlay = document.getElementById('modal-close-overlay');
  const modalConfirmBtn = document.getElementById('modal-confirm-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  
  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  }
  
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('您的購物車是空的，先去逛逛吧！');
        return;
      }
      closeCart();
      setTimeout(() => {
        if (checkoutModal) checkoutModal.classList.add('open');
      }, 300);
    });
  }
  
  const closeModal = () => {
    if (checkoutModal) checkoutModal.classList.remove('open');
    clearCart();
  };
  
  if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', closeModal);
  if (modalConfirmBtn) modalConfirmBtn.addEventListener('click', closeModal);
  
  // Delegate click events for cart quantity buttons and remove buttons
  const itemsContainer = document.getElementById('cart-items-container');
  if (itemsContainer) {
    itemsContainer.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;
      
      const itemId = target.getAttribute('data-id');
      const itemSize = target.getAttribute('data-size');
      
      if (target.classList.contains('cart-item-remove')) {
        removeFromCart(itemId, itemSize);
      } else if (target.classList.contains('qty-minus')) {
        updateQuantity(itemId, itemSize, -1);
      } else if (target.classList.contains('qty-plus')) {
        updateQuantity(itemId, itemSize, 1);
      }
    });
  }
}

function openCart() {
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
  }
}

function closeCart() {
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
  }
}

function updateCartUI() {
  const itemsContainer = document.getElementById('cart-items-container');
  const totalAmountEl = document.getElementById('cart-total-amount');
  const cartBadge = document.getElementById('cart-count-badge');
  
  if (!itemsContainer) return;
  
  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-msg">
        <svg class="icon-svg" viewBox="0 0 24 24" style="width: 48px; height: 48px; margin: 0 auto 16px; opacity: 0.5;">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>購物車空空的，快去挑選愛鞋吧！</p>
      </div>
    `;
    totalAmountEl.textContent = 'NT$ 0';
    if (cartBadge) {
      cartBadge.style.display = 'none';
      cartBadge.textContent = '0';
    }
    return;
  }
  
  let total = 0;
  let itemCount = 0;
  
  itemsContainer.innerHTML = cart.map(item => {
    const pInfo = productsData[item.id];
    if (!pInfo) return '';
    
    const itemTotal = pInfo.price * item.quantity;
    total += itemTotal;
    itemCount += item.quantity;
    
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${pInfo.image}" alt="${pInfo.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${pInfo.name}</div>
          <div class="cart-item-meta">尺寸: US ${item.size}</div>
          <div class="cart-item-price-qty">
            <span class="cart-item-price">NT$ ${pInfo.price.toLocaleString()}</span>
            
            <div class="qty-selector" style="height: 32px;">
              <button class="qty-btn qty-minus" data-id="${item.id}" data-size="${item.size}" style="width: 28px; height: 28px; font-size: 14px;">-</button>
              <span style="padding: 0 8px; font-weight: 600; font-size: 14px;">${item.quantity}</span>
              <button class="qty-btn qty-plus" data-id="${item.id}" data-size="${item.size}" style="width: 28px; height: 28px; font-size: 14px;">+</button>
            </div>
            
            <button class="cart-item-remove" data-id="${item.id}" data-size="${item.size}" aria-label="Remove item">
              <svg class="icon-svg" viewBox="0 0 24 24" style="width: 18px; height: 18px;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  totalAmountEl.textContent = `NT$ ${total.toLocaleString()}`;
  
  if (cartBadge) {
    cartBadge.textContent = itemCount;
    cartBadge.style.display = 'flex';
    
    // Animate badge
    cartBadge.classList.remove('badge-animate');
    void cartBadge.offsetWidth; // Trigger reflow
    cartBadge.classList.add('badge-animate');
  }
}

function addToCart(productId, size, quantity = 1) {
  if (!size) {
    alert('請選擇尺寸！');
    return;
  }
  
  const existingItemIndex = cart.findIndex(item => item.id === productId && item.size === size);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ id: productId, size: size, quantity: quantity });
  }
  
  saveCart();
  updateCartUI();
  openCart();
}

function removeFromCart(productId, size) {
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveCart();
  updateCartUI();
}

function updateQuantity(productId, size, change) {
  const item = cart.find(item => item.id === productId && item.size === size);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId, size);
    } else {
      saveCart();
      updateCartUI();
    }
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('solevant_cart', JSON.stringify(cart));
}
