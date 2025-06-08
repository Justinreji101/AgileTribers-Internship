document.addEventListener('DOMContentLoaded', function() {
            const showKeysBtn = document.getElementById('show-keys');
            const arrayItemsInput = document.getElementById('array-items');
            const arrayDisplay = document.getElementById('array-display');
            const exampleBtns = document.querySelectorAll('.example-btn');
            
            function displayArrayKeys(items) {
                arrayDisplay.innerHTML = '';
                
                // Create keys iterator and convert to array
                const keys = Array.from(items.keys());
                
                // Create column for indices
                const indexColumn = document.createElement('div');
                indexColumn.className = 'array-column';
                
                const indexHeader = document.createElement('div');
                indexHeader.className = 'array-header';
                indexHeader.textContent = 'Indices';
                indexColumn.appendChild(indexHeader);
                
                // Create column for arrow
                const arrowColumn = document.createElement('div');
                arrowColumn.className = 'array-column';
                arrowColumn.style.justifyContent = 'center';
                
                // Create column for values
                const valueColumn = document.createElement('div');
                valueColumn.className = 'array-column';
                
                const valueHeader = document.createElement('div');
                valueHeader.className = 'array-header';
                valueHeader.textContent = 'Values';
                valueColumn.appendChild(valueHeader);
                
                // Add items to columns
                keys.forEach(key => {
                    // Add index to index column
                    const indexElement = document.createElement('div');
                    indexElement.className = 'index-display';
                    indexElement.textContent = key;
                    indexColumn.appendChild(indexElement);
                    
                    // Add arrow to arrow column
                    const arrowElement = document.createElement('div');
                    arrowElement.className = 'arrow';
                    arrowElement.textContent = '→';
                    arrowColumn.appendChild(arrowElement);
                    
                    // Add value to value column
                    const valueElement = document.createElement('div');
                    valueElement.className = 'value-display';
                    valueElement.textContent = items[key];
                    valueColumn.appendChild(valueElement);
                });
                
                // Add columns to display
                arrayDisplay.appendChild(indexColumn);
                arrayDisplay.appendChild(arrowColumn);
                arrayDisplay.appendChild(valueColumn);
            }
            
            function processArray() {
                try {
                    const input = arrayItemsInput.value.trim();
                    const items = input.split(',')
                                      .map(item => item.trim())
                                      .filter(item => item.length > 0);
                    
                    if (items.length === 0) {
                        throw new Error('Please enter array items separated by commas');
                    }
                    
                    displayArrayKeys(items);
                    
                    // Highlight the input briefly
                    arrayItemsInput.style.borderColor = 'var(--primary)';
                    setTimeout(() => {
                        arrayItemsInput.style.borderColor = '#ddd';
                    }, 1000);
                    
                } catch (error) {
                    alert(error.message);
                    arrayItemsInput.style.borderColor = 'var(--accent)';
                }
            }
            
            // Set up example buttons
            exampleBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    arrayItemsInput.value = this.getAttribute('data-items');
                    processArray();
                });
            });
            
            showKeysBtn.addEventListener('click', processArray);
            
            // Trigger processing on Shift+Enter in textarea
            arrayItemsInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && e.shiftKey) {
                    e.preventDefault();
                    processArray();
                }
            });
            
            // Initial processing
            processArray();
        });