const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordConfirmationInput = document.getElementById('username');

// Functions
function showError(input, message) {
  const formParent = input.parentElement;
  formParent.classList.add('error');
  const smallError = formParent.querySelector('small');
  smallError.innerText = message
}

// Events

form.addEventListener('submit', (event) => {
  event.preventDefault();
})
