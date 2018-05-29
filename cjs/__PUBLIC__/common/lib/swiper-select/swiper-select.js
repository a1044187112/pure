var SwiperSelect = {
	createNewSw:function(e_options){
		var sel_obj = {};

		sel_obj.swiper = "";
		///系统选项
		sel_obj.sys_options = {};
		sel_obj.bind_selector = "";	//绑定控件的选择器
		sel_obj.org_selector = "";	//源数据选择器
		sel_obj.dis_selector = "";	//用于显示选择器
		sel_obj.item_count = "";	//元素数据项的个数
		//初始化函数
		sel_obj.Init = function(e_options)
		{
			var selector = e_options.bind_selector;
			sel_obj.bind_selector = selector;
			sel_obj.org_selector = e_options.org_selector;
			//创建用于显示的元素
			var dis_item_class = "ss_dis_" + sel_obj.org_selector.substr(1,sel_obj.org_selector.length);
			$("body").append('<div class="'+dis_item_class+'"></div>');
			sel_obj.dis_selector = "." + dis_item_class;


			//获取当前的元素中项的个数
			var item_count = $(sel_obj.org_selector + " .swiper-slide").length;
			sel_obj.item_count = item_count;
			//alert(item_count);
			if(item_count > 5) item_count = 5;
			//alert(item_count);
			//如果个数是偶数则不居中,如果是基数,则居中
			var item_center_if = true;
			if(item_count % 2 == 0)
			{
				//item_center_if = false;
			}

			//绑定点击事件
			$(selector).click(function(event) {
				/* Act on the event */
				//将原始数据复制到显示区域
				$(sel_obj.dis_selector).html($(sel_obj.org_selector).html());
				//显示遮罩层
				$(sel_obj.dis_selector + " .ss_shade_area").removeClass('ss_area_hide');
				//显示弹出层
				$(sel_obj.dis_selector + " .ss_popup_dis_area").removeClass('ss_area_hide');

				    sel_obj.swiper = new Swiper(sel_obj.dis_selector + " .ss_popup_dis_area .swiper-container", {
				        direction : 'vertical',//方向
				        slidesPerView: item_count,	//个数
				        centeredSlides:item_center_if,//居中
				        spaceBetween: 5,	//间隔
				        //元素切换完毕
				        onSlideChangeEnd: function(swiper){
							//改变透明度
							ChgItemOpacity();
						},
				    });

					//绑定点击取消按钮
					$(sel_obj.dis_selector + "  .ss_cancel_btn").click(function(event) {
						/* Act on the event */
						//隐藏遮罩层
						$(sel_obj.dis_selector + " .ss_shade_area").addClass('ss_area_hide');
						$(sel_obj.dis_selector + " .ss_popup_dis_area").addClass('ss_area_hide');

					});

					//点击确定按钮
					$(sel_obj.dis_selector + " .ss_ok_btn").click(function(event) {
						/* Act on the event */
						//隐藏遮罩层
						$(sel_obj.dis_selector + " .ss_shade_area").addClass('ss_area_hide');
						$(sel_obj.dis_selector + " .ss_popup_dis_area").addClass('ss_area_hide');

						//获取被选择的数据
						var cur_index = GetActiveItemIndex();
						var sel_item = $(sel_obj.dis_selector + " .swiper-slide:eq("+cur_index+")");
						var dis_data = sel_item.html();
						dis_data = dis_data.replace(/(^\s*)|(\s*$)/g, "");
						var real_data = sel_item.attr("data-real");
						real_data = real_data.replace(/(^\s*)|(\s*$)/g, "");

						$(sel_obj.bind_selector).val(dis_data);
						$(sel_obj.bind_selector + "_real").val(real_data);

					});

					ChgItemOpacity();

			});//click





		}//Init

		//改变透明度
		function ChgItemOpacity(){
			//alert(sel_obj.swiper.activeIndex);
			var pre_index = sel_obj.swiper.previousIndex;
			var c_index = pre_index;
			//alert(sel_obj.item_count);
			//去掉所有选项的透明
			//第一级别透明
			var op_level_1_index = c_index - 1;//alert(op_level_1_index);
			if(op_level_1_index >= 0)
				$(sel_obj.dis_selector + " .swiper-slide:eq("+op_level_1_index+")").removeClass('ss_opcity1');
			op_level_1_index = c_index + 1;//alert(op_level_1_index);
			if(op_level_1_index < sel_obj.item_count)
				$(sel_obj.dis_selector + " .swiper-slide:eq("+op_level_1_index+")").removeClass('ss_opcity1');

			//第二级别透明
			var op_level_2_index = c_index - 2;//alert(op_level_2_index);
			if(op_level_2_index >= 0)
				$(sel_obj.dis_selector + " .swiper-slide:eq("+op_level_2_index+")").removeClass('ss_opcity2');
			op_level_2_index = c_index + 2;//alert(op_level_2_index);
			if(op_level_2_index < sel_obj.item_count)
				$(sel_obj.dis_selector + " .swiper-slide:eq("+op_level_2_index+")").removeClass('ss_opcity2');

			//重新设置当前的的透明级别
			var cur_index = sel_obj.swiper.activeIndex;
			var c_index = cur_index;//alert(c_index);
			//添加透明级别
			//第一级别透明
			var op_level_1_index = c_index - 1;//alert(op_level_1_index);
			if(op_level_1_index >= 0)
				$(sel_obj.dis_selector + " .swiper-slide:eq("+op_level_1_index+")").addClass('ss_opcity1');
			op_level_1_index = c_index + 1;//alert(op_level_1_index);
			if(op_level_1_index < sel_obj.item_count)
				$(sel_obj.dis_selector + " .swiper-slide:eq("+op_level_1_index+")").addClass('ss_opcity1');

			//第二级别透明
			var op_level_2_index = c_index - 2;//alert(op_level_2_index);
			if(op_level_2_index >= 0)
			{
				//alert(op_level_2_index);
			 	$(sel_obj.dis_selector + " .swiper-slide:eq("+op_level_2_index+")").addClass('ss_opcity2');
			}
			op_level_2_index = c_index + 2;//alert(op_level_2_index);
			if(op_level_2_index < sel_obj.item_count)
			{
				//alert(op_level_2_index);
				$(sel_obj.dis_selector + " .swiper-slide:eq("+op_level_2_index+")").addClass('ss_opcity2');
			}

		}

		//获取选中的项的索引
		function GetActiveItemIndex()
		{
			return sel_obj.swiper.activeIndex;
		}


		sel_obj.Init(e_options);

		return sel_obj;
	},
}
