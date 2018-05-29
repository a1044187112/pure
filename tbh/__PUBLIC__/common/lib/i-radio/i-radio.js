
// JavaScript Document
/*	
 * 自定义
 */
var iRadio = {	//初始化对象
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
				selector 		: "",	//选择器
				post_name		: "",	//用于提交的名称
			},

		};


		//函数集
		this_obj.func_set = {
			//配置函数集
			conf_func 				: "",
			//系统初始化函数集
			sys_init_func			: "",

			//html dom元素
			html_dom_func			: "",
			//生成子元素代码
			sub_el_code_gen_func	: "",

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
			//初始化系统数据
			this_obj.func_set.sys_init_func.sysInit();
			//创建元素
			this_obj.func_set.html_dom_func.createEl();
			//重置单选框组
			this_obj.func_set.el_dom_opert_func.resetRadioCtrls();
			//绑定事件
			this_obj.func_set.event_bind_func.bindEvnet();
			// //解析配置函数
			// this_obj.func_set.conf_func.parseOptions(i_options);

			// //创建元素
			// this_obj.func_set.html_dom_func.createEl();
			// //重置子区域的位置
			// this_obj.func_set.area_pos_func.resetSubAreaPos();
			// //绘制环形比例图
			// this_obj.func_set.draw_func.animateDrawRingDgm();

			// //绑定事件
			// this_obj.func_set.event_bind_func.bindEvnet();

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
				this_obj.func_set.conf_func.sysOptionsAssign(option_obj,'selector');
				this_obj.func_set.conf_func.sysOptionsAssign(option_obj,'post_name');
				
			},
			//初始化子元素数据
			initSubElData:function(option_obj)
			{			
				//this_obj.sub_el_src.
				//添加到比例项资源表中
				this_obj.sub_el_src.push(option_obj);

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
			},
		};//系统初始化函数集

		//html dom元素
		this_obj.func_set.html_dom_func = {
			//创建元素
			createEl : function(){
				this_obj.func_set.html_dom_func.createSubEl();
			},

			//创建子元素
			createSubEl : function(){
				var box_selr = this_obj.func_set.el_selector_gen_func.genDisAreaSelr();
				//创建单选框元素
				$.each(this_obj.sub_el_src, function(index, el) {
					//生成代码
					var el_html = this_obj.func_set.sub_el_code_gen_func.genRadioCtrlCode(this);
					//追加到父元素中
					$(box_selr).append(el_html);
				});

				//创建隐藏域
				var el_html = this_obj.func_set.sub_el_code_gen_func.genRstHiddenInputCode();
				//追加到父元素中
				$(box_selr).append(el_html);

			},

		};

		//生成子元素代码
		this_obj.func_set.sub_el_code_gen_func = {
			//生成单选框控件的代码
			genRadioCtrlCode : function(src_obj){
				var title = src_obj.title;
				var val = src_obj.val;
				var el_code = '\
	              <div class="i-radio-con">\
	                <div class="i_radio i_radio_item">\
	                  <div class="inner_c"></div>\
	                  <div class="i_val" style="display: none;">'+val+'</div>\
	                </div>\
	                <div class="radio_title i_radio_item">\
	                  '+title+'\
	                </div>\
	                <div style="clear: both;"></div>\
	              </div>\
              	';

              	return el_code;
			},
			//生成结果隐藏域的代码
			genRstHiddenInputCode : function(){
				var name = this_obj.sys_opt.sys_conf.post_name;
				var el_code = '<input type="hidden" name="'+name+'" value="" class="i_sel_rst_val" />';
				return el_code;
			}
		};//生成子元素代码

		///事件相关绑定函数集
		this_obj.func_set.event_bind_func = {
			//绑定事件
			bindEvnet : function(){
				//绑定单选框按钮
				this_obj.func_set.event_bind_func.bindRadioCtrlClik();
			},

			//绑定单选框点击事件
			bindRadioCtrlClik : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genRadioConSelr();
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

				//重置选择结果
				this_obj.func_set.el_dom_opert_func.resetSelRstHiddenInputVal();
			},

			//清空单选框元素
			clearAllRadioCtrlStatus : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genRadioCtrlSelr();
				$(selr).each(function(index, el) {
					if($(this).hasClass('active'))
						$(this).removeClass('active');
				});
			},

			//重置选择结果隐藏的值,即使将选择的值放入隐藏域中
			resetSelRstHiddenInputVal : function(){
				var selr = this_obj.func_set.el_selector_gen_func.genBeenSelRadioCtrlValSelr();
				var val = $(selr).html();//alert(val);

				//设置
				this_obj.func_set.el_dom_opert_func.setSelRstHiddenInputVal(val);
			},

			//设置结果值隐藏域的值
			setSelRstHiddenInputVal : function(val){
				//生成隐藏域的选择器
				var selr = this_obj.func_set.el_selector_gen_func.genSelRstHiddenInputSelr();//alert();
				$(selr).val(val);
			},
		}//元素对象操作函数集

		/////元素选择器生成函数集
		this_obj.func_set.el_selector_gen_func = {
			//生成显示区域的选择器
			genDisAreaSelr : function(){
				return this_obj.sys_opt.sys_conf.selector;
			},
			//生成单选框容器选择器
			genRadioConSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genDisAreaSelr() + " .i-radio-con";
			},
			//生成单选框的选择器
			genRadioCtrlSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRadioConSelr() + " .i_radio";
			},
			//生成单选框指定项的选择器
			genRadioCtrlItemSelr : function(index){
				return this_obj.func_set.el_selector_gen_func.genRadioCtrlSelr() + ":eq("+index+")";
			},
			//生成已选择的单选框的选择器
			genBeenSelRadioCtrlSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genRadioConSelr() + " .active";
			},
			//生成已选择的单选框值的选择器
			genBeenSelRadioCtrlValSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genBeenSelRadioCtrlSelr() + " .i_val";
			},
			//生成选择结果隐藏域的选择器
			genSelRstHiddenInputSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genDisAreaSelr() + " .i_sel_rst_val";
			},
		},//元素选择器生成函数集
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		iRadio.action_obj = this_obj;
		this_obj.Init(i_options);

		return this_obj;
	},//initCtrl
	animateDraw : function(){
		//alert("ok");
		iRadio.action_obj.func_set.draw_func.animateDrawRingDgmAction();
	},
	action_obj : "",


}//iRadio class













