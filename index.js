const form = document.getElementById('form');
const textField = document.querySelector('.text-field');
const errorText = document.querySelector('.error-text');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateEmail(textField.value)) {
    alert("You're on the list!"); 
  } else {
    textField.classList.add('text-field-error');
    errorText.style.display = 'block';
  }
});

textField.addEventListener('input', () => {
  console.log('changing');
  if (validateEmail(textField.value)) {
    textField.classList.add('text-field-verified');
    textField.classList.remove('text-field-error');
    errorText.style.display = 'none';
  } else {
    textField.classList.remove('text-field-verified');
  }
})