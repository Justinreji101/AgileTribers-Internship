document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dobInput = document.getElementById('dob');
    
    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const dobError = document.getElementById('dobError');

    // Validate name
    function validateName() {
        const name = nameInput.value.trim();
        if (name === '') {
            nameError.textContent = 'Name is required';
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            nameError.textContent = 'Name should only contain letters';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    // Validate email
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            emailError.textContent = 'Email is required';
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    // Validate phone
    function validatePhone() {
        const phone = phoneInput.value.trim();
        if (phone && !/^[\d\s\-()+]{10,15}$/.test(phone)) {
            phoneError.textContent = 'Please enter a valid phone number';
            return false;
        } else {
            phoneError.textContent = '';
            return true;
        }
    }

    // Validate date of birth
    function validateDOB() {
        const dob = dobInput.value;
        if (dob) {
            const dobDate = new Date(dob);
            const today = new Date();
            if (dobDate > today) {
                dobError.textContent = 'Date of birth cannot be in the future';
                return false;
            }
        }
        dobError.textContent = '';
        return true;
    }

    // Event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    dobInput.addEventListener('change', validateDOB);

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isDOBValid = validateDOB();
        
        if (isNameValid && isEmailValid && isPhoneValid && isDOBValid) {
            // Get form data
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim() || 'N/A',
                dob: dobInput.value || 'N/A',
                gender: document.querySelector('input[name="gender"]:checked').value
            };
            
            // Store data in localStorage
            localStorage.setItem('userFormData', JSON.stringify(formData));
            
            // Redirect to display page
            window.location.href = 'Task display 1.html';
        }
    });
});