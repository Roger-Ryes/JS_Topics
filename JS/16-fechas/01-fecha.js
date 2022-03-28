'use strict'
window.addEventListener('load',()=>{

document.querySelector('#encabrezado').innerHTML="Curso JS - date";

//Sacar fecha
var fecha = new Date()
console.log(fecha);

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();
var min = fecha.getMinutes();
var sec = fecha.getSeconds(); 

var fecha_str = `
 <p>La año es ${year}</p>
 <p>El mes ${mes}</p>
 <p>El dia es ${dia}</p>
 <p>El hora es ${hora}</p>
 <p>El min es ${min}</p>
 <p>El segundos es ${sec}</p>
`;
document.write(fecha_str);

/*
getFullYear() 	Get the year as a four digit number (yyyy)
getMonth() 		Get the month as a number (0-11)
getDate() 		Get the day as a number (1-31)
getHours() 		Get the hour (0-23)
getMinutes() 	Get the minute (0-59)
getSeconds() 	Get the second (0-59)
getMilliseconds() 	Get the millisecond (0-999)
getTime() 		Get the time (milliseconds since January 1, 1970)
getDay() 		Get the weekday as a number (0-6)
Date.now() 		Get the time. ECMAScript 5.

*/


});