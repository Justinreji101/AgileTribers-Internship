document.addEventListener('DOMContentLoaded', function() {
    const numbersInput = document.getElementById('numbersInput');
    const findButton = document.getElementById('findButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    findButton.addEventListener('click', function() {
        const inputText = numbersInput.value.trim();
        
        if (!inputText) {
            alert('Please enter some numbers separated by commas');
            return;
        }
        
        const numbers = inputText.split(',')
            .map(num => parseFloat(num.trim()))
            .filter(num => !isNaN(num));
        
        if (numbers.length === 0) {
            alert('Please enter valid numbers separated by commas');
            return;
        }
        
        // Find first even number
        const firstEven = numbers.find(num => num % 2 === 0);
        
        if (firstEven !== undefined) {
            resultText.textContent = firstEven;
            resultText.className = 'result-text';
        } else {
            resultText.textContent = 'No even numbers found';
            resultText.className = 'result-text no-result';
        }
        
        resultContainer.style.display = 'block';
    });
    
    // Add example values when clicking on the input field
    numbersInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '1, 3, 7, 10, 2';
        }
    });
});