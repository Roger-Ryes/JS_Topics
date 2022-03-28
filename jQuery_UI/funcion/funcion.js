
//INTERFAZ
	//DRAGGABLE - Mover elemento por pagina
		$('.elemento').draggable();
	
	//RESIZABLE - RE-DIMENSIONAR
		$('.elemento').resizable();
	
	//SELECTABLE
		$('.lista_seleccion').selectable();
		//CSS
		/*
			ul .ui-selecting{background: lightgreen;}
			ul .ui-selected{background: darkgreen}		
		*/

	//DROPPABLE - Soltar y arrastrar
		$('#elemento').droppable();

		//Detectar si 
		$('#area').droppable({
			drop: function(){
				console.log('has soltado algo dentro');
			}
		});


//EFECTOS
	//SLIDE
		$('.caja-efectos').toggle('slide'); //fade, slide
	//EXPLODE
		$('.caja-efectos').toggle('explode');//.effect('explode');//.explodeToggle();
	//BLIND
		$('.caja-efectos').toggle('blind');
	//SLIDE
		$('.caja-efectos').toggle('slide');
	//DROP
		$('.caja-efectos').toggle('drop');
	//FOLD
		$('.caja-efectos').toggle('fold');
	//PUFF
		$('.caja-efectos').toggle('puff');
	//SCALE
		$('.caja-efectos').toggle('scale');
	//SHAKE
		$('.caja-efectos').toggle('shake');
	
	// efecto | velocidad ('normal', 'fast', 5000ms) 
		$('.caja-efectos').toggle('shake',5000);


//PLUGINS Y WIDGETS
	//TOOLTIP - muestra texto al colacar el mouse en algun elemento 
	$(document).tooltip();
	/*	HTML
		<a href="#" id='mis-datos'
		title="El texto a contener">Titulo</a>
		
	*/

	//Cuadros de dialogo - dialog
	$('#popup').dialog();	
	/*	HTML
		<div id="popup" title="titulo">
			<p>El texto a contener</p>
		</div>
	*/

	//DATEPICKER - CALENDARIO
	$('#calendario').datepicker();

	//TABS
	$('#pestanas').tabs();
	/* HTML
		<div id="pestanas">
			<ul>
				<!--#tabs-numeroDePestana-->
				<li><a href="#tabs-1">Pestaña 1</a></li> 
				<li><a href="#tabs-2">Pestaña 2</a></li> 
				<li><a href="#tabs-3">Pestaña 3</a></li> 
			</ul>
			<div id='tabs-1'>
				Soy la primera pestaña
			</div>
			<div id='tabs-2'>
				Soy la segunda pestaña
			</div>
			<div id='tabs-3'>
				Soy la tercera pestaña
			</div>
		</div>

	*/
		