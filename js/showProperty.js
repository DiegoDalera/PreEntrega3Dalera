
const showProp = document.getElementById('wrapper_prop')


function loadProp(id) {
    showProp.innerHTML = '';
    let propiedadesStorage = recuperarPropiedadesStorage();
    propiedadesStorage.forEach(function (propiedadesBuscadas) {
  
      if (propiedadesBuscadas.code === id ) {
        cardProperty(propiedadesBuscadas);
      }
    })
}
  ;
  

function cardProperty(propiedad) {

    return `           
        <div class="show_box">
            <div class="top">
                <img src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg" alt="" />
            
            </div>
            <div class="bottom">
                <h3>Villa In Alexandria</h3>
                <p>
                    Enjoy serenity of Deering Bay whole day from this spectacular North
                    and...
                </p>
                <div class="advants">
                    <div class="bedrooms">
                        <span>Bedrooms</span>
                        <span>3</span>
                    </div>
                    <div class="bathrooms">
                        <span>Bathrooms</span>
                        <span>3</span>
                    </div>
                    <div class="Superficie">
                        <span>Superficie</span>
                        <span>3500<span>M2</span></span>
                    </div>
                </div>
                <div class="price">
                    <span>Venta</span>
                    <span>$825,000</span>
                </div>
            </div>
        </div>
    `
}