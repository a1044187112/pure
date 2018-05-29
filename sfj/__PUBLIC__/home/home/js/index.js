// JavaScript Document
/*	插件模版js文件
*/
var Index = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		this_obj.sub_el_files = [];


		
		///系统选项
		this_obj.sys_opt = {
			//系统配置
			sys_conf		: {
				pic_dir_path 		: "",	//图片文件夹路径
				redirect_rul		: "",	//条状url
			},
			//页面区域
			page_area				: {
				//页面的高度
				page_width				: 0,
				//页面的高度
				page_height				: 0,
			},
			//战略地图
			fight_map_data			: {

			},
			//扶贫大数据图
			help_poor_big_data		: {
				//环形图占据的高度比例
				rrd_height_ratio		: 0.45,
			},
			//环形比例图
			ring_ratio_dgm 			: {
				//比例图的垂直位移
				ratio_dgm_con_top_offset	: 0,
				//环形图的宽度
				rd_ring_line_width			: 15,
				//比例项颜色标记的内向位移
				rr_item_csym_iofs			: 5,	
				//描述项内容的圆的半径
				rdr_st_item_clr_radius		: 30,
				//描述文字圆圈的半径
				rdr_state_crle_radius 		: 0,

			},
			//人口分布图
			popl_distb_dgm 			: {
				//背景图片表
				bg_pic_name_table		: [],
				//区域的距离顶部的位移
				area_top_offset			: 0,
			},
			//扶贫概况引导按钮
			hp_intro_btn			:{
				//区域的距离顶部的位移
				area_top_offset			: 0,
			},
			//扶贫概况区域
			help_poo_intro_area		:{
				//关闭区域的按钮的顶部位移
				close_area_top_ofs		: 0,

			},

			//显示区域宽度
			dis_area_width				: 0,
			//显示区域高度
			dis_area_height				: 0,
			//菜单区域宽度
			menu_con_width				: 0,
			//地图区域宽度
			map_con_width				: 0,
			//战略地图区域高度
			fight_map_con_height		: 0,

			//比例图区域高度
			ratio_dgm_con_height		: 0,
			//比例图关闭区域宽度
			//rd_close_area_width			: 0,
			//比例图关闭按钮
			ratio_dgm_close_btn_to		: 0,

			//上下文对象
			context_obj					: 0,
			//画布对象
			convas_obj					: 0,
			//比例环形图的宽度
			rd_ring_con_width			: 0,
			//比例环形图的高度
			rd_ring_con_height			: 0,
			//环形图的圆心的位置
			rd_ring_center_pt			: {},
			//环形图的半径
			rd_ring_radius				: 0,
			//环形图比例项绘制的比例起点
			rd_draw_start_ratio			: 0,
			//环形比例图的子项资源
			rd_ring_item_src			: [],

			//动画绘制时使用的对象		: "",
			rd_ring_draw_obj			: "",
			//对象数组的索引
			rd_ring_draw_obj_arr_index	: 0,
			//对象数组的长度
			rd_ring_draw_obj_arr_len	: 0,
			//动画绘制的进度
			rd_ring_draw_process		: 0,
			//本次绘制的起始进度
			rd_ring_draw_start_prs		: 0,
			//动画绘制的进度单位
			rd_ring_draw_uinit			: 1,
			//单位数
			rd_ring_draw_uinit_count	: 1000,
			//动画绘制的计时器
			rd_rind_drea_timer			: 0,
			//动画绘制的时间间隔
			rd_ring_drea_timer_interval	: 1,
			//比例项颜色表
			rd_ratio_item_color_table	: [],


			//描述圆所占的内容等分数
			rdr_st_item_count			: 17,

			//左右滑动的水平距离
			swipe_h_distance			: 0,

		};


		//函数集
		this_obj.func_set = {
			//配置函数集
			conf_func 				: "",

			//系统初始化函数集
			sys_init_func			: "",
			//区域位置函数集
			area_pos_func 			: "",
			//生成子元素代码
			sub_el_code_gen_func	: "",
			//绘图函数集
			draw_func				: "",

			//html dom元素
			html_dom_func			: "",


			//事件相关绑定函数集
			event_bind_func 		: "",
			//事件相关的处理函数
			handle_event_func 		: "",

			//ajax提交函数
			ajax_submit_func		: "",
			//ajax获取数据返回处理函数集
			ajax_ret_func			: "",
		
			//元素选择器生成函数集
			el_selector_gen_func	: "",

			//数据对象函数集
			data_obj_func			: "",
		}
		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置函数
			this_obj.func_set.conf_func.parseOptions(i_options);

			//初始化位置数据
			this_obj.func_set.sys_init_func.sysInit();
			//创建元素
			this_obj.func_set.html_dom_func.createEl();
			//重置子区域的位置
			this_obj.func_set.area_pos_func.resetSubAreaPos();
			//绘制环形比例图
			this_obj.func_set.draw_func.animateDrawRingDgm();

			//绑定事件
			this_obj.func_set.event_bind_func.bindEvnet();

			//this_obj.func_set.area_pos_func.pageSwipeRight();

		}//	Init
		
		////////////// 内部私有函数集/////////////////////////////////
		//私有函数,配置数据函数
		this_obj.func_set.conf_func = {
			//解析配置项
			parseOptions : function (i_options){
				//遍历用户自定义配置项
				$.each(i_options, function(i){
					//alert(this.type );
					switch(this['type'])
					{
						case 'system':
							//调用初始化函数进行初始化操作
							this_obj.func_set.conf_func.initSysOptions(this);
						break;
						default:
							this_obj.func_set.conf_func.initSubElData(this);
						break;
					}
					
				});//each

					
			},//func parseOptions

			//初始化系统选项
			initSysOptions:function (option_obj)
			{
				this_obj.func_set.conf_func.sysOptionsAssign(option_obj,'pic_dir_path');
				this_obj.func_set.conf_func.sysOptionsAssign(option_obj,'redirect_rul');
			},
			//初始化子元素数据
			initSubElData:function(option_obj)
			{			
				//this_obj.sub_el_src.
				//添加到比例项资源表中
				this_obj.sys_opt.rd_ring_item_src.push(option_obj);
			},
					
			//系统选项赋值
			sysOptionsAssign : function (option_obj,attr_name)
			{
				//判断当前的属性是否存在,如果存在则进行赋值
				if((attr_name in option_obj))
				{
					this_obj.sys_opt.sys_conf[attr_name] = option_obj[attr_name];
				}
			},
		};//opt func 配置数据相关函数

		//////系统初始化函数集
		this_obj.func_set.sys_init_func = {
			//系统初始化
			sysInit : function(){
				//初始化颜色表
				this_obj.func_set.sys_init_func.initItemColorTable();
				//初始化位置数据
				this_obj.func_set.sys_init_func.initPosData();
				this_obj.func_set.sys_init_func.initPoplDistbDgmData();
				this_obj.func_set.sys_init_func.initHelpPoorIntroArea();

			},
			//初始化位置数据
			initPosData : function(){
				this_obj.func_set.sys_init_func.initPageSubAreaData();
				this_obj.func_set.sys_init_func.initFightMapAreaData();
				//比例图环形图
				this_obj.func_set.sys_init_func.initRatioRingDmgArea();
				this_obj.func_set.sys_init_func.initHpIntroBtnAreaData();

			},
			//初始化页面子块区域的数据
			initPageSubAreaData : function(){
				//获取整个页面的宽高
				var c_width = $(document).width();
				var c_height = window.innerHeight;//$(document).height();
				this_obj.sys_opt.page_area.page_width = c_width;
				this_obj.sys_opt.page_area.page_height = c_height;
				//alert(window.innerHeight);

				//菜单宽度设置为30%;
				this_obj.sys_opt.menu_con_width = this_obj.sys_opt.page_area.page_width*0.3;
				//地图宽度等于100%
				this_obj.sys_opt.map_con_width  = this_obj.sys_opt.page_area.page_width;
				//设置总区域的高度
				this_obj.sys_opt.dis_area_width = this_obj.sys_opt.menu_con_width+this_obj.sys_opt.map_con_width;
				//左右滑动的距离
				this_obj.sys_opt.swipe_h_distance = this_obj.sys_opt.menu_con_width;
			},
			//初始化战略地图区域
			initFightMapAreaData : function(){
				//战略地图的高度
				this_obj.sys_opt.fight_map_con_height 		= this_obj.sys_opt.page_area.page_height;
				//比例图的高度
				this_obj.sys_opt.ratio_dgm_con_height 		= this_obj.sys_opt.page_area.page_height;
				//关闭全区域
				//this_obj.sys_opt.rd_close_area_width 		= this_obj.sys_opt.map_con_width;
				//比例图的关闭按钮的垂直位移,距离底部
				this_obj.sys_opt.ratio_dgm_close_btn_to		= this_obj.sys_opt.page_area.page_height-80;
				//显示区域高度
				this_obj.sys_opt.dis_area_height 			= this_obj.sys_opt.page_area.page_height;
			},
			//初始化环形图数据
			initRatioRingDmgArea : function(){
				//环形图的宽高
				this_obj.sys_opt.rd_ring_con_width 			= this_obj.sys_opt.map_con_width-4;
				//高度
				this_obj.sys_opt.rd_ring_con_height			= this_obj.sys_opt.ratio_dgm_con_height * this_obj.sys_opt.help_poor_big_data.rrd_height_ratio;
				//圆心位置
				this_obj.sys_opt.rd_ring_center_pt.x		= this_obj.sys_opt.rd_ring_con_width/2;
				this_obj.sys_opt.rd_ring_center_pt.y		= this_obj.sys_opt.rd_ring_con_height/2;
				//半径
				//this_obj.sys_opt.rd_ring_radius				= this_obj.sys_opt.rd_ring_con_height*3/16 + 20;
				this_obj.sys_opt.rd_ring_radius				= parseInt(this_obj.sys_opt.rd_ring_con_height/2);
				this_obj.sys_opt.rd_ring_radius				-= parseInt(this_obj.sys_opt.ring_ratio_dgm.rdr_st_item_clr_radius*2);//预留描述项圆的位置
				this_obj.sys_opt.rd_ring_radius				-= parseInt(this_obj.sys_opt.ring_ratio_dgm.rr_item_csym_iofs);//预留颜色标记的内向距离
				this_obj.sys_opt.rd_ring_radius				-= parseInt(this_obj.sys_opt.ring_ratio_dgm.rd_ring_line_width);//预留本身圆的线宽
				//描述项环圈半径
				this_obj.sys_opt.ring_ratio_dgm.rdr_state_crle_radius		= this_obj.sys_opt.rd_ring_con_height/2;
				this_obj.sys_opt.ring_ratio_dgm.rdr_state_crle_radius -= this_obj.sys_opt.ring_ratio_dgm.rdr_st_item_clr_radius;//预留描述项圆的半径

				//比例图的垂直位移,需要显示比例环形图
				this_obj.sys_opt.ring_ratio_dgm.ratio_dgm_con_top_offset 	= this_obj.sys_opt.dis_area_height - this_obj.sys_opt.rd_ring_con_height;

				//环形图项数据,遍历子元素资源数据
				var color_table_len = this_obj.sys_opt.rd_ratio_item_color_table.length;
				var c_index = 0;
				$.each(this_obj.sys_opt.rd_ring_item_src, function(index, el) {
					//生成随机颜色
					//var c_index = Math.ceil(Math.random()*100)%color_table_len;
					this.color = this_obj.sys_opt.rd_ratio_item_color_table[c_index];
					c_index++;
				});
			},
			//初始化颜色表
			initItemColorTable : function(){
				this_obj.sys_opt.rd_ratio_item_color_table.push("#BFD7BC");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#014993");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#FFFEFF");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#0A927E");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#84B536");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#F1DF20");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#E7890F");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#DFBAB1");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#FF6FC6");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#DC328B");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#AF1062");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#C00D21");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#7F308C");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#45B9B0");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#BC8F72");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#D77B52");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#D00052");
				this_obj.sys_opt.rd_ratio_item_color_table.push("#FF6000");
			},
			//初始化人口分布比例图数据
			initPoplDistbDgmData : function(){
				//背景图片
				this_obj.sys_opt.popl_distb_dgm.bg_pic_name_table.push("3.png");
				this_obj.sys_opt.popl_distb_dgm.bg_pic_name_table.push("4.png");
				this_obj.sys_opt.popl_distb_dgm.bg_pic_name_table.push("5.png");
				this_obj.sys_opt.popl_distb_dgm.bg_pic_name_table.push("6.png");
				this_obj.sys_opt.popl_distb_dgm.bg_pic_name_table.push("7.png");
				this_obj.sys_opt.popl_distb_dgm.bg_pic_name_table.push("8.png");
				this_obj.sys_opt.popl_distb_dgm.bg_pic_name_table.push("9.png");

				//贫困人口分布图顶部位移
				this_obj.sys_opt.popl_distb_dgm.area_top_offset = this_obj.sys_opt.ratio_dgm_con_height * this_obj.sys_opt.help_poor_big_data.rrd_height_ratio;
			},
			//初始化扶贫概况引导按钮
			initHpIntroBtnAreaData	: function(){
				//顶部的位移
				this_obj.sys_opt.hp_intro_btn.area_top_offset = this_obj.sys_opt.ratio_dgm_con_height - 40;
				//alert(this_obj.sys_opt.hp_intro_btn.area_top_offset);
			},
			//初始化扶贫概况区域
			initHelpPoorIntroArea	: function(){
				this_obj.sys_opt.help_poo_intro_area.close_area_top_ofs		= this_obj.sys_opt.page_area.page_height-60;
				//this_obj.sys_opt.ratio_dgm_close_btn_to		= this_obj.sys_opt.page_area.page_height-80;

			},
		};//系统初始化函数集
		
		//生成子元素代码
		this_obj.func_set.sub_el_code_gen_func = {
			//生成环形图的canvas代码
			genRatioRingDgmCanvasAreaCode : function(){
				var el_html = '<canvas class="dgm_canvas_area" \
				width="'+this_obj.sys_opt.rd_ring_con_width+'px" \
				height="'+this_obj.sys_opt.rd_ring_con_height+'px" \
				style="\
                position:absolute;\
            	top:0px;\
            	"></canvas>';

            	return el_html;
			},

		};//生成子元素代码

		//html dom元素
		this_obj.func_set.html_dom_func = {
			//创建元素
			createEl : function(){
				this_obj.func_set.html_dom_func.createCanvasAreaEl();
				this_obj.func_set.html_dom_func.setDivsNameFontSize();
			},

			//创建canvas区域
			createCanvasAreaEl : function(){
				//生成canvas区域代码
				var area_code = this_obj.func_set.sub_el_code_gen_func.genRatioRingDgmCanvasAreaCode();
				//alert(area_code);
				//追加到比例图中
				var selr = this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr();//alert(selr);
				$(selr).append(area_code);


				//创建上下文对象
				var selr = this_obj.func_set.el_selector_gen_func.genRDCanvasAreaSelr();
				this_obj.sys_opt.context_obj	= $(selr)[0];
				this_obj.sys_opt.convas_obj		= this_obj.sys_opt.context_obj.getContext('2d');
			},

			//改变显示区域的字体大小
			setDivsNameFontSize : function(){
			},
		};

		/////区域位置函数集
		this_obj.func_set.area_pos_func = {
			//重新设置子区域的位置
			resetSubAreaPos : function(){
				//设置显示区域宽高
				var selr = this_obj.func_set.el_selector_gen_func.genDisareaSelr();
				var con_width = this_obj.sys_opt.dis_area_width;
				var style_str = "width:"+con_width+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);

				//设置菜单区域位置
				this_obj.func_set.area_pos_func.setMenuAreaPos();
				//设置地图区域的位置
				this_obj.func_set.area_pos_func.setMapAreaPos();
				//设置比例图的位置
				this_obj.func_set.area_pos_func.setRatioDgmAreaPos();
				//设置人口分布图位置
				this_obj.func_set.area_pos_func.setPoplDistbDgmAreaPos();
				//设置分布图引导按钮
				this_obj.func_set.area_pos_func.setHpIntroBtnAreaPos();
				//设置人口分布图
				this_obj.func_set.area_pos_func.setHelpPoorIntroAreaPos();


				//页面移动
				this_obj.func_set.area_pos_func.pageSwipeLeft();
			},
			//设置菜单区域的位置
			setMenuAreaPos : function(){
				//设置菜单区域宽高
				var selr = this_obj.func_set.el_selector_gen_func.genMenuConSelr();
				var con_width 	= this_obj.sys_opt.menu_con_width;
				var con_height 	= this_obj.sys_opt.dis_area_height;
				var style_str = "width:"+con_width+"px;height:"+con_height+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);

				//设置菜单项的高度
				var selr = this_obj.func_set.el_selector_gen_func.genMenuItemSelr();
				var item_count = $(selr).length;
				var item_height = this_obj.sys_opt.dis_area_height/item_count;
				var style_str = "height:"+item_height+"px;";
				$(selr).each(function(index, el) {
					$(this).attr("style",style_str);
				});
			},
			//设置地图区域的位置
			setMapAreaPos : function(){
				//设置地图区域的宽高
				var selr = this_obj.func_set.el_selector_gen_func.genMapConSelr();
				var con_width 	= this_obj.sys_opt.map_con_width;
				var con_height 	= this_obj.sys_opt.dis_area_height;
				var style_str = "width:"+con_width+"px;height:"+con_height+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);

				//设置战略地图的高度
				var selr = this_obj.func_set.el_selector_gen_func.genFightMapSelr();
				//var con_width 	= this_obj.sys_opt.fight_map_con_height;
				var con_height 	= this_obj.sys_opt.fight_map_con_height;
				var style_str = "width:100%;height:"+con_height+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);

			},

			//设置比例图的位置
			setRatioDgmAreaPos : function(){
				//设置比例图高度
				var selr = this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr();
				var con_height 	= this_obj.sys_opt.ratio_dgm_con_height;
				var style_str = "width:100%;height:"+con_height+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);
				//设置比例图额初始位置
				var selr = this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr();
				var top =	this_obj.sys_opt.ring_ratio_dgm.ratio_dgm_con_top_offset - 10;
				var style_str = "top:"+top+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);
				//设置关闭区域宽度
				// var selr = this_obj.func_set.el_selector_gen_func.genRatioDgmCloseAreaSelr();
				// var style_str = "width:"+this_obj.sys_opt.rd_close_area_width+"px;";
				// this_obj.func_set.area_pos_func.setElStyle(selr,style_str);

				//设置关闭按钮
				var selr = this_obj.func_set.el_selector_gen_func.genRatioDgmCloseAreaSelr();//alert(selr);
				var style_str = "top:"+this_obj.sys_opt.ratio_dgm_close_btn_to+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);
			},
			//设置人口分布图的位置
			setPoplDistbDgmAreaPos : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genPoplDistbDgmAreaSelr();//alert(selr);
				var con_height 	= this_obj.sys_opt.popl_distb_dgm.area_top_offset;
				var style_str = "width:100%;top:"+con_height+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);
			},
			//设置扶贫概况引导按钮
			setHpIntroBtnAreaPos : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genHpIntroBtnAreaSelr();//alert(selr);
				var con_height 	= this_obj.sys_opt.hp_intro_btn.area_top_offset;
				var style_str = "width:100%;top:"+con_height+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);

			},
			//设置扶贫概况区域
			setHelpPoorIntroAreaPos : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genHelpPoorIntroAreaSelr();//alert(selr);
				var con_height 	= this_obj.sys_opt.dis_area_height;
				var style_str = "width:100%;height:"+con_height+"px;top:"+con_height+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);


				//设置关闭按钮
				var selr = this_obj.func_set.el_selector_gen_func.genHelpPoorIntroCloseAreaSelr();//alert(selr);
				var style_str = "top:"+this_obj.sys_opt.help_poo_intro_area.close_area_top_ofs+"px;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);
			},


			//页面左移动,
			pageSwipeLeft : function(){
				var h_dis = -this_obj.sys_opt.swipe_h_distance;
				this_obj.func_set.area_pos_func.pageHSwipt(h_dis);
			},

			//页面向右移动
			pageSwipeRight : function(){
				var h_dis = 0;//this_obj.sys_opt.swipe_h_distance;
				this_obj.func_set.area_pos_func.pageHSwipt(h_dis);
			},

			//页面水平滑动
			pageHSwipt : function(h_dis){
				var selr = this_obj.func_set.el_selector_gen_func.genMenuConSelr();
				this_obj.func_set.area_pos_func.setElStyle(selr,"left:"+h_dis+"px;");

				var selr = this_obj.func_set.el_selector_gen_func.genMapConSelr();
				this_obj.func_set.area_pos_func.setElStyle(selr,"left:"+h_dis+"px;");
			},


			//比例图向上滑动到顶部
			ratioDgmSlideToTop : function(){
				this_obj.func_set.area_pos_func.showRingRatiosDgm();
				var selr = this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr();
				$(selr).animate({top:"0px"},"slow");
			},
			//比例图向下滑动到底部
			ratioDgmSlideToBottom : function(){
				this_obj.func_set.area_pos_func.hideRingRatiosDgm();
				var selr = this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr();
				$(selr).animate({top:this_obj.sys_opt.dis_area_height+"px"},"slow");
			},

			//扶贫概况向上滑动到顶部
			helpPoorIntroSlideToTop : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genHelpPoorIntroAreaSelr();
				$(selr).animate({top:"0px"},"slow");
			},
			//扶贫概况向下滑动到底部
			helpPoorIntroSlideToBottom : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genHelpPoorIntroAreaSelr();
				$(selr).animate({top:this_obj.sys_opt.dis_area_height+"px"},"slow");
			},

			//隐藏环形图区域
			hideRingRatiosDgm : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genRDCanvasAreaSelr();
				var style_str = "display:none;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);
			},
			//显示环形图区域
			showRingRatiosDgm : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genRDCanvasAreaSelr();
				var style_str = "display:block;";
				this_obj.func_set.area_pos_func.setElStyle(selr,style_str);

			},


			//设置元素的style属性,新属性中必须要有分号结尾
			setElStyle : function(selr, new_style){
				//alert(new_style);
				//获取原来的属性
				var old_style = $(selr).attr("style");
				//alert(old_style);
				if(old_style != undefined)
				{
					//进行属性合并
					new_style = this_obj.func_set.data_obj_func.strMerge(old_style,new_style);
				}
				//alert(new_style);
				$(selr).attr("style", new_style);
			},
		};//区域位置函数集


		//绘图函数集
		this_obj.func_set.draw_func = {
			//绘制环形比例图
			drawRingRatioDiagram : function(){
				//重置比例起点
				this_obj.sys_opt.rd_draw_start_ratio = 0;
				//遍历资源数组
				$.each(this_obj.sys_opt.rd_ring_item_src,function(index, el) {
					this_obj.func_set.draw_func.drawRatioItem(this);
				});
			},
			//绘制比例项数据
			drawRatioItem : function(item_obj){

				var cans = this_obj.sys_opt.convas_obj;
				var center_pt = this_obj.sys_opt.rd_ring_center_pt;
				var i_radius = this_obj.sys_opt.rd_ring_radius;
				cans.beginPath();
	            var all_a = Math.PI*2;						
	            var start_a = all_a*this_obj.sys_opt.rd_draw_start_ratio;	//设置其实弧度,以之前累计的比例为起点
	            this_obj.sys_opt.rd_draw_start_ratio += item_obj.ratio;		//累加当前比例
	            var end_a = all_a*this_obj.sys_opt.rd_draw_start_ratio;		//结束比例
	            //cans.arc(40,30,20,start_a, end_a,false);
	            cans.arc(center_pt.x,center_pt.y,i_radius,start_a, end_a,false);
	            cans.lineWidth = this_obj.sys_opt.ring_ratio_dgm.rd_ring_line_width;
	            cans.strokeStyle = item_obj.color;
	            //alert(item_obj.color);
	            cans.stroke();
	            cans.closePath();
			},

			//动画绘制环形图
			animateDrawRingDgm : function(item_obj){
				//重置绘制相关的数据
				this_obj.sys_opt.rd_ring_draw_obj_arr_index = 0;
				this_obj.sys_opt.rd_ring_draw_process = 0;
				this_obj.sys_opt.rd_ring_draw_obj_arr_len = this_obj.sys_opt.rd_ring_item_src.length;
				this_obj.sys_opt.rd_ring_draw_start_prs = 0;

				//使用计时器进行绘制
				this_obj.sys_opt.rd_rind_drea_timer = self.setInterval("Index.animateDraw()",this_obj.sys_opt.rd_ring_drea_timer_interval);
				// //this_obj.sys_opt.rd_rind_drea_timer = self.setInterval("this_obj.func_set.draw_func.animateDrawRingDgmAction()",1000);

			},
			//动画绘制操作
			animateDrawRingDgmAction : function(){
				//判断当前对象是否绘制完毕
				var item_src_obj = this_obj.sys_opt.rd_ring_item_src[this_obj.sys_opt.rd_ring_draw_obj_arr_index];
				//本次截至绘制进度
				var end_draw_prs = parseInt(this_obj.sys_opt.rd_ring_draw_start_prs) + parseInt(item_src_obj.ratio);
				if(parseInt(this_obj.sys_opt.rd_ring_draw_process) < end_draw_prs){
					//还没有,则继续绘制
				}
				else{
					//本次绘制结束,则绘制下一项数据
					this_obj.sys_opt.rd_ring_draw_obj_arr_index++;
					//更新本次的起始进度
					this_obj.sys_opt.rd_ring_draw_start_prs = this_obj.sys_opt.rd_ring_draw_process;
					//判断所有绘制是否结束
					if(this_obj.sys_opt.rd_ring_draw_obj_arr_index >= this_obj.sys_opt.rd_ring_draw_obj_arr_len){
						//绘制结束,关闭所有计时器
						window.clearInterval(this_obj.sys_opt.rd_rind_drea_timer);
						//比例环形图绘制完毕
						this_obj.func_set.draw_func.ringRatioDgmDrawOk();
						return ;
					}
				}

				//当总绘制进度等于本次其实进度时,标识本次开始绘制,绘制描述圆
				if(this_obj.sys_opt.rd_ring_draw_start_prs == this_obj.sys_opt.rd_ring_draw_process)
				{
					this_obj.func_set.draw_func.drawRrdStateCircle();
				}

				// //进行绘制
				 this_obj.func_set.draw_func.drawRrdProcesing();
				//alert("okc");
			},
			//环形比例图绘制完毕
			ringRatioDgmDrawOk	: function(){
				//下拉比例图
				this_obj.func_set.area_pos_func.ratioDgmSlideToBottom();
			},
			//环形图进度性绘制
			drawRrdProcesing : function(){
				var cans = this_obj.sys_opt.convas_obj;
				var center_pt = this_obj.sys_opt.rd_ring_center_pt;
				var i_radius = this_obj.sys_opt.rd_ring_radius;
				var item_obj = this_obj.sys_opt.rd_ring_item_src[this_obj.sys_opt.rd_ring_draw_obj_arr_index];
				cans.beginPath();
	            var all_a = Math.PI*2;
	            var start_a = all_a*(this_obj.sys_opt.rd_ring_draw_process-1)/this_obj.sys_opt.rd_ring_draw_uinit_count;		//上一个进度作为起点
	            this_obj.sys_opt.rd_ring_draw_process += this_obj.sys_opt.rd_ring_draw_uinit;//累加进度
	            //alert(this_obj.sys_opt.rd_ring_draw_process);
	            var end_a = all_a*this_obj.sys_opt.rd_ring_draw_process/this_obj.sys_opt.rd_ring_draw_uinit_count;		//结束比例
	            //cans.arc(40,30,20,start_a, end_a,false);
	            cans.arc(center_pt.x,center_pt.y,i_radius,start_a, end_a,false);
	            cans.lineWidth = this_obj.sys_opt.ring_ratio_dgm.rd_ring_line_width;
	            cans.strokeStyle = item_obj.color;
	            //alert(item_obj.color);
	            cans.stroke();
	            cans.closePath();
			},

			//绘制描述框的圆
			drawRrdStateCircle : function(){
	            var all_a = Math.PI*2;	
				//计算圆心线的弧度,等分及占比
				var cans = this_obj.sys_opt.convas_obj;
				var cc_line_arc = all_a * this_obj.sys_opt.rd_ring_draw_obj_arr_index/this_obj.sys_opt.rd_ring_draw_obj_arr_len;
				var center_pt = this_obj.sys_opt.rd_ring_center_pt;
				var i_radius = this_obj.sys_opt.ring_ratio_dgm.rdr_state_crle_radius;	//计算半径使用的描述圆的半径
				var item_obj = this_obj.sys_opt.rd_ring_item_src[this_obj.sys_opt.rd_ring_draw_obj_arr_index];
				//计算圆心
				var x = center_pt.x + i_radius * Math.cos(cc_line_arc);
				var y = center_pt.y + i_radius * Math.sin(cc_line_arc);
				var radius = this_obj.sys_opt.ring_ratio_dgm.rdr_st_item_clr_radius;
				cans.beginPath();					
	            var start_a = 0;	//设置其实弧度,以之前累计的比例为起点
	            var end_a = all_a;		//结束比例
	            cans.arc(x,y,radius,start_a, end_a,false);
	            cans.lineWidth = 2;
				//绘制描述圆的边框透明的
	            cans.strokeStyle ="rgba(100%,25%,100%,0)";
	            cans.stroke();
	            cans.closePath();	
	            //填充文字
	            //填充名称
		        cans.moveTo(x,y);  
	            cans.font = "bold 9pt Arial";  
		        cans.fillStyle = '#ffffff';  
		        cans.textAlign = 'center';  
		        cans.textBaseline = 'middle';  
		        cans.fillText(item_obj.name, x, y-5);   
		        //人数
		        cans.fillStyle = '#ffffff';  
		        cans.fillText(item_obj.num+"人", x, y+10);  
		        //比例百分比,等于比例除以单位数
		        //item_obj.ratio = 180;
		        var num_rt = Math.round(parseInt(item_obj.ratio)/parseInt(this_obj.sys_opt.rd_ring_draw_uinit_count)*1000)/10;
		        cans.fillStyle = '#9B337C';  
		        cans.fillText(num_rt+"%", x, y+22);  
		        //绘制标记圆
				var i_radius = this_obj.sys_opt.ring_ratio_dgm.rdr_state_crle_radius-this_obj.sys_opt.ring_ratio_dgm.rdr_st_item_clr_radius;	//半径需要减去描述项圆的半径
				i_radius -= this_obj.sys_opt.ring_ratio_dgm.rr_item_csym_iofs;
				var x = center_pt.x + i_radius * Math.cos(cc_line_arc);
				var y = center_pt.y + i_radius * Math.sin(cc_line_arc);
				var radius = this_obj.sys_opt.ring_ratio_dgm.rdr_st_item_clr_radius;
		        cans.beginPath();
		        cans.arc(x,y,5,0, all_a,false);
		        cans.fillStyle = item_obj.color;
		        cans.fill();
	            cans.closePath();	
			},



			//绘制圆
			drawCircle : function(x,y,radius){
				var cans = this_obj.sys_opt.convas_obj;
				cans.beginPath();
	            var all_a = Math.PI*2;						
	            var start_a = 0;	//设置其实弧度,以之前累计的比例为起点
	            var end_a = all_a;		//结束比例
	            cans.arc(x,y,radius,start_a, end_a,false);
	            //cans.arc(center_pt.x,center_pt.y,i_radius,start_a, end_a,false);
	            cans.lineWidth = 2;
	            cans.strokeStyle ="rgba(100%,25%,100%,0)";
	            //alert(item_obj.color);
	            cans.stroke();
	            cans.closePath();	 			
			},
			//绘制圆,指定圆心坐标
			drawCircleEx: function(pt,radius){
				this_obj.func_set.draw_func.drawCircle(pt.x,pt.y,radius);
			},

		};

		///事件相关绑定函数集
		this_obj.func_set.event_bind_func = {
			//绑定事件
			bindEvnet : function(){
				this_obj.func_set.event_bind_func.bindPageHSwipeEvent();
				this_obj.func_set.event_bind_func.bindFightMapClick();
				this_obj.func_set.event_bind_func.bindRatioDgmPullRingClick();
				this_obj.func_set.event_bind_func.bindCloseRatioDgmClick();
				this_obj.func_set.event_bind_func.bindRationDgmDropRingClick();
				this_obj.func_set.event_bind_func.bindHpIntroStartBtnClick();
				this_obj.func_set.event_bind_func.bindHpIntroCloseBtnClick();
				this_obj.func_set.event_bind_func.bindMenuItemHpBigDataClick();
				//this_obj.func_set.event_bind_func.bindCanvasClick();

			},
			//绑定页面左右水平滑动事件
			bindPageHSwipeEvent : function(){
				var sub_item_sler = this_obj.func_set.el_selector_gen_func.genDisareaSelr();
				//alert(sub_item_sler);
				$(sub_item_sler).swipe( {
				    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				    	//alert(direction);
				      if(direction == "left")
				      {
				      	this_obj.func_set.handle_event_func.handleSwipeLeft();
				      }
				      else if(direction == "right"){
				      	this_obj.func_set.handle_event_func.handleSwipeRight();

				      }
				      else if(direction == "up")//当向上滑动手指时令当前页面记数器加1
                      {

                      }
                      else if(direction == "down")//当向下滑动手指时令当前页面记数器减1
                      {

                      }
				    }
				});		
			},//绑定页面左右水平滑动事件
			//绑定地图块点击事件
			bindFightMapClick : function(){
				var sub_item_sler = this_obj.func_set.el_selector_gen_func.genFightMapItemSelr();
				//alert($(sub_item_sler).length);
				$(sub_item_sler).each(function(index, el) {
					var i_this = this;
					$(i_this).click(function(event) {
						/* Act on the event */
						//处理
						this_obj.func_set.handle_event_func.handleFightMapClick(i_this);
					});
				});
			},
			//绑定比例图拉环点击按钮
			bindRatioDgmPullRingClick : function(){
				var sub_item_sler = this_obj.func_set.el_selector_gen_func.genRatioDgmPullRingAreaSelr();
				$(sub_item_sler).click(function(event) {
					/* Act on the event */
					//alert("ring");
					this_obj.func_set.handle_event_func.handleRatioDgmPullRingClick();
				});
			},
			//绑定下拉比例拉环点击按钮
			bindRationDgmDropRingClick : function(){
				var sub_item_sler = this_obj.func_set.el_selector_gen_func.genRatioDgmDropRingAreaSelr();
				//alert(sub_item_sler);
				$(sub_item_sler).click(function(event) {
					/* Act on the event */
					//alert("od");
					//处理时间
					this_obj.func_set.handle_event_func.handleRatioDgmDropRingClick();
				});
			},	
			//绑定点击关闭比例图事件
			bindCloseRatioDgmClick : function(){
				var sub_item_sler = this_obj.func_set.el_selector_gen_func.genRatioDgmCloseBtnSelr();
				$(sub_item_sler).click(function(event) {
					/* Act on the event */
					//alert("ring");
					this_obj.func_set.handle_event_func.handleCloseRatioDgmClick();
				});
			},

			//绑定点击扶贫概况打开按钮
			bindHpIntroStartBtnClick : function(){
				var sub_item_sler = this_obj.func_set.el_selector_gen_func.genHpIntroBtnAreaSelr();
				$(sub_item_sler).click(function(event) {
					/* Act on the event */
					//alert("ring");
					this_obj.func_set.handle_event_func.handleHpIntroStartBtnClick();
				});
			},
			//绑定点击扶贫概况关闭按钮
			bindHpIntroCloseBtnClick : function(){
				var sub_item_sler = this_obj.func_set.el_selector_gen_func.genHpIntroCloseBtnSelr();
				$(sub_item_sler).click(function(event) {
					/* Act on the event */
					//alert("ring");
					this_obj.func_set.handle_event_func.handleHpIntroCloseBtnClick();
				});

			},

			//绑定菜单项的扶贫大数据
			bindMenuItemHpBigDataClick : function(){
				var sub_item_sler = this_obj.func_set.el_selector_gen_func.genHpBigDataMiSelr();//alert(sub_item_sler);
				$(sub_item_sler).click(function(event) {
					this_obj.func_set.handle_event_func.handleMenuItemHpBigDataClick();
				});
			},

			//绑定canvas区域点击时间
			bindCanvasClick : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genRDCanvasAreaSelr();
				$(selr).click(function(event) {
					/* Act on the event */
					//var n_str = event.xC
					alert(event.clientX+","+event.clientY);
					this_obj.func_set.draw_func.drawCircle(event.clientX,event.clientY);
				});
			},



			//绑定点击事件
			_bindClickEvent : function(selr,call_func){
				$(selr).click(function(event) {
					/* Act on the event */
					call_func();
				});
			},
			//绑定点击事件,多元素
			_bindMutilElClickEvent : function(){

			},

		};//事件相关绑定函数集结束
				////事件相关的处理函数
		this_obj.func_set.handle_event_func = {
			//处理左划事件
			handleSwipeLeft : function(){
				this_obj.func_set.area_pos_func.pageSwipeLeft();
			},
			//处理右划事件
			handleSwipeRight : function(){
				this_obj.func_set.area_pos_func.pageSwipeRight();

			},

			//处理战略地图点击事件
			handleFightMapClick : function(i_this){
				//获取编号
				var divs_num = $(i_this).find("[font-size=10]").html();
				//alert(divs_num);
				//进行跳转
				window.location.href = this_obj.sys_opt.sys_conf.redirect_rul + "?map_num=" + divs_num;

			},

			//处理比例图拉环点击事件
			handleRatioDgmPullRingClick : function(){
				//比例图向上滑动
				this_obj.func_set.area_pos_func.ratioDgmSlideToTop();
			},
			//处理比例图下拉拉环点击事件
			handleRatioDgmDropRingClick : function(){
				//比例图向上滑动
				this_obj.func_set.area_pos_func.ratioDgmSlideToBottom();
			},

			//处理点击关闭比例图事件
			handleCloseRatioDgmClick : function(){
				//比例图滑动到底部
				this_obj.func_set.area_pos_func.ratioDgmSlideToBottom();
			},

			//处理点击打开扶贫概况按钮
			handleHpIntroStartBtnClick : function(){
				this_obj.func_set.area_pos_func.helpPoorIntroSlideToTop();
			},
			//处理点击关闭扶贫概况按钮
			handleHpIntroCloseBtnClick : function(){
				this_obj.func_set.area_pos_func.helpPoorIntroSlideToBottom();
			},
			//处理扶贫大数据菜单项点击事件
			handleMenuItemHpBigDataClick : function(){
				//alert("ok");
				//关闭菜单项
				this_obj.func_set.area_pos_func.pageSwipeLeft();
				//显示大数据图
				this_obj.func_set.area_pos_func.ratioDgmSlideToTop();

			},

		};//事件相关的处理函数


		/////ajax返回处理函数
		this_obj.func_set.ajax_ret_func = {
			//处理ajax返回
			handleAjaxRet : function(json_obj){
			}
		};//ajax返回处理函数


		/////元素选择器生成函数集
		this_obj.func_set.el_selector_gen_func = {
			//生成显示区域的选择器
			genDisareaSelr : function(){
				return ".info_dis_area";
			},
			//生成菜单区域的选择器
			genMenuConSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genDisareaSelr()+" .menu_con";
			},
			//生成菜单项的选择器
			genMenuItemSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genMenuConSelr() + " .menu_item";
			},
			//生成地图区域的选择器
			genMapConSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genDisareaSelr()+" .map_con";
			},
			//生成战略地图区域选择器
			genFightMapSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genMapConSelr() + " .fight_map_area";
			},
			//生成战略地图块的选择器
			genFightMapItemSelr:function(){
				return this_obj.func_set.el_selector_gen_func.genFightMapSelr() + " svg>g";
			},
			//生成战略地图文本区域的选择器
			genFightMapItemTextSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genFightMapSelr() + " text";
			},
			//生成比例图的选择器
			genRatioDgmAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genMapConSelr() + " .ratio_digm_area";
			},
			//生成比例图拉环区域选择器
			genRatioDgmPullRingAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr() + " .ratio_dgm_pring_area";
			},
			//生成比例图下拉拉环区域选择器
			genRatioDgmDropRingAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr() + " .ratio_dgm_pring_down_area";
			},
			//生成比例图关闭按钮的选择器
			genRatioDgmCloseAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr() + " .ratio_dgm_close_area";
			},
			//生成比例图关闭按钮的选择器
			genRatioDgmCloseBtnSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRatioDgmCloseAreaSelr() + " .pr_img img";
			},
			//生成canvas区域的选择器
			genRDCanvasAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr() + " .dgm_canvas_area";
			},
			//生成贫困人口分布图区域选择器
			genPoplDistbDgmAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr() + " .popl_distb_dgm_area";
			},
			//生成扶贫概况引导按钮区域选择器
			genHpIntroBtnAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRatioDgmAreaSelr() + " .hp_intro_start_area";
			},

			//生成扶贫概况区域选择器
			genHelpPoorIntroAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genMapConSelr() + " .help_poor_intro_area";
			},
			//生成扶贫概况关闭区域选择器
			genHelpPoorIntroCloseAreaSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genHelpPoorIntroAreaSelr() + " .hpi_area_close_area";
			},
			//生成扶贫概况关闭按钮区域选择器
			genHpIntroCloseBtnSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genHelpPoorIntroCloseAreaSelr() + " .pr_img";
			},


			//生成菜单项中扶贫大数据项的选择器
			genHpBigDataMiSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genDisareaSelr() + " .hp_bid_data";
			},

		};//元素选择器生成函数集


		///数据对象操作集
		this_obj.func_set.data_obj_func = {
			//字符串合并,字段覆盖
			strMerge : function(old_str, new_str){
				//生成对象
				var old_obj = this_obj.func_set.data_obj_func.str2Obj(old_str,';',":");
				var new_obj = this_obj.func_set.data_obj_func.str2Obj(new_str,';',":");
				//对象合并,合并到就对象中
				this_obj.func_set.data_obj_func.objMerge(old_obj,new_obj);

				//生成合并后的字符串
				var m_str = this_obj.func_set.data_obj_func.obj2Str(old_obj, ';',":");

				return m_str;

			},
			//字符串转换成对象,指定属性之间分隔符和属性内部分隔符
			str2Obj : function(data_str,outer_dlt, inner_dlt){
				var data_obj = {};
				//分割属性,分割时,可能为空
				var f_arr = data_str.split(outer_dlt);
				//遍历分割数组
				$.each(f_arr,function() {
					//去掉空白
					var str = this;
					str = str.replace(/(^\s*)|(\s*$)/g, "");
					if(str != "")
					{
						//分割kv
						var kv_arr = str.split(inner_dlt);

						data_obj[kv_arr[0]] = kv_arr[1];						
					}

				});

				return data_obj;
			},

			//对象变成字符串
			obj2Str : function(data_obj,outer_dlt, inner_dlt){
				var data_str = "";
				//遍历分割数组
				for ( var key in data_obj ){
					data_str += key + inner_dlt + data_obj[key] + outer_dlt;
				}

				//data_str += outer_dlt;

				return data_str;
			},

			//对象合并,新对象字段覆盖就对象字段
			objMerge : function(old_obj, new_obj){
				//遍历新对象
				for ( var key in new_obj ){
					old_obj[key] = new_obj[key];
				}
			},

		};//数据对象操作集
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		Index.action_obj = this_obj;
		this_obj.Init(i_options);

		return this_obj;
	},//initCtrl
	animateDraw : function(){
		//alert("ok");
		Index.action_obj.func_set.draw_func.animateDrawRingDgmAction();
	},
	action_obj : "",


}//Index class













