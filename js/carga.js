
saludar();
// La f(x) saludar() el la que dispara todo el proceso, originalmente se llamaba al cargar la pagina .html pero se saco a pedido del tutor
function saludar() {
    let nombre = prompt("Ingresa tu Nombre de pila por favor ");
    let apellido = prompt("Ingresa tu Apellido  por favor ");

    if (nombre.trim() == "" || apellido.trim() == "") {
        alert("por favor ingresa por lo menos un caracter en cada respuesta");
        alert("Comenza nuevamente ");
        saludar();
    }

    alert("Bienvenido a nuestra inmobiliaria: " + nombre + " - " + apellido);

    let opcion = prompt("Deseas continuar con esta presentacion (s/n)");

    if (opcion.trim() == 's' || opcion.trim() == 'S') {
        logeo(apellido)
    } else {
        alert(" Muchas gracias por contactarte. Que tengas buen dia ")
    }
}

function logeo(apellidoUsuario) { //# sourceURL=factorialize.js (lo uso para debuggear)

    let apellidoLogeo = prompt("Ingresa tu apellido para ingresar por favor ( Debe ser el mismo apellido que ingresaste previamente ) ");

    if (apellidoLogeo.trim() == apellidoUsuario.trim()) {
        let contrasena = prompt("El apellido es correcto. Por favor ingresa la contraseña, la correcta es: 1234");

        if (contrasena.trim() == '1234') {
            alert("La contraseña es correcta - Bienvenido a nuestra inmobiliaria");
            barrios();
        } else {
            alert("La Contraseña ingresada es incorrecta volve a empezar el proceso por favor");
            saludar();
        }
    } else {
        alert("El apellido es incorrecto volve a empezar el proceso  por favor");
        saludar();
    }
}

function barrios() {
    let cantidad = 0;
    let barrios = [];
    alert(" Ingresa los nombres de los barrios en que estes interesado asi podemos notificarte nuestras ofertas");
    let seguir = 's';

    while (seguir.trim() == 's' || seguir.trim() == 'S') {
        let barrio = prompt('Ingresa un barrio de tu interes');
        if (barrio != "") {
            barrios.push(barrio);
            cantidad++;
        } else {
            alert(" los barrios tienen que tener al menos un caracter ");
        }

        seguir = prompt('Desea seguir(s/n)');
    }

    mostrarBarrios(barrios);
}

function mostrarBarrios(barrios) {

    let cantidadBarrios = barrios.length;

    if (cantidadBarrios > 0) {
        // si eligio algun/os barrios entra aca
        alert(" Has elegido: " + cantidadBarrios + " barrios")

        for (let i = 0; i < cantidadBarrios; i++) {
            // Entró aca porque la cantidad de barrios elegidos es > 0. Si eligio un solo barrio entra aca ( el mensaje es distinto )
            if (cantidadBarrios == 1) {
                alert("Haz elegido un solo barrio y ese es :" + barrios[i]);
            } else {
                // si eligio mas de un  barrio entra aca ( los mensajes son distintos para el ultimo y el resto)
                if (i != cantidadBarrios - 1) {
                    alert("El barrio de: " + barrios[i]);
                } else {
                    alert("Y por ultimo el barrio de: " + barrios[i]);
                    alert("muchas gracias por elegirnos");
                }
            }
        }
    } else {
        // si NO eligio barrios entra aca
        alert("No has elegido ningun barrio - Que tengas buen dia")
    }
}

