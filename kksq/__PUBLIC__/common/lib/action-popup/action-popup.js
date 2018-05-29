// JavaScript Document
/*
 * 操作项数据弹出,指定相应的元素位置弹出
 */
var ActionItemPopup = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//alert("2343");
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		
		///系统选项
		this_obj.sys_opt = {};
		this_obj.sys_opt.selector			= "";	//父元素选择器表达式
		this_obj.sys_opt.bind_el_selector	= "";	//绑定元素的选择器
		this_obj.sys_opt.base_el_html		= "";	//基础元素骨架的html
		this_obj.sys_opt.base_el_class_name	= "";	//基础元素的选择器

		this_obj.sys_opt.el_cn_prefix		= "action_popup_area";	//基础元素css类名
		this_obj.sys_opt.base_el_class_name	= "";	//基础元素css类名
		this_obj.sys_opt.hide_class_name	= "action_popup_area_hide";	//隐藏显示框的类名
		this_obj.sys_opt.nomal_dis_css_name	= "action_popup_area";	//正常显示时的类名
		this_obj.sys_opt.bind_el_unq_css_name = "";		//指定元素的唯一类名,用于标识指定元素


		
		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置函数
			this_obj.opt_func.parseOptions(i_options);

			//创建元素
			this_obj.html_dom_func.createEl();

			//绑定事件
			this_obj.event_bind_func.bindEvnet();
		}//	Init
		
		//关闭区域
		this_obj.closeArea = function(){
			this_obj.area_display_func.hideArea();
		}
		////////////// 内部私有函数集/////////////////////////////////
		//私有函数,配置数据函数
		this_obj.opt_func = {
			//解析配置项
			parseOptions : function (i_options){
				//遍历用户自定义配置项
				$.each(i_options, function(i){
					//alert(this.type );
					switch(this['type'])
					{
						case 'system':
							//调用初始化函数进行初始化操作
							this_obj.opt_func.initSysOptions(this);
						break;
						default:
							this_obj.sub_el_src.push(this);
					}
					
				});//each
					
			},//func parseOptions

			//初始化系统选项
			initSysOptions:function (option_obj)
			{
				//指定父元素的选择器
				this_obj.opt_func.sysOptionsAssign(option_obj,'selector');
				if(this_obj.sys_opt.selector == "") this_obj.sys_opt.selector="body";
				//alert(this_obj.sys_opt.selector);
				//绑定元素选择器
				this_obj.opt_func.sysOptionsAssign(option_obj,'bind_el_selector');
				this_obj.opt_func.sysOptionsAssign(option_obj,'bind_el_unq_css_name');
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
		this_obj.html_dom_func = {
			//元素的创建
			createEl : function(){
				//创建基础元素
				this_obj.html_dom_func.createBaseEl();

				//创建用于显示的子元素
				this_obj.html_dom_func.createDisSubEl();
			},
			//创建插件需要的基础元素并添加到父元素中
			createBaseEl : function(){
				//构建html
				this_obj.sys_opt.base_el_html = '\
					<div class="'+this_obj.sys_opt.hide_class_name+' '+this_obj.sys_opt.nomal_dis_css_name+' '+this_obj.item_selector_gen.genBaseElClassName()+'">\
						<div class="action_popup_box">\
						</div>\
						<div class="apb_tri_line">\
							<div class="apb_tri1"></div><div class="apb_tri2"></div>\
						</div>\
					</div>\
			    ';


			    //追加到父元素中
			    $(""+this_obj.sys_opt.selector).append(this_obj.sys_opt.base_el_html);
			},//func createEl

			//创建用于显示的子元素,使用传递的数据创建基础框架之内的子元素
			createDisSubEl : function ()
			{
				//子元素框对象
				var append_box_obj = $(this_obj.item_selector_gen.genSubElAppendBoxSelr());

				//遍历子元素的数据
				$.each(this_obj.sub_el_src,function(index) {
					var action_url 	= this['action_url'];
					var text 	= this['text'];
					var sub_el_html = '\
						<div class="action_item">\
							<a target="_top" href="'+action_url+'">\
								'+text+'\
							</a>\
						</div>\
					';

					append_box_obj.append(sub_el_html);
				});
			},// func createSubEl


		};//创建HTML DOM元素函数结束

		///事件相关绑定函数集
		this_obj.event_bind_func = {
			//绑定事件
			bindEvnet : function(){
				this_obj.event_bind_func.bindElClick();

				this_obj.event_bind_func.bindElBlur();
			},
			//绑定元素点击事件
			bindElClick : function(){
				$(this_obj.sys_opt.bind_el_selector).click(function(event) {
					/* Act on the event */
					//获取元素的相对坐标
					var top = $(this).position().top;
					var left = $(this).position().left;
					//数据项框的高度
					var height 			= $(this_obj.item_selector_gen.genPopupBoxSelr()).height();
					var box_width 		= $(this_obj.item_selector_gen.genPopupBoxSelr()).width();
					var arrow_height 	= $(this_obj.item_selector_gen.genArrowMainItmeSelr()).outerHeight();
					//当前元素的宽度
					var width = $(this).width();
					//alert(bottom);

					//需要将弹出层放在绑定元素的正上方,计算bottom
					var b_top = top-height-arrow_height;
					var b_left = left + (width/2 - box_width/2)+3;


					//设置弹出层位置
					var style_str = "top: "+b_top+"px;left: "+b_left+"px" ;
					$(this_obj.item_selector_gen.genPopupBoxSelr()).attr("style",style_str);

					//关闭所有弹出层

					//显示弹出层
					this_obj.area_display_func.showArea();
				});

			},
			//失去焦点时,隐藏元素
			bindElBlur : function() {
				$(this_obj.sys_opt.bind_el_selector).blur(function(event) {
					/* Act on the event */
					//隐藏元素
					this_obj.area_display_func.hideArea();
				});

				//绑定点击body
				$("body").click(function(event) {
					/* Act on the event */
					var target = $(event.target);

					//判断点击的对象是否是元素绑定的对象
					//alert(target.attr("class"));
					var class_name_str = target.attr("class");
					if(class_name_str != undefined)
					{
						//判断当前点击的是否是指定元素
						var index = class_name_str.indexOf(this_obj.sys_opt.bind_el_unq_css_name);
						if(index < 0)
						{
							//点击的是其他位置,关闭元素
							this_obj.area_display_func.hideArea();
						}						
					}
					else{
						//不能存在类,则表示点击不再指定元素内,直接关闭
						this_obj.area_display_func.hideArea();
					}

				});
			}
			
		};//事件相关绑定函数集结束

		////子元素项选择器生成函数集
		this_obj.item_selector_gen = {
			//生成基础元素css名,使用指定的前缀,加上当前已经创建的对象的总数,保证css类名唯一
			genBaseElClassName :function(){
				//return this_obj.sys_opt.el_cn_prefix + this_obj.get_plg_data.getCtrlCount();
				this_obj.sys_opt.base_el_class_name = this_obj.sys_opt.el_cn_prefix + this_obj.get_plg_data.getCtrlCount();
				return this_obj.sys_opt.base_el_class_name;
			},
			//生成子元素填充框选择器
			genSubElAppendBoxSelr : function(){
				return "." + this_obj.sys_opt.base_el_class_name + " .action_popup_box";
			},
			//生成箭头框的选择器
			genArrowBoxSelr : function(){
				return "." + this_obj.sys_opt.base_el_class_name + " .apb_tri_line";

			},
			//生成箭头主体元素的选择器
			genArrowMainItmeSelr : function(){
				return "." + this_obj.sys_opt.base_el_class_name + " .apb_tri_line .apb_tri1";
			},
			//获取整个弹出层的元素选择器
			genPopupBoxSelr : function(){
				return "." + this_obj.sys_opt.base_el_class_name;
			},
			//生成整个插件区域的选择器
			genAreaSelr : function(){
				return "." + this_obj.sys_opt.base_el_class_name;
			},

		};//子元素项选择器获取函数集结束

		////获取插件内部数据
		this_obj.get_plg_data = {
			//获取当前已经创建的对象的个数
			getCtrlCount : function(){
				return ActionItemPopup.allCtlrObj.length;
			},
		}

		////显示或隐藏函数集
		this_obj.area_display_func = {
			//隐藏区域
			hideArea : function(){
				//判断是否存在隐藏类
				if(!$(this_obj.item_selector_gen.genAreaSelr()).hasClass(this_obj.sys_opt.hide_class_name))
				{
					//隐藏区域
					$(this_obj.item_selector_gen.genAreaSelr()).addClass(this_obj.sys_opt.hide_class_name);
				}
			},
			//显示区域
			showArea : function(){
				//隐藏所有当前类的对象区域
				this_obj.area_display_func.hideAllObjArea();

				//显示当前区域
				if($(this_obj.item_selector_gen.genAreaSelr()).hasClass(this_obj.sys_opt.hide_class_name))
				{
					//隐藏区域
					$(this_obj.item_selector_gen.genAreaSelr()).removeClass(this_obj.sys_opt.hide_class_name);
				}

			},
			//关闭所有显示对象
			hideAllObjArea : function(){
				ActionItemPopup.closeAllCtrl();
			},

		}//显示或隐藏函数集结束
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
		//插入到对象表中
		ActionItemPopup.allCtlrObj.push(this_obj);
	},//initCtrl

	//所有对象
	allCtlrObj:[],

	//关闭所有的对象
	closeAllCtrl:function(){
		$.each(ActionItemPopup.allCtlrObj,function(index, el) {
			this.closeArea();
		});
	},

}//DisContentSet class