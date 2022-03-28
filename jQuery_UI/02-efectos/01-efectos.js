$(document).ready(function(){
	$('.elemento').resizable();

	$('#mostrar').click(function(){
		//$('.caja-efectos').toggle('slide'); //fade, slide
		//$('.caja-efectos').toggle('explode');//.effect('explode');//.explodeToggle();
		//$('.caja-efectos').toggle('blind');
		//$('.caja-efectos').toggle('slide');
		//$('.caja-efectos').toggle('drop');
		//$('.caja-efectos').toggle('fold');
		//$('.caja-efectos').toggle('puff');
		//$('.caja-efectos').toggle('scale');
		//$('.caja-efectos').toggle('shake');
		$('.caja-efectos').toggle('shake',5000); // efecto | velocidad ('normal', 'fast', 5000ms) 
		

	});
});