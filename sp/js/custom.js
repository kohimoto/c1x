$(function(){
	/**
		SP menu toggle
					**/
	$('.nav-mark').click(function(){
		$('#site-navigation .container').toggleClass('openNav');
		$('.various').toggleClass('openNav');
	});
	$('.menu-item.services').click(function(){
		$('.menu-item.opener').slideToggle();
		$(this).toggleClass('child-open');
	});


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
		Header language area
					**/
	$('.cs-open-modal').click(function(){
		$('.cs-modal-content').toggle();
	});

	/**
		Rrequese demo area
					**/

	$('.request').click(function(){
		$('.request-area').fadeIn();
	});

	$('#thankarea').css('display','none');
	$('#request-form').submit(function(){
	var checkName = $('input[name=name]').val();
	var checkEmail = $('input[name=email]').val();
		if(!checkName){
			alert('please write name!');
			return false;
		}
		if(!checkEmail){
			alert('please write email!');
			return false;
		}
		var data ={name:checkName,email:checkEmail}
		$.ajax({
			type: "POST",
			url : "/mail1.php",
			data: data,
			success: function(data_r){
			$('#inputarea').css('display','none');
			$('#thankarea').css('display','block');
			}
		});
		return false;
	});


	/**
		move line
				**/
	//page issp
	if($('.line_issp1').length){
	var target_issp1 = $('.line_issp1').offset().top+200;
	var target_issp2 = $('.line_issp2').offset().top+200;
	var target_issp3 = $('.line_issp3').offset().top+270;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = true;
	var scrollTop = 0;
	var startPoint = 0;


	var mySVG = $('.line_issp1').drawsvg({
		duration: 1000,
		stagger: 400,
		easing: 'swing',
		reverse: false
	});
	var mySVG2 = $('.line_issp2').drawsvg();
	var mySVG3 = $('.line_issp3').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false,
		callback: function(){
		if(flg2 == false){
		mySVG2.drawsvg('animate');

		flg2 = true;
		flg3 = false;
		}else if(flg3 == false){
		mySVG3.drawsvg('animate');
		flg3 = true;
		}
		}
	});
	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;
		if(startPoint > target_issp1){
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
	var target_idsp2 = $('.line_idsp2').offset().top+200;
	var target_idsp3 = $('.line_idsp3').offset().top+270;
	var target_idsp4 = $('.line_idsp4').offset().top-550;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = true;
	var flg4 = false;
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
		callback: function(){
		if(flg2 == false){
		mySVG2.drawsvg('animate');

		flg2 = true;
		flg3 = false;
		}else if(flg3 == false){
		mySVG3.drawsvg('animate');
		flg3 = true;
		}
		}
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
		if(startPoint > target_idsp1){
		if(flg1 == false){
		mySVG.drawsvg('animate');
		flg1 = true;

		}
		}
		if(startPoint > target_idsp4){
		if(flg4 == false){
		mySVG4.drawsvg('animate');
		flg4 = true;

		}
		}



	});
	}

	//page direct

	if($('.line_direct1').length){
	var target_direct1 = $('.line_direct1').offset().top+200;
	var target_direct2 = $('.line_direct2').offset().top+200;
	var target_direct3 = $('.line_direct3').offset().top+270;
	var target_direct4 = $('.line_direct4').offset().top;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = true;
	var flg4 = false;
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
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false,
		callback: function(){
		if(flg2 == false){
		mySVG2.drawsvg('animate');

		flg2 = true;
		flg3 = false;
		}else if(flg3 == false){
		mySVG3.drawsvg('animate');
		flg3 = true;
		}
		}
	});
	var mySVG4 = $('.line_direct4').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
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
		if(startPoint > target_direct4){
		if(flg4 == false){
		mySVG4.drawsvg('animate');
		flg4 = true;

		}
		}



	});
	}
	//page header

	if($('.line_header1').length){
	var target_header1 = $('.line_header1').offset().top+200;
	var target_header2 = $('.line_header2').offset().top+200;
	var target_header3 = $('.line_header3').offset().top+270;
	var target_header4 = $('.line_header4').offset().top;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = true;
	var flg4 = false;
	var scrollTop = 0;
	var startPoint = 0;


	var mySVG = $('.line_header1').drawsvg({
		duration: 1000,
		stagger: 400,
		easing: 'swing',
		reverse: false
	});
	var mySVG2 = $('.line_header2').drawsvg();
	var mySVG3 = $('.line_header3').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false,
		callback: function(){
		if(flg2 == false){
		mySVG2.drawsvg('animate');

		flg2 = true;
		flg3 = false;
		}else if(flg3 == false){
		mySVG3.drawsvg('animate');
		flg3 = true;
		}
		}
	});
	var mySVG4 = $('.line_header4').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});

	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;
		if(startPoint > target_header1){
		if(flg1 == false){
		mySVG.drawsvg('animate');
		flg1 = true;

		}
		}
		if(startPoint > target_header4){
		if(flg4 == false){
		mySVG4.drawsvg('animate');
		flg4 = true;

		}
		}



	});
	}
	//page EC
	if($('.line_ecommerce1').length){
	var target_ecommerce1 = $('.line_ecommerce1').offset().top+200;
	var target_ecommerce2 = $('.line_ecommerce2').offset().top+200;
	var target_ecommerce3 = $('.line_ecommerce3').offset().top+270;
	var target_ecommerce4 = $('.line_ecommerce4').offset().top;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = true;
	var flg4 = false;
	var scrollTop = 0;
	var startPoint = 0;


	var mySVG = $('.line_ecommerce1').drawsvg({
		duration: 1000,
		stagger: 400,
		easing: 'swing',
		reverse: false
	});
	var mySVG2 = $('.line_ecommerce2').drawsvg();
	var mySVG3 = $('.line_ecommerce3').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false,
		callback: function(){
		if(flg2 == false){
		mySVG2.drawsvg('animate');

		flg2 = true;
		flg3 = false;
		}else if(flg3 == false){
		mySVG3.drawsvg('animate');
		flg3 = true;
		}
		}
	});
	var mySVG4 = $('.line_ecommerce4').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});

	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;
		if(startPoint > target_ecommerce1){
		if(flg1 == false){
		mySVG.drawsvg('animate');
		flg1 = true;

		}
		}
		if(startPoint > target_ecommerce4){
		if(flg4 == false){
		mySVG4.drawsvg('animate');
		flg4 = true;

		}
		}



	});
	}
	//page mobile
	if($('.line_mobile1').length){
	var target_mobile1 = $('.line_mobile1').offset().top+200;
	var target_mobile2 = $('.line_mobile2').offset().top+200;
	var target_mobile3 = $('.line_mobile3').offset().top+270;
	var target_mobile4 = $('.line_mobile4').offset().top;
	var windowHeight = $(window).height();
	var flg1 = false;
	var flg2 = false;
	var flg3 = true;
	var flg4 = false;
	var scrollTop = 0;
	var startPoint = 0;


	var mySVG = $('.line_mobile1').drawsvg({
		duration: 1000,
		stagger: 400,
		easing: 'swing',
		reverse: false
	});
	var mySVG2 = $('.line_mobile2').drawsvg();
	var mySVG3 = $('.line_mobile3').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false,
		callback: function(){
		if(flg2 == false){
		mySVG2.drawsvg('animate');

		flg2 = true;
		flg3 = false;
		}else if(flg3 == false){
		mySVG3.drawsvg('animate');
		flg3 = true;
		}
		}
	});
	var mySVG4 = $('.line_mobile4').drawsvg({
		duration: 1000,
		stagger: 1000,
		easing: 'swing',
		reverse: false
	});

	$(window).on('scroll',function(){

		scrollTop = $(window).scrollTop();
		windowHeight = $(window).height();
		startPoint = scrollTop + windowHeight - 100;
		if(startPoint > target_mobile1){
		if(flg1 == false){
		mySVG.drawsvg('animate');
		flg1 = true;

		}
		}
		if(startPoint > target_mobile4){
		if(flg4 == false){
		mySVG4.drawsvg('animate');
		flg4 = true;

		}
		}



	});
	}
});
