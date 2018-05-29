// JavaScript Document
$(function () {
            var add_modal = new Object();//声明类对象
			add_modal.title = "错误提示";//对话框标题
			add_modal.body = "发生错误";//提示内容	
			add_modal.hidden_call = "";	
			
			//单选框初始源代码父元素ID
			add_modal.org_radios_parent_id = "add_modal_radios_org";
			//显示数据表选择器
			add_modal.dis_table_selector = "";
			//提交数据时外部回调函数
			add_modal.submit_call_func = "";
			//editor的初始化回调函数
			add_modal.editor_reset = "";
			//模态对话框初始化完成后外部调用函数
			add_modal.init_complete_call = "";
			//提交提交数据时,使用debug方式,也就是simpost
			add_modal.sim_post_if = false;
			
			//对话框源代码
			add_modal.dialog_html = '                <!--数据修改模态框-->\
                <div class="modal fade" id="add_modal" tabindex="-1" role="dialog" aria-labelledby="add_modal_title" style="display:none">\
                  	<div class="modal-dialog" role="document">\
                            <div class="modal-content">\
                              <div class="modal-header">\
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="add_modal_close_btn"><span aria-hidden="true">&times;</span></button>\
                                <h4 class="modal-title" id="add_modal_title">修改</h4>\
                              </div>\
                              <div class="modal-body">\
                                    <form id="add_modal_data_form">\
                                    </form>\
                              </div>\
                              <div class="modal-footer">\
                                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>\
                                <button type="button" class="btn btn-primary" id="add_modal_submin_btn" data-url="">保存修改</button>\
                      			</div>\
                    </div>\
                  </div>\
                </div>\
                <!--数据修改模态框-->';
			window["add_modal"] = add_modal;//把类赋值给window对象，作为window对象的属性
			
			/////////////////内部函数//////////////////////////////////
			
			
			////////////////外部调用接口////////////////////////////
			//关闭对话框进行回调
			add_modal.SetHiddenCall = function (func){
				add_modal.hidden_call = func;
			}//SetHiddenCall
			
			//页面加载完成后的初始化,指定显示数据表的选择器,父元素的选择器,表单元素的选项
			add_modal.Init = function (form_el_option){
				//alert("init");;
				//将提示框追加页面body末
				AppendModalDlgElement();
				//为form添加元素
				AppendFormEl(form_el_option);
				//保留单选框原始代码
				KeepRadiosOrigHtml();
				//删除所有的单选对话框元素
				ClearRadiosArea();
				
				//绑定隐藏事件函数
				$('#add_modal').on('hidden.bs.modal', HiddenActionCall)//h on	
				
				//绑定显示事件函数
				$('#add_modal').on('show.bs.modal',	ShowActionCall);
				
				//绑定点击提交按钮
				//点击提交按钮
				$("#add_modal_submin_btn").click(ClickSubmitCall);
				
				//进行初始化操作
				notice_modal.Init();
				
				//初始化完成后进行调用
				if(typeof(eval(add_modal.init_complete_call)) == "function")
				{
					add_modal.init_complete_call();
				}
				
				
			}//Init
			
			//获取编辑器选择器
			add_modal.GetEditSelector = function ()
			{
				return "add_modal_editor";
			}
			
			//获取文件域的选择器,
			add_modal.GetFileAreaSelector = function ()
			{
				return "add_modal_file";
			}
			///事件相关//////////////////////////
			//显示时调用函数
			function ShowActionCall(e)
			{
				//alert(e);
				//alert($(e.relatedTarget).attr("data-data_option_type"));
				//重置单选框区域
				ResetRadiosArea();
				
				//使用数据表中的相应行来填充表单
				ShowFromElData(e);
				
			}//func ShowActionCall
			
			//隐藏时调用函数
			function HiddenActionCall()
			{
				//删除所有的单选对话框元素
				//ClearRadiosArea();
			}
			
			function ClickSubmitCall()
			{
				//alert('ok');
				//进行数据前的外部调用操作
				if(typeof(eval(add_modal.submit_call_func)) == "function")
						add_modal.submit_call_func();
						
				//数据获取进行提交
				data_str = $("#add_modal_data_form").serialize();
				data_obj = {};
				data_obj.data = data_str;
				url = $("#add_modal_submin_btn").attr("data-url");
				//alert($("#add_modal_data_form").find('[name=content]').attr("id"));
				//alert($("#add_modal_data_form").find('[name=content]').text());
				//alert(data_str +","+url);return;
				//判断当前是否使用sim_post方式提交
				if(add_modal.sim_post_if) 
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
				$('#add_modal').modal('hide');
			}//func ClickSubmitCall
			

			
			///////////初始化调用///////////////////////////////
			//将提示框追加页面body末尾
			function AppendModalDlgElement(){
				//alert($("body").html());
				$("body").append(add_modal.dialog_html);
			}
			
			//追加form元素
			function AppendFormEl(form_el_option){
					//为表单添加元素,传入的是一个数组
				  $.each(form_el_option,function(i){
					  //判断表单空间类型
					  var bind_key = this['bind_key'];
					  
				   	switch(this['type'])
					{
						case 'system':
						//进行系统设置
						 	$("#add_modal_title").html(this['modal_title']);
							$("#add_modal_submin_btn").html(this['submin_btn_name']);
							$("#add_modal_submin_btn").attr("data-url",this['update_url']);
							add_modal.submit_call_func = this['submit_call_func'];
							add_modal.init_complete_call = this['init_complete_call'];
							add_modal.sim_post_if = this['sim_post_if'];
							
						break;
						
						case 'text'://输入类型,添加标题,默认显示数据
					  		el_html = '<div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+bind_key+'">';
							el_html += '\
                                        <label>'+this['title']+'</label>\
                                        <input type="'+this['type']+'" class="form-control" placeholder="'+this['default_value']+'"';
							//判断是否需要添加名称
							if(('submit_in_form' in this) && this['submit_in_form'] == false)
							{
								//不需要在form中提交
							}
							else
							{
								//需要form中提交数据,则添加name属性
								el_html += ' name="'+bind_key+'"';
							}
							
							//判断是否可写
							if(('disabled' in this) && this['disabled'] == true)
							{
								//禁用
								el_html += ' disabled=""';
							}
							
							
							el_html += '		/>';
							el_html += ' </div>'; 
							$("#add_modal_data_form").append(el_html);
						break;
						
						case 'hidden'://隐藏域
					  		el_html = '<div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+bind_key+'" style="display:none">';
							el_html += '\
                                        <label>'+this['title']+'</label>\
                                        <input type="'+this['type']+'" class="form-control" value="'+this['default_value']+'"';
							//判断时序需要添加名称
							if(('submit_in_form' in this) && this['submit_in_form'] == false)
							{
								//不需要在form中提交
							}
							else
							{
								//需要form中提交数据,则添加name属性
								el_html += ' name="'+bind_key+'"';
							}
							el_html += '		/>';
							el_html += ' </div>'; 
							$("#add_modal_data_form").append(el_html);
						
						break;
						
						case 'radios'://输入类型,添加名称,单选框组标题
					  		el_html = '<div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+bind_key+'">';
							el_html += '\
                                        <label >'+this['title']+'</label>\
                                        <div class="radios">';
							$.each(this['sub_el_title'],function(){
								
								el_html += '     <label class="radio-inline">\
                                              <input type="radio" value="'+this["value"]+'" ';

										//判断时序需要添加名称
										if(('submit_in_form' in this) && this['submit_in_form'] == false)
										{
											//不需要在form中提交
										}
										else
										{
											//需要form中提交数据,则添加name属性
											el_html += ' name="'+bind_key+'"';
										}		  
								el_html += 				  '/>' +this["title"]+ '\
                                           </label>';
										   
							});

                           el_html += '  </div>';

							el_html += ' </div>'; 
							$("#add_modal_data_form").append(el_html);						   
							break;
						case "textarea":
					  		el_html = '<div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+bind_key+'">';
							el_html += '\
                                        <label>'+this['title']+'</label>\
								<textarea class="form-control" rows="'+this['rows']+'" cols="'+this['cols']+'" placeholder="'+this['default_value']+'"';
							//判断是否是编辑器
							if(('is_editor' in this) && this['is_editor'] == true)
							{
								//当前textarea是编辑器
								el_html += ' id="add_modal_editor" data-is_editor';
								
								//设置编辑器回调函数
								add_modal.editor_reset = this['editor_reset'];
							}
     
							//判断是否需要添加名称/ <input type="'+this['type']+'" class="form-control" placeholder="'+this['default_value']+'"';
							if(('submit_in_form' in this) && this['submit_in_form'] == false)
							{
								//不需要在form中提交
							}
							else
							{
								//需要form中提交数据,则添加name属性
								el_html += ' name="'+bind_key+'"';
							}
							
							//判断是否可写
							if(('disabled' in this) && this['disabled'] == true)
							{
								//禁用
								el_html += ' disabled=""';
							}
							el_html += ' ></textarea>';
							el_html += ' </div>'; 
							$("#add_modal_data_form").append(el_html);							
						break;
						case "textarea":
					  		el_html = '<div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+bind_key+'">';
							el_html += '\
                                        <label>'+this['title']+'</label>\
								<textarea class="form-control" rows="'+this['rows']+'" cols="'+this['cols']+'" placeholder="'+this['default_value']+'"';
							//判断是否是编辑器
							if(('is_editor' in this) && this['is_editor'] == true)
							{
								//当前textarea是编辑器
								el_html += ' id="add_modal_editor" data-is_editor';
								
								//设置编辑器回调函数
								add_modal.editor_reset = this['editor_reset'];
							}
     
							//判断是否需要添加名称/ <input type="'+this['type']+'" class="form-control" placeholder="'+this['default_value']+'"';
							if(('submit_in_form' in this) && this['submit_in_form'] == false)
							{
								//不需要在form中提交
							}
							else
							{
								//需要form中提交数据,则添加name属性
								el_html += ' name="'+bind_key+'"';
							}
							
							//判断是否可写
							if(('disabled' in this) && this['disabled'] == true)
							{
								//禁用
								el_html += ' disabled=""';
							}
							el_html += ' ></textarea>';
							el_html += ' </div>'; 
							$("#add_modal_data_form").append(el_html);							
						break;
						case "file"://文件域
					  		el_html = '<div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+bind_key+'">';
							el_html += '\
                                        <label>'+this['title']+'</label>\
                                        <input  name="'+bind_key+'" id="add_modal_file" type="'+this['type']+'" class="form-control" value="'+this['default_value']+'"';
						
							el_html += '		/>';
								//隐藏域
							el_html += '	<input type="hidden" id="add_modal_up_file" name="'+bind_key+'" value=""/>';
							el_html += ' </div>'; 
							$("#add_modal_data_form").append(el_html);						
						break;
						default:
							alert("表单元素类型不存在!!!");
					}

				  });//each
			}// func AppendFormEl
			
			//保留单选框初始源代码
			function KeepRadiosOrigHtml()
			{
				//在模态框中添加新元素
				var radios_parent = '<div style="display:none" id="'+add_modal.org_radios_parent_id+'"></div>';
				$("#add_modal").append(radios_parent);
				
				//保留数据,并为数据在附加一个外框,以便后面操作
				$("#add_modal_data_form [class=radios]").each(function(index, element) {
                    radios_box = '<div class="radios">';
					radios_box += $(this).html();
					radios_box += "</div>";
					
					//添加到父元素中
					$("#" + add_modal.org_radios_parent_id).append(radios_box);
                });
				
				
			}//func KeepRadiosOrigHtml
			
			//删除所有的单选框
			function ClearRadiosArea()
			{
				//删除所有的单选对话框元素
				$("#add_modal_data_form [class=radios]").each(function(index, element) {
                    $(this).html("");
                });
			}
			
			//重置所有单选框区域
			function ResetRadiosArea()
			{
				//删除所有的单选对话框元素
				$("#add_modal_data_form [class=radios]").each(function(index, element) {
                    $(this).html("");
                });
				
				//为单选选项区域添加单选框
				$("#add_modal_data_form [class=radios]").each(function(index, element) {
					//alert(index);
					//alert($("#" + add_modal.org_radios_parent_id + " [class=radios]:eq("+index+")").html());
					//使用对应的下表进行填充
                    $(this).html($("#" + add_modal.org_radios_parent_id + " [class=radios]:eq("+index+")").html());
                });
				
			}
			
			//显示表单元素数据
			function ShowFromElData(e)
			{
				//获取操作元素对应的数据行对象
				var dis_table_obj = $(e.relatedTarget).parent().parent();
				//alert(dis_table_obj.html());
				//获取当前的数据操作操作类型
				var data_option_type = $(e.relatedTarget).attr("data-data_option_type");

				//遍历表单对象,从显示数据行中获取数据进行填充
				$("#add_modal_data_form [class=form-group]").each(function(index, element) {
                    //获取当前元素控件的属性 <div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+this['bind_key']+'">
					var type = $(this).attr("data-input_type");//控件类型
					var bind_key = $(this).attr("data-bind_key");//显示行中的字段的属性
					
					//根据控件类型进行数据获取和填充
					switch(type)
					{
						case 'text':
							//清空数据
							$(this).find("input").val("");
						break;
						case 'hidden':
						break;
						case 'radios':
							//设置第一个为选中
							$(this).find("[type=radio]:first").attr("checked","cheked");
						break;
						case 'textarea':
							//判断当前是否是编辑器
							if($("#add_modal_editor").length > 0)
							{
								//是编辑器,调用清空函数
								if(typeof(eval(add_modal.editor_reset)) == "function")
									add_modal.editor_reset();
							}else
							{
								$(this).find("textarea").html("");								
							}

						break;
						case 'file':
						break;
						default:
						alert("数据处理位置控件类型!!");
					}
					
					
					
					
					
					
                });
			}//func 
});

















