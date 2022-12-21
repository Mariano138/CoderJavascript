let productosEnCarrito = (localStorage.getItem("productos-en-carrito"));
productosEnCarrito = JSON.parse(productosEnCarrito);

//Dom

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


// Productos del carrito (Funcion que actualiza los productos en el carrito)

function cargarProductosCarrito() {

    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
            
        
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = 
        `
            <img class="carrito-producto-imagen" src="${producto.imagen}"     alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="producto-cantidad">
                <small>cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar btn btn-danger" id="${producto.id}"><i class="bi bi-trash"></i></button>
        `;
    
        contenedorCarritoProductos.append(div);
        
        });
    
    } else {
    
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
    }

    actualizarBotonesEliminar();
    actualizarTotal();

}

cargarProductosCarrito();

// Actualizar los botones eliminar (Funcion encargada de hacer funcionar el boton eliminar)

function actualizarBotonesEliminar() {
    
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
        
    });
}

// Eliminar del carrito (Eliminar del local storage)

function eliminarDelCarrito(e) {

    Toastify({

        text: "Producto eliminado de su carrito.",
        
        duration: 3000,

        style: {
            background: "linear-gradient(to right, #f25c54, #ca3c25)",
          }
        
        }).showToast();
    
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Vaciar carrito (Funcion de vaciar carrito)

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    Swal.fire({
        title: '¿Estas seguro de vaciar tu carrito?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Vaciar',
        confirmButtonColor: '#1a7431',
        cancelButtonColor: '#c81d25'
    }).then((response => {
        if(response.isConfirmed) {

            Toastify({

                text: "Su carrito esta vacío.",
                
                duration: 3000,

                style: {
                    background: "linear-gradient(to right, #f25c54, #ca3c25)",
                  }
                
                }).showToast();
            
        productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        cargarProductosCarrito();
        } 
    
    }))

}

// Funcion encargada de mostrar el total de todos los productos

function actualizarTotal() {
    
    const totalCalculado = productosEnCarrito.reduce((acc , producto) => acc + (producto.precio * producto.cantidad), 0);
    
    total.innerText = `$${totalCalculado}`;
}

// Boton comprar

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    
    Swal.fire({
        title: 'Confirmar compra',
        text: '¿Esta seguro de seguir con la compra?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Comprar',
        confirmButtonColor: '#1a7431',
        cancelButtonColor: '#c81d25'
    }).then((result) => {

        if(result.isConfirmed) {

            Swal.fire({
                title: 'Gracias por su compra',
                showCancelButton: false,
                showConfirmButtom: false,
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#2364aa',
            })
    
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
          
          
            contenedorCarritoVacio.classList.add("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoComprado.classList.remove("disabled");

        }

        
    })

}


