if (document.getElementById('header')) { 
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        const closeMenu = document.querySelector('.close-menu');
        const searchBar = document.querySelector('.search-bar');
        const mobileMenuContent = document.querySelector('.mobile-menu-content');
        const headerContent = document.querySelector('.header-content');
        const mobileMenuContainer = document.querySelector('.mobile-menu-container');

        // Menü durumunu kontrol eden değişken
        let isMenuOpen = false;

        function openMenu(e) {
            if (!isMenuOpen) {
                e.stopPropagation(); // Event'in document'e ulaşmasını engelle
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                isMenuOpen = true;
                handleSearchBarTransfer();
            }
        }

        function closeMenuHandler() {
            if (isMenuOpen) {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
                isMenuOpen = false;

                if (window.innerWidth >= 1024) {
                    handleSearchBarTransfer();
                }
            }
        }

        function handleSearchBarTransfer() {
            if (!searchBar) return;

            try {
                if (window.innerWidth < 1024) {
                    if (searchBar.parentElement === headerContent) {
                        mobileMenuContent.insertBefore(searchBar, mobileMenuContent.firstChild);
                    }
                } else {
                    if (searchBar.parentElement === mobileMenuContent) {
                        headerContent.insertBefore(searchBar, headerContent.querySelector('.user-actions'));
                    }
                }
            } catch (error) {
                console.error('Search bar transfer error:', error);
            }
        }

        // Sayfa yüklendiğinde ilk kontrol
        handleSearchBarTransfer();

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

        // Pencere boyutu değişikliğini debounce ile optimize et
        window.addEventListener('resize', debounce(() => {
            handleSearchBarTransfer();
            if (window.innerWidth >= 1024 && isMenuOpen) {
                closeMenuHandler();
            }
        }, 250));

        // Event Listeners
        menuToggle.addEventListener('click', openMenu);
        closeMenu.addEventListener('click', closeMenuHandler);
        mobileMenuOverlay.addEventListener('click', closeMenuHandler);

        // Menü dışı tıklamalarda kapat
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !mobileMenuContainer.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMenuHandler();
            }
        });

        // Menü içi tıklamalarda event'i durdur
        mobileMenuContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // ESC tuşu ile kapatma
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenuHandler();
            }
        });

        // Link tıklamalarında menüyü kapat
        const menuLinks = mobileMenuContent.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenuHandler();
            });
        });
    });
}