document.addEventListener('DOMContentLoaded', function() {
    const separatorInput = document.getElementById('separator');
    const wordInputsContainer = document.getElementById('wordInputs');
    const addWordBtn = document.getElementById('addWordBtn');
    const joinButton = document.getElementById('joinButton');
    const exampleButton = document.getElementById('exampleButton');
    const resultDisplay = document.getElementById('resultDisplay');
    const codeDisplay = document.getElementById('codeDisplay');
    
    let wordCount = 2; // Initial number of word inputs
    
    // Function using default and rest parameters
    function joinWords(separator = ', ', ...words) {
        // Filter out empty words and join with separator
        return words.filter(word => word.trim() !== '').join(separator);
    }
    
    // Add new word input field
    function addWordInput() {
        wordCount++;
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'word-input';
        newInput.placeholder = `Word ${wordCount}`;
        wordInputsContainer.appendChild(newInput);
    }
    
    // Join words and display result
    function joinAndDisplay() {
        const separator = separatorInput.value.trim();
        const wordInputs = document.querySelectorAll('.word-input');
        const words = Array.from(wordInputs).map(input => input.value.trim());
        
        // Use joinWords function with or without separator
        const result = separator ? 
            joinWords(separator, ...words) : 
            joinWords(undefined, ...words);
        
        // Display result
        resultDisplay.innerHTML = `
            <div class="joined-result">
                "${result}"
            </div>
        `;
        
        // Update code display
        const separatorDisplay = separator ? `'${separator}'` : 'default separator (", ")';
        const wordsDisplay = words.map(word => `'${word}'`).join(', ');
        
        codeDisplay.textContent = `// Using default and rest parameters
function joinWords(separator = ', ', ...words) {
    return words.filter(word => word.trim() !== '').join(separator);
}

// Example usage with your input:
const result = joinWords(${separatorDisplay}, ${wordsDisplay});
// Returns: "${result}"`;
    }
    
    // Show example
    function showExample() {
        separatorInput.value = '-';
        
        // Clear existing inputs
        wordInputsContainer.innerHTML = '';
        wordCount = 3;
        
        // Add example words
        const exampleWords = ['apple', 'banana', 'cherry'];
        exampleWords.forEach((word, index) => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'word-input';
            input.value = word;
            input.placeholder = `Word ${index + 1}`;
            wordInputsContainer.appendChild(input);
        });
        
        joinAndDisplay();
    }
    
    // Event listeners
    addWordBtn.addEventListener('click', addWordInput);
    joinButton.addEventListener('click', joinAndDisplay);
    exampleButton.addEventListener('click', showExample);
    
    // Also join when Enter is pressed in any input field
    separatorInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            joinAndDisplay();
        }
    });
    
    // Add event listeners for word inputs (dynamically added)
    document.addEventListener('keypress', function(e) {
        if (e.target.classList.contains('word-input') && e.key === 'Enter') {
            joinAndDisplay();
        }
    });
    
    // Show example on page load
    showExample();
});