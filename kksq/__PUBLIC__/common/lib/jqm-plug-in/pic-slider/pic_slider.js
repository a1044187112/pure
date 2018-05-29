// JavaScript Document
/*
*	图片滑动类
*/
var PicSlider = {
	//创建一个新的滑动控件操作
	createSliderCtrl:function(i_options){
			
		//图片滚动对象
		var pic_slider = {};
		
		//子元素图片资源数据
		var sub_el_src = [];
		///系统选项
		var sys_opt = {};
		sys_opt.show_area_width = 100;//显示区域的宽度
		sys_opt.img_count = 0;	//图片的张数
		sys_opt.max_index = 0;	//最大编号,编号从0开始,最大编号就是图片张数减1
		sys_opt.cur_index = 0;	//当前图片的编号
		sys_opt.start_index = 0;	//其实索引
		sys_opt.main_play_obj = "";	//主滚动行对象
		sys_opt.mask_play_obj = "";	//副滚动行对象
		
		sys_opt.parent_el_id	= "";		//父元素选择器id表达式
		sys_opt.slider_box_id 	= "pic_slider"; //滑动框Id
		sys_opt.prefix_str	 	= "pic_slider"; //滑动框Id
		sys_opt.time_interval	= 2000;//动画间隔时间
		sys_opt.animinate_speed	= 1000;//动画速度
		sys_opt.ps_box_count	= 0;	//滑动框的个数
		sys_opt.content    	= "";
		sys_opt.timer    	= 0;	//计时器
		
		
		//初始化
		pic_slider.Init = function(i_options)
		{
			//alert(i_options.length);return;
			//解析配置数据
			ParseOptions(i_options);
			
			//创建元素
			CreateEl();
			
			//创建子元素
			CreateSubEl();
			//return;
			
			//事件绑定
			
			
			//开始滑动
			StartSliding();
		}
		

		
		/////////////////系统内部调用接口////////////////////////////////////////////////////
		
		///////////配置解析/////////////////////////////////
		//解析配置项
		function ParseOptions(i_options)
		{
			//遍历用户自定义配置项
			$.each(i_options, function(i){
				//alert(i);
				switch(this['type'])
				{
					case 'system':
						//调用初始化函数进行初始化操作
						InitSysOptions(this);
					break;
					default:
						//将元素添加到数据数组中即可
						sub_el_src.push(this);	
				}
				
			});//each
			
			//初始化子元素相关选项
			InitSubElSysOptions();			
		}//func ParseOptions
		
		//初始化系统选项
		function InitSysOptions(option_obj)
		{
			//alert('modal_id');
			//滑动框的个数
			sys_opt.ps_box_count	= 0;
			//控件id
			sys_opt.slider_box_id = sys_opt.prefix_str + "_" + sys_opt.ps_box_count;
			//SysOptionsAssign(option_obj,'slider_box_id' + "_" + sys_opt.ps_box_count);
			//父元素的id
			SysOptionsAssign(option_obj,'parent_el_id');
			//如果没有指定父元素,则默认使用body,如果已经赋值,则添加id选择器前缀
			if(sys_opt.parent_el_id == "")
				sys_opt.parent_el_id = "body";
			else
				sys_opt.parent_el_id = "#" + sys_opt.parent_el_id;
				
			//显示区域的宽度
			var show_area_width = $("body").width();		
			sys_opt.show_area_width = show_area_width;			
					
		}
		
		//初始化子元素选项
		function InitSubElSysOptions()
		{
			sys_opt.img_count =  sub_el_src.length;
			sys_opt.max_index = sys_opt.img_count - 1;
			sys_opt.start_index = 0;
			sys_opt.cur_index = sys_opt.start_index;	//其实索引从0开始			
		}
				
		//系统选项赋值
		function SysOptionsAssign(option_obj,attr_name)
		{
			//判断当前的属性是否存在,如果存在则进行赋值
			if((attr_name in option_obj))
			{
				sys_opt[attr_name] = option_obj[attr_name];
			}
		}
		///////////配置解析结束/////////////////////////////////
		
		/////////元素创建///////////////////////////////////////////
		//创建元素并添加到父元素中
		function CreateEl()
		{
			
			sys_opt.content ='      <div id="'+sys_opt.slider_box_id+'" class="'+sys_opt.prefix_str+'">\
				  <div class="imgs">\
					  <div class="main_con">\
					  	<div class="sub_con main_play">\
					   </div>\
					   <div class="sub_con mask">  \
					   </div>\
					  </div>\
						<div style="clear:both"></div>   \
				  </div>\
				  <div class="btns">\
					<div class="items">\
					</div>\
				</div>\
			</div>';
			
			//添加到指定的框中
			$(""+sys_opt.parent_el_id).append(sys_opt.content);
		}
		
		//创建子元素
		function CreateSubEl()
		{
			//添加图片元素
			var img_container = $("#" + sys_opt.slider_box_id + " .imgs .main_con .main_play");
			//遍历子元素对象
			
			$.each(sub_el_src,function(i){
				var sub_el_html = '<a target="_top" href="'+this["action_url"] + '"'; 
				//添加自适应
				sub_el_html += ' style="width:'+sys_opt.show_area_width+'px;"';
				sub_el_html += '><img src="'+ this["pic_url"] +'"  style="width:100%"/></a>';
				img_container.append(sub_el_html);
			});//each
			img_container.append('<div style="clear:both"></div>');
			//图片轮播重影消除,循环轮播设置,将主滚动图片中的第一张图片复制到副滚动行中即可
			$("#" + sys_opt.slider_box_id + " .imgs .main_con .main_play").children().first().clone().appendTo($("#" + sys_opt.slider_box_id + " .imgs .main_con .mask"));
			
			//添加按钮
			for(var i=0; i<sys_opt.img_count; i++)
			{
				$("#" + sys_opt.slider_box_id + " .btns .items").append("<i></i>");
			}
			$("#" + sys_opt.slider_box_id + " .btns .items").append("<div style='clear:both'></div>   ");//用于显示宽高
			
			//设置第一个为活动
			$("#" + sys_opt.slider_box_id + " .btns .items").children().first().addClass("on");
			//位置,总宽度/2-控件组宽度的/2
			var btns_width = $("#" + sys_opt.slider_box_id + " .btns .items i").outerWidth() * sys_opt.img_count;
			//var items_left = sys_opt.show_area_width/2 - btns_width/2;
			var items_left = sys_opt.show_area_width - btns_width*7/3;
			
			$("#" + sys_opt.slider_box_id + " .btns .items").attr("style","left:"+items_left+"px");
						
		}// func CreateSubEl
		////////////元素创建结束////////////////////////////////
		
		//////图片滑动操作////////////////////
		//开始滑动
		function StartSliding()
		{
			//alert(sys_opt.time_interval);
			sys_opt.timer = setInterval(SlideToNext,sys_opt.time_interval);			
			//alert(sys_opt.timer);
		}
		//滚动到下一张图片
		function SlideToNext()
		{
			//alert(sys_opt.cur_index); 
			var cur_inx = sys_opt.cur_index;
			var idx = sys_opt.cur_index+1;
			//滑动
			$("#" + sys_opt.slider_box_id + " .main_con").animate({left: -1 * sys_opt.show_area_width * idx}, sys_opt.animinate_speed);
			//当图片滚动到副本第一张时,不需要动画,重置位置,注意动画的时间要设置为0
			if(idx > sys_opt.max_index)
			 	$("#" + sys_opt.slider_box_id + " .main_con").animate({left:0},0);
				
			//重置当前索引
			sys_opt.cur_index = idx<=sys_opt.max_index?idx:sys_opt.start_index;	//当索引操作最大索引时从头开始
			//重置活动按钮
			ResetActiveBtn(cur_inx, sys_opt.cur_index);			
		}//fucntion slideToNext
		
		//重置活动按钮
		function ResetActiveBtn(cur_index, next_index)
		{
			$("#" + sys_opt.slider_box_id + " .btns i").eq(cur_index).removeClass("on");
			$("#" + sys_opt.slider_box_id + " .btns i").eq(next_index).addClass("on");
		}//func setBtnClass
		////////////////////////////////
		//////////////////////////////////////////////////////////
		

		//调用初始化,并返回对象
		pic_slider.Init(i_options);
		return pic_slider;
	}
	
	
};//pic slide


