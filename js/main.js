;(function($){
	$(document).ready(function(){

$('.slick-slide [aria-describedby*="slick-slide00"]').addClass( "myClass" );


		var $slider = $('.ba-team-slider'),
		$prev = $('.slick-prev', $slider),
		$next = $('.slick-next', $slider);

		var $slider2 = $('.news-slider'),
		$prev2 = $('.slick-prev2', $slider2),
		$next2 = $('.slick-next2', $slider2);

		//slider init
		$slider.slick({
			dots: false,
			prevArrow:$prev,
			nextArrow:$next,
			slidesToShow: 3,
			slide: '.slider',
			responsive: [
			{
				breakpoint: 893,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '1px',
					slidesToShow: 1
				}
			}
			]
		});

		//slider2 init
		$slider2.slick({
			dots: false,
			prevArrow:$prev2,
			nextArrow:$next2,
			slidesToScroll: 1,
			slide: '.news-slide',
			centerPadding: '1px',
			slidesToShow: 3,
			centerMode: true,
			responsive: [
			{
				breakpoint: 853,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '1px',
					slidesToShow: 1
				}
			}
			]
		});

	});
})(jQuery);


