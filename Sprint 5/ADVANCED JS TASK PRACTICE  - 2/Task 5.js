document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const generateButton = document.getElementById('generateButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    generateButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        
        if (!name || !age) {
            alert('Please enter both your name and age');
            return;
        }
        
        if (isNaN(age) || age <= 0) {
            alert('Please enter a valid age (positive number)');
            return;
        }
        
        // Using template literals to create the greeting
        const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
        
        resultText.textContent = greeting;
        resultContainer.style.display = 'block';
    });
    
    // Add example values when clicking on the input fields
    nameInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '';
        }
    });
    
    ageInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '';
        }
    });
});