// JavaScript Document
/*	
*/
var Consult = {	//初始化对象
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

		};


		//函数集
		this_obj.func_set = {
			//配置函数集
			conf_func 				: "",

			//系统初始化函数集
			sys_init_func			: "",

			//事件相关绑定函数集
			event_bind_func 		: "",
			//事件相关的处理函数
			handle_event_func 		: "",

			//元素对象操作函数集
			el_dom_opert_func		: "",
			//元素选择器生成函数集
			el_selector_gen_func	: "",
		}
		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置函数
			this_obj.func_set.conf_func.parseOptions(i_options);

			//重置单选框组
			this_obj.func_set.el_dom_opert_func.resetRadioCtrls();
			//绑定事件
			this_obj.func_set.event_bind_func.bindEvnet();
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

		///事件相关绑定函数集
		this_obj.func_set.event_bind_func = {
			//绑定事件
			bindEvnet : function(){
				//绑定单选框按钮
				this_obj.func_set.event_bind_func.bindRadioCtrlClik();
			},

			//绑定单选框点击事件
			bindRadioCtrlClik : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genRadioCtrlSelr();
				$(selr).each(function(index, el) {
					$(this).click(function(event) {
						/* Act on the event */
						this_obj.func_set.handle_event_func.handleRadioCtrlClik(index);
					});
				});

			},

		};//事件相关绑定函数集结束

		////事件相关的处理函数
		this_obj.func_set.handle_event_func = {
			//处理单选框绑定事件
			handleRadioCtrlClik : function(index){
				//设置被选中的单选按钮
				this_obj.func_set.el_dom_opert_func.setRadioCtrlBeenSel(index);
			},

		};//事件相关的处理函数

		/////元素对象操作函数集
		this_obj.func_set.el_dom_opert_func = {
			//重置单选框组
			resetRadioCtrls : function(){
				this_obj.func_set.el_dom_opert_func.setRadioCtrlBeenSel(0);
			},

			//设置单选框为选中
			setRadioCtrlBeenSel : function(index){
				//alert(index);
				//清空所有单选框
				this_obj.func_set.el_dom_opert_func.clearAllRadioCtrlStatus();

				var selr = this_obj.func_set.el_selector_gen_func.genRadioCtrlItemSelr(index);
				$(selr).addClass('active');
			},

			//清空单选框元素
			clearAllRadioCtrlStatus : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genRadioCtrlSelr();
				$(selr).each(function(index, el) {
					if($(this).hasClass('active'))
						$(this).removeClass('active');
				});
			},
		}//元素对象操作函数集

		/////元素选择器生成函数集
		this_obj.func_set.el_selector_gen_func = {
			//生成显示区域的选择器
			genDisAreaSelr : function(){
				return ".comment_rst_sel_area";
			},
			//生成单选框的选择器
			genRadioCtrlSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genDisAreaSelr() + " .rst_sel_con .i_radio";
			},
			//生成单选框指定项的选择器
			genRadioCtrlItemSelr : function(index){
				return this_obj.func_set.el_selector_gen_func.genRadioCtrlSelr() + ":eq("+index+")";
			},
		},//元素选择器生成函数集
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		Consult.action_obj = this_obj;
		this_obj.Init(i_options);

		return this_obj;
	},//initCtrl
	animateDraw : function(){
		//alert("ok");
		Consult.action_obj.func_set.draw_func.animateDrawRingDgmAction();
	},
	action_obj : "",


}//Consult class













