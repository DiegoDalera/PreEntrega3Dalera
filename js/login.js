
const usuario01 = new Usuario('Diego Dalera', 'diego71', '1234');
const usuario02 = new Usuario('Fernando', 'fernandoCoder', '1234');

const formularioLogueo = document.getElementById("formulario_logueo");
const enviarBtn = document.getElementById("enviar");


enviarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let validar = loginCheck();

  if (validar) {
    guardarSesion();
    limpiarContactForm()
    window.location.href = "admin.html";
  } else {
    const mensajeError = document.getElementById('mensaje');
    mensajeError.style.display = 'block';
    
    setTimeout(function() {
    mensajeError.style.display = 'none'; // Ocultar el div después de 2 segundos
    }, 3000); 
  }
});

function loginCheck() {
  const username = document.getElementById("userName").value;
  const password = document.getElementById("psw").value;
  let resultado = (usuario01.login(username, password) || usuario02.login(username, password));
  return resultado;
}

function guardarSesion() {
  const username = document.getElementById('userName').value;
  localStorage.setItem('usuario', username);
}


function limpiarContactForm() {
  document.getElementById("userName").value = "";
  document.getElementById("psw").value = "";
}

