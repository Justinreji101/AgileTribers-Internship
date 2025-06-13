document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const cityInput = document.getElementById('city');
    const destructureButton = document.getElementById('destructureButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultGrid = document.getElementById('resultGrid');
    
    destructureButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const city = cityInput.value.trim();
        
        if (!name || !age || !city) {
            alert('Please fill in all fields');
            return;
        }
        
        if (isNaN(age) || age <= 0) {
            alert('Please enter a valid age (positive number)');
            return;
        }
        
        // Create the person object
        const person = {
            name: name,
            age: age,
            city: city
        };
        
        // Destructure the object
        const { name: personName, age: personAge, city: personCity } = person;
        
        // Clear previous results
        resultGrid.innerHTML = '';
        
        // Create result items
        const properties = [personName, personAge, personCity];
        properties.forEach(prop => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.textContent = `'${prop}'`;
            resultGrid.appendChild(div);
        });
        
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
    
    cityInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '';
        }
    });
});