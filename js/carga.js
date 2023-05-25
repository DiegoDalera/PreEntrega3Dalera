

// const propiedadesCardsPromociones = document.querySelector(".container");
const propiedadesCardsPrincipal = document.querySelector(".container");
const propiedadesCardsUltimosIngresos = document.querySelector(".container_ultimas_propiedades");
const formularioBusquedaPropiedades = document.getElementById("formulario_busqueda_propiedades");


// Carga de propiedades y Pptions en el index.html al cargar la pagina de inicio 

function cargarInicio() {
  cargarPropiedadesPromocionadas();
  cargarOpcionesBusqueda();
  cargarUltimasPropiedades();
  //mostrarModal();
}


function cargarPropiedadesPromocionadas() {
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

    }
    // else {

    // }
  });

  propiedadesCardsPrincipal.innerHTML = code;
}

function buscarPropiedades(e) {
  let tipoOperacion = formularioBusquedaPropiedades.tipo_operacion.value;
  let tipoPropiedad = formularioBusquedaPropiedades.tipo_propiedad.value;
  let precioMinimo = parseInt(formularioBusquedaPropiedades.precio_minimo.value);
  let precioMaximo = parseInt(formularioBusquedaPropiedades.precio_maximo.value);

  const spinner = document.querySelector('#spinner');
  spinner.classList.add('mostrar_spinner');
  spinner.classList.remove('ocultar_spinner');

  setTimeout(() => {
    spinner.classList.add('ocultar_spinner');
    spinner.classList.remove('mostrar_spinner');
    cargarPropiedadesBuscadas(tipoOperacion, tipoPropiedad, precioMinimo, precioMaximo);
  }, 2000)

  e.preventDefault();
}


// Cargamos las propiedades buscadas por el usuario
function cargarPropiedadesBuscadas(operacion, tipo, precioMin, precioMax) {

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
  propiedadesCardsPrincipal.innerHTML = code;
}


// Carga solo ultimas 6 propiedades ingresadas (por fecha) 
function cargarUltimasPropiedades() {

  let code = ``;

  for (let i = 0; i <= 5; i++) {

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
  cargarOpcionesPropiedad("tipo_propiedad", arrayTipoPropiedad);

  arrayTipoPropiedad.sort();
  cargarOpcionesOperacion("tipo_operacion", arrayTipoOperacion);

  cargarMinimos();
  cargarMaximos();
}


function cargarOpcionesPropiedad(domElement, arrayTipoPropiedad) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayTipoPropiedad) {
    var option = document.createElement("option");
    option.text = arrayTipoPropiedad[value];
    select.add(option);
  }
}

function cargarOpcionesOperacion(domElement, arrayTipoOperacion) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayTipoOperacion) {
    var option = document.createElement("option");
    option.text = arrayTipoOperacion[value];
    select.add(option);
  }
}

function cargarMinimos() {

  let selectElement = document.getElementById('precio_minimo');

  // Recorre el array de objetos
  for (let i = 0; i < arrayPrecioMinimo2.length; i++) {
    let optionData = arrayPrecioMaximo2[i];

    // Crea un nuevo elemento option
    let optionElement = document.createElement('option');

    // Asigna el valor y el texto a la opción
    optionElement.value = optionData.valor;
    optionElement.text = optionData.muestra;

    // Agrega la opción al select
    selectElement.appendChild(optionElement);
  }

}


function cargarMaximos() {

  // Obtén la referencia al elemento select
  let selectElement = document.getElementById('precio_maximo');

  // Recorre el array de objetos
  for (let i = 0; i < arrayPrecioMaximo2.length; i++) {
    let optionData = arrayPrecioMaximo2[i];

    // Crea un nuevo elemento option
    let optionElement = document.createElement('option');

    // Asigna el valor y el texto a la opción
    optionElement.value = optionData.valor;
    optionElement.text = optionData.muestra;

    // Agrega la opción al select
    selectElement.appendChild(optionElement);
  }
}




