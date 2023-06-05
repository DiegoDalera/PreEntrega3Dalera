

const propiedadesCardsPrincipal = document.querySelector(".container");
const propiedadesCardsUltimosIngresos = document.querySelector(".container_ultimas_propiedades");
const formularioBusquedaPropiedades = document.getElementById("formulario_busqueda_propiedades");


//Event Listener

document.addEventListener("DOMContentLoaded", (e) => {
  cargarPropiedadesPromocionadas();
  cargarOpcionesBusqueda();
  cargarUltimasPropiedades();
  //mostrarModal();
})


formularioBusquedaPropiedades.addEventListener("submit", (e) => {
  e.preventDefault();
  buscarPropiedades();
})



//Carga Propiedades que esten promocion (Promocion:"si")
function cargarPropiedadesPromocionadas() {
  propiedadesCardsPrincipal.innerHTML = '';
  propiedadesArray.forEach((propiedad) => {
    propiedadesCardsPrincipal.innerHTML += retornoCardHTMLPropiedadesPromocionadas(propiedad);
  });
}

function retornoCardHTMLPropiedadesPromocionadas(propiedadesUnicas) {
  if (propiedadesUnicas.promocion == 'si') {
    return `   <div class="box">
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
                    <span>$ ${propiedadesUnicas.price}</span>
                  </div>
                </div>
              </div>`
  } else {
    return "";
  }
}

// Muestra solo ultimas 6 propiedades ingresadas (ordenadas x fecha desde la mas nuevas a las mas antiguas) 
function cargarUltimasPropiedades() {
  propiedadesCardsUltimosIngresos.innerHTML = '';;
  for (let i = 0; i <= 5; i++) {
    propiedadesCardsUltimosIngresos.innerHTML += retornoCardHTMLUltimasPropiedades(arrayPropiedadesOrdenadasFecha[i]);
  }
}

function retornoCardHTMLUltimasPropiedades(propiedadesArray) {
  return `
              <div class="box">
                      <div class="top">
                        <img src="${propiedadesArray.img}" alt="" />
                        <span
                          ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
                        ></span>
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
                          <span>$ ${propiedadesArray.price}</span>
                        </div>
                      </div>
                    </div>`
}


// Busca  as propiedads seleccionadas en el formulario de busqueda de propiedades
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

  propiedadesArray.forEach(function (propiedadesBuscadas) {

    if (propiedadesBuscadas.operacion == operacion && propiedadesBuscadas.type == tipo && propiedadesBuscadas.price >= precioMin
      && propiedadesBuscadas.price <= precioMax) {

      propiedadesCardsPrincipal.innerHTML += retornoCardHTMLPropiedadesBuscadas(propiedadesBuscadas);
    }
  })
};

function retornoCardHTMLPropiedadesBuscadas(propiedadesBuscadas) {

  return `
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
                      <span>Habitaciones</span>
                      <div><i class="fas fa-th-large"></i><span>${propiedadesBuscadas.bedrooms}</span></div>
                    </div>
                    <div>
                      <span>Baños</span>
                      <div><i class="fas fa-shower"></i><span>${propiedadesBuscadas.bathrooms}</span></div>
                    </div>
                    <div>
                      <span>Superficie</span>
                      <div>
                        <i class="fas fa-vector-square"></i
                        ><span>${propiedadesBuscadas.area}<span>M2</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    <span>${propiedadesBuscadas.type}</span>
                    <span>$ ${propiedadesBuscadas.price}</span>
                  </div>
                </div>
              </div>`
};


// Muestra el Modal 
function mostrarModal() {
  if (sessionStorage.getItem("mostrarModal") != 'true') {
    sessionStorage.setItem("mostrarModal", true);
    document.getElementById("modal").className = "modal__show";
  }
}

// Cierra el Modal
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
    let option = document.createElement("option");
    option.text = arrayTipoPropiedad[value];
    select.add(option);
  }
}

function cargarOpcionesOperacion(domElement, arrayTipoOperacion) {
  let select = document.getElementsByName(domElement)[0];

  for (value in arrayTipoOperacion) {
    let option = document.createElement("option");
    option.text = arrayTipoOperacion[value];
    select.add(option);
  }
}

function cargarMinimos() {

  let selectElement = document.getElementById('precio_minimo');


  for (let i = 0; i < arrayPrecioMinimo2.length; i++) {
    let optionData = arrayPrecioMaximo2[i];

    let optionElement = document.createElement('option');

    optionElement.value = optionData.valor;
    optionElement.text = optionData.muestra;

    selectElement.appendChild(optionElement);
  }

}


function cargarMaximos() {

  let selectElement = document.getElementById('precio_maximo');

  for (let i = 0; i < arrayPrecioMaximo2.length; i++) {
    let optionData = arrayPrecioMaximo2[i];

    let optionElement = document.createElement('option');

    optionElement.value = optionData.valor;
    optionElement.text = optionData.muestra;

    selectElement.appendChild(optionElement);
  }
}



//Validacion formulario de contacto

const usernameForm = document.querySelector('#form_name');
const emailForm = document.querySelector('#form_mail');
const questionForm = document.querySelector('#form_question');
const envioFormularioContacto = document.getElementById("form_contacto");

// Funcion que verifica si lo que le enviamos no esta en blanco
const isRequired = value => value === '' ? false : true;

// Funcion que verifica sisi lo que le enviamos tiene la longitud correcta
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const checkUsername = () => {

  let valid = false;
  const min = 3;
  const max = 25;

  const username = usernameForm.value.trim();

  if (!isRequired(username)) {
    alert('El usuario no puede estar vacio.');
  } else if (!isBetween(username.length, min, max)) {
    alert(`El campo usuario debe tener entre  ${min} y  ${max} caracteres.`)
  } else {
    valid = true;
  }
  return valid;
};

// Funcion que verifica  si el campo question  cumple con lo requerido
const checkQuestion = () => {
  let valid = false;

  const question = questionForm.value.trim();

  if (!isRequired(question)) {
    alert('El campo question no puede estar en blanco.');
  } else {
    valid = true;
  }
  return valid;
};

// Funcion que verifica  si el campo Email cumple con lo requerido
const checkEmail = () => {
  let valid = false;
  const email = emailForm.value.trim();

  if (!isRequired(email)) {
    alert('El campo Email no puede estar en blanco.');
  } else if (!isEmailValid(email)) {
    alert('El Email no es valido.')
  } else {
    valid = true;
  }
  return valid;
};

// Funcion que verifica si el Email tiene un formato correcto
const isEmailValid = (email) => {
  const expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expresion.test(email);
};

const limpiarContactForm = () => {
  alert("entra ???");
  document.querySelector('#form_name').value = "";
  document.querySelector('#form_mail').value = "";
  document.querySelector('#form_question').value = "";
}

envioFormularioContacto.addEventListener("submit", (e) => {

  e.preventDefault();

  let isUsernameValid = checkUsername(), isEmailValid = checkEmail(), isQuestionValid = checkQuestion();
  let isFormValid = isUsernameValid && isEmailValid && isQuestionValid;

  if (isFormValid) {
    alert("mensaje enviado");
  }

  limpiarContactForm();

});








