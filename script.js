document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const business = document.getElementById('business').value;
  const message = document.getElementById('message').value;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('business', business);
  formData.append('message', message);

  // Replace this with your actual Google Apps Script Web App URL
  const url = 'https://script.google.com/macros/s/AKfycbz5cvx6ak8p0tNcWHf-Bre_Cx2eYlUbuLoDppIdeii7Tz2Zd8rZCqOqhwgdvHpiZCiEIg/exec';

  fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded', // Make sure to specify content type
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Form submitted successfully:', data);
    // Handle success (e.g., show success message to user)
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you for your submission!';
    formMessage.className = 'form-message success';
    formMessage.style.display = 'block';
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
    // Handle error (e.g., show error message to user)
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'There was an error submitting your form. Please try again later.';
    formMessage.className = 'form-message error';
    formMessage.style.display = 'block';
  });
});
