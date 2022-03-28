/*
	$ ó jQuery-> Se refiere al objeto  jQuery
(ejm) $(document) ó jQuery(document)

	Selector -> Es lo que va despues del "$"  
(ejm) $(document) //Se refiere a toda la pagina web 
	
	Metodo -> Va luego del "selector"
(ejm) 	.ready
		$(document).ready(//function de callback)
*/

$(document).ready(()=>{
	console.log("Estamos Listos")

	//Existen muchos selectores
	//Selector ID 				//CLAVE   VALOR
	$("#rojo").css("background","red")
			.css("color","white");
	$('#amarrilo').css("background","yellow")
				.css("color","grey");
	$('#verde').css("background","green")
			.css("color","white");
	console.log(rojo);
});