document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const findButton = document.getElementById('findButton');
    const randomButton = document.getElementById('randomButton');
    const originalArrayDisplay = document.getElementById('originalArray');
    const resultDisplay = document.getElementById('result');
    
    // Function to find first positive number
    function findFirstPositive(numbers) {
        return numbers.find(num => num > 0);
    }
    
    // Process input and display result
    function processInput() {
        const inputValue = numberInput.value.trim();
        
        if (!inputValue) {
            alert('Please enter some numbers!');
            return;
        }
        
        // Split input by commas and convert to numbers
        const numbers = inputValue.split(',').map(item => {
            // Remove any whitespace and convert to number
            const num = parseFloat(item.trim());
            // Return NaN if conversion fails
            return isNaN(num) ? NaN : num;
        });
        
        // Check if any values couldn't be converted to numbers
        if (numbers.some(isNaN)) {
            alert('Please enter valid numbers separated by commas!');
            return;
        }
        
        // Display original array
        originalArrayDisplay.textContent = `Original array: [${numbers.join(', ')}]`;
        
        // Find first positive number
        const firstPositive = findFirstPositive(numbers);
        
        // Display result
        if (firstPositive !== undefined) {
            resultDisplay.textContent = `First positive number: ${firstPositive}`;
            resultDisplay.style.color = '#00b894'; // Success color
        } else {
            resultDisplay.textContent = 'No positive numbers found in the array';
            resultDisplay.style.color = '#d63031'; // Error color
        }
    }
    
    // Generate random numbers
    function generateRandomNumbers() {
        const count = Math.floor(Math.random() * 10) + 5; // 5-14 numbers
        const numbers = [];
        
        for (let i = 0; i < count; i++) {
            // Generate numbers between -20 and 20
            numbers.push(Math.floor(Math.random() * 41) - 20);
        }
        
        numberInput.value = numbers.join(', ');
        processInput();
    }
    
    // Event listeners
    findButton.addEventListener('click', processInput);
    randomButton.addEventListener('click', generateRandomNumbers);
    
    // Also process when Enter is pressed in the input field
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processInput();
        }
    });
    
    // Generate some random numbers on page load
    generateRandomNumbers();
});