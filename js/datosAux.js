//Creo copia del array para poder ordenarlo por fecha

function ordenarPropiedadesFecha(propiedadesArray){

let arrayPropiedadesOrdenadasFecha = propiedadesArray.map(function (objeto) {
  //return { ...objeto };
  arrayPropiedadesOrdenadasFecha.sort(function (a, b) {
    let fechaA = a.fecha;
    let fechaB = b.fecha;
    return fechaB - fechaA;
});
})
}


//funciones que me permiten guardar y recuperar localStorage propiedades
function guardarPropiedadesStorage(propiedadesArray) {
  propiedadesJSON = JSON.stringify(propiedadesArray);
  localStorage.setItem('propiedades', propiedadesJSON);
}


function recuperarPropiedadesStorage() {
  const propiedadesJSON = localStorage.getItem('propiedades');
  const arrayPropiedadesPars = JSON.parse(propiedadesJSON);
  return arrayPropiedadesPars;
}


//funciones que me permiten guardar y recuperar localStorage propiedades ordenadas por fecha
function guardarPropiedadesOrdeadasFechaStorage(propiedadesArray) {
  propiedadesFechaJSON = JSON.stringify(propiedadesArray);
  localStorage.setItem('propiedadesOrdFecha', propiedadesFechaJSON);
}

function recuperarPropiedadesOrdenadasFechaStorage() {
  const propiedadesFechaJSON = localStorage.getItem('propiedadesOrdFecha');
  const arrayPropiedadesFechaPars = JSON.parse(propiedadesFechaJSON);
  return arrayPropiedadesFechaPars;
}

