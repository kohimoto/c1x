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
	var target_idsp6 = $('.line_idsp6').offset().top+200;
	var target_idsp7 = $('.line_idsp7').offset().top+200;
	var point_idsp1 = $('.point_idsp1').offset().top+200;
	var point_idsp2 = $('.point_idsp2').offset().top+200;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = false;
	var flg4 = true;
	var flg5 = true;
	var flg6 = false;
	var flg7 = false;
	var p_flg1 = false;
	var p_flg2 = false;
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
	var mySVG6 = $('.line_idsp6').drawsvg({
		duration: 2000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});
	var mySVG7 = $('.line_idsp7').drawsvg({
		duration: 2000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});
	var mySVG_p1 = $('.point_idsp1').drawsvg({
		duration: 2000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});
	var mySVG_p2 = $('.point_idsp2').drawsvg({
		duration: 2000,
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
		if(startPoint > target_idsp6){
		if(flg6 == false){
		flg6 = false; 
		mySVG6.drawsvg('animate');
		flg6 = true;

		}
		}
		if(startPoint > target_idsp7){
		if(flg7 == false){
		flg7 = false; 
		mySVG7.drawsvg('animate');
		flg7 = true;

		}
		}
		if(startPoint > point_idsp1){
		if(p_flg1 == false){
		p_flg1 = false; 
		mySVG_p1.drawsvg('animate');
		p_flg1 = true;

		}
		}
		if(startPoint > point_idsp2){
		if(p_flg2 == false){
		p_flg2 = false; 
		mySVG_p2.drawsvg('animate');
		p_flg2 = true;

		}
		}




	});
	}

	//page direct 
	if($('.line_direct1').length){
	var target_direct1 = $('.line_direct1').offset().top+200;
	var target_direct3 = $('.line_direct3').offset().top+300;
	var target_direct4 = $('.line_direct4').offset().top+300;
	var target_direct6 = $('.line_direct6').offset().top+300;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = false;
	var flg4 = true;
	var flg5 = true;
	var flg6 = false;
	var flg7 = true;
	var scrollTop = 0;
	var startPoint = 0;

	var mySVG = $('.line_direct1').drawsvg({
		duration: 1000,
		stagger: 400,
		easing: 'swing',
		reverse: false
	});
	var mySVG2 = $('.line_direct2').drawsvg();
	var mySVG3 = $('.line_direct3').drawsvg({
		duration: 2000,
		stagger: 400,
		easing: 'swing',
		reverse: false,
		callback: function(){
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
		}else if(flg7 == false){
		mySVG7.drawsvg('animate');
		flg7 = true;

		}
		}
	});
	var mySVG4 = $('.line_direct4').drawsvg({
		duration: 900,
		stagger: 400,
		easing: 'swing',
		reverse: false,
	});
	var mySVG5 = $('.line_direct5').drawsvg({
		duration: 700,
		stagger: 400,
		easing: 'swing',
		reverse: false,
	});
	var mySVG6 = $('.line_direct6').drawsvg({
		duration: 700,
		stagger: 400,
		easing: 'swing',
		reverse: false,
	});
	var mySVG7 = $('.line_direct7').drawsvg({
		duration: 2000,
		stagger: 400,
		easing: 'swing',
		reverse: false,
	});
	
	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;

		if(startPoint > target_direct1){
		if(flg1 == false){
		mySVG.drawsvg('animate');
		flg1 = true;

		}
		}
		if(startPoint > target_direct3){
		if(flg3 == false){
		flg4 = false;
		mySVG3.drawsvg('animate');
		flg3 = true;

		}
		}
		if(startPoint > target_direct6){
		if(flg6 == false){
		flg7 = false;
		mySVG6.drawsvg('animate');
		flg6 = true;

		}
		}


	});

	}
});
