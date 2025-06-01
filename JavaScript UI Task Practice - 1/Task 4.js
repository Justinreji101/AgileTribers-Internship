const userInput = document.getElementById('userInput');
        const displayButton = document.getElementById('displayButton');
        const outputParagraph = document.getElementById('outputParagraph');
        
        displayButton.addEventListener('click', function() {
            // Get the input value
            const inputText = userInput.value;
            
            if (inputText.trim() !== '') {
                outputParagraph.textContent = inputText;
                outputParagraph.classList.add('animation');
                
                setTimeout(() => {
                    outputParagraph.classList.remove('animation');
                }, 500);
            } else {
                outputParagraph.textContent = 'Please enter some text first!';
                outputParagraph.style.color = '#e74c3c';
            }
            
            userInput.value = '';
            userInput.focus();
        });
        
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                displayButton.click();
            }
        });