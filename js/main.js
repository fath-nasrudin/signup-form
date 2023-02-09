window.onload = () => {
  document.querySelector('#password').addEventListener('input',validatePassword)
  document.querySelector('#confirm-password').addEventListener('input', validatePassword)
}

const matchPassword = (passSelector, passConfirmSelector) => {
  const passInput = document.querySelector(passSelector);
  const passConfirmInput = document.querySelector(passConfirmSelector);

  const passValue = passInput.value;
  const passConfirmValue = passConfirmInput.value;

  if (passValue === '') {
    passInput.setCustomValidity('Password can not empty!');
  } else
  if (passValue !== passConfirmValue) {
    passConfirmInput.setCustomValidity('Password do not match');
  } else {
    passInput.setCustomValidity('');
    passConfirmInput.setCustomValidity('');
  }
};

const validatePassword = () => {
  matchPassword('#password', '#confirm-password');
}
