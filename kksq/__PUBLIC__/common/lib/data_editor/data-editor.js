// JavaScript Document
/*数据编辑器,对对数据表中的数据项进行添加或修改操作
*/
var DataEditor = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//alert("2343");
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		this_obj.sub_el_files = [];


		
		///系统选项
		this_obj.sys_opt = {};
		this_obj.sys_opt.selector			= "";		//父元素选择器表达式
		this_obj.sys_opt.link_btn_selr		= "";		//父元素选择器表达式
		this_obj.sys_opt.base_el_html		= "";		//基础元素骨架的html
		this_obj.sys_opt.before_submit_call = "";
		this_obj.sys_opt.sim_post_if		= false;	//模拟post提交
		this_obj.sys_opt.submit_url 		= "";		//提交按钮对应的url
		this_obj.sys_opt.file_up_url		= "";		//文件上传路径
		this_obj.sys_opt.box_title_prefix	= "数据项";		//编辑框的标题前缀
		this_obj.sys_opt.data_action_type	= "add";		//数据操作项

		//this_obj.sys_opt.file_up_url

		this_obj.sys_opt.box_id_prefix		= "data_editor_box";	//下拉框识别码的前缀
		this_obj.sys_opt.box_id 			= "";					//下拉框识别码的前缀
		this_obj.sys_opt.form_css_name		= "sub_data_form";		//表单的css类名
		this_obj.sys_opt.select_ctrl_org_cn	= "select_ctrl_org_code";//选择控件初始代码的css名称
		this_obj.sys_opt.radios_ctrl_org_cn	= "radios_ctrl_org_code";//单选框初始代码的css名称




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
		//链接显示元素的操作函数集
		this_obj.link_el_opt_func		= "";

		//html子元素控件代码生成函数集
		this_obj.sub_el_ctrl_code_gen_func	= "";
		//事件相关的处理函数
		this_obj.handle_event_func 		= "";
		//条件判断函数集
		this_obj.condition_judge_func	= "";

		//子元素创建函数集
		this_obj.create_form_ctrl_func 	= "";
		//子元素初始化函数
		this_obj.init_form_ctrl_func	= "";
		//子元素清空函数
		this_obj.clear_form_ctrl_func	= "";

		
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

		//返回元素的唯一识别选择器
		this_obj.getBoxUniqueSelr = function(){
			return "#"+this_obj.sys_opt.box_id;
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
				this_obj.opt_func.sysOptionsAssign(option_obj,'link_btn_selr');
				this_obj.opt_func.sysOptionsAssign(option_obj,'before_submit_call');
				this_obj.opt_func.sysOptionsAssign(option_obj,'sim_post_if');
				this_obj.opt_func.sysOptionsAssign(option_obj,'file_up_url');
				this_obj.opt_func.sysOptionsAssign(option_obj,'submit_url');
				this_obj.opt_func.sysOptionsAssign(option_obj,'box_title_prefix');
				this_obj.opt_func.sysOptionsAssign(option_obj,'data_action_type');
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
		this_obj.html_dom_func = {
			//元素的创建
			createEl : function(){
				this_obj.html_dom_func.createBaseEl();
				this_obj.html_dom_func.createSubEl();
				this_obj.html_dom_func.initSubEl();
			},
			//创建插件需要的基础元素并添加到父元素中
			createBaseEl : function(){
				this_obj.sys_opt.box_id = this_obj.sys_opt.box_id_prefix + this_obj.get_plg_data_func.getCtrlCount();
				//alert(this_obj.sys_opt.box_id);
				//构建html
				this_obj.sys_opt.base_el_html = '\
                    <div class="collapse '+this_obj.sys_opt.box_id_prefix+' '+this_obj.sys_opt.box_id+'" id="'+this_obj.sys_opt.box_id+'">\
                        <div class="well container">\
                        	<h1 class="de_head_title">数据项编辑</h1>\
                        	<hr />\
                            <form class="container-fluid '+this_obj.sys_opt.form_css_name+'">\
                            </form>\
                            <div>\
                            <button type="button" class="btn btn-primary de_submit_btn"\
								data-url="'+this_obj.sys_opt.submit_url+'"\
                            >提交</button>\
                    <button type="button"\
                        class="btn btn-primary data_edit_btn"  \
                        type="button" \
                        aria-expanded="false"\
                        data-toggle="collapse"\
                        data-target="#'+this_obj.sys_opt.box_id+'" \
                    >\
                    取消\
                    </button>\
                            </div>\
                        </div>\
                        <div class="'+this_obj.sys_opt.select_ctrl_org_cn+'" style="display:none;">\
                        </div>\
                        <div class="'+this_obj.sys_opt.radios_ctrl_org_cn+'" style="display:none;">\
                        </div>\
                    </div>\
			    ';

			    //先清空,在追加
			    $(""+this_obj.sys_opt.selector).append("");
			    $(""+this_obj.sys_opt.selector).append(this_obj.sys_opt.base_el_html);
			    //alert(this_obj.sys_opt.base_el_html);

			    //连接到操作按钮
			   this_obj.html_dom_func.linkActionBtn2Box();
			},//func createEl

			//连接按钮和下拉框
			linkActionBtn2Box : function(){
				$(this_obj.item_selector_gen_func.genActionBtnSelr()).attr("data-target","#"+this_obj.sys_opt.box_id);
			},

			//创建子元素
			createSubEl : function (){
				//为表单添加元素,传入的是一个数组
				$.each(this_obj.sub_el_src,function(i){
					//判断控件是否需要创建
					if(this_obj.condition_judge_func.inputCtrlNeedCreateIf(this))
						this_obj.create_form_ctrl_func.createFormCtrl(this['type'],this);
				});//each
			},// func createSubEl
			//初始化子元素
			initSubEl : function (){
				//判断当前数据编辑器所进行的操作,添加还是更新
				var data_action_type = $(this_obj.item_selector_gen_func.genActionBtnSelr()).attr("data-action_type");
				var ctrls_selr = this_obj.item_selector_gen_func.genFormElSelr() + " [class=form-group]";
				if(data_action_type == "modify")
				{
					//数据编辑
					//显示对象
					var dis_row_selr = $(this_obj.item_selector_gen_func.genActionBtnSelr()).attr("data-dis_row_selr");
					var dis_row_obj = $(dis_row_selr);
					//遍历表单元素对象
					$(ctrls_selr).each(function(index, el) {
						var type = $(this).attr("data-input_type");//控件类型
						var i_option = {};
						i_option.this_obj = this;
						i_option.dis_row_obj = dis_row_obj[0];
						//判断表单控件类型
						var el_html = this_obj.init_form_ctrl_func.initFormCtlr(type,i_option);						
					});
				}
				else
				{
					//遍历表单元素对象
					$(ctrls_selr).each(function(index, el) {
						//添加
						var type = $(this).attr("data-input_type");//控件类型
						var i_option = this;

						//清空界面
						this_obj.clear_form_ctrl_func.clearFormCtlr(type, i_option);				
					});

				}

				//设置标题头
				this_obj.html_dom_func.setHeadTitle(data_action_type);

			},// func createSubEl


			//追加新的子元素表单中
			appendNewSubEl : function(sub_el_html, need_cols){
				//获取最后一行,判断是否可以添加新列,如果不能,则增加行
				//是否存在行
				var create_new_line_if = false;
				var form_selr = this_obj.item_selector_gen_func.genFormElSelr();
				var last_row_obj = $(form_selr + ">.row:last");
				//alert(form_selr + " .row:last");
				var used_cols_attr_name = "data-used_cols";
				if(typeof(last_row_obj) != "undefined" && typeof(last_row_obj.attr(used_cols_attr_name)) != "undefined")
				{
					//存在行,则判断当前行是否已满
					//判断已使用的列数是否大于等于当前需要的列数
					var rest_col = 12 - last_row_obj.attr(used_cols_attr_name);
					if(rest_col < need_cols)
					{
						//最后一行剩下的列数已经不够当前元素,因此需要另起一行
						create_new_line_if = true;
					}
				}
				else
				{
					//没有数据行,创建一个新的数据行
					create_new_line_if = true;
				}
				
				//创建新行
				if(create_new_line_if)
				{
					//创建新行
					var new_line_html = '<div class="row" '+used_cols_attr_name+'="0">\
										</div>';
					//追加到表单中
					$(form_selr).append(new_line_html);
					//重新初始化对象
					last_row_obj = $(form_selr + " .row:last");
				}
				
				//创建列
				var col_html = '<div class="col-md-'+need_cols+' item_row">'+sub_el_html+'</div>';
				//重置已使用的列
				var used_cols = parseInt(last_row_obj.attr(used_cols_attr_name)) + parseInt(need_cols);
				last_row_obj.attr(used_cols_attr_name,used_cols);
				//添加到最后一行中
				last_row_obj.append(col_html);
			},//appendNewSubEl

			//获取元素的默认数据
			getElDefaultValue : function(el_obj){
				var default_value = "";
				if(typeof($(el_obj).attr("data-default_value"))!="undefined" )
					default_value = $(el_obj).attr("data-default_value");	
					
				return 	default_value;	
			},

			//初始化文本编辑器的值,文本编辑器需要将编辑器中的值加入到控件中
			initTextEditorValue : function(){
				$(this_obj.item_selector_gen_func.genFormElSelr() + " [data-input_type=texteditor]").each(function(index, element) {
					var bind_key = $(this).attr("data-bind_key");
					var value = $(this_obj.item_selector_gen_func.genTextEditorElSelector(bind_key)).code();
					//alert(value);
	                $(this).find(".texteditor").text(value);
	            });
			},//

			//设置编辑框名称,指定当前的编辑框的内容
			setHeadTitle : function(action_type){
				//生成标题
				var title = this_obj.sys_opt.box_title_prefix;
				if (action_type == "add") {
					title += "添加";
				}
				else{
					title += "编辑";
				}

				$(this_obj.item_selector_gen_func.genHeadTitleSelr()).html(title);
			},//

		};//创建HTML DOM元素函数结束

		////创建相应类型的表单控件
		this_obj.create_form_ctrl_func = {
			//创建表单控件
			createFormCtrl : function(el_type,el_opt){
				//判断类别
				switch(el_type)
				{
					case 'text'://输入类型,添加标题,默认显示数据
						this_obj.create_form_ctrl_func.createTextInput(el_opt);
					break;
					
					case 'hidden'://隐藏域
						this_obj.create_form_ctrl_func.createHiddenInput(el_opt);
					break;
					
					case 'radios'://输入类型,添加名称,单选框组标题
						this_obj.create_form_ctrl_func.createRadiosInput(el_opt);
						break;
					case "textarea"://文本域
						this_obj.create_form_ctrl_func.createTextareaInput(el_opt);
					break;
					case "select"://选择控件
						this_obj.create_form_ctrl_func.createSelectInput(el_opt);
					break;
					case "file"://文件域
						this_obj.create_form_ctrl_func.createFileInput(el_opt);
					break;
					case "texteditor"://文本编辑器
						this_obj.create_form_ctrl_func.createTextEditorInput(el_opt);
					break;
					case "dis_content_set"://显示内容设置
						this_obj.create_form_ctrl_func.createDisContentSetInput(el_opt);
					break;
					case "time_sel"://显示内容设置
						this_obj.create_form_ctrl_func.createTimeSelInput(el_opt);
					break;
					default:
						alert("需要创建的表单元素类型不存在!!!");
				}
			},//createSubElByType
			//创建文本输入控件
			createTextInput : function(i_option){
				//提示信息 placeholder填充值
				var notice_word = "请输入" + i_option['title'];
				if(('notice_word' in i_option))
				{
					notice_word = i_option['notice_word'];
				}

				var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key'] + '"';
				//判断是否有默认值
				if(('default_value' in i_option))
				{
					el_html += ' data-default_value="'+i_option['default_value']+'"';
				}
				el_html += '>';
				el_html += '\
								<label>'+i_option['title']+'</label>\
								<input type="'+i_option['type']+'" class="form-control" placeholder="'+notice_word+'"';
				//判断是否需要添加名称
				if(!(('submit_in_form' in i_option) && i_option['submit_in_form'] == false))
				{
					//需要form中提交数据,则添加name属性
					el_html += ' name="'+i_option['bind_key']+'"';
				}
				
				//判断是否有默认值
				if(('default_value' in i_option))
				{
					el_html += ' value="'+i_option['default_value']+'"';
				}
				
				//判断是否可写
				if(('disabled' in i_option) && i_option['disabled'] == true)
				{
					//禁用
					el_html += ' disabled=""';
				}
				
				
				el_html += '		/>';
				el_html += ' </div>'; 	
				
				var need_cols = i_option['need_cols'];
				this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);
			},//createTextInput

			//创建隐藏域
			createHiddenInput : function(i_option){
				//alert("hhh");
				var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key']+'" style="display:none">';
				el_html += '\
							<label>'+i_option['title']+'</label>\
							<input type="'+i_option['type']+'" class="form-control" value="'+i_option['default_value']+'"';
				el_html += ' name="'+i_option['bind_key']+'"';
				el_html += '		/>';
				el_html += ' </div>'; 		
				
				var need_cols = i_option['need_cols'];
				this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);				
			},//func createHiddenInput

			//创建单选框组元素
			createRadiosInput : function(i_option){
				//源数据保存的parent_id
				//var org_parent_id = this_obj.sys_opt.box_id_prefix + "_radios_org_parent_id_" + this_obj.get_plg_data_func.getCtrlCount();
		  		var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key'] + '"';
				//el_html 	+= 'data-org_parent_id="'+org_parent_id+'"';
				//判断是否有默认值
				if(('default_value' in i_option))
				{
					el_html += ' data-default_value="'+i_option['default_value']+'"';
				}
				el_html += '>';
				el_html += '\
						<label >'+i_option['title']+'</label>\
						<div class="radios"  >';
						$.each(i_option['sub_el_title'],function(){
							
							el_html += '    <label class="radio-inline">\
											<input type="radio" value="'+this["value"]+'" ';
						
									//判断时序需要添加名称
									if(('submit_in_form' in this) && this['submit_in_form'] == false)
									{
										//不需要在form中提交
									}
									else
									{
										//需要form中提交数据,则添加name属性
										el_html += ' name="'+i_option['bind_key']+'"';
									}	
										  
							el_html += 				  '/>' +this["title"]+ '\
																   </label>';
									   
						});
				
					el_html += '  </div>';
				el_html += ' </div>'; 
				
				//追加到表单末尾
				var need_cols = i_option['need_cols'];
				this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);	

				//保存原始代码
				this_obj.sub_el_operation_func.saveElOrgCodeCopy(this_obj.sys_opt.radios_ctrl_org_cn, i_option['bind_key']);
				
				//保存其原始值
				// var r_obj = $(this_obj.item_selector_gen_func.genBoxElSelr()+" [data-input_type=radios]:last");
				// var org_parent_id = r_obj.attr("data-org_parent_id");
				// var radios_parent = '<div style="display:none" id="'+org_parent_id+'"></div>';
				// $(this_obj.item_selector_gen_func.genBoxElSelr()).append(radios_parent);
				// $("#" + org_parent_id).append(r_obj.html());
			},// func CreateRadiosInput


			//创建文本域元素
			createTextareaInput : function(i_option){
				//提示信息 placeholder填充值
				var notice_word = "请输入" + i_option['title'];
				//行数
				var rows = 10;
				if(('rows' in i_option))
				{
					rows = i_option['rows'];
				}

				var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key'] + '"';
				//判断是否有默认值
				if(('default_value' in i_option))
				{
					el_html += ' data-default_value="'+i_option['default_value']+'"';
				}
				el_html += '>';
				el_html += '\
							<label>'+i_option['title']+'</label>\
					<textarea class="form-control" rows="'+rows+'" cols="'+i_option['cols']+'" placeholder="'+notice_word+'"';

				//判断是否需要添加名称
				!(('submit_in_form' in i_option) && i_option['submit_in_form'] == false)
				{
					//需要form中提交数据,则添加name属性
					el_html += ' name="'+i_option['bind_key']+'"';
				}
				
				//判断是否可写
				if(('disabled' in i_option) && i_option['disabled'] == true)
				{
					//禁用
					el_html += ' disabled=""';
				}
				el_html += ' ></textarea>';
				el_html += ' </div>'; 
				
				//追加到表单末尾
				var need_cols = i_option['need_cols'];
				this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);	
			},//function CreateTextareaInput

			//创建选择框插件
			createSelectInput : function(i_option){
				var el_html = '<div ';
				el_html += this_obj.sub_el_ctrl_code_gen_func.genElBoxAttrBaseCode(i_option);	//添加基本属性
				el_html += this_obj.sub_el_ctrl_code_gen_func.genDefaultValueCode(i_option);	//添加默认值
				el_html += '>';

				el_html += this_obj.sub_el_ctrl_code_gen_func.genElTitleCode(i_option);	//添加标题

				el_html += '<select class="form-control"';
				el_html += this_obj.sub_el_ctrl_code_gen_func.genInputCtrlNameCode(i_option);//添加输入控件的名称
				el_html += this_obj.sub_el_ctrl_code_gen_func.genReadOnlySymCode(i_option);	//添加控件可读写标志
				el_html += ' >';
				//添加值
				$.each(i_option['sub_el_title'],function(){
					el_html += '<option value="'+this["value"]+'">'+this["title"]+'</option>';
				});				

				el_html += ' </select>';

				el_html += ' </div>'; 
				
				//追加到表单末尾
				var need_cols = i_option['need_cols'];
				this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);	

				//保存原始代码
				this_obj.sub_el_operation_func.saveElOrgCodeCopy(this_obj.sys_opt.select_ctrl_org_cn, i_option['bind_key']);
			}, // createSelectInput

			//创建文件输入控件
			createFileInput : function(i_option){
				//文件子元素编号
				var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key']+'"';
				el_html += ' >';
				el_html += '\
								<label>'+i_option['title']+'</label>\
								<div class="file_ctrl">';
				//判断是否有默认值
				if(('default_value' in i_option))
				{
					el_html += ' data-default_value="'+i_option['default_value']+'"';
				}
									
				el_html += 	'	</div>';
				
				el_html += ' </div>'; 	
				
				//追加到表单末尾
				var need_cols = i_option['need_cols'];
				this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);	
				
				//创建对应的数据对象

				var options = [];
				options.push({"type":"system", "upload_url":i_option['file_up_url'],
									"el_name":i_option['bind_key'],
									"selector":this_obj.item_selector_gen_func.genFileCtrlSelector(i_option['bind_key'])});
				
				this_obj.sub_el_files[i_option['bind_key']] = options;
				//this_obj.sub_el_files[i_option['bind_key']].push(options);	
				// this_obj.sub_el_files[i_option['bind_key']].push({"type":"system", "upload_url":i_option['file_up_url'],
				// 					"el_name":i_option['bind_key'],
				// 					"selector":this_obj.item_selector_gen_func.genFileCtrlSelector(i_option['bind_key'])});
				
				//加载文件插件
				//FileUpload.mutilFileUpload(this_obj.sub_el_files[i_option['bind_key']]);
			},//

			//创建文本编辑器控件
			createTextEditorInput : function(i_option){
				//文件子元素编号
				var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key']+'"';
				el_html += ' >';
				el_html += '\
							<label>'+i_option['title']+'</label>\
							<textarea class="texteditor" name="'+ i_option['bind_key'] +'"></textarea>\
							';
							
				el_html += ' </div>'; 	
				
				//追加到表单末尾
				var need_cols = i_option['need_cols'];
				this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);	
				
				//加载文本编辑器插件
				var bind_key = i_option['bind_key'];
				$(this_obj.item_selector_gen_func.genTextEditorElSelector(bind_key)).summernote({
					height: 200,
					tabsize: 2,
					lang: 'zh-CN',
					onImageUpload:function(files){
						FileUpload.SendFileEx(this_obj.sys_opt.file_up_url,"upload",files,this_obj.ajax_ret_func.writeIntoCtrl,bind_key);
					}
				  });
			}, //createTextEditorInput

			//创建显示内容设置插件
			createDisContentSetInput : function(i_option){
				var el_html = '<div ';
				el_html += this_obj.sub_el_ctrl_code_gen_func.genElBoxAttrBaseCode(i_option);	//添加基本属性
				//el_html += this_obj.sub_el_ctrl_code_gen_func.genDefaultValueCode(i_option);	//添加默认值
				el_html += '>';
				el_html += this_obj.sub_el_ctrl_code_gen_func.genElTitleCode(i_option);	//添加标题
				el_html += '<div class="dis_content_set"></div>';
				el_html += ' </div>'; 
				
				//追加到表单末尾
				var need_cols = i_option['need_cols'];
				this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);	

				// //文件子元素编号
				// var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key']+'"';
				// el_html += ' >';
				// el_html += '\
				// 			<label>'+i_option['title']+'</label>\
				// 			<div class="dis_content_set"></div>\
				// 			';
							
				// el_html += ' </div>'; 	
				
				// //追加到表单末尾
				// var need_cols = i_option['need_cols'];
				// this_obj.html_dom_func.appendNewSubEl(el_html, need_cols);	


				//设置初始值
				var options = [];
				options.push({	"type":"system", 
								"bind_key":i_option['bind_key'],
								"dis_type_bk":i_option['dis_type_bk'],
								"get_dis_cnt_url":i_option['get_dis_cnt_url'],
							  	"selector":this_obj.item_selector_gen_func.genDisContentSetSelr(i_option['bind_key'])});
				//添加子元素 {"type":"dis_type","value":"1","name":"多商品类别"},
				$.each(i_option['sub_el_title'],function(index) {
					var t_opt = {};
					t_opt.type = "dis_type";
					t_opt.name = this['title'];
					t_opt.value = this['value'];
					options.push(t_opt);
				});
				this_obj.sub_el_files[i_option['bind_key']] = options;
				// // this_obj.sub_el_files[i_option['bind_key']] = [];
				// // this_obj.sub_el_files[i_option['bind_key']].push(options);		

				// //DisContentSet.initCtrl(this_obj.sub_el_files[i_option['bind_key']]);
			},
			//创建时间选择插件
			createTimeSelInput : function(i_option){
				//创建输入控件,时间插件就是输入控件,不能直接对变量赋值,变量的赋值是全局的
				//进行对象克隆
				var t_opt = {};
				for(var key in i_option){  
			        t_opt[key] = i_option[key];  
			    }  
				t_opt['type'] = "text";
				this_obj.create_form_ctrl_func.createTextInput(t_opt);

				//绑定时间输入插件
			    var currYear = (new Date()).getFullYear();  
			    var opt={};
			    opt.date = {preset : 'date'};
			    opt.datetime = {preset : 'datetime'};
			    opt.time = {preset : 'time'};
			    opt.default = {
			      	theme: 'android-ics light', //皮肤样式
			        display: 'modal', //显示方式 
			        mode: 'scroller', //日期选择模式
			      	dateFormat: 'yyyy-mm-dd',
			      	lang: 'zh',
			      	showNow: true,
			      	nowText: "今天",
		          	startYear: currYear, //开始年份
		          	endYear: currYear + 10 //结束年份
			    };

			    //生成输入控件的选择器
			    var selr = this_obj.item_selector_gen_func.genSubElCtrlSelr(i_option['bind_key'] ,"input");//alert(selr);
			    $(selr).mobiscroll($.extend(opt['date'], opt['default']));
			},



		};//创建相应类型的表单控件结束

		//子元素控件代码生成函数集
		this_obj.sub_el_ctrl_code_gen_func = {
			//生成子元素框的基本属性代码
			genElBoxAttrBaseCode : function(i_option){
				var el_html = ' class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key'] + '"';

				return el_html;
			},//

			//生成子元素标题
			genElTitleCode : function(i_option){
				return '<label>'+i_option['title']+'</label>';
			},

			//生成默认值代码
			genDefaultValueCode : function(i_option){
				var el_html = "";
				//判断是否有默认值
				if(('default_value' in i_option))
				{
					el_html += ' data-default_value="'+i_option['default_value']+'"';
				}

				return el_html;
			},//

			//输入控件的名称
			genInputCtrlNameCode : function(i_option){
				var el_html = "";
				//判断是否需要添加名称
				if(!(('submit_in_form' in i_option) && i_option['submit_in_form'] == false))
				{
					//需要form中提交数据,则添加name属性
					el_html += ' name="'+i_option['bind_key']+'"';
				}

				return el_html;
			},//

			//生成可写标志
			genReadOnlySymCode  : function(i_option){
				var el_html = "";
				//判断是否可写
				if(('disabled' in i_option) && i_option['disabled'] == true)
				{
					//禁用
					el_html += ' disabled=""';
				}

				return el_html;
			},//
		};//创建元素内部调用公用函数集结束

		////表单控件初始化
		this_obj.init_form_ctrl_func = {
			//初始化表单控件
			initFormCtlr : function(el_type,el_opt){
				//判断类别
				switch(el_type)
				{
					case 'text'://输入类型,添加标题,默认显示数据
						this_obj.init_form_ctrl_func.initTextInput(el_opt);
					break;
					
					case 'hidden'://隐藏域
						this_obj.init_form_ctrl_func.initHiddenInput(el_opt);
					break;
					
					case 'radios'://输入类型,添加名称,单选框组标题
						this_obj.init_form_ctrl_func.initRadiosInput(el_opt);
						break;
					case "textarea"://文本域
						this_obj.init_form_ctrl_func.initTextareaInput(el_opt);
					break;
					case "select"://选择框
						this_obj.init_form_ctrl_func.initSelectInput(el_opt);
					break;
					case "file"://文件域
						this_obj.init_form_ctrl_func.initFileInput(el_opt);
					break;
					case "texteditor"://文本编辑器
						this_obj.init_form_ctrl_func.initTextEditorInput(el_opt);
					break;
					case "dis_content_set"://显示内容设置
						this_obj.init_form_ctrl_func.initDisContentSetInput(el_opt);
					break;
					default:
						alert(el_type+"需要初始化的表单元素类型不存在!!!");
				}
			},
			//生成input_text元素
			initTextInput : function(i_option){
				//获取数据
				var bind_key = $(i_option.this_obj).attr("data-bind_key");
				var text = this_obj.link_el_opt_func.getRealData(i_option.dis_row_obj, bind_key);
				// var text = $(i_option.dis_row_obj).find("." + bind_key).html();
				// //alert(text);
				// text = text.replace(/(^\s*)|(\s*$)/g, ""); 
				//alert(text);
				$(i_option.this_obj).find("input").val(text);
			},//func ReinitTextInput
			
			//生成隐藏域元素
			initHiddenInput : function(i_option){	
				//获取数据
				var bind_key = $(i_option.this_obj).attr("data-bind_key");//alert(bind_key);
				var text = this_obj.link_el_opt_func.getRealData(i_option.dis_row_obj, bind_key);//alert(text);
				$(i_option.this_obj).find("input").val(text);
				//$(i_option.this_obj).find("input").val($(i_option.dis_row_obj).find("." + bind_key).html());				
			},//func ReinitHiddenInput
			
			//创建单选框组元素
			initRadiosInput : function(i_option){
				//设置元素的default_value,然后使用清空重置即可
				//获取当前元素对应显示表中的真实的数据
				var bind_key = $(i_option.this_obj).attr("data-bind_key");
				//alert(bind_key);
				//var real_value = $(i_option.dis_row_obj).find("."+bind_key+" .real_data").html();
				var real_value = this_obj.link_el_opt_func.getRealData(i_option.dis_row_obj, bind_key);
				//alert(real_value);
				var chk_index = 0;
				//判断当前显示的真实值是哪个单选框的,然后将其选中 <input type="radio" value="'+this["value"]+'" ';
				$(i_option.this_obj).find("[type=radio]").each(function(index, element) {
					cur_value = $(this).val();
					if(real_value == cur_value)
					{
						//设置当前单选框为选中
						chk_index = index;
					}
	       		});
				//alert(chk_index);
				//设置元素的默认值
				$(i_option.this_obj).attr("data-default_value",chk_index);
				
				//清空重置单选框组
				//ClearRadiosInput : function(i_option.this_obj);
				this_obj.clear_form_ctrl_func.clearRadiosInput(i_option.this_obj);
			},// func ReinitRadiosInput
			
			//初始化文本域元素
			initTextareaInput : function(i_option){
				//获取数据
				var bind_key = $(i_option.this_obj).attr("data-bind_key");
				// var text = $(i_option.dis_row_obj).find("." + bind_key).text();
				// text = text.replace(/(^\s*)|(\s*$)/g, ""); 
				var text = this_obj.link_el_opt_func.getRealData(i_option.dis_row_obj, bind_key);
				//alert(text);
				$(i_option.this_obj).find("textarea").text(text);
			},//initTextareaInput

			//初始化选择框元素
			initSelectInput : function(i_option){
				//获取数据
				var bind_key = $(i_option.this_obj).attr("data-bind_key");
				// var value = $(i_option.dis_row_obj).find("." + bind_key + " .real_value").html();
				// value = value.replace(/(^\s*)|(\s*$)/g, ""); 
				var value = this_obj.link_el_opt_func.getRealData(i_option.dis_row_obj, bind_key);

				//重置选择框
				this_obj.sub_el_operation_func.displaceElCode2Org(this_obj.sys_opt.select_ctrl_org_cn, bind_key);
				//设置相应的值为已指定的值
				//遍历选项
				var opt_selr = this_obj.item_selector_gen_func.genSelectCtrlSelr(bind_key) + " option";
				//alert(this_obj.item_selector_gen_func.genSelectCtrlSelr(bind_key));
				//alert($(this_obj.item_selector_gen_func.genSelectCtrlSelr(bind_key)).html());
				$(opt_selr).each(function(index, el) {
					var o_val = $(this).val();

					if(o_val == value)
					{
						$(this).attr("selected","");
					}
				});
			},//initSelectInput
			
			//重初始化设置文件控件
			initFileInput : function(i_option){
				//获取数据重新构造文件插件
				
				//获取默认显示编号
				//获取数据
				var bind_key = $(i_option.this_obj).attr("data-bind_key");
				var dis_obj = $(i_option.dis_row_obj).find("."+bind_key);
				//alert(dis_obj.html());

				//设置不变的数据
				var ctrl_opt = [];
				var sub_opt_item = this_obj.sub_el_files[bind_key];
				$.each(sub_opt_item,function(index) {
					ctrl_opt.push(this);
				});
				//获取默认文件编号
				var default_file_num = dis_obj.find(".default_file_num").html();
				//设置默认文件编号
				ctrl_opt[0].default_num = default_file_num;
									
				//获取文件
				dis_obj.find(".files img").each(function(i){
					var t_obj = {};
					t_obj.type = "file";
					t_obj.src = $(this).attr("src");
					ctrl_opt.push(t_obj);	
				});
				
				FileUpload.mutilFileUpload(ctrl_opt);
			},//func ReinitFileInput
			
			
			//重初始化设置文件控件
			initTextEditorInput : function(i_option){
				//获取内容
				var bind_key = $(i_option.this_obj).attr("data-bind_key");
				//alert(bind_key);
				//var text = $(i_option.dis_row_obj).find("." + bind_key).html();
				var text = this_obj.link_el_opt_func.getRealData(i_option.dis_row_obj, bind_key);
				//alert(text);
				$(this_obj.item_selector_gen_func.genTextEditorElSelector(bind_key)).code(text);		
				
			},//func ReinitextEditorInput

			//初始化内容显示设置控件
			initDisContentSetInput : function(i_option){
				//获取内容
				var bind_key = $(i_option.this_obj).attr("data-bind_key");

				//设置不变的数据
				var ctrl_opt = [];
				var sub_opt_item = this_obj.sub_el_files[bind_key];
				$.each(sub_opt_item,function(index) {
					ctrl_opt.push(this);
				});
				//设置默认显示类型
				//获取默认显示类型的值显示类型
				var dt_value = $(i_option.dis_row_obj).find("." + bind_key + " .dis_content_type .real_value").html();
				ctrl_opt[0].defalut_dis_type = dt_value;
				//alert(dt_value);

				//显示数据项,获取显示的数据  {"type":"dis_val","value":"1","name":"柴油"},
				$(i_option.dis_row_obj).find("." + bind_key + " .dis_content_item").each(function(index, el) {
					var t_opt = {};
					t_opt.type = "dis_val";
					t_opt.value = $(this).find('.real_value').html();
					t_opt.name = $(this).find('.dis_name').html();

					ctrl_opt.push(t_opt);
				});

				//初始化对象
  				DisContentSet.initCtrl(ctrl_opt);
				
			},//func ReinitextEditorInput

		};//表单控件初始化

		////表单控件清空
		this_obj.clear_form_ctrl_func = {
			//清空表单控件
			clearFormCtlr : function(el_type,el_opt){
				//判断类别
				switch(el_type)
				{
					case 'text'://输入类型,添加标题,默认显示数据
						this_obj.clear_form_ctrl_func.clearTextInput(el_opt);
					break;
					
					case 'hidden'://隐藏域
						this_obj.clear_form_ctrl_func.clearHiddenInput(el_opt);
					break;
					
					case 'radios'://输入类型,添加名称,单选框组标题
						this_obj.clear_form_ctrl_func.clearRadiosInput(el_opt);
					break;
					case "textarea"://文本域
						this_obj.clear_form_ctrl_func.clearTextareaInput(el_opt);
					break;
					case "select"://选择框
						this_obj.clear_form_ctrl_func.clearSelectInput(el_opt);
					break;
					case "file"://文件域
						this_obj.clear_form_ctrl_func.clearFileInput(el_opt);
					break;
					case "texteditor"://文本编辑器
						this_obj.clear_form_ctrl_func.clearTextEditorInput(el_opt);
					break;
					case "dis_content_set"://显示内容设置
						this_obj.clear_form_ctrl_func.clearDisContentSetInput(el_opt);
					break;
					case "time_sel"://时间设置
						this_obj.clear_form_ctrl_func.clearTimeSelInput(el_opt);
					break;
					default:
						alert(el_type+"需要初始化的表单元素类型不存在!!!");
				}
			},
			//清空inputtext元素
			clearTextInput : function(i_option){

				$(i_option).find("input").val(this_obj.html_dom_func.getElDefaultValue(i_option));

			},//func CreateTextInput
			
			//清空隐藏域元素
			clearHiddenInput : function(i_option){	
								
			},//func CreateHiddenInput
			
			//清空单选框组元素
			clearRadiosInput : function(i_option){
				//获取数据
				var bind_key = $(i_option).attr("data-bind_key");
				//进行初始代码置换
				this_obj.sub_el_operation_func.displaceElCode2Org(this_obj.sys_opt.radios_ctrl_org_cn,bind_key);

				// //重置单选框区域
				// //清空当前内容
				// $(i_option).html("");
				// //获取初始值填充到
				// var org_parent_id = $(i_option).attr("data-org_parent_id");
				// $(i_option).html($("#" + org_parent_id).html());
		
				
				// //判断是否有默认数据,默认数据表示的单选框的编号
				var default_value = this_obj.html_dom_func.getElDefaultValue(i_option);//alert(default_value);
				//alert(default_value);
				if(default_value != "")
				{
					//选择指定的单选框
					$(i_option).find("[type=radio]:eq("+default_value+")").attr("checked","checked");	
							
				}
				else
				{
					//默认选中用第一个
					$(i_option).find("[type=radio]:first").attr("checked","checked");				
				}
			},// func CreateRadiosInput
			
			//清空文本域元素
			clearTextareaInput : function(i_option){
				$(this).find("textarea").val(this_obj.html_dom_func.getElDefaultValue(i_option));
			},//clearTextareaInput

			//清空选择框
			clearSelectInput : function(i_option){
				//获取数据
				var bind_key = $(i_option).attr("data-bind_key");
				//进行初始代码置换
				this_obj.sub_el_operation_func.displaceElCode2Org(this_obj.sys_opt.select_ctrl_org_cn,bind_key);
			},//clearSelectInput
			
			//清空文件域
			clearFileInput : function(i_option){
				//获取数据
				var bind_key = $(i_option).attr("data-bind_key");
				//alert($(i_option).html());
				//设置不变的数据
				var ctrl_opt = [];
				var sub_opt_item = this_obj.sub_el_files[bind_key];
				$.each(sub_opt_item,function(index) {
					ctrl_opt.push(this);
				});
				
				FileUpload.mutilFileUpload(ctrl_opt);
			},	
			
			//清空文本编辑器
			clearTextEditorInput : function(i_option){
				//清空文本编辑器内容
				var bind_key = $(i_option).attr("data-bind_key");
				$(this_obj.item_selector_gen_func.genTextEditorElSelector(bind_key)).code("");
			},	

			//清空显示内容设置控件
			clearDisContentSetInput : function(i_option){
				//获取内容
				var bind_key = $(i_option).attr("data-bind_key");
				//alert($(i_option).html());
				//设置不变的数据
				var ctrl_opt = [];
				var sub_opt_item = this_obj.sub_el_files[bind_key];
				$.each(sub_opt_item,function(index) {
					ctrl_opt.push(this);
				});

				//初始化对象
  				DisContentSet.initCtrl(ctrl_opt);		
			},	

			//清空显示内容设置控件
			clearTimeSelInput : function(i_option){
				$(i_option).find("input").val(this_obj.html_dom_func.getElDefaultValue(i_option));

				//绑定时间输入插件
			    var currYear = (new Date()).getFullYear();  
			    var opt={};
			    opt.date = {preset : 'date'};
			    opt.datetime = {preset : 'datetime'};
			    opt.time = {preset : 'time'};
			    opt.default = {
			      	theme: 'android-ics light', //皮肤样式
			        display: 'modal', //显示方式 
			        mode: 'scroller', //日期选择模式
			      	dateFormat: 'yyyy-mm-dd',
			      	lang: 'zh',
			      	showNow: true,
			      	nowText: "今天",
		          	startYear: currYear - 10, //开始年份
		          	endYear: currYear + 10 //结束年份
			    };

			    //生成输入控件的选择器
			    var selr = this_obj.item_selector_gen_func.genSubElCtrlSelr(i_option['bind_key'] ,"input");alert(selr);
			    $(selr).mobiscroll($.extend(opt['date'], opt['default']));				
			},			
		};////表单控件清空

		///事件相关绑定函数集
		this_obj.event_bind_func = {
			//绑定事件
			bindEvnet : function(){
				this_obj.event_bind_func.bindClickSubmitBtnEvent();
				this_obj.event_bind_func.bindBoxShowEvent();
			},

			//绑定点击提交按钮事件
			bindClickSubmitBtnEvent : function(){
				$(this_obj.item_selector_gen_func.genSubmitBtnSelr()).click(this_obj.handle_event_func.handleSubmitBtnClick);
			},

			//绑定显示框下拉事件
			bindBoxShowEvent : function(){
				$(this_obj.item_selector_gen_func.genBoxElSelr()).on('show.bs.collapse', function () {
					this_obj.html_dom_func.initSubEl();
				})
			},

		};//事件相关绑定函数集结束

		////事件相关的处理函数
		this_obj.handle_event_func = {
			//点击提交按钮处理函数
			handleSubmitBtnClick : function(e){
				//提交前的处理
				this_obj.handle_event_func.beforeSubmitHandle();

				//获取表单数据
				var data_str = $(this_obj.item_selector_gen_func.genFormElSelr()).serialize();
				var data_obj = {};
				data_obj.data = data_str;
				//alert(data_str);
				
				var url = $(this_obj.item_selector_gen_func.genSubmitBtnSelr()).attr("data-url");
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
				this_obj.area_display_func.hideArea();
				///$('#'+edit_modal.sys_options.modal_id).modal('hide');
			},//

			//数据提交前的操作处理函数
			beforeSubmitHandle: function(){
				//将文本编辑器的值加入到控件中,以便提交
				this_obj.html_dom_func.initTextEditorValue();

				//进行数据前的外部调用操作
				if(typeof(eval(this_obj.sys_opt.before_submit_call)) == "function")
					this_obj.sys_opt.before_submit_call();
			},//beforeSubmitHandle	
		};//事件相关的处理函数

		///ajax数据返回处理函数
		this_obj.ajax_ret_func = {
			//文本编辑器文件上传回调
			writeIntoCtrl : function(json_obj){
				//alert( json_obj.ret_state);
				//获取传递的绑定数据
				var bind_key = json_obj.extra_data;
				//将图片插入到编辑器中
				//$(GenTextEditorElSelector(bind_key)).summernote("insertImage", json_obj.ret_state); 
				$(this_obj.item_selector_gen_func.genTextEditorElSelector(bind_key)).summernote("insertImage", json_obj.ret_state); 
				//alert(json_obj.extra_data);
			},
		};//ajax数据返回处理函数

		////子元素操作函数集
		this_obj.sub_el_operation_func 	= {
			//保存原始代码副本,将子元素的内部的代码外加一层识别码之后加入到指定的盒子中
			saveElOrgCodeCopy : function(org_box_cn,el_bind_key){
				var src_selr = this_obj.item_selector_gen_func.genSubElSelr(el_bind_key);
				var dest_selr = this_obj.item_selector_gen_func.genOrgCodeBoxSelr(org_box_cn);
				var el_html = '<div class="'+el_bind_key+'">';
				el_html += $(src_selr).html();
				el_html += '</div>';

				$(dest_selr).append(el_html);
			},

			//将子元素的代码置换成原始代码
			displaceElCode2Org : function(org_box_cn,el_bind_key){
				var dest_selr = this_obj.item_selector_gen_func.genSubElSelr(el_bind_key);
				var src_selr = this_obj.item_selector_gen_func.genElOrgCodeSelr(org_box_cn,el_bind_key);

				//置换
				$(dest_selr).html(" ");
				//alert(src_selr);
				//alert($(src_selr).html());
				$(dest_selr).html($(src_selr).html());
			}

		};//子元素操作函数集

		///链接元素操作函数集
		this_obj.link_el_opt_func = {
			//获取真实值
			getRealData : function(dis_row_obj, bind_key){
				var rd_sler = this_obj.item_selector_gen_func.genLinkElRealDataRlatSelr(bind_key);
				var rd_text = $(dis_row_obj).find(rd_sler).html();
				//alert(rd_text );
				if(rd_text != undefined)
					rd_text = rd_text.replace(/(^\s*)|(\s*$)/g, "");
				else
				{
					alert("详情中不存在的对应字段:"+bind_key);
				}

				return rd_text;
			},

			//获取显示值
			getDisData : function(dis_row_obj, bind_key){
				var rd_sler = this_obj.item_selector_gen_func.genLinkElDisDataRlatSelr(bind_key);
				var rd_text = $(dis_row_obj).find(rd_sler).html();
				//alert(text);
				rd_text = rd_text.replace(/(^\s*)|(\s*$)/g, ""); 

				return rd_text;
			},

		}

		////子元素项选择器生成函数集
		this_obj.item_selector_gen_func = {
			//生成表单元素的选择器
			genFormElSelr : function(){
				return this_obj.sys_opt.selector + " ." +this_obj.sys_opt.box_id_prefix+" ."+this_obj.sys_opt.form_css_name;
			},//genFormElSelr
			//生成下拉框的选择器
			genBoxElSelr : function(){
				return this_obj.sys_opt.selector + " ." +this_obj.sys_opt.box_id_prefix;
			},//genBoxElSelr
			//生成子元素的选择器
			genSubElSelr :  function(bind_key){
				return this_obj.item_selector_gen_func.genFormElSelr() + " [data-bind_key="+bind_key+"]";
			},
			//生成选择框原始代码存放框的选择器
			genSelectCtrlOrgBoxSelr : function(){
				return this_obj.item_selector_gen_func.genBoxElSelr() + " ." + this_obj.sys_opt.select_ctrl_org_cn;
			},
			//生成原始代码框的选择器,指定原始代码框的css名称
			genOrgCodeBoxSelr : function(box_cn){
				return this_obj.item_selector_gen_func.genBoxElSelr() + " ." + box_cn;
			},
			//生成元素对应的原始代码框的选择器
			genElOrgCodeSelr : function(box_cn, bind_key){
				return this_obj.item_selector_gen_func.genOrgCodeBoxSelr(box_cn) + " ." + bind_key;
			},
			//生成

			//生成子元素控件的的选择器
			genSubElCtrlSelr : function(bind_key, ctrl_type){
				return this_obj.item_selector_gen_func.genFormElSelr() + " [data-bind_key="+bind_key+"] " + ctrl_type;
			},

			//生成文件域的选择器
			genFileCtrlSelector : function(bind_key)
			{
				return this_obj.item_selector_gen_func.genFormElSelr() + " [data-bind_key="+bind_key+"]" + " .file_ctrl";
			},
			//生成文本编辑器的选择器
			genTextEditorElSelector : function(bind_key)
			{
				return this_obj.item_selector_gen_func.genFormElSelr() + " [data-bind_key="+bind_key+"]" + " .texteditor";
			},
			//生成显示内容设置输入控件的选择器
			genDisContentSetSelr : function(bind_key){
				return this_obj.item_selector_gen_func.genFormElSelr() + " [data-bind_key="+bind_key+"]" + " .dis_content_set";
			},


			//生成选择框控件的选择器
			genSelectCtrlSelr : function(bind_key){
				return this_obj.item_selector_gen_func.genSubElCtrlSelr(bind_key,"select");
			},


			//生成操作按钮的选择器
			genActionBtnSelr : function(){
				return this_obj.sys_opt.link_btn_selr;
			},

			//生成提交按钮选择器
			genSubmitBtnSelr : function(){
				return this_obj.item_selector_gen_func.genBoxElSelr() + " .de_submit_btn";
			},

			//生成标题的选择器
			genHeadTitleSelr : function(){
				return this_obj.item_selector_gen_func.genBoxElSelr() + " .de_head_title";
			},



			//生成外部链接元素的相对选择器
			genLinkElRelativeSelr : function(bind_key){
				return "." + bind_key;
			},
			//生成外部链接元素的真实值的选择器
			genLinkElRealDataRlatSelr : function(bind_key){
				return "." + bind_key + " .real_data";
			},
			//生成外部链接元素的显示值的选择器
			genLinkElDisDataRlatSelr : function(bind_key){
				return "." + bind_key + " .dis_data";
			},
		};//子元素项选择器获取函数集结束

		////条件判断函数集
		this_obj.condition_judge_func = {
			//判断表单控件是否需要创建
			inputCtrlNeedCreateIf : function(i_option){
				//判断配置数据中是否是只有编辑操作需要,且当前操作是编辑
				var need_create_if = true;
				//添加框不需要
				if(("only_modify_has" in i_option) && i_option['only_modify_has'] && (this_obj.sys_opt.data_action_type == "add"))
				{
					need_create_if = false;
				}

				//编辑框不需要
				if(("only_add_has" in i_option) && i_option['only_add_has'] && (this_obj.sys_opt.data_action_type != "add"))
				{
					need_create_if = false;
				}
				return need_create_if;
			},//
		}//条件判断函数集

		////获取插件内部数据
		this_obj.get_plg_data_func = {
			//获取当前已经创建的对象的个数
			getCtrlCount : function(){
				return DataEditor.allCtlrObj.length;
			},
		}

		////显示或隐藏函数集
		this_obj.area_display_func = {
			//隐藏区域
			hideArea : function(){
				$(this_obj.item_selector_gen_func.genBoxElSelr()).collapse("hide");
			},
			//显示区域
			showArea : function(){


			},
			//关闭所有显示对象
			hideAllObjArea : function(){
				DataEditor.closeAllCtrl();
			},

		}//显示或隐藏函数集结束
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
		//插入到对象表中
		DataEditor.allCtlrObj.push(this_obj);

		return this_obj;
	},//initCtrl

	//所有对象
	allCtlrObj:[],

	//关闭所有的对象
	closeAllCtrl:function(){
		$.each(DataEditor.allCtlrObj,function(index, el) {
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
			var ctrl_obj = DataEditor.initCtrl(i_options);
		});
	},

}//DataEditor class
















