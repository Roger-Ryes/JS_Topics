/*
    Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/
var inicio = parseInt(prompt("Ingrese 1er valor",0));
var fin = parseInt(prompt("Ingrese valor final"));
document.write("<h1>Valores desde "+inicio+" hasta "+fin+"</h1>")

if(isNaN(inicio) && isNaN(fin)){
    alert("Ingresar solo numeros");
}
else{
    for(inicio; inicio<=fin; inicio++){
        if(inicio%2==0){
            continue;
        }
        console.log(inicio);
        document.write(inicio+'<br/>');
    }
}
