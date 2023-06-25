
// # sourceURL = factorialize.js
const inputForm = document.getElementById("formulario_ingreso");
const propTable = document.getElementById("tabla_show");
const userLog = document.getElementsByClassName("usuario");
const exitAdmin = document.querySelectorAll(".salir");
const btnEraseForm = document.getElementById("btn_borrar");


//EventListener
document.addEventListener("DOMContentLoaded", (e) => {
  addEventsSalir();
  cargarTablaCrud();
  cargarUsuarioLogeado();
  borrarFormulario();
})

function addEventsSalir() {
  exitAdmin.forEach((salir) => {
    salir.addEventListener("click", (e) => {
      localStorage.removeItem('usuario');
      window.location.href = "../index.html";
    })
  })
}

btnEraseForm.addEventListener("click", () => {
  borrarFormulario();
})

//Evento que se dispara al enviar el formulario ingreso  de propiedades
inputForm.addEventListener("submit", (e) => {

  e.preventDefault();
  let tipoPropiedadCrud = inputForm.titulo.value.trim();
  let descripcionPropiedadCrud = inputForm.descripcion.value.trim();
  let bedroomsPropiedadCrud = inputForm.habitaciones.value.trim();
  let bathroomsPropiedadCrud = inputForm.banos.value.trim();
  let areaPropiedadCrud = parseInt(inputForm.area.value.trim());
  let pricePropiedadCrud = parseInt(inputForm.precio.value.trim());
  let typePropiedadCrud = inputForm.tipo_propiedad.value.trim();
  let zonePropiedadCrud = inputForm.zona.value.trim();
  let operacionPropiedadCrud = inputForm.operacion.value.trim();
  let promocionPropiedadCrud = inputForm.promocionada.value.trim();
  let codigoPropiedadCrud = parseInt(inputForm.codigo.value.trim());

  if (checkFormIngreso(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud, areaPropiedadCrud,
    pricePropiedadCrud, typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud, codigoPropiedadCrud)) {

    cargaPropiedadesCrud(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud, areaPropiedadCrud,
      pricePropiedadCrud, typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud, codigoPropiedadCrud)
  }
});


function cargarUsuarioLogeado() {
  let user = localStorage.getItem('usuario');
  for (let i = 0; i < userLog.length; i++) {
    userLog[i].innerHTML = `Usuario => ${user}`;
  }
}

function fechaHoy() {
  var fechaHoy = new Date();
  var day = fechaHoy.getDate();
  var month = fechaHoy.getMonth() + 1;
  var year = fechaHoy.getFullYear();
  var fechaFormateada = day + '/' + month + '/' + year;
  return fechaFormateada
}

function checkFormIngreso(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud,
  areaPropiedadCrud, pricePropiedadCrud, typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud,
  codigoPropiedadCrud) {

  if (tipoPropiedadCrud === "" || descripcionPropiedadCrud === "" || bedroomsPropiedadCrud === "" ||
    bathroomsPropiedadCrud === "" || areaPropiedadCrud === "" || pricePropiedadCrud === "" ||
    typePropiedadCrud === "" || zonePropiedadCrud === "" || operacionPropiedadCrud === "" ||
    promocionPropiedadCrud === "" || codigoPropiedadCrud === "") {

    Swal.fire({
      title: 'Error! Todos los campos deben contener informacion',
      icon: 'error',
      confirmButtonText: 'Continuar'
    })
    return false;

  } else {
    return true;
  }
}

function cargaPropiedadesCrud(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud,
  areaPropiedadCrud, pricePropiedadCrud, typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud,
  codigoPropiedadCrud) {

  let nuevaPropiedad = {
    img: "img/casas/default.jpg",//carga la imagen por default
    title: tipoPropiedadCrud,
    descripcion: descripcionPropiedadCrud,
    bedrooms: bedroomsPropiedadCrud,
    bathrooms: bathroomsPropiedadCrud,
    area: areaPropiedadCrud,
    price: pricePropiedadCrud,
    type: typePropiedadCrud,
    zone: zonePropiedadCrud,
    operacion: operacionPropiedadCrud,
    fecha: fechaHoy(),
    promocion: promocionPropiedadCrud,
    favorita: false,
    code: codigoPropiedadCrud
  };


  let propiedadesArrayStorage = recuperarPropiedadesStorage();
  propiedadesArrayStorage.push(nuevaPropiedad);
  savePropStorage(propiedadesArrayStorage);


  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'La propiedad ha sido Grabada',
    showConfirmButton: false,
    timer: 1500
  })

  habilitarCodDisable();
  borrarFormulario();
  cargarTablaCrud();
}


function cargarTablaCrud() {
  let code = "<table class='fl-table'>";
  code += `<tr>
    <td class="titulos_tabla">Titulo</td>
    <td class="titulos_tabla">Descripcion</td>
    <td class="titulos_tabla">Habitaciones</td>
    <td class="titulos_tabla">Baños</td>
    <td class="titulos_tabla">Superficie</td>
    <td class="titulos_tabla">Precio $ </td>
    <td class="titulos_tabla">Tipo de Propiedad</td>
    <td class="titulos_tabla">Zona</td>
    <td class="titulos_tabla">Tipo de operacion</td>
    <td class="titulos_tabla">Promocionada</td>
    <td class="titulos_tabla">Codigo de Propiedad</td>
    <td class="titulos_tabla">Eliminar Propiedad</td>
    <td class="titulos_tabla">Editar Propiedad</td>
  </tr>`;

  let propiedadesArrayStorage = recuperarPropiedadesStorage();

  propiedadesArrayStorage.forEach(function (propiedades) {
    code += `
      <tr>
        <td>${propiedades.title}</td>
        <td>${propiedades.descripcion}</td>
        <td>${propiedades.bedrooms}</td>
        <td>${propiedades.bathrooms}</td>
        <td>${propiedades.area}</td>
        <td>${propiedades.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</td>
        <td>${propiedades.type}</td>
        <td>${propiedades.zone}</td>
        <td>${propiedades.operacion}</td>
        <td>${propiedades.promocion}</td>
        <td class="code">${propiedades.code}</td>
        <td><a class="borrar" id="${propiedades.code}"><span class="material-symbols-outlined">delete</span></a></td>
        <td><a class="editar" id="${propiedades.code}"><span class="material-symbols-outlined">edit</span></a></td>
      </tr>`;
  });

  code += "</table>";
  propTable.innerHTML = code;

  // Agregar eventos de borrar y editar después de generar la tabla
  addEventBorrar();
  addEventEditar();
}


function addEventBorrar() {
  const borrarProp = document.querySelectorAll('.borrar');
  borrarProp.forEach((borrar) => {
    borrar.addEventListener("click", (e) => {

      Swal.fire({
        title: 'Esta seguro de querer borrar esta Propiedad?',
        text: "Esta accion no se podra revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          borrarPropiedad(borrar.id);
          Swal.fire(
            'Propiedad borrada correctamente',
          )
        }
      })
    });
  });
}

function addEventEditar() {
  const editarProp = document.querySelectorAll('.editar');
  editarProp.forEach((editar) => {
    editar.addEventListener("click", (e) => {
      editarPropiedad(editar.id);
    });
  });
}

function borrarFormulario() {
  inputForm.titulo.value = "";
  inputForm.descripcion.value = "";
  inputForm.habitaciones.value = "";
  inputForm.banos.value = "";
  inputForm.area.value = "";
  inputForm.precio.value = "";
  inputForm.tipo_propiedad.value = "";
  inputForm.zona.value = "";
  inputForm.operacion.value = "";
  inputForm.promocionada.value = "";
  inputForm.codigo.value = "";
  habilitarCodDisable();
}

function borrarPropiedad(code) {
  let propiedadesStorage = recuperarPropiedadesStorage();
  const propiedadABorrar = propiedadesStorage.find((propiedad) => propiedad.code === Number(code));
  let lugarArray = propiedadesStorage.indexOf(propiedadABorrar);
  propiedadesStorage.splice(lugarArray, 1);
  savePropStorage(propiedadesStorage);
  cargarTablaCrud();
}


function editarPropiedad(code) {
  let propiedadRecuperada =recuperarPropiedadesStorage();
  const propiedadEditar = propiedadRecuperada.find((propiedad) => propiedad.code === Number(code))
  inputForm.titulo.value = propiedadEditar.title;
  inputForm.descripcion.value = propiedadEditar.descripcion;
  inputForm.habitaciones.value = propiedadEditar.bedrooms;
  inputForm.banos.value = propiedadEditar.bathrooms;
  inputForm.area.value = propiedadEditar.area;
  inputForm.precio.value = propiedadEditar.price;
  inputForm.tipo_propiedad.value = propiedadEditar.type;
  inputForm.zona.value = propiedadEditar.zone;
  inputForm.operacion.value = propiedadEditar.operacion;
  inputForm.promocionada.value = propiedadEditar.promocion;
  inputForm.codigo.value = propiedadEditar.code;

  const codigoPropiedad = document.getElementById('codigo_prop')
  codigoPropiedad.disabled = true;

  borrarPropiedad(code);
}

function habilitarCodDisable(){
  const codigoPropiedad = document.getElementById('codigo_prop')
  codigoPropiedad.disabled = false;
}



