document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const studentInput = document.getElementById('studentInput');
    const addBtn = document.getElementById('addBtn');
    const studentList = document.getElementById('studentList');
    const searchInput = document.getElementById('searchInput');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const studentCount = document.getElementById('studentCount');
    
    // Student array
    let students = [];
    
    // Initialize the app
    const init = () => {
        renderStudentList();
        setupEventListeners();
        studentInput.focus();
    };
    
    // Set up event listeners
    const setupEventListeners = () => {
        // Add student
        addBtn.addEventListener('click', addStudent);
        studentInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addStudent();
        });
        
        // Search students
        searchInput.addEventListener('input', filterStudents);
        
        // Clear all students
        clearAllBtn.addEventListener('click', clearAllStudents);
        
        // Event delegation for dynamic elements
        studentList.addEventListener('click', handleListClick);
    };
    
    // Add a new student
    const addStudent = () => {
        const name = studentInput.value.trim();
        
        if (!name) {
            showError('Please enter a student name');
            shakeInput(studentInput);
            return;
        }
        
        const newStudent = {
            id: Date.now(),
            name,
            createdAt: new Date().toISOString()
        };
        
        students.unshift(newStudent); // Add to beginning of array
        studentInput.value = '';
        renderStudentList();
        showSuccess('Student added successfully');
        studentInput.focus();
    };
    
    // Render the student list
    const renderStudentList = (filteredStudents = null) => {
        const studentsToRender = filteredStudents || students;
        
        if (studentsToRender.length === 0) {
            studentList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                    <p class="empty-text">${filteredStudents ? 'No matching students found' : 'No students added yet'}</p>
                </div>
            `;
            studentCount.textContent = '0';
            return;
        }
        
        studentList.innerHTML = studentsToRender.map(student => `
            <li class="student-item" data-id="${student.id}">
                <div class="student-info">
                    <span class="student-name">${student.name}</span>
                    <small class="student-date">${formatDate(student.createdAt)}</small>
                </div>
                <div class="student-actions">
                    <button class="action-btn edit-btn" title="Edit">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="action-btn delete-btn" title="Delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>
        `).join('');
        
        // Update student count
        studentCount.textContent = students.length;
    };
    
    // Format date
    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    
    // Handle click events on the list
    const handleListClick = (e) => {
        const li = e.target.closest('.student-item');
        if (!li) return;
        
        const id = parseInt(li.dataset.id);
        const studentIndex = students.findIndex(student => student.id === id);
        
        if (studentIndex === -1) return;
        
        // Delete button
        if (e.target.closest('.delete-btn')) {
            deleteStudent(id);
        }
        
        // Edit button
        if (e.target.closest('.edit-btn')) {
            editStudent(id, li);
        }
    };
    
    // Delete a student
    const deleteStudent = (id) => {
        if (!confirm('Are you sure you want to delete this student?')) return;
        
        students = students.filter(student => student.id !== id);
        renderStudentList();
        showSuccess('Student deleted successfully');
        
        // Update search if active
        if (searchInput.value) {
            filterStudents();
        }
    };
    
    // Edit a student
    const editStudent = (id, li) => {
        const student = students.find(student => student.id === id);
        if (!student) return;
        
        const nameSpan = li.querySelector('.student-name');
        const currentName = nameSpan.textContent;
        
        li.classList.add('editing');
        
        const editForm = document.createElement('div');
        editForm.className = 'edit-form';
        editForm.innerHTML = `
            <input type="text" class="edit-input" value="${currentName}">
            <button class="action-btn save-btn" title="Save">
                <i class="fas fa-check"></i>
            </button>
            <button class="action-btn cancel-btn" title="Cancel">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        li.querySelector('.student-info').replaceWith(editForm);
        const editInput = editForm.querySelector('.edit-input');
        editInput.focus();
        editInput.select();
        
        const saveEdit = () => {
            const newName = editInput.value.trim();
            
            if (!newName) {
                showError('Name cannot be empty');
                editInput.focus();
                return;
            }
            
            if (newName === currentName) {
                cancelEdit();
                return;
            }
            
            student.name = newName;
            renderStudentList();
            showSuccess('Student updated successfully');
        };
        
        const cancelEdit = () => {
            li.classList.remove('editing');
            renderStudentList();
        };
        
        editInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') saveEdit();
            if (e.key === 'Escape') cancelEdit();
        });
        
        editForm.querySelector('.save-btn').addEventListener('click', saveEdit);
        editForm.querySelector('.cancel-btn').addEventListener('click', cancelEdit);
    };
    
    // Filter students based on search input
    const filterStudents = () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (!searchTerm) {
            renderStudentList();
            return;
        }
        
        const filteredStudents = students.filter(student => 
            student.name.toLowerCase().includes(searchTerm)
        );
        
        renderStudentList(filteredStudents);
    };
    
    // Clear all students
    const clearAllStudents = () => {
        if (students.length === 0) {
            showError('No students to clear');
            return;
        }
        
        if (confirm('Are you sure you want to delete ALL students?')) {
            students = [];
            renderStudentList();
            searchInput.value = '';
            showSuccess('All students cleared');
        }
    };
    
    // Show error message
    const showError = (message) => {
        showNotification(message, 'error');
    };
    
    // Show success message
    const showSuccess = (message) => {
        showNotification(message, 'success');
    };
    
    // Show notification
    const showNotification = (message, type) => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };
    
    // Shake input for error feedback
    const shakeInput = (input) => {
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    };
    
    // Initialize the app
    init();
});