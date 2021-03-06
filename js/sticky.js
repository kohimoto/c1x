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
			$('.navbar-shrink h1 img').attr('src','/images/common/c1x_logo.png');
		}
		else {
			$('.wrap-head').removeClass('navbar-shrink');
			$('.head-top .head-home h1 img').attr('src','/images/common/c1x_logo_white.png');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
