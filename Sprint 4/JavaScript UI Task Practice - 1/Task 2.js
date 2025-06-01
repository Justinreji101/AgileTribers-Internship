const num1 = 10;
        const num2 = 20;
        
        // Get DOM elements
        const calculateButton = document.getElementById('calculateButton');
        const resultDisplay = document.getElementById('result');
        
        // Add click event listener
        calculateButton.addEventListener('click', function() {
            // Calculate the sum
            const sum = num1 + num2;
            
            // Log to console as required
            console.log("Sum: " + sum);
            
            // Display the result on the page
            resultDisplay.textContent = `The sum of ${num1} and ${num2} is: ${sum}`;
            
            // Optional: Visual feedback
            calculateButton.textContent = "Calculated!";
            setTimeout(() => {
                calculateButton.textContent = "Calculate Sum";
            }, 1000);
        });