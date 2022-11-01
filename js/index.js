
let bienvenida = alert("Bienvenido a venta de Conejos Pepillo y Lylia")

let Registro = alert("Porfavor cree una cuenta para continuar")

let nombre = prompt("Ingrese su nombre")

let apellido = prompt("Ingrese su apellido")

alert("Bienvenido"+ " " + nombre + " " + apellido)

let metodoPago = prompt("Seleccione metodo de pago: Tarjeta (incluye mercado pago), Efectivo");

//Metodo de pago

if (metodoPago == "tarjeta"){
    alert("Selecciono metodo de pago con Tarjeta")
  } else if ("efectivo"){
    "Selecciono pago en efectivo"
  } 
  else {
    alert ("metodo de pago invalido")
  }

//raza

let raza = prompt("Porfavor seleccione la raza de conejo: cabeza de león, conejo común, orejas caídas.");

//sexo

let sexo = prompt("Porfavor seleccione el sexo de su conejo: macho, hembra")

//años

function Anios(edad){
    switch (edad) {
        case "3":
            return "Eligió 3 meses de edad";

        case "4":
            return "Eligió 4 meses de edad";
                
        case "5":
            return "Eligió 5 meses de edad";
                    
        case "6":
            return "Eligió 6 meses de edad";

        case "7":
            return "Eligió 7 meses de edad";

        case "8":
            return "Eligió 8 meses de edad";

        default:
            return "Edad Incorrecta";
    }
}

let respuesta = Anios(prompt("Porfavor ingrese la edad en meses de su conejo de 3 a 8"));
alert(respuesta)

//confirmar compra y total

let confirmacionCompra = prompt("Desea confirmar compra?");


function total(){
    return("su compra es: conejo " + raza + ", " + sexo + ", " + "Metodo de pago:" + " " + metodoPago);
}
  
if (confirmacionCompra == "si") {
    alert(total());
} 

alert("Gracias por su visita" + " " + nombre)
