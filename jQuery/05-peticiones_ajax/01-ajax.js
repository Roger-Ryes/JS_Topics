$(document).ready(function(){
	$('#encabezado').text('Aprendiendo jQuery - AJAX');


	//LOAD - PETICION
	//$('#datos').load('https://reqres.in/');//Recargaria todo HTML

	//GET  	
	//$.get('https://reqres.in/api/users?page=2');
	$.get('https://reqres.in/api/users',{page: 2},function(response){
		console.log(response.data);
		response.data.forEach((elemento,index)=>{
			$('#datos').append(elemento.first_name+'-'+elemento.last_name+'<br>');
		})

	});		
/*
	//POST
	var usuario = {
		name: 'Roger Reyes',
		web: 'rogerreyes.es'
	};

	$.post('https://reqres.in/api/users',usuario,function(response){
		console.log(response);
	});
*/
	//FORMULARIO
	$('#formulario').submit(function(e){
		e.preventDefault();
		//POST
		var usuario = {
			name: $('input[name="nombre"]').val(),
			web: $('input[name="web"]').val()
		};
		console.log(usuario);
	/*
		$.post($(this).attr('action'),usuario,function(response){
			console.log(response);
		}).done(function(){
			alert('User registrado');
		});
	*/

		/*METODO AJAX -- puedo pasar diferentes valores como 
		el tipo de peticion*/
		$.ajax({
			type: 'POST',
			//dataType: 'json',
			//contentType: 'application/json',
			url: $(this).attr('action'),
			data: usuario,	//Parametros que voy a enviar
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

		return false;
	});




});