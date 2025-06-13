document.addEventListener('DOMContentLoaded', function() {
    const numbersInput = document.getElementById('numbersInput');
    const calculateButton = document.getElementById('calculateButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    const calculationDetails = document.getElementById('calculationDetails');
    
    // Function using rest parameters
    function sumNumbers(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    
    calculateButton.addEventListener('click', function() {
        const inputText = numbersInput.value.trim();
        
        if (!inputText) {
            alert('Please enter some numbers separated by commas');
            return;
        }
        
        // Convert input string to array of numbers
        const numbers = inputText.split(',')
            .map(item => parseFloat(item.trim()))
            .filter(num => !isNaN(num));
        
        if (numbers.length === 0) {
            alert('Please enter valid numbers separated by commas');
            return;
        }
        
        // Calculate sum using rest parameters
        const sum = sumNumbers(...numbers);
        
        // Display results
        resultText.textContent = sum;
        calculationDetails.textContent = `sumNumbers(${numbers.join(', ')}) = ${sum}`;
        resultContainer.style.display = 'block';
    });
    
    // Add example values when clicking on the input field
    numbersInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '';
        }
    });
});