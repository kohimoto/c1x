$(function(){
	/**
		SP menu toggle
					**/
	$('.nav-mark').click(function(){
		$('#site-navigation .container').toggleClass('openNav');
		$('.head-top').toggleClass('openNav');
		$('.head-top').toggleClass('openIndex');
	});

	$('.menu-item.services').click(function(){
		$('.menu-item.opener').slideToggle();
		$(this).toggleClass('child-open');
	});

});
