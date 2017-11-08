$(function(){

  $('.request').click(function(){
		$('.request-area').fadeIn();
	});

  var _touch = ('ontouchstart' in document) ? 'touchstart' : 'click';
	$('.request').on(_touch,function() {
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
/*
var _touch = ('ontouchstart' in document) ? 'touchstart' : 'click';
$('.request').on(_touch,function() {
  $('.request-area').fadeIn();
});
]*/

/*
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
*/
});
