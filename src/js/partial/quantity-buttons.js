document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('.quantity input[type="number"]');
    
    quantityInputs.forEach(input => {
        const wrapper = input.closest('.quantity');
        const minusBtn = wrapper.querySelector('.minus');
        const plusBtn = wrapper.querySelector('.plus');
        
        // Minus butonunun durumunu kontrol et
        const updateMinusButtonState = (value) => {
            if (value <= 1) {
                minusBtn.classList.add('disabled');
            } else {
                minusBtn.classList.remove('disabled');
            }
        };

        // Input değeri değiştiğinde
        input.addEventListener('change', function() {
            if (this.value < 1) {
                this.value = 1;
            }
            updateMinusButtonState(parseInt(this.value));
        });

        // Minus butonu click eventi
        minusBtn.addEventListener('click', function() {
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
                updateMinusButtonState(currentValue - 1);
            }
        });

        // Plus butonu click eventi
        plusBtn.addEventListener('click', function() {
            const currentValue = parseInt(input.value);
            input.value = currentValue + 1;
            updateMinusButtonState(currentValue + 1);
        });
    });
});
