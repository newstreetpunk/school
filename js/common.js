jQuery(function($) {
	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.header__bottom').slideToggle(200);
	});
});
