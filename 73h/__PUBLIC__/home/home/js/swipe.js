$(document).ready(function(){
	$(".mdc_intro_con").each(function(){
		$(this).swipe({fingers:"all", swipeLeft:swipe1, swipeRight:swipe2 });
		function swipe1(event, direction, distance, duration, fingerCount){
			// alert(6666);
			// 左滑
			$(this).children(".mdi_ic_item_first").css("display","none");
			$(this).children(".mdi_delete").css("display","block");
		}
		function swipe2(event, direction, distance, duration, fingerCount){
			$(this).children(".mdi_ic_item_first").css("display","block");
			$(this).children(".mdi_delete").css("display","none");
			// 右滑
		}
	});
	
	$(".mdc_intro_list_area").swipe({fingers:"all", swipeUp:swipe3, swipeDown:swipe4 });

		function swipe3(event, direction, distance, duration, fingerCount){
			// alert("上滑");
			var end_st = document.body.scrollTop + distance*2 + "px";
	        $("body").animate({scrollTop: end_st},400);
		}

		function swipe4(event, direction, distance, duration, fingerCount){
			// alert("下滑");
			var end_st = document.body.scrollTop - distance*2;
	        if(end_st < 0) end_st=0;
	        end_st += "px";
	        $("body").animate({scrollTop: end_st},400);
		}
});