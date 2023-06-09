

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



//Creo copia  del array propiedades para poder ordenarlo por fecha y mostrarlo en "ultimas Propiedades"
function ordenarPopiedadesFecha(propiedadesArray) {
  // Crear una copia del array de propiedades
  let arrayPropiedadesOrdenadasFecha = propiedadesArray.slice();

  // Ordenar el array de propiedades por la propiedad "fecha"
  arrayPropiedadesOrdenadasFecha.sort(function (a, b) {
    var fechaA = new Date(a.fecha);
    var fechaB = new Date(b.fecha);
    return fechaA - fechaB;
  });

  // Devolver el array ordenado
  return arrayPropiedadesOrdenadasFecha;
}
