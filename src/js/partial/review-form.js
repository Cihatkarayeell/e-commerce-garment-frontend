const reviewForm = document.querySelector('.review-form form');
if (reviewForm) {
    document.addEventListener('DOMContentLoaded', () => {
        const fileUpload = document.getElementById('file-upload');
        const fileInfo = document.querySelector('.file-info');
        const reviewForm = document.querySelector('.review-form form');
    
        // Dosya seçildiğinde bilgi metnini güncelle
        fileUpload?.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                if (files.length === 1) {
                    fileInfo.textContent = files[0].name;
                } else {
                    fileInfo.textContent = `${files.length} dosya seçildi`;
                }
            } else {
                fileInfo.textContent = 'Dosya seçilmedi';
            }
        });
    
        // Form gönderimi
        reviewForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            // Form işlemleri burada yapılacak
            console.log('Form gönderildi');
        });
    });
}
