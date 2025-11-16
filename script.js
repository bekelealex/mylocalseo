// Form Submission - CORRECTED VERSION
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    const formMessage = document.getElementById('formMessage');
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    formMessage.style.display = 'none';
    
    // Get form data
    const formData = new FormData(this);
    
    // Convert to URL-encoded string
    const urlEncodedData = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
        urlEncodedData.append(key, value);
    }
    
    console.log('Sending data:', urlEncodedData.toString());
    
    // ⚠️ REPLACE WITH YOUR ACTUAL DEPLOYED SCRIPT URL ⚠️
    const scriptURL = '// Form Submission - CORRECTED VERSION
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    const formMessage = document.getElementById('formMessage');
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    formMessage.style.display = 'none';
    
    // Get form data
    const formData = new FormData(this);
    
    // Convert to URL-encoded string
    const urlEncodedData = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
        urlEncodedData.append(key, value);
    }
    
    console.log('Sending data:', urlEncodedData.toString());
    
    // ⚠️ REPLACE WITH YOUR ACTUAL DEPLOYED SCRIPT URL ⚠️
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx20BfFg4a1YSUryCvKFLwSj_PbGNwg9-MOdAmQgf8fi2rAG6A3JKmQhCrgA5Fr2AggNw/exec';
    
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
    })
    .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success response:', data);
        if (data.status === 'success') {
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'form-message success';
            this.reset();
        } else {
            throw new Error(data.message || 'Server returned error');
        }
    })
    .catch(error => {
        console.error('Full error:', error);
        formMessage.textContent = 'Sorry, there was an error. Please contact me directly at bekelealex57@gmail.com';
        formMessage.className = 'form-message error';
    })
    .finally(() => {
        formMessage.style.display = 'block';
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Hide success message after 5 seconds
        if (formMessage.className.includes('success')) {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
});';
    
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
    })
    .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success response:', data);
        if (data.status === 'success') {
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'form-message success';
            this.reset();
        } else {
            throw new Error(data.message || 'Server returned error');
        }
    })
    .catch(error => {
        console.error('Full error:', error);
        formMessage.textContent = 'Sorry, there was an error. Please contact me directly at bekelealex57@gmail.com';
        formMessage.className = 'form-message error';
    })
    .finally(() => {
        formMessage.style.display = 'block';
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Hide success message after 5 seconds
        if (formMessage.className.includes('success')) {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
});
