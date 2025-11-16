// Form Submission - SIMPLIFIED VERSION
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    const formMessage = document.getElementById('formMessage');
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    formMessage.style.display = 'none';
    
    // Get form data as plain object
    const formData = new FormData(this);
    const data = {
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        phone: formData.get('phone') || '',
        business: formData.get('business') || '',
        message: formData.get('message') || ''
    };
    
    console.log('Sending data:', data);
    
    // ⚠️ REPLACE WITH YOUR ACTUAL SCRIPT URL ⚠️
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzemwQ9E7slaT_s_mEq_89sIh0W4nydUaqSAdXXJa9dtE9L0vG4kjqiybytja74fPTqoA/exec';
    
    // Create URL parameters
    const params = new URLSearchParams();
    for (const key in data) {
        params.append(key, data[key]);
    }
    
    fetch(scriptURL, {
        method: 'POST',
        body: params
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        console.log('Success:', result);
        if (result.status === 'success') {
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'form-message success';
        } else {
            throw new Error(result.message || 'Server error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        formMessage.textContent = 'Sorry, there was an error. Please contact me directly at bekelealex57@gmail.com';
        formMessage.className = 'form-message error';
    })
    .finally(() => {
        formMessage.style.display = 'block';
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Only reset form on success
        if (formMessage.className.includes('success')) {
            this.reset();
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
});
