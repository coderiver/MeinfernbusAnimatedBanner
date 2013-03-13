$(document).ready(function() {
	$('.bus .bus__close').click(function() {
		$(this).parent('.bus').remove();
	});
	function bus(){$('.bus').removeClass('bus_ride').addClass('bus_stay');}
	setTimeout(bus, 2000)
});