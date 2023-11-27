const validInput = document.getElementById("validation-input");

validInput.addEventListener('input', onInputChange);
validInput.addEventListener('blur', onInputBlur);

function onInputChange(event) {
 
  console.log(event.currentTarget.value);
}

function onInputBlur(event) {
  const userVal = event.currentTarget.value.length;
  console.log(userVal);
  const valLength = Number(validInput.dataset.length);
  console.log(valLength);

  validInput.classList.remove('valid', 'invalid');

  if (userVal === valLength) {
    validInput.classList.add('valid');
  } else {
    validInput.classList.add('invalid');
  }
}





