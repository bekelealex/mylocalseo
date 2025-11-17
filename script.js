// Simple Form Submission - Send data to Google Apps Script (not mailto)
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent default form submission behavior

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        business: document.getElementById('business').value,
        message: document.getElementById('message').value
    };

    // URL of your Google Apps Script Web App
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx1OrjlGipebaZU6AvNs0hxlWEbmw6pz4Z3nfEnf6jLDTcZYJC-DOF7c-bqVBxDMHI20g/exec'; // Replace with your actual URL

    // Send form data to Google Apps Script using fetch API
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'Your form has been submitted successfully!';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
        } else {
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'There was an error with your submission. Please try again.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error submitting the form:', error);
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'An error occurred. Please try again later.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    });

    // Reset the form after submission
    this.reset();

    // Hide the success message after 8 seconds
    setTimeout(() => {
        document.getElementById('formMessage').style.display = 'none';
    }, 8000);
});

