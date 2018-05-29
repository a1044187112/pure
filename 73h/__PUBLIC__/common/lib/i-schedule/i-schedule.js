// JavaScript Document
/*	日程插件
	单行按钮切换滚动
*/
var iSchedule = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		this_obj.sub_el_files = [];


		
		///系统选项
		this_obj.sys_opt = {
			selector			: "",		//父元素选择器表达式
			before_submit_call 	: "",
			sim_post_if			: false,	//模拟post提交
			submit_url 			: "",		//提交按钮对应的url
			file_up_url			: "",		//文件上传路径
			dis_date			: "",		//显示日期

			base_el_html		: "",				//基础元素骨架的html
			el_box_css_name		: "i_schedule",		//元素的最外框的css类名
			el_box_id 				: "",			//元素的最外框的识别码,也就是类名+对象个数		

			OnDateChg			: "",				//日期改变调用的函数	
		};

		//函数集
		this_obj.func_set = {
			//配置函数集
			opt_func 				: "",
			//HTML DOM函数集
			html_dom_func 			: "",
			//事件相关绑定函数集
			event_bind_func 		: "",
			//子元素项选择器生成函数集
			item_selector_gen_func 	: "",
			//显示或隐藏函数集
			area_display_func 		: "",
			//ajax获取数据返回处理函数集
			ajax_ret_func			: "",
			//子元素操作函数集
			sub_el_operation_func 	: "",
			//html子元素控件代码生成函数集
			sub_el_ctrl_code_gen_func	: "",
			//事件相关的处理函数
			handle_event_func 		: "",
			//条件判断函数集
			condition_judge_func	: "",

			//子元素创建函数集
			create_form_ctrl_func 	: "",
			//子元素初始化函数
			init_form_ctrl_func		: "",
			//子元素清空函数
			clear_form_ctrl_func	: "",	

			//数据转换
			data_exchange_func		: "",
		}

		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置函数
			this_obj.func_set.opt_func.parseOptions(i_options);

			//创建元素
			this_obj.func_set.html_dom_func.createEl();

			//绑定事件
			this_obj.func_set.event_bind_func.bindEvnet();
		}//	Init
		
		//关闭区域
		this_obj.closeArea = function(){

		}

		//返回元素的唯一识别选择器
		this_obj.getBoxUniqueSelr = function(){

		}
		////////////// 内部私有函数集/////////////////////////////////
		//私有函数,配置数据函数
		this_obj.func_set.opt_func = {
			//解析配置项
			parseOptions : function (i_options){
				//遍历用户自定义配置项
				$.each(i_options, function(i){
					//alert(this.type );
					switch(this['type'])
					{
						case 'system':
							//调用初始化函数进行初始化操作
							this_obj.func_set.opt_func.initSysOptions(this);
						break;
						default:
							this_obj.func_set.opt_func.initSubElData(this);
						break;
					}
					
				});//each
					
			},//func parseOptions

			//初始化系统选项
			initSysOptions:function (option_obj)
			{
				//指定父元素的选择器
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'selector');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'sim_post_if');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'submit_url');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'before_submit_call');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'file_up_url');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'dis_date');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'OnDateChg');
			},
			//初始化子元素数据
			initSubElData:function(option_obj)
			{			
				this_obj.sub_el_src.push(option_obj);
			},
					
			//系统选项赋值
			sysOptionsAssign : function (option_obj,attr_name)
			{
				//判断当前的属性是否存在,如果存在则进行赋值
				if((attr_name in option_obj))
				{
					this_obj.sys_opt[attr_name] = option_obj[attr_name];
				}
			},
		};//opt func 配置数据相关函数

		/////创建HTML DOM元素函数
		this_obj.func_set.html_dom_func = {
			//元素的创建
			createEl : function(){
				this_obj.func_set.html_dom_func.createBaseEl();
				this_obj.func_set.html_dom_func.createSubEl();
				this_obj.func_set.html_dom_func.initSubEl();
			},
			//创建插件需要的基础元素并添加到父元素中
			createBaseEl : function(){
				this_obj.sys_opt.el_box_id = this_obj.sys_opt.el_box_css_name + this_obj.func_set.get_plg_data_func.getCtrlCount();
				//格式化日期
				var date_str = this_obj.sys_opt.dis_date;
				var week_str = this_obj.func_set.data_exchange_func.date2WeekStr(date_str);
				//构建html
				this_obj.sys_opt.base_el_html = '\
			        <div class="'+this_obj.sys_opt.el_box_css_name+' '+this_obj.sys_opt.el_box_id+'">\
			        	<div class="ui-grid-b schedule_con">\
			        		<div class="ui-block-a sc_item">\
			        			<div class="sc_dir_prev"></div>\
			        		</div>\
			        		<div class="ui-block-b sc_item sc_dis_date">\
			        			'+date_str+' '+week_str+'\
			        		</div>\
			        		<div class="ui-block-c sc_item">\
			        			<div class="sc_dir_next"></div>\
			        		</div>\
			        	</div>\
			        </div>\
			    ';

			    //先清空,在追加
			    $(""+this_obj.sys_opt.selector).append("");
			    $(""+this_obj.sys_opt.selector).append(this_obj.sys_opt.base_el_html);
			},//func createEl

						//创建子元素
			createSubEl : function (){
				//为表单添加元素,传入的是一个数组
				$.each(this_obj.sub_el_src,function(i){
					//判断控件是否需要创建
					if(this_obj.func_set.condition_judge_func.inputCtrlNeedCreateIf(this))
						this_obj.func_set.create_form_ctrl_func.createFormCtrl(this['type'],this);
				});//each
			},// func createSubEl

			//初始化子元素
			initSubEl : function (){

			},// func createSubEl


		};//创建HTML DOM元素函数结束

		////创建相应类型的表单控件
		this_obj.func_set.create_form_ctrl_func = {
		};//创建相应类型的表单控件结束

		//子元素控件代码生成函数集
		this_obj.func_set.sub_el_ctrl_code_gen_func = {
		};//创建元素内部调用公用函数集结束

		////表单控件初始化
		this_obj.func_set.init_form_ctrl_func = {
		};//表单控件初始化

		////表单控件清空
		this_obj.func_set.clear_form_ctrl_func = {
		};////表单控件清空

		///事件相关绑定函数集
		this_obj.func_set.event_bind_func = {
			//绑定事件
			bindEvnet : function(){
				this_obj.func_set.event_bind_func.bindPrevDayClick();
				this_obj.func_set.event_bind_func.bindNextDayClick();
			},

			//绑定上一日按钮点击事件
			bindPrevDayClick : function(){
				var btn_selr = this_obj.func_set.item_selector_gen_func.genPrevDayBtnSelr();
				$(btn_selr).click(this_obj.func_set.handle_event_func.handlePrevDayClick);
			},

			//绑定下一日按钮点击事件
			bindNextDayClick : function(){
				var btn_selr = this_obj.func_set.item_selector_gen_func.genNextDayBtnSelr();
				$(btn_selr).click(this_obj.func_set.handle_event_func.handleNextDayClick);
			},
		};//事件相关绑定函数集结束

		////事件相关的处理函数
		this_obj.func_set.handle_event_func = {
			//处理前一日点击事件
			handlePrevDayClick : function(e){
				//alert(this_obj.func_set.data_exchange_func.getPrevDate())
				var date_str = this_obj.func_set.data_exchange_func.getPrevDate();
				this_obj.func_set.handle_event_func.handleDateChangeAction(date_str);
			},

			//处理后一日点击事件
			handleNextDayClick : function(e){
				//alert(this_obj.func_set.data_exchange_func.getNextDate())
				var date_str = this_obj.func_set.data_exchange_func.getNextDate();
				this_obj.func_set.handle_event_func.handleDateChangeAction(date_str);
			},

			//处理日期变更操作
			handleDateChangeAction : function(new_date_str){

				//调用日期改变函数
				if(typeof(this_obj.sys_opt.OnDateChg) == "function"){
					this_obj.sys_opt.OnDateChg(new_date_str);
				}
				//重置日期
				this_obj.func_set.sub_el_operation_func.resetDisDateEl(new_date_str);
				
			}

		};//事件相关的处理函数

		///ajax数据返回处理函数
		this_obj.func_set.ajax_ret_func = {
		};//ajax数据返回处理函数

		////子元素操作函数集
		this_obj.func_set.sub_el_operation_func = {
			//重置日期显示元素
			resetDisDateEl : function(new_date_str){
				//设置变量
				this_obj.sys_opt.dis_date = new_date_str;

				//格式化日期
				var date_str = this_obj.sys_opt.dis_date;
				var week_str = this_obj.func_set.data_exchange_func.date2WeekStr(date_str);
				var dis_str = date_str + " " + week_str;

				//设置元素数据
				var selr = this_obj.func_set.item_selector_gen_func.genDisDateElSelr();
				$(selr).html(dis_str);
			},
		};//子元素操作函数集

		////子元素项选择器生成函数集
		this_obj.func_set.item_selector_gen_func = {
			//生成盒子按钮
			genBoxElSelr : function(){
				return this_obj.sys_opt.selector + " ." + this_obj.sys_opt.el_box_id;
			},

			//生成前一日按钮的选择器
			genPrevDayBtnSelr : function(){
				return this_obj.func_set.item_selector_gen_func.genBoxElSelr() + " .sc_dir_prev";
			},			

			//生成后一日按钮的选择器
			genNextDayBtnSelr : function(){
				return this_obj.func_set.item_selector_gen_func.genBoxElSelr() + " .sc_dir_next";
			},

			//生成日期显示元素的选择器
			genDisDateElSelr : function(){
				return this_obj.func_set.item_selector_gen_func.genBoxElSelr() + " .schedule_con .sc_dis_date";
			},



		};//子元素项选择器获取函数集结束

		////条件判断函数集
		this_obj.func_set.condition_judge_func = {
		}//条件判断函数集

		////获取插件内部数据
		this_obj.func_set.get_plg_data_func = {
			//获取当前已经创建的对象的个数
			getCtrlCount : function(){
				return iSchedule.allCtlrObj.length;
			},
		}

		////显示或隐藏函数集
		this_obj.func_set.area_display_func = {
			//隐藏区域
			hideArea : function(){
				$(this_obj.func_set.item_selector_gen_func.genBoxElSelr()).collapse("hide");
			},
			//显示区域
			showArea : function(){


			},
			//关闭所有显示对象
			hideAllObjArea : function(){
				iSchedule.closeAllCtrl();
			},
		}//显示或隐藏函数集结束

		/////数据转换函数
		this_obj.func_set.data_exchange_func = {
			//日期转换成星期
			date2WeekStr : function(date_str){
				var date_obj = new Date(date_str);
				if(date_str == "")
				{
					date_obj = new Date();
				}

				//获取当日编号
				var day_num = date_obj.getDay();
				var dis_str = "";
				//alert(day_num);
				switch (day_num){
					case 0://星期日
					dis_str = "星期日";
					break;
					
					case 1://星期一
					dis_str = "星期一";
					break;
					
					case 2://星期二
					dis_str = "星期二";
					break;
					
					case 3://星期三
					dis_str = "星期三";
					break;
					
					case 4://星期四
					dis_str = "星期三";
					break;
					
					case 5://星期五
					dis_str = "星期五";
					break;
					
					case 6://星期六
					dis_str = "星期六";
					break;

					default:
					dis_str = "星期一";
				}

				return dis_str;
			},

			//获取上一日的日期
			getPrevDate : function(){
				var dis_date = this_obj.sys_opt.dis_date;

				var start_date = new Date(dis_date);
				var dest_date = new Date(start_date.valueOf() - 24*60*60*1000);

				return this_obj.func_set.data_exchange_func.parseDateByObj(dest_date);

			},

			//获取下一日的日期
			getNextDate : function(){
				var dis_date = this_obj.sys_opt.dis_date;

				var start_date = new Date(dis_date);
				var dest_date = new Date(start_date.valueOf() + 24*60*60*1000);

				return this_obj.func_set.data_exchange_func.parseDateByObj(dest_date);

			},


			//提取日期,源自于日期对象,返回日期为标准的2016-02-09,10字长字符串
			parseDateByObj : function(date_obj){
				var year = date_obj.getFullYear();
				var month = date_obj.getMonth() + 1;
				if(month < 10)
				{
					month = "0" + month;
				}
				var date = date_obj.getDate();
				if(date < 10)
				{
					date = "0" + date;
				}

				var dis_str = year + "-" + month + "-" + date;

				return dis_str;
			},
		}//数据转换函数
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
		//插入到对象表中
		iSchedule.allCtlrObj.push(this_obj);

		return this_obj;
	},//initCtrl

	//所有对象
	allCtlrObj:[],

	//关闭所有的对象
	closeAllCtrl:function(){
		$.each(iSchedule.allCtlrObj,function(index, el) {
			this.closeArea();
		});
	},

	//绑定链接编辑按钮元素
	bindAndLinkEditBtn : function(i_options){
		//遍历编辑型按钮
		$(".data_edit_btn").each(function(index, el) {
			//获取元素对应的编辑框的选择器
			var selr = $(this).attr("data-editor_selector");
			var link_btn_selr = $(this).attr("data-self_selr");
			var data_action_type = $(this).attr("data-action_type");

			//追加选择项
			i_options[0].selector = selr;
			i_options[0].link_btn_selr = link_btn_selr;
			i_options[0].data_action_type = data_action_type;
			var ctrl_obj = iSchedule.initCtrl(i_options);
		});
	},

}//iSchedule class
















