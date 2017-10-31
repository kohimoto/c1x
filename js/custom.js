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
	var flg = false;
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
		var mySVG2 = $('.line_issp').drawsvg();
	
	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;
		if(startPoint > target_issp){
		if(flg == false){
		mySVG.drawsvg('animate');
		flg = true;

		}
		}


	});

	}

	//page idsp 

	if($('.line_idsp1').length){
	var target_idsp = $('.line_idsp1').offset().top+200;
	var target_idsp3 = $('.line_idsp3').offset().top+200;
	var target_idsp4 = $('.line_idsp4').offset().top+200;
	var windowHeight = $(window).height();
	var flg = false;
	var flg_stg2 = false;
	var flg_stg2_2 = false;
	var scrollTop = 0;
	var startPoint = 0;

	var flg2 = false;

	var mySVG = $('.line_idsp1').drawsvg({
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
	var mySVG2 = $('.line_idsp2').drawsvg();
	var mySVG3 = $('.line_idsp3').drawsvg({
		duration: 1000,
		stagger: 5000,
		easing: 'swing',
		reverse: false
	});
	var mySVG4 = $('.line_idsp4').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});
	
	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;
		if(startPoint > target_idsp){
		if(flg == false){
		mySVG.drawsvg('animate');
		flg = true;

		}
		}
		if(startPoint > target_idsp3){
		//Whats C1X iDSP
		if(flg_stg2 == false){
		mySVG3.drawsvg('animate');
		flg_stg2 = true;

		}
		}

		if(startPoint > target_idsp4){
		//Whats C1X iDSP
		if(flg_stg2_2 == false){
		mySVG4.drawsvg('animate');
		flg_stg2_2 = true;

		}

		}




	});
	}
});
