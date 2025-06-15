document.addEventListener('DOMContentLoaded', function() {
    const apiEndpointSelect = document.getElementById('apiEndpoint');
    const fetchButton = document.getElementById('fetchButton');
    const statusMessage = document.getElementById('statusMessage');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const resultDisplay = document.getElementById('resultDisplay');
    const codeDisplay = document.getElementById('codeDisplay');
    
    // Async function to fetch data
    async function fetchData(endpoint) {
        try {
            // Show loading state
            loadingIndicator.classList.add('active');
            statusMessage.style.display = 'none';
            
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${endpoint}/1`
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            statusMessage.textContent = `Error: ${error.message}`;
            statusMessage.classList.add('error-message');
            statusMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${error.message}`;
            throw error;
        } finally {
            loadingIndicator.classList.remove('active');
            statusMessage.style.display = 'flex';
        }
    }
    
    // Display API data
    function displayData(data) {
        resultDisplay.innerHTML = `
            <div class="data-display">${JSON.stringify(data, null, 2)}</div>
        `;
    }
    
    // Update code display with current endpoint
    function updateCodeDisplay(endpoint) {
        codeDisplay.textContent = `// Using async/await with fetch
async function fetchData(endpoint) {
    try {
        const response = await fetch(
            \`https://jsonplaceholder.typicode.com/\${endpoint}/1\`
        );
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Current endpoint being used:
const endpoint = '${endpoint}';

// Example usage:
fetchData(endpoint)
    .then(data => console.log(data))
    .catch(error => console.error(error));`;
    }
    
    // Handle fetch button click
    async function handleFetch() {
        const endpoint = apiEndpointSelect.value;
        
        // Reset status message
        statusMessage.classList.remove('error-message');
        statusMessage.innerHTML = `<i class="fas fa-info-circle"></i> Fetching data from ${endpoint} endpoint...`;
        
        try {
            const data = await fetchData(endpoint);
            displayData(data);
            statusMessage.innerHTML = `<i class="fas fa-check-circle"></i> Successfully fetched data from ${endpoint} endpoint`;
            updateCodeDisplay(endpoint);
        } catch (error) {
            resultDisplay.innerHTML = `
                <div class="initial-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Failed to fetch data. See error message above.</p>
                </div>
            `;
        }
    }
    
    // Event listeners
    fetchButton.addEventListener('click', handleFetch);
    
    // Also fetch when Enter is pressed after selecting endpoint
    apiEndpointSelect.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleFetch();
        }
    });
    
    // Initialize
    updateCodeDisplay(apiEndpointSelect.value);
});