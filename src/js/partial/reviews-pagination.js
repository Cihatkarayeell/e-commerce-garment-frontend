class ResponsivePagination {
    constructor(container) {
        this.container = container;
        this.currentPage = 1;
        this.visiblePages = 5; // Her zaman 5 sayfa göster
        this.links = container.querySelectorAll('a[data-page]');
        this.totalPages = this.links.length;
        
        this.init();
        this.initPrevNextButtons();
    }

    init() {
        // İlk 5 sayfayı göster, diğerlerini gizle
        this.links.forEach((link, index) => {
            link.style.display = index < this.visiblePages ? '' : 'none';
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const clickedPage = parseInt(link.dataset.page);
                this.goToPage(clickedPage);
            });
        });
    }

    initPrevNextButtons() {
        const prevBtn = this.container.previousElementSibling;
        const nextBtn = this.container.nextElementSibling;

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.goToPage(this.currentPage - 1);
                }
            });
            prevBtn.disabled = this.currentPage === 1;
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentPage < this.totalPages) {
                    this.goToPage(this.currentPage + 1);
                }
            });
            nextBtn.disabled = this.currentPage === this.totalPages;
        }
    }

    goToPage(clickedPage) {
        // Önceki "current" class'ını kaldır
        const currentLink = this.container.querySelector('a.current');
        if (currentLink) {
            currentLink.classList.remove('current');
        }

        // Yeni sayfaya "current" class'ı ekle
        const newCurrentLink = this.container.querySelector(`a[data-page="${clickedPage}"]`);
        if (newCurrentLink) {
            newCurrentLink.classList.add('current');
        }

        // Görünür sayfaları güncelle
        let startPage;
        
        if (clickedPage <= 3) {
            // İlk sayfalardaysa, ilk 5 sayfayı göster
            startPage = 1;
        } else if (clickedPage >= this.totalPages - 2) {
            // Son sayfalardaysa, son 5 sayfayı göster
            startPage = this.totalPages - 4;
        } else {
            // Ortadaki sayfalardaysa, tıklanan sayfayı ortala
            startPage = clickedPage - 2;
        }

        this.links.forEach((link, index) => {
            const pageNum = index + 1;
            const shouldShow = pageNum >= startPage && pageNum < startPage + this.visiblePages;
            link.style.display = shouldShow ? '' : 'none';
        });

        this.currentPage = clickedPage;
        
        // Prev/Next butonlarını güncelle
        const prevBtn = this.container.previousElementSibling;
        const nextBtn = this.container.nextElementSibling;
        
        if (prevBtn) {
            prevBtn.disabled = this.currentPage === 1;
        }
        if (nextBtn) {
            nextBtn.disabled = this.currentPage === this.totalPages;
        }
    }
}

// Sayfadaki tüm pagination containerlarını başlat
document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.page-numbers');
    containers.forEach(container => new ResponsivePagination(container));
});