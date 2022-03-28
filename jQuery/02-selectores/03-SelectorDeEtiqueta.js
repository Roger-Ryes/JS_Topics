$(document).ready(()=>{
	//Selector de etiquetas
	var parrafos = $('p');
	parrafos.css("cursor","pointer");
	parrafos.click(function(){
		var that = $(this);
		if(that.hasClass("grande")){
			that.removeClass("grande");	
		}else{
			that.addClass("grande");

		}		
	});

	var clase = $('.sinBorde');
	clase.click(function(){
		$(this).addClass("zebra");
	});
});
