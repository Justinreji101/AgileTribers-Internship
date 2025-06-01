const changeInput = document.getElementById('changeInput');
        const outputHeading = document.getElementById('outputHeading');
        
        changeInput.addEventListener('change', function() {
            const inputValue = this.value;
            
            if (inputValue.trim() !== '') {
                outputHeading.textContent = `Input Changed: ${inputValue}`;
                outputHeading.classList.add('highlight');
                
                console.log(`Input Changed: ${inputValue}`);
                
                setTimeout(() => {
                    outputHeading.classList.remove('highlight');
                }, 1500);
            } else {
                outputHeading.textContent = 'Input Changed: [empty]';
            }
        });
        
        changeInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                outputHeading.textContent = 'Your input will appear here';
            }
        });