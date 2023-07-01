
const showProp = document.getElementById('wrapper_prop');
const closeWindows = document.querySelectorAll('.close_window');

//EventListener
document.addEventListener('DOMContentLoaded', (e) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    loadProp(id);
    addCloseEvent();
})

function loadProp(id) {
    showProp.innerHTML = '';
    let propiedadesStorage = recoverPropStorage();
    console.log(propiedadesStorage)
    propiedadesStorage.forEach(function (propiedadBuscada) {

        if (propiedadBuscada.code === parseInt(id)) {
            showProp.innerHTML += cardProperty(propiedadBuscada);
        }
    })
};

function cardProperty(propiedad) {
    return `           
        <div class="show_box">
            <div class="top">
                <img src="../${propiedad.img}" alt="" />
            
            </div>
            <div class="bottom">
                <h3>${propiedad.title}</h3>
                <p>
                ${propiedad.descripcion}
                </p>
                <div class="advants">
                    <div class="bedrooms">
                        <span>Bedrooms</span>
                        <span>${propiedad.bedrooms}</span>
                    </div>

                    <div class="bathrooms">
                        <span>Bathrooms</span>
                        <span>${propiedad.bathrooms}</span>
                    </div>

                    <div class="Superficie">
                        <span>Superficie</span>
                        <span>${propiedad.area}<span>M2</span></span>
                    </div>
                </div>
                <div class="price">
                    <span>${propiedad.operacion}</span>
                    <span>${propiedad.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span>
                </div>
                <div class="zone">
                <span>${propiedad.zone}</span>
                </div>
            </div>
        </div>
    `
}

function addCloseEvent() {
    closeWindows.forEach((closeBtn) => {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeWindow();
      });
    })
  }

function closeWindow(){
    window.close();
}