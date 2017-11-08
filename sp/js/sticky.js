//$(function(){
//
//});
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		//header = $( '.head-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 200 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$('.wrap-head').addClass("navbar-shrink fadeout");
		}
		else {
			$('.wrap-head').removeClass('navbar-shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
