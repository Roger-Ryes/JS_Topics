//MODULO PARA ARCHIVOS
const fs = require('fs');
    //para enviar
    const file = {};

//fs.writeFile(file, data[, options], callback)
//codigo asincrono
file.write = fs.writeFile('./text.txt','contenido',err=>{
                if(err) console.log('error ',err);
                console.log('Archivo creado');
            });
console.log("ultima linea");

//IMPORTANTE
/*En NodeJS se utiliza una funcion de callback que se ejecuta cuando un proceso a 
terminado su funcion. ejm
Se va a crear el archivo (line 16) y hasta que el SO cree el archivo puede segir ejecutando
el codigo de debajo (line 20) y cuando el SO termina de crear el archivo ejecutara el 
codigo de callback (line1 16,17,18)  
*/

//Leer archivo
//fs.readFile(path[, options], callback)
//f options is a string, then it specifies the encoding:
file.read = fs.readFile('./text.txt','utf8',(err,data)=>{
                if(err) throw err;
                console.log(data); //sin 'utf8' usar: data.toString();
            });

module.exports = file;        