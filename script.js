// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Submission to Google Sheets
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
    
    // Your Google Apps Script URL
    const scriptURL = '// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Submission to Google Sheets
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
    
    // Your Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyvoQf27EaJTVGQ2oiYgxPiYZ6ulGALERsd4LxwJju78rsj6ZfmYFLJCtKlxJRK5kH9Wg/exec';
    
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
    })
    .then(response => response.text())
    .then(() => {
        // SUCCESS
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        this.reset();
    })
    .catch(error => {
        // ERROR
        formMessage.textContent = 'Sorry, there was an error. Please contact me directly at bekelealex57@gmail.com';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    })
    .finally(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
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
    .then(response => response.text())
    .then(() => {
        // SUCCESS
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        this.reset();
    })
    .catch(error => {
        // ERROR
        formMessage.textContent = 'Sorry, there was an error. Please contact me directly at bekelealex57@gmail.com';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    })
    .finally(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
