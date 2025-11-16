// Form Submission to Google Sheets - FIXED CORS VERSION
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    const formMessage = document.getElementById('formMessage');
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    formMessage.style.display = 'none';
    
    const formData = new FormData(this);
    
    // Convert to URL-encoded format instead of JSON
    const urlEncodedData = new URLSearchParams(formData).toString();
    
    // REPLACE THIS WITH YOUR ACTUAL DEPLOYED SCRIPT URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzV-_xt7T8KLUR3dcvzHK6b2ePDkeliBs1y1xPCFUarwDcxGFT15S5cuJ15q_FsJubwqQ/exec';
    
    // Use no-cors mode and URL-encoded data
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData
    })
    .then(() => {
        // With no-cors, we can't read the response, so assume success
        formMessage.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        this.reset();
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        console.error('Error:', error);
        formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or contact me directly at bekelealex57@gmail.com';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    })
    .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});
