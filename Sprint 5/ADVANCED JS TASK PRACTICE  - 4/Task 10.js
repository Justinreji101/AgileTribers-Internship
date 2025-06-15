document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const addProductBtn = document.getElementById('addProductBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const exampleBtn = document.getElementById('exampleBtn');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const averagePriceDisplay = document.getElementById('averagePrice');
    const aboveAverageDisplay = document.getElementById('aboveAverageProducts');
    const codeDisplay = document.getElementById('codeDisplay');
    
    // Add new product row
    function addProductRow(name = '', price = '') {
        const row = document.createElement('div');
        row.className = 'product-row';
        row.innerHTML = `
            <input type="text" class="product-name" placeholder="Product name" value="${name}">
            <input type="number" class="product-price" placeholder="Price" min="0" step="0.01" value="${price}">
            <button class="remove-btn"><i class="fas fa-times"></i></button>
        `;
        productForm.appendChild(row);
        
        // Add event listener to remove button
        row.querySelector('.remove-btn').addEventListener('click', function() {
            row.remove();
        });
    }
    
    // Analyze products using reduce, destructuring, and filter
    function analyzeProducts() {
        const productRows = document.querySelectorAll('.product-row');
        const products = [];
        
        productRows.forEach(row => {
            const name = row.querySelector('.product-name').value.trim();
            const price = parseFloat(row.querySelector('.product-price').value);
            
            if (name && !isNaN(price)) {
                products.push({ name, price });
            }
        });
        
        if (products.length === 0) {
            alert('Please add at least one valid product');
            return null;
        }
        
        // Calculate total and count using reduce with destructuring
        const { total, count } = products.reduce(
            (acc, { price }) => ({
                total: acc.total + price,
                count: acc.count + 1
            }),
            { total: 0, count: 0 }
        );
        
        const average = total / count;
        
        // Get products above average price
        const aboveAverage = products
            .filter(({ price }) => price > average)
            .map(({ name }) => name);
        
        return { total, average, aboveAverage };
    }
    
    // Display analysis results
    function displayResults(results) {
        totalPriceDisplay.textContent = `$${results.total.toFixed(2)}`;
        averagePriceDisplay.textContent = `$${results.average.toFixed(2)}`;
        
        aboveAverageDisplay.innerHTML = '';
        
        if (results.aboveAverage.length === 0) {
            aboveAverageDisplay.innerHTML = '<div class="empty-message">No products above average price</div>';
        } else {
            results.aboveAverage.forEach(product => {
                const tag = document.createElement('div');
                tag.className = 'product-tag';
                tag.textContent = product;
                aboveAverageDisplay.appendChild(tag);
            });
        }
    }
    
    // Update code display with example
    function updateCodeDisplay() {
        codeDisplay.textContent = `// Using reduce, destructuring, and filter
function analyzeProducts(products) {
    // Calculate total and count
    const { total, count } = products.reduce(
        (acc, { price }) => ({
            total: acc.total + price,
            count: acc.count + 1
        }),
        { total: 0, count: 0 }
    );
    
    const average = total / count;
    
    // Get products above average price
    const aboveAverage = products
        .filter(({ price }) => price > average)
        .map(({ name }) => name);
    
    return { total, average, aboveAverage };
}

// Example usage:
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
];

const analysis = analyzeProducts(products);
console.log(analysis);`;
    }
    
    // Load example data
    function loadExample() {
        // Clear existing rows
        productForm.innerHTML = '';
        
        // Add example products
        addProductRow('Laptop', '1000');
        addProductRow('Phone', '500');
        addProductRow('Tablet', '700');
        
        // Calculate and display
        const results = analyzeProducts();
        if (results) {
            displayResults(results);
        }
    }
    
    // Event listeners
    addProductBtn.addEventListener('click', () => addProductRow());
    calculateBtn.addEventListener('click', () => {
        const results = analyzeProducts();
        if (results) {
            displayResults(results);
        }
    });
    exampleBtn.addEventListener('click', loadExample);
    
    // Initialize
    addProductRow();
    updateCodeDisplay();
});