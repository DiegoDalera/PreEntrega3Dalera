
const formularioLogueo = document.getElementById("formulario_logueo");

formularioLogueo.addEventListener("submit", (e) => {
alert ("estoy");
})


function limpiarContactForm() {
  document.getElementById('name').value = "";
  document.getElementById('mail').value = "";
  document.getElementById('question').value = "";
}
envio.addEventListener('click', (e)=> {
    location.href = 'admin.html'
  })