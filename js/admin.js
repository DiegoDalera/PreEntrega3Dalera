
const formularioIngreso = document.getElementById("formulario_ingreso");
const tablaDePropiedades = document.getElementById("tabla_show");
const usuarioLogeado = document.getElementsByClassName("usuario");
const salirAdmin = document.getElementById("salir_admin");


//EventListener
document.addEventListener("DOMContentLoaded", (e) => {
  cargarTablaCrud();
  cargarUsuarioLogeado();
  borrarFormulario();
})


//evento que se dispara al enviar el formulario ingres de propiedades
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


salirAdmin.addEventListener("click", (e) => {
  alert("borrar");
  localStorage.removeItem('usuario');
})


function cargarUsuarioLogeado() {
  let user = localStorage.getItem('usuario');

  for (let i = 0; i < usuarioLogeado.length; i++) {
    usuarioLogeado[i].innerHTML = `Usuario => ${user}`;
  }
}

function fechaHoy() {
  // Crear un objeto Date con la fecha de hoy
  var fechaHoy = new Date();

  // Extraer la parte de la fecha
  var day = fechaHoy.getDate();
  var month = fechaHoy.getMonth() + 1; // Se suma 1 porque los meses se indexan desde 0
  var year = fechaHoy.getFullYear();

  // Formatear la fecha en el formato "dd/mm/yyyy"
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

    alert("ERROR - todos los campos deblen contener informacion");
    return false;
  } else {
    return true;
  }
}


function cargaPropiedadesCrud(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud,
  areaPropiedadCrud, pricePropiedadCrud, typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud,
  codigoPropiedadCrud) {

  let nuevaPropiedad = {
    img: "img/casas/default.jpg",
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
    favorita:false,
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
  code = code +
    `<tr>
      <td data-label>Titulo</td>
      <td data-label>Descripcion</td>
      <td data-label>Habitaciones</td>
      <td data-label>Baños</td>
      <td data-label>Superficie</td>
      <td data-label>Precio $ </td>
      <td data-label>Tipo de Propiedad</td>
      <td data-label>Zona</td>
      <td data-label>Tipo de operacion</td>
      <td data-label>Promocionada</td>
      <td data-label>Codigo de Propiedad</td>
      <td data-label>Eliminar Propiedad</td>
      <td data-label>Editar Propiedad</td>
    </tr>
     `

  let propiedadesArrayStorage = recuperarPropiedadesStorage();

  propiedadesArrayStorage.forEach(function (propiedades) {
    code = code +
      `
        <tr>
          <td>${propiedades.title}</td>
          <td>${propiedades.descripcion}</td>
          <td>${propiedades.bedrooms}</td>
          <td>${propiedades.bathrooms}</td>
          <td>${propiedades.area}</td>
          <td>${propiedades.price}</td>
          <td>${propiedades.type}</td>
          <td>${propiedades.zone}</td>
          <td>${propiedades.operacion}</td>
          <td>${propiedades.promocion}</td>
          <td id="code">${propiedades.code}</td>
          <td><a onClick="borrarPropiedad(${propiedades.code})"><span class="material-symbols-outlined">delete</span></a></td>
          <td><a onClick="editarPropiedad(${propiedades.code})"><span class="material-symbols-outlined">edit</span></a></td>
        </tr>
         `
  });

  code = code + "</table>";
  tablaDePropiedades.innerHTML = code;
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
  const propiedadABorrar = propiedadesArray.find((propiedad) => propiedad.code === code);
  propiedadesArray.splice(propiedadesArray.indexOf(propiedadABorrar), 1);
  guardarPropiedadesStorage(propiedadesArray)
  cargarTablaCrud()
}


function editarPropiedad(code) {
  const propiedadEditar = propiedadesArray.find((propiedad) => propiedad.code === parseInt(code))
  console.log(propiedadEditar);
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









