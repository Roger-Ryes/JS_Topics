$(document).ready(()=>{
//Selector de clase
	var mi_clase = $('.zebra');
	console.log(mi_clase[0]); //Utilizar esto ó
	console.log(mi_clase.eq(1)); //este

	mi_clase.css("padding","5px")

	$('.sinBorde').click(function(){
		console.log("click");
		$(this).addClass('zebra');
	});

})