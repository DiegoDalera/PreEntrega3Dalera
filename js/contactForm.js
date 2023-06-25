
//Formulario contacto Validacion

const usernameForm = document.querySelector('#form_username');
const emailForm = document.querySelector('#email');
const questionForm = document.querySelector('#form_question');
const contactFormSend = document.getElementById("form_contacto");


contactFormSend.addEventListener("submit", (e) => {
  e.preventDefault();
  let isUsernameValid = checkUsername(), isEmailValid = checkEmail(), isQuestionValid = checkQuestion();
  let isFormValid = isUsernameValid && isEmailValid && isQuestionValid;

  if (isFormValid) {
    const mensajeOK = document.getElementById('mensaje_contacto');
    mensajeOK.style.display = 'block';

    setTimeout(function () {
      mensajeOK.style.display = 'none';
    }, 3000);
  }

  cleanContactForm();
}
);


const cleanContactForm = () => {

  document.querySelector('#form_username').value = "";
  document.querySelector('#email').value = "";
  document.querySelector('#form_question').value = "";
}

const required = value => value === '' ? false : true;
const long = (length, min, max) => length < min || length > max ? false : true;


const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 25;

  const username = usernameForm.value.trim();

  if (!required(username)) {
    showError(usernameForm, 'El usuario no puede estar vacio.');
  } else if (!long(username.length, min, max)) {
    showError(usernameForm, `El campo usuario debe tener entre  ${min} y  ${max} caracteres.`)
  } else {
    showSuccess(usernameForm);
    valid = true;
  }
  return valid;
};


const checkEmail = () => {
  let valid = false;
  const email = emailForm.value.trim();

  if (!required(email)) {
    showError(emailForm, 'El campo Email no puede estar en blanco.');
  } else if (!isEmailValid(email)) {
    showError(emailForm, 'El Email no es valido.')
  } else {
    showSuccess(emailForm);
    valid = true;
  }
  return valid;
};


const checkQuestion = () => {
  let valid = false;
  const question = questionForm.value.trim();

  if (!required(question)) {
    showError(questionForm, 'El mensaje no puede estar vacío');
  } else {
    showSuccess(questionForm);
    valid = true;
  }

  return valid;
};


const showError = (input, message) => {

  const formField = input.parentElement;

  formField.classList.remove('correcto');
  formField.classList.add('error');

  const error = formField.querySelector('small');
  error.textContent = message;
};


const showSuccess = (input) => {

  const formField = input.parentElement;

  formField.classList.remove('error');
  formField.classList.add('correcto');

  const error = formField.querySelector('small');
  error.textContent = '';
}

const isEmailValid = (email) => {
  const expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expresion.test(email);
};
