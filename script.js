// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize form handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    // Form submission handler
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = {
            name: contactForm.querySelector('input[placeholder="Name"]').value,
            email: contactForm.querySelector('input[placeholder="Email"]').value,
            subject: contactForm.querySelector('input[placeholder="Subject"]').value,
            message: contactForm.querySelector('textarea').value
        };

        // Validate form data
        if (!validateForm(formData)) {
            showStatus('Please fill in all fields correctly', 'error');
            return;
        }

        // Simulate form submission (replace with actual API call)
        submitForm(formData);
    });

    // Form validation
    function validateForm(data) {
        