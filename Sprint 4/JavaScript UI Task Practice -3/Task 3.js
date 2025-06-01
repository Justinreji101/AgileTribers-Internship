document.getElementById('task3Btn').addEventListener('click', function() {
    const outputDiv = document.getElementById('task3Output');
    outputDiv.innerHTML = '';
    
    // 1. Create a JSON string
    const jsonString = `{
        "name": "Justin Reji",
        "email": "Justinreji@gmail.com",
        "skills": ["JavaScript", "React", "Node.js", "HTML5", "CSS3"]
    }`;
    
    // Display the raw JSON string
    outputDiv.innerHTML += `
        <h3>Original JSON String:</h3>
        <div class="json-display">${jsonString}</div>
    `;
    
    // 2. Parse the JSON string into an object
    try {
        const person = JSON.parse(jsonString);
        
        // Display the parsed data
        outputDiv.innerHTML += `
            <h3>Parsed Data:</h3>
            <p><strong>Name:</strong> ${person.name}</p>
            <p><strong>Email:</strong> ${person.email}</p>
            <p><strong>Skills:</strong></p>
            <div class="skill-list">
                ${person.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
            </div>
        `;
        
        // 3. Log values to console
        console.log('Parsed Object:', person);
        console.log('Name:', person.name);
        console.log('Email:', person.email);
        console.log('Skills:', person.skills);
        
    } catch (error) {
        outputDiv.innerHTML += `
            <div class="error">Error parsing JSON: ${error.message}</div>
        `;
        console.error('JSON Parse Error:', error);
    }
});