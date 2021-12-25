(function ($) {
	"use strict";

	$('.reviewers-area, .acchievements-area, .youtube-reviews').owlCarousel({
      loop:true,
      items:4,
      smartSpeed: 500,
      autoplay: false,
      autoWidth:true,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 4
        },
        480: {
          items: 5
        },
        600: {
          items: 7
        },
        800: {
          items: 8
        },
        1200: {
          items: 10
        }
      }

	  });


	$('.products-area, .jobs-area, .places-area').owlCarousel({
		loop:true,
		items:5,
		smartSpeed: 500,
		autoplay: false,
		autoWidth:true,
		margin: 15,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			576: {
				items: 2
			},
			600: {
				items: 3
			},
			800: {
				items: 4
			},
			1200: {
				items: 5
			}
		}

	  });

})(jQuery);

