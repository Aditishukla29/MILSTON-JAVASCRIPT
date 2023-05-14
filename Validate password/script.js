const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const result = document.querySelector('.result');

form.addEventListener('click', function(event) {
  event.preventDefault();
  
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email.includes('@') || password.length < 8) {
    result.textContent = 'Invalid email or password!';
    result.style.color = 'red';
  } else {
    result.textContent = 'Valid email and password!';
    result.style.color = 'green';
  }
});