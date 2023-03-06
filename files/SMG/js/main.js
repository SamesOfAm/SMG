jQuery(document).ready(function($) {
	var action = 'click';
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		action = 'click';
	}
	var owl1 = jQuery('.header-slider');
	if(jQuery('.header-slider').length > 0){
		owl1.owlCarousel({
			dots: (jQuery(".header-slider .image_container").length > 1) ? true: false,
			loop:(jQuery(".header-slider .image_container").length > 1) ? true: false,
			nav:(jQuery(".header-slider .image_container").length > 1) ? true: false,
			autoHeight: false,
			responsive:{
				0:{
					items:1,
					navText: '',
					autoplay: true,
					autoplayTimeout:7000,
					navText : ['<img src="files/SMG/img/arrleft1.png" alt="" />','<img src="files/SMG/img/arrright1.png" alt="" />']
				}
			}
		});
	}

	if(jQuery('.image-slider').length > 0){
		jQuery('.image-slider').owlCarousel({
			dots: true,
			loop:true,
			nav:true,
			autoHeight: true,
			responsive:{
				0:{
					items:1,
					navText: '',
					autoplay: true,
					autoplayTimeout:7000,
					navText : ['<img src="files/SMG/img/arrleft4.png" alt="" />','<img src="files/SMG/img/arrright4.png" alt="" />']
				}
			}
		});
	}

	/*var scroll = jQuery(window).scrollTop();
	if (scroll > 0 && !jQuery('body').hasClass('hasmenu')) {
		jQuery("body").addClass("hassticky");
	} else {
		jQuery("body").removeClass("hassticky");
	}

	jQuery(window).scroll(function() {
		var scroll = jQuery(window).scrollTop();
		if (scroll > 0 && !jQuery('body').hasClass('hasmenu')) {
			jQuery("body").addClass("hassticky");
		} else {
			jQuery("body").removeClass("hassticky");
		}

		if (scroll > 400) {
			jQuery(".arr-top").addClass("arrow-show");
		} else {
			jQuery(".arr-top").removeClass("arrow-show");
		}
	});*/


	jQuery('body').on(action,'.resp-menu-button', function () {
		jQuery('html, body').animate({scrollTop:0},0);
		jQuery('#header .mod_navigation').toggle();
		jQuery("body").toggleClass("hasmenu");
		if(jQuery("body").hasClass("hasmenu")){
			jQuery(this).find('img').attr("src", "/files/SMG/img/close.png");
		} else{
			jQuery(this).find('img').attr("src", "/files/SMG/img/burger.png");
		}
	});

	if(jQuery('.header-slider').length > 0){
		jQuery('.mod_breadcrumb').insertAfter('.header-slider');
		jQuery('.header-circle').insertAfter('.header-slider');
		jQuery('.blue-circle-mobile').insertAfter('.header-slider');
		jQuery('.blue-circle-mobile').insertAfter('.header-image');
	} else if(jQuery('.header-image').length > 0){
		jQuery('.mod_breadcrumb').insertAfter('.header-image');
		jQuery('.header-circle').insertAfter('.header-image');
		jQuery('.blue-circle-mobile').insertAfter('.header-slider');
		jQuery('.blue-circle-mobile').insertAfter('.header-image');
	} else {
		jQuery('.header-circle').hide();
	}

	jQuery('#header .mod_navigation .level_1 > li.col1').wrapAll('<div class="menu-col menu-col-1"></div>');
	jQuery('#header .mod_navigation .level_1 > li.col2').wrapAll('<div class="menu-col menu-col-2"></div>');
	jQuery('#header .mod_navigation .level_1 > li.col3').wrapAll('<div class="menu-col menu-col-3"></div>');

	//jQuery('.level_1 > li').each(function(){
	//	if(jQuery(this).find(''))
	//});

	jQuery('#header .mod_navigation').appendTo('#header');
	jQuery('.aktuelles_short_wrapper .ce_image.first').prependTo('.aktuelles_short');
	jQuery('#footer .footer-bottom').insertAfter('#footer > .inside');
	jQuery('#footer .mod_form').appendTo('#footer .footer-bottom .inner');
	jQuery('#footer .mod_customnav').appendTo('#footer .footer-bottom .inner');
	jQuery('#footer .inner').append('<div class="clearfix"></div>');

	setTimeout(function(){
		jQuery('.rvs-nav-container-dots').append(jQuery('.rvs-nav-container').clone());
		jQuery('.rvs-nav-container-dots .rvs-nav-item').removeAttr('style');
		jQuery('.rvs-nav-container-dots .rvs-nav-stage').removeAttr('style');
		jQuery('.rvs-nav-container-dots .rvs-nav-item:first-child').addClass('isactive');
		jQuery('body').find('.ce_slider_text').each(function(){
			if(jQuery(this).find('p').width() < 100){
				jQuery(this).find('p').hide();
			}
		});
	}, 1000);

	jQuery('body').on(action,'.rvs-nav-container-dots .rvs-nav-item', function () {
		jQuery(this).parent().find('.isactive').removeClass('isactive');
		jQuery(this).addClass('isactive');
		var cur_index = $(this).index();
		jQuery('.rvs-nav-container-wrapper .rvs-nav-item').eq(cur_index).trigger(action);
	});

	jQuery('body').on(action,'.rvs-nav-next', function () {
		if(jQuery('body').find('.rvs-nav-container-dots .isactive').length > 0){
			jQuery('body').find('.rvs-nav-container-dots .isactive').next().trigger(action);
			jQuery('.rvs-nav-next').removeClass('disabled');
			jQuery('.rvs-nav-prev').removeClass('disabled');
		}
		if(jQuery('body').find('.rvs-nav-container-dots .rvs-active').length > 0 && jQuery('body').find('.rvs-nav-container-dots .isactive').length == 0){
			jQuery('body').find('.rvs-nav-container-dots .rvs-active').next().trigger(action);
			jQuery('.rvs-nav-next').removeClass('disabled');
			jQuery('.rvs-nav-prev').removeClass('disabled');
		}
	});

	jQuery('body').on(action,'.rvs-nav-prev', function () {
		if(jQuery('body').find('.rvs-nav-container-dots .isactive').length > 0){
			jQuery('body').find('.rvs-nav-container-dots .isactive').prev().trigger(action);
			jQuery('.rvs-nav-next').removeClass('disabled');
			jQuery('.rvs-nav-prev').removeClass('disabled');
		}
		if(jQuery('body').find('.rvs-nav-container-dots .rvs-active').length > 0 && jQuery('body').find('.rvs-nav-container-dots .isactive').length == 0){
			jQuery('body').find('.rvs-nav-container-dots .rvs-active').prev().trigger(action);
			jQuery('.rvs-nav-next').removeClass('disabled');
			jQuery('.rvs-nav-prev').removeClass('disabled');
		}
	});

	responsive();

	jQuery( window ).resize(function() {
		owl1.trigger('refresh.owl.carousel');
		responsive();
	});
});

function responsive() {

	if(window.matchMedia('(max-width: 1290px)').matches){
		jQuery('.header-slider .owl-nav').appendTo('.blue-circle-mobile');
	} else {
		jQuery('.blue-circle-mobile .owl-nav').appendTo('.header-slider .owl-controls');
	}

	if(window.matchMedia('(max-width: 991px)').matches){
		jQuery('.white1_short_wrapper .row2 .image_container').addClass('rr2').appendTo('.white1_short_wrapper');
		jQuery('.white1_short_wrapper .row1 .image_container').addClass('rr1').appendTo('.white1_short_wrapper');
	} else {
		jQuery('.white1_short_wrapper .image_container.rr1').prependTo('.white1_short_wrapper .row1 .inside-wrapper');
		jQuery('.white1_short_wrapper .image_container.rr2').prependTo('.white1_short_wrapper .row2 .inside-wrapper');
	}


	if(window.matchMedia('(max-width: 875px)').matches){
		jQuery('.footer-social-icons').addClass('moved').insertAfter('.footer-address');
		jQuery('.footer-bottom .mod_form').insertAfter('.footer-bottom  .mod_customnav');
	} else {
		jQuery('.footer-social-icons.moved').removeClass('moved').insertAfter('#footer > .inside > .clearfix');
		jQuery('.footer-bottom .mod_form').insertBefore('.footer-bottom  .mod_customnav');
	}

	if(window.matchMedia('(min-width: 876px)').matches){
		jQuery('.footer-logos').css('height', jQuery('.footer-address').height());
	} else {
		jQuery('.footer-logos').removeAttr('style');
	}

    if(window.matchMedia('(max-width: 680px)').matches){
      startCarousel();
    } else {
      stopCarousel();
    }
}


function startCarousel(){
  jQuery(".publikationen_short .mod_newslist").owlCarousel({
     navigation : true, // Show next and prev buttons
     slideSpeed : 500,
     autoplay:true,
     items : 1,
     itemsDesktop : false,
     itemsDesktopSmall : false,
     itemsTablet: false,
     itemsMobile : false,
     loop:true,
     nav:true,
	 navText : ['<img src="files/SMG/img/arrleft4.png" alt="" />','<img src="files/SMG/img/arrright4.png" alt="" />']
  });
}
function stopCarousel() {
	var owl = jQuery('.publikationen_short .owl-carousel');
	owl.trigger('destroy.owl.carousel');
	jQuery('.owl-stage-outer > .layout_short_publikationen:first-child').unwrap();
}

if(document.querySelector('.mod_search')) {
	const searchModule = document.querySelector('.mod_search');
	console.log(searchModule);
}
