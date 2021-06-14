const form = document.getElementById('form');
const textField = document.querySelector('.text-field');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateEmail(textField.value)) {
    alert("You're on the list!"); 
  } else {
    console.log('bad');
    textField.classList.add('text-field-error');
  }
});