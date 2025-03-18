const quantityControls = document.querySelectorAll('.quantity-controls');

if (quantityControls.length > 0) {
    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');
        const input = control.querySelector('input[type="number"]');

        // Initial state check
        updateMinusButtonState(input.value, minusBtn);

        // Minus button click handler
        minusBtn.addEventListener('click', () => {
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
                updateMinusButtonState(input.value, minusBtn);
            }
        });

        // Plus button click handler
        plusBtn.addEventListener('click', () => {
            const currentValue = parseInt(input.value);
            if (currentValue < 99) {
                input.value = currentValue + 1;
                updateMinusButtonState(input.value, minusBtn);
            }
        });

        // Input change handler
        input.addEventListener('change', () => {
            let value = parseInt(input.value);
            
            // Ensure value is within bounds
            if (isNaN(value) || value < 1) value = 1;
            if (value > 99) value = 99;
            
            input.value = value;
            updateMinusButtonState(input.value, minusBtn);
        });
    });
}

function updateMinusButtonState(value, minusBtn) {
    const currentValue = parseInt(value);
    if (currentValue === 1) {
        minusBtn.classList.add('disabled');
    } else if (currentValue === 2) {
        minusBtn.classList.remove('disabled');
    }
}
