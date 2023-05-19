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

  cargaPropiedadesCrud(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud, bathroomsPropiedadCrud, areaPropiedadCrud, pricePropiedadCrud,
    typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud, codigoPropiedadCrud)

});

function cargaPropiedadesCrud(tipoPropiedadCrud, descripcionPropiedadCrud, bedroomsPropiedadCrud,
  bathroomsPropiedadCrud, areaPropiedadCrud, pricePropiedadCrud,
  typePropiedadCrud, zonePropiedadCrud, operacionPropiedadCrud, promocionPropiedadCrud, codigoPropiedadCrud) {



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



let borrarPropiedad = (code) => {
    code.preventDefault;
    alert("borraremos "+code)
     propiedadesArray.splice(code-1, 1);
     cargarTablaCrud()
 }



function editarPropiedad(id) {
  alert("encontrado" + id);
  const  propiedadEncontrada = propiedadesArray.find(function(propiedad){
    return propiedad.code=== id;
  });


}



 


