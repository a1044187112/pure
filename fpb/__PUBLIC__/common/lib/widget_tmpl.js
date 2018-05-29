// JavaScript Document
/*	插件模版js文件
*/
var WidgetTmpl = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		this_obj.sub_el_files = [];


		
		///系统选项
		this_obj.sys_opt = {
			selector			: "",		//父元素选择器表达式
			base_el_html		: "",		//基础元素骨架的html
			link_btn_selr		: "",		//父元素选择器表达式
			before_submit_call : "",
			sim_post_if		: false,	//模拟post提交
			submit_url 		: "",		//提交按钮对应的url
			file_up_url		: "",		//文件上传路径
			dis_date			: "",		//显示日期

			box_id_prefix		: "i_schedule",	//下拉框识别码的前缀
			box_id 			: "",					//下拉框识别码的前缀			
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
			item_selector_gen_func 		: "",
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
			init_form_ctrl_func	: "",
			//子元素清空函数
			clear_form_ctrl_func	: "",			
		}

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
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'link_btn_selr');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'before_submit_call');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'sim_post_if');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'file_up_url');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'submit_url');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'dis_date');
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
				this_obj.sys_opt.box_id = this_obj.sys_opt.box_id_prefix + this_obj.get_plg_data_func.getCtrlCount();
				//格式化日期

				//构建html
				this_obj.sys_opt.base_el_html = '\
			        <div class="i_schedule">\
			        	<div class="ui-grid-b schedule_con">\
			        		<div class="ui-block-a sc_item">\
			        			<div class="sc_dir_prev"></div>\
			        		</div>\
			        		<div class="ui-block-b sc_item">\
			        			2016-03-02 星期三\
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

			    //连接到操作按钮
			    this_obj.func_set.html_dom_func.linkActionBtn2Box();
			},//func createEl



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
				this_obj.func_set.event_bind_func.bindClickSubmitBtnEvent();
				this_obj.func_set.event_bind_func.bindBoxShowEvent();
			},

			//绑定点击提交按钮事件
			bindClickSubmitBtnEvent : function(){
				$(this_obj.func_set.item_selector_gen_func.genSubmitBtnSelr()).click(this_obj.func_set.handle_event_func.handleSubmitBtnClick);
			},

			//绑定显示框下拉事件
			bindBoxShowEvent : function(){
				$(this_obj.func_set.item_selector_gen_func.genBoxElSelr()).on('show.bs.collapse', function () {
					this_obj.func_set.html_dom_func.initSubEl();
				})
			},

		};//事件相关绑定函数集结束

		////事件相关的处理函数
		this_obj.func_set.handle_event_func = {
			//点击提交按钮处理函数
			handleSubmitBtnClick : function(e){
				//提交前的处理
				this_obj.func_set.handle_event_func.beforeSubmitHandle();

				//获取表单数据
				var data_str = $(this_obj.func_set.item_selector_gen_func.genFormElSelr()).serialize();
				var data_obj = {};
				data_obj.data = data_str;
				//alert(data_str);
				
				var url = $(this_obj.func_set.item_selector_gen_func.genSubmitBtnSelr()).attr("data-url");
				//判断当前是否使用sim_post方式提交
				if(this_obj.sys_opt.sim_post_if) 
				{
					alert(url);
					SimPost(url,data_obj);
					return;	
				}
				//SimPost(url,data_obj);return;
				$.post(url,$.param(data_obj),function(Json){
					//获取数据
					var ret_code = Json.ret_code;
					var ret_state = Json.ret_state;
					//alert("ok");
					
					//判断返回标志位
					if(ret_code == 0)
					{
						//数据操作成功
						notice_modal.Show('操作提示',"数据操作成功");
						//alert(ret_state);
						//设置回调
						notice_modal.SetHiddenCall(function (){window.location.href=DataTransDecode(ret_state);});
					}
					else
					{
						//数据操作失败
						notice_modal.Show('发生错误',ret_state);
					}
				},"json");
				//alert(data_str +","+url);
				//关闭对话框
				this_obj.func_set.area_display_func.hideArea();
				///$('#'+edit_modal.sys_options.modal_id).modal('hide');
			},//

			//数据提交前的操作处理函数
			beforeSubmitHandle: function(){
				//将文本编辑器的值加入到控件中,以便提交
				this_obj.func_set.html_dom_func.initTextEditorValue();

				//进行数据前的外部调用操作
				if(typeof(eval(this_obj.sys_opt.before_submit_call)) == "function")
					this_obj.sys_opt.before_submit_call();
			},//beforeSubmitHandle	
		};//事件相关的处理函数

		///ajax数据返回处理函数
		this_obj.func_set.ajax_ret_func = {
			//文本编辑器文件上传回调
			writeIntoCtrl : function(json_obj){
				//alert( json_obj.ret_state);
				//获取传递的绑定数据
				var bind_key = json_obj.extra_data;
				//将图片插入到编辑器中
				//$(GenTextEditorElSelector(bind_key)).summernote("insertImage", json_obj.ret_state); 
				$(this_obj.func_set.item_selector_gen_func.genTextEditorElSelector(bind_key)).summernote("insertImage", json_obj.ret_state); 
				//alert(json_obj.extra_data);
			},
		};//ajax数据返回处理函数

		////子元素操作函数集
		this_obj.func_set.sub_el_operation_func = {
		};//子元素操作函数集

		////子元素项选择器生成函数集
		this_obj.func_set.item_selector_gen_func = {
		};//子元素项选择器获取函数集结束

		////条件判断函数集
		this_obj.func_set.condition_judge_func = {
		}//条件判断函数集

		////获取插件内部数据
		this_obj.func_set.get_plg_data_func = {
			//获取当前已经创建的对象的个数
			getCtrlCount : function(){
				return WidgetTmpl.allCtlrObj.length;
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
				WidgetTmpl.closeAllCtrl();
			},

		}//显示或隐藏函数集结束
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
		//插入到对象表中
		WidgetTmpl.allCtlrObj.push(this_obj);

		return this_obj;
	},//initCtrl

	//所有对象
	allCtlrObj:[],

	//关闭所有的对象
	closeAllCtrl:function(){
		$.each(WidgetTmpl.allCtlrObj,function(index, el) {
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
			var ctrl_obj = WidgetTmpl.initCtrl(i_options);
		});
	},

}//WidgetTmpl class
















