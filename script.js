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

// WORKING FORM - OPENS EMAIL
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const business = document.getElementById('business').value;
    const message = document.getElementById('message').value;
    
    const subject = `New Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ABusiness: ${business}%0AMessage: ${message}`;
    
    window.location.href = `mailto:bekelealex57@gmail.com?subject=${subject}&body=${body}`;
    
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you! Your email client is opening. Please send the message.';
    formMessage.className = 'form-message success';
    formMessage.style.display = 'block';
    
    this.reset();
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 8000);
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
