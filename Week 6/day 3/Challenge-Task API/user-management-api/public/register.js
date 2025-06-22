document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const submitBtn = document.getElementById('submitBtn');
    const messageDiv = document.getElementById('message');
    const inputs = form.querySelectorAll('input[required]');

    // Function to check if all required fields are filled
    function checkFormValidity() {
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        submitBtn.disabled = !allFilled;
    }

    // Add event listeners to all required inputs
    inputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
        input.addEventListener('blur', checkFormValidity);
    });

    // Function to show message
    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }

    // Handle form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const userData = {
            name: formData.get('name').trim(),
            lastName: formData.get('lastName').trim(),
            email: formData.get('email').trim(),
            username: formData.get('username').trim(),
            password: formData.get('password').trim()
        };

        // Client-side validation
        if (!userData.name || !userData.lastName || !userData.email || !userData.username || !userData.password) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userData.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Username validation
        if (userData.username.includes(' ') || userData.username.length < 3) {
            showMessage('Username must be at least 3 characters long and contain no spaces.', 'error');
            return;
        }

        // Password validation
        if (userData.password.length < 6) {
            showMessage('Password must be at least 6 characters long.', 'error');
            return;
        }

        // Disable submit button during request
        submitBtn.disabled = true;
        submitBtn.textContent = 'Registering...';

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (result.success) {
                showMessage(result.message, 'success');
                form.reset();
                checkFormValidity(); // Update button state
                
                // Redirect to login page after 2 seconds
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                showMessage(result.message || 'Registration failed. Please try again.', 'error');
            }

        } catch (error) {
            console.error('Registration error:', error);
            showMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Register';
            checkFormValidity(); // Re-check form validity
        }
    });

    // Initial form validation check
    checkFormValidity();
});