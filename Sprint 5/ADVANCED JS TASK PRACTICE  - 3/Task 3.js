document.addEventListener('DOMContentLoaded', function() {
    const wordsInput = document.getElementById('wordsInput');
    const countButton = document.getElementById('countButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    countButton.addEventListener('click', function() {
        const inputText = wordsInput.value.trim();
        
        if (!inputText) {
            alert('Please enter some words separated by commas');
            return;
        }
        
        const words = inputText.split(',')
            .map(word => word.trim())
            .filter(word => word.length > 0);
        
        if (words.length === 0) {
            alert('Please enter valid words separated by commas');
            return;
        }
        
        const wordCounts = words.reduce((counts, word) => {
            counts[word] = (counts[word] || 0) + 1;
            return counts;
        }, {});
        
        // Display the results in a nice format
        resultText.innerHTML = '';
        for (const [word, count] of Object.entries(wordCounts)) {
            const div = document.createElement('div');
            div.className = 'word-count';
            div.innerHTML = `<span class="word">${word}</span><span class="count">${count}</span>`;
            resultText.appendChild(div);
        }
        
        resultContainer.style.display = 'block';
    });
    
    wordsInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = 'apple, banana, apple, orange, banana, apple';
        }
    });
});