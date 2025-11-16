// Mobile Navigation Toggle
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

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + testimonials.length) % testimonials.length;
    
    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto slide testimonials
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Dot click events
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Form Submission to Google Sheets
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Replace with your Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        document.getElementById('formMessage').textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
        document.getElementById('formMessage').className = 'form-message success';
        document.getElementById('formMessage').style.display = 'block';
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            document.getElementById('formMessage').style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        document.getElementById('formMessage').textContent = 'Sorry, there was an error sending your message. Please try again or contact me directly at hello@alelignbekele.com';
        document.getElementById('formMessage').className = 'form-message error';
        document.getElementById('formMessage').style.display = 'block';
        console.error('Error:', error);
    })
    .finally(() => {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
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

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .about-content, .testimonial-slider, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});