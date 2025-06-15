document.addEventListener('DOMContentLoaded', function() {
    const array1Input = document.getElementById('array1');
    const array2Input = document.getElementById('array2');
    const combineButton = document.getElementById('combineButton');
    const randomButton = document.getElementById('randomButton');
    const clearButton = document.getElementById('clearButton');
    const displayArray1 = document.getElementById('displayArray1');
    const displayArray2 = document.getElementById('displayArray2');
    const displayResult = document.getElementById('displayResult');
    const codeDisplay = document.getElementById('codeDisplay');
    
    // Function to combine arrays and get unique values
    function combineUnique(array1, array2) {
        return [...new Set([...array1, ...array2])];
    }
    
    // Parse array input string
    function parseArray(input) {
        return input.split(',')
            .map(item => item.trim())
            .filter(item => item !== '');
    }
    
    // Display array as visual elements
    function displayArray(container, items, type) {
        container.innerHTML = '';
        
        if (items.length === 0) {
            container.innerHTML = '<div class="array-item empty">Empty</div>';
            return;
        }
        
        items.forEach(item => {
            const element = document.createElement('div');
            element.className = `array-item ${type}-item`;
            element.textContent = item;
            container.appendChild(element);
        });
    }
    
    // Process arrays and display results
    function processArrays() {
        const array1 = parseArray(array1Input.value);
        const array2 = parseArray(array2Input.value);
        
        // Display input arrays
        displayArray(displayArray1, array1, 'array1');
        displayArray(displayArray2, array2, 'array2');
        
        // Combine and display result
        const result = combineUnique(array1, array2);
        displayArray(displayResult, result, 'result');
        
        // Update code display
        codeDisplay.textContent = `// Using spread operator and Set
function combineUnique(array1, array2) {
    return [...new Set([...array1, ...array2])];
}

// Example usage with your input:
const array1 = [${array1.map(item => `'${item}'`).join(', ')}];
const array2 = [${array2.map(item => `'${item}'`).join(', ')}];
const result = combineUnique(array1, array2); 
// Returns: [${result.map(item => `'${item}'`).join(', ')}]`;
    }
    
    // Generate random arrays
    function generateRandomArrays() {
        const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 
                      'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'];
        
        // Shuffle array and pick random subset
        const shuffled = [...items].sort(() => 0.5 - Math.random());
        const array1 = shuffled.slice(0, Math.floor(Math.random() * 5) + 2);
        const array2 = shuffled.slice(5, Math.floor(Math.random() * 5) + 7);
        
        array1Input.value = array1.join(', ');
        array2Input.value = array2.join(', ');
        
        processArrays();
    }
    
    // Clear all inputs
    function clearAll() {
        array1Input.value = '';
        array2Input.value = '';
        displayArray1.innerHTML = '';
        displayArray2.innerHTML = '';
        displayResult.innerHTML = '';
        codeDisplay.textContent = `// Using spread operator and Set
function combineUnique(array1, array2) {
    return [...new Set([...array1, ...array2])];
}`;
    }
    
    // Event listeners
    combineButton.addEventListener('click', processArrays);
    randomButton.addEventListener('click', generateRandomArrays);
    clearButton.addEventListener('click', clearAll);
    
    // Also process when Enter is pressed in any input field
    array1Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processArrays();
        }
    });
    
    array2Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processArrays();
        }
    });
    
    // Generate random arrays on page load
    generateRandomArrays();
});