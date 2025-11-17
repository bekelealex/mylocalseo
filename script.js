document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const business = document.getElementById('business').value;
  const message = document.getElementById('message').value;

  // Create URLSearchParams instead of FormData
  const params = new URLSearchParams();
  params.append('name', name);
  params.append('email', email);
  params.append('phone', phone);
  params.append('business', business);
  params.append('message', message);

  // Replace this with your actual Google Apps Script Web App URL
  const url = 'document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const business = document.getElementById('business').value;
  const message = document.getElementById('message').value;

  // Create URLSearchParams instead of FormData
  const params = new URLSearchParams();
  params.append('name', name);
  params.append('email', email);
  params.append('phone', phone);
  params.append('business', business);
  params.append('message', message);

  // Replace this with your actual Google Apps Script Web App URL
  const url = 'https://script.google.com/macros/s/AKfycbwsOqw_dpECwOwyWqjBksXeYq7EoVt2m2-CCyhhwT6hMNjnedOggl7mALzJD48PymnK4g/exec';

  fetch(url, {
    method: 'POST',
    body: params,
    headers: {
      'Accept': 'application/json', // We accept JSON response
      'Content-Type': 'application/x-www-form-urlencoded', // Use URL-encoded form data
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
';

  fetch(url, {
    method: 'POST',
    body: params,
    headers: {
      'Accept': 'application/json', // We accept JSON response
      'Content-Type': 'application/x-www-form-urlencoded', // Use URL-encoded form data
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

