
const usuario01 = new User('Diego Dalera', 'diego71', '1234');
const usuario02 = new User('Fernando', 'fernandoCoder', '1234');

const formularioLogueo = document.getElementById("formulario_logueo");
const enviarBtn = document.getElementById('enviar');


enviarBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let validar = loginCheck();

  if (validar) {
    saveSession();
    cleanContactForm()
    window.location.href = 'admin.html';
  } else {
    const mensajeError = document.getElementById('mensaje');
    mensajeError.style.display = 'block';
    
    setTimeout(function() {
    mensajeError.style.display = 'none'; 
    }, 3000); 
  }
});

function loginCheck() {
  const username = document.getElementById('userName').value;
  const password = document.getElementById('psw').value;
  let resultado = (usuario01.login(username, password) || usuario02.login(username, password));
  return resultado;
}

function saveSession() {
  const username = document.getElementById('userName').value;
  localStorage.setItem('usuario', username);
}

function cleanContactForm() {
  document.getElementById('userName').value = '';
  document.getElementById('psw').value = '';
}


document.addEventListener('DOMContentLoaded', (e) => {
 precarga();
})

//Precarga de informacion
function precarga(){
  document.getElementById('userName').value='diego71';
  document.getElementById('psw').value = 1234;
}