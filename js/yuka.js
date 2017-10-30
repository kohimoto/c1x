$(function(){
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
//		if($(window).scrollTop() > 600) {
//			$('#move2').animate({'left':'0px'});
//		}
//		if($(window).scrollTop() > 1000) {
//			$('#move3').animate({'right':'100px'});
//		}
	});
});
