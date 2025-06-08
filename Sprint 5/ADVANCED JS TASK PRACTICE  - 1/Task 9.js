document.addEventListener('DOMContentLoaded', function() {
            const checkBtn = document.getElementById('check');
            const sentenceInput = document.getElementById('sentence');
            const wordInput = document.getElementById('word');
            const sentenceDisplay = document.getElementById('sentence-display');
            const resultBox = document.getElementById('result-box');
            const exampleBtns = document.querySelectorAll('.example-btn');
            
            // Function to check if word exists in sentence
            function checkWordInSentence(sentence, word) {
                return sentence.toLowerCase().includes(word.toLowerCase());
            }
            
            // Function to highlight the word in the sentence
            function highlightWord(sentence, word) {
                if (!word) return sentence;
                
                const lowerSentence = sentence.toLowerCase();
                const lowerWord = word.toLowerCase();
                let result = '';
                let lastIndex = 0;
                let currentIndex = lowerSentence.indexOf(lowerWord);
                
                while (currentIndex !== -1) {
                    // Add text before the match
                    result += sentence.substring(lastIndex, currentIndex);
                    
                    // Add highlighted match
                    result += `<span class="highlight">${sentence.substring(currentIndex, currentIndex + word.length)}</span>`;
                    
                    lastIndex = currentIndex + word.length;
                    currentIndex = lowerSentence.indexOf(lowerWord, lastIndex);
                }
                
                // Add remaining text
                result += sentence.substring(lastIndex);
                
                return result;
            }
            
            function checkForWord() {
                try {
                    const sentence = sentenceInput.value.trim();
                    const word = wordInput.value.trim();
                    
                    if (!sentence) {
                        throw new Error('Please enter a sentence');
                    }
                    
                    if (!word) {
                        throw new Error('Please enter a word to find');
                    }
                    
                    // Check if word exists in sentence
                    const wordExists = checkWordInSentence(sentence, word);
                    
                    // Update the UI
                    sentenceDisplay.innerHTML = highlightWord(sentence, word);
                    
                    if (wordExists) {
                        resultBox.textContent = 'Word Found!';
                        resultBox.className = 'result-box word-found';
                    } else {
                        resultBox.textContent = 'Word Not Found';
                        resultBox.className = 'result-box word-not-found';
                    }
                    
                    // Highlight the inputs briefly
                    const highlightColor = wordExists ? 'var(--success)' : 'var(--accent)';
                    sentenceInput.style.borderColor = highlightColor;
                    wordInput.style.borderColor = highlightColor;
                    setTimeout(() => {
                        sentenceInput.style.borderColor = '#ddd';
                        wordInput.style.borderColor = '#ddd';
                    }, 1000);
                    
                } catch (error) {
                    alert(error.message);
                    sentenceInput.style.borderColor = 'var(--accent)';
                    wordInput.style.borderColor = 'var(--accent)';
                }
            }
            
            // Set up example buttons
            exampleBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    sentenceInput.value = this.getAttribute('data-sentence');
                    wordInput.value = this.getAttribute('data-word');
                    checkForWord();
                });
            });
            
            checkBtn.addEventListener('click', checkForWord);
            
            // Trigger check on Enter key in word input
            wordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    checkForWord();
                }
            });
            
            // Initial check
            checkForWord();
        });