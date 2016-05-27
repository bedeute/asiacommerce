/* jshint devel:true */

/*!
 * Asiacommerce Scripts
 * Author: bedeute
 * Email: bedeute@gmail.com
 */

(function($) {
	'use strict';


// Code here will be linted with JSHint.
/* jshint ignore:start */

// Increase & decrease product item
function plusOne(field) {
	var nr = parseInt(document.getElementById(field).value);
	document.getElementById(field).value = nr + 1;
}

function minOne(field) {
 var nr = parseInt(document.getElementById(field).value);
 if (nr > 0) {
   if( (nr - 1) > 0) {
     document.getElementById(field).value = nr - 1;
   }
 }
}
// Code here will be ignored by JSHint.
/* jshint ignore:end */


// responsive thing 
$(document).ready(function() {
  // Optimalisation: Store the references outside the event handler:
  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.width();
  	var $purcaseSizeOpt = $('.ac-product-info-size .uk-button, .ac-product-info-shipping-method .uk-button');
  	var $cartItemAct = $('.ac-cart-body-item.ac-cart-act a.uk-button');
    var $dashboardSidebar = $('#ac-dashboard-sidebar-offcanvas');
    var $categoryMenu = $('#ac-category-menu');
    var flayerTarget;
    if (windowsize > 768) {
    	var $purchaseOffcanvas = $('.ac-purchase-offcanvas');
			if ($purchaseOffcanvas.hasClass('reveal')) {
				$purchaseOffcanvas.removeClass('reveal');
				$('body').removeClass('ac-purchase-offcanvas-bg');
			}
      $dashboardSidebar.removeClass('uk-offcanvas');
      $dashboardSidebar.children('.ac-dashboard-sidebar-list').removeClass('uk-offcanvas-bar');
      $dashboardSidebar.children('.ac-dashboard-sidebar-list').addClass('go-wide');
    } else {
      $('.ac-flayer-trigger').click(function(){
        UIkit.offcanvas.hide();
      });
      $dashboardSidebar.addClass('uk-offcanvas');
      $dashboardSidebar.children('.ac-dashboard-sidebar-list').addClass('uk-offcanvas-bar');
      $dashboardSidebar.children('.ac-dashboard-sidebar-list').removeClass('go-wide');
      $purcaseSizeOpt.removeClass('uk-button-small');

      // flayer behaviour code here
      $('.ac-flayer-trigger').click(function(e) {
        flayerTarget  = $(this).data('flayer-target');

        e.preventDefault();

        if ($(flayerTarget).hasClass('reveal')) {
          $(flayerTarget).removeClass('reveal');
        } else {
          $(flayerTarget).addClass('reveal'); 
        }
      });

      $('.ac-flayer .ac-close').click(function(e){
        e.preventDefault();
        $(flayerTarget).removeClass('reveal');
      });

      $('.ac-flayer .uk-nav-sub').addClass('uk-hidden');
      
      $('.ac-flayer .ac-header-nav-category-item').click(function(e) {
        e.preventDefault();
        $(this).siblings('.uk-nav-sub').toggleClass('uk-hidden');
        $(this).parents().siblings().children('.uk-nav-sub').addClass('uk-hidden');
      })
      // end of flayer behaviour code

      $.UIkit.sticky('.ac-top-section', {top: -230});

    }

    if (windowsize > 480) {
      $cartItemAct.addClass('uk-button-small');
    } else {
      $cartItemAct.removeClass('uk-button-small');
    }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
});

$(function(){
  $('#ac-category-menu-button')
})

// category menu behaviour
$(function() {
  var timeout;
  
  
  $('#ac-category-menu-button, .ac-category-menu').hover(function() {
    clearTimeout(timeout);
  
    if ($('.ac-top-section').hasClass('uk-active')) {
      $('.ac-category-menu').stop().addClass('get-fixed');
    }
  
  }, function(){
    timeout = setTimeout(function(){
      $('.ac-category-menu').stop().removeClass('get-fixed');
      }, 300);
  });

  
  $('#ac-category-menu-button').click(function(e) {

    if ($('.ac-category-menu').hasClass('get-fixed')) {
      $('.ac-category-menu').removeClass('get-fixed')
    } else {
      $('.ac-category-menu').addClass('get-fixed')
    }
  });

});



})(jQuery);