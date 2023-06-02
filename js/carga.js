

const propiedadesCardsPrincipal = document.querySelector(".container");
const propiedadesCardsUltimosIngresos = document.querySelector(".container_ultimas_propiedades");
const formularioBusquedaPropiedades = document.getElementById("formulario_busqueda_propiedades");
const btnBuscarPropiedades = document.getElementById("btnBuscarPropiedades");


document.addEventListener("DOMContentLoaded", (e) => {
  cargarPropiedadesPromocionadas();
  cargarOpcionesBusqueda();
  cargarUltimasPropiedades();
  //mostrarModal();
})


btnBuscarPropiedades.addEventListener("click", (e) => {
  buscarPropiedades();
})


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
    return "";
  }
}

//Muestra  solo ultimas 6 propiedades ingresadas (ordenadas desde la mas nuevas a las mas antiguas) 
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
                            <span>Bedrooms</span>
                            <div><i class="fas fa-th-large"></i><span>${propiedadesArray.bedrooms}</span></div>
                          </div>
                          <div>
                            <span>Bathrooms</span>
                            <div><i class="fas fa-shower"></i><span>${propiedadesArray.bathrooms}</span></div>
                          </div>
                          <div>
                            <span>Area</span>
                            <div>
                              <i class="fas fa-vector-square"></i
                              ><span>${propiedadesArray.area}<span>Sq Ft</span></span>
                            </div>
                          </div>
                        </div>
                        <div class="price">
                          <span>${propiedadesArray.type}</span>
                          <span>${propiedadesArray.price}</span>
                        </div>
                      </div>
                    </div>`
  }


// busca  las propiedads
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
  
  propiedadesArray.forEach(function (propiedadesBuscadas) {

    if (propiedadesBuscadas.operacion == operacion && propiedadesBuscadas.type == tipo && propiedadesBuscadas.price >= precioMin
      && propiedadesBuscadas.price <= precioMax) {

        propiedadesCardsPrincipal.innerHTML += retornoCardHTMLPropiedadesBuscadas(propiedadesBuscadas);
       alert(propiedadesCardsPrincipal.innerHTML )

  }})

};


function retornoCardHTMLPropiedadesBuscadas (propiedadesBuscadas) {
 
     return    `
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
    };

 

// Cargamos las propiedades buscadas por el usuario
// function cargarPropiedadesBuscadas(operacion, tipo, precioMin, precioMax) {

//   let code = ``;
//   propiedadesArray.forEach(function (propiedadesBuscadas) {

//     if (propiedadesBuscadas.operacion == operacion && propiedadesBuscadas.type == tipo && propiedadesBuscadas.price >= precioMin
//       && propiedadesBuscadas.price <= precioMax) {

//       code = code +
//         `
//         <div class="box">
//                 <div class="top">
//                   <img src="${propiedadesBuscadas.img}" alt="" />
//                   <span
//                     ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
//                   ></span>
//                 </div>
//                 <div class="bottom">
//                   <h3>${propiedadesBuscadas.title}</h3>
//                   <p> ${propiedadesBuscadas.descripcion}
//                   </p>
//                   <div class="advants">
//                     <div>
//                       <span>Bedrooms</span>
//                       <div><i class="fas fa-th-large"></i><span>${propiedadesBuscadas.bedrooms}</span></div>
//                     </div>
//                     <div>
//                       <span>Bathrooms</span>
//                       <div><i class="fas fa-shower"></i><span>${propiedadesBuscadas.bathrooms}</span></div>
//                     </div>
//                     <div>
//                       <span>Area</span>
//                       <div>
//                         <i class="fas fa-vector-square"></i
//                         ><span>${propiedadesBuscadas.area}<span>Sq Ft</span></span>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="price">
//                     <span>${propiedadesBuscadas.type}</span>
//                     <span>${propiedadesBuscadas.price}</span>
//                   </div>
//                 </div>
//               </div>`

//     }
//   });
//   propiedadesCardsPrincipal.innerHTML = code;
//}


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




