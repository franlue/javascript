let numero = prompt("Bienvenido a Reiyspak, ingrese el número de la opción deseada\n Catálogo de productos [1] \n Comprar [2]");
let opcion = 0;

while ((numero !=1 )&&(numero != 2)){
    if (numero == ""){
        alert("No ingresaste ninguna opción")
    }
    alert("Ingresa una opción correcta")
    numero = prompt("\n Catálogo de productos [1] \n Comprar [2]")
}

if(numero == 1) {

    alert("Catálogo \n RIG DE MINERIA : 30.000USD \n PLACA DE VIDEO : 4.000USD \n FUENTE MODULAR : 1.000USD \n BASE DE ACERO INOXIDABLE : 200USD")
    numero = prompt("Si desea volver al  menú principal ingrese [3]")

} else if (numero == 2) {

    alert("Comprar \n Elija el producto que quiera comprar \n RIG DE MINERIA [A] \n PLACA DE VIDEO [B] \n FUENTE MODULAR [C] \n BASE DE ACERO INOXIDABLE [D]")
    opcion = prompt("Elija la opción")
    if (opcion == "A"){
        alert("Elegiste la opción A")
    }
    opcion = prompt("Si desea volver al  menú principal ingrese [3]")

} else {

    alert("Ingresa una opción correcta")
    numero = prompt("Si desea volver al  menú principal ingrese [3]")

} 

while (numero == 3){
    alert("Serás redirigido al menú principal")
    numero = prompt("\n Catálogo de productos [1] \n Comprar [2]")

}
// No sé como hacer el código de manera que se pueda repetir el proceso.
// Cuando el usuario ingrese "3" me gustaría que el código volviera a empezar.
