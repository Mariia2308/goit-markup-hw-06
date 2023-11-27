const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');

  const formDataObject = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (!formDataObject.email || !formDataObject.password) {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  console.log(formDataObject);
  loginForm.reset();
});





