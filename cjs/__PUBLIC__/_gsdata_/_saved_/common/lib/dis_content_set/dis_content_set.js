// JavaScript Document
/*显示内容设置插件
*/
var DisContentSet = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//alert("2343");
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		//子元素数据数组的子维度名称
		this_obj.sub_el_sub_dim_name1 = "dis_type";
		this_obj.sub_el_sub_dim_name2 = "dis_val";
		//附加到子元素数据数组中
		this_obj.sub_el_src[this_obj.sub_el_sub_dim_name1] = [];
		this_obj.sub_el_src[this_obj.sub_el_sub_dim_name2] = [];


		
		///系统选项
		this_obj.sys_opt = {};
		this_obj.sys_opt.selector			= "";	//父元素选择器表达式
		this_obj.sys_opt.base_el_html		= "";	//基础元素骨架的html
		this_obj.sys_opt.bind_key			= "";	//用于提交数据的元素绑定的数据
		this_obj.sys_opt.dis_type_bk		= "";	//显示类型的绑定简直
		this_obj.sys_opt.defalut_dis_type	= "";	//默认的显示类型
		this_obj.sys_opt.dt_ctrl_index		= 0;	//显示控件的在控件组中的索引


		this_obj.sys_opt.get_dis_ci_url		= "";	//获取显示内容数据项url
		this_obj.sys_opt.url_post_name		= "dis_type";	//获取显示内容时的名称链接对应的名称




		//函数集
		//配置函数集
		this_obj.opt_func 				= "";
		//HTML DOM函数集
		this_obj.html_dom_func 			= "";
		//事件相关绑定函数集
		this_obj.event_bind_func 		= "";
		//子元素项选择器生成函数集
		this_obj.item_selector_gen_func 		= "";
		//显示或隐藏函数集
		this_obj.area_display_func 		= "";
		//ajax获取数据返回处理函数集
		this_obj.ajax_ret_func			= "";
		//子元素操作函数集
		this_obj.sub_el_operation_func 	= "";

		
		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置函数
			this_obj.opt_func.parseOptions(i_options);

			//创建并初始化
			this_obj.inner_entry_func.createElAndInit();
		}//	Init
		
		//关闭区域
		this_obj.closeArea = function(){
			this_obj.area_display_func.hideArea();
		}

		//清空元素
		this_obj.clearCtrl = function(){
			//创建并初始化
			this_obj.inner_entry_func.createElAndInit();
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
							this_obj.opt_func.initSubElData(this);
						break;
					}
					
				});//each
					
			},//func parseOptions

			//初始化系统选项
			initSysOptions:function (option_obj)
			{
				//指定父元素的选择器
				this_obj.opt_func.sysOptionsAssign(option_obj,'selector');
				this_obj.opt_func.sysOptionsAssign(option_obj,'get_dis_cnt_url');
				this_obj.opt_func.sysOptionsAssign(option_obj,'bind_key');
				this_obj.opt_func.sysOptionsAssign(option_obj,'dis_type_bk');
				this_obj.opt_func.sysOptionsAssign(option_obj,'defalut_dis_type');
			},
			//初始化子元素数据
			initSubElData:function(option_obj)
			{
				var dim_str;
				switch(option_obj['type'])
				{
					case this_obj.sub_el_sub_dim_name1:
						//维度1
						dim_str = this_obj.sub_el_sub_dim_name1;
					break;
					default:
						//维度2
						dim_str = this_obj.sub_el_sub_dim_name2;
					break;
				}				
				this_obj.sub_el_src[dim_str].push(option_obj);

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

		/////入口级函数,封装内部多个流程的接口
		this_obj.inner_entry_func = {
			//创建元素并进行初始化
			createElAndInit : function(){
				//创建元素
				this_obj.html_dom_func.createEl();

				//绑定事件
				this_obj.event_bind_func.bindEvnet();				
			},

		};

		/////创建HTML DOM元素函数
		this_obj.html_dom_func = {
			//元素的创建
			createEl : function(){
				this_obj.html_dom_func.createBaseEl();
				this_obj.html_dom_func.createDisTypeSubEl();
				this_obj.html_dom_func.createDisValueSubEl();

				//创建元素完成后的初始化
				this_obj.stage_finished_handle_func.afterCreateElHandle();
			},
			//创建插件需要的基础元素并添加到父元素中
			createBaseEl : function(){
				//清空父元素框
			    $(""+this_obj.sys_opt.selector).append("");

				var get_url = this_obj.sys_opt.get_dis_cnt_url;
				var dis_tsc_id = this_obj.item_selector_gen_func.genDisTypeItemId();
				//构建html
				this_obj.sys_opt.base_el_html = '\
					<div class="well">\
				        <div class="content_set_edit">\
				          <div class="set_dis_type">\
				            <label class="title">选择显示类型</label>\
				            <form class="form-inline">\
				              <select class="form-control content_select" \
								id="'+dis_tsc_id+'"\
				              	data-url="'+get_url+'"\
				              	data-post_name="'+this_obj.sys_opt.url_post_name+'"\
				              	data-inputs="'+dis_tsc_id+'"\
				              	>\
				                <option value="">点击选择显示类型</option>\
				              </select>\
				            </form>\
				          </div>\
				          <div class="add_sub_part_box">\
				            <label class="title">指定显示内容</label>\
				            <form class="form-inline">\
				                <select class="form-control content_select">\
				                </select>\
				                <button type="button" class="btn btn-primary add_dis_content_btn">添加</button>\
				            </form>\
				          </div>\
				            <div class="dis_sub_part_box">\
				                    显示值:<span class="box_value"></span>\
				            </div>\
				            <div class="submit_sub_part_box">\
			                      <input type="hidden" name="'+this_obj.sys_opt.bind_key+'" value="" class="'+this_obj.sys_opt.bind_key+'"/>\
			                      <input type="hidden" name="'+this_obj.sys_opt.dis_type_bk+'" value="" class="'+this_obj.sys_opt.dis_type_bk+'"/>\
				            </div>\
				        </div>\
				    </div>\
			    ';

			    //追加到父元素中
			    $(""+this_obj.sys_opt.selector).append(this_obj.sys_opt.base_el_html);
			},//func createEl

			//创建显示类型子元素
			createDisTypeSubEl : function (){
				//子元素框对象
				var append_box_obj = $(this_obj.item_selector_gen_func.genDisTypeBoxSelr());
				//清空框对象
				append_box_obj.html("");

				//遍历子元素的数据
				var dim_str = this_obj.sub_el_sub_dim_name1;
				$.each(this_obj.sub_el_src[dim_str],function(index) {
					var value 	= this['value'];
					var name 	= this['name'];

					//判断显示值是否等于默认值
					var been_sel_if = false;
					if(value == this_obj.sys_opt.defalut_dis_type)
					{
						been_sel_if = true;
					}

					var sub_el_html = '<option value="'+value+'" ';
					if(been_sel_if)
						sub_el_html += 'selected="selected"';
					sub_el_html += '>'+name+'</option>';

					append_box_obj.append(sub_el_html);
				});
			},// func createSubEl
			//创建显示值子元素
			createDisValueSubEl : function(){
				//清空子元素框
				var append_box_obj = $(this_obj.item_selector_gen_func.genDisValueBoxSelr());
				append_box_obj.html("");
				//遍历子元素的数据
				var dim_str = this_obj.sub_el_sub_dim_name2;
				//id字符串
				var val_str = "";
				$.each(this_obj.sub_el_src[dim_str],function(index) {
					var value 	= this['value'];
					var name 	= this['name'];
					this_obj.sub_el_operation_func.addDisValueBoxSubItem(value, name);

					val_str += value + ",";
				});		


				//绑定删除按钮事件
				this_obj.event_bind_func.bindDisValueItemRemoveBtnEvent();
				
				//重置提交元素值
				this_obj.sub_el_operation_func.resetSubmiItemValue();	

			},//createDisValueSubEl
		};//创建HTML DOM元素函数结束

		///事件相关绑定函数集
		this_obj.event_bind_func = {
			//绑定事件
			bindEvnet : function(){
				//绑定显示类型元素change事件
				this_obj.event_bind_func.bindDisTypeItemSelChg();

				this_obj.event_bind_func.bindClickAddDisContentBtn();
			},

			//监听显示类型选择框数据项改变事件
			bindDisTypeItemSelChg : function(){
				/////级联select change 监听
				var seletor_ctrl_selr_str = this_obj.item_selector_gen_func.genContentSetArea() + " select";
				$(seletor_ctrl_selr_str).each(function(index, element) {
					//alert(index)
					$(this).change(function(e) {
						//调用子元素操作函数集中的数据项改变处理函数
						this_obj.sub_el_operation_func.selCtrlChgHandleFunc(this, index);
					});
				});//cascade select each	
			},//bindDisTypeItemSelChg

			//监听添加显示内容按钮
			bindClickAddDisContentBtn : function(){
				$(this_obj.item_selector_gen_func.genAddDisCntBtnSelr()).each(function(index, element) {

					//点击添加按钮
					$(this).click(function(e) {
						//调用处理函数
						this_obj.sub_el_operation_func.addDisContentBtnClickHandleFunc();
					});//add_btn click        
				});//each
			},//bindClickAddDisContentBtn

			//监听显示值项删除按钮点击事件
			bindDisValueItemRemoveBtnEvent : function(){
				//alert(this_obj.item_selector_gen_func.genDisValueBoxSelr() + " .glyphicon-remove");
				//删除按钮
				$(this_obj.item_selector_gen_func.genDisValueBoxSelr () + " .glyphicon-remove").each(function(index, element) {
					//点击事件
					$(this).click(function(e) {
						$(this).parent().parent().remove();
						
						//重置提交控件值
						this_obj.sub_el_operation_func.resetSubmiItemValue();
					});
					
					//鼠标滑动事件
					$(this).mousemove(function(e) {
						$(this).parent().attr("style","  background-color: #7EB7EA;");
					});

					//鼠标划出
					$(this).mouseout(function(e) {
						$(this).parent().attr("style","");
					});
				});
			}
			
		};//事件相关绑定函数集结束

		///ajax数据返回处理函数
		this_obj.ajax_ret_func = {
			//级联选择框获取子级别数据,ctrl_index为指定子元素的编号
			handleSelCtrlRet : function(json_obj, ctrl_index){
				//alert(ctrl_index);
				var ret_code = json_obj.ret_code;
				var ret_data = json_obj.ret_data;
				//修改子级别的内容
				var ctrl_obj =$(this_obj.item_selector_gen_func.genSelCtrlSelr(ctrl_index));
				var op_html = "<option value=''>请选择数据项,并添加</option>";
				ctrl_obj.append(op_html);
				$.each(ret_data,function(key,value){
					var t_value = value.id;
					var t_name  = value.name;
					op_html = '<option value="'+t_value+'" >'+t_name+'</option>';
					ctrl_obj.append(op_html);
				});//each					
			},
		};//ajax数据返回处理函数

		////子元素操作函数集
		this_obj.sub_el_operation_func 	= {
			//选择控件数据项改变处理函数
			selCtrlChgHandleFunc : function(e_this,index){
				var item_index = index;
						
				//判断是否需要获取下一级别的数据
				if(typeof($(e_this).attr("data-url"))!="undefined" )
				{
					var cur_id = $(e_this).val();
					//判断是否选择了id
					if(cur_id != "")
					{
						//alert(cur_id);
						//清空级联子级别
						this_obj.sub_el_operation_func.clearCascadeSelCtrlSubItem(item_index);
						//获取下一级别的数据,并交由相应的函数处理
						var extra_data = parseInt(item_index)+1;	//附加数据记录子级别的select index
						adSubDataEx(this_obj.item_selector_gen_func.genSelCtrlSelr(item_index), this_obj.ajax_ret_func.handleSelCtrlRet,extra_data);
					}//if id
					
				}//if obj
			},//selCtrlChgHandleFunc
			//点击添加显示内容按钮处理函数
			addDisContentBtnClickHandleFunc:function(){
				//获取选中的数据,最后一个选择框的中选中项
				var sel_val 	= $(this_obj.item_selector_gen_func.genSelCtrlSelr() + ":last").val();
				var sel_name 	= $(this_obj.item_selector_gen_func.genSelCtrlSelr() + ":last").find("option:selected").text();
				//alert(sel_val);
				//判断是否有数据选中
				if(sel_val != null && sel_val != "")
				{
					//添加数据项
					this_obj.sub_el_operation_func.addDisValueBoxSubItem(sel_val, sel_name);
					
					//绑定删除按钮事件
					this_obj.event_bind_func.bindDisValueItemRemoveBtnEvent();
					
					//重置提交元素值
					this_obj.sub_el_operation_func.resetSubmiItemValue();	
				}	
				else{
					alert("请选择数据项");
				}
			},//addDisContentBtnClickHandleFunc


			//清空级联选择框的所有子级别元素
			clearCascadeSelCtrlSubItem : function(index){
				var t_item_index = index+1;
				while(true)
				{
					var ctrl_obj =$(this_obj.item_selector_gen_func.genSelCtrlSelr(t_item_index));
					if(typeof(ctrl_obj.attr("data-url"))!="undefined")
					{
						ctrl_obj.html("");
					}
					else
					{
						//当前级联链上的最后一个级联,完成后退出
						ctrl_obj.html("");
						break;
					}
					t_item_index++;
				}

				//清空级联选择框之后的控件
				this_obj.sub_el_operation_func.clearAfterCascdSelCtrl();
			},//clearCascadeSelCtrlSubItem

			//清空级联选择框之后的控件
			clearAfterCascdSelCtrl : function(){
				//alert(this_obj.item_selector_gen_func.genDisValueBoxSelr());
				//清空已指定的显示内容框
				var append_box_obj = $(this_obj.item_selector_gen_func.genDisValueBoxSelr());
				append_box_obj.html("");

				//重置提交数据
				this_obj.sub_el_operation_func.resetSubmiItemValue();
			},

			//重置数据提交框
			resetSubmiItemValue : function(){
				var value_str = "";
				//获取所有的已选择的值的id
				$(this_obj.item_selector_gen_func.genDisValueBoxSelr() + " .glyphicon-remove input").each(function(index, element) {
													//alert($(this).val());
					value_str = value_str + $(this).val() + ",";
				});
				
				//去掉最后一个逗号
				if(value_str.length > 0)
				{
					value_str = value_str.substr(0,value_str.length-1);
				}
				//设置值
				$(this_obj.item_selector_gen_func.genSubmitElSelr(this_obj.sys_opt.bind_key)).val(value_str);     

				//设置显示类型的值
				var dt_ctrl_obj = $(this_obj.item_selector_gen_func.genSelCtrlSelr() + ":eq("+this_obj.sys_opt.dt_ctrl_index+")");
				var val = dt_ctrl_obj.val();
				$(this_obj.item_selector_gen_func.genSubmitElSelr(this_obj.sys_opt.dis_type_bk)).val(val);     	
							
			},//resetDisValueBox


			//添加显示值框子元素项
			addDisValueBoxSubItem : function(value, name){
				var append_box_obj = $(this_obj.item_selector_gen_func.genDisValueBoxSelr());

				var sub_el_html = '\
						<span>'+name+'<span class="badge"><span class="glyphicon glyphicon-remove" aria-hidden="true">\
							<input type="hidden" value="'+value+'" />\
						</span></span></span>\
					';

				append_box_obj.append(sub_el_html);
			},

		};//子元素操作函数集

		////子元素项选择器生成函数集
		this_obj.item_selector_gen_func = {
			//生成显示类型子元素填充框选择器
			genDisTypeBoxSelr : function(){
				return this_obj.sys_opt.selector + " .content_set_edit .set_dis_type .content_select";
			},
			//生成显示内容子元素填充框选择器
			genDisContentBoxSelr : function(){
				return this_obj.sys_opt.selector + " .content_set_edit .set_dis_type .content_select";
			},
			//生成显示值元素填充框选择器
			genDisValueBoxSelr : function(){
				return this_obj.sys_opt.selector + " .content_set_edit .dis_sub_part_box .box_value";
			},
			//生成提交元素的选择器
			genSubmitElSelr : function(bind_key){
				return this_obj.sys_opt.selector + " .content_set_edit ." + bind_key;
			},
			//生成整个编辑框区域的选择器
			genContentSetArea : function(){
				return this_obj.sys_opt.selector + " .content_set_edit";
			},
			//生成选择控件的选择器,如果
			genSelCtrlSelr : function(c_index){
				var selr_str = this_obj.sys_opt.selector + " .content_set_edit select";
				if(c_index)
				{
					selr_str = selr_str + ":eq(" + c_index +")";
				}

				return selr_str;
			},
			//生成显示类型选择控件的id,使用content_set_select+当前控件的个数
			genDisTypeItemId : function(){
				return "content_set_select" + this_obj.get_plg_data.getCtrlCount();
			},
			//生成添加显示内容按钮选择器
			genAddDisCntBtnSelr : function(){
				return this_obj.sys_opt.selector + " .content_set_edit .add_sub_part_box .add_dis_content_btn";
			},

		};//子元素项选择器获取函数集结束

		////初始化阶段完成后的处理函数
		this_obj.stage_finished_handle_func = {
			//元素创建完成后,进行相关数据填充
			afterCreateElHandle : function(){
				//判断是否有显示类型的默认值,如果有,则获取相应的显示内容
				var dt_ctrl_obj = $(this_obj.item_selector_gen_func.genSelCtrlSelr() + ":eq("+this_obj.sys_opt.dt_ctrl_index+")");
				var dt_default_value = dt_ctrl_obj.val();
				//alert(dt_default_value);
				if(dt_default_value != "")
				{
					//数据不为空,则获取数据
					//this_obj.sub_el_operation_func.selCtrlChgHandleFunc(dt_ctrl_obj[0],this_obj.sys_opt.dt_ctrl_index);
					//获取下一级别的数据,并交由相应的函数处理
					var item_index = this_obj.sys_opt.dt_ctrl_index;
					var extra_data = parseInt(item_index)+1;	//附加数据记录子级别的select index
					adSubDataEx(this_obj.item_selector_gen_func.genSelCtrlSelr(item_index), this_obj.ajax_ret_func.handleSelCtrlRet,extra_data);
				}
			},//afterCreateElHandle
		};

		////获取插件内部数据
		this_obj.get_plg_data = {
			//获取当前已经创建的对象的个数
			getCtrlCount : function(){
				return DisContentSet.allCtlrObj.length;
			},
		}

		////显示或隐藏函数集
		this_obj.area_display_func = {
			//隐藏区域
			hideArea : function(){

			},
			//显示区域
			showArea : function(){


			},
			//关闭所有显示对象
			hideAllObjArea : function(){
				DisContentSet.closeAllCtrl();
			},

		}//显示或隐藏函数集结束
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
		//插入到对象表中
		DisContentSet.allCtlrObj.push(this_obj);
	},//initCtrl

	//所有对象
	allCtlrObj:[],

	//关闭所有的对象
	closeAllCtrl:function(){
		$.each(DisContentSet.allCtlrObj,function(index, el) {
			this.closeArea();
		});
	},

}//DisContentSet class
















