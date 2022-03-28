$(document).ready(function(){

	//EVENTOS
	//MOUSEOVER --> MOUSE SOBRE 
	var caja = $('#caja').mouseover(function(){
		$(this).css('background','green');

	})
	//MOUSEOUT --> MOUSE AL SALIR
	caja.mouseout(function(){
		$(this).css('background','gray')
				.css("transition",'1000ms all');
	})
	//HOVER (REEMPLAZA MOUSEOVER & MOUSEOUT)
	var caja2 = $('#caja2').hover(cambiaAazul,cambiaAmora);
	function cambiaAmora(){
		caja2.css('background','purple')
			.css('transition','500ms');
	}
	function cambiaAazul(){
		caja2.css('background','blue')
		.css('transition','1000ms');;	
	}
	//CLICK
	var caja3 =	$('#caja3').click(function(){
		$(this).css('background','orange')
				.css('color','white');
	})
	//DOBLE CLICK
	caja3.dblclick(function(){
		$(this).css('background','green')
				.css('color','white');
	})

	//FOCUS Y BLUR
	var nombre = $('#nombre');
	nombre.focus(function(){
		$(this).css('border','5px solid green');
	});
	nombre.blur(function(){
		$(this).css('border','2px solid #ccc');
		$("#datos").text($(this).val()).show();
	});

	//MOUSEDOWN //MOUSEUP
	var datos = $('#datos');
	datos.mousedown(function(){
		$(this).css('border','2px dashed red');
	})
	datos.mouseup(function(){
		$(this).css('border','2px dashed black');
	});

	//MOUSEMOVE
	$(document).mousemove(function(){
		//console.log('x:'+event.clientX);
		//console.log('y:'+event.clientY);
		$('body').css('cursor','none');
		$("#sigueme").css("left",event.clientX)
					.css("top",event.clientY);
	})
	
})