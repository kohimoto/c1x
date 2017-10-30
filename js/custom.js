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
		location lighting
					**/
});
