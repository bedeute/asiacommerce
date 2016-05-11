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
        $dashboardSidebar.addClass('uk-offcanvas');
        $dashboardSidebar.children('.ac-dashboard-sidebar-list').addClass('uk-offcanvas-bar');
        $dashboardSidebar.children('.ac-dashboard-sidebar-list').removeClass('go-wide');
        $purcaseSizeOpt.removeClass('uk-button-small');
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



	})(jQuery);