//EventListener CRUD 

const tablaDePropiedades = document.getElementById("tabla_show");
const formularioIngreso = document.getElementById("formulario_ingreso");


formularioIngreso.addEventListener("submit", (e) => {
  e.preventDefault();
  let tipoPropiedadCrud = formularioIngreso.titulo.value;
  let descripcionPropiedadCrud = formularioIngreso.descripcion.value;
  let bedroomsPropiedadCrud = formularioIngreso.habitaciones.value;
  let bathroomsPropiedadCrud = formularioIngreso.banos.value;
  let areaPropiedadCrud = parseInt(formularioIngreso.area.value);
  let pricePropiedadCrud = parseInt(formularioIngreso.precio.value);
  let typePropiedadCrud = formularioIngreso.tipo_propiedad.value;
  let zonePropiedadCrud = formularioIngreso.zona.value;
  let operacionPropiedadCrud = formularioIngreso.operacion.value;
  let promocionPropiedadCrud = formularioIngreso.promocionada.value;
  let codigoPropiedadCrud = parseInt(formularioIngreso.codigo.value);

  cargaPropiedadesCrud(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud, areaPropiedadCrud,
    pricePropiedadCrud,typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud, codigoPropiedadCrud)

});

function cargaPropiedadesCrud(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud,bathroomsPropiedadCrud,
   areaPropiedadCrud, pricePropiedadCrud, typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud,
    codigoPropiedadCrud) {

  let nuevaPropiedad = {
    img: "img/casas/casa3.jpg",
    title: tipoPropiedadCrud,
    descripcion: descripcionPropiedadCrud,
    bedrooms: bedroomsPropiedadCrud,
    bathrooms: bathroomsPropiedadCrud,
    area: areaPropiedadCrud,
    price: pricePropiedadCrud,
    type: typePropiedadCrud,
    zone: zonePropiedadCrud,
    operacion: operacionPropiedadCrud,
    fecha: new (Date),
    promocion: promocionPropiedadCrud,
    code: codigoPropiedadCrud
  };

  console.log(nuevaPropiedad);

  propiedadesArray.push(nuevaPropiedad);
  // console.log(propiedadesArrayCrud);
  cargarTablaCrud();

}


function cargarTablaCrud() {

  let code = "<table class='fl-table'>";
  code = code +
  `<tr>
      <th>Titulo</th>
      <th>Descripcion</th>
      <th>Habitaciones</th>
      <th>Baños</th>
      <th>Superficie</th>
      <th>Precio $ </th>
      <th>Tipo de Propiedad</th>
      <th>Zona</th>
      <th>Tipo de operacion</th>
      <th>Promocionada</th>
      <th>Codigo de Propiedad</th>
      <th>Eliminar Propiedad</th>
      <th>Editar Propiedad</th>
    </tr>
     `

  propiedadesArray.forEach(function (propiedades) {
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









