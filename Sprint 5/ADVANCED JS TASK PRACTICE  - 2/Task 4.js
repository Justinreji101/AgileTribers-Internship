document.addEventListener('DOMContentLoaded', function() {
    const numeratorInput = document.getElementById('numerator');
    const denominatorInput = document.getElementById('denominator');
    const divideButton = document.getElementById('divideButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    divideButton.addEventListener('click', function() {
        const numerator = parseFloat(numeratorInput.value);
        const denominator = parseFloat(denominatorInput.value);
        
        if (isNaN(numerator) || isNaN(denominator)) {
            alert('Please enter valid numbers in both fields');
            return;
        }
        
        try {
            if (denominator === 0) {
                throw new Error('Division by zero is not allowed.');
            }
            
            const result = numerator / denominator;
            resultText.textContent = result;
            resultText.className = 'result-text success-result';
            resultContainer.style.display = 'block';
        } catch (error) {
            resultText.textContent = error.message;
            resultText.className = 'result-text error-result';
            resultContainer.style.display = 'block';
        }
    });
    
    // Add example values when clicking on the input fields
    numeratorInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '4';
        }
    });
    
    denominatorInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '2';
        }
    });
});