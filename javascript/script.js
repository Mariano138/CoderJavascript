let productosCreados = localStorage.getItem("productos");
productosCreados = JSON.parse(productosCreados);

//Dom

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


//Fetch

const productos = [];

fetch("./javascript/productos.json")
    .then((response) => response.json())
    .then((listaProductos) => {
        listaProductos.forEach((producto) => {
            productos.push({
                id: producto.id,
                titulo: producto.titulo,
                imagen: producto.imagen,
                categoria: {
                    nombre: producto.categoria.nombre,
                    id: producto.categoria.id
                },
                precio: producto.precio
            })
        })
        localStorage.setItem("productos", JSON.stringify(productos));
    })

//Cargo los productos

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";
        
    productosElegidos.forEach(producto => {

            const div = document.createElement("div");

            div.classList.add("producto");

            div.innerHTML = `
            
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio"></p>$${producto.precio}</p>
                    <button class="btn btn-primary producto-agregar" id="${producto.id}" >Agregar</button>
                </div>
            
            `;


            contenedorProductos.append(div);
        })
        
        actualizarBotonesAgregar();
}

cargarProductos(productosCreados);

//Categoria de los botones (Conejos, Alimento y Ropa)

botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {
       
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            
            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        } else {
            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);
        }
        
    })
});

// Botones Agregar

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

//Local Storage

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {

    productosEnCarrito = [];
}

//Agregar al carrito (Donde se hace el push al carrito)


function agregarAlCarrito(e) {

    Toastify({

        text: "Agregado al carrito",
        
        duration: 3000,

        style: {
            background: "linear-gradient(to right, #1a7431, #1a7431)",
          }
        
    }).showToast();

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


//Fuction de actualizar numero de objetos en el carrito

function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}





























//Fetch

// const ropa = document.querySelector("#contenedor-productos");

// fetch ("./javascript/productos.json")
//     .then(response => response.json())
//     .then(data => {
//         mostrarProductos(data);
//     })

//     function mostrarProductos(productos) {
            
//         productos.forEach(dataz => {
    
//                 const divv = document.createElement("div");
    
//                 divv.classList.add("producto");
    
//                 divv.innerHTML = `
//                     <img class="producto-imagen" src="${dataz.imagen}" alt="${dataz.titulo}">
//                     <div class="producto-detalles">
//                         <h3 class="producto-titulo">${dataz.titulo}</h3>
//                         <p class="producto-precio"></p>$${dataz.precio}</p>
//                         <button class="btn btn-primary producto-agregar-ropa" id="${dataz.id}" >Agregar</button>
//                     </div>
//                 `;
    
    
//                 ropa.append(divv);
//             })
            
//             actualizarBotonesAgregar();
//     }
    

