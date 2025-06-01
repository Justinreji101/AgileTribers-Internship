document.getElementById('fetchBtn').addEventListener('click', fetchUserData);

function fetchUserData() {
    // Example: If data.json is in a 'data' subdirectory
    fetch('/data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data);
            displayUserData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('userData').innerHTML = 
                `<p class="error">Error loading user data: ${error.message}</p>`;
        });
}

function displayUserData(users) {
    const userContainer = document.getElementById('userData');
    userContainer.innerHTML = '';

    if (users.length === 0) {
        userContainer.innerHTML = '<p>No user data available</p>';
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>City:</strong> ${user.city}</p>
        `;
        userContainer.appendChild(userCard);
    });
}