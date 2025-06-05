document.addEventListener('DOMContentLoaded', function() {
            const userDataDisplay = document.getElementById('userDataDisplay');
            const backButton = document.getElementById('backButton');
            const printButton = document.getElementById('printButton');
            const submissionTime = document.getElementById('submissionTime');
            
            // Retrieve data from localStorage
            const storedData = localStorage.getItem('userFormData');
            
            if (storedData) {
                const formData = JSON.parse(storedData);
                const now = new Date();
                
                // Format the submission time
                submissionTime.innerHTML = `Submitted on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
                
                // Format the data for display
                const displayHTML = `
                    <div class="data-item">
                        <span class="data-label"><i class="fas fa-user"></i> Full Name</span>
                        <span class="data-value">${formData.name}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label"><i class="fas fa-envelope"></i> Email</span>
                        <span class="data-value">${formData.email}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label"><i class="fas fa-phone"></i> Phone</span>
                        <span class="data-value">${formData.phone}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label"><i class="fas fa-birthday-cake"></i> Date of Birth</span>
                        <span class="data-value">${formData.dob}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label"><i class="fas fa-venus-mars"></i> Gender</span>
                        <span class="data-value">${formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)}</span>
                    </div>
                `;
                
                userDataDisplay.innerHTML = displayHTML;
            } else {
                userDataDisplay.innerHTML = `
                    <div class="no-data" style="text-align: center; padding: 30px;">
                        <i class="fas fa-exclamation-circle" style="font-size: 48px; color: #ffcc00; margin-bottom: 15px;"></i>
                        <h3 style="color: var(--dark-color); margin-bottom: 10px;">No Submission Found</h3>
                        <p style="color: var(--gray-color);">Please complete the form first to view your submission details.</p>
                    </div>
                `;
                submissionTime.style.display = 'none';
            }
            
            // Back button functionality
            backButton.addEventListener('click', function() {
                window.location.href = 'Task 1.html';
            });
            
            // Print button functionality
            printButton.addEventListener('click', function() {
                window.print();
            });
        });
// Add ripple effect to buttons
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  button.appendChild(circle);
}

document.getElementById("backButton").addEventListener("click", createRipple);
document.getElementById("printButton").addEventListener("click", createRipple);