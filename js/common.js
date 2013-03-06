$(document).ready(function() {
	$('.bus .bus__close').click(function() {
		$(this).parent('.bus').remove();
	});

	$('.bus').hover(
		function () {
			$(this).addClass('paused');
			$(this).children().children('.bus__wheel1').addClass('paused');
			$(this).children().children('.bus__wheel2').addClass('paused');
		},
		function () {
			$(this).removeClass('paused');
			$(this).children().children('.bus__wheel1').removeClass('paused');
			$(this).children().children('.bus__wheel2').removeClass('paused');
		}
	);
});