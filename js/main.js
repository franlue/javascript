let numero = prompt("Bienvenido a Reiyspak, ingrese el número de la opción deseada\n Catálogo de productos [1] \n Comprar [2]");

while ((numero !=1)&&(numero != 2)){
    if (numero == ""){
        alert("No ingresaste ninguna opción")
    }
    alert("Ingresa una opción correcta")
    numero = prompt("\n Catálogo de productos [1] \n Comprar [2]")
}

if(numero == ""){

    alert("No ingresaste ningún código")
    numero = prompt ("Intente nuevamente")

}else if(numero == "1") {

    alert("Catálogo \n RIG DE MINERIA \n PLACA DE VIDEO \n FUENTE MODULAR")

} else if (numero == "2") {

    alert("Comprar")

} else {

    alert("Ingresa una opción correcta")
    numero = prompt ("\n Catálogo de productos [1] \n Comprar [2]")

} 
