document.addEventListener('DOMContentLoaded', function() {
    const stringsInput = document.getElementById('stringsInput');
    const findButton = document.getElementById('findButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    findButton.addEventListener('click', function() {
        const inputText = stringsInput.value.trim();
        
        if (!inputText) {
            alert('Please enter some strings separated by commas');
            return;
        }
        
        const strings = inputText.split(',')
            .map(str => str.trim())
            .filter(str => str.length > 0);
        
        if (strings.length === 0) {
            alert('Please enter valid strings separated by commas');
            return;
        }
        
        const longestString = strings.reduce((longest, current) => {
            return current.length > longest.length ? current : longest;
        }, "");
        
        resultText.textContent = `"${longestString}" (length: ${longestString.length})`;
        resultContainer.style.display = 'block';
    });
    
    stringsInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = 'apple, banana, cherry, date';
        }
    });
});