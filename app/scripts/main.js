/* jshint devel:true */

// Increase & decrease product item
function plusOne(field) {
 nr = parseInt(document.getElementById(field).value);
 document.getElementById(field).value = nr + 1;
}
 
function minOne(field) {
 nr = parseInt(document.getElementById(field).value);
 if (nr > 0) {
   if( (nr - 1) > 0) {
     document.getElementById(field).value = nr - 1;
   }
 }
}


	// responsive thing 
	$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
      var windowsize = $window.width();
    	var $purcaseSizeOpt = $('.ac-product-info-size .uk-button, .ac-product-info-shipping-method .uk-button')
    	var $cartItemAct = $('.ac-cart-body-item.ac-cart-act a.uk-button')
      if (windowsize > 768) {
      	var $purchaseOffcanvas = $('.ac-purchase-offcanvas');
				if ($purchaseOffcanvas.hasClass('reveal')) {
					$purchaseOffcanvas.removeClass('reveal')
					$('body').removeClass('ac-purchase-offcanvas-bg')
				}
      } else {
      	$purcaseSizeOpt.removeClass('uk-button-small')
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