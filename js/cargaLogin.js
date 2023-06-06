//Validacion formulario de ingreso

const formularioLogueo = document.getElementById("formulario_logueo");
const enviarBtn = document.getElementById("enviar");

// Funcion que verifica si lo que le enviamos no esta en blanco
const isRequired = value => value === '' ? false : true;

const loginCheck = () => {

  let valid = false;
  const username = document.getElementById("userName").value;
  const password = document.getElementById("psw").value;

  let usuarioValido = vendedoresArray.find(vendedor => vendedor.apellido === username && vendedor.pass === password);

  if (usuarioValido!== undefined){
    valid=true;
  }else{
    valid = false
  }

  alert(usuarioValido);

  return valid;
  }  ;



enviarBtn.addEventListener("click", (e) => {

  e.preventDefault();

  if (loginCheck()){
    alert("correcto");
    window.location.href = "admin.html";
  }else{
    alert("incorrecto");
    
  }

});













function limpiarContactForm() {
  document.getElementById('name').value = "";
  document.getElementById('mail').value = "";
  document.getElementById('question').value = "";
}
envio.addEventListener('click', (e) => {
  location.href = 'admin.html'
})