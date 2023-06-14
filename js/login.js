
const diego = new Usuario('Diego Dalera', 'diego71', '1234');


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
    alert("incorrecto");
  }
});

function loginCheck() {
  const username = document.getElementById("userName").value;
  const password = document.getElementById("psw").value;
  let resultado = diego.login(username, password);
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

const esRequerido = value => value === '' ? false : true;