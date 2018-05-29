//使左右等高
function HeightEq(){
	$(".plan_item_con").each(function(index, el) {
		//获取左边高度
		var left_height = $(this).find('.pic_item:nth-child(1)').height();
		var r_height = $(this).find('.pic_item:nth-child(2)').height();

		if(r_height < left_height){
			$(this).find('.pic_item:nth-child(2)').height(left_height);
		}
	});
}