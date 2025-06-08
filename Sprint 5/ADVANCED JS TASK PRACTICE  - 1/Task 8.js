document.addEventListener('DOMContentLoaded', function() {
            const checkBtn = document.getElementById('check');
            const valueInput = document.getElementById('value-input');
            const resultBox = document.getElementById('result-box');
            const valuePreview = document.getElementById('value-preview');
            const typeOptions = document.querySelectorAll('.type-option');
            
            // Function to check if a value is an array
            function isArray(value) {
                try {
                    // Evaluate the input as JavaScript code
                    const evaluatedValue = eval(`(${value})`);
                    return Array.isArray(evaluatedValue);
                } catch (e) {
                    return false;
                }
            }
            
            function checkValue() {
                try {
                    const value = valueInput.value.trim();
                    
                    if (!value) {
                        throw new Error('Please enter a value to check');
                    }
                    
                    // Evaluate and check if it's an array
                    const result = isArray(value);
                    
                    // Update the UI
                    valuePreview.textContent = value;
                    
                    if (result) {
                        resultBox.textContent = 'True';
                        resultBox.className = 'result-box is-array';
                    } else {
                        resultBox.textContent = 'False';
                        resultBox.className = 'result-box not-array';
                    }
                    
                    // Highlight the input briefly
                    valueInput.style.borderColor = result ? 'var(--success)' : 'var(--error)';
                    setTimeout(() => {
                        valueInput.style.borderColor = '#ddd';
                    }, 1000);
                    
                } catch (error) {
                    alert(error.message);
                    valueInput.style.borderColor = 'var(--error)';
                }
            }
            
            // Set up type options
            typeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove active class from all options
                    typeOptions.forEach(opt => opt.classList.remove('active'));
                    
                    // Add active class to clicked option
                    this.classList.add('active');
                    
                    // Set the input value
                    valueInput.value = this.getAttribute('data-value');
                    
                    // Trigger check
                    checkValue();
                });
            });
            
            // Set first option as active by default
            typeOptions[0].classList.add('active');
            
            checkBtn.addEventListener('click', checkValue);
            
            // Trigger check on Shift+Enter in textarea
            valueInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && e.shiftKey) {
                    e.preventDefault();
                    checkValue();
                }
            });
            
            // Initial check
            checkValue();
        });