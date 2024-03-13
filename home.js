document.addEventListener("DOMContentLoaded", function () {
  const serviceButtons = document.querySelectorAll(".button-inner");

  serviceButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const serviceName = button.parentElement.querySelector("h3").textContent;
      const url = `./projects/content.html?service=${encodeURIComponent(serviceName)}`;
      window.location.href = url;
    });
  });
});



(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// SVG Detection and replace with png if not compatible
		if(!Modernizr.svg) {
		    $('img[src*="svg"]').attr('src', function() {
		        return $(this).attr('src').replace('.svg', '.png');
		    });
		}
		
	});

	//initialise Stellar
	// $.stellar();

	//IE & Edge Fixes go here: 

	var uA = window.navigator.userAgent,
    isIE = /msie\s|trident\/|edge\//i.test(uA) && !!(document.uniqueID || document.documentMode || window.ActiveXObject || window.MSInputMethodContext),
	checkVersion = (isIE && +(/(edge\/|rv:|msie\s)([\d.]+)/i.exec(uA)[2])) || NaN;

	if(checkVersion || navigator.appVersion.indexOf('Edge') > -1){
		$('header nav li').hover(
			function(){
				$(this).children('.sub-menu').show();
			},
			function(){
				$(this).children('.sub-menu').hide();
			}
		);
		
	}
	else{
		$(document).ready(function(){
			$(".paroller, [data-paroller-factor]").paroller({
				factor: 0.1,            // multiplier for scrolling speed and offset
				factorXs: 1,           // multiplier for scrolling speed and offset
				type: 'foreground',     // background, foreground
				direction: 'vertical', // vertical, horizontal
			//	transition: 'transform 0.2s ease-in' // CSS transition
			});
		});
		
	}


	

	// Scale images for responsive full-screen

    function scaleImages() {
        $('.cover-image').each(function () {

            var image = $(this);

            var container = image.closest('div');
            var imageWidth = image.attr('data-width');
            var imageHeight = image.attr('data-height');

            var imageRatio = imageWidth / imageHeight;

            var containerRatio = container.width() / container.outerHeight();
            if (imageRatio > containerRatio) {
                image.removeClass('wider taller equal').addClass('wider');
            } else if (imageRatio < containerRatio) {
                image.removeClass('wider taller equal').addClass('taller');
            } else if (imageRatio == containerRatio) {
                image.removeClass('wider taller equal').addClass('equal');
            } else {
                image.removeClass('wider taller equal');
            }
        });
	}
	
	$(document).ready(function(){
		scaleImages();
	});

	$(window).on('load', function () {
			scaleImages();
	});

	$(window).resize(function () {
			scaleImages();
	});

	//mobile menu toggle
	$('.menu-toggle').click(function(e){
		e.preventDefault();
		$('.mobile-menu').toggleClass('active');
		$('body').toggleClass('locked');
	});


	//change colour of rendered svgs to be as specified by PHP function
	$(document).ready(function(){
		$('.svg-wrapper').each(function(){
			var color = $(this).attr('data-color');
			$(this).find('svg g, svg path, svg circle').each(function(){
				var svgColor = $(this).attr('fill');
				if(svgColor != 'none' || svgColor != undefined){
					$(this).attr('fill', color);
					$(this).addClass('color-element');
				}
			})
			$(this).find('svg style').remove();

		});
	});


	//tile-hover
	$('.post-tile, .case-tile').hover(
		function(){
			$( this ).addClass( "hover" );
		}, 
		function(){
			$( this ).removeClass( "hover" );
		}
	);

	//custom select styles
	$("select").simpleselect();

	//image-gallery toggles
	$('.image-single .expand-img-info').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.img-info').toggleClass('active');
	});
	$('.caption-toggle a').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$(this).text('Hide Photo Credits');
		}
		else{
			$(this).text('Show Photo Credits');
		}
		var caps = $(this).parent().next('.wrapper').find('.inner-caption');
		caps.each(function(){
			$(this).fadeToggle(100);
		})
	});



	//homepage banner sliders
	$('.header-slides-image').slick({
		asNavFor: '.header-slides-text',
		arrows: false,
		fade: true,
		autoplay: true, 
		autoplaySpeed: 8000,
		speed: 800,
	});
	$('.header-slides-text').slick({
		asNavFor: '.header-slides-image',
		arrows: false,
		speed: 600,
		dots: true,
	});


	$('.home-post-wrapper').each(function(){
		$(this).slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			responsive: [
				{
				  breakpoint: 770,
				  settings: {
					slidesToShow: 1,
					infinite: true,
					variableWidth: true,
					arrows: false,
					dots: false,
				  }
				},
				
			  ]
		});
	});

	$('.related-wrapper .wrapper').each(function(){
		$(this).slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: true,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
					arrows: false,
					variableWidth:true,
					
				  }
				},
				
			  ]
		});
	});

	$('.logo-slider-wrapper').each(function(){
		$(this).slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			adaptiveHeight: true,
			autoplay: true, 
			autoplaySpeed: 4000,
			speed: 500,
			arrows: false,
			dots: true,
			responsive: [
				{
				  breakpoint: 770,
				  settings: {
					slidesToShow: 2,
					
				  }
				},
				
			  ]
		});
	});




	//process sliders

		//icons slider

	$(document).ready(function(){
		$('.process-slider .icons').slick({
			slidesToShow: 5,
			
			  asNavFor: '.process-slider .info',
			  infinite: false,
			  responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					arrows: false,
					slidesToShow: 1,
					variableWidth: true,
				  }
				},
			  ]
		});
	});

	//info slider

	$(document).ready(function(){
		$('.process-slider .info').slick({
			asNavFor: '.process-slider .icons',
			infinite: false,
			appendArrows: $('.arrow-box'),
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="bg"></span><span class="value">Previous Stage</span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="bg"></span><span class="value">Next Stage</span></button>',
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				arrows: false,
			  }
			},
		  ]
		});
	});

	var icons = $('.process-slider .stage');

	$(icons).click(function(){
		
		var button = icons.index($(this));
		$('.process-slider .info').slick('slickGoTo', button);
	});



	//animisition
	$(document).ready(function() {
		$(".animsition").animsition({
		  inClass: 'fade-in',
		  outClass: 'fade-out',
		  inDuration: 400,
		  outDuration: 400,
		  //linkElement: '.animsition-link',
		  linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([data-event="click"])',
		  loading: true,
			loadingParentElement: 'body', //animsition wrapper element
			loadingClass: 'animsition-loading',
			loadingInner: '', // e.g '<img src="loading.svg" />'
		  timeout: false,
		  timeoutCountdown: 5000,
		  onLoadEvent: true,
		  browser: [ 'animation-duration', '-webkit-animation-duration'],
		  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		  overlay : false,
		  overlayClass : 'animsition-overlay-slide',
		  overlayParentElement : 'body',
		  transition: function(url){ window.location.href = url; }
		});
		});
		


	


	
})(jQuery, this);





