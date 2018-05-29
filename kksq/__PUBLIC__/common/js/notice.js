// JavaScript Document
$(function () {
            var notice_modal = new Object();//声明类对象
			notice_modal.title = "错误提示";//对话框标题
			notice_modal.body = "发生错误";//提示内容	
			notice_modal.hidden_call = "";	
			notice_modal.ok_action_func = "";	//点击确定时的调用函数
			notice_modal.ok_action_func_param = "";	//点击确定时的调用函
			notice_modal.init_if = false;
			//对话框源代码
			notice_modal.dialog_html = '<!--Notice Modal -->\
			<div class="modal fade" id="notice_modal" tabindex="-1" role="dialog" aria-labelledby="notice_modal_label">\
			  <div class="modal-dialog" role="document">\
				<div class="modal-content">\
				  <div class="modal-header">\
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
					<h4 class="modal-title" id="notice_modal_label">错误提示</h4>\
				  </div>\
				  <div class="modal-body" id="notice_modal_body">\
					错误提示\
				  </div>\
				  <div class="modal-footer">\
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>\
					<button type="button" class="btn btn-primary notice_modal_ok_btn" data-dismiss="modal">确定</button>\
				  </div>\
				</div>\
			  </div>\
			</div>\
			<!--Notice Modal -->';
			window["notice_modal"] = notice_modal;//把类赋值给window对象，作为window对象的属性
			
			/////////////////内部函数//////////////////////////////////
			//将提示框追加页面body末尾
			function AppendNoticeElement(){
				//alert($("body").html());
				$("body").append(notice_modal.dialog_html);
			}
			
			////////////////外部调用接口////////////////////////////
			//显示对话框
			notice_modal.Show = function (title,body, ok_action_func,ok_action_func_param){
				//alert(title);
				notice_modal.title = title||notice_modal.title;
				notice_modal.body = body||notice_modal.body;
				//alert(notice_modal.title);
				//设置标题和提示内容
				$("#notice_modal_label").html(notice_modal.title);
				$("#notice_modal_body").html(notice_modal.body);
				
				$('#notice_modal').modal('show');
				
				notice_modal.ok_action_func = ok_action_func || "";
				//alert(notice_modal.ok_action_func);
				notice_modal.ok_action_func_param = ok_action_func_param || "";
			}//show
			
			//关闭对话框进行回调
			notice_modal.SetHiddenCall = function (func){
				notice_modal.hidden_call = func;
			}//SetHiddenCall
			
			//页面加载完成后的初始化
			notice_modal.Init = function (){
				if(notice_modal.init_if) return;
				notice_modal.init_if = true;
				//alert("init");
				//将提示框追加页面body末
				AppendNoticeElement();
				
				//对话框隐藏时进行用户回调操作
				$('#notice_modal').on('hidden.bs.modal', function (e) {
							//alert("hhhh");
					notice_modal.hidden_call();
				})//h on
				
				//点击确定按钮时的回调函数
				$("#notice_modal .notice_modal_ok_btn").click(function(e) {
					//alert("ok");
						//alert(notice_modal.ok_action_func);
                    //如果函数被调用,则进行设置,调用之后就无效了
					if(typeof(eval(notice_modal.ok_action_func )) == "function")
					{
						//alert(notice_modal.ok_action_func);
						//alert(notice_modal.ok_action_func_param);
						notice_modal.ok_action_func(notice_modal.ok_action_func_param);
						
						notice_modal.ok_action_func = "";
						notice_modal.ok_action_func_param = "";
					}
					
                });		
			}//Init
			
			///事件相关///////
			//关闭事件
			
			///////////初始化调用///////////////////////////////
		//自调用初始化
		notice_modal.Init();
});
