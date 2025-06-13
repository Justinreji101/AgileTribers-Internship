document.addEventListener('DOMContentLoaded', function() {
    const tasksInput = document.getElementById('tasksInput');
    const findButton = document.getElementById('findButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    
    findButton.addEventListener('click', function() {
        const tasksText = tasksInput.value.trim();
        
        if (!tasksText) {
            alert('Please enter tasks in JSON format');
            return;
        }
        
        try {
            const tasks = JSON.parse(tasksText);
            
            if (!Array.isArray(tasks)) {
                throw new Error('Input must be an array of task objects');
            }
            
            // Get today's date (YYYY-MM-DD format)
            const today = new Date();
            const todayStr = today.toISOString().split('T')[0];
            
            // Find first overdue task
            const overdueTask = tasks.find(task => {
                return task.dueDate < todayStr;
            });
            
            if (overdueTask) {
                resultText.textContent = JSON.stringify(overdueTask, null, 2);
                resultText.className = 'result-text';
            } else {
                resultText.textContent = 'No overdue tasks found';
                resultText.className = 'result-text not-found';
            }
            
            resultContainer.style.display = 'block';
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
    
    // Add example values when clicking on the input field
    tasksInput.addEventListener('focus', function() {
        if (!this.value) {
            this.value = `[
  { "taskName": "Task 1", "dueDate": "2023-06-01" },
  { "taskName": "Task 2", "dueDate": "2024-05-01" },
  { "taskName": "Task 3", "dueDate": "2024-01-01" }
]`;
        }
    });
});