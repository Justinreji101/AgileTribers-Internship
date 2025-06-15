document.addEventListener('DOMContentLoaded', function() {
    const employeeIdInput = document.getElementById('employeeIdInput');
    const searchButton = document.getElementById('searchButton');
    const showAllButton = document.getElementById('showAllButton');
    const employeeResults = document.getElementById('employeeResults');
    const employeeDirectory = document.getElementById('employeeDirectory');
    
    // Sample employee data
    const employees = [
        { id: 1, name: 'Alice Johnson', position: 'Manager' },
        { id: 2, name: 'Bob Smith', position: 'Senior Engineer' },
        { id: 3, name: 'Charlie Brown', position: 'Technician' },
        { id: 4, name: 'David Wilson', position: 'Marketing Director' },
        { id: 5, name: 'Eva Martinez', position: 'HR Specialist' },
        { id: 6, name: 'Frank Miller', position: 'Product Designer' },
        { id: 7, name: 'Grace Lee', position: 'Software Developer' },
        { id: 8, name: 'Henry Taylor', position: 'Sales Executive' }
    ];
    
    // Function to find employee by ID
    function findEmployeeById(employeesArray, id) {
        return employeesArray.find(employee => 
            employee.id === parseInt(id)
        );
    }
    
    // Display all employees in the directory
    function displayAllEmployees() {
        employeeDirectory.innerHTML = '';
        
        if (employees.length === 0) {
            employeeDirectory.innerHTML = '<p>No employees in the directory</p>';
            return;
        }
        
        employees.forEach(employee => {
            const employeeCard = createEmployeeCard(employee);
            employeeDirectory.appendChild(employeeCard);
        });
    }
    
    // Create an employee card element
    function createEmployeeCard(employee) {
        const card = document.createElement('div');
        card.className = 'employee-card';
        
        // Get initials for avatar
        const initials = employee.name.split(' ')
            .map(name => name[0])
            .join('')
            .toUpperCase();
        
        card.innerHTML = `
            <div class="employee-avatar">${initials}</div>
            <div class="employee-details">
                <h3>${employee.name}</h3>
                <p class="employee-id">ID: ${employee.id}</p>
                <p class="employee-position">${employee.position}</p>
            </div>
        `;
        
        return card;
    }
    
    // Display search results
    function displaySearchResults(employee) {
        employeeResults.innerHTML = '';
        
        if (employee) {
            const employeeCard = createEmployeeCard(employee);
            employeeResults.appendChild(employeeCard);
        } else {
            employeeResults.innerHTML = `
                <div class="not-found">
                    <i class="fas fa-user-slash"></i>
                    <p>Employee not found</p>
                    <p>Please check the ID and try again</p>
                </div>
            `;
        }
    }
    
    // Handle search
    function handleSearch() {
        const searchId = employeeIdInput.value.trim();
        
        if (!searchId) {
            alert('Please enter an employee ID to search');
            return;
        }
        
        const foundEmployee = findEmployeeById(employees, searchId);
        displaySearchResults(foundEmployee);
        
        // Clear input
        employeeIdInput.value = '';
    }
    
    // Event listeners
    searchButton.addEventListener('click', handleSearch);
    
    employeeIdInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    showAllButton.addEventListener('click', function() {
        employeeResults.innerHTML = `
            <div class="initial-message">
                <i class="fas fa-id-card"></i>
                <p>Enter an employee ID to view details</p>
            </div>
        `;
    });
    
    // Initialize the page
    displayAllEmployees();
});