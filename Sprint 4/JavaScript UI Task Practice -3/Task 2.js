document.getElementById('task2Btn').addEventListener('click', function() {
    const outputDiv = document.getElementById('task2Output');
    outputDiv.innerHTML = '';
    
    const person = {
        firstName: 'Justin',
        lastName: 'Reji',
        
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    
    outputDiv.innerHTML += `
        <p><strong>First Name:</strong> ${person.firstName}</p>
        <p><strong>Last Name:</strong> ${person.lastName}</p>
    `;
    
    const fullName = person.getFullName();
    outputDiv.innerHTML += `
        <div class="full-name">Full Name: ${fullName}</div>
    `;
    
    console.log('Method call result:', person.getFullName());
});