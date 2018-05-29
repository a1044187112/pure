// JavaScript Document
/*编辑提交模态框变量控件输入组类
	用于对格式化显示的表格数据项进行添加数据
*/
//编辑提交模态框
var EditSubmitModal = {
	//模态框的id
	//创建新的模态框
	createNewModal:function(e_options){
		//alert("ok");
		var edit_modal = {};
		
		//插件配置数据
		///系统选项
		edit_modal.sys_options = {};
		//模态对话框id
		edit_modal.sys_options.modal_id = "edit_modal";
		//单选框初始源代码的父元素id的个数,用于计数
		edit_modal.sys_options.org_radios_parent_id_count = 0;
		//模态框的标题id
		edit_modal.sys_options.modal_title_id = edit_modal.sys_options.modal_id + "_title";
		//模态框中form id
		edit_modal.sys_options.form_id  = edit_modal.sys_options.modal_id + "_data_form";
		//提交按钮的id
		edit_modal.sys_options.submit_btn_id = edit_modal.sys_options.modal_id + "_submit_btn";
		//关闭按钮id
		edit_modal.sys_options.close_btn_id = edit_modal.sys_options.modal_id + "_close_btn";
		
		
		//模态框的标题
		edit_modal.sys_options.modal_title = "数据编辑";
		//模态框的内容
		edit_modal.sys_options.content = "";
		//提交按钮对应的url
		edit_modal.sys_options.submit_url = "";
		//提交按钮的标题
		edit_modal.sys_options.submin_btn_title = "提交";
		
		//提交数据时外部回调函数
		edit_modal.sys_options.submit_call_func = "";	
		//模态对话框初始化完成后外部调用函数
		edit_modal.sys_options.init_complete_call = "";
		//提交提交数据时,使用debug方式,也就是simpost
		edit_modal.sys_options.sim_post_if = false;
		///文件子元素数据
		edit_modal.sys_options.sub_el_files = {};
		
		
		//文件上传url
		edit_modal.sys_options.file_up_url = ""; 
		
		///元素配置项
		var form_el_options = [];
	
		//////////外部接口函数////////////////////////////////////////////////
		//页面加载完成后的初始化,指定显示数据表的选择器,父元素的选择器,表单元素的选项
		edit_modal.Init = function (form_el_option){
			//解析配置项
			ParseOptions(form_el_option);

			//创建并将源码添加到页面末尾
			ModalCreateAndAppend();
			
			//为form添加元素
			AppendFormEl();
			
			//绑定隐藏事件函数
			$('#'+edit_modal.sys_options.modal_id).on('hidden.bs.modal', HiddenActionCall)//h on	
			
			//绑定显示事件函数
			$('#'+edit_modal.sys_options.modal_id).on('show.bs.modal',	ShowActionCall);
			
			//绑定点击提交按钮
			//点击提交按钮
			$("#"+edit_modal.sys_options.submit_btn_id).click(ClickSubmitCall);
			//alert("ok");
			
			//初始化完成后进行调用
			if(typeof(eval(edit_modal.sys_options.init_complete_call)) == "function")
			{
				edit_modal.sys_options.init_complete_call();
			}
			
			//alert("ok");
			$("#"+edit_modal.sys_options.modal_id).focus(function(){
				//alert("ok");	
			});
			
			$("#"+edit_modal.sys_options.modal_id).blur(function(e) {
                
            });
			
		}//Init func 
		
		/////////////////内部调用接口//////////////////////////////////////////////////////////////
		//解析配置项
		function ParseOptions(form_el_option){
			//alert(form_el_option);
			//遍历用户自定义配置项
			$.each(form_el_option, function(i){
				//alert(i);
				switch(this['type'])
				{
					case 'system':
						//调用初始化函数进行初始化操作
						InitSysOptions(this);
					break;
					default:
						//将元素添加到数据数组中即可
						form_el_options.push(this);	
						//alert(form_el_options.length);
				}
				
			});//each
		}//func ParseOptions
		
		//初始化系统选项
		function InitSysOptions(option_obj)
		{
			//alert('modal_id');
			//模态对话框id
			SysOptionsAssign(option_obj,'modal_id');
			//edit_modal.sys_options.modal_id = option_obj['modal_id'];
			//模态框的标题
			//edit_modal.sys_options.modal_title = option_obj['title'];
			SysOptionsAssign(option_obj,'modal_title');
			//提交按钮对应的url
			SysOptionsAssign(option_obj,'submit_url');
			//文件上传url
			SysOptionsAssign(option_obj,'file_up_url');
			//提交按钮的标题
			SysOptionsAssign(option_obj,'submin_btn_title');
	
			//单选框初始源代码的父元素id个数
			edit_modal.sys_options.org_radios_parent_zid_count = 0;
			//模态框的标题id
			edit_modal.sys_options.modal_title_id = edit_modal.sys_options.modal_id + "_modal_title";
			//模态框中form id
			edit_modal.sys_options.form_id  = edit_modal.sys_options.modal_id + "_data_form";
			//提交按钮的id
			edit_modal.sys_options.submit_btn_id = edit_modal.sys_options.modal_id + "_submit_btn";
			//关闭按钮id
			edit_modal.sys_options.close_btn_id = edit_modal.sys_options.modal_id + "_close_btn";
			
			//提交数据时外部回调函数
			SysOptionsAssign(option_obj,'submit_call_func');
			//模态对话框初始化完成后外部调用函数
			SysOptionsAssign(option_obj,'init_complete_call');
			//提交提交数据时,使用debug方式,也就是simpost
			SysOptionsAssign(option_obj,'sim_post_if');
					
		}
		
		//构造模态框,并附加到body尾部
		function ModalCreateAndAppend(){
			
			//进行模态框构造
			edit_modal.sys_options.content = '                <!--数据修改模态框-->\
                <div class="modal fade" id="'+edit_modal.sys_options.modal_id+'" tabindex="-1" role="dialog" aria-labelledby="'+edit_modal.sys_options.modal_title_id+'" style="display:none;width:100%">\
                  	<div class="modal-dialog" role="document" style="width:80%">\
                            <div class="modal-content" style=" width:100%">\
                              <div class="modal-header">\
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="'+edit_modal.sys_options.close_btn_id+'"><span aria-hidden="true">&times;</span></button>\
                                <h4 class="modal-title" id="'+edit_modal.sys_options.modal_title_id+'">'+edit_modal.sys_options.modal_title+'</h4>\
                              </div>\
                              <div class="modal-body">\
                                    <form id="'+edit_modal.sys_options.form_id+'" class="container-fluid">\
                                    </form>\
                              </div>\
                              <div class="modal-footer">\
                                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>\
                                <button type="button" class="btn btn-primary" id="'+edit_modal.sys_options.submit_btn_id+'" data-url="'+edit_modal.sys_options.submit_url+'">'+edit_modal.sys_options.submin_btn_title+'</button>\
                      			</div>\
                    </div>\
                  </div>\
                </div>\
                <!--数据修改模态框-->';
				$("body").append(edit_modal.sys_options.content);
		}//func ModalCreateAndAppend
		

		
		//系统选项赋值
		function SysOptionsAssign(option_obj,attr_name)
		{
			//判断当前的属性是否存在,如果存在则进行赋值
			if((attr_name in option_obj))
			{
				edit_modal.sys_options[attr_name] = option_obj[attr_name];
			}
		}
		
		
		
		//追加form元素
		function AppendFormEl(){
				//为表单添加元素,传入的是一个数组
			  $.each(form_el_options,function(i){
				//判断表单控件类型
				var el_html = SubElInitAction(this['type'], "create", this);
			  });//each
			  
			//子元素完成操作
			SubElCompeteAction();	

		}// func AppendFormEl
		
		//子元素初始化操作
		function SubElInitAction(el_type,action_type,el_opt)
		{
				//判断类别
				switch(el_type)
				{
					case 'text'://输入类型,添加标题,默认显示数据
						switch(action_type)
						{	
							case "create":
								CreateTextInput(el_opt);
							break;
							case "clear":
								ClearTextInput(el_opt);
							break;
							case "reinit":
								ReinitTextInput(el_opt);
							break;
							default:
								alert("未知的元素操作类型!!!");
							break;
						}
					break;
					
					case 'hidden'://隐藏域
						//alert(action_type);
						switch(action_type)
						{	
							case "create":
								CreateHiddenInput(el_opt);
							break;
							case "clear":
								ClearHiddenInput(el_opt);
							break;
							case "reinit":
								ReinitHiddenInput(el_opt);
							break;
							default:
								alert("未知的元素操作类型!!!");
							break;
						}
						//CreateHiddenInput(el_opt);
					break;
					
					case 'radios'://输入类型,添加名称,单选框组标题
						switch(action_type)
						{	
							case "create":
								CreateRadiosInput(el_opt);
							break;
							case "clear":
								ClearRadiosInput(el_opt);
							break;
							case "reinit":
								ReinitRadiosInput(el_opt);
							break;
							default:
								alert("未知的元素操作类型!!!");
							break;
						}
						//CreateRadiosInput(el_opt);	
						break;
					case "textarea"://文本域
						switch(action_type)
						{	
							case "create":
								CreateTextareaInput(el_opt);
							break;
							case "clear":
								ClearTextareaInput(el_opt);
							break;
							case "reinit":
								ReinitTextareaInput(el_opt);
							break;
							default:
								alert("未知的元素操作类型!!!");
							break;
						}
						//CreateTextareaInput(el_opt);	
					break;
					case "file"://文件域
						switch(action_type)
						{	
							case "create":
								CreateFileInput(el_opt);
							break;
							case "clear":
								ClearFileInput(el_opt);
							break;
							case "reinit":
								ReinitFileInput(el_opt);
							break;
							default:
								alert("未知的元素操作类型!!!");
							break;
						}
						//CreateFileInput(el_opt);	
					break;
					case "texteditor"://文本编辑器
						switch(action_type)
						{	
							case "create":
								CreateTextEditorInput(el_opt);
							break;
							case "clear":
								ClearTextEditorInput(el_opt);
							break;
							case "reinit":
								ReinitextEditorInput(el_opt);
							break;
							default:
								alert("未知的元素操作类型!!!");
							break;
						}
						//CreateFileInput(el_opt);	
					break;
					default:
						alert("表单元素类型不存在!!!");
				}
						
		}
		
		////////////创建子元素控件///////////////////////////////////////////////////////////
		
		//生成input_text元素
		function CreateTextInput(i_option)
		{
			//提示信息 placeholder填充值
			var notice_word = "请输入" + i_option['title'];

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
			
			//alert(el_html);
			//追加到表单末尾
			AppendSubElIntoForm(el_html)
		}//func CreateTextInput
		
		//生成隐藏域元素
		function CreateHiddenInput(i_option){
			//alert("hhh");
			var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key']+'" style="display:none">';
			el_html += '\
						<label>'+i_option['title']+'</label>\
						<input type="'+i_option['type']+'" class="form-control" value="'+i_option['default_value']+'"';
			el_html += ' name="'+i_option['bind_key']+'"';
			el_html += '		/>';
			el_html += ' </div>'; 		
			
			//alert(el_html);
			//追加到表单末尾
			//隐藏域不需要添加到栅格行中
			//$("#" + edit_modal.sys_options.form_id).append(el_html);
			AppendSubElIntoForm(el_html)					
		}//func CreateHiddenInput
		
		//创建单选框组元素
		function CreateRadiosInput(i_option){
			//源数据保存的parent_id
			var org_parent_id = edit_modal.sys_options.modal_id + "_radios_org_parent_id_" + edit_modal.sys_options.org_radios_parent_id_count;
			edit_modal.sys_options.org_radios_parent_id_count++;
	  		var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key'] + '"';
			el_html 	+= 'data-org_parent_id="'+org_parent_id+'"';
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
								
					
/*								//alert(this['checked']);
								//判断当前是否被选中
								if(('checked' in this) && this['checked'] == true)
								{
									//存在字段且表示选中
									el_html += ' checked="'+this['checked']+'"';
								}
								else
								{
									
								}*/
									  
						el_html += 				  '/>' +this["title"]+ '\
															   </label>';
								   
					});
			
				el_html += '  </div>';
			el_html += ' </div>'; 
			
			//追加到表单末尾
			AppendSubElIntoForm(el_html)
			
			//保存其原始值
			var r_obj = $("#"+edit_modal.sys_options.modal_id+" [data-input_type=radios]:last");
			var org_parent_id = r_obj.attr("data-org_parent_id");
			var radios_parent = '<div style="display:none" id="'+org_parent_id+'"></div>';
			$("#" + edit_modal.sys_options.modal_id).append(radios_parent);
			$("#" + org_parent_id).append(r_obj.html());
		}// func CreateRadiosInput
		
		//创建文本域元素
		function CreateTextareaInput(i_option){
			//提示信息 placeholder填充值
			var notice_word = "请输入" + i_option['title'];
			var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key'] + '"';
			//判断是否有默认值
			if(('default_value' in i_option))
			{
				el_html += ' data-default_value="'+i_option['default_value']+'"';
			}
			el_html += '>';
			el_html += '\
						<label>'+i_option['title']+'</label>\
				<textarea class="form-control" rows="'+i_option['rows']+'" cols="'+i_option['cols']+'" placeholder="'+notice_word+'"';

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
			AppendSubElIntoForm(el_html)
		}//function CreateTextareaInput
		
		function CreateFileInput(i_option){
			//文件子元素编号
			//var sub_el_num = edit_modal.sys_options.sub_el_num++;
			var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key']+'"';
			//el_html += ' data-sub_el_num="'+sub_el_num+'"';
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
			AppendSubElIntoForm(el_html)
			
			//初始化文件插件元素
			//alert("#" + edit_modal.sys_options.modal_id + " #" + edit_modal.sys_options.form_id + " .file_ctrl");
			//创建对应的数据对象
			edit_modal.sys_options.sub_el_files[i_option['bind_key']] = [];
			edit_modal.sys_options.sub_el_files[i_option['bind_key']].push({"type":"system", "upload_url":edit_modal.sys_options.file_up_url, "default_num":0,
								"el_name":i_option['bind_key'],
								"selector":GenFileCtrlSelector(i_option['bind_key'])});
			
			//加载文件插件
			FileUpload.mutilFileUpload(edit_modal.sys_options.sub_el_files[i_option['bind_key']]);
		}
		
		//创建文本编辑器控件
		function CreateTextEditorInput(i_option){
			//文件子元素编号
			var el_html = '<div class="form-group" data-input_type="'+i_option['type']+'" data-bind_key="'+i_option['bind_key']+'"';
			el_html += ' >';
			el_html += '\
						<label>'+i_option['title']+'</label>\
						<textarea class="texteditor" name="'+ i_option['bind_key'] +'"></textarea>\
						';
						
			el_html += ' </div>'; 	
/*						<div class="texteditor"></div>
						<input type="hidden" name="'+ i_option['bind_key'] +'"/>*/
			
			//追加到表单末尾
			AppendSubElIntoForm(el_html)
			
			//加载文本编辑器插件
			var bind_key = i_option['bind_key'];
			$(GenTextEditorElSelector(bind_key)).summernote({
				height: 200,
				tabsize: 2,
				lang: 'zh-CN',
				onImageUpload:function(files){
					//sendFile(files[0]);
					//alert(edit_modal.sys_options.file_up_url);
					//FileUpload.SendFile(edit_modal.sys_options.file_up_url,"upload",files,writeIntoCtrl);
					FileUpload.SendFileEx(edit_modal.sys_options.file_up_url,"upload",files,writeIntoCtrl,bind_key);
				}
			  });
		}
		
		//文本编辑器文件上传回调
		function writeIntoCtrl(json_obj){
			//alert( json_obj.ret_state);
			//获取传递的绑定数据
			var bind_key = json_obj.extra_data;
			//将图片插入到编辑器中
			$(GenTextEditorElSelector(bind_key)).summernote("insertImage", json_obj.ret_state); 
			//alert(json_obj.extra_data);
		}
		
		//添加元素到表单中
		function AppendSubElIntoForm(sub_el_html)
		{
			//获取最后一行,判断是否可以添加新列,如果不能,则增加行
			//是否存在行
			var create_new_line_if = false;
			//alert("#" + edit_modal.sys_options.form_id+ " .row:last");
			//alert($("#" + edit_modal.sys_options.form_id+ " .row:last").html());
			//alert($("#" + edit_modal.sys_options.form_id + " .row:last").length);
			if(typeof($("#" + edit_modal.sys_options.form_id ).children(" .row:last")) != "undefined" && $("#" + edit_modal.sys_options.form_id + " .row:last").length > 0)
			{
				//存在行,则判断当前行是否已满
				if($("#" + edit_modal.sys_options.form_id).children(" .row:last").children(".item_row:last").html() != "")
				{
					//最后一行已满,则创建新行
					create_new_line_if = true;
				}
				else
				{
					//最后一行还可以放入数据,则不需要创建新行
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
				var new_line_html = '<div class="row">\
									  <div class="col-md-4 item_row"></div>\
									  <div class="col-md-4 item_row"></div>\
									  <div class="col-md-4 item_row"></div>\
									</div>';
				//追加到表单中
				$("#" + edit_modal.sys_options.form_id).append(new_line_html);	
			}
			//行对象为最后一行
			var line_obj = $("#" + edit_modal.sys_options.form_id).children(" .row:last");		
			
			//判断是放在第一列还是放在第二列
			var col_obj = "";
			line_obj.children(".item_row").each(function(i){
				//alert($(this).html());
				//使用第一个为空的列
				if($(this).html() == "")
				{
					col_obj = $(this);
					//break;
					return false;
				}
			});
			//放入列中
			col_obj.html(sub_el_html);
		}
		////////////创建子元素控件结束///////////////////////////////////////////////////////////
		
		////////创建子元素功能函数/////////////////////////////////////////////////////
		//子元素完成操作
		function SubElCompeteAction(){
			//保留单选框原始代码
			//KeepRadiosOrigHtml();
			
			//创建文件元素
			//CreateFileEl();
		}
		
		///////清空子元素控件//////////////////////////////////////////////////////////////////
		//清空inputtext元素
		function ClearTextInput(i_option)
		{

			$(i_option).find("input").val(GetElDefaultValue(i_option));

		}//func CreateTextInput
		
		//清空隐藏域元素
		function ClearHiddenInput(i_option){	
							
		}//func CreateHiddenInput
		
		//清空单选框组元素
		function ClearRadiosInput(i_option){
			//重置单选框区域
			//清空当前内容
			$(i_option).html("");
			//获取初始值填充到
			var org_parent_id = $(i_option).attr("data-org_parent_id");
			$(i_option).html($("#" + org_parent_id).html());
	
			
			//判断是否有默认数据,默认数据表示的单选框的编号
			var default_value = GetElDefaultValue(i_option);
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
		}// func CreateRadiosInput
		
		//清空文本域元素
		function ClearTextareaInput(i_option){
			$(this).find("textarea").val(GetElDefaultValue(i_option));
		}//function ClearTextareaInput
		
		//清空文件域
		function ClearFileInput(i_option){
			//alert("ok");
			//FileUpload.reset();
			var bind_key = $(i_option).attr("data-bind_key");
			//加载文件插件
			FileUpload.mutilFileUpload(edit_modal.sys_options.sub_el_files[bind_key]);
		}	
		
		//清空文本编辑器
		function ClearTextEditorInput(i_option){
			//清空文本编辑器内容
			var bind_key = $(i_option).attr("data-bind_key");
			$(GenTextEditorElSelector(bind_key)).code("");
		}	
		
		//获取元素的默认数据
		function GetElDefaultValue(el_obj)
		{
			var default_value = "";
			if(typeof($(el_obj).attr("data-default_value"))!="undefined" )
				default_value = $(el_obj).attr("data-default_value");	
				
			return 	default_value;	
		}
		////////清空子元素控件结束/////////////////////////////////////////////////////////////
		
		/////////重新初始化设置元素///////////////////////////////////////////////////
		//生成input_text元素
		function ReinitTextInput(i_option)
		{
			//获取数据
			var bind_key = $(i_option.this_obj).attr("data-bind_key");
			var text = $(i_option.dis_row_obj).find("." + bind_key).html();
			text = text.replace(/(^\s*)|(\s*$)/g, ""); 
			//alert(text);
			$(i_option.this_obj).find("input").val(text);
		}//func ReinitTextInput
		
		//生成隐藏域元素
		function ReinitHiddenInput(i_option){	
			//获取数据
			var bind_key = $(i_option.this_obj).attr("data-bind_key");
			$(i_option.this_obj).find("input").val($(i_option.dis_row_obj).find("." + bind_key).html());				
		}//func ReinitHiddenInput
		
		//创建单选框组元素
		function ReinitRadiosInput(i_option){
			//设置元素的default_value,然后使用清空重置即可
			//获取当前元素对应显示表中的真实的数据
			var bind_key = $(i_option.this_obj).attr("data-bind_key");
			//alert(bind_key);
			var real_value = $(i_option.dis_row_obj).find("."+bind_key+" .real_data").html();
			//alert(real_value);
			var chk_index = 0;
			//判断当前显示的真实值是哪个单选框的,然后将其选中 <input type="radio" value="'+this["value"]+'" ';
			$(i_option.this_obj).find("[type=radio]").each(function(index, element) {
				cur_value = $(this).val();
				if(real_value == cur_value)
				{
					//设置当前单选框为选中
					//$(this).attr("checked","cheked");
					//break;
					chk_index = index;
				}
       		});
			//alert(chk_index);
			$(i_option.this_obj).attr("data-default_value",chk_index);
			
			//清空重置单选框组
			ClearRadiosInput(i_option.this_obj);
		}// func ReinitRadiosInput
		
		//创建文本域元素
		function ReinitTextareaInput(i_option){
			//获取数据
			var bind_key = $(i_option.this_obj).attr("data-bind_key");
			var text = $(i_option.dis_row_obj).find("." + bind_key).text();
			text = text.replace(/(^\s*)|(\s*$)/g, ""); 
			//alert(text);
			$(i_option.this_obj).find("textarea").text(text);
		}//function ReinitTextareaInput
		
		//重初始化设置文件控件
		function ReinitFileInput(i_option){
			//获取数据重新构造文件插件
			
			//获取默认显示编号
			//获取数据
			var bind_key = $(i_option.this_obj).attr("data-bind_key");
			var dis_obj = $(i_option.dis_row_obj).find("."+bind_key);
			//alert(dis_obj.html());
			//构造参数
			//获取默认文件编号
			var default_file_num = dis_obj.find(".default_file_num").html();
			//alert(default_file_num);
			edit_modal.sys_options.sub_el_files[bind_key] = [];
			edit_modal.sys_options.sub_el_files[bind_key].push({"type":"system", "upload_url":edit_modal.sys_options.file_up_url,"default_num":default_file_num,
								"el_name":bind_key,
								"selector":GenFileCtrlSelector(bind_key)});
								
			//获取文件
			dis_obj.find(".files img").each(function(i){
				var t_obj = {};
				t_obj.type = "file";
				t_obj.src = $(this).attr("src");
				edit_modal.sys_options.sub_el_files[bind_key].push(t_obj);	
			});
			
			FileUpload.mutilFileUpload(edit_modal.sys_options.sub_el_files[bind_key]);
		}//func ReinitFileInput
		
		
		//重初始化设置文件控件
		function ReinitextEditorInput(i_option){
			//获取内容
			var bind_key = $(i_option.this_obj).attr("data-bind_key");
			//alert(bind_key);
			var text = $(i_option.dis_row_obj).find("." + bind_key).html();
			//alert(text);
			$(GenTextEditorElSelector(bind_key)).code(text);		
			
		}// func ReinitextEditorInput
		
		//生成文件域的选择器
		function GenFileCtrlSelector(bind_key)
		{
			return "#" + edit_modal.sys_options.modal_id + " #" + edit_modal.sys_options.form_id + " [data-bind_key="+bind_key+"]" + " .file_ctrl";
		}
		
		//生成文本编辑器的选择器
		function GenTextEditorElSelector(bind_key)
		{
			return "#" + edit_modal.sys_options.modal_id + " #" + edit_modal.sys_options.form_id + " [data-bind_key="+bind_key+"]" + " .texteditor";
		}
		
		/////////重新初始化设置元素///////////////////////////////////////////////////
		
		
		//////////////事件绑定的函数///////////////////////////////////////////////////
		//隐藏时调用函数
		function HiddenActionCall(e)
		{
			//事件拦截,如果当前不是有本对话框发起的,那么就不能进行接下来的操作
			if(typeof($(e.relatedTarget).attr("class")) == "undefined")
			{
				return true;
			}
		}// func HiddenActionCall
		
		//显示时调用函数
		function ShowActionCall(e)
		{
			//事件拦截,如果当前不是有本对话框发起的,那么就不能进行接下来的操作
			if(typeof($(e.relatedTarget).attr("class")) == "undefined")
			{
				return true;
			}
			
			//重置表单输入元素
			ResetFormInputEl(e);
		}//func ShowActionCall	
		
		//重置表单输入元素
		function ResetFormInputEl(e)
		{
			//alert("retset");
			//获取当前的数据操作操作类型
			var data_option_type = $(e.relatedTarget).attr("data-data_option_type");
			//获取操作元素对应的数据行对象
			var dis_row_obj = $(e.relatedTarget).parent().parent();
			//alert(dis_row_obj.html());
			//遍历表单对象,进行初始化操作
			$("#"+edit_modal.sys_options.form_id+" [class=form-group]").each(function(index, element) {
				var type = $(this).attr("data-input_type");//控件类型
				//重置类型,数据添加操作时,进行清空重置,数据更新操作时,进行重新初始化操作
				var reset_action_type = "clear";
				var i_option = "";
				if(data_option_type == "add")
				{
					reset_action_type = "clear";
					i_option = this;
				}
				else
				{
					//进行重新初始化操作
					reset_action_type = "reinit";
					i_option = {};
					i_option.this_obj = this;
					i_option.dis_row_obj = dis_row_obj[0];
				}
				//子元素初始化
				SubElInitAction(type,reset_action_type,i_option);
			});
					
		}//func ResetFormInputEl
		
		function ClickSubmitCall()
		{
			//alert("#" + edit_modal.sys_options.modal_id + " [data-input_type=texteditor]");
			//初始化编辑器的值
			$("#" + edit_modal.sys_options.modal_id + " [data-input_type=texteditor]").each(function(index, element) {
				var bind_key = $(this).attr("data-bind_key");
                $(this).find(".texteditor").text($(GenTextEditorElSelector(bind_key)).code());
            });
			//return;
			//alert('ok');
			//进行数据前的外部调用操作
			if(typeof(eval(edit_modal.sys_options.submit_call_func)) == "function")
				edit_modal.sys_options.submit_call_func();
		
			//数据获取进行提交
			data_str = $("#"+edit_modal.sys_options.form_id).serialize();
			//alert("#"+edit_modal.sys_options.form_id);
			//alert(data_str);return;
			data_obj = {};
			data_obj.data = data_str;
			
			url = $("#"+edit_modal.sys_options.submit_btn_id).attr("data-url");
			//alert(data_str +","+url);return;
			//判断当前是否使用sim_post方式提交
			//alert(edit_modal.sys_options.sim_post_if);
			if(edit_modal.sys_options.sim_post_if) 
			{
				SimPost(url,data_obj);
				return;	
			}
			//SimPost(url,data_obj);return;
			$.post(url,$.param(data_obj),function(Json){
				//alert(Json.ret_code);
				//获取数据
				ret_code = Json.ret_code;
				ret_state = DataTransDecode(Json.ret_state);
				//alert(ret_state);
				
				//判断返回标志位
				if(ret_code == 0)
				{
					//数据操作成功
					notice_modal.Show('操作提示',"数据操作成功");
					//alert(ret_state);
					//设置回调
					notice_modal.SetHiddenCall(function (){window.location.href=ret_state;});
				}
				else
				{
					//数据操作失败
					notice_modal.Show('发生错误',ret_state);
				}
			},"json");
			//alert(data_str +","+url);
			//关闭对话框
			
			$('#'+edit_modal.sys_options.modal_id).modal('hide');
		}//func ClickSubmitCall
		
		///////////返回对象/////////////////////////////////////////////////////////////////////
		edit_modal.Init(e_options);
		
		//加入到表中
		EditSubmitModal[edit_modal.sys_options.modal_id] = edit_modal;
		//return edit_modal;
	},//createNewModal func
	//对象表
	modals:{},
}//editModal class
















