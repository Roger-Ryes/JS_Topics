//jQuery empleado en textos
$(document).ready(function(){
	$('#encabezado').text('Aprendiendo jQuery - Mas metodos / textos');

	console.log(($('a')).length);
	cargar_link();
	
	$('#but_add').click(function(){
		var link = $("#add").val();
		$('ul').after('<li><a href="'+link+'"></a></li>');

		//METODOS PARA AGRAGAR A UN ELEMENTO
		//$('ul').after('<li><a href="'+link+'"></a></li>');
		//$('ul').before('<li><a href="'+link+'"></a></li>');
		//$('ul').prepend('<li><a href="'+link+'"></a></li>');
		//$('ul').append('<li><a href="'+link+'"></a></li>');
		//$('ul').html('<li><a href="'+link+'"></a></li>');

		$('input').val('');

		console.log(link);
		cargar_link();
	});
});	


function cargar_link(){
	$('a').each(function(index){ //Recorre todo de <a>
		var that = $(this);
		var text = that.attr('href'); //Obtiene el contenido de atributo
		that.attr('target','_blank'); //Agrega atributo
		that.removeAttr('target','_blank'); //Agrega atributo
		that.text(text);
	});
}