

function guardarPropiedadesStorage(propiedadesArray) {
  propiedadesJSON = JSON.stringify(propiedadesArray);
  localStorage.setItem('propiedades', propiedadesJSON);
}

function recuperarPropiedadesStorage() {
  const propiedadesJSON = localStorage.getItem('propiedades');
  const arrayPropiedadesPars = JSON.parse(propiedadesJSON);
  return arrayPropiedadesPars;
}

function ordenarPopiedadesFecha(propiedadesArray) {
  let arrayPropiedadesOrdenadasFecha = propiedadesArray.slice();

  arrayPropiedadesOrdenadasFecha.sort(function (a, b) {
    var fechaA = new Date(a.fecha);
    var fechaB = new Date(b.fecha);
    return fechaA - fechaB;
  });

  return arrayPropiedadesOrdenadasFecha;
}
