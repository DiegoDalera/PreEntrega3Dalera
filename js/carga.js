
//EventListener Index.Html

const propiedadesCardsPromociones = document.querySelector(".container");
const propiedadesCardsPrincipal = document.querySelector(".container");
const propiedadesCardsUltimosIngresos = document.querySelector(".container_ultimas_propiedades");
const formularioBusquedaPropiedades = document.getElementById("formulario_busqueda_propiedades");

//EventListener CRUD 

const tablaDePropiedades = document.getElementById("tabla_show")

// Carga de propiedades y options en el index.html al inicio 

function cargaInicio() {
  cargaPropiedadesPromocionadas();
  cargarOpcionesBusqueda();
  cargarOpcionesBusquedaTest();
  cargaUltimasPropiedades();
  //mostrarModal();
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


function redireccionar() {
  // Cambia la URL a la que deseas redireccionar
  window.location.href("pages/admin.html");
}

function cargaPropiedadesPromocionadas() {
  let code = ``;
  propiedadesArray.forEach(function (propiedadesUnicas) {

    // Solo cargamos las propiedades promocionadas
    if (propiedadesUnicas.promocion == 'si') {
      code = code +
        `
<div class="box">
                <div class="top">
                  <img src="${propiedadesUnicas.img}" alt="" />
                  <span
                    ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
                  ></span>
                </div>
                <div class="bottom">
                  <h3>${propiedadesUnicas.title}</h3>
                  <p> ${propiedadesUnicas.descripcion}
                  </p>
                  <div class="advants">
                    <div>
                      <span>Bedrooms</span>
                      <div><i class="fas fa-th-large"></i><span>${propiedadesUnicas.bedrooms}</span></div>
                    </div>
                    <div>
                      <span>Bathrooms</span>
                      <div><i class="fas fa-shower"></i><span>${propiedadesUnicas.bathrooms}</span></div>
                    </div>
                    <div>
                      <span>Area</span>
                      <div>
                        <i class="fas fa-vector-square"></i
                        ><span>${propiedadesUnicas.area}<span>Sq Ft</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    <span>${propiedadesUnicas.type}</span>
                    <span>${propiedadesUnicas.price}</span>
                  </div>
                </div>
              </div>`

    } else {

    }
  });

  propiedadesCardsPrincipal.innerHTML = code;
}

function buscarPropiedades(e) {
  let tipoOperacion = formularioBusquedaPropiedades.tipo_operacion.value;
  let tipoPropiedad = formularioBusquedaPropiedades.tipo_propiedad.value;
  let precioMinimo = parseInt(formularioBusquedaPropiedades.precio_minimo.value);
  let precioMaximo = parseInt(formularioBusquedaPropiedades.precio_maximo.value);
  cargaPropiedadesBuscadas(tipoOperacion, tipoPropiedad, precioMinimo, precioMaximo);
}

// Cargamos las propiedades buscadas por el usuario
function cargaPropiedadesBuscadas(operacion, tipo, precioMin, precioMax) {
  alert(operacion + tipo + precioMin + precioMax);

  let code = ``;
  propiedadesArray.forEach(function (propiedadesBuscadas) {

    if (propiedadesBuscadas.operacion == operacion && propiedadesBuscadas.type == tipo && propiedadesBuscadas.price >= precioMin
      && propiedadesBuscadas.price <= precioMax) {

      code = code +
        `
      <div class="box">
                <div class="top">
                  <img src="${propiedadesBuscadas.img}" alt="" />
                  <span
                    ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
                  ></span>
                </div>
                <div class="bottom">
                  <h3>${propiedadesBuscadas.title}</h3>
                  <p> ${propiedadesBuscadas.descripcion}
                  </p>
                  <div class="advants">
                    <div>
                      <span>Bedrooms</span>
                      <div><i class="fas fa-th-large"></i><span>${propiedadesBuscadas.bedrooms}</span></div>
                    </div>
                    <div>
                      <span>Bathrooms</span>
                      <div><i class="fas fa-shower"></i><span>${propiedadesBuscadas.bathrooms}</span></div>
                    </div>
                    <div>
                      <span>Area</span>
                      <div>
                        <i class="fas fa-vector-square"></i
                        ><span>${propiedadesBuscadas.area}<span>Sq Ft</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    <span>${propiedadesBuscadas.type}</span>
                    <span>${propiedadesBuscadas.price}</span>
                  </div>
                </div>
              </div>`

    } else {

    }
  });

  alert(code)
  propiedadesCardsPrincipal.innerHTML = code;
}


// Carga solo ultimas propiedades 
function cargaUltimasPropiedades() {

  let code = ``;

  for (let i = 0; i <= 3; i++) {

    code = code +
      `
      <div class="box">
                      <div class="top">
                        <img src="${propiedadesArray[i].img}" alt="" />
                        <span
                          ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
                        ></span>
                      </div>
                      <div class="bottom">
                        <h3>${propiedadesArray[i].title}</h3>
                        <p> ${propiedadesArray[i].descripcion}
                        </p>
                        <div class="advants">
                          <div>
                            <span>Bedrooms</span>
                            <div><i class="fas fa-th-large"></i><span>${propiedadesArray[i].bedrooms}</span></div>
                          </div>
                          <div>
                            <span>Bathrooms</span>
                            <div><i class="fas fa-shower"></i><span>${propiedadesArray[i].bathrooms}</span></div>
                          </div>
                          <div>
                            <span>Area</span>
                            <div>
                              <i class="fas fa-vector-square"></i
                              ><span>${propiedadesArray[i].area}<span>Sq Ft</span></span>
                            </div>
                          </div>
                        </div>
                        <div class="price">
                          <span>${propiedadesArray[i].type}</span>
                          <span>${propiedadesArray[i].price}</span>
                        </div>
                      </div>
                    </div>`
  }

  propiedadesCardsUltimosIngresos.innerHTML = code;
}


function cargarOpcionesBusquedaTest() {

  arrayTipoPropiedad.sort();
  addOpcionesPropiedad("tipo_propiedad", arrayTipoPropiedad);

  arrayTipoPropiedad.sort();
  addOpcionesTipoOperacion("tipo_operacion", arrayTipoOperacion);

  arrayPrecioMinimo.sort();
  addOpcionesPrecioMinimo("precio_minimo", arrayPrecioMinimo);

  arrayPrecioMaximo.sort();
  addOpcionesPrecioMaximo("precio_maximo", arrayPrecioMaximo);
}


// Muestra el Modal 
function mostrarModal() {

  if (sessionStorage.getItem("mostrarModal") != 'true') {
    sessionStorage.setItem("mostrarModal", true);
    document.getElementById("modal").className = "modal__show";
  }
}

// Cierra el modal
function cerrarModal() {
  document.getElementById("modal").className = "modal";
}





//Cargar opciones en los campos <select>
function cargarOpcionesBusqueda() {

  arrayTipoPropiedad.sort();
  addOpcionesPropiedad("tipo_propiedad", arrayTipoPropiedad);

  arrayTipoPropiedad.sort();
  addOpcionesTipoOperacion("tipo_operacion", arrayTipoOperacion);

  arrayPrecioMinimo.sort();
  addOpcionesPrecioMinimo("precio_minimo", arrayPrecioMinimo);

  arrayPrecioMaximo.sort();
  addOpcionesPrecioMaximo("precio_maximo", arrayPrecioMaximo);
}


function addOpcionesPropiedad(domElement, arrayTipoPropiedad) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayTipoPropiedad) {
    var option = document.createElement("option");
    option.text = arrayTipoPropiedad[value];
    select.add(option);
  }
}

function addOpcionesTipoOperacion(domElement, arrayTipoOperacion) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayTipoOperacion) {
    var option = document.createElement("option");
    option.text = arrayTipoOperacion[value];
    select.add(option);
  }
}

function addOpcionesPrecioMinimo(domElement, arrayPrecioMinimo) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayPrecioMinimo) {
    var option = document.createElement("option");
    option.text = arrayPrecioMinimo[value];
    select.add(option);
  }
}

function addOpcionesPrecioMaximo(domElement, arrayPrecioMaximo) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayPrecioMaximo) {
    var option = document.createElement("option");
    option.text = arrayPrecioMaximo[value];
    select.add(option);
  }
}







