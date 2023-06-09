//Validacion formulario de ingreso

const formularioLogueo = document.getElementById("formulario_logueo");
const enviarBtn = document.getElementById("enviar");


enviarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginCheck()) {
    guardarSesion();
    limpiarContactForm()
    window.location.href = "admin.html";
  } else {

    alert("incorrecto");

  }
});

// Funcion que verifica si lo que le enviamos no esta en blanco
const esRequerido = value => value === '' ? false : true;


const loginCheck = () => {
  let valid = false;
  const username = document.getElementById("userName").value;
  const password = document.getElementById("psw").value;

  let usuarioValido = vendedoresArray.find(vendedor => vendedor.apellido === username.trim()
    && vendedor.pass === password.trim());

  if (usuarioValido !== undefined) {
    valid = true;
  } else {
    valid = false
  }
  return valid;
};



function guardarSesion() {
  const username = document.getElementById('userName').value;
  localStorage.setItem('usuario', username);
  alert("estoy ");
}


function limpiarContactForm() {
  document.getElementById("userName").value = "";
  document.getElementById("psw").value = "";
}


// envio.addEventListener('click', (e) => {
//   location.href = 'admin.html'
// })


/* const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('usuario');
  const direcciónEmail = document.getElementById('email');
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);


function redireccionarAdmin() {
  return window.location.href("../pages/admin.html");
}*/