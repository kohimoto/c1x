$(function(){


		// Animations
	$(window).scroll(function () {
		if($(window).scrollTop() > 2400) {
			$('#move_idsp1').animate({'left':'-200px'});
		}
		if($(window).scrollTop() > 3200) {
			$('#move_idsp2').animate({'right':'-200px'});
		}
		if($(window).scrollTop() > 2000) {
			$('#move_headertag').animate({'right':'-200px'});
		}
		if($(window).scrollTop() > 2000) {
			$('#move_e-commerce').animate({'right':'-100px'});
		}
	});

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
				}, 100);
			}
		} , { offset: '85%' } );
	};


});
