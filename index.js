let libros = [
    {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      genero: "Fábula",
      idioma: "Francés",
      precio: 15.99,
      formato: "Tapa blanda",
      isbn: "978-84-206-7260-2",
      descripcion: "La historia de un pequeño príncipe que viaja por diferentes planetas y aprende lecciones sobre la vida y el amor.",
      estado: "Nuevo",
      ubicacion: "Librería X, Ciudad Y",
      fecha_publicacion: "06/04/1943",
      editorial: "Gallimard",
      paginas: 96,
      dimensiones: "5.1 x 1 x 7.8 pulgadas",
      peso: "11.2 onzas"
    },
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      idioma: "Español",
      precio: 19.99,
      formato: "Tapa dura",
      isbn: "978-84-376-0494-7",
      descripcion: "La historia de la familia Buendía a lo largo de varias generaciones en Macondo.",
      estado: "Usado",
      ubicacion: "Librería Z, Ciudad W",
      fecha_publicacion: "30/05/1967",
      editorial: "Gallimard",
      paginas: 432,
      dimensiones: "5.1 x 1 x 7.8 pulgadas",
      peso: "11.2 onzas"
    },
    {
      titulo: "La Biblia",
      autor: "Dios (inspiración divina)",
      genero: "Religioso",
      idioma: "Varios idiomas",
      precio: 22, 
      formato: "Libro físico o digital",
      isbn: "No tiene ISBN",
      descripcion: "La Biblia es una colección de textos sagrados para el judaísmo y el cristianismo, que incluye escrituras consideradas divinas.",
      estado: "Nuevo",
      ubicacion: "Iglesias, librerías religiosas",
      fecha_publicacion: "Siglos antes de Cristo (para el Antiguo Testamento) y siglo I (para el Nuevo Testamento)",
      editorial: "Gallimard",
      paginas:234,
      dimensiones: "5.1 x 1 x 7.8 pulgadas",
      peso: "11.2 onzas"
      },
      {
        titulo: "La Odisea",
        autor: "Homero",
        genero: "Epopeya",
        idioma: "Griego antiguo",
        precio: 25, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La Odisea narra las aventuras del héroe griego Odiseo en su viaje de regreso a Ítaca tras la Guerra de Troya.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "Siglo VIII a.C.",
        editorial: "Gallimard",
        paginas:760,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela",
        idioma: "Español",
        precio: 15, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La obra narra las aventuras de un hidalgo que enloquece leyendo libros de caballerías y decide convertirse en caballero andante.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1605 y 1615",
        editorial: "Gallimard",
        paginas:468,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Historia de dos ciudades",
        autor: "Charles Dickens",
        genero: "Novela histórica",
        idioma: "Inglés",
        precio: 40, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La novela se sitúa en la época de la Revolución Francesa y narra la historia de amor, venganza y redención entre personajes de Londres y París.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1859",
        editorial: "Sudamericana",
        paginas:100,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "La Comunidad del Anillo",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía épica",
        idioma: "Inglés",
        precio: 30, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La primera parte de la trilogía narra la formación de la Comunidad del Anillo y su viaje para destruir el Anillo Único.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1954",
        editorial: "Sudamericana",
        paginas:723,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Las Dos Torres",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía épica",
        idioma: "Inglés",
        precio: 10, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La segunda parte de la trilogía sigue las aventuras de los miembros de la Comunidad del Anillo tras la separación en la primera parte.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1954",
        editorial: "Sudamericana",
        paginas:418,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "El Retorno del Rey",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía épica",
        idioma: "Inglés",
        precio: 21, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La tercera parte de la trilogía narra la culminación de la guerra del Anillo y el destino de los personajes principales.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1955",
        editorial: "Sudamericana",
        paginas:325,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Culpa Mía",
        autor: "Mercedes Ron",
        genero: "Romance juvenil",
        idioma: "Español",
        precio: 38, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La primera parte de la trilogía narra la historia de Abril, una joven que se enamora de Aarón, un chico problemático con un pasado oscuro.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2016",
        editorial: "Sudamericana",
        paginas:123,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Culpa Tuya",
        autor: "Mercedes Ron",
        genero: "Romance juvenil",
        idioma: "Español",
        precio: 44, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La segunda parte de la trilogía continúa la historia de Abril y Aarón, enfrentando nuevos desafíos y revelaciones sobre su relación.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2016",
        editorial: "Montena",
        paginas:453,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Culpa Nuestra",
        autor: "Mercedes Ron",
        genero: "Romance juvenil",
        idioma: "Español",
        precio: 33, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La tercera parte de la trilogía concluye la historia de Abril y Aarón, mostrando cómo enfrentan su destino y sus sentimientos.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2017",
        editorial: "Montena",
        paginas:987,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
                                                                                 
      {
        titulo: "Sinsajo",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción, aventura",
        idioma: "Español",
        precio: 51, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "En la secuela, Katniss y Peeta se enfrentan a la ira del Capitolio después de ganar los Juegos del Hambre.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2009",
        editorial: "Montena",
        paginas:631,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Sinsajo",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción, aventura",
        idioma: "Español",
        precio: 60, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "En la conclusión de la trilogía, Katniss se convierte en el símbolo de la rebelión contra el Capitolio.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2010",
        editorial: "Montena",
        paginas:567,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Balada de pájaros cantores y serpientes",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción, aventura",
        idioma: "Español",
        precio: 55, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "Precuela que narra la historia del presidente Snow y los primeros Juegos del Hambre.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2020",
        editorial: "Montena",
        paginas:320,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },
      {
        titulo: "Heartstopper Vol. 1",
        autor: "Alice Oseman",
        genero: "Novela gráfica, Romance LGBT+",
        idioma: "Inglés",
        precio: 10.99,
        formato: "Tapa blanda",
        isbn: "9781444951387",
        descripcion: "La historia de Nick y Charlie, dos chicos que desarrollan una amistad que se convierte en algo más.",
        estado: "Nuevo",
        ubicacion: "Librería X",
        fecha_publicacion: "2018",
        editorial: "Montena",
        paginas: 288,
        dimensiones: "5.1 x 0.8 x 7.8 pulgadas",
        peso: "9.6 onzas"
      },
      {
        titulo: "Heartstopper Vol. 2",
        autor: "Alice Oseman",
        genero: "Novela gráfica, Romance LGBT+",
        idioma: "Inglés",
        precio: 12.99,
        formato: "Tapa blanda",
        isbn: "9781444951400",
        descripcion: "La continuación de la historia de Nick y Charlie mientras exploran su relación y su identidad.",
        estado: "Nuevo",
        ubicacion: "Librería Y",
        fecha_publicacion: "2019",
        editorial: "Hodder Children's Books",
        paginas: 320,
        dimensiones: "5.1 x 0.9 x 7.8 pulgadas",
        peso: "10.4 onzas"
      },
      {
        titulo: "Heartstopper Vol. 3",
        autor: "Alice Oseman",
        genero: "Novela gráfica, Romance LGBT+",
        idioma: "Inglés",
        precio: 14.99,
        formato: "Tapa blanda",
        isbn: "9781444951424",
        descripcion: "La saga de Nick y Charlie continúa, enfrentando nuevos desafíos y emociones en su relación.",
        estado: "Nuevo",
        ubicacion: "Librería Z",
        fecha_publicacion: "2020",
        editorial: "Hodder Children's Books",
        paginas: 352,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },

  ];
  


  let heartstopper4 = {
    titulo: "Heartstopper Vol. 4",
    autor: "Alice Oseman",
    genero: "Novela gráfica, Romance LGBT+",
    idioma: "Inglés",
    precio: 16.99,
    formato: "Tapa blanda",
    isbn: "9781444951448",
    descripcion: "La historia de Nick y Charlie continúa en esta cuarta entrega de la serie, explorando nuevos desafíos y emociones en su relación.",
    estado: "Nuevo",
    ubicacion: "Librería W",
    fecha_publicacion: "2021",
    editorial: "Hodder Children's Books",
    paginas: 384,
    dimensiones: "5.1 x 1.1 x 7.8 pulgadas",
    peso: "12.8 onzas"
  };


  libros.push(heartstopper4);
 // console.log(libros)
  



  libros.pop(5);
  //console.log(libros)




  libros.forEach((libro, index) => {
 //   console.log(`Libro ${index + 1}: ${libro.titulo}`);
});


const librosListados1 = libros.map(libro => {
  return {
   Titulo: libro.titulo,
   Genero: libro.genero,
   Editorial: libro.editorial, 
   isbn: libro.isbn }; });

   const librosListados2 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Autor: libro.autor,
     Editorial: libro.editorial, 
     Dimensiones: libro.dimensiones }; });

    const librosListados3 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Estado: libro.estado,
     Editorial: libro.editorial, 
     Peso: libro.peso }; });

    const librosListados4 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Ubicacion: libro.ubicacion,
     Editorial: libro.editorial, 
     FechaPublicacion: libro.precio }; });

    const librosListados5 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Peso: libro.peso,
   Editorial: libro.editorial, 
     Dimensiones: libro.dimensiones }; });

    const librosListados6 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Estado: libro.estado,
     Editorial: libro.editorial, 
     Ubicacion: libro.ubicacion }; });

const librosListados7 = libros.map(libro => {
return {
Titulo: libro.titulo,
Descripcion: libro.descripcion,
Editorial: libro.editorial, 
Formato: libro.formato }; });

const librosListados8 = libros.map(libro => {
return {
Titulo: libro.titulo,
isbn: libro.isbn,
Editorial: libro.editorial, 
Precio: libro.precio }; });

const librosListados9 = libros.map(libro => {
return {
Titulo: libro.titulo,
Genero: libro.genero,
Editorial: libro.editorial, 
Descripcion: libro.descripcion }; });

  const librosListados10= libros.map(libro => {
  return {
    Titulo: libro.titulo,
    Idioma: libro.idioma,
    Editorial: libro.editorial, 
   Paginas: libro.paginas }; });

   const librosConDescuento = libros.map(libro => ({
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    precio: libro.precio,
    descuento: libro.precio * 0.2
  }));
   //console.log(librosConDescuento);
   
  const librosMasCaros = libros.filter(libro => libro.precio > 50);

   //console.table(librosMasCaros);


const LibroMasPaginas=libros.map(libro=>{
      return {
        titulo: libro.titulo,
         autor: libro.autor,
         editorial:libro.editorial,
        paginas:libro.paginas
    }})
    .filter(libro=>{
      return libro.paginas > 90
    })
    .sort((a,b )=> b.paginas-a.paginas);
  //console.table(LibroMasPaginas)

  const LibroMayorAMenor=libros.sort((a, b) => b.paginas - a.paginas);

 // console.table(LibroMayorAMenor);

 const librosCaros = libros.filter(libro => libro.precio > 11)
  .map(libro => ({
    titulo: libro.titulo, 
    autor: libro.autor, 
    precio: libro.precio}));

//console.log(librosCaros);

const libromenor100p = libros.filter(libro => libro.paginas < 100)
 .map(libro => ({
  titulo: libro.titulo,
   autor: libro.autor,
    editorial: libro.editorial, 
    paginas: libro.paginas}));

//console.log(libromenor100p);

const libropreciomayor20 = libros.filter(libro => libro.precio > 20)
 .sort((a, b) => b.precio - a.precio)
  .map(libro => ({
    titulo: libro.titulo,
     autor: libro.autor, 
     precio: libro.precio}));

//console.log(libropreciomayor20);

const librosOrdenadosPorPaginas = libros.slice()
.sort((a, b) => b.paginas - a.paginas)
 .map(libro => ({
  titulo: libro.titulo, 
  autor: libro.autor,
   editorial: libro.editorial, 
   paginas: libro.paginas}));

//console.log(librosOrdenadosPorPaginas);

const LibroBuscadoPorTitulo = libros.find(
  libro => libro.titulo ==="Sinsajo");
 // console.table(LibroBuscadoPorTitulo);

 const LibroBuscadoPorAutor = libros.find(
  libro => libro.autor ==="Alice Oseman");
 // console.table(LibroBuscadoPorAutor);

  const LibroBuscadoPorFechaPublicacion = libros.find(
    libro => libro.fecha_publicacion ==="2021");
   // console.table(LibroBuscadoPorFechaPublicacion); 

 const LibroBuscadoPorGenero = libros.find(
  libro => libro.genero ==="Novela gráfica, Romance LGBT+");
 // console.table(LibroBuscadoPorGenero); 

  const LibroBuscadoPorIdioma = libros.find(
  libro => libro.idioma ==="Español");
 // console.table(LibroBuscadoPorIdioma); 
  
  const LibroBuscadoPorEditorial = libros.find(
  libro => libro.editorial ==="Planeta");
 // console.table(LibroBuscadoPorEditorial);
  
  const LibroBuscadoPorPaginas = libros.find(
  libro => libro.paginas ===100);
  //console.table(LibroBuscadoPorPaginas); 
  
  const LibroBuscadoPorDimensiones = libros.find(
  libro => libro.dimensiones ==="10x10");
  //console.table(LibroBuscadoPorDimensiones);
  
  const LibroBuscadoPorPeso = libros.find(
  libro => libro.peso ===10);
  //console.table(LibroBuscadoPorPeso); 
  
  const LibroBuscadoPorEstado = libros.find(
  libro => libro.estado ==="Nuevo");
  //console.table(LibroBuscadoPorEstado); 
  
  const LibroBuscadoPorUbicacion = libros.find(
  libro => libro.ubicacion ==="Casa");
  //console.table(LibroBuscadoPorUbicacion); 
  
  const LibroBuscadoPorFormato = libros.find(
  libro => libro.formato ==="Digital");
  //console.table(LibroBuscadoPorFormato);
  const LibroBuscadoPorPrecio = libros.find(
  libro => libro.precio ===55);
  //console.table(LibroBuscadoPorPrecio); 
  
  const LibroBuscadoPorDescripcion = libros.find(
  libro => libro.descripcion ==="Novela gráfica, Romance LGBT+");
  //console.table(LibroBuscadoPorDescripcion); 
  
  const LibroBuscadoPorIsbn = libros.find(
  libro => libro.isbn ==="123456789");
  //console.table(LibroBuscadoPorIsbn); 
  


function agregarLibro() {
  nuevoLibro={
    titulo: prompt(" Ingrese el titulo del libro: "),
    autor: prompt(" Ingrese el autor del libro:"),
    genero: prompt("Ingrese el genero del libro:"),
    idioma: prompt("Ingrese el idioma del libro:"),
    precio: prompt("Ingrese el precio del libro:"),
    formato: prompt("Ingrese el formato del libro:"),
    isbn: prompt("Ingrese el isbn del libro:"),
    descripcion: prompt("Ingrese la descripcion del libro:"),
    estado: prompt("Ingrese el estado del libro: "),
    ubicacion: prompt("Ingrese la ubicacion del libro: "),
    fecha_publicacion: prompt("Ingrese la fecha de publicaion del libro: "),
    editorial: prompt("Ingrese el editorial del libro: "),
    paginas: prompt("Ingrese las paginas del libro: "),
    dimensiones: prompt("Ingrese las dimensiones del libro: "), 
    peso:prompt("Ingrese el peso del libro: ") 
};
libros.push(nuevoLibro)
console.log(libros)
  };



function mostrarLibro() {
  libros.forEach((libros,index) => console.log(libros.titulo+"\n" +(libros.autor)+"\n" +(libros.genero)+"\n" +(libros.idioma)+"\n" +(libros.precio)+"\n" +(libros.formato)+"\n" +(libros.isbn)+"\n" +(libros.descripcion)+"\n" +(libros.estado+"\n" +(libros.ubicacion)+"\n" +(libros.fechaDePublicacion)+"\n" +(libros.editorial)+"\n" +(libros.paginas)+"\n" +(libros.dimensiones)+"\n" )))
}

function quitarLibro() {

libros.pop(libros)
console.log(libros)
}
function listarlibro() {
  const librosListados = libros.map(libro => {
     return {
      Titulo: libro.titulo,
      Autor: libro.autor,
      Editorial: libro.editorial, 
      Precio: libro.precio }; });
      console.log(librosListados);
}
function ResumenLibros() {
  const LibroMasPaginas=libros.map(libro=>{
    return {
      titulo: libro.titulo,
       autor: libro.autor,
       editorial:libro.editorial,
      paginas:libro.paginas
  }})
  .filter(libro=>{
    return libro.paginas > 90
  })
  .sort((a,b )=> b.paginas-a.paginas);
console.table(LibroMasPaginas)
}

function LosResumenesLibros() {
  const LibroMayorAMenor=libros.sort((a, b) => b.paginas - a.paginas);

  console.table(LibroMayorAMenor);
}

function LibrosMasCaross () {
  const librosMasCaros = libros.filter(libro => libro.precio > 50);
  console.log(librosMasCaros);
}

function librospaginasmenor100() {
  const libromenor100p = libros.filter(libro => libro.paginas < 100)
  .map(libro => ({
   titulo: libro.titulo,
    autor: libro.autor,
     editorial: libro.editorial, 
     paginas: libro.paginas}));
 
 console.log(libromenor100p);
}

function librospreciomayor20() {
  const libropreciomayor20 = libros.filter(libro => libro.precio > 20)
 .sort((a, b) => b.precio - a.precio)
  .map(libro => ({
    titulo: libro.titulo,
     autor: libro.autor, 
     precio: libro.precio}));

console.log(libropreciomayor20);
}

function LibrosOrdenadosPorPaginas() {
  const librosOrdenadosPorPaginas = libros.sort((a, b) => b.paginas - a.paginas)
 .map(libro => ({
  titulo: libro.titulo, 
  autor: libro.autor,
   editorial: libro.editorial, 
   paginas: libro.paginas}));

console.log(librosOrdenadosPorPaginas);
}
function librosConDescuentos (){
  const librosConDescuento = libros.map(libro => ({
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    precio: libro.precio,
    descuento: libro.precio * 0.2
  }));
   console.log(librosConDescuento);
}

function  LibrosBuscadoPorTitulo (){
  const tituloBuscado = prompt("Introduce el título del libro que deseas buscar:");
   const libroBuscado = libros.find(libro => libro.titulo == tituloBuscado);

if (libroBuscado) { console.log("Libro encontrado:");
 console.log(libroBuscado); 
}
  else {
     console.log("Libro no encontrado");
     }
}

function  LibrosBuscadoPorAutor (){
  const autorBuscado = prompt("Introduce el título del libro que deseas buscar:");
   const libroBuscado = libros.find(libro => libro.autor == autorBuscado);

if (libroBuscado) { console.log("Libro encontrado:");
 console.log(libroBuscado); 
}
  else {
     console.log("Libro no encontrado");
     }
}

function  LibrosBuscadoPorFechaDePublicacion (){
  const fechaDePublicacionBuscado = prompt("Introduce el título del libro que deseas buscar:");
   const libroBuscado = libros.find(libro => libro.fecha_publicacion == fechaDePublicacionBuscado);

   if (libroBuscado) { console.log("Libro encontrado:");
 console.log(libroBuscado); 
}
  else {
     console.log("Libro no encontrado");
     }
}

function  LibrosBuscadoPorGenero () {
  const generoBuscado = prompt("Introduce el título del libro que deseas buscar:");
   const libroBuscado = libros.find(libro => libro.genero == generoBuscado);

   if (libroBuscado) { console.log("Libro encontrado:");
   console.log(libroBuscado); 
  }
    else {
       console.log("Libro no encontrado");
       }

}

function  LibrosBuscadoPorIdioma () {
  const idiomaBuscado = prompt("Introduce el título del libro que deseas buscar:");
   const libroBuscado = libros.find(libro => libro.idioma == idiomaBuscado);

   if (libroBuscado) { console.log("Libro encontrado:");
   console.log(libroBuscado); 
  }
    else {
       console.log("Libro no encontrado");
       }
  }


  function diezIteraciones() {
    const LibroBuscadoPorEditorial = libros.find(
      libro => libro.editorial ==="Sudamericana");
     console.table(LibroBuscadoPorEditorial);
      
      const LibroBuscadoPorPaginas = libros.find(
      libro => libro.paginas ===100);
      console.table(LibroBuscadoPorPaginas); 
      
      const LibroBuscadoPorDimensiones = libros.find(
      libro => libro.dimensiones ==="5.1 x 0.9 x 7.8 pulgadas");
      console.table(LibroBuscadoPorDimensiones);
      
      const LibroBuscadoPorPeso = libros.find(
      libro => libro.peso ==="12.8 onzas");
      console.table(LibroBuscadoPorPeso); 
      
      const LibroBuscadoPorEstado = libros.find(
      libro => libro.estado ==="Nuevo");
      console.table(LibroBuscadoPorEstado); 
      
      const LibroBuscadoPorUbicacion = libros.find(
      libro => libro.ubicacion ==="Librerías");
      console.table(LibroBuscadoPorUbicacion); 
      
      const LibroBuscadoPorFormato = libros.find(
      libro => libro.formato ==="Libro físico o digital");
      console.table(LibroBuscadoPorFormato);
      const LibroBuscadoPorPrecio = libros.find(
      libro => libro.precio ===55);
      console.table(LibroBuscadoPorPrecio); 
      
      const LibroBuscadoPorDescripcion = libros.find(
      libro => libro.descripcion ==="La tercera parte de la trilogía narra la culminación de la guerra del Anillo y el destino de los personajes principales.");
      console.table(LibroBuscadoPorDescripcion); 
      
      const LibroBuscadoPorIsbn = libros.find(
      libro => libro.isbn ==="978-84-376-0494-7");
      console.table(LibroBuscadoPorIsbn); 
      
  }








  let  msj=("----- Menú de Libros -----\n")
  msj+=("1. Agregar libro\n")
  msj+=("2. Mostrar libro\n")
  msj+=("3. Quitar libro\n")
  msj+=("4. Listar libro\n")
  msj+=("5. Resumen libro\n")
  msj+=("6. Los Resumenes libro\n")
  msj+=("7. Libros con descuento\n")
  msj+=("8. Libros mas caros\n")
  msj+=("9. Libros menores de 100 paginas\n")
  msj+=("10. Libros precio mayor a 20\n")
  msj+=("11. Libros ordenados por paginas\n")
  msj+=("12. Menú de Find\n")
  msj+=("13. Salir\n")

  
  let  msj2=("----- Menú de Find -----\n")
  msj2+=("1. Buscar un objeto del array por titulo.\n")
  msj2+=("2. Buscar un objeto del array por autor.\n")
  msj2+=("3. Buscar un objeto del array por fecha de publicación.\n")
  msj2+=("4. Buscar un objeto del array por genero.\n")
  msj2+=("5. Buscar un objeto del array por idioma.\n")
  msj2+=("6. 10 iteraciones\n")
  msj2+=("7. Salir\n")



do {
    opcion = parseInt(prompt(msj));

    switch (opcion) {
        case 1:
            agregarLibro();
            break;
        case 2:
            mostrarLibro();
            break;
        case 3:
            quitarLibro();
            break;
            case 4:
              listarlibro();
              break;
              case 5:
                ResumenLibros();
                break;
                case 6:
                  LosResumenesLibros();
                  break;
                  case 7:
                    librosConDescuentos();
                    break;
                  case 8:
                    LibrosMasCaross();
                    break;
                    case 9:
                      librospaginasmenor100();
                      break;
                      case 10:
                        librospreciomayor20();
                        break;
                        case 11:
                          LibrosOrdenadosPorPaginas();
                          break;
                          case 12:
               opcionfind= parseInt(prompt(msj2)); 
                switch (opcionfind) {
                  case 1:
                    LibrosBuscadoPorTitulo();
                    break;
                  case 2:
                    LibrosBuscadoPorAutor();
                    break;
                  case 3:
                    LibrosBuscadoPorFechaDePublicacion();
                    break;
                    case 4:
                      LibrosBuscadoPorGenero();
                      break;
                      case 5:
                        LibrosBuscadoPorIdioma();
                        break;
                        case 6:
                          diezIteraciones();
                          break;
                }
                            break;
        case 13:
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Por favor, ingrese una opción válida.");
    }
} while (opcion !== 13); 



