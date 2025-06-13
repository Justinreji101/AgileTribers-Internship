document.addEventListener('DOMContentLoaded', function() {
    const productsInput = document.getElementById('productsInput');
    const idInput = document.getElementById('idInput');
    const findButton = document.getElementById('findButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    findButton.addEventListener('click', function() {
        const productsText = productsInput.value.trim();
        const id = parseInt(idInput.value.trim());
        
        if (!productsText || isNaN(id)) {
            alert('Please enter both the product list and a valid ID to search');
            return;
        }
        
        try {
            const products = JSON.parse(productsText);
            
            if (!Array.isArray(products)) {
                throw new Error('Input must be an array of product objects');
            }
            
            // Find product by ID
            const product = products.find(p => p.id === id);
            
            if (product) {
                resultText.textContent = JSON.stringify(product, null, 2);
                resultText.className = 'result-text';
            } else {
                resultText.textContent = `No product found with ID ${id}`;
                resultText.className = 'result-text not-found';
            }
            
            resultContainer.style.display = 'block';
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
    
    // Add example values when clicking on the input fields
    productsInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = `[
  { "id": 101, "name": "Laptop" },
  { "id": 102, "name": "Phone" },
  { "id": 103, "name": "Tablet" }
]`;
        }
    });
    
    idInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '102';
        }
    });
});