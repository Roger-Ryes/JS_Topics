'use strict'
/*
    Muestra todos los numero divisores de un numero introduce en prompt
*/
var valor1=Number(prompt("Ingersar valor"));
if(!isNaN(valor1)){
    for(var i=0;i<=valor1;i++){
        if(valor1%i==0){
            console.log(i+'/'+valor1+'='+i/valor1);
        }
    }
}else{
    alert("INGRESAR SOLO NUMEROS")
}


