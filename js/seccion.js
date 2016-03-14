$(document).ready(function(){
	var estado = false;
 
	$('#main-section').on('click',function(){
		$('.main-section').slideToggle();
 
		if (estado == true) {
			$(this).text("Abrir");
			$('body').css({
				"overflow": "auto"
			});
			estado = false;
		} else {
			$(this).text("Cerrar");
			$('body').css({
				"overflow": "hidden"
			});
			estado = true;
		}
	});
});