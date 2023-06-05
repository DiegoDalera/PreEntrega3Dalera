
//arrays con datos

const arrayTipoPropiedad = ["Casa", "Departamento", "PH"];
const arrayTipoOperacion = ["Venta", "Alquiler"];

const arrayPrecioMinimo2 = [
    {
        muestra: "0.00",
        valor: 0
    },
    {
        muestra: "10.000",
        valor: 10000
    },
    {
        muestra: "100.000",
        valor: 100000
    },
    {
        muestra: "500.000",
        valor: 500000
    },
    {
        muestra: "1.000.000",
        valor: 1000000
    }
];


const arrayPrecioMaximo2 = [
    {
        muestra: "0.00",
        valor: 0
    },
    {
        muestra: "10.000",
        valor: 10000
    },
    {
        muestra: "100.000",
        valor: 100000
    },
    {
        muestra: "500.000",
        valor: 500000
    },
    {
        muestra: "1.000.000",
        valor: 1000000
    },
    {
        muestra: "5.000.000",
        valor: 5000000
    }
];

const propiedadesArray = [
    {
        img: "img/casas/casa2.jpg",
        title: "Casa reformada con cochera",
        descripcion: "Hermosa casa en barrio de Villa Devoto con cocheras para 2 vehiculos",
        bedrooms: "4",
        bathrooms: "2",
        area: 200,
        price: 310000,
        type: "Casa",
        zone: "devoto",
        operacion: "Venta",
        fecha: new Date("2023-6-15"),
        promocion: "si",
        code: 1
    },
    {
        img: "img/casas/casa3.jpg",
        title: "Vivienda familiar - 3 AMB Reciclada",
        descripcion: "Vivienda urbana moderna, recientemente reformada con los mejores materiales",
        bedrooms: "2",
        bathrooms: "1",
        area: 120,
        price: 122000,
        type: "Casa",
        zone: "devoto",
        operacion: "Venta",
        fecha: new Date("2023-6-15"),
        promocion: "si",
        code: 2
    },
    {
        img: "img/casas/casa4.jpg",
        title: "Casa reciclada a nueva",
        descripcion: "Vivienda familiar en barrio residencial, inmejorable ubicacion ",
        bedrooms: "3",
        bathrooms: "2",
        area: 150,
        price: 150000,
        type: "Casa",
        zone: "devoto",
        operacion: "Venta",
        fecha: new Date("2023-6-15"),
        promocion: "si",
        code: 3
    },
    {
        img: "img/casas/casa5.jpg",
        title: "Residencia a Estrenar",
        descripcion: "Residencia de primer nivel con cochera y pileta",
        bedrooms: "2",
        bathrooms: "4",
        area: 280,
        price: 340000,
        type: "Casa",
        zone: "paternal",
        operacion: "Venta",
        fecha: new Date("2022-1-15"),
        promocion: "si",
        code: 4
    },
    {
        img: "img/casas/casa6.jpg",
        title: "Hermosa propiedad",
        descripcion: "Hermosa propiedad en el centro del barrio de devoto",
        bedrooms: "2",
        bathrooms: "12",
        area: 250,
        price: 250000,
        type: "Casa",
        zone: "devoto",
        operacion: "Venta",
        fecha: new Date("2022-1-15"),
        promocion: "si",
        code: 5
    },
    {
        img: "img/casas/casa1.jpg",
        title: "Amplio casa de Barrio en Villa del Parque ",
        descripcion: "Casa con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista ",
        bedrooms: "2",
        bathrooms: "2",
        area: 250,
        price: 120000,
        type: "Casa",
        zone: "Villa del Parque",
        operacion: "Alquiler",
        fecha: new Date("2022-1-15"),
        promocion: "si",
        code: 6
    },
    {
        img: "img/departamentos/dto1.jpg",
        title: "Heroso departamento con cochera",
        descripcion: "Cercana a colegios, parques y  hospitales",
        bedrooms: "2",
        bathrooms: "12",
        area: 80,
        price: 110000,
        type: "Departamento",
        zone: "villa del Parque",
        operacion: "Alquiler",
        fecha: new Date("2022-1-15"),
        promocion: "no",
        code: 7
    },
    {
        img: "img/departamentos/dto2.jpg",
        title: "Departamento reciclado ",
        descripcion: "Departamento reciclado a nuevo listo para habitar",
        bedrooms: "2",
        bathrooms: "1",
        area: 120,
        price: 190000,
        type: "Departamento ",
        zone: "devoto",
        operacion: "Alquiler",
        fecha: new Date("2023-1-15"),
        promocion: "no",
        code: 8
    },
    {
        img: "img/departamentos/dto3.jpg",
        title: "Departamenro a estrenar",
        descripcion: "apartamento para estrenar, luminoso, apto profesional",
        bedrooms: "2",
        bathrooms: "1",
        area: 250,
        price: 150000,
        type: "Departamento",
        zone: "Paternal",
        operacion: "Alquiler",
        fecha: new Date("2023-1-15"),
        promocion: "no",
        code: 9
    },
    {
        img: "img/departamentos/dto4.jpg",
        title: "Departamento como nuevo",
        descripcion: "Departamento de 3 habitaciones que goza de increíbles vistas sobre la ciudad",
        bedrooms: "2",
        bathrooms: "12",
        area: 50,
        price: 350000,
        type: "Casa",
        zone: "villa del parque",
        operacion: "Alquiler",
        fecha: new Date("2013-1-15"),
        promocion: "no",
        code: 10
    },
    {
        img: "img/departamentos/dto5.jpg",
        title: "4 Ambientes con cochera",
        descripcion: "Se vende un 7º piso recién reformado con 3 habitaciones y garaje",
        bedrooms: "3",
        bathrooms: "2",
        area: 130,
        price: 300000,
        type: "Departamento",
        zone: "devoto",
        operacion: "Venta",
        fecha: new Date("2010-1-15"),
        promocion: "no",
        code: 11
    },
    {
        img: "img/ph/ph1.webp",
        title: "Ph 3 Ambientes",
        descripcion: "Ph 3 Amb · Terraza Propia",
        bedrooms: "2",
        bathrooms: "1",
        area: 90,
        price: 300000,
        type: "PH",
        zone: "devoto",
        operacion: "Venta",
        fecha: new Date("2010-1-15"),
        promocion: "no",
        code: 12
    },
    {
        img: "img/departamentos/dto5.jpg",
        title: "Ph 4 Ambientes",
        descripcion: "Ph 4 Ambientes - Jardín Al Frente Y Al Fondo",
        bedrooms: "3",
        bathrooms: "2",
        area: 120,
        price: 170000,
        type: "PH",
        zone: "villa del parque",
        operacion: "Venta",
        fecha: new Date("2010-1-15"),
        promocion: "no",
        code: 13
    }
]

//Creo compia del array para poder ordenarlo por fecha
let arrayPropiedadesOrdenadasFecha = propiedadesArray.map(function (objeto) {
    return { ...objeto };
});

arrayPropiedadesOrdenadasFecha.sort(function (a, b) {
    var fechaA = a.fecha;
    var fechaB = b.fecha;
    return fechaB - fechaA;
});


