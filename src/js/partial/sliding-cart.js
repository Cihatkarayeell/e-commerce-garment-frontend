document.addEventListener('DOMContentLoaded', function() {
    const slidingCart = document.querySelector('.sliding-cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    const addToCartButtons = document.querySelectorAll('.sliding-cart-btn');
    const cartCount = document.querySelector('.cart-count');
    const userActions = document.querySelector('.user-actions');
    const cart = document.querySelector('.cart');

    // Cart count element transfer function
    function handleCartCountTransfer() {
        if (window.innerWidth < 1024) {
            if (cartCount && userActions && cartCount.parentElement === cart.querySelector('a')) {
                userActions.appendChild(cartCount);
            }
        } else {
            if (cartCount && cart && cartCount.parentElement === userActions) {
                cart.querySelector('a').appendChild(cartCount);
            }
        }
    }

    // Initial check
    handleCartCountTransfer();

    // Listen for window resize
    window.addEventListener('resize', handleCartCountTransfer);

    function openCart() {
        slidingCart.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCartPanel() {
        slidingCart.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Add click event listeners to all "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any parent link clicks
            openCart();
        });
    });

    // Close cart when clicking the close button
    closeCart.addEventListener('click', closeCartPanel);

    // Close cart when clicking outside (on overlay)
    cartOverlay.addEventListener('click', closeCartPanel);

    // Close cart when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && slidingCart.classList.contains('active')) {
            closeCartPanel();
        }
    });

    // Prevent clicks inside the cart from closing it
    slidingCart.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
