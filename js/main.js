let numero = prompt("Ingrese el código 234560");

while(numero != 234560){
    if (numero == ""){
        alert("No ingresaste ningún código")
    }
    alert("Incorrecto: NO puedes ingresar al sitio");
    numero=prompt("Intente nuevamente con el código 234560 ");
}