document.addEventListener('DOMContentLoaded', function() {
            const calculateBtn = document.getElementById('calculate');
            const numbersInput = document.getElementById('numbers');
            const traditionalResult = document.getElementById('traditional-result');
            const arrowResult = document.getElementById('arrow-result');
            
            // Traditional function
            function squareNumbersTraditional(numbers) {
                return numbers.map(function(num) {
                    return num * num;
                });
            }
            
            // Arrow function
            const squareNumbersArrow = numbers => numbers.map(num => num * num);
            
            calculateBtn.addEventListener('click', function() {
                try {
                    // Get input value and convert to array of numbers
                    const input = numbersInput.value;
                    const numbers = input.split(',')
                                        .map(item => parseFloat(item.trim()))
                                        .filter(num => !isNaN(num));
                    
                    if (numbers.length === 0) {
                        throw new Error('Please enter valid numbers separated by commas');
                    }
                    
                    // Calculate results
                    const traditionalSquares = squareNumbersTraditional(numbers);
                    const arrowSquares = squareNumbersArrow(numbers);
                    
                    // Display results
                    traditionalResult.textContent = JSON.stringify(traditionalSquares);
                    arrowResult.textContent = JSON.stringify(arrowSquares);
                    
                    // Highlight the input briefly
                    numbersInput.style.borderColor = 'var(--success)';
                    setTimeout(() => {
                        numbersInput.style.borderColor = '#ddd';
                    }, 1000);
                    
                } catch (error) {
                    alert(error.message);
                    numbersInput.style.borderColor = 'var(--accent)';
                }
            });
            
            // Trigger calculation on Enter key
            numbersInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculateBtn.click();
                }
            });
            
            // Initial calculation
            calculateBtn.click();
        });