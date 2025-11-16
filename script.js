// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// FORM SUBMISSION TO GOOGLE SHEETS
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
    const urlEncodedData = new URLSearchParams(formData).toString();
    
    // ⚠️ YOUR GOOGLE APPS SCRIPT URL GOES HERE ⚠️
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxWju7LIP4ktmQ5C-iuJlK5SKA45_-IoebzkEoIbQtk7STVu1wjUJGJP2HbOo_wHxJoXQ/exec';
    
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
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
