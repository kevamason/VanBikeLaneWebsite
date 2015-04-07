$(document).ready(function(){

	var $window = $(window); //You forgot this line in the above example

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {
			var yPos = -( ($window.scrollTop())/ $bgobj.data('speed'));
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
	});

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top-30
		}, 500, 'swing', function () {
			window.location.hash = target;
			});
	});
});