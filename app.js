// ============================================================
// ATELIER NOIR - Core Application Logic
// Cart System, Navigation, Auth, Shared Utilities
// ============================================================

// ---- CART SYSTEM (localStorage) ----
const Cart = {
  KEY: 'atelier_cart',
  getItems() { const d = localStorage.getItem(this.KEY); return d ? JSON.parse(d) : []; },
  saveItems(items) { localStorage.setItem(this.KEY, JSON.stringify(items)); this.updateBadge(); },
  addItem(productId, size, quantity = 1) {
    const items = this.getItems();
    const ex = items.find(i => i.productId === productId && i.size === size);
    if (ex) ex.quantity += quantity; else items.push({ productId, size, quantity });
    this.saveItems(items); this.showNotification('Added to cart');
  },
  removeItem(productId, size) { this.saveItems(this.getItems().filter(i => !(i.productId === productId && i.size === size))); },
  updateQuantity(productId, size, quantity) {
    const items = this.getItems(); const item = items.find(i => i.productId === productId && i.size === size);
    if (item) item.quantity = Math.max(1, quantity); this.saveItems(items);
  },
  getTotalItems() { return this.getItems().reduce((s, i) => s + i.quantity, 0); },
  getSubtotal() { return this.getItems().reduce((s, i) => { const p = PRODUCTS.find(pr => pr.id === i.productId); return s + (p ? p.price * i.quantity : 0); }, 0); },
  clear() { localStorage.removeItem(this.KEY); this.updateBadge(); },
  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge'); const total = this.getTotalItems();
    badges.forEach(b => { if (total > 0) { b.textContent = total; b.classList.remove('hidden'); } else b.classList.add('hidden'); });
  },
  showNotification(message) {
    const ex = document.querySelector('.cart-notification'); if (ex) ex.remove();
    const n = document.createElement('div'); n.className = 'cart-notification';
    n.innerHTML = `<span class="material-symbols-outlined" style="font-size:18px;">check_circle</span><span>${message}</span>`;
    document.body.appendChild(n);
    requestAnimationFrame(() => n.classList.add('show'));
    setTimeout(() => { n.classList.remove('show'); setTimeout(() => n.remove(), 400); }, 2500);
  }
};

// ---- MOBILE NAVIGATION ----
function initMobileNav() {
  const hamburger = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  if (hamburger && mobileMenu) hamburger.addEventListener('click', () => { mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; });
  if (closeBtn && mobileMenu) closeBtn.addEventListener('click', () => { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; });
}

// ---- FORMAT CURRENCY ----
function formatPrice(amount) { return '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

// ---- AUTH UI UPDATE ----
function updateAuthUI() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  // Protect Checkout Route!
  if (window.location.pathname.includes('checkout.html') && !user) {
    window.location.href = 'login.html';
  }

  const authLinks = document.querySelectorAll('.auth-link');
  authLinks.forEach(link => {
    if (user) {
      // Visible difference for logged in users
      link.innerHTML = `<span class="flex items-center gap-2 font-label text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"><span class="material-symbols-outlined text-[18px]">account_circle</span> ${user.name.split(' ')[0]}</span>`;
      link.href = 'profile.html';
      link.title = 'My Account';
    } else {
      link.innerHTML = `<span class="material-symbols-outlined">person</span>`;
      link.href = 'login.html';
      link.title = 'Login';
    }
  });

  // Update mobile menu auth
  const mobileAuth = document.getElementById('mobile-auth-link');
  if (mobileAuth) {
    if (user) {
      mobileAuth.textContent = 'My Account (' + user.name.split(' ')[0] + ')';
      mobileAuth.href = 'profile.html';
    } else {
      mobileAuth.textContent = 'Login / Register';
      mobileAuth.href = 'login.html';
    }
  }
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  initMobileNav();
  updateAuthUI();
});
