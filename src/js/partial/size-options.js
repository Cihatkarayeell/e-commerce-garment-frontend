const sizeOptions = document.querySelector('.size-options');
if (sizeOptions) {
    document.addEventListener('DOMContentLoaded', function() {
        const sizeButtons = document.querySelectorAll('.size-btn');
        
        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Önce tüm butonlardan active class'ını kaldır
                sizeButtons.forEach(btn => btn.classList.remove('active'));
                // Tıklanan butona active class'ını ekle
                this.classList.add('active');
            });
        });
    });
}