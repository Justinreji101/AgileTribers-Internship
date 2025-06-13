document.addEventListener('DOMContentLoaded', function() {
    const cartInput = document.getElementById('cartInput');
    const calculateButton = document.getElementById('calculateButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    const itemsList = document.getElementById('itemsList');
    
    calculateButton.addEventListener('click', function() {
        const cartText = cartInput.value.trim();
        
        if (!cartText) {
            alert('Please enter cart items in JSON format');
            return;
        }
        
        try {
            const cart = JSON.parse(cartText);
            
            if (!Array.isArray(cart)) {
                throw new Error('Input must be an array of cart items');
            }
            
            // Calculate total
            const total = cart.reduce((sum, item) => {
                if (typeof item.price !== 'number') {
                    throw new Error(`Invalid price for item: ${item.item}`);
                }
                return sum + item.price;
            }, 0);
            
            // Display results
            resultText.textContent = `$${total.toFixed(2)}`;
            
            // Display item list
            itemsList.innerHTML = '';
            cart.forEach(item => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <span class="item-name">${item.item}</span>
                    <span class="item-price">$${item.price.toFixed(2)}</span>
                `;
                itemsList.appendChild(div);
            });
            
            resultContainer.style.display = 'block';
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
    
    // Add example values when clicking on the input field
    cartInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = `[
  { "item": "apple", "price": 1.5 },
  { "item": "banana", "price": 2.0 },
  { "item": "orange", "price": 1.25 }
]`;
        }
    });
});