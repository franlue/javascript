// let num = prompt("Dime tu edad: ")
// let contador = 0
// while (num < 18){
//     num = prompt("Ingrese su edad nuevamente")
//     contador = contador + 1
// }
// alert("Felicidades, eres mayor de edad")
// console.log("El contador iteró " + contador + " veces")

let nombre = prompt("Dime tu nombre: ")

while(nombre != "Jose"){
    alert("Hola " + nombre + " ¿Cómo estás?")
    nombre = prompt ("Dime tu nombre")
}

alert("Mensaje secreto para Jose")