// JavaScript Document
function AjaxSubmit()
			{
				//进行数据前的外部调用操作
				add_modal.submit_call_func();
				//数据获取进行提交
				data_str = $("#add_modal_data_form").serialize();
				data_obj = {};
				data_obj.data = data_str;
				url = $("#add_modal_submin_btn").attr("data-url");
				//alert($("#add_modal_data_form").find('[name=content]').attr("id"));
				//alert($("#add_modal_data_form").find('[name=content]').text());
				//alert(data_str +","+url);return;
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