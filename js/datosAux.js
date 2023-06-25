
function savePropStorage(propiedadesArray) {
  propiedadesJSON = JSON.stringify(propiedadesArray);
  localStorage.setItem('propiedades', propiedadesJSON);
}

function recoverPropStorage() {
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

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay);
  };
};
