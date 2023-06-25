
//Conexiones
const propiedadesCardsPrincipal = document.querySelector(".container");
const propiedadesCardsUltimosIngresos = document.querySelector(".container_ultimas_propiedades");
const formularioBusquedaPropiedades = document.getElementById("formulario_busqueda_propiedades");

//EventListener
document.addEventListener("DOMContentLoaded", (e) => {

  let propiedadesCargadas = localStorage.getItem('propiedades');
  if (propiedadesCargadas === null) {
    savePropStorage(propiedades);
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
  let propiedadesStorage = recoverPropStorage();

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

                  <div class="btn_prop">
                  <span><i class="btn-show fa-solid fa-magnifying-glass fa-2x" id=${propiedadesUnicas.code}></i><span class="ver_prop">Ver Propiedad</span></span>
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
  let propiedadesStorage = recoverPropStorage();
  let arrayPropiedadesOrdenados = ordenarPopiedadesFecha(propiedadesStorage);

  for (let i = 0; i <= 5; i++) {
    propiedadesCardsUltimosIngresos.innerHTML += retornoCardUltimasPropiedades(arrayPropiedadesOrdenados[i]);
  }
  addFavEvents();
  addShowEvents();
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

                        <div class="btn_prop">
                        <span><i class="btn-show fa-solid fa-magnifying-glass fa-2x" id=${propiedadesArray.code}></i><span class="ver_prop">Ver Propiedad</span></span>
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
  let propiedadesStorage = recoverPropStorage();

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
    }, 5000);
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

                  <div class="btn_prop">
                  <span><i class="btn-show fa-solid fa-magnifying-glass fa-2x" id=${propiedadesUnicas.code}></i><span class="ver_prop">Ver Propiedad</span></span>

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

function addShowEvents() {
  const showLinks = document.querySelectorAll('.btn-show');
  showLinks.forEach((show) => {
    show.addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.target.id;
      // Abre la página HTML y pasa el ID como parámetro en la URL
      window.open('pages/showProperty.html?id=' + encodeURIComponent(id));
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

  for (let i = 0; i < tipoOperacion.length; i++) {
    let optionData = tipoOperacion[i];

    let optionElement = document.createElement('option');

    optionElement.value = tipoOperacion[i];
    optionElement.text = tipoOperacion[i];

    selectElement.appendChild(optionElement);
  }
}

function cargarOpcionesPropiedad() {
  let selectElement = document.getElementById('tipo_propiedad');

  for (let i = 0; i < tipoPropiedad.length; i++) {
    let optionData = tipoPropiedad[i];

    let optionElement = document.createElement('option');

    optionElement.value = tipoPropiedad[i];
    optionElement.text = tipoPropiedad[i];

    selectElement.appendChild(optionElement);
  }
}

function cargarMinimos() {
  let selectElement = document.getElementById('precio_minimo');
  for (let i = 0; i < precioMinimo.length; i++) {
    let optionData = precioMinimo[i];

    let optionElement = document.createElement('option');

    optionElement.value = optionData.valor;
    optionElement.text = optionData.muestra;

    selectElement.appendChild(optionElement);
  }
}


function cargarMaximos() {
  let selectElement = document.getElementById('precio_maximo');
  for (let i = 0; i < precioMaximo.length; i++) {
    let optionData = precioMaximo[i];

    let optionElement = document.createElement('option');

    optionElement.value = optionData.valor;
    optionElement.text = optionData.muestra;

    selectElement.appendChild(optionElement);
  }
}

