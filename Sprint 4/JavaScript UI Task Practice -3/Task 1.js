document.getElementById('task1Btn').addEventListener('click', function() {
    const outputDiv = document.getElementById('task1Output');
    outputDiv.innerHTML = '';
    
    // 1. Create the object
    const person = {
        name: 'John Doe',
        age: 30,
        city: 'New York'
    };
    
    // 2. Display initial values
    outputDiv.innerHTML += `<h3>Initial Object:</h3>`;
    outputDiv.innerHTML += `<p><strong>Name:</strong> ${person.name}</p>`;
    outputDiv.innerHTML += `<p><strong>Age:</strong> ${person.age}</p>`;
    outputDiv.innerHTML += `<p><strong>City:</strong> ${person.city}</p>`;
    
    // 3. Update a property
    person.city = 'San Francisco';
    
    // 4. Display updated object
    outputDiv.innerHTML += `<h3>After Updating City:</h3>`;
    outputDiv.innerHTML += `<p><strong>Name:</strong> ${person.name}</p>`;
    outputDiv.innerHTML += `<p><strong>Age:</strong> ${person.age}</p>`;
    outputDiv.innerHTML += `<p><strong>City:</strong> ${person.city}</p>`;
});