//Productos

const productos = [
    //Conejos
    {
        id: "conejo-01",
        titulo: "Conejo cabeza de León",
        imagen: "./imagenes/cabezaleon1.jpg",
        categoria: {
            nombre: "Conejos",
            id: "conejos"
        },
        precio: 1500
    },
    {
        id: "conejo-02",
        titulo: "Conejo cabeza de León",
        imagen: "./imagenes/cabezaleon2.jpg",
        categoria: {
            nombre: "Conejos",
            id: "conejos"
        },
        precio: 1500
    },
    {
        id: "conejo-03",
        titulo: "Conejo cabeza de León",
        imagen: "./imagenes/cabezaleon3.jpg",
        categoria: {
            nombre: "Conejos",
            id: "conejos"
        },
        precio: 1500
    },
    {
        id: "conejo-04",
        titulo: "Conejo Común",
        imagen: "./imagenes/comun1.jpg",
        categoria: {
            nombre: "Conejos",
            id: "conejos"
        },
        precio: 1000
    },
    {
        id: "conejo-05",
        titulo: "Conejo Común",
        imagen: "./imagenes/comun2.jpg",
        categoria: {
            nombre: "Conejos",
            id: "conejos"
        },
        precio: 1000
    },
    {
        id: "conejo-06",
        titulo: "Conejo Común",
        imagen: "./imagenes/comun3.jpg",
        categoria: {
            nombre: "Conejos",
            id: "conejos"
        },
        precio: 1000
    },
    {
        id: "conejo-07",
        titulo: "Conejo orejas caídas (Mini Lop)",
        imagen: "./imagenes/orejascaidas1.jpg",
        categoria: {
            nombre: "Conejos",
            id: "conejos"
        },
        precio: 1200
    },
    {
        id: "conejo-08",
        titulo: "Conejo orejas caídas (Mini Lop)",
        imagen: "./imagenes/orejascaidas2.jpg",
        categoria: {
            nombre: "Conejos",
            id: "conejos"
        },
        precio: 1200
    },

    //Alimentos
    
    {
        id: "alimento-01",
        titulo: "Alfalfa",
        imagen: "./imagenes/alfalfa.jpg",
        categoria: {
            nombre: "Alimentos",
            id: "alimentos"
        },
        precio: 2000
    },
    {
        id: "alimento-02",
        titulo: "Lechuga",
        imagen: "./imagenes/lechuga.jpg",
        categoria: {
            nombre: "Alimentos",
            id: "alimentos"
        },
        precio: 200
    },
    {
        id: "alimento-03",
        titulo: "Tomate",
        imagen: "./imagenes/tomaco.jpg",
        categoria: {
            nombre: "Alimentos",
            id: "alimentos"
        },
        precio: 300
    },
    {
        id: "alimento-04",
        titulo: "Zanahoria",
        imagen: "./imagenes/zanahoria.jpg",
        categoria: {
            nombre: "Alimentos",
            id: "alimentos"
        },
        precio: 200
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


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

cargarProductos(productos);

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

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS) {
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


function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}