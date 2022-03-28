$(document).ready(function(){
	$('#encabezado').text('Aprendiendo jQuery - efectos');
	var caja = $('#caja');
	$('#caja').hide(); //Oculta
	$('#ocultar').hide(); 
/*
	$('#mostrar').click(function(){

		$(this).hide();
		$('#ocultar').show();
		//Efecto recoger
		//$('#caja').show('normal');//fast, normal, slow
		//Efecto desaparecer (fade)
			//$('#caja').fadeIn('fast');
			//$('#caja').fadeTo('slow',1);//velocidad | opacidad
		//Efecto desplegar
			caja.slideUp('slow');

	});	

	$('#ocultar').click(function(){
		
		$(this).hide();
		$('#mostrar').show();
		//Efecto recoger
		//$('#caja').hide('fast');//Efecto fast Outo recoge)
		//Efecto desaparecer (fade)
			//$('#caja').fadeOut('slow');
			//$('#caja').fadeTo('slow',0);//velocidad | opacidad
		//Efecto desplegar
			caja.slideDown('slow');
	});	
*/

	$('#bt_om').click(function(){
		caja.slideToggle('fast',function(){//Muesta y oculta
			console.log('Terminado');
		});  
		//$('#caja').fadeToggle('fast'); 
		//$('#caja').toggle('fast'); //Muesta y oculta 
	});

	//Efecto personalizado
	$('#animame').click(function(){
		caja.animate({//se indicadentro de un JSON
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
				borderRadius: '300px',
				marginLeft: '0px',
			},'slow')
			.animate({
				borderRadius: '900px',
				marginTop: '0px',
			},'slow');
	});

});