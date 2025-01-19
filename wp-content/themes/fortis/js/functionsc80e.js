;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	// Initialize Map
	window.initialize = function() {

        if( $('#gmap').length > 0 ) {

			var map;
			var myLat = $('#gmap').data('lat');
			var myLng = $('#gmap').data('lng');
			var center = new google.maps.LatLng(myLat, myLng);
			var styles = [{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"saturation":"22"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#eae8e7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"saturation":"-100"}]},{"featureType":"poi.business","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.school","elementType":"labels.icon","stylers":[{"visibility":"on"},{"invert_lightness":true}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#0046ff"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#0a8998"},{"visibility":"on"},{"lightness":"-36"},{"gamma":"1.95"}]}];

			var mapOptions = {
			    zoom: 17,
			    center: center,
			    dragable: true,
			    scrollwheel: false,
			    styles: styles
			};

			var contentString = '<div id="content"><h6>At Integrated Vaults</h6><p>Level 10, 227 Collins St</p><p>Manhattan 3000</p><a href="#" id="map-directions">Get directions...</a>';

			var infowindow = new google.maps.InfoWindow({
	          content: contentString
	        });  

			map = new google.maps.Map(document.getElementById('gmap'),
		    	mapOptions);

			var marker = new google.maps.Marker({
		    	position: center,
		    	map: map,
		    	icon: '/wp-content/themes/fortis/images/pin.png'
			});

			marker.addListener('click', function() {
	          infowindow.open(map, marker);
	        });

			google.maps.event.addDomListener(window, 'load', initialize);			
		}
	} 

	$doc.ready(function() {
		// Init Home Slider
		if( $('.slider-home').length ) {
			$('.slider-home .owl-carousel').owlCarousel({
				items: 1,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed: 500,
				mouseDrag: false
			});
		}

		// Accordion
		$('.accordion-head').on('click', function() {
			$(this).toggleClass('active')
				.closest('.accordion-section').siblings().find('.accordion-head').removeClass('active');

			$(this).siblings('.accordion-body').slideToggle()
				.closest('.accordion-section').siblings().find('.accordion-body').slideUp();
		});

		// Select Placeholder Color
		$('select').on('change', function() {
			$(this).addClass('selected');
		});

		// Prepare Gravity Form Submit Buttons
		if( $('.form .gform_footer .gform_button').length ) {
			$('.form .gform_footer .gform_button').each(function() {
				$(this).wrap('<div class="btn"><span></span></div>');
				$('<i class="fa fa-lock"></i>').insertBefore($('.form .gform_footer .gform_button'))
			});
		}

		// Toggle Mobile Navigation
		$('.btn-nav').on('click', function(event) {
			event.preventDefault();

			$(this).toggleClass('active');
			$('.wrapper').toggleClass('show-nav');
		});

		$win.on('load scroll', function() {
			if( $win.scrollTop() > 0 ) {
				$('.header').addClass('shadow');
			} else {
				$('.header').removeClass('shadow');				
			}
		});
	});
})(jQuery, window, document);
