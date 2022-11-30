const alimentos = [
        {
            id: "alimento-01",
            titulo: "Alimento Balanceado",
            imagen: "./imagenes/alfalfa.jpg",
            sexo: "Bolsa de 25kg",
            categoria: {
                nombre: "Alimento balanceado",
                id: "alimento"
            },
            precio: 2000
    
        },
    
        {
            id: "alimento-02",
            titulo: "Lechuga",
            imagen: "./imagenes/lechuga.jpg",
            sexo: "X kg",
            categoria: {
                nombre: "Lechuga",
                id: "alimento"
            },
            precio: 100
    
        },
    
        {
            id: "alimento-03",
            titulo: "Tomate",
            imagen: "./imagenes/tomaco.jpg",
            sexo: "X kg",
            categoria: {
                nombre: "Tomate",
                id: "alimento"
            },
            precio: 200
    
        },
    
        {
            id: "alimento-04",
            titulo: "Zanahoria",
            imagen: "./imagenes/zanahoria.jpg",
            sexo: "X kg",
            categoria: {
                nombre: "Zanahoria",
                id: "alimento"
            },
            precio: 150
    
        },
    ];
    
    //conejos
    
    const productos = [
        {
            id: "conejo-01",
            titulo: "Conejo común",
            imagen: "./imagenes/comun1.jpg",
            sexo: "hembra",
            categoria: {
                nombre: "Conejo común 1",
                id: "conejo"
            },
            precio: 800
    
        },
    
        {
            id: "conejo-02",
            titulo: "Conejo común",
            imagen: "./imagenes/comun2.jpg",
            sexo: "hembra",
            categoria: {
                nombre: "Conejo común 2",
                id: "conejo"
            },
            precio: 800
    
        },
    
        {
            id: "conejo-03",
            titulo: "Conejo común",
            imagen: "./imagenes/comun3.jpg",
            sexo: "macho",
            categoria: {
                nombre: "Conejo común 3",
                id: "conejo"
            },
            precio: 800
    
        },
    
        {
            id: "conejo-04",
            titulo: "Conejo cabeza de león",
            imagen: "./imagenes/cabezaleon1.jpg",
            sexo: "hembra",
            categoria: {
                nombre: "Conejo común 4",
                id: "conejo"
            },
            precio: 1500
    
        },
    
        {
            id: "conejo-05",
            titulo: "Conejo cabeza de León",
            imagen: "./imagenes/cabezaleon2.jpg",
            sexo: "macho",
            categoria: {
                nombre: "Conejo común 5",
                id: "conejo"
            },
            precio: 1500
    
        },
    
        {
            id: "conejo-06",
            titulo: "Conejo cabeza de León",
            imagen: "./imagenes/cabezaleon3.jpg",
            sexo: "hembra",
            categoria: {
                nombre: "Conejo común 6",
                id: "conejo"
            },
            precio: 1500
    
        },
    
        {
            id: "conejo-07",
            titulo: "Conejo orejas caidas (Belier o Mini lop)",
            imagen: "./imagenes/orejascaidas1.jpg",
            sexo: "hembra",
            categoria: {
                nombre: "Conejo común 7",
                id: "conejo"
            },
            precio: 1000
    
        },
    
        {
            id: "conejo-08",
            titulo: "Conejo orejas caidas (Belier o Mini lop)",
            imagen: "./imagenes/orejascaidas2.jpg",
            sexo: "macho",
            categoria: {
                nombre: "Conejo común 8",
                id: "conejo"
            },
            precio: 1000
    
        },
    
        
    ];
    
    //const de productos y alimentos
    
    const contenedorProductos = document.querySelector("#contenedor-productos");
    
    const contenedorAlimentos = document.querySelector("#contenedor-alimentos");
    
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    
    const tituloPrincipal = document.querySelector("#titulo-principal")
    
    let botonesAgregar = document.querySelectorAll(".producto-agregar");
    
    const numerito = document.querySelector("#numerito");
    
    //function conejos
    
    function cargarProductos (productosElegidos) {
    
        contenedorProductos.innerHTML = "";
    
        productosElegidos.forEach(producto => {
            
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
            
    
            <div class="card card text-center m-3" style="width: 18rem;">
            
            <img src="${producto.imagen}" height="300" class="card-img-top " alt="${producto.titulo}">
            <div class="card-body">
              <h5 class="card-title">${producto.titulo}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item m-0">$${producto.precio}</li>
              <li class="list-group-item m-0">${producto.sexo}</li>
            </ul>
            <div class="card-body">
            <button class="producto-agregar btn btn-primary" id="${producto.id}">Agregar</button>
            </div>
            
            </div>
    
    
            `;
    

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();



    //alimentos

    contenedorAlimentos.innerHTML = "";
    
        productosElegidos.forEach(producto => {
            
            const div = document.createElement("div");
            div.classList.add("producto");
           
    
            contenedorAlimentos.append(div);
    
        })

        actualizarBotonesAgregar();
}

cargarProductos(productos);

cargarProductos(alimentos);




botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
    
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
    
            e.currentTarget.classList.add("active");
    
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id); 
    
            cargarProductos(productosBoton);botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {


            
            if (e.currentTarget.id != "conejo") { 
                            const productoCategoria = alimentos.find(producto => producto.categoria.id === e.currentTarget.id)
                            
                            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
                
                            const productosBoton = alimentos.filter(producto => producto.categoria.id === e.currentTarget.id); 
                
                        cargarProductos(productosBoton);
                        } else {
                            tituloPrincipal.innerText = "Conejos";
                            cargarProductos(productos);
                        }
                
    
        })
    })





        })
    })


    

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}












// //array alimento

// const alimentos = [
//     {
//         id: "alimento-01",
//         titulo: "Alimento Balanceado",
//         imagen: "./imagenes/alfalfa.jpg",
//         categoria: {
//             nombre: "Alimento balanceado",
//             id: "alimento"
//         },
//         precio: 2000

//     },

//     {
//         id: "alimento-02",
//         titulo: "Lechuga",
//         imagen: "./imagenes/lechuga.jpg",
//         categoria: {
//             nombre: "Lechuga",
//             id: "alimento"
//         },
//         precio: 100

//     },

//     {
//         id: "alimento-03",
//         titulo: "Tomate",
//         imagen: "./imagenes/tomaco.jpg",
//         categoria: {
//             nombre: "Tomate",
//             id: "alimento"
//         },
//         precio: 200

//     },

//     {
//         id: "alimento-04",
//         titulo: "Zanahoria",
//         imagen: "./imagenes/zanahoria.jpg",
//         categoria: {
//             nombre: "Zanahoria",
//             id: "alimento"
//         },
//         precio: 150

//     },
// ];

// //conejos

// const productos = [
//     {
//         id: "conejo-01",
//         titulo: "Conejo común",
//         imagen: "./imagenes/comun1.jpg",
//         categoria: {
//             nombre: "Conejo común 1",
//             id: "conejo"
//         },
//         precio: 800

//     },

//     {
//         id: "conejo-02",
//         titulo: "Conejo común",
//         imagen: "./imagenes/comun2.jpg",
//         categoria: {
//             nombre: "Conejo común 2",
//             id: "conejo"
//         },
//         precio: 800

//     },

//     {
//         id: "conejo-03",
//         titulo: "Conejo común",
//         imagen: "./imagenes/comun3.jpg",
//         categoria: {
//             nombre: "Conejo común 3",
//             id: "conejo"
//         },
//         precio: 800

//     },

//     {
//         id: "conejo-04",
//         titulo: "Conejo cabeza de león",
//         imagen: "./imagenes/cabezaleon1.jpg",
//         categoria: {
//             nombre: "Conejo común 4",
//             id: "conejo"
//         },
//         precio: 1500

//     },

//     {
//         id: "conejo-05",
//         titulo: "conejo 05",
//         imagen: "./imagenes/cabezaleon2.jpg",
//         categoria: {
//             nombre: "Conejo común 5",
//             id: "conejo"
//         },
//         precio: 1500

//     },

//     {
//         id: "conejo-06",
//         titulo: "conejo 06",
//         imagen: "./imagenes/cabezaleon3.jpg",
//         categoria: {
//             nombre: "Conejo común 6",
//             id: "conejo"
//         },
//         precio: 1500

//     },

//     {
//         id: "conejo-07",
//         titulo: "conejo 07",
//         imagen: "./imagenes/orejascaidas1.jpg",
//         categoria: {
//             nombre: "Conejo común 7",
//             id: "conejo"
//         },
//         precio: 1000

//     },

//     {
//         id: "conejo-08",
//         titulo: "conejo 08",
//         imagen: "./imagenes/orejascaidas2.jpg",
//         categoria: {
//             nombre: "Conejo común 8",
//             id: "conejo"
//         },
//         precio: 1000

//     },

    
// ];

// //const de productos y alimentos

// const contenedorProductos = document.querySelector("#contenedor-productos");

// const contenedorAlimentos = document.querySelector("#contenedor-alimentos");

// const botonesCategorias = document.querySelectorAll(".boton-categoria");

// const tituloPrincipal = document.querySelector("#titulo-principal")

// let botonesAgregar = document.querySelectorAll(".producto-agregar");

// const numerito = document.querySelector("#numerito");

// //function conejos

// function cargarProductos (productosElegidos) {

//     contenedorProductos.innerHTML = "";

//     productosElegidos.forEach(producto => {
        
//         const div = document.createElement("div");
//         div.classList.add("producto");
//         div.innerHTML = `
        

//         <div class="card card text-center m-3" style="width: 18rem;">
        
//         <img src="${producto.imagen}" height="300" class="card-img-top " alt="${producto.titulo}">
//         <div class="card-body">
//           <h5 class="card-title">${producto.titulo}</h5>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item m-0">$${producto.precio}</li>
//           <li class="list-group-item m-0">Sexo: hembra</li>
//         </ul>
//         <div class="card-body">
//         <button class="producto-agregar btn btn-primary" id="${producto.id}">Agregar</button>
//         </div>
        
//         </div>


//         `;


//         contenedorProductos.append(div);

//     })

//     actualiarBotonesAgregar();

// }

// //function alimentos

// function cargarProductos (productosElegidos) {

//     contenedorAlimentos.innerHTML = "";

//     productosElegidos.forEach(producto => {
        
//         const div = document.createElement("div");
//         div.classList.add("producto");
//         div.innerHTML = `
        

//         <div class="card card text-center m-3" style="width: 18rem;">
        
//         <img src="${producto.imagen}" height="300" class="card-img-top " alt="${producto.titulo}">
//         <div class="card-body">
//           <h5 class="card-title">${producto.titulo}</h5>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item m-0">$${producto.precio}</li>
//         </ul>
//         <div class="card-body">
//         <button class="producto-agregar btn btn-primary" id="${producto.id}">Agregar</button>
//         </div>
        
//         </div>


//         `;


//         contenedorAlimentos.append(div);

//     })

// }

// cargarProductos(alimentos);

// cargarProductos(productos);

// //conejos

// botonesCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {

//         botonesCategorias.forEach(boton => boton.classList.remove("active"));

//         e.currentTarget.classList.add("active");

//         const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id); 

//         cargarProductos(productosBoton);

//     })
// })


// //Alimento


// botonesCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {

//         botonesCategorias.forEach(boton => boton.classList.remove("active"));

//         e.currentTarget.classList.add("active");

//         if (e.currentTarget.id != "conejo") { 
//             const productoCategoria = alimentos.find(producto => producto.categoria.id === e.currentTarget.id)
            
//             tituloPrincipal.innerText = productoCategoria.categoria.nombre;

//             const productosBoton = alimentos.filter(producto => producto.categoria.id === e.currentTarget.id); 

//         cargarProductos(productosBoton);
//         } else {
//             tituloPrincipal.innerText = "Conejos";
//             cargarProductos(productos);
//         }

        
//     })
// })

// function actualiarBotonesAgregar() {
//     botonesAgregar = document.querySelectorAll(".productos-agregar");

//     botonesAgregar.forEach(boton => {
//         boton.addEventListener("click", agregarAlCarrito);
//     });
// }

// const productosEnCarrito = [];

// function agregarAlCarrito(e) {
 
//      const idBoton = e.currentTarget.id;
//      const productosAgregado = productos.find(producto => producto.id === idBoton);

//      if(productosEnCarrito.some(producto => producto.id === idBoton)) {

//         const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
//         productosEnCarrito[index].cantidad++;

//      } else {

//         productoAgregado.cantidad = 1;
//         productosEnCarrito.push (productoAgregado);
//      }

//      actualizarNumerito()
//      console.log(productosEnCarrito);

// }

// function actualizarNumerito() {
//     let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
//     numerito.innerText = nuevoNumerito;
// }



/* <div class="card card text-center m-3" style="width: 18rem;">
    <img src="./imagenes/comun1.jpg" height="300" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Conejo Común</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-0">Precio: $800</li>
      <li class="list-group-item m-0">Sexo: hembra</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div>

  <div class="card card text-center m-3" style="width: 18rem;">
    <img src="./imagenes/comun2.jpg" height="300" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Conejo Común</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-0">Precio: $800</li>
      <li class="list-group-item m-0">Sexo: hembra</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div>

  <div class="card card text-center m-3" style="width: 18rem;">
    <img src="./imagenes/cabezaleon1.jpg" height="300" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Conejo cabeza de León</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-0">Precio: $1500</li>
      <li class="list-group-item m-0">Sexo: hembra</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div>

  <div class="card card text-center m-3" style="width: 18rem;">
    <img src="./imagenes/cabezaleon2.jpg" height="300" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Conejo cabeza de león</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-0">Precio: $1500</li>
      <li class="list-group-item m-0">Sexo: macho</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div>

  <div class="card card text-center m-3" style="width: 18rem;">
    <img src="./imagenes/orejascaidas1.jpg" height="300" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Conejo orejas caidas (Belier o Mini lop)</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-0">Precio: $1000</li>
      <li class="list-group-item m-0">Sexo: hembra</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div>

  <div class="card card text-center m-3" style="width: 18rem;">
    <img src="./imagenes/orejascaidas2.jpg" height="300" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Conejo orejas caidas (Belier o Mini lop)</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-0">Precio: $1000</li>
      <li class="list-group-item m-0">Sexo: hembra</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div>

  <div class="card card text-center m-3" style="width: 18rem;">
    <img src="./imagenes/cabezaleon3.jpg" height="300" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Conejo cabeza de león</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-0">Precio: $1500</li>
      <li class="list-group-item m-0">Sexo: hembra</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div>

  <div class="card card text-center m-3" style="width: 18rem;">
    <img src="./imagenes/comun3.jpg" height="300" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Conejo común</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-0">Precio: $800</li>
      <li class="list-group-item m-0">Sexo: macho</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div> */




















































//   botonesCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {

//         botonesCategorias.forEach(boton => boton.classList.remove("active"));

//         e.currentTarget.classList.add("active");

//         const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id); 

//         cargarProductos(productosBoton);botonesCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {

//         botonesCategorias.forEach(boton => boton.classList.remove("active"));

//         e.currentTarget.classList.add("active");

//         const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id); 

//         cargarProductos(productosBoton);

//         if (e.currentTarget.id != "conejo") { 
//                         const productoCategoria = alimentos.find(producto => producto.categoria.id === e.currentTarget.id)
                        
//                         tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
//                         const productosBoton = alimentos.filter(producto => producto.categoria.id === e.currentTarget.id); 
            
//                     cargarProductos(productosBoton);
//                     } else {
//                         tituloPrincipal.innerText = "Conejos";
//                         cargarProductos(productos);
//                     }
            

//     })
// })




// function actualizarBotonesAgregar() {
// botonesAgregar = document.querySelectorAll(".producto-agregar");

// botonesAgregar.forEach(boton => {
//     boton.addEventListener("click", agregarAlCarrito);
// });
// }

// let productosEnCarrito;

// let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

// if (productosEnCarritoLS) {
// productosEnCarrito = JSON.parse(productosEnCarritoLS);
// actualizarNumerito();
// } else {
// productosEnCarrito = [];
// }

// function agregarAlCarrito(e) {
// const idBoton = e.currentTarget.id;

// const productoAgregado = productos.find(producto => producto.id === idBoton);

// const alimentoAgregado = alimentos.find(producto => producto.id === idBoton);

// if(productosEnCarrito.some(producto => producto.id === idBoton)) {
//     const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
//     productosEnCarrito[index].cantidad++;
// } else {
//     productoAgregado.cantidad = 1;
//     productosEnCarrito.push(productoAgregado);
// }

// actualizarNumerito();

// localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
// }

// function actualizarNumerito() {
// let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
// numerito.innerText = nuevoNumerito;
// }


//     })
// })




// function actualizarBotonesAgregar() {
// botonesAgregar = document.querySelectorAll(".producto-agregar");

// botonesAgregar.forEach(boton => {
//     boton.addEventListener("click", agregarAlCarrito);
// });
// }

// let productosEnCarrito;

// let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

// if (productosEnCarritoLS) {
// productosEnCarrito = JSON.parse(productosEnCarritoLS);
// actualizarNumerito();
// } else {
// productosEnCarrito = [];
// }

// function agregarAlCarrito(e) {
// const idBoton = e.currentTarget.id;
// const productoAgregado = productos.find(producto => producto.id === idBoton);

// if(productosEnCarrito.some(producto => producto.id === idBoton)) {
//     const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
//     productosEnCarrito[index].cantidad++;
// } else {
//     productoAgregado.cantidad = 1;
//     productosEnCarrito.push(productoAgregado);
// }

// actualizarNumerito();

// localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
// }

// function actualizarNumerito() {
// let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
// numerito.innerText = nuevoNumerito;
// }