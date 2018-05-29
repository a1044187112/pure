// JavaScript Document
$(function () {
            var update_modal = new Object();//声明类对象
			update_modal.title = "错误提示";//对话框标题
			update_modal.body = "发生错误";//提示内容	
			update_modal.hidden_call = "";	
			
			//单选框初始源代码父元素ID
			update_modal.org_radios_parent_id = "update_modal_radios_org";
			//显示数据表选择器
			update_modal.dis_table_selector = "";
			
			//对话框源代码
			update_modal.dialog_html = '                <!--数据修改模态框-->\
                <div class="modal fade" id="update_modal" tabindex="-1" role="dialog" aria-labelledby="update_modal_title">\
                  	<div class="modal-dialog" role="document">\
                            <div class="modal-content">\
                              <div class="modal-header">\
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="update_modal_close_btn"><span aria-hidden="true">&times;</span></button>\
                                <h4 class="modal-title" id="update_modal_title">修改</h4>\
                              </div>\
                              <div class="modal-body">\
                                    <form id="update_modal_data_form">\
                                    </form>\
                              </div>\
                              <div class="modal-footer">\
                                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>\
                                <button type="button" class="btn btn-primary" id="update_modal_submin_btn" data-url="">保存修改</button>\
                      			</div>\
                    </div>\
                  </div>\
                </div>\
                <!--数据修改模态框-->';
			window["update_modal"] = update_modal;//把类赋值给window对象，作为window对象的属性
			
			/////////////////内部函数//////////////////////////////////
			
			
			////////////////外部调用接口////////////////////////////
			//关闭对话框进行回调
			update_modal.SetHiddenCall = function (func){
				update_modal.hidden_call = func;
			}//SetHiddenCall
			
			//页面加载完成后的初始化,指定显示数据表的选择器,父元素的选择器,表单元素的选项
			update_modal.Init = function (form_el_option){

				//将提示框追加页面body末
				AppendModalDlgElement();
				//为form添加元素
				AppendFormEl(form_el_option);
				//保留单选框原始代码
				KeepRadiosOrigHtml();
				//删除所有的单选对话框元素
				ClearRadiosArea();
				
				//绑定隐藏事件函数
				$('#update_modal').on('hidden.bs.modal', HiddenActionCall)//h on	
				
				//绑定显示事件函数
				$('#update_modal').on('show.bs.modal',	ShowActionCall);
				
				//绑定点击提交按钮
				//点击提交按钮
				$("#update_modal_submin_btn").click(ClickSubmitCall);
				
				//进行初始化操作
				notice_modal.Init();
			}//Init
			
			///事件相关///////
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
				//alert("submit");
				//数据获取进行提交
				data_str = $("#update_modal_data_form").serialize();
				data_obj = {};
				data_obj.data = data_str;
				url = $("#update_modal_submin_btn").attr("data-url");
				//alert(data_str +","+url);SimPost(url,data_obj);return;
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
				$('#update_modal').modal('hide');
			}//func ClickSubmitCall
			
			///////////初始化调用///////////////////////////////
			//将提示框追加页面body末尾
			function AppendModalDlgElement(){
				//alert($("body").html());
				$("body").append(update_modal.dialog_html);
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
						 	$("#update_modal_title").html(this['modal_title']);
							$("#update_modal_submin_btn").html(this['submin_btn_name']);
							$("#update_modal_submin_btn").attr("data-url",this['update_url']);
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
							$("#update_modal_data_form").append(el_html);
						break;
						
						case 'hidden'://隐藏域
					  		el_html = '<div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+bind_key+'" style="display:none">';
							el_html += '\
                                        <label>'+this['title']+'</label>\
                                        <input type="'+this['type']+'" class="form-control" placeholder="'+this['default_value']+'"';
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
							$("#update_modal_data_form").append(el_html);
						
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
							$("#update_modal_data_form").append(el_html);						   
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
				var radios_parent = '<div style="display:none" id="'+update_modal.org_radios_parent_id+'"></div>';
				$("#update_modal").append(radios_parent);
				
				//保留数据,并为数据在附加一个外框,以便后面操作
				$("#update_modal_data_form [class=radios]").each(function(index, element) {
                    radios_box = '<div class="radios">';
					radios_box += $(this).html();
					radios_box += "</div>";
					
					//添加到父元素中
					$("#" + update_modal.org_radios_parent_id).append(radios_box);
                });
				
				
			}//func KeepRadiosOrigHtml
			
			//删除所有的单选框
			function ClearRadiosArea()
			{
				//删除所有的单选对话框元素
				$("#update_modal_data_form [class=radios]").each(function(index, element) {
                    $(this).html("");
                });
			}
			
			//重置所有单选框区域
			function ResetRadiosArea()
			{
				//删除所有的单选对话框元素
				$("#update_modal_data_form [class=radios]").each(function(index, element) {
                    $(this).html("");
                });
				
				//为单选选项区域添加单选框
				$("#update_modal_data_form [class=radios]").each(function(index, element) {
					//alert(index);
					//alert($("#" + update_modal.org_radios_parent_id + " [class=radios]:eq("+index+")").html());
					//使用对应的下表进行填充
                    $(this).html($("#" + update_modal.org_radios_parent_id + " [class=radios]:eq("+index+")").html());
                });
				
			}
			
			//显示表单元素数据
			function ShowFromElData(e)
			{
				//alert("ok");
				//获取操作元素对应的数据行对象
				var dis_table_obj = $(e.relatedTarget).parent().parent();
				//alert(dis_table_obj.html());
				//获取当前的数据操作操作类型
				var data_option_type = $(e.relatedTarget).attr("data-data_option_type");

				//遍历表单对象,从显示数据行中获取数据进行填充
				$("#update_modal_data_form [class=form-group]").each(function(index, element) {
                    //获取当前元素控件的属性 <div class="form-group" data-input_type="'+this['type']+'" data-bind_key="'+this['bind_key']+'">
					var type = $(this).attr("data-input_type");//控件类型
					var bind_key = $(this).attr("data-bind_key");//显示行中的字段的属性
					
					//根据控件类型进行数据获取和填充
					switch(type)
					{
						case 'text':
						case 'hidden':
							//获取数据
							$(this).find("input").val(dis_table_obj.find("." + bind_key).html());
						break;
						case 'radios'://获取的隐藏域中真实数据
							//获取数据
							real_value = dis_table_obj.find(".real_data").html();
							//判断当前显示的真实值是哪个单选框的,然后将其选中 <input type="radio" value="'+this["value"]+'" ';
							$(this).find("[type=radio]").each(function(index, element) {
                                cur_value = $(this).val();
								if(real_value == cur_value)
								{
									//设置当前单选框为选中
									$(this).attr("checked","cheked");
									return;
								}
                            });
						break;
						default:
						alert("数据处理位置控件类型!!");
					}
					
					
					
					
					
					
                });
			}//func 
});

















