document.addEventListener('DOMContentLoaded', function() {
            const students = [
                { name: 'Alice', score: 85 },
                { name: 'Bob', score: 92 },
                { name: 'Charlie', score: 78 },
                { name: 'Diana', score: 88 },
                { name: 'Ethan', score: 95 }
            ];
            
            // Create a Map to store student scores
            const studentScores = new Map();
            
            // Add students to the Map
            students.forEach(student => {
                studentScores.set(student.name, student.score);
            });
            
            // Function to get a student's score
            function getStudentScore(name) {
                return studentScores.get(name);
            }
            
            // Display student cards
            const studentCardsContainer = document.getElementById('student-cards');
            students.forEach(student => {
                const card = document.createElement('div');
                card.className = 'student-card';
                card.innerHTML = `
                    <p class="student-name">${student.name}</p>
                    <p class="student-score">Score: ${student.score}</p>
                `;
                studentCardsContainer.appendChild(card);
            });
            
            // Search functionality
            const searchBtn = document.getElementById('search');
            const studentNameInput = document.getElementById('student-name');
            const resultContainer = document.getElementById('result-container');
            
            function displayResult(name) {
                const score = getStudentScore(name);
                
                if (score !== undefined) {
                    resultContainer.innerHTML = `
                        <p>Student: <strong>${name}</strong></p>
                        <p class="result-value">${score}</p>
                    `;
                } else {
                    resultContainer.innerHTML = `
                        <p class="student-not-found">Student "${name}" not found</p>
                        <p>Try: Alice, Bob, Charlie, Diana, or Ethan</p>
                    `;
                }
            }
            
            searchBtn.addEventListener('click', function() {
                const name = studentNameInput.value.trim();
                if (name) {
                    displayResult(name);
                }
            });
            
            studentNameInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchBtn.click();
                }
            });
            
            // Initial search
            searchBtn.click();
        });