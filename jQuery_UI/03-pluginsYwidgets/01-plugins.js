$(document).ready(function(){
	//tooltip
	$(document).tooltip();

	//Cuadros de dialogo - dialog
	$('#lanzar-popup').click(function(){
		$('#popup').dialog();	
	});


	//DATEPICKER - CALENDARIO
	$('#calendario').datepicker();

	//TABS
	//$('#pestanas').tabs(); //Normal
	$('#pestanas').tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#pestanas li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

});
