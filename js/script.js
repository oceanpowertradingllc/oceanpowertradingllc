(function($) { 

	"use strict";

$('[data-toggle="offcanvas"]').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
    });


	
	   /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });


    /* ================ Nav ================ */
    $('.fa-caret-down').on("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle('');
    });

	
	/* ================ Revolution Slider. ================ */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
	        startheight:600,
	        startwidth: 1140,
	        hideThumbs: 1000,
	        navigationType: 'none',
	        touchenabled: 'on',
	        onHoverStop: 'on',
	        navOffsetHorizontal: 0,
	        navOffsetVertical: 0,
	        dottedOverlay: 'none',
	        fullWidth: 'on'
		});
	}
	if($('.tp-banner-full').length > 0){
		$('.tp-banner-full').show().revolution({
			delay:6000,
	        hideThumbs: 1000,
	        navigationType: 'none',
	        touchenabled: 'on',
	        onHoverStop: 'on',
	        navOffsetHorizontal: 0,
	        navOffsetVertical: 0,
	        dottedOverlay: 'none',
	        fullScreen: 'on'
		});
	}
	
	/* ================ testimonials ================ */
$(document).ready(function() { 
  	$(".owl-carousel").owlCarousel({ 
      
	   loop:true,
		margin:10,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			700:{
				items:2,
				nav:false
			},
			1170:{
				items:3,
				nav:true,
				loop:false
			}
		}
	  
	  
  	}); 
	});	
	
	/* ================ sticky fix ================ */
	
	$(window).scroll(function() {
if ($(this).scrollTop() > 32){  
    $('.header').addClass("sticky");
  }
  else{
    $('.header').removeClass("sticky");
  }
});

	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){

		if ($(this).scrollTop() > 100) {

			$('.scrollToTop').fadeIn();

		} else {

			$('.scrollToTop').fadeOut();

		}

	});


	//Click event to scroll to top
	$('.scrollToTop').click(function(){

		$('html, body').animate({scrollTop : 0},800);

		return false;

	});


	
	
})(jQuery);