document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
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
        const loginData = {
            username: formData.get('username').trim(),
            password: formData.get('password').trim()
        };

        // Client-side validation
        if (!loginData.username || !loginData.password) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Disable submit button during request
        submitBtn.disabled = true;
        submitBtn.textContent = 'Logging in...';

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            });

            const result = await response.json();

            if (result.success) {
                showMessage(result.message, 'success');
                form.reset();
                
                // You can redirect to a dashboard or home page here
                // For now, just show success message
                setTimeout(() => {
                    showMessage('Redirecting to dashboard...', 'success');
                }, 1500);
            } else {
                showMessage(result.message || 'Login failed. Please try again.', 'error');
            }

        } catch (error) {
            console.error('Login error:', error);
            showMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Login';
            checkFormValidity(); // Re-check form validity
        }
    });

    // Initial form validation check
    checkFormValidity();
});