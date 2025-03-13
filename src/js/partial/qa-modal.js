document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('qaModal');
    const searchBtn = document.querySelector('.search-btn');
    const closeBtn = modal.querySelector('.close-btn');
    const questionForm = document.getElementById('questionForm');

    // Modal açma
    searchBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Modal kapatma
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Modal dışına tıklandığında kapatma
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Form gönderimi
    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Form işlemleri burada yapılacak
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
});
