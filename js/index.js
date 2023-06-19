
//Conexiones
const propiedadesCardsPrincipal = document.querySelector(".container");
const propiedadesCardsUltimosIngresos = document.querySelector(".container_ultimas_propiedades");
const formularioBusquedaPropiedades = document.getElementById("formulario_busqueda_propiedades");

//EventListener
document.addEventListener("DOMContentLoaded", (e) => {

  let propiedadesCargadas = localStorage.getItem('propiedades');
  if (propiedadesCargadas === null) {
    guardarPropiedadesStorage(propiedadesArray);
  }

  cargarPropiedadesPromocionadas();
  cargarOpcionesBusqueda();
  cargarUltimasPropiedades();
  //mostrarModal();
})

formularioBusquedaPropiedades.addEventListener("submit", (e) => {
  e.preventDefault();
  buscarPropiedades();
})

//Solo propiedades promocionadas(Promocion:"si")
function cargarPropiedadesPromocionadas() {
  propiedadesCardsPrincipal.innerHTML = '';
  let propiedadesStorage = recuperarPropiedadesStorage();

  propiedadesStorage.forEach((propiedad) => {
    propiedadesCardsPrincipal.innerHTML += retornoCardPropiedadesPromocionadas(propiedad);
  });
}

function retornoCardPropiedadesPromocionadas(propiedadesUnicas) {
  if (propiedadesUnicas.promocion === 'si') {
    return `   <div class="box">
                  <div id="propiedades_promocionadas" class="propiedades_promocionadas">HOT</div>
                <div class="top">
                  <img src="${propiedadesUnicas.img}" alt="" />
                  <span><i class="btn-fav fa-regular fa-heart" id=${propiedadesUnicas.code}></i></span>
                </div>
                <div class="bottom">
                  <h3>${propiedadesUnicas.title}</h3>
                  <p> ${propiedadesUnicas.descripcion}
                  </p>
                  <div class="advants">
                    <div>
                      <span>Habitaciones</span>
                      <div><i class="fas fa-th-large"></i><span>${propiedadesUnicas.bedrooms}</span></div>
                    </div>
                    <div>
                      <span>Baños</span>
                      <div><i class="fas fa-shower"></i><span>${propiedadesUnicas.bathrooms}</span></div>
                    </div>
                    <div>
                      <span>Area</span>
                      <div>
                        <i class="fas fa-vector-square"></i
                        ><span>${propiedadesUnicas.area}<span>M2</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    <span>${propiedadesUnicas.type}</span>
                    <span>${propiedadesUnicas.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span>
                  </div>
                </div>
              </div>`
  } else {
    return "";
  }
}


// Muestra solo las ultimas 6 propiedades ingresadas (Ordenadas x fecha desde la mas nuevas a las mas antiguas) 
function cargarUltimasPropiedades() {
  propiedadesCardsUltimosIngresos.innerHTML = '';
  let propiedadesStorage = recuperarPropiedadesStorage();
  let arrayPropiedadesOrdenados = ordenarPopiedadesFecha(propiedadesStorage);

  for (let i = 0; i <= 5; i++) {
    propiedadesCardsUltimosIngresos.innerHTML += retornoCardUltimasPropiedades(arrayPropiedadesOrdenados[i]);
  }
  addFavEvents();
}

function retornoCardUltimasPropiedades(propiedadesArray) {
  return `
              <div class="box">
              <div id="propiedades_nuevas" class="propiedades_nuevas">Nuevo Ingreso</div>
                      <div class="top">
                        <img src="${propiedadesArray.img}" alt="" />
                        <span><i class="btn-fav fa-regular fa-heart" id=${propiedadesArray.code}></i></span>
                      </div>
                      <div class="bottom">
                        <h3>${propiedadesArray.title}</h3>
                        <p> ${propiedadesArray.descripcion}
                        </p>
                        <div class="advants">
                          <div>
                            <span>Habitaciones</span>
                            <div><i class="fas fa-th-large"></i><span>${propiedadesArray.bedrooms}</span></div>
                          </div>
                          <div>
                            <span>Baños</span>
                            <div><i class="fas fa-shower"></i><span>${propiedadesArray.bathrooms}</span></div>
                          </div>
                          <div>
                            <span>Area</span>
                            <div>
                              <i class="fas fa-vector-square"></i
                              ><span>${propiedadesArray.area}<span>M2</span></span>
                            </div>
                          </div>
                        </div>
                        <div class="price">
                          <span>${propiedadesArray.type}</span>
                          <span>${propiedadesArray.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span>
                        </div>
                      </div>
                    </div>`
}


// Busca las propiedads seleccionadas en el formulario de busqueda de propiedades
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
  }, 3000)
}

function cargarPropiedadesBuscadas(operacion, tipo, precioMin, precioMax) {
  propiedadesCardsPrincipal.innerHTML = '';
  let contadorPropiedadesEncontradas = 0;
  let propiedadesStorage = recuperarPropiedadesStorage();

  propiedadesStorage.forEach(function (propiedadesBuscadas) {

    if (propiedadesBuscadas.operacion == operacion && propiedadesBuscadas.type == tipo && propiedadesBuscadas.price >= precioMin
      && propiedadesBuscadas.price <= precioMax) {

      if (propiedadesBuscadas.promocion === "si") {
        propiedadesCardsPrincipal.innerHTML += retornoCardPropiedadesPromocionadas(propiedadesBuscadas);
      } else {
        propiedadesCardsPrincipal.innerHTML += retornoCardPropiedadesBuscadas(propiedadesBuscadas);
      }
      contadorPropiedadesEncontradas += 1;
    }
  })

  if (contadorPropiedadesEncontradas === 0) {

    
    const noEncontradas = document.getElementById('no_encontradas');
    noEncontradas.classList.remove("hidden");
    setTimeout(function () {
      noEncontradas.classList.add("hidden");
    }, 3000);
  }
  cargarUltimasPropiedades();
};


function retornoCardPropiedadesBuscadas(propiedadesUnicas) {

  return `   <div class="box">
                <div class="top">
                  <img src="${propiedadesUnicas.img}" alt="" />
                  <span><i class="btn-fav fa-regular fa-heart" id=${propiedadesUnicas.code}></i></span>
                </div>
                <div class="bottom">
                  <h3>${propiedadesUnicas.title}</h3>
                  <p> ${propiedadesUnicas.descripcion}
                  </p>
                  <div class="advants">
                    <div>
                      <span>Habitaciones</span>
                      <div><i class="fas fa-th-large"></i><span>${propiedadesUnicas.bedrooms}</span></div>
                    </div>
                    <div>
                      <span>Baños</span>
                      <div><i class="fas fa-shower"></i><span>${propiedadesUnicas.bathrooms}</span></div>
                    </div>
                    <div>
                      <span>Area</span>
                      <div>
                        <i class="fas fa-vector-square"></i
                        ><span>${propiedadesUnicas.area}<span>M2</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    <span>${propiedadesUnicas.type}</span>
                    <span>${propiedadesUnicas.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span>
                  </div>
                </div>
              </div>`
}

function addFavEvents() {
  const favLinks = document.querySelectorAll('.btn-fav');
  favLinks.forEach((fav) => {
    fav.addEventListener("click", (e) => {
      e.preventDefault();
      fav.classList.toggle('fa-solid');
    });
  })
}



function mostrarModal() {
  if (sessionStorage.getItem("mostrarModal") != 'true') {
    sessionStorage.setItem("mostrarModal", true);
    document.getElementById("modal").className = "modal__show";
  }
}


function addEventModal() {
  modal = document.getElementById("modal_close");
  modal.addEventListener("click", () => {
    sessionStorage.setItem("mostrarModal", false);
    document.getElementById("modal").className = "modal";
  })
}


//Carga opciones <select>
function cargarOpcionesBusqueda() {
  cargarOpcionesPropiedad();
  cargarOpcionesOperacion();
  cargarMinimos();
  cargarMaximos();
}


function cargarOpcionesOperacion() {
  let selectElement = document.getElementById('tipo_operacion');

  for (let i = 0; i < arrayTipoOperacion.length; i++) {
    let optionData = arrayTipoOperacion[i];

    let optionElement = document.createElement('option');

    optionElement.value = arrayTipoOperacion[i];
    optionElement.text = arrayTipoOperacion[i];

    selectElement.appendChild(optionElement);
  }
}

function cargarOpcionesPropiedad() {
  let selectElement = document.getElementById('tipo_propiedad');

  for (let i = 0; i < arrayTipoPropiedad.length; i++) {
    let optionData = arrayTipoPropiedad[i];

    let optionElement = document.createElement('option');

    optionElement.value = arrayTipoPropiedad[i];
    optionElement.text = arrayTipoPropiedad[i];

    selectElement.appendChild(optionElement);
  }
}

function cargarMinimos() {
  let selectElement = document.getElementById('precio_minimo');
  for (let i = 0; i < arrayPrecioMinimo.length; i++) {
    let optionData = arrayPrecioMinimo[i];

    let optionElement = document.createElement('option');

    optionElement.value = optionData.valor;
    optionElement.text = optionData.muestra;

    selectElement.appendChild(optionElement);
  }
}


function cargarMaximos() {
  let selectElement = document.getElementById('precio_maximo');
  for (let i = 0; i < arrayPrecioMaximo.length; i++) {
    let optionData = arrayPrecioMaximo[i];

    let optionElement = document.createElement('option');

    optionElement.value = optionData.valor;
    optionElement.text = optionData.muestra;

    selectElement.appendChild(optionElement);
  }
}


//Formulario contacto Validacion

const usernameForm = document.querySelector('#form_username');
const emailForm = document.querySelector('#email');
const questionForm = document.querySelector('#form_question');
const envioFormularioContacto = document.getElementById("form_contacto");


envioFormularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  let isUsernameValid = checkUsername(), isEmailValid = checkEmail(), isQuestionValid = checkQuestion();
  let isFormValid = isUsernameValid && isEmailValid && isQuestionValid;

  if (isFormValid) {
    const mensajeOK = document.getElementById('mensaje_contacto');
    mensajeOK.style.display = 'block';

    setTimeout(function () {
      mensajeOK.style.display = 'none';
    }, 3000);
  }

  limpiarContactFormContacto();
}
);


const limpiarContactFormContacto = () => {
  
  document.querySelector('#form_username').value = "";
  document.querySelector('#email').value = "";
  document.querySelector('#form_question').value = "";
}

const requerido = value => value === '' ? false : true;
const longitud = (length, min, max) => length < min || length > max ? false : true;


const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 25;

  const username = usernameForm.value.trim();

  if (!requerido(username)) {
    showError(usernameForm, 'El usuario no puede estar vacio.');
  } else if (!longitud(username.length, min, max)) {
    showError(usernameForm, `El campo usuario debe tener entre  ${min} y  ${max} caracteres.`)
  } else {
    showSuccess(usernameForm);
    valid = true;
  }
  return valid;
};


const checkEmail = () => {
  let valid = false;
  const email = emailForm.value.trim();

  if (!requerido(email)) {
    showError(emailForm, 'El campo Email no puede estar en blanco.');
  } else if (!isEmailValid(email)) {
    showError(emailForm, 'El Email no es valido.')
  } else {
    showSuccess(emailForm);
    valid = true;
  }
  return valid;
};


const checkQuestion = () => {
  let valid = false;
  const question = questionForm.value.trim();

  if (!requerido(question)) {
    showError(questionForm, 'El mensaje no puede estar vacío');
  } else {
    showSuccess(questionForm);
    valid = true;
  }

  return valid;
};


const showError = (input, message) => {

  const formField = input.parentElement;

  formField.classList.remove('correcto');
  formField.classList.add('error');

  const error = formField.querySelector('small');
  error.textContent = message;
};


const showSuccess = (input) => {

  const formField = input.parentElement;

  formField.classList.remove('error');
  formField.classList.add('correcto');

  const error = formField.querySelector('small');
  error.textContent = '';
}


const isEmailValid = (email) => {
  const expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expresion.test(email);
};


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








