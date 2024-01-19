const emailInput = document.querySelector("input");
const submitButton = document.querySelector("button");
const mainElement = document.querySelector('main');

const successMessage = document.querySelector('.success-message-box');
const successMessageEmail = document.querySelector('.success-message-text span')
const dismissMessage = document.querySelector('.dismiss');

function subscribe() {
  successMessageEmail.innerHTML = emailInput.value;
  mainElement.style.display = "none";
  successMessage.style.display = "flex";
  console.log("funfou subscribe");
};

function dismiss() {
  mainElement.style.display = "grid";
  successMessage.style.display = "none";
  console.log("funfou dismiss");
}
emailInput.addEventListener('input', function () {
  const isEmailValid = emailInput.checkValidity();

  submitButton.disabled = !isEmailValid;
});