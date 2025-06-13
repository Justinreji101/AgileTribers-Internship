document.addEventListener('DOMContentLoaded', function() {
    const studentsInput = document.getElementById('studentsInput');
    const nameInput = document.getElementById('nameInput');
    const findButton = document.getElementById('findButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    findButton.addEventListener('click', function() {
        const studentsText = studentsInput.value.trim();
        const name = nameInput.value.trim();
        
        if (!studentsText || !name) {
            alert('Please enter both the student list and a name to search');
            return;
        }
        
        try {
            const students = JSON.parse(studentsText);
            
            if (!Array.isArray(students)) {
                throw new Error('Input must be an array of student objects');
            }
            
            // Find student by name
            const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());
            
            if (student) {
                resultText.textContent = JSON.stringify(student, null, 2);
                resultText.className = 'result-text';
            } else {
                resultText.textContent = `No student found with name "${name}"`;
                resultText.className = 'result-text not-found';
            }
            
            resultContainer.style.display = 'block';
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
    
    // Add example values when clicking on the input fields
    studentsInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = `[
  { "name": "Alice", "age": 21 },
  { "name": "Bob", "age": 25 },
  { "name": "Charlie", "age": 23 }
]`;
        }
    });
    
    nameInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = 'Bob';
        }
    });
});