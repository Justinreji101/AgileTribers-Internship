document.addEventListener('DOMContentLoaded', function() {
    const objectsInput = document.getElementById('objectsInput');
    const propertyInput = document.getElementById('propertyInput');
    const groupButton = document.getElementById('groupButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    groupButton.addEventListener('click', function() {
        const objectsText = objectsInput.value.trim();
        const property = propertyInput.value.trim();
        
        if (!objectsText || !property) {
            alert('Please enter both the array of objects and the property to group by');
            return;
        }
        
        try {
            const objects = JSON.parse(objectsText);
            
            if (!Array.isArray(objects)) {
                throw new Error('Input must be an array of objects');
            }
            
            if (objects.length > 0 && !objects[0].hasOwnProperty(property)) {
                throw new Error(`Property "${property}" not found in objects`);
            }
            
            const grouped = objects.reduce((acc, obj) => {
                const key = obj[property];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {});
            
            resultText.textContent = JSON.stringify(grouped, null, 2);
            resultContainer.style.display = 'block';
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
    
    // Add example values when clicking on the input fields
    objectsInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = `[
  { "name": "Alice", "age": 21 },
  { "name": "Bob", "age": 25 },
  { "name": "Charlie", "age": 21 },
  { "name": "David", "age": 25 },
  { "name": "Eve", "age": 22 }
]`;
        }
    });
    
    propertyInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = 'age';
        }
    });
});