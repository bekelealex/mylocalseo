// SIMPLEST WORKING VERSION
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Create Google Form-style submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyOq_o3U5ilKWAnDjc3vuvuklcDcBiwnJEaOn_u_M7CjFlcD9iNtty2J6qWUvsLGhk5dw/exec';
    const params = new URLSearchParams(data).toString();
    
    // Submit using a simple form method
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = scriptURL;
    form.style.display = 'none';
    
    for (const key in data) {
        const input = document.createElement('input');
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
    }
    
    document.body.appendChild(form);
    form.submit();
    
    // Show success message
    document.getElementById('formMessage').textContent = 'Thank you! Your message has been sent.';
    document.getElementById('formMessage').className = 'form-message success';
    document.getElementById('formMessage').style.display = 'block';
    this.reset();
});
