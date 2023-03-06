jQuery(document).ready(function($) {
    jQuery('#header .mod_navigation').appendTo('#header');
    jQuery('.aktuelles_short_wrapper .ce_image.first').prependTo('.aktuelles_short');
    jQuery('#footer .footer-bottom').insertAfter('#footer > .inside');
    jQuery('#footer .mod_form').appendTo('#footer .footer-bottom .inner');
    jQuery('#footer .mod_customnav').appendTo('#footer .footer-bottom .inner');
    jQuery('#footer .inner').append('<div class="clearfix"></div>');
    jQuery('.mod_breadcrumb').insertAfter(document.querySelector('.mod_article'));
    setTimeout(function () {
        jQuery('.rvs-nav-container-dots').append(jQuery('.rvs-nav-container').clone());
        jQuery('.rvs-nav-container-dots .rvs-nav-item').removeAttr('style');
        jQuery('.rvs-nav-container-dots .rvs-nav-stage').removeAttr('style');
        jQuery('.rvs-nav-container-dots .rvs-nav-item:first-child').addClass('isactive');
        jQuery('body').find('.ce_slider_text').each(function () {
            if (jQuery(this).find('p').width() < 100) {
                jQuery(this).find('p').hide();
            }
        });
    }, 1000);

    if(window.matchMedia('(min-width: 876px)').matches){
        jQuery('.footer-logos').css('height', jQuery('.footer-address').height());
    } else {
        jQuery('.footer-logos').removeAttr('style');
    }
    if(jQuery('.header-slider').length > 0){
        jQuery('.mod_breadcrumb').insertAfter('.header-slider');
        jQuery('.header-circle').insertAfter('.header-slider');
        jQuery('.blue-circle-mobile').insertAfter('.header-slider');
        jQuery('.blue-circle-mobile').insertAfter('.header-image');
    } else {
        jQuery('.header-circle').hide();
    }
});
