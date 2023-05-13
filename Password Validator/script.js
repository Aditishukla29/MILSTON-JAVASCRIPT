const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.createElement('span');
errorMessage.className = 'error-message';

function validatePassword(event) {
  event.preventDefault();
  if (passwordInput.value === confirmPasswordInput.value) {
    console.log('Password Matched. Password validation Successful.');
  } else {
    errorMessage.textContent = 'Password didn\'t match. Password validation unsuccessful';
    form.appendChild(errorMessage);
  }
}

submitBtn.addEventListener('click', validatePassword);
