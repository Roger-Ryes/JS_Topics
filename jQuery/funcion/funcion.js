//jQuery
//Llamar de manera externa
	//<script type="text/javascript" src="../jQuery/https _code.jquery.com_jquery-3.5.1.min.js"></script>

////Lamar de manera de link
	/*
	<script src="https://code.jquery.com/jquery-3.5.0.min.js"
			integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="
			crossorigin="anonymous"></script>	
	*/
////Comprobar la instalacion de jQuery
 	$(document).ready(function(){
 		console.log("jQuery y la web cargado")
 	});

//Identificar a jQuery
/*
	$ ó jQuery-> Se refiere al objeto  jQuery
	(ejm) $(document) ó jQuery(document)

		Selector -> Es lo que va despues del "$"  
	(ejm) $(document) //Se refiere a toda la pagina web 
		
		Metodo -> Va luego del "selector"
	(ejm) 	.ready
			$(document).ready(//function de callback)

*/

//Selector ID 
	$('#id');
//Selector de etiquetas
	$('p');
//Selector de clase
	$('.clase');
//Selector de Atriuto
	$('[title="atributo"]');
//Selector tanto a parafos(p) y enlaces(a)
	$('p, a')

//Agregar estilos
	$('#id').css("background","red")
			.css("color","white");
//Agregar clases, remover y verificar clase
	//Agregar clase
	$(this).addClass("newClass");
	//Remover clase
	$(this).removeClass("newClass");
	//Verificar si tiene clas
	$(this).hasClass("newClass");

//FIND  
	$('#id').find(".clase"); // Puede buscar cualquier cosa

//PARENT
//Puedo salir de una parte del DOM es como .. en linux
	$('.calse').eq(0).parent().find('[title="atributo"]');
	//eq(posicion); Indico en que elemento me estoy posicionando

//EVENTOS
	//MOUSEOVER --> MOUSE SOBRE 
	$('div').mouseover(function(){
		$(this).css('background','green');
	});
	//MOUSEOUT --> MOUSE AL SALIR		
	$('.clase').mouseout(function(){
		$(this).css('background','gray');
	})
	//HOVER (REEMPLAZA MOUSEOVER & MOUSEOUT)
	$('#id').hover(funcionOver,funcionOut);
		function funcionOver(){
			//Funcion el mause sobre algo
		}
		function funcionOut(){
			//Funcion el mause sale de algo
		}
	//CLICK
	$('p').click(function(){
		//Codigo
	});
	//DOBLE CLICK
	$('p').dblclick(function(){
		//Codigo
	});

	//FOCUS 
	$('input').focus(function(){
		//Codigo
	});
	//BLUR accion despues de salir de un elemento
	$('input').blur(function(){
		//Codigo
	});
	//MOUSEDOWN 
	$('#id').mousedown(function(){
		//Codigo
	})
	//MOUSEUP
	$('#id').mouseup(function(){
		//Codigo
	})
	//MOUSEMOVE
	$(document).mousemove(function(){
		//console.log('x:'+event.clientX);
		//console.log('y:'+event.clientY);
		$('body').css('cursor','none');
		$("#sigueme").css("left",event.clientX)
					.css("top",event.clientY);
	})
	//Dar coordenadas
	event.clientX //coordenadas en X
	event.clientY //coordenadas en Y

//Recoger el valor que contiene una etiquera
	 $("form #id").val();

//METODOS PARA AGRAGAR UN VALOR A UN ELEMENTO
	$('ul').after('<li><a href="'+link+'"></a></li>');
	$('li').before('<li><a href="'+link+'"></a></li>');
	$('.clase').prepend('<li><a href="'+link+'"></a></li>');
	$('#id').append('<li><a href="'+link+'"></a></li>');
	$('span').html('<li><a href="'+link+'"></a></li>');

//RECORRER POR UN ELEMENTO (igual a un FOREACH)
	$('a').each(function(){

	});

//AGREGAR O OBTENER CONTENIDO DE UN ATRIBUTO
	$(this).attr('href'); //Obtiene el contenido de atributo 
	$('#id').attr('target','_blank'); //Agrega atributo
	$('.class').removeAttr('target','_blank'); //Agrega atributo

//EFECTOS
	//EFECTO DE RECOGER
	//SHOW
	$('#id').show(); 
		//SHOW con FAST, NORMAL, SLOW
		$('#id').show('fast');//o normal o slow 
	//HIDE
	$('#id').hide(); 
		//HIDE con FAST, NORMAL, SLOW
		$('#id').hide('normal');//o dast o slow 

	//EFECTO DE DESAPARECER (fade)
		//fadeIn
		$('.class').fadeIn('fast');
		//fadeOut
		$('#id').fadeOut('slow');
		//fadeTo 	valores-> velocidad | opacidad
		$('#caja').fadeTo('slow',1);

	//EFECTO DE DESPLEGAR
		//slideUp
		$('p').slideUp('slow');
		//slideDown
		$('.class').slideDown('slow');

	//EFECTO VARIABLE (Permite mostrar y ocultar al seleccionarlo)
	$('#id').toggle('fast'); //Muesta y oculta 
	$('.class').fadeToggle('normal'); 
	$('#id').slideToggle('slow');  
	
		//Se puede agregar funciones de callback en cualquier efecto
		$('#id').toggle('fast',function(){}); //ejem

	//EFECTO TRAS  EFECTO
	$('div').animate({//se indicadentro de un JSON
		marginLeft:'500px', 
		fontSize: '40px',
		height:"100px",
		},'slow')
			.animate({
				borderRadius: '900px',
				marginLeft: '100px',
			},'slow')
			.animate({
				borderRadius: '200px',
				marginTop: '100px',
			},'slow')
			.animate({
				borderRadius: '900px',
				marginTop: '0px',
			},'slow');
	});


//AJAX
	//LOAD - PETICION
	$('#id').load('https://reqres.in/');//Recargaria todo HTML

	//GET
	//$.get('https://reqres.in/api/users?page=2');
	$.get('https://reqres.in/api/users',{page: 2},function(response){
		console.log(response.data);
	});		

	//POST
	$.post('https://reqres.in/api/users',usuario,function(response){
		console.log(response);
	});
		//usuario => JSON

	//METODO AJAX 
	// Puedo pasar diferentes valores como el tipo de peticion
	$.ajax({
			type: 'POST', //GET
			//dataType: 'json',
			//contentType: 'application/json',
			url: 'url',
			data: usuario,	//Parametros que voy a enviar // Es JSON
			beforeSend:function(){ //Antes de enviar haga un funcion
				console.log('Enviando usuario...');
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log('A ocurrido un error');
			},
			timeout:2000 //2seg Indico cuanto tiempo quiero que tarde la peticion
		});

