document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const ageInput = document.getElementById('age');
    const generateButton = document.getElementById('generateButton');
    const randomButton = document.getElementById('randomButton');
    const resultDisplay = document.getElementById('resultDisplay');
    const codeDisplay = document.getElementById('codeDisplay');
    
    // Sample first names and last names for random generation
    const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Robert', 'Jessica'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia'];
    
    // Function to format person info using destructuring and template literals
    function formatPersonInfo(person) {
        const { firstName, lastName, age } = person;
        return `${firstName} ${lastName} is ${age} years old.`;
    }
    
    // Generate random person
    function generateRandomPerson() {
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomAge = Math.floor(Math.random() * 50) + 18; // Age between 18 and 67
        
        firstNameInput.value = randomFirstName;
        lastNameInput.value = randomLastName;
        ageInput.value = randomAge;
        
        generateOutput();
    }
    
    // Generate formatted output
    function generateOutput() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const age = ageInput.value.trim();
        
        if (!firstName || !lastName || !age) {
            alert('Please fill in all fields!');
            return;
        }
        
        const person = {
            firstName,
            lastName,
            age: parseInt(age)
        };
        
        const formattedInfo = formatPersonInfo(person);
        
        // Display the result
        resultDisplay.innerHTML = `
            <div class="formatted-output">
                "${formattedInfo}"
            </div>
        `;
        
        // Update the code display with actual values
        codeDisplay.textContent = `// JavaScript destructuring example
function formatPersonInfo(person) {
    const { firstName, lastName, age } = person;
    return \`\${firstName} \${lastName} is \${age} years old.\`;
}

// Example usage with your input:
const person = {
    firstName: '${firstName}',
    lastName: '${lastName}',
    age: ${age}
};

formatPersonInfo(person); // Returns: "${formattedInfo}"`;
    }
    
    // Event listeners
    generateButton.addEventListener('click', generateOutput);
    randomButton.addEventListener('click', generateRandomPerson);
    
    // Also generate when Enter is pressed in any input field
    [firstNameInput, lastNameInput, ageInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateOutput();
            }
        });
    });
    
    // Generate a random person on page load
    generateRandomPerson();
});