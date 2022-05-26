let numero = prompt("Bienvenido a Reiyspak, ingrese el número de la opción deseada\n Catálogo de productos [1] \n Comprar [2]");
let opcion = 0;
let totalCompra = 0;

function valor(){
    while ((numero !=1 )&&(numero != 2)){
        if (numero == ""){
            alert("No ingresaste ninguna opción")
        }
        alert("Ingresa una opción correcta")
        numero = prompt("\n Catálogo de productos [1] \n Comprar [2]")
    }
    
    if(numero == 1) {
    
        alert("Catálogo \n RIG DE MINERIA : 30.000USD \n PLACA DE VIDEO : 4.000USD \n FUENTE MODULAR : 1.000USD \n BASE DE ACERO INOXIDABLE : 200USD");
        redirigir();
        numero = prompt("Si desea volver al  menú principal ingrese [3]")
    
    } else if (numero == 2) {
    
        alert("Comprar \n Elija el producto que quiera comprar \n RIG DE MINERIA [A] \n PLACA DE VIDEO [B] \n FUENTE MODULAR [C] \n BASE DE ACERO INOXIDABLE [D]")
        opcion = prompt("Elija la opción")
        if (opcion == "A"){
            alert("Elegiste la opción A")
        } else if (opcion == "B") {
            alert("Elegiste la opción B")
        } else if (opcion == "C") {
            alert("Elegiste la opción C")
        } else if (opcion == "D"){
            alert("Elegiste la opción D")
        } else {
            alert("No elegiste ninguna opción")
            numero = prompt("Para volver al menú principal elija 3")
            redirigir();
        }
        valor();
    
    } else {
    
        alert("Ingresa una opción correcta")
        valor();
    
    } 
}
valor();
function redirigir(){
    while (numero == 3){
        alert("Serás redirigido al menú principal")
        valor ();
        numero = prompt("\n Catálogo de productos [1] \n Comprar [2]")
    
    }
}
redirigir();
