$(function(){
	/**
		location lighting
					**/

	var handleHoverIn = function(){
		var alt;
		var light_name;
		alt = $(this).attr('class');
		light_name = '.around.around_'+ alt;
		if(light_name !== null){
		$(light_name).removeClass('disp_none');
		$(light_name).addClass('lighting');
		}
	}
	
	var handleHoverOut = function(){
		var alt;
		var light_name;
		alt = $(this).attr('class');
		light_name = '.around.around_'+ alt;
		if(light_name !== null){
		$(light_name).removeClass('lighting');
		$(light_name).addClass('disp_none');
		}
	}

	$('.location figure').hover(handleHoverIn, handleHoverOut);

	/**
		move line	
				**/
	//page issp 

	if($('.line_issp1').length){
	var target_issp = $('.line_issp1').offset().top+200;
	var windowHeight = $(window).height();
	var flg1 = false;
	var scrollTop = 0;
	var startPoint = 0;

	var flg2 = false;
	var mySVG = $('.line_issp1').drawsvg({
		duration: 1000,
		stagger: 400,
		easing: 'swing',
		reverse: false,
		callback: function(){
		if(flg2 == false){
		mySVG2.drawsvg('animate');
		flg2 = true;
		}
		}
	});
		var mySVG2 = $('.line_issp2').drawsvg();
	
	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;
		if(startPoint > target_issp){
		if(flg1 == false){
		mySVG.drawsvg('animate');
		flg1 = true;

		}
		}


	});

	}

	//page idsp 

	if($('.line_idsp1').length){
	var target_idsp1 = $('.line_idsp1').offset().top+200;
	var target_idsp3 = $('.line_idsp3').offset().top+200;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = false;
	var flg4 = true;
	var flg5 = true;
	var scrollTop = 0;
	var startPoint = 0;


	var mySVG = $('.line_idsp1').drawsvg({
		duration: 1000,
		stagger: 400,
		easing: 'swing',
		reverse: false
	});
	var mySVG2 = $('.line_idsp2').drawsvg();
	var mySVG3 = $('.line_idsp3').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false,
		callback: function next_4(){
		if(flg2 == false){
		mySVG2.drawsvg('animate');

		flg2 = true;
		}else if(flg4 == false){
		mySVG4.drawsvg('animate');
		flg4 = true;
		flg5 = false;

		}else if(flg5 == false){
		mySVG5.drawsvg('animate');
		flg5 = true;
		
		}
		}
	});
	var mySVG4 = $('.line_idsp4').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});
	var mySVG5 = $('.line_idsp5').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});
	
	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;
		if(startPoint > target_idsp1){
		if(flg1 == false){
		mySVG.drawsvg('animate');
		flg1 = true;

		}
		}
		if(startPoint > target_idsp3){
		if(flg3 == false){
		flg4 = false; 
		mySVG3.drawsvg('animate');
		flg3 = true;

		}
		}




	});
	}
});
