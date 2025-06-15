document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const processButton = document.getElementById('processButton');
    const randomButton = document.getElementById('randomButton');
    const originalArrayDisplay = document.getElementById('originalArray');
    const evenArrayDisplay = document.getElementById('evenArray');
    const resultArrayDisplay = document.getElementById('resultArray');
    const codeDisplay = document.getElementById('codeDisplay');
    
    // Process numbers using filter and map with arrow functions
    function processNumbers(numbers) {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        const squaredEvens = evenNumbers.map(num => num * num);
        return { evenNumbers, squaredEvens };
    }
    
    // Generate random numbers
    function generateRandomNumbers() {
        const count = Math.floor(Math.random() * 10) + 5; // 5-14 numbers
        const numbers = [];
        
        for (let i = 0; i < count; i++) {
            // Generate numbers between 1 and 20
            numbers.push(Math.floor(Math.random() * 20) + 1);
        }
        
        numberInput.value = numbers.join(', ');
        processArray();
    }
    
    // Display array as chips
    function displayArray(container, numbers, type) {
        container.innerHTML = '';
        
        if (numbers.length === 0) {
            const message = document.createElement('div');
            message.textContent = type === 'original' ? 'No numbers' : 
                                 type === 'even' ? 'No even numbers' : 'No results';
            message.style.color = '#94a3b8';
            container.appendChild(message);
            return;
        }
        
        numbers.forEach(num => {
            const chip = document.createElement('div');
            chip.className = `number-chip ${type}-chip`;
            chip.textContent = num;
            container.appendChild(chip);
        });
    }
    
    // Process the array and display results
    function processArray() {
        const inputValue = numberInput.value.trim();
        
        if (!inputValue) {
            alert('Please enter some numbers!');
            return;
        }
        
        // Split input by commas and convert to numbers
        const numbers = inputValue.split(',').map(item => {
            const num = parseFloat(item.trim());
            return isNaN(num) ? NaN : num;
        });
        
        // Check for invalid numbers
        if (numbers.some(isNaN)) {
            alert('Please enter valid numbers separated by commas!');
            return;
        }
        
        // Display original array
        displayArray(originalArrayDisplay, numbers, 'original');
        
        // Process numbers
        const { evenNumbers, squaredEvens } = processNumbers(numbers);
        
        // Display even numbers
        displayArray(evenArrayDisplay, evenNumbers, 'even');
        
        // Display squared evens
        displayArray(resultArrayDisplay, squaredEvens, 'squared');
        
        // Update code display with actual values
        codeDisplay.textContent = `// Using filter and map with arrow functions
function processNumbers(numbers) {
    return numbers
        .filter(num => num % 2 === 0)  // Filter even numbers
        .map(num => num * num);        // Square each number
}

// Example usage with your input:
const numbers = [${numbers.join(', ')}];
const result = processNumbers(numbers); // Returns: [${squaredEvens.join(', ')}]`;
    }
    
    // Event listeners
    processButton.addEventListener('click', processArray);
    randomButton.addEventListener('click', generateRandomNumbers);
    
    // Also process when Enter is pressed in the input field
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processArray();
        }
    });
    
    // Generate some random numbers on page load
    generateRandomNumbers();
});