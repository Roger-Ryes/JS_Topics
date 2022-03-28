$(document).ready(()=>{
	//Selector de atributos
	//$('[]')
	$('[title="Google"]').css('background','#ccc');
	$('[title="facebook"]').css('background','gold');

	//Abrego tanto a parafos(p) y enlaces(a)
	$('p, a').addClass('margen-superior');
	
	//FIND  
	//var busqueda = $('#caja').find(".resaltado");
	//ó
	//var busqueda = $('#caja .resaltado');
	//console.log(busqueda);

	//PARENT
	//Puedo salir de una parte del DOM es como .. en linux
	var busqueda = $('#caja').eq(0).parent().find('[title="facebook"]');
	console.log(busqueda);

	//eq(posicion); Indico en que elemento me estoy posicionando

	

});