//EventListener CRUD 

const tablaDePropiedades = document.getElementById("tabla_show");
const formularioIngreso = document.getElementById("formulario_ingreso");

formularioIngreso.addEventListener("submit", (e) => {

  let tipoPropiedadCrud = formularioIngreso.titulo.value;
  let descripcionPropiedadCrud = formularioIngreso.descripcion.value;
  
  let bedroomsPropiedadCrud = formularioIngreso.habitaciones.value;
  let bathroomsPropiedadCrud = formularioIngreso.banos.value;
  

  let areaPropiedadCrud = formularioIngreso.area.value;
  let pricePropiedadCrud = formularioIngreso.precio.value;
  let typePropiedadCrud = formularioIngreso.tipo.value;

  

  let zonePropiedadCrud = formularioIngreso.zona.value;
  let operacionPropiedadCrud = formularioIngreso.operacion.value;
  let promocionPropiedadCrud = formularioIngreso.promocionada.value;

  cargaPropiedadesCrud(tipoPropiedadCrud,descripcionPropiedadCrud,bedroomsPropiedadCrud,bathroomsPropiedadCrud,areaPropiedadCrud,pricePropiedadCrud+
    typePropiedadCrud,operacionPropiedadCrud,zonePropiedadCrud,promocionPropiedadCrud)
    alert((tipoPropiedadCrud+descripcionPropiedadCrud+bedroomsPropiedadCrud+bathroomsPropiedadCrud+areaPropiedadCrud+pricePropiedadCrud+
      typePropiedadCrud+operacionPropiedadCrud+zonePropiedadCrud+promocionPropiedadCrud))
});





function cargaPropiedadesCrud(tipoPropiedadCrud,descripcionPropiedadCrud,bedroomsPropiedadCrud,bathroomsPropiedadCrud,areaPropiedadCrud,pricePropiedadCrud,
  typePropiedadCrud,operacionPropiedadCrud,zonePropiedadCrud,promocionPropiedadCrud) {

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
      fecha: new(Date),
      promocion: promocionPropiedadCrud
    };

  propiedadesArray.push(nuevaPropiedad);
  alert( "bien");
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
          <td> <span class="material-symbols-outlined">delete</span></td>
          <td><span class="material-symbols-outlined">edit</span></td>
        </tr>
         `
  });

  code = code + "</table>";
  tablaDePropiedades.innerHTML = code;

}