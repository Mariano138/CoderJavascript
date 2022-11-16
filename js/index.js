//Registro

function registro() {
  let bienvenida = alert("Bienvenido a venta de Conejos Pepillo y Lylia")

  let Registro = alert("Porfavor cree una cuenta para continuar")

  let nombre = prompt("Ingrese su nombre")

  let apellido = prompt("Ingrese su apellido")

  alert("Bienvenido"+ " " + nombre + " " + apellido)
}
let registrarse = document.getElementById("registrarse");
registrarse.onclick = () => registro();

//Metodo de pago

function pago() {
    let pago = prompt("Método de pago: 1) Tarjeta 2) Efectivo");

    switch (pago) {
        case "1":
            alert("Seleccionó Tarjeta como su método de pago.");
            break;
        case "2":
            alert("Seleccionó Efectivo como su método de pago.");
            break;
    }
}
let pago1 = document.getElementById("metodoPago");
metodoPago.onclick = () => pago();


// Objetos con arrays y utilización de find

function service() {
    const Conejos = [
    {id:1, nombre:"Lylia", raza:"Común", sexo:"Hembra", edad:"1 año", precio: 800},
    {id:2, nombre:"Tira", raza:"Común", sexo:"Hembra", edad:"1 año", precio: 800},
    {id:3, nombre:"Gazapo", raza:"Cabeza de león", sexo:"Hembra", edad:"3 meses", precio: 1500},
    {id:4, nombre:"Pepillo", raza:"Cabeza de león", sexo:"Hembra", edad:"1 año", precio: 1500},
    {id:5, nombre:"Gazapo", raza:"Orejas caidas", sexo:"Hembra", edad:"3 meses", precio: 1000},
    ];

    let id = parseInt(prompt("Ingrese el número del conejo a comprar (del 1 al 5)"));
    let eleccion = Conejos.find(producto => producto.id === id);

    if (eleccion) {
        let mensaje = `Agrego ${eleccion.nombre}, raza: ${eleccion.raza}, sexo: ${eleccion.sexo}, su edad es: ${eleccion.edad}, con un costo de $${eleccion.precio}`;
        alert(mensaje);
    } else {
        alert("Por favor introduzca un numero válido");
    }
}
let seleccionar = document.getElementById("seleccionar");
seleccionar.onclick = () => service();

//Comida

function Comida() {
    let meses = prompt("Introduzca la edad de su conejo en meses de 1 a 12 para saber que tipo de comida es la recomendada.");
    if (meses > 0 && meses < 3) {
        alert("su conejo es un gazapo aun le recomendamos no sobrealimentarlo y solo darle lechuga y tomate");
    } else if (meses > 4 && meses < 6) {
        alert("Su conejo alcanzo la madurez sexual, y es capaz de comer alfalfa o tambien conocido como pienso, deberia siempre tener este alimento a su disposición al igual que agua, ademas deberia realizar 1 o 2 comidas de lechuga diarias y zanahorias");
    } else if (meses > 6 && meses < 13) {
        alert("Su conejo deberia tener heno siempre a su disposición ya que es el 80% de su alimentación al igual que agua, ademas de realizar 4 comidas al dia de lechuga, tomate y/o zanahorias.");
    } else {
        alert("Porfavor Ingrese la edad de su conejo en meses entre 1 y 12");
    }
}
let alimento = document.getElementById("alimento");
alimento.onclick = () => Comida();

//Confirmar compra

function confirmar() {

 let confirmacionCompra = prompt("Desea confirmar compra?");

  
 if (confirmacionCompra == "si") {
     alert("Gracias por su compra");
 } else {
    alert("Gracias por su visita");
 }

}

let confirmartotal = document.getElementById("confirmartotal");
confirmartotal.onclick = () => confirmar();
