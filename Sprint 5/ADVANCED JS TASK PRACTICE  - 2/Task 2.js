document.addEventListener('DOMContentLoaded', function() {
            const arrayInput = document.getElementById('arrayInput');
            const searchValueInput = document.getElementById('searchValue');
            const checkButton = document.getElementById('checkButton');
            const resultContainer = document.getElementById('resultContainer');
            const resultText = document.getElementById('resultText');
            
            checkButton.addEventListener('click', function() {
                const arrayItems = arrayInput.value.split(',').map(item => item.trim());
                const searchValue = searchValueInput.value.trim();
                
                if (arrayItems.length === 0 || !searchValue) {
                    alert('Please enter both array items and a value to search.');
                    return;
                }
                
                const includesValue = arrayItems.includes(searchValue);
                
                resultText.textContent = includesValue ? 'True' : 'False';
                resultText.className = includesValue ? 'result-text true-result' : 'result-text false-result';
                resultContainer.style.display = 'block';
            });
            
            // Add example text when clicking on the input fields
            arrayInput.addEventListener('focus', function() {
                if (!this.value) {
                    this.value = 'apple, banana, cherry';
                }
            });
            
            searchValueInput.addEventListener('focus', function() {
                if (!this.value) {
                    this.value = 'banana';
                }
            });
        });