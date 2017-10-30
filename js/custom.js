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
//	var mySVG = $('.line_issp').drawsvg();
//	mySVG.drawsvg('animate');

	/** issp **/
	//var target_issp = $('.line_issp1').offset().top;
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
//	mySVG2.drawsvg('animate');
		flg = true;

		}
		}


	});

});
