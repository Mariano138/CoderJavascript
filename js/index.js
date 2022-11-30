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