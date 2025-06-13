document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calculateButton = document.getElementById('calculateButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    // Function with default parameter
    function sumNumbers(a, b = 10) {
        return a + b;
    }
    
    calculateButton.addEventListener('click', function() {
        const num1 = parseFloat(num1Input.value);
        const num2 = num2Input.value ? parseFloat(num2Input.value) : undefined;
        
        if (isNaN(num1)) {
            alert('Please enter a valid first number');
            return;
        }
        
        let result;
        if (num2Input.value === '') {
            // Using default parameter
            result = sumNumbers(num1);
            resultText.textContent = `${result} (${num1} + default 10)`;
        } else {
            if (isNaN(num2)) {
                alert('Please enter a valid second number or leave it empty');
                return;
            }
            // Using both parameters
            result = sumNumbers(num1, num2);
            resultText.textContent = result;
        }
        
        resultContainer.style.display = 'block';
    });
    
    // Add example values when clicking on the input fields
    num1Input.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '';
        }
    });
    
    num2Input.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '';
        }
    });
});