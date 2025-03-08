document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');
    const itemsPerPage = 6; // Her sayfada 6 blog kartı gösterilecek
    let currentPage = 1;

    // Toplam sayfa sayısını hesapla
    const totalPages = Math.ceil(blogCards.length / itemsPerPage);

    // Sayfa numaralarını güncelle
    function updatePagination() {
        const paginationList = document.querySelector('.blog-pagination ul');
        if (!paginationList) return;

        paginationList.innerHTML = '';

        // Geri ok (sayfa 2'den itibaren göster)
        if (currentPage >= 2) {
            const prevArrowLi = document.createElement('li');
            const prevArrowA = document.createElement('a');
            prevArrowA.href = '#';
            prevArrowA.innerHTML = '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.625 1L1.375 6L6.625 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            prevArrowA.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage--;
                showPage(currentPage);
                updatePagination();
            });
            prevArrowLi.appendChild(prevArrowA);
            paginationList.appendChild(prevArrowLi);
        }

        // Eğer son sayfadaysak, bir önceki sayfayı göster
        if (currentPage === totalPages && currentPage > 1) {
            const prevLi = document.createElement('li');
            const prevA = document.createElement('a');
            prevA.href = '#';
            prevA.textContent = currentPage - 1;
            prevA.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage--;
                showPage(currentPage);
                updatePagination();
            });
            prevLi.appendChild(prevA);
            paginationList.appendChild(prevLi);
        }

        // Aktif sayfa
        const activeLi = document.createElement('li');
        activeLi.className = 'active';
        const activeA = document.createElement('a');
        activeA.href = '#';
        activeA.textContent = currentPage;
        activeLi.appendChild(activeA);
        paginationList.appendChild(activeLi);

        // Sonraki sayfa varsa göster
        if (currentPage < totalPages) {
            const nextLi = document.createElement('li');
            const nextA = document.createElement('a');
            nextA.href = '#';
            nextA.textContent = currentPage + 1;
            nextA.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage++;
                showPage(currentPage);
                updatePagination();
            });
            nextLi.appendChild(nextA);
            paginationList.appendChild(nextLi);

            // İleri ok
            const nextArrowLi = document.createElement('li');
            const nextArrowA = document.createElement('a');
            nextArrowA.href = '#';
            nextArrowA.innerHTML = '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.375 1L6.625 6L1.375 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            nextArrowA.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage++;
                showPage(currentPage);
                updatePagination();
            });
            nextArrowLi.appendChild(nextArrowA);
            paginationList.appendChild(nextArrowLi);
        }
    }

    // Belirli bir sayfayı göster
    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        blogCards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Başlangıçta ilk sayfayı göster ve sayfalamayı güncelle
    if (blogCards.length > 0) {
        showPage(currentPage);
        updatePagination();
    }
});
