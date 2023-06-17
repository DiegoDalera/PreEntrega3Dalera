
// # sourceURL = factorialize.js

const formularioIngreso = document.getElementById("formulario_ingreso");
const tablaDePropiedades = document.getElementById("tabla_show");
const usuarioLogeado = document.getElementsByClassName("usuario");
const salirAdmin = document.querySelectorAll(".salir");
const btnBorrarFormulario = document.getElementById("btn_borrar");


//EventListener
document.addEventListener("DOMContentLoaded", (e) => {
  addEventsSalir();
  cargarTablaCrud();
  cargarUsuarioLogeado();
  borrarFormulario();
})

function addEventsSalir() {
  salirAdmin.forEach((salir) => {
    salir.addEventListener("click", (e) => {
      localStorage.removeItem('usuario');
      window.location.href = "../index.html";

      // Swal.fire({
      //   title: 'Estas Seguro que deseas Salir?',
      //   showDenyButton: true,
      //   showCancelButton: false,
      //   confirmButtonText: 'Salir',
      //   denyButtonText: `No salir`,
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     localStorage.removeItem('usuario');
      //     window.location.href = "../index.html";
      //   } else if (result.isDenied) {
      //     return
      //   }
      // })
    })
  })
}

btnBorrarFormulario.addEventListener("click", () => {
  borrarFormulario();
})

//Evento que se dispara al enviar el formulario ingres de propiedades
formularioIngreso.addEventListener("submit", (e) => {
  e.preventDefault();
  let tipoPropiedadCrud = formularioIngreso.titulo.value.trim();
  let descripcionPropiedadCrud = formularioIngreso.descripcion.value.trim();
  let bedroomsPropiedadCrud = formularioIngreso.habitaciones.value.trim();
  let bathroomsPropiedadCrud = formularioIngreso.banos.value.trim();
  let areaPropiedadCrud = parseInt(formularioIngreso.area.value.trim());
  let pricePropiedadCrud = parseInt(formularioIngreso.precio.value.trim());
  let typePropiedadCrud = formularioIngreso.tipo_propiedad.value.trim();
  let zonePropiedadCrud = formularioIngreso.zona.value.trim();
  let operacionPropiedadCrud = formularioIngreso.operacion.value.trim();
  let promocionPropiedadCrud = formularioIngreso.promocionada.value.trim();
  let codigoPropiedadCrud = parseInt(formularioIngreso.codigo.value.trim());

  if (checkFormIngreso(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud, areaPropiedadCrud,
    pricePropiedadCrud, typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud, codigoPropiedadCrud)) {

    cargaPropiedadesCrud(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud, areaPropiedadCrud,
      pricePropiedadCrud, typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud, codigoPropiedadCrud)
  }
});


function cargarUsuarioLogeado() {
  let user = localStorage.getItem('usuario');
  for (let i = 0; i < usuarioLogeado.length; i++) {
    usuarioLogeado[i].innerHTML = `Usuario => ${user}`;
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

  //   Swal.fire('Todos los campos deben tener Informacion')
  //   return false;
  // } else {
  //   return true;
  // }
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
  guardarPropiedadesStorage(propiedadesArrayStorage);
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
  tablaDePropiedades.innerHTML = code;

  // Agregar eventos de borrar y editar después de generar la tabla
  addEventBorrar();
  addEventEditar();
}


function addEventBorrar() {
  const borrarProp = document.querySelectorAll('.borrar');
  borrarProp.forEach((borrar) => {
    borrar.addEventListener("click", (e) => {
      //Swal.fire('La propiedad ha sido eliminada de la base');
      borrarPropiedad(borrar.id);
    });
  });
}

function addEventEditar() {
  const editarProp = document.querySelectorAll('.editar');
  editarProp.forEach((editar) => {
    editar.addEventListener("click", (e) => {
      //Swal.fire('Edite los cambios y luego vuelva a guardar la propiedad');
      editarPropiedad(editar.id);
    });
  });
}


function borrarFormulario() {
  formularioIngreso.titulo.value = "";
  formularioIngreso.descripcion.value = "";
  formularioIngreso.habitaciones.value = "";
  formularioIngreso.banos.value = "";
  formularioIngreso.area.value = "";
  formularioIngreso.precio.value = "";
  formularioIngreso.tipo_propiedad.value = "";
  formularioIngreso.zona.value = "";
  formularioIngreso.operacion.value = "";
  formularioIngreso.promocionada.value = "";
  formularioIngreso.codigo.value = "";
}


function borrarPropiedad(code) {
  let propiedadesStorage = recuperarPropiedadesStorage();
  const propiedadABorrar = propiedadesStorage.find((propiedad) => propiedad.code === Number(code));
  let lugarArray = propiedadesStorage.indexOf(propiedadABorrar);
  propiedadesStorage.splice(lugarArray, 1);
  guardarPropiedadesStorage(propiedadesStorage);
  cargarTablaCrud();
}


function editarPropiedad(code) {
  const propiedadEditar = propiedadesArray.find((propiedad) => propiedad.code === Number(code))
  formularioIngreso.titulo.value = propiedadEditar.title;
  formularioIngreso.descripcion.value = propiedadEditar.descripcion;
  formularioIngreso.habitaciones.value = propiedadEditar.bedrooms;
  formularioIngreso.banos.value = propiedadEditar.bathrooms;
  formularioIngreso.area.value = propiedadEditar.area;
  formularioIngreso.precio.value = propiedadEditar.price;
  formularioIngreso.tipo_propiedad.value = propiedadEditar.type;
  formularioIngreso.zona.value = propiedadEditar.zone;
  formularioIngreso.operacion.value = propiedadEditar.operacion;
  formularioIngreso.promocionada.value = propiedadEditar.promocion;
  formularioIngreso.codigo.value = propiedadEditar.code;
  borrarPropiedad(code);
}






