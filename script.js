const state = {
    cart: [],
    isCartOpen: false,
    selectedCategory: 'all',
    searchQuery: '',
    favorites: [],
    isFavoritesOpen: false,
    selectedRestaurant: null,
    deliveryAddress: 'Lekki, Lagos State',
    orderStatus: null,
    isMenuOpen: false,
    user: null,
    isLoggedIn: false,
    isChatOpen: false,
    chatMessages: [
        {
            id: 1,
            sender: 'bot',
            text: "Hello! 👋 I'm your ChopNow assistant. How can I help you today?",
            time: 'Just now'
        }
    ],
    orders: [],
    trackingOrder: null,
    selectedPaymentMethod: 'card'
};

const categories = [
    { id: 'all', name: 'All', emoji: '🍽️', color: 'bg-gradient-orange' },
    { id: 'burger', name: 'Burgers', emoji: '🍔', color: 'bg-gradient-yellow' },
    { id: 'pizza', name: 'Pizza', emoji: '🍕', color: 'bg-gradient-red' },
    { id: 'asian', name: 'Asian', emoji: '🍜', color: 'bg-gradient-green' },
    { id: 'dessert', name: 'Desserts', emoji: '🍰', color: 'bg-gradient-purple' },
    { id: 'healthy', name: 'Healthy', emoji: '🥗', color: 'bg-gradient-green' },
    { id: 'drinks', name: 'Drinks', emoji: '🥤', color: 'bg-gradient-blue' }
];

const restaurants = [
    {
        id: 1,
        name: "Burger Palace",
        category: 'burger',
        rating: 4.8,
        reviews: 2847,
        deliveryTime: '25-35',
        deliveryFee: 200,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop",
        badge: "Top Rated",
        popular: true,
        items: [
            { id: 101, name: "Classic Cheeseburger", price: 2500, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop", desc: "Juicy beef patty with melted cheese" },
            { id: 102, name: "BBQ Bacon Burger", price: 3200, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop", desc: "Smoky BBQ sauce with crispy bacon" },
            { id: 103, name: "Veggie Deluxe", price: 2800, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=400&fit=crop", desc: "Plant-based patty with fresh veggies" }
        ]
    },
    {
        id: 2,
        name: "Pizza Royale",
        category: 'pizza',
        rating: 4.9,
        reviews: 3241,
        deliveryTime: '30-40',
        deliveryFee: 300,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
        badge: "Fastest",
        popular: true,
        items: [
            { id: 201, name: "Margherita Supreme", price: 3500, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop", desc: "Fresh mozzarella and basil" },
            { id: 202, name: "Pepperoni Feast", price: 4200, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop", desc: "Loaded with premium pepperoni" },
            { id: 203, name: "BBQ Chicken Pizza", price: 4500, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop", desc: "Grilled chicken with BBQ sauce" }
        ]
    },
    {
        id: 3,
        name: "Wok & Roll",
        category: 'asian',
        rating: 4.7,
        reviews: 1893,
        deliveryTime: '35-45',
        deliveryFee: 250,
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&h=600&fit=crop",
        badge: "New",
        popular: false,
        items: [
            { id: 301, name: "Pad Thai Special", price: 2800, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=400&fit=crop", desc: "Traditional Thai stir-fried noodles" },
            { id: 302, name: "Dragon Roll Sushi", price: 3800, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop", desc: "Fresh sushi with eel and avocado" },
            { id: 303, name: "Chicken Ramen Bowl", price: 3200, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop", desc: "Rich broth with tender chicken" }
        ]
    },
    {
        id: 4,
        name: "Sweet Dreams Bakery",
        category: 'dessert',
        rating: 4.9,
        reviews: 2156,
        deliveryTime: '20-30',
        deliveryFee: 150,
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
        badge: "Hot Deal",
        popular: true,
        items: [
            { id: 401, name: "Chocolate Lava Cake", price: 1800, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=400&fit=crop", desc: "Warm chocolate with molten center" },
            { id: 402, name: "Strawberry Cheesecake", price: 2200, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop" },
            { id: 403, name: "Tiramisu Classic", price: 2000, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop", desc: "Italian coffee-flavored dessert" }
        ]
    },
    {
        id: 5,
        name: "Green Bowl Cafe",
        category: 'healthy',
        rating: 4.6,
        reviews: 1234,
        deliveryTime: '25-35',
        deliveryFee: 200,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
        badge: "Healthy",
        popular: false,
        items: [
            { id: 501, name: "Buddha Bowl", price: 2600, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop", desc: "Quinoa, avocado, and fresh veggies" },
            { id: 502, name: "Acai Smoothie Bowl", price: 2200, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop", desc: "Superfood bowl with granola" },
            { id: 503, name: "Grilled Salmon Salad", price: 3500, image: "https://images.unsplash.com/photo-1546069901-5ec6a79120b0?w=400&h=400&fit=crop", desc: "Fresh salmon with mixed greens" }
        ]
    },
    {
        id: 6,
        name: "Shake & Sip",
        category: 'drinks',
        rating: 4.8,
        reviews: 1678,
        deliveryTime: '15-25',
        deliveryFee: 100,
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800&h=600&fit=crop",
        badge: "Popular",
        popular: true,
        items: [
            { id: 601, name: "Mango Smoothie", price: 1200, image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop", desc: "Fresh mango blended to perfection" },
            { id: 602, name: "Iced Caramel Latte", price: 1500, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop", desc: "Espresso with caramel and ice" },
            { id: 603, name: "Berry Blast Juice", price: 1300, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop", desc: "Mixed berries freshly squeezed" }
        ]
    }
];

const demoUser = {
    id: 1,
    name: 'Demo User',
    email: 'demo@chopnow.com',
    avatarText: 'DU',
    phone: '+234 800 000 0000',
    joinDate: '2024-01-15',
    loyaltyPoints: 1250,
    tier: 'Gold Member'
};

const mockOrders = [
    {
        id: 'FDV-001',
        restaurantId: 1,
        restaurantName: 'Burger Palace',
        restaurantImage: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
        date: '2024-03-15',
        status: 'delivered',
        items: [
            { id: 101, name: 'Classic Cheeseburger', quantity: 2, price: 2500 },
            { id: 102, name: 'BBQ Bacon Burger', quantity: 1, price: 3200 }
        ],
        total: 8700,
        deliveryAddress: '123 Main St, Benin City'
    },
    {
        id: 'FDV-002',
        restaurantId: 2,
        restaurantName: 'Pizza Royale',
        restaurantImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
        date: '2024-03-14',
        status: 'delivered',
        items: [
            { id: 201, name: 'Margherita Supreme', quantity: 1, price: 3500 },
            { id: 203, name: 'BBQ Chicken Pizza', quantity: 1, price: 4500 }
        ],
        total: 8500,
        deliveryAddress: '123 Main St, Benin City'
    },
    {
        id: 'FDV-003',
        restaurantId: 4,
        restaurantName: 'Sweet Dreams Bakery',
        restaurantImage: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
        date: '2024-03-13',
        status: 'cancelled',
        items: [
            { id: 401, name: 'Chocolate Lava Cake', quantity: 3, price: 1800 }
        ],
        total: 5400,
        deliveryAddress: '123 Main St, Benin City'
    }
];

const elements = {
    categoriesContainer: document.getElementById('categories-container'),
    restaurantsGrid: document.getElementById('restaurants-grid'),
    searchInput: document.getElementById('search-input'),
    cartToggle: document.getElementById('cart-toggle'),
    cartSidebar: document.getElementById('cart-sidebar'),
    cartCount: document.getElementById('cart-count'),
    restaurantModal: document.getElementById('restaurant-modal'),
    orderModal: document.getElementById('order-modal'),
    menuToggle: document.getElementById('menu-toggle'),
    mobileMenu: document.getElementById('mobile-menu'),
    menuClose: document.getElementById('menu-close'),
    deliveryAddress: document.getElementById('delivery-address'),
    mobileDeliveryAddress: document.getElementById('mobile-delivery-address'),
    loginBtn: document.getElementById('login-btn'),
    authModal: document.getElementById('auth-modal'),
    closeAuthModal: document.getElementById('close-auth-modal'),
    loginForm: document.getElementById('login-form'),
    signupForm: document.getElementById('signup-form'),
    authTabs: document.querySelectorAll('.auth-tab'),
    userMenu: document.getElementById('user-menu'),
    userMenuToggle: document.getElementById('user-menu-toggle'),
    userDropdown: document.getElementById('user-dropdown'),
    logoutBtn: document.getElementById('logout-btn'),
    viewOrdersBtn: document.getElementById('view-orders-btn'),
    trackOrderBtn: document.getElementById('track-order-btn'),
    helpCenterBtn: document.getElementById('help-center-btn'),

    paymentModal: document.getElementById('payment-modal'),
    closePaymentModal: document.getElementById('close-payment-modal'),
    paymentOptions: document.querySelectorAll('.payment-option'),
    paymentForms: document.querySelectorAll('.payment-form'),
    processPaymentBtn: document.getElementById('process-payment-btn'),
    
    ordersModal: document.getElementById('orders-modal'),
    closeOrdersModal: document.getElementById('close-orders-modal'),
    ordersList: document.getElementById('orders-list'),
    ordersTabs: document.querySelectorAll('.orders-tab'),

    trackingModal: document.getElementById('tracking-modal'),
    closeTrackingModal: document.getElementById('close-tracking-modal'),

    chatWidget: document.getElementById('chat-widget'),
    chatToggle: document.getElementById('chat-toggle'),
    chatToggleFab: document.getElementById('chat-toggle-fab'),
    chatMinimize: document.getElementById('chat-minimize'),
    chatClose: document.getElementById('chat-close'),
    chatMessages: document.getElementById('chat-messages'),
    chatInput: document.getElementById('chat-input'),
    chatSend: document.getElementById('chat-send'),
    quickQuestions: document.querySelectorAll('.quick-question'),
    chatNotification: document.getElementById('chat-notification'),
    chatFabBadge: document.getElementById('chat-fab-badge'),

    mobileProfileBtn: document.getElementById('mobile-profile-btn'),
    mobileOrdersBtn: document.getElementById('mobile-orders-btn'),
    mobileChatBtn: document.getElementById('mobile-chat-btn'),
    mobileTrackBtn: document.getElementById('mobile-track-btn'),
    mobileLogoutBtn: document.getElementById('mobile-logout-btn'),
    favoritesSidebar: document.getElementById('favorites-sidebar'),
profileModal: document.getElementById('profile-modal'),
closeProfileModal: document.getElementById('close-profile-modal'),
favoritesCount: document.getElementById('favorites-count'),

navHome: document.getElementById('nav-home'),
navFavorites: document.getElementById('nav-favorites'),
navOrders: document.getElementById('nav-orders'),
navProfile: document.getElementById('nav-profile'),
navSupport: document.getElementById('nav-support')
};

function handleLogin(email, password) {
    if (!email || !password) {
        showNotification('Please enter email and password', 'error');
        return false;
    }

    if (email === 'demo@chopnow.com' && password === 'demo123') {
        state.user = { ...demoUser };
        state.isLoggedIn = true;
        state.orders = [...mockOrders];

        localStorage.setItem('chopnow_user', JSON.stringify(state.user));
        localStorage.setItem('chopnow_isLoggedIn', 'true');
        
        updateAuthUI();
        closeModal(elements.authModal);
        showNotification('Successfully logged in!', 'success');
        return true;
    }

    state.user = {
        ...demoUser,
        name: email.split('@')[0] || 'New User',
        email: email,
        avatarText: (email[0] || 'U').toUpperCase(),
        joinDate: new Date().toISOString().split('T')[0]
    };
    state.isLoggedIn = true;
    state.orders = [...mockOrders];

    localStorage.setItem('chopnow_user', JSON.stringify(state.user));
    localStorage.setItem('chopnow_isLoggedIn', 'true');
    
    updateAuthUI();
    closeModal(elements.authModal);
    showNotification('Account created successfully!', 'success');
    return true;
}

function handleLogout() {
    state.user = null;
    state.isLoggedIn = false;
    state.orders = [];

    localStorage.removeItem('chopnow_user');
    localStorage.removeItem('chopnow_isLoggedIn');
    
    updateAuthUI();
    showNotification('Logged out successfully', 'info');
}

function loadUserFromLocalStorage() {
    try {
        const savedUser = localStorage.getItem('chopnow_user');
        const isLoggedIn = localStorage.getItem('chopnow_isLoggedIn');
        
        if (savedUser && isLoggedIn === 'true') {
            state.user = JSON.parse(savedUser);
            state.isLoggedIn = true;

            const savedOrders = localStorage.getItem('chopnow_orders');
            if (savedOrders) {
                state.orders = JSON.parse(savedOrders);
            } else {
                state.orders = [...mockOrders];
            }
            
            return true;
        }
    } catch (error) {
        console.error('Error loading user from localStorage:', error);

        localStorage.removeItem('chopnow_user');
        localStorage.removeItem('chopnow_isLoggedIn');
    }
    return false;
}

function updateAuthUI() {
    const loginBtn = elements.loginBtn;
    const userMenu = elements.userMenu;
    const userAvatarText = document.getElementById('user-avatar-text');
    const userAvatarDropdownText = document.getElementById('user-avatar-dropdown-text');
    const userName = document.getElementById('user-name');
    const userFullname = document.getElementById('user-fullname');
    const userEmail = document.getElementById('user-email');
    
    if (!loginBtn || !userMenu) return;
    
    if (state.isLoggedIn && state.user) {

        loginBtn.classList.add('hidden');
        userMenu.classList.remove('hidden');

        if (userAvatarText) userAvatarText.textContent = state.user.avatarText;
        if (userAvatarDropdownText) userAvatarDropdownText.textContent = state.user.avatarText;
        if (userName) userName.textContent = state.user.name.split(' ')[0];
        if (userFullname) userFullname.textContent = state.user.name;
        if (userEmail) userEmail.textContent = state.user.email;
    } else {

        loginBtn.classList.remove('hidden');
        userMenu.classList.add('hidden');
    }
}

function renderCategories() {
    if (!elements.categoriesContainer) return;
    
    elements.categoriesContainer.innerHTML = '';
    
    categories.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = `category-btn ${state.selectedCategory === category.id ? 'active ' + category.color : ''}`;
        categoryBtn.innerHTML = `
            <span class="category-emoji">${category.emoji}</span>
            <span class="category-name">${category.name}</span>
        `;
        
        categoryBtn.addEventListener('click', () => {
            state.selectedCategory = category.id;
            renderCategories();
            renderRestaurants();
            if (state.isMenuOpen) {
                state.isMenuOpen = false;
                elements.mobileMenu?.classList.remove('open');
            }
        });
        
        elements.categoriesContainer.appendChild(categoryBtn);
    });
}

function filterRestaurants() {
    return restaurants.filter(r => 
        (state.selectedCategory === 'all' || r.category === state.selectedCategory) &&
        (state.searchQuery === '' || r.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
    );
}

function renderRestaurants() {
            const filteredRestaurants = filterRestaurants();
            elements.restaurantsGrid.innerHTML = '';
            
            filteredRestaurants.forEach((restaurant, idx) => {
                const restaurantCard = document.createElement('div');
                restaurantCard.className = 'restaurant-card';
                restaurantCard.style.animationDelay = `${idx * 0.1}s`;
                
                const isFavorited = state.favorites.includes(restaurant.id);
                
                restaurantCard.innerHTML = `
                    <div class="restaurant-image">
                        <img src="${restaurant.image}" alt="${restaurant.name}">
                        <div class="restaurant-image-overlay"></div>
                        <div class="restaurant-badge">${restaurant.badge}</div>
                        <button class="restaurant-fav-btn">
                            <i class="fas fa-heart ${isFavorited ? 'favorited' : ''}"></i>
                        </button>
                        <div class="restaurant-info-overlay">
                            <div class="delivery-time">
                                <i class="fas fa-clock"></i>
                                <span>${restaurant.deliveryTime} min</span>
                            </div>
                            <div class="restaurant-rating">
                                <i class="fas fa-star"></i>
                                <span>${restaurant.rating}</span>
                            </div>
                        </div>
                    </div>
                    <div class="restaurant-details">
                        <h3 class="restaurant-name">${restaurant.name}</h3>
                        <div class="restaurant-meta">
                            <span>₦${restaurant.deliveryFee} delivery</span>
                            <span>${restaurant.reviews} reviews</span>
                        </div>
                    </div>
                `;

                restaurantCard.addEventListener('click', () => {
                    state.selectedRestaurant = restaurant;
                    renderRestaurantModal();
                });

                const favBtn = restaurantCard.querySelector('.restaurant-fav-btn');
                favBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleFavorite(restaurant.id);
                    const icon = favBtn.querySelector('i');
                    if (state.favorites.includes(restaurant.id)) {
                        icon.classList.add('favorited');
                    } else {
                        icon.classList.remove('favorited');
                    }
                });
                
                elements.restaurantsGrid.appendChild(restaurantCard);
            });
        }

function renderRestaurantModal() {
            if (!state.selectedRestaurant) return;
            
            const restaurant = state.selectedRestaurant;
            const modal = elements.restaurantModal;
            modal.classList.remove('hidden');
            
            modal.innerHTML = `
                <div class="restaurant-modal">
                    <div class="modal-header">
                        <img src="${restaurant.image}" alt="${restaurant.name}">
                        <div class="modal-header-overlay"></div>
                        <button class="modal-close-btn" id="close-restaurant-modal">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="modal-header-content">
                            <h2 class="modal-restaurant-name">${restaurant.name}</h2>
                            <div class="modal-restaurant-meta">
                                <div class="modal-rating">
                                    <i class="fas fa-star"></i>
                                    <span>${restaurant.rating} (${restaurant.reviews})</span>
                                </div>
                                <div class="modal-delivery-time">
                                    <i class="fas fa-clock"></i>
                                    <span>${restaurant.deliveryTime} min</span>
                                </div>
                                <div class="modal-delivery-fee">₦${restaurant.deliveryFee} delivery</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-content">
                        <h3 class="menu-title">Popular Items</h3>
                        <div class="menu-items">
                            ${restaurant.items.map(item => `
                                <div class="menu-item" data-item-id="${item.id}">
                                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                                    <div class="menu-item-details">
                                        <h4 class="menu-item-name">${item.name}</h4>
                                        <p class="menu-item-description">${item.desc}</p>
                                        <div class="menu-item-footer">
                                            <span class="menu-item-price">₦${item.price}</span>
                                            <button class="add-to-cart-btn">Add</button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

            const closeBtn = modal.querySelector('#close-restaurant-modal');
            closeBtn.addEventListener('click', () => {
                state.selectedRestaurant = null;
                modal.classList.add('hidden');
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    state.selectedRestaurant = null;
                    modal.classList.add('hidden');
                }
            });

            const addToCartBtns = modal.querySelectorAll('.add-to-cart-btn');
            addToCartBtns.forEach((btn, index) => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const item = restaurant.items[index];
                    addToCart(item, restaurant);
                    updateCartCount();
                    renderCartSidebar();
                });
            });
        }

function addToCart(item, restaurant) {
    const cartItem = { 
        ...item, 
        restaurantName: restaurant.name, 
        restaurantId: restaurant.id,
        quantity: 1
    };
    
    const existingItem = state.cart.find(i => i.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push(cartItem);
    }

    saveCartToLocalStorage();

    if (!state.isCartOpen) {
        state.isCartOpen = true;
        elements.cartSidebar.classList.add('open');
        renderCartSidebar();
    }
}

function updateCartCount() {
    const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (count > 0) {
        elements.cartCount.textContent = count;
        elements.cartCount.classList.remove('hidden');
    } else {
        elements.cartCount.classList.add('hidden');
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('chopnow_cart', JSON.stringify(state.cart));
}

function loadCartFromLocalStorage() {
    try {
        const savedCart = localStorage.getItem('chopnow_cart');
        if (savedCart) {
            state.cart = JSON.parse(savedCart);
            updateCartCount();
        }
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        state.cart = [];
    }
}

function renderCartSidebar() {
    const cartSidebar = elements.cartSidebar;
    
    const cartTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = state.cart.length > 0 ? 200 : 0;
    const serviceFee = state.cart.length > 0 ? Math.round(cartTotal * 0.05) : 0;
    const totalAmount = cartTotal + deliveryFee + serviceFee;
    
    cartSidebar.innerHTML = `
        <div class="cart-header">
            <div class="cart-header-top">
                <h2 class="cart-title">Your Order</h2>
                <button class="cart-close-btn" id="close-cart">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="cart-delivery-info">
                <i class="fas fa-bicycle"></i>
                <span>Delivery to ${state.deliveryAddress}</span>
            </div>
        </div>
        <div class="cart-items">
            ${state.cart.length === 0 ? `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add delicious items to get started!</p>
                    <button class="browse-restaurants-btn" id="browse-restaurants">Browse Restaurants</button>
                </div>
            ` : `
                ${state.cart.map(item => `
                    <div class="cart-item" data-item-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <div class="cart-item-header">
                                <h4 class="cart-item-name">${item.name}</h4>
                                <button class="cart-item-remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <p class="cart-item-restaurant">${item.restaurantName}</p>
                            <div class="cart-item-footer">
                                <span class="cart-item-price">₦${item.price * item.quantity}</span>
                                <div class="cart-item-quantity">
                                    <button class="quantity-btn" data-action="decrease" data-item-id="${item.id}">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <span>${item.quantity}</span>
                                    <button class="quantity-btn" data-action="increase" data-item-id="${item.id}">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            `}
        </div>
        ${state.cart.length > 0 ? `
        <div class="cart-footer">
            <div class="cart-summary">
                <div class="cart-summary-row">
                    <span>Subtotal</span>
                    <span class="font-semibold">₦${cartTotal}</span>
                </div>
                <div class="cart-summary-row">
                    <span>Delivery Fee</span>
                    <span class="font-semibold">₦${deliveryFee}</span>
                </div>
                <div class="cart-summary-row">
                    <span>Service Fee</span>
                    <span class="font-semibold">₦${serviceFee}</span>
                </div>
                <div class="cart-summary-row total">
                    <span>Total</span>
                    <span>₦${totalAmount}</span>
                </div>
            </div>
            <button class="checkout-btn" id="checkout-btn">
                Checkout • ₦${totalAmount}
            </button>
        </div>
        ` : ''}
    `;

    const closeCartBtn = cartSidebar.querySelector('#close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            state.isCartOpen = false;
            cartSidebar.classList.remove('open');
        });
    }

    const browseRestaurantsBtn = cartSidebar.querySelector('#browse-restaurants');
    if (browseRestaurantsBtn) {
        browseRestaurantsBtn.addEventListener('click', () => {
            state.isCartOpen = false;
            cartSidebar.classList.remove('open');
        });
    }

    if (state.cart.length > 0) {

        const removeBtns = cartSidebar.querySelectorAll('.cart-item-remove');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cartItem = e.target.closest('.cart-item');
                const itemId = parseInt(cartItem.dataset.itemId);
                removeFromCart(itemId);
            });
        });

        const quantityBtns = cartSidebar.querySelectorAll('.quantity-btn');
        quantityBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(btn.dataset.itemId);
                const action = btn.dataset.action;
                
                if (action === 'increase') {
                    updateQuantity(itemId, 1);
                } else if (action === 'decrease') {
                    updateQuantity(itemId, -1);
                }
            });
        });

        const checkoutBtn = cartSidebar.querySelector('#checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', placeOrder);
        }
    }
}

function updateQuantity(itemId, change) {
    const item = state.cart.find(i => i.id === itemId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartCount();
            renderCartSidebar();
        }

        saveCartToLocalStorage();
    }
}

function removeFromCart(itemId) {
    state.cart = state.cart.filter(item => item.id !== itemId);
    updateCartCount();
    renderCartSidebar();

    saveCartToLocalStorage();
}

function renderFavoritesSidebar() {
    const sidebar = elements.favoritesSidebar;
    const favoriteRestaurants = restaurants.filter(r => state.favorites.includes(r.id));
    
    sidebar.innerHTML = `
        <div class="favorites-header">
            <h2 class="favorites-title">My Favorites</h2>
            <button class="favorites-close-btn" id="close-favorites">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="favorites-content">
            ${favoriteRestaurants.length === 0 ? `
                <div class="empty-favorites">
                    <i class="fas fa-heart"></i>
                    <h3>No favorites yet</h3>
                    <p>Your favorite restaurants will appear here</p>
                    <button class="browse-restaurants-btn" id="browse-from-favorites">Browse Restaurants</button>
                </div>
            ` : `
                <div class="favorites-list">
                    ${favoriteRestaurants.map(restaurant => `
                        <div class="favorite-item" data-restaurant-id="${restaurant.id}">
                            <img src="${restaurant.image}" alt="${restaurant.name}" class="favorite-item-image">
                            <div class="favorite-item-details">
                                <h4 class="favorite-item-name">${restaurant.name}</h4>
                               <p class="favorite-item-restaurant">${restaurant.category} • ${restaurant.rating} <i class="fas fa-star" style="color: #fbbf24;"></i></p>
                                <div class="favorite-item-price">Delivery: ₦${restaurant.deliveryFee}</div>
                            </div>
                            <div class="favorite-item-actions">
                                <button class="favorite-item-btn order-btn" title="Order from this restaurant">
                                    <i class="fas fa-shopping-bag"></i>
                                </button>
                                
                            </div>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `;

    const closeBtn = sidebar.querySelector('#close-favorites');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            state.isFavoritesOpen = false;
            sidebar.classList.remove('open');
        });
    }
    
    const browseBtn = sidebar.querySelector('#browse-from-favorites');
    if (browseBtn) {
        browseBtn.addEventListener('click', () => {
            state.isFavoritesOpen = false;
            sidebar.classList.remove('open');
        });
    }

    if (favoriteRestaurants.length > 0) {
        sidebar.querySelectorAll('.order-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const item = e.target.closest('.favorite-item');
                const restaurantId = parseInt(item.dataset.restaurantId);
                const restaurant = restaurants.find(r => r.id === restaurantId);
                
                if (restaurant) {
                    state.selectedRestaurant = restaurant;
                    renderRestaurantModal();
                    openModal(elements.restaurantModal);

                    state.isFavoritesOpen = false;
                    sidebar.classList.remove('open');
                }
            });
        });

        sidebar.querySelectorAll('.remove-favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const item = e.target.closest('.favorite-item');
                const restaurantId = parseInt(item.dataset.restaurantId);
                toggleFavorite(restaurantId);
                renderFavoritesSidebar();
                updateFavoritesCount();
            });
        });
    }
}

function updateFavoritesCount() {
    if (elements.favoritesCount) {
        const count = state.favorites.length;
        if (count > 0) {
            elements.favoritesCount.textContent = count;
            elements.favoritesCount.classList.remove('hidden');
        } else {
            elements.favoritesCount.classList.add('hidden');
        }
    }
}

function toggleFavoritesSidebar() {
    state.isFavoritesOpen = !state.isFavoritesOpen;
    const sidebar = elements.favoritesSidebar;
    
    if (state.isFavoritesOpen) {
        renderFavoritesSidebar();
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    }
}

function renderProfileModal() {
    if (!state.user) {
        showNotification('Please login to view profile', 'info');
        openModal(elements.authModal);
        return;
    }
    
    const modal = elements.profileModal;

    document.getElementById('profile-avatar-text').textContent = state.user.avatarText;
    document.getElementById('profile-fullname').textContent = state.user.name;
    document.getElementById('profile-email').textContent = state.user.email;
    document.getElementById('profile-phone').textContent = state.user.phone || '+234 800 000 0000';
    document.getElementById('profile-joindate').textContent = formatDate(state.user.joinDate || '2024-01-15');
    document.getElementById('profile-points').textContent = state.user.loyaltyPoints?.toLocaleString() || '1,250';
    document.getElementById('profile-tier').textContent = state.user.tier || 'Gold Member';
    
    openModal(modal);
}

function toggleFavorite(restaurantId) {
    const index = state.favorites.indexOf(restaurantId);
    
    if (index > -1) {
        state.favorites.splice(index, 1);
    } else {
        state.favorites.push(restaurantId);
    }
    
    updateFavoritesCount();

    saveFavoritesToLocalStorage();
}

function saveFavoritesToLocalStorage() {
    try {
        localStorage.setItem('chopnow_favorites', JSON.stringify(state.favorites));
    } catch (error) {
        console.error('Error saving favorites to localStorage:', error);
    }
}

function loadFavoritesFromLocalStorage() {
    try {
        const savedFavorites = localStorage.getItem('chopnow_favorites');
        if (savedFavorites) {
            state.favorites = JSON.parse(savedFavorites);
            updateFavoritesCount();
            return true;
        }
    } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
        localStorage.removeItem('chopnow_favorites');
    }
    return false;
}

function placeOrder() {
    if (state.cart.length === 0) {
        showNotification('Your cart is empty', 'info');
        return;
    }
    
    if (!state.isLoggedIn) {
        showNotification('Please login to complete your order', 'info');
        openModal(elements.authModal);
        return;
    }
    
    renderPaymentModal();
}

function renderOrderModal() {
    if (!elements.orderModal || !state.orderStatus) return;
    
    let modalContent = '';
    
    switch (state.orderStatus) {
        case 'preparing':
            modalContent = `
                <div class="order-modal">
                    <div class="order-status-icon bg-gradient-orange">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h3 class="order-status-title">Preparing Your Order</h3>
                    <p class="order-status-description">Our chefs are cooking up something delicious!</p>
                    <div class="progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                </div>
            `;
            break;
        case 'on-the-way':
            modalContent = `
                <div class="order-modal">
                    <div class="order-status-icon bg-gradient-green">
                        <i class="fas fa-bicycle"></i>
                    </div>
                    <h3 class="order-status-title">On The Way!</h3>
                    <p class="order-status-description">Your food is riding hot to your location</p>
                    <div class="delivery-dots">
                        <div class="delivery-dot"></div>
                        <div class="delivery-dot"></div>
                        <div class="delivery-dot"></div>
                    </div>
                </div>
            `;
            break;
        case 'delivered':
            modalContent = `
                <div class="order-modal">
                    <div class="order-status-icon bg-gradient-green">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="order-status-title">Order Delivered!</h3>
                    <p class="order-status-description">Enjoy your meal! </p>
                    <button class="order-done-btn" id="order-done-btn">Done</button>
                </div>
            `;
            break;
        default:
            return;
    }
    
    elements.orderModal.innerHTML = modalContent;
    openModal(elements.orderModal);

    if (state.orderStatus === 'delivered') {
        const doneBtn = elements.orderModal.querySelector('#order-done-btn');
        if (doneBtn) {
            doneBtn.addEventListener('click', () => {
                state.orderStatus = null;
                state.cart = [];
                updateCartCount();
                closeModal(elements.orderModal);
            });
        }

        elements.orderModal.addEventListener('click', (e) => {
            if (e.target === elements.orderModal) {
                state.orderStatus = null;
                state.cart = [];
                updateCartCount();
                closeModal(elements.orderModal);
            }
        });
    }
}

function openModal(modal) {
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
    }
}

function closeModal(modal) {
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
    }
}

function showNotification(message, type = 'info') {

    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    });

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" aria-label="Close notification">
            <i class="fas fa-times"></i>
        </button>
    `;

    document.body.appendChild(notification);

    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 1rem;
                right: 1rem;
                padding: 1rem 1.5rem;
                border-radius: 0.75rem;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                max-width: 24rem;
            }
            .notification-success {
                background: linear-gradient(to right, #10b981, #059669);
                color: white;
            }
            .notification-info {
                background: linear-gradient(to right, #3b82f6, #06b6d4);
                color: white;
            }
            .notification-error {
                background: linear-gradient(to right, #ef4444, #dc2626);
                color: white;
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                flex: 1;
            }
            .notification-close {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 9999px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.2s;
            }
            .notification-close:hover {
                background: rgba(255, 255, 255, 0.3);
            }
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            body.modal-open .notification {
                z-index: 10001;
            }
        `;
        document.head.appendChild(styles);
    }

    const autoRemove = setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);

    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoRemove);
            notification.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
}

function renderPaymentModal() {
    const modal = elements.paymentModal;
    if (!modal) return;
    
    const cartTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = state.cart.length > 0 ? 200 : 0;
    const serviceFee = state.cart.length > 0 ? Math.round(cartTotal * 0.05) : 0;
    const totalAmount = cartTotal + deliveryFee + serviceFee;

    const summaryItems = document.getElementById('payment-summary-items');
    if (summaryItems) {
        summaryItems.innerHTML = state.cart.map(item => `
            <div class="summary-item">
                <span class="summary-item-name">${item.name} × ${item.quantity}</span>
                <span>₦${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `).join('');
    }
    
    const subtotalEl = document.getElementById('payment-subtotal');
    const deliveryEl = document.getElementById('payment-delivery');
    const serviceEl = document.getElementById('payment-service');
    const totalEl = document.getElementById('payment-total');
    
    if (subtotalEl) subtotalEl.textContent = `₦${cartTotal.toLocaleString()}`;
    if (deliveryEl) deliveryEl.textContent = `₦${deliveryFee.toLocaleString()}`;
    if (serviceEl) serviceEl.textContent = `₦${serviceFee.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `₦${totalAmount.toLocaleString()}`;
    
    openModal(modal);
}

function processPayment() {
    const btn = elements.processPaymentBtn;
    if (!btn) return;
    
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');

    if (!state.selectedPaymentMethod) {
        showNotification('Please select a payment method', 'error');
        return;
    }

    if (state.selectedPaymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number')?.value;
        const expiryDate = document.getElementById('expiry-date')?.value;
        const cvv = document.getElementById('cvv')?.value;
        
        if (!cardNumber || !expiryDate || !cvv) {
            showNotification('Please fill in all card details', 'error');
            return;
        }
        
        if (cardNumber.replace(/\s/g, '').length !== 16) {
            showNotification('Please enter a valid 16-digit card number', 'error');
            return;
        }
    }

    if (btnText) btnText.classList.add('hidden');
    if (btnLoading) btnLoading.classList.remove('hidden');
    btn.disabled = true;

    setTimeout(() => {
        if (btnText) btnText.classList.remove('hidden');
        if (btnLoading) btnLoading.classList.add('hidden');
        btn.disabled = false;

        closeModal(elements.paymentModal);

        createOrder();

        showNotification('Payment successful! Your order has been placed.', 'success');

        startOrderTracking();
        
    }, 2000);
}

function createOrder() {
    if (state.cart.length === 0) return;
    
    const orderId = `FDV-${String(state.orders.length + 101).padStart(3, '0')}`;
    const cartTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = state.cart.length > 0 ? 200 : 0;
    const serviceFee = state.cart.length > 0 ? Math.round(cartTotal * 0.05) : 0;
    
    const newOrder = {
        id: orderId,
        restaurantId: state.cart[0]?.restaurantId || 1,
        restaurantName: state.cart[0]?.restaurantName || 'Restaurant',
        restaurantImage: state.cart[0]?.image || restaurants[0]?.image || '',
        date: new Date().toISOString().split('T')[0],
        status: 'preparing',
        items: state.cart.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        total: cartTotal + deliveryFee + serviceFee,
        deliveryAddress: state.deliveryAddress,
        timestamp: Date.now()
    };
    
    state.orders.unshift(newOrder);
    state.trackingOrder = newOrder;

    localStorage.setItem('chopnow_orders', JSON.stringify(state.orders));

    state.cart = [];
    updateCartCount();
    renderCartSidebar();

    if (elements.ordersList && elements.ordersModal?.classList.contains('hidden') === false) {
        renderOrdersModal('all');
    }
}

function renderOrdersModal(status = 'all') {
    const modal = elements.ordersModal;
    const ordersList = elements.ordersList;
    
    if (!modal || !ordersList) return;
    
    const filteredOrders = status === 'all' 
        ? state.orders 
        : state.orders.filter(order => order.status === status);
    
    if (filteredOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-shopping-bag"></i>
                <h3>No orders found</h3>
                <p>${status === 'all' ? 'Your order history will appear here' : `No ${status} orders`}</p>
                <button class="browse-restaurants-btn" id="browse-from-orders">Browse Restaurants</button>
            </div>
        `;
        
        const browseBtn = ordersList.querySelector('#browse-from-orders');
        if (browseBtn) {
            browseBtn.addEventListener('click', () => {
                closeModal(modal);
            });
        }
    } else {
        ordersList.innerHTML = filteredOrders.map(order => `
            <div class="order-card" data-order-id="${order.id}">
                <div class="order-card-header">
                    <div class="order-id">Order #<strong>${order.id}</strong></div>
                    <div class="order-date">${formatDate(order.date)}</div>
                    <div class="order-status ${order.status}">${order.status}</div>
                </div>
                
                <div class="order-card-restaurant">
                    <img src="${order.restaurantImage}" alt="${order.restaurantName}" class="restaurant-image-sm">
                    <div class="restaurant-info-sm">
                        <h4>${order.restaurantName}</h4>
                        <p>${order.items.length} item${order.items.length !== 1 ? 's' : ''}</p>
                    </div>
                </div>
                
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <span class="order-item-name">${item.name}</span>
                            <span class="order-item-qty">×${item.quantity}</span>
                            <span>₦${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="order-card-footer">
                    <div class="order-total">₦${order.total.toLocaleString()}</div>
                    <div class="order-actions">
                        <button class="reorder-btn" data-order-id="${order.id}">
                            <i class="fas fa-redo"></i>
                            Reorder
                        </button>
                        ${order.status === 'preparing' || order.status === 'on-the-way' ? `
                            <button class="track-btn" data-order-id="${order.id}">
                                <i class="fas fa-map-marker-alt"></i>
                                Track
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        ordersList.querySelectorAll('.reorder-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const orderId = e.currentTarget.dataset.orderId;
                handleReorder(orderId);
            });
        });
        
        ordersList.querySelectorAll('.track-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const orderId = e.currentTarget.dataset.orderId;
                handleTrackOrder(orderId);
            });
        });
    }
    
    openModal(modal);
}

function handleReorder(orderId) {
    const order = state.orders.find(o => o.id === orderId);
    if (!order) {
        showNotification('Order not found', 'error');
        return;
    }

    const restaurant = restaurants.find(r => r.id === order.restaurantId);
    if (!restaurant) {
        showNotification('Restaurant not found', 'error');
        return;
    }

    order.items.forEach(orderItem => {
        const menuItem = restaurant.items.find(item => item.id === orderItem.id);
        if (menuItem) {
            addToCartWithQuantity(menuItem, restaurant, orderItem.quantity);
        }
    });
    
    closeModal(elements.ordersModal);
    showNotification('Items added to cart!', 'success');
}

function addToCartWithQuantity(item, restaurant, quantity) {
    if (!item || !restaurant || quantity <= 0) return;
    
    const existingItem = state.cart.find(i => i.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({ 
            ...item, 
            restaurantName: restaurant.name, 
            restaurantId: restaurant.id,
            quantity: quantity
        });
    }
    
    updateCartCount();
    renderCartSidebar();
}

function handleTrackOrder(orderId) {
    const order = state.orders.find(o => o.id === orderId);
    if (!order) {
        showNotification('Order not found', 'error');
        return;
    }
    
    state.trackingOrder = order;
    renderTrackingModal();
    closeModal(elements.ordersModal);
}

function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return 'Invalid date';
        }
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    } catch (error) {
        console.error('Date formatting error:', error);
        return 'Invalid date';
    }
}

function renderTrackingModal() {
    const modal = elements.trackingModal;
    if (!modal || !state.trackingOrder) return;

    const orderIdEl = document.getElementById('tracking-order-id');
    const etaEl = document.getElementById('tracking-eta');
    
    if (orderIdEl) orderIdEl.textContent = state.trackingOrder.id;
    if (etaEl) {

        const min = 15;
        const max = 45;
        const eta = Math.floor(Math.random() * (max - min + 1)) + min;
        etaEl.textContent = `${eta} min`;
    }
    
    openModal(modal);
 
    startDeliveryAnimation();
}

function startDeliveryAnimation() {
    const deliveryMarker = document.getElementById('delivery-marker');
    if (!deliveryMarker) return;

    deliveryMarker.classList.remove('moving');
    void deliveryMarker.offsetWidth; 
    deliveryMarker.classList.add('moving');
}

function startOrderTracking() {

    closeModal(elements.paymentModal);
    closeModal(elements.orderModal);
    
    if (!state.trackingOrder) {
        showNotification('No order to track', 'error');
        return;
    }

    renderTrackingModal();

    setTimeout(() => {
        if (state.trackingOrder) {
            updateOrderStatus(state.trackingOrder.id, 'on-the-way');
        }
    }, 5000);
    
    setTimeout(() => {
        if (state.trackingOrder) {
            updateOrderStatus(state.trackingOrder.id, 'delivered');

            setTimeout(() => {
                showNotification('Your order has been delivered!', 'success');
            }, 1000);
        }
    }, 15000);
}

function updateOrderStatus(orderId, status) {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
    }

    if (state.trackingOrder && state.trackingOrder.id === orderId) {
        state.trackingOrder.status = status;
    }
  
    if (elements.ordersModal && !elements.ordersModal.classList.contains('hidden')) {
        const currentTab = document.querySelector('.orders-tab.active')?.dataset.status || 'all';
        renderOrdersModal(currentTab);
    }
}

function renderChat() {
    const chatMessages = elements.chatMessages;
    if (!chatMessages) return;
    
    chatMessages.innerHTML = state.chatMessages.map(msg => `
        <div class="chat-message ${msg.sender}" data-message-id="${msg.id}">
            <div class="message-content">
                <p>${msg.text}</p>
                <span class="message-time">${msg.time}</span>
            </div>
        </div>
    `).join('');

    if (state.chatMessages.length === 1 || 
        (state.chatMessages.length > 1 && state.chatMessages[state.chatMessages.length - 2].sender === 'bot')) {
        const quickQuestionsHTML = `
            <div class="quick-questions">
                <button class="quick-question" data-question="Where is my order?">
                    <i class="fas fa-map-marker-alt"></i>
                    Where is my order?
                </button>
                <button class="quick-question" data-question="How to change address?">
                    <i class="fas fa-home"></i>
                    Change delivery address
                </button>
                <button class="quick-question" data-question="Refund status">
                    <i class="fas fa-undo"></i>
                    Refund status
                </button>
                <button class="quick-question" data-question="Contact support">
                    <i class="fas fa-phone"></i>
                    Talk to human agent
                </button>
            </div>
        `;
        
        chatMessages.insertAdjacentHTML('beforeend', quickQuestionsHTML);
        attachChatQuickQuestions();
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage(text, sender = 'user') {
    if (!text || !text.trim()) return;

    const userMessage = {
        id: Date.now(),
        sender: 'user',
        text: text.trim(),
        time: getCurrentTime()
    };
    
    state.chatMessages.push(userMessage);
    renderChat();

    if (elements.chatInput) {
        elements.chatInput.value = '';
        elements.chatInput.focus();
    }

    setTimeout(() => {
        const response = getBotResponse(text);
        const botMessage = {
            id: Date.now() + 1,
            sender: 'bot',
            text: response,
            time: getCurrentTime()
        };
        
        state.chatMessages.push(botMessage);
        renderChat();
    }, 1000);
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('order') && lowerMsg.includes('where')) {
        return "I can help you track your order! First, make sure you're logged in, then click on 'Track Order' in your user menu. 🚚";
    } else if (lowerMsg.includes('address') && lowerMsg.includes('change')) {
        return "To change your delivery address, go to your profile settings. You can save multiple addresses and select your preferred one at checkout. 🏠";
    } else if (lowerMsg.includes('refund')) {
        return "Refunds are processed within 5-7 business days. If you haven't received yours after this period, please contact our support team at support@chopnow.com. 💰";
    } else if (lowerMsg.includes('support') || lowerMsg.includes('agent') || lowerMsg.includes('human')) {
        return "I'm connecting you with a human agent... Please hold on for a moment. In the meantime, you can call us at +234 800 000 0000. 📞";
    } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        return "Hello there! 👋 How can I assist you today?";
    } else if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
        return "You're welcome! Is there anything else I can help you with? 😊";
    } else if (lowerMsg.includes('menu') || lowerMsg.includes('food') || lowerMsg.includes('restaurant')) {
        return "We have a wide variety of restaurants and cuisines available. Use the search bar or browse categories to find your favorite foods! 🍔🍕";
    } else if (lowerMsg.includes('price') || lowerMsg.includes('cost')) {
        return "Prices vary by restaurant and item. You can see the price of each item on the restaurant's menu page. 💰";
    } else if (lowerMsg.includes('delivery') && lowerMsg.includes('time')) {
        return "Delivery times vary by restaurant and your location. You can see estimated delivery times on each restaurant card. ⏱️";
    } else {
        return "I understand you're asking about: \"" + message + "\". For detailed assistance with this, I recommend contacting our support team at support@chopnow.com or calling +234 800 000 0000. 📞";
    }
}

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function toggleChat() {
    state.isChatOpen = !state.isChatOpen;
    const chatWidget = elements.chatWidget;
    const fab = elements.chatToggleFab;
    
    if (!chatWidget || !fab) return;
    
    if (state.isChatOpen) {
        chatWidget.classList.add('open');
        fab.classList.add('hidden');
        renderChat();
        clearChatNotifications();

        setTimeout(() => {
            if (elements.chatInput) {
                elements.chatInput.focus();
            }
        }, 100);
    } else {
        chatWidget.classList.remove('open');
        fab.classList.remove('hidden');
    }
}

function showChatNotification() {
    if (state.isChatOpen) return; 
    
    const notification = elements.chatNotification;
    const fabBadge = elements.chatFabBadge;
    
    if (notification) {
        notification.textContent = '1';
        notification.classList.remove('hidden');
    }
    
    if (fabBadge) {
        fabBadge.textContent = '1';
        fabBadge.classList.remove('hidden');
    }
}

function clearChatNotifications() {
    const notification = elements.chatNotification;
    const fabBadge = elements.chatFabBadge;
    
    if (notification) notification.classList.add('hidden');
    if (fabBadge) fabBadge.classList.add('hidden');
}

function attachChatQuickQuestions() {
    document.querySelectorAll('.quick-question').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const question = e.currentTarget.dataset.question;
            sendMessage(question);
        });
    });
}

function attachExtendedEventListeners() {

    if (elements.loginBtn) {
        elements.loginBtn.addEventListener('click', () => {
            openModal(elements.authModal);
        });
    }
    
    if (elements.closeAuthModal) {
        elements.closeAuthModal.addEventListener('click', () => {
            closeModal(elements.authModal);
        });
    }

    if (elements.authTabs) {
        elements.authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.dataset.tab;

                elements.authTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                document.querySelectorAll('.auth-form').forEach(form => {
                    form.classList.remove('active');
                });
                const activeForm = document.getElementById(`${tabId}-form`);
                if (activeForm) activeForm.classList.add('active');
            });
        });
    }

    if (elements.loginForm) {
        elements.loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email')?.value;
            const password = document.getElementById('login-password')?.value;
            if (email && password) {
                handleLogin(email, password);
            }
        });
    }

    if (elements.signupForm) {
        elements.signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('signup-email')?.value;
            const password = document.getElementById('signup-password')?.value;
            if (email && password) {
                handleLogin(email, password);
            }
        });
    }

    if (elements.userMenuToggle) {
        elements.userMenuToggle.addEventListener('click', () => {
            elements.userDropdown?.classList.toggle('hidden');
        });
    }

    if (elements.logoutBtn) {
        elements.logoutBtn.addEventListener('click', handleLogout);
    }
 
    if (elements.viewOrdersBtn) {
        elements.viewOrdersBtn.addEventListener('click', () => {
            if (state.isLoggedIn) {
                renderOrdersModal();
            } else {
                openModal(elements.authModal);
                showNotification('Please login to view your orders', 'info');
            }
        });
    }

    if (elements.trackOrderBtn) {
        elements.trackOrderBtn.addEventListener('click', () => {
            if (state.isLoggedIn && state.trackingOrder) {
                renderTrackingModal();
            } else if (state.isLoggedIn) {
                showNotification('No active orders to track', 'info');
            } else {
                openModal(elements.authModal);
                showNotification('Please login to track orders', 'info');
            }
        });
    }
    
    if (elements.helpCenterBtn) {
        elements.helpCenterBtn.addEventListener('click', () => {
            toggleChat();
        });
    }

    if (elements.paymentOptions) {
        elements.paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                const method = option.dataset.method;

                elements.paymentOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                state.selectedPaymentMethod = method;

                elements.paymentForms.forEach(form => form.classList.remove('active'));
                const activeForm = document.getElementById(`${method}-payment-form`);
                if (activeForm) activeForm.classList.add('active');
            });
        });
    }

    if (elements.processPaymentBtn) {
        elements.processPaymentBtn.addEventListener('click', processPayment);
    }
    
    if (elements.closePaymentModal) {
        elements.closePaymentModal.addEventListener('click', () => {
            closeModal(elements.paymentModal);
        });
    }

    if (elements.closeOrdersModal) {
        elements.closeOrdersModal.addEventListener('click', () => {
            closeModal(elements.ordersModal);
        });
    }

    if (elements.ordersTabs) {
        elements.ordersTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const status = tab.dataset.status;

                elements.ordersTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                renderOrdersModal(status);
            });
        });
    }

    if (elements.closeTrackingModal) {
        elements.closeTrackingModal.addEventListener('click', () => {
            closeModal(elements.trackingModal);
        });
    }

    if (elements.chatToggle) {
        elements.chatToggle.addEventListener('click', toggleChat);
    }
    
    if (elements.chatToggleFab) {
        elements.chatToggleFab.addEventListener('click', toggleChat);
    }
    
    if (elements.chatMinimize) {
        elements.chatMinimize.addEventListener('click', () => {
            if (elements.chatWidget) {
                elements.chatWidget.classList.remove('open');
            }
            if (elements.chatToggleFab) {
                elements.chatToggleFab.classList.remove('hidden');
            }
        });
    }
    
    if (elements.chatClose) {
        elements.chatClose.addEventListener('click', () => {
            toggleChat();
        });
    }
    
    if (elements.chatSend) {
        elements.chatSend.addEventListener('click', () => {
            const message = elements.chatInput?.value;
            if (message) {
                sendMessage(message);
            }
        });
    }
    
    if (elements.chatInput) {
        elements.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const message = elements.chatInput.value;
                if (message.trim()) {
                    sendMessage(message);
                }
            }
        });
    }

   if (elements.mobileProfileBtn) {
    elements.mobileProfileBtn.addEventListener('click', () => {
        renderProfileModal();
        if (elements.mobileMenu) {
            elements.mobileMenu.classList.remove('open');
        }
    });
}
    
    if (elements.mobileOrdersBtn) {
        elements.mobileOrdersBtn.addEventListener('click', () => {
            if (state.isLoggedIn) {
                renderOrdersModal();
            } else {
                openModal(elements.authModal);
            }
            if (elements.mobileMenu) {
                elements.mobileMenu.classList.remove('open');
            }
        });
    }
    
    if (elements.mobileChatBtn) {
        elements.mobileChatBtn.addEventListener('click', () => {
            toggleChat();
            if (elements.mobileMenu) {
                elements.mobileMenu.classList.remove('open');
            }
        });
    }
    
    if (elements.mobileTrackBtn) {
        elements.mobileTrackBtn.addEventListener('click', () => {
            if (state.isLoggedIn && state.trackingOrder) {
                renderTrackingModal();
            } else if (state.isLoggedIn) {
                showNotification('No active orders to track', 'info');
            } else {
                openModal(elements.authModal);
            }
            if (elements.mobileMenu) {
                elements.mobileMenu.classList.remove('open');
            }
        });
    }
    
    if (elements.mobileLogoutBtn) {
        elements.mobileLogoutBtn.addEventListener('click', () => {
            handleLogout();
            if (elements.mobileMenu) {
                elements.mobileMenu.classList.remove('open');
            }
        });
    }
    
    if (elements.navHome) {
        elements.navHome.addEventListener('click', () => {
         
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    if (elements.navFavorites) {
        elements.navFavorites.addEventListener('click', () => {
            if (state.isLoggedIn) {
                toggleFavoritesSidebar();
            } else {
                openModal(elements.authModal);
                showNotification('Please login to view favorites', 'info');
            }
        });
    }
    
    if (elements.navOrders) {
        elements.navOrders.addEventListener('click', () => {
            if (state.isLoggedIn) {
                renderOrdersModal();
            } else {
                openModal(elements.authModal);
                showNotification('Please login to view orders', 'info');
            }
        });
    }
    
    if (elements.navProfile) {
        elements.navProfile.addEventListener('click', () => {
            renderProfileModal();
        });
    }
    
    if (elements.navSupport) {
        elements.navSupport.addEventListener('click', toggleChat);
    }

    if (elements.closeProfileModal) {
        elements.closeProfileModal.addEventListener('click', () => {
            closeModal(elements.profileModal);
        });
    }

    if (document.getElementById('mobile-favorites-btn')) {
        document.getElementById('mobile-favorites-btn').addEventListener('click', () => {
            if (state.isLoggedIn) {
                toggleFavoritesSidebar();
            } else {
                openModal(elements.authModal);
            }
            if (elements.mobileMenu) {
                elements.mobileMenu.classList.remove('open');
            }
        });
    }

    if (elements.authModal) {
        elements.authModal.addEventListener('click', (e) => {
            if (e.target === elements.authModal) {
                closeModal(elements.authModal);
            }
        });
    }

    if (elements.paymentModal) {
        elements.paymentModal.addEventListener('click', (e) => {
            if (e.target === elements.paymentModal) {
                closeModal(elements.paymentModal);
            }
        });
    }

    if (elements.ordersModal) {
        elements.ordersModal.addEventListener('click', (e) => {
            if (e.target === elements.ordersModal) {
                closeModal(elements.ordersModal);
            }
        });
    }

    if (elements.trackingModal) {
        elements.trackingModal.addEventListener('click', (e) => {
            if (e.target === elements.trackingModal) {
                closeModal(elements.trackingModal);
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (elements.userDropdown && !elements.userDropdown.classList.contains('hidden')) {
            if (!elements.userMenu?.contains(e.target) && !elements.userDropdown.contains(e.target)) {
                elements.userDropdown.classList.add('hidden');
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {

            const modals = [elements.authModal, elements.paymentModal, elements.ordersModal, 
                          elements.trackingModal, elements.restaurantModal, elements.orderModal];
            modals.forEach(modal => {
                if (modal && !modal.classList.contains('hidden')) {
                    closeModal(modal);
                }
            });

            if (state.isCartOpen && elements.cartSidebar) {
                state.isCartOpen = false;
                elements.cartSidebar.classList.remove('open');
            }
            
            if (state.isFavoritesOpen && elements.favoritesSidebar) {
                state.isFavoritesOpen = false;
                elements.favoritesSidebar.classList.remove('open');
            }

            if (state.isMenuOpen && elements.mobileMenu) {
                state.isMenuOpen = false;
                elements.mobileMenu.classList.remove('open');
            }

            if (state.isChatOpen) {
                toggleChat();
            }

            if (elements.userDropdown && !elements.userDropdown.classList.contains('hidden')) {
                elements.userDropdown.classList.add('hidden');
            }
        }
    });
}

function initExtendedApp() {

    if (loadUserFromLocalStorage()) {
        showNotification(`Welcome back, ${state.user.name.split(' ')[0]}!`, 'success');
    }

    loadFavoritesFromLocalStorage();

    updateAuthUI();
    updateFavoritesCount();

    renderChat();

    attachExtendedEventListeners();
}

window.placeOrder = function() {
    if (state.cart.length === 0) {
        showNotification('Your cart is empty', 'info');
        return;
    }
    
    if (!state.isLoggedIn) {
        showNotification('Please login to complete your order', 'info');
        openModal(elements.authModal);
        return;
    }
    
    renderPaymentModal();
};

function extendCartSidebar() {

    const originalRenderCartSidebar = renderCartSidebar;
    renderCartSidebar = function() {
        originalRenderCartSidebar();

        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {

            const newCheckoutBtn = checkoutBtn.cloneNode(true);
            checkoutBtn.parentNode.replaceChild(newCheckoutBtn, checkoutBtn);

            newCheckoutBtn.addEventListener('click', window.placeOrder);
        }
    };
}

function attachEventListeners() {

    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', debounce((e) => {
            state.searchQuery = e.target.value;
            renderRestaurants();
        }, 300));
    }

    if (elements.cartToggle) {
        elements.cartToggle.addEventListener('click', () => {
            state.isCartOpen = !state.isCartOpen;
            
            if (state.isCartOpen) {
                renderCartSidebar();
                if (elements.cartSidebar) {
                    elements.cartSidebar.classList.add('open');
                }
            } else {
                if (elements.cartSidebar) {
                    elements.cartSidebar.classList.remove('open');
                }
            }
        });
    }

    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', () => {
            state.isMenuOpen = true;
            if (elements.mobileMenu) {
                elements.mobileMenu.classList.add('open');
            }
        });
    }

    if (elements.menuClose) {
        elements.menuClose.addEventListener('click', () => {
            state.isMenuOpen = false;
            if (elements.mobileMenu) {
                elements.mobileMenu.classList.remove('open');
            }
        });
    }

    const seeAllBtn = document.querySelector('.see-all-btn');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', () => {
            state.selectedCategory = 'all';
            renderCategories();
            renderRestaurants();
            document.querySelector('.restaurants-section')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    const promoBtn = document.querySelector('.promo-btn');
    if (promoBtn) {
        promoBtn.addEventListener('click', () => {
            document.querySelector('.restaurants-section')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function initApp() {

    if (!elements.categoriesContainer || !elements.restaurantsGrid) {
        console.error('Required DOM elements not found');
        return;
    }
    
    loadCartFromLocalStorage(); 
    renderCategories();
    renderRestaurants();
    attachEventListeners();
    updateCartCount(); 
    initExtendedApp();
    extendCartSidebar();
}

window.toggleChat = toggleChat;
window.renderOrdersModal = renderOrdersModal;
window.renderTrackingModal = renderTrackingModal;
window.addToCart = addToCart;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {

    initApp();
}
