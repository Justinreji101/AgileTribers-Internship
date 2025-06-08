document.addEventListener('DOMContentLoaded', function() {
            const mergeBtn = document.getElementById('merge');
            const obj1Input = document.getElementById('obj1');
            const obj2Input = document.getElementById('obj2');
            const obj3Input = document.getElementById('obj3');
            const mergedResult = document.getElementById('merged-result');
            
            // Function to merge objects using spread operator
            function mergeObjects(obj1, obj2, obj3) {
                return {
                    ...obj1,
                    ...obj2,
                    ...obj3
                };
            }
            
            mergeBtn.addEventListener('click', function() {
                try {
                    // Parse the input JSON
                    const obj1 = JSON.parse(obj1Input.value);
                    const obj2 = JSON.parse(obj2Input.value);
                    const obj3 = JSON.parse(obj3Input.value);
                    
                    // Validate that inputs are objects
                    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || typeof obj3 !== 'object' || 
                        obj1 === null || obj2 === null || obj3 === null) {
                        throw new Error('Please enter valid JSON objects');
                    }
                    
                    // Merge the objects
                    const merged = mergeObjects(obj1, obj2, obj3);
                    
                    // Display the result with pretty formatting
                    mergedResult.textContent = JSON.stringify(merged, null, 2);
                    
                    // Highlight the textareas briefly
                    [obj1Input, obj2Input, obj3Input].forEach(input => {
                        input.style.borderColor = 'var(--primary)';
                        setTimeout(() => {
                            input.style.borderColor = '#ddd';
                        }, 1000);
                    });
                    
                } catch (error) {
                    alert('Error: ' + error.message);
                    mergedResult.textContent = '{ }';
                    [obj1Input, obj2Input, obj3Input].forEach(input => {
                        input.style.borderColor = 'var(--highlight)';
                    });
                }
            });
            
            // Initial merge
            mergeBtn.click();
        });