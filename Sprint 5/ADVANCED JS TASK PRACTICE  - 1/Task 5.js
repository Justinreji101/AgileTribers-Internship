document.addEventListener('DOMContentLoaded', function() {
            const filterBtn = document.getElementById('filter');
            const wordsInput = document.getElementById('words');
            const originalWordsContainer = document.getElementById('original-words');
            const filteredWordsContainer = document.getElementById('filtered-words');
            const originalCount = document.getElementById('original-count');
            const originalAvg = document.getElementById('original-avg');
            const filteredCount = document.getElementById('filtered-count');
            const filteredAvg = document.getElementById('filtered-avg');
            
            // Function to filter words with more than 5 letters
            function filterLongWords(words) {
                return words.filter(word => word.length > 5);
            }
            
            // Function to calculate average length
            function calculateAverageLength(words) {
                if (words.length === 0) return 0;
                const total = words.reduce((sum, word) => sum + word.length, 0);
                return (total / words.length).toFixed(1);
            }
            
            function processWords() {
                try {
                    // Get input value and convert to array of words
                    const input = wordsInput.value;
                    const words = input.split(',')
                                      .map(word => word.trim())
                                      .filter(word => word.length > 0);
                    
                    if (words.length === 0) {
                        throw new Error('Please enter valid words separated by commas');
                    }
                    
                    // Filter words
                    const longWords = filterLongWords(words);
                    
                    // Display original words
                    originalWordsContainer.innerHTML = '';
                    words.forEach(word => {
                        const wordElement = document.createElement('div');
                        wordElement.className = `word-item original-word ${word.length <= 5 ? 'short-word' : ''}`;
                        wordElement.innerHTML = `${word}<span class="word-length">${word.length}</span>`;
                        originalWordsContainer.appendChild(wordElement);
                    });
                    
                    // Display filtered words
                    filteredWordsContainer.innerHTML = '';
                    longWords.forEach(word => {
                        const wordElement = document.createElement('div');
                        wordElement.className = 'word-item filtered-word';
                        wordElement.innerHTML = `${word}<span class="word-length">${word.length}</span>`;
                        filteredWordsContainer.appendChild(wordElement);
                    });
                    
                    // Update stats
                    originalCount.textContent = `${words.length} word${words.length !== 1 ? 's' : ''}`;
                    originalAvg.textContent = `Avg. length: ${calculateAverageLength(words)}`;
                    filteredCount.textContent = `${longWords.length} word${longWords.length !== 1 ? 's' : ''}`;
                    filteredAvg.textContent = `Avg. length: ${calculateAverageLength(longWords)}`;
                    
                    // Highlight the input briefly
                    wordsInput.style.borderColor = 'var(--success)';
                    setTimeout(() => {
                        wordsInput.style.borderColor = '#ddd';
                    }, 1000);
                    
                } catch (error) {
                    alert(error.message);
                    wordsInput.style.borderColor = 'var(--accent)';
                }
            }
            
            filterBtn.addEventListener('click', processWords);
            
            // Trigger processing on Enter key (with Ctrl or Shift)
            wordsInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && (e.ctrlKey || e.shiftKey)) {
                    e.preventDefault();
                    filterBtn.click();
                }
            });
            
            // Initial processing
            filterBtn.click();
        });