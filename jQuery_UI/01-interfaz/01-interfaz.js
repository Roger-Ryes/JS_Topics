$(document).ready(function(){
	//DRAGGABLE - Mover elemento por pagina
	$('.elemento').draggable();

	//RESIZABLE - RE-DIMENSIONAR
	$('.elemento').resizable();

	//SELECTABLE 
	//var list = $('.lista_seleccion').selectable();
		//Se configura tambien en css
		/*
			ul .ui-selecting{background: lightgreen;}
			ul .ui-selected{background: darkgreen}	
		*/
	//SORTABLE 
	//Permite mover la lista
	//Si se ejecuta esto - no se ejectua selectable
	var list = $('.lista_seleccion').sortable({
		//Incluye una funcion
		update: function(event, ui){
			console.log("A cambiado la lista");
		}
	});

	//DROPPABLE - Soltar y arrastrar
	$('#elemento').droppable();
	$('#area').droppable({
		drop: function(){
			console.log('has soltado algo dentro');
		}
	});

});