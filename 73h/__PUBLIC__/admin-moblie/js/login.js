var btnClick = {
	// 提交按钮点击事件
	btnEventClick : function(btnsel,formSel){
		$(btnsel).click(function(){
			if(formAuth.formChk.formSubmitChk(formSel)){
				CtrlElAction.isSimPost=false;
			      var i_option =[
			        {"func1":function(){
			            // thisBindEvent.addBtnSubData();
			        }}, // 与后台交互成功时执行的方法 
			        {"func2":function(text){
			            thisGenCode.errorReceiptCode(text);
			        }}// 与后台交互失败时的执行方法
			      ];
			    HomeCtrlElAction.initStatic(".bi_clear_btn",i_option);
			}else{
				// window.location.href="/73h/tmpl/admin-moblie/error.html";
				// thisGenCode.errorReceiptCode("请输入用户名和密码");
			}
		});
	},

}


var formAuth = {
	// 失去焦点的样式
	formBlur : {
		inputBlur : function(){
			$("form .i_form_auth").each(function(index, el) {
				// 获取控件
				var inputBox = $(this).find('[name]');
				$(inputBox).blur(function(){
				    $(this).css("border","3px solid #73c8d2");
				});
			});

		},
	},

	//表单检测
	formChk	: {
		//表单提交检测,检测表单控件的值是否为空,如果为空,则进行提示
		//控件项-i_form_auth，标题-i_title  控件本身-input_ctrl
		formSubmitChk : function(form_selr){
			var ret = true;
			//遍历指定的选择器
			$(form_selr + " .i_form_auth").each(function(index, el) {
				// 获取控件
				var inputBox = $(this).find('[name]');
				//获取控件的值
				var val = inputBox.val();
				val = Trim(val);
				//alert(val);
				if(val == ""){
					//进行提示
					//获取标题
					var title = $(this).find('.i_title').html();
					title = Trim(title);
					var notice_str = title + "不能为空!!";
					$(inputBox).focus(function(){
						$(".prompt").css("visibility","visible");
						// 没有输入信息的框修改为红色 并写入提示信息
						// $(this).css("border","3px solid red");
						// $(this).attr("placeholder","输入错误，请重新输入");
					});
					// 让为空的输入框获取焦点
					inputBox.focus();

					ret = false;

					return ret;
				}
			});

			return ret;
		},
	},
}