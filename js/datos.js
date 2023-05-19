const arrayTipoPropiedad = ["Casa", "Departamento", "PH"];
const arrayTipoOperacion = ["Venta", "Alquiler"];
const arrayPrecioMinimo= [0, 10000, 50000, 100000,500000];
const arrayPrecioMaximo= [0, 10000, 50000, 100000,500000,1000000,5000000];

const propiedadesArray = [
    {
        img: "img/casas/casa2.jpg",
        title: "Casa con cochera",
        descripcion: "Hermosa casa en barrio de Villa Devoto",
        bedrooms: "4",
        bathrooms: "2",
        area: 20,
        price: 310000,
        type: "Casa",
        zone: "devoto",
        operacion:"Venta",
        fecha: new Date("2023-6-15"),
        promocion:"si",
        code:1
    },
    {
        img: "img/casas/casa3.jpg",
        title: "Vivienda familiar - 3 AMB",
        descripcion: "Vivienda urbana moderna, recientemente reformada",
        bedrooms: "2",
        bathrooms: "1",
        area: 120,
        price: 122000,
        type: "Casa",
        zone: "devoto",
        operacion:"Venta",
        fecha:new Date("2023-6-15"),
        promocion:"si",
        code:2
    },
    {
        img: "img/casas/casa4.jpg",
        title: "Casa  Reciclada",
        descripcion: "Vivienda familiar en barrio residencial muy solicitado",
        bedrooms: "3",
        bathrooms: "2",
        area: 150,
        price: 150000,
        type: "Casa",
        zone: "devoto",
        operacion:"Venta",
        fecha:new Date("2023-6-15"),
        promocion:"si",
        code:3
    },
    {
        img: "img/casas/casa5.jpg",        
        title: "Residencia de Lujo",
        descripcion: "Residencia de Lujo con cochera y pileta",
        bedrooms: "2",
        bathrooms: "4",
        area: 280,
        price: 340000,
        type: "Casa",
        zone: "paternal",
        operacion:"Venta",
        fecha:new Date("2022-1-15"),
        promocion:"si",
        code:4
    },
    {
        img: "img/casas/casa6.jpg",        
        title: "Lujosa propiedad",
        descripcion: "En el centro del barrio de devoto",
        bedrooms: "2",
        bathrooms: "12",
        area: 250,
        price: 250.000,
        type: "Casa",
        zone: "devoto",
        operacion:"Venta",
        fecha:new Date("2022-1-15"),
        promocion:"si",
        code:5
    },
    {
        img: "img/casas/casa1.jpg",
        title: "Amplio casa de Barrio",
        descripcion: "Casa con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista ",
        bedrooms: "2",
        bathrooms: "2",
        area: 250,
        price: 120000,
        type: "Casa",
        zone: "Villa del Parque",
        operacion:"Alquiler",
        fecha:new Date("2022-1-15"),
        promocion:"si",
        code:6
    },
    {
        img: "img/departamentos/dto1.jpg",
        title: "heroso departamento con cochera",
        descripcion: "Cercana a colegios, parques, hospitales",
        bedrooms: "2",
        bathrooms: "12",
        area: 80,
        price: 110000,
        type: "Departamento",
        zone: "villa del Parque",
        operacion:"Alquiler",
        fecha:new Date("2022-1-15"),
        promocion:"no",
        code:7
    },
    {
        img: "img/departamentos/dto2.jpg",
        title: "herosa casa con cochera",
        descripcion: "casa en barrio de devoto...",
        bedrooms: "2",
        bathrooms: "1",
        area: 120,
        price: 190000,
        type: "Departamento ",
        zone: "devoto",
        operacion:"Alquiler",
        fecha:new Date("2023-1-15"),
        promocion:"no",
        code:8
    },
    {
        img: "img/departamentos/dto3.jpg",
        title: "Departamenro a estrenar",
        descripcion: "apartamento para estrenar , luminoso",
        bedrooms: "2",
        bathrooms: "1",
        area: 250,
        price: 150000,
        type: "Departamento",
        zone: "Paternal",
        operacion:"Alquiler",
        fecha:new Date("2023-1-15"),
        promocion:"no",
        code:9
    },
    {
        img: "img/departamentos/dto4.jpg",
        title: "Departamento como nuevo",
        descripcion: "departamento  de 3 habitaciones que goza de increíbles vistas sobre la ciudad",
        bedrooms: "2",
        bathrooms: "12",
        area: 50,
        price: 350000,
        type: "Casa",
        zone: "villa del parque",
        operacion:"Alquiler",
        fecha:new Date("2013-1-15"),
        promocion:"no",
        code:10
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
        operacion:"Venta",
        fecha:new Date("2010-1-15"),
        promocion:"no",
        code:11
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
        operacion:"Venta",
        fecha:new Date("2010-1-15"),
        promocion:"no",
        code:12
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
        operacion:"Venta",
        fecha:new Date("2010-1-15"),
        promocion:"no",
        code:13
    }
]

//creo compia del array para poder ordenarlo
let arrayPropiedadesOrdenadasFecha = propiedadesArray.map(function(objeto) {
    return { ...objeto };
  });
  
  arrayPropiedadesOrdenadasFecha.sort(function(a, b) {
    var fechaA = a.fecha;
    var fechaB = b.fecha;
    return fechaB - fechaA;
  });


  //creo compia del array para poder trabajar en el CRUD
//    let propiedadesArrayCrud = propiedadesArray.map(function(objeto) {
//      return { ...objeto };
//   });

// var propiedadesArrayCrudJSON = JSON.stringify(propiedadesArrayCrud);
// localStorage.setItem("propiedades", propiedadesArrayCrudJSON);