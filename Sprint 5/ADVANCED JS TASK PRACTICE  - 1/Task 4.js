document.addEventListener('DOMContentLoaded', function() {
            const processBtn = document.getElementById('process');
            const numbersInput = document.getElementById('numbers');
            const originalArrayContainer = document.getElementById('original-array');
            const uniqueArrayContainer = document.getElementById('unique-array');
            
            // Function to get unique numbers using Set
            function getUniqueNumbers(numbers) {
                const uniqueSet = new Set(numbers);
                return Array.from(uniqueSet);
            }
            
            // Function to highlight duplicates
            function findDuplicates(numbers) {
                const duplicates = new Set();
                const seen = new Set();
                
                numbers.forEach(num => {
                    if (seen.has(num)) {
                        duplicates.add(num);
                    } else {
                        seen.add(num);
                    }
                });
                
                return duplicates;
            }
            
            function processNumbers() {
                try {
                    // Get input value and convert to array of numbers
                    const input = numbersInput.value;
                    const numbers = input.split(',')
                                        .map(item => parseFloat(item.trim()))
                                        .filter(num => !isNaN(num));
                    
                    if (numbers.length === 0) {
                        throw new Error('Please enter valid numbers separated by commas');
                    }
                    
                    // Get unique numbers
                    const uniqueNumbers = getUniqueNumbers(numbers);
                    
                    // Find duplicates for highlighting
                    const duplicates = findDuplicates(numbers);
                    
                    // Display original array with duplicates highlighted
                    originalArrayContainer.innerHTML = '';
                    numbers.forEach(num => {
                        const numElement = document.createElement('div');
                        numElement.className = `number-item original-item ${duplicates.has(num) ? 'duplicate-item' : ''}`;
                        numElement.textContent = num;
                        originalArrayContainer.appendChild(numElement);
                    });
                    
                    // Display unique numbers
                    uniqueArrayContainer.innerHTML = '';
                    uniqueNumbers.forEach(num => {
                        const numElement = document.createElement('div');
                        numElement.className = 'number-item unique-item';
                        numElement.textContent = num;
                        uniqueArrayContainer.appendChild(numElement);
                    });
                    
                    // Highlight the input briefly
                    numbersInput.style.borderColor = 'var(--success)';
                    setTimeout(() => {
                        numbersInput.style.borderColor = '#ddd';
                    }, 1000);
                    
                } catch (error) {
                    alert(error.message);
                    numbersInput.style.borderColor = 'var(--accent)';
                }
            }
            
            processBtn.addEventListener('click', processNumbers);
            
            // Trigger processing on Enter key
            numbersInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    processBtn.click();
                }
            });
            
            // Initial processing
            processBtn.click();
        });