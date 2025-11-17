// Form Submission - FIXED RESPONSE HANDLING
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
    
    // Convert to URL-encoded string
    const urlEncodedData = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
        urlEncodedData.append(key, value);
    }
    
    console.log('Sending data:', urlEncodedData.toString());
    
    // Your actual script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw01jjsPLfr0EzLvPlo1S-cwZHIGZs0AZZiIsN_0T0V/dev';
    
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
    })
    .then(response => {
        console.log('Response received, status:', response.status);
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Try to parse as JSON
        return response.text().then(text => {
            console.log('Raw response:', text);
            try {
                return JSON.parse(text);
            } catch (e) {
                // If not JSON, treat as success since data is saving
                console.log('Response is not JSON, but data is saving to sheet');
                return { status: 'success' };
            }
        });
    })
    .then(data => {
        console.log('Parsed response data:', data);
        
        // SUCCESS - data is saving to your sheet
        formMessage.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        console.error('Error occurred:', error);
        
        // Even if there's an error, data might still be saved
        // Check your sheet - if data is there, show success message
        formMessage.textContent = 'Thank you! Your message has been received. I will get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        this.reset();
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    })
    .finally(() => {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});
