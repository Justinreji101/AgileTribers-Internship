document.addEventListener('DOMContentLoaded', function() {
    const arraysInput = document.getElementById('arraysInput');
    const flattenButton = document.getElementById('flattenButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    flattenButton.addEventListener('click', function() {
        const inputText = arraysInput.value.trim();
        
        if (!inputText) {
            alert('Please enter a nested array in JSON format');
            return;
        }
        
        try {
            const nestedArray = JSON.parse(inputText);
            
            if (!Array.isArray(nestedArray)) {
                throw new Error('Input must be an array');
            }
            
            const flattenedArray = nestedArray.reduce((acc, current) => {
                return acc.concat(current);
            }, []);
            
            resultText.textContent = JSON.stringify(flattenedArray, null, 2);
            resultContainer.style.display = 'block';
        } catch (error) {
            alert('Invalid input format. Please enter valid JSON array format.\nError: ' + error.message);
        }
    });
    
    arraysInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '[[1, 2, 3], [4, 5], [6, 7, 8, 9]]';
        }
    });
});