document.addEventListener('DOMContentLoaded', function() {
            const calculateBtn = document.getElementById('calculate');
            const numbersInput = document.getElementById('numbers');
            const arrayItemsContainer = document.getElementById('array-items');
            const resultElement = document.getElementById('result');
            
            // Function to calculate product using reduce
            function calculateProduct(numbers) {
                return numbers.reduce((accumulator, currentValue) => {
                    return accumulator * currentValue;
                }, 1);
            }
            
            function calculate() {
                try {
                    // Get input value and convert to array of numbers
                    const input = numbersInput.value;
                    const numbers = input.split(',')
                                      .map(item => parseFloat(item.trim()))
                                      .filter(num => !isNaN(num));
                    
                    if (numbers.length === 0) {
                        throw new Error('Please enter valid numbers separated by commas');
                    }
                    
                    // Calculate product
                    const product = calculateProduct(numbers);
                    
                    // Display array items with multiplication signs
                    arrayItemsContainer.innerHTML = '';
                    numbers.forEach((num, index) => {
                        const itemElement = document.createElement('div');
                        itemElement.className = 'array-item';
                        itemElement.textContent = num;
                        arrayItemsContainer.appendChild(itemElement);
                    });
                    
                    // Display result
                    resultElement.textContent = product;
                    
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
            
            calculateBtn.addEventListener('click', calculate);
            
            // Trigger calculation on Enter key
            numbersInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculate();
                }
            });
            
            // Initial calculation
            calculate();
        });