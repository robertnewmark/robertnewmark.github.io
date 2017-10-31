$(document).ready(function() {
	$('.smoothScroll').click(function(e) {
		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		}, 750);

		e.preventDefault();
	});
});

$(document).click(function(e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');        
    }
});