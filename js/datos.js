
//Arrays con datos

const arrayTipoPropiedad = ["Casa", "Departamento", "PH", "Terreno"];
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

//Array de vendedores
const vendedoresArray = [
    {
        nombre: "Diego",
        apellido: "Dalera",
        edad: 25,
        cargo: "Supervisor",
        pass: "1234"
    },
    {
        nombre: "Fabian",
        apellido: "Rago",
        edad: 29,
        cargo: "gerente",
        pass: "1234"
    },
    {
        nombre: "Maria",
        apellido: "Tobal",
        edad: 45,
        cargo: "vendedor",
        pass: "1234"
    },
    {
        nombre: "Nora",
        apellido: "Carpena",
        edad: 32,
        cargo: "vendedor",
        pass: "1234"
    },
    {
        nombre: "Daniela",
        apellido: "Vargas",
        edad: 26,
        cargo: "vendedor",
        pass: "1234"
    }
]

const propiedadesArray = [
    {
        img: "img/casas/casa2.jpg",
        title: "Casa reformada con cochera",
        descripcion: "Hermosa casa en el barrio de Villa Devoto con cocheras para 2 vehiculos",
        bedrooms: "4",
        bathrooms: "2",
        area: 200,
        price: 310000,
        type: "Casa",
        zone: "devoto",
        operacion: "Venta",
        fecha: new Date("2023-6-15"),
        promocion: "si",
        favorita:false,
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
        favorita:false,
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
        favorita:false,
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
        favorita:false,
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
        promocion: "no",
        favorita:false,
        code: 5
    },
    {
        img: "img/casas/casa1.jpg",
        title: "Amplia casa de Barrio en Villa del Parque ",
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
        favorita:false,
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
        favorita:false,
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
        favorita:false,
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
        promocion: "si",
        favorita:false,
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
        favorita:false,
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
        favorita:false,
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
        favorita:false,
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
        fecha: new Date("2024-1-15"),
        promocion: "no",
        favorita:false,
        code: 13
    },
    {
        img: "img/terrenos/terreno1.jpg",
        title: "Lote en solares del pilar",
        descripcion: "lote cercado y listo para construir",
        bedrooms: "0",
        bathrooms: "0",
        area: 800,
        price: 10000,
        type: "Terreno",
        zone: "pilar",
        operacion: "Venta",
        fecha: new Date("2010-1-15"),
        promocion: "no",
        favorita:false,
        code: 14
    },
    {
        img: "img/terrenos/terreno2.jpg",
        title: "Lote en lagunas del pilar",
        descripcion: "lote ercado con laguna propies",
        bedrooms: "0",
        bathrooms: "0",
        area: 1000,
        price: 20000,
        type: "Terreno",
        zone: "pilar",
        operacion: "Venta",
        fecha: new Date("2024-1-15"),
        promocion: "no",
        favorita:false,
        code: 15
    }
]



