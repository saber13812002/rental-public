(function($){
	"use strict";
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

    // Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	var swiper = new Swiper(".feedbackSwiperSlides", {
		loop: true,
        autoplay: false,
		centeredSlides: true,
		navigation: {
            nextEl: ".customTwo",
            prevEl: ".customOne",
        },
        breakpoints: {
            0: {
				slidesPerView: 1,
            },
            576: {
				slidesPerView: 1,
				spaceBetween: 25,
				centeredSlides: false,
            },
            768: {
				slidesPerView: 1,
            },
            992: {
				slidesPerView: 1,
            },
            1200: {
				slidesPerView: 1,
            },
            1400: {
				slidesPerView: 1,
            },
        },
    });


}(jQuery));
