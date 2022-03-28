//nodeJS tiene modulo pre escritos
const os = require('os');
//MODULO OS 
/*Este modulo permite trabajar con el SISTEMO OPERATIVO*/
const oos={};
oos.homedir = console.log(os.homedir());//Direccion del directorio
oos.platform = console.log(os.platform());//En que plataforma estoy (windows, linux, mac)
oos.release = console.log(os.release());//versio de la plataforma
oos.freemem = console.log("free men: ",os.freemem(), 'bytes');
oos.totalmem = console.log("totalmen: ",os.totalmem(), 'bytes');

module.exports = oos;