$(document).ready(function() {
	$('.bus .bus__close').click(function() {
		$(this).parent('.bus').remove();
	});

	$('.bus').hover(
		function () {
			$(this).addClass('paused');
		},
		function () {
			$(this).removeClass('paused');
		}
	);
});