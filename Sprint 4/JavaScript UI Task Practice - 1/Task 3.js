const inputField = document.getElementById('inputField');
        const logButton = document.getElementById('logButton');
        
        // Add click event listener to the button
        logButton.addEventListener('click', function() {
            // Get the value from the input field
            const inputValue = inputField.value;
            
            // Log the value to the console
            console.log(inputValue);
            
            // Provide visual feedback
            logButton.textContent = "Logged!";
            logButton.style.backgroundColor = "#2ecc71";
            
            // Reset button after 1 second
            setTimeout(() => {
                logButton.textContent = "Log to Console";
                logButton.style.backgroundColor = "#4a90e2";
                inputField.value = ""; // Optional: Clear the input
                inputField.focus();   // Optional: Focus back on input
            }, 1000);
        });
        
        // Optional: Allow Enter key to trigger the button
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                logButton.click();
            }
        });