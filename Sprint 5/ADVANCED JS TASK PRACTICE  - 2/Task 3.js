document.addEventListener('DOMContentLoaded', function() {
            const apiUrlInput = document.getElementById('apiUrl');
            const fetchButton = document.getElementById('fetchButton');
            const loadingIndicator = document.getElementById('loadingIndicator');
            const resultContainer = document.getElementById('resultContainer');
            const resultText = document.getElementById('resultText');
            
            fetchButton.addEventListener('click', async function() {
                const apiUrl = apiUrlInput.value.trim();
                
                if (!apiUrl) {
                    alert('Please enter an API URL');
                    return;
                }
                
                try {
                    // Show loading indicator
                    loadingIndicator.style.display = 'block';
                    resultContainer.style.display = 'none';
                    
                    // Fetch data using async/await
                    const response = await fetch(apiUrl);
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    const data = await response.json();
                    
                    // Display the formatted JSON response
                    resultText.textContent = JSON.stringify(data, null, 4);
                    resultContainer.style.display = 'block';
                } catch (error) {
                    resultText.textContent = `Error: ${error.message}`;
                    resultContainer.style.display = 'block';
                } finally {
                    // Hide loading indicator
                    loadingIndicator.style.display = 'none';
                }
            });
            
            // Add example URL when clicking on the input field
            apiUrlInput.addEventListener('focus', function() {
                if (!this.value) {
                    this.value = 'https://jsonplaceholder.typicode.com/todos/1';
                }
            });
        });