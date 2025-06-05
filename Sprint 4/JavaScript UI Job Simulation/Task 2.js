document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const taskCount = document.getElementById('task-count');
    
    // Task array to store tasks
    let tasks = [];
    
    // Initialize the app
    function init() {
        loadTasks();
        renderTasks();
        updateTaskCount();
    }
    
    // Load tasks from localStorage (for session persistence)
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
        }
    }
    
    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // Add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (!taskText) {
            alert('Please enter a task');
            return;
        }
        
        // Check for duplicate tasks
        if (tasks.some(task => task.text.toLowerCase() === taskText.toLowerCase())) {
            alert('This task already exists!');
            return;
        }
        
        // Create new task object
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        
        // Add to array and update UI
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        updateTaskCount();
        
        // Clear input
        taskInput.value = '';
        taskInput.focus();
    }
    
    // Render all tasks
    function renderTasks() {
        // Clear the task list
        taskList.innerHTML = '';
        
        if (tasks.length === 0) {
            taskList.innerHTML = '<p class="empty-message">No tasks added yet</p>';
            return;
        }
        
        // Create task items
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.dataset.id = task.id;
            
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            
            taskItem.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="edit-btn" title="Edit task"><i class="fas fa-edit"></i></button>
                    <button class="delete-btn" title="Delete task"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            
            taskList.appendChild(taskItem);
        });
        
        // Add event listeners to buttons
        addTaskEventListeners();
    }
    
    // Add event listeners to task buttons
    function addTaskEventListeners() {
        // Edit buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const taskItem = this.closest('.task-item');
                const taskId = parseInt(taskItem.dataset.id);
                editTask(taskId);
            });
        });
        
        // Delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const taskItem = this.closest('.task-item');
                const taskId = parseInt(taskItem.dataset.id);
                deleteTask(taskId);
            });
        });
        
        // Task text click to toggle completion
        document.querySelectorAll('.task-text').forEach(text => {
            text.addEventListener('click', function() {
                const taskItem = this.closest('.task-item');
                const taskId = parseInt(taskItem.dataset.id);
                toggleTaskCompletion(taskId);
            });
        });
    }
    
    // Edit a task
    function editTask(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (!task) return;
        
        const taskItem = document.querySelector(`.task-item[data-id="${taskId}"]`);
        taskItem.classList.add('editing');
        
        // Replace text with input field
        const taskText = taskItem.querySelector('.task-text');
        const originalText = taskText.textContent;
        taskText.innerHTML = `
            <input type="text" class="edit-input" value="${originalText}">
            <button class="save-btn">Save</button>
        `;
        
        // Focus the input field
        const editInput = taskItem.querySelector('.edit-input');
        editInput.focus();
        
        // Save button event listener
        const saveBtn = taskItem.querySelector('.save-btn');
        saveBtn.addEventListener('click', function() {
            const newText = editInput.value.trim();
            
            if (!newText) {
                alert('Task cannot be empty!');
                editInput.focus();
                return;
            }
            
            // Check for duplicate tasks (excluding current task)
            if (tasks.some(t => t.id !== taskId && t.text.toLowerCase() === newText.toLowerCase())) {
                alert('This task already exists!');
                editInput.focus();
                return;
            }
            
            // Update task and re-render
            task.text = newText;
            saveTasks();
            renderTasks();
        });
        
        // Handle Enter key in edit input
        editInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                saveBtn.click();
            }
        });
    }
    
    // Delete a task
    function deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks = tasks.filter(task => task.id !== taskId);
            saveTasks();
            renderTasks();
            updateTaskCount();
        }
    }
    
    // Toggle task completion status
    function toggleTaskCompletion(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        }
    }
    
    // Clear all tasks
    function clearAllTasks() {
        if (tasks.length === 0) {
            alert('There are no tasks to clear!');
            return;
        }
        
        if (confirm('Are you sure you want to delete all tasks?')) {
            tasks = [];
            saveTasks();
            renderTasks();
            updateTaskCount();
        }
    }
    
    // Update task counter
    function updateTaskCount() {
        const count = tasks.length;
        taskCount.textContent = count;
    }
    
    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    clearAllBtn.addEventListener('click', clearAllTasks);
    
    // Initialize the app
    init();
});