// 确认显示类，指定
$(function () {
	var ConfirmNotice = function(lib_base_url){
		var action_obj = {};

		//获取当前js文件的路径
		var file_name = "confirm-notice.js";
		var ab_file_path = "";
		//找到绝对路径
		var js_arr=document.scripts;
		for (var i = js_arr.length - 1; i >= 0; i--) {
			//alert(js[i].src);
			ab_file_path = js_arr[i].src;
			//alert(ab_file_path);
			if(ab_file_path.indexOf(file_name) >= 0)
			{
				break;
			}
			else
			{
				ab_file_path = "";
			}
		}
		//alert(ab_file_path);
		//获取文件绝对路径
		var ab_file_path = ab_file_path.substr(0, ab_file_path.indexOf(file_name));
		//alert(ab_file_path);
		///系统选项
		action_obj.sys_options = {};
		action_obj.bind_selector = "";	//绑定控件的选择器
		action_obj.dis_selector = ".confirm_notice_area";
		action_obj.el_html = '	\
			<div class="confirm_notice_area">\
				<div class="ss_shade_area ss_area_hide" ></div>\
				<div class="ss_popup_dis_area ss_area_hide">\
					<div class="ss_notice_word">\
							确定操作\
					</div>\
					<div class="ss_btn_con">\
						<div class="ss_btn_item ss_ok_btn">\
							<img src="'+ab_file_path+'img/31.png">\
						</div>\
						<div class="ss_btn_item ss_cancel_btn">\
							<img src="'+ab_file_path+'img/30.png">\
						</div>\
					</div>\
				</div>\
			</div>\
			';
		//对外调用接口进行显示
		action_obj.Show = function(target_selector)
		{
			//初始化数据
			action_obj.bind_selector = target_selector;

			//填充显示数据
			var notice_word = $(action_obj.bind_selector).attr("data-notice_word");
			$(action_obj.dis_selector + " .ss_notice_word").html(notice_word);
			//alert(notice_word);
			//显示弹出层
			AreaVisibility(true);


		}

		//初始化函数
		function Init()
		{
			//将显示代码添加到尾部
			$("body").append(action_obj.el_html);

			//点击确定按钮
			$(action_obj.dis_selector + " .ss_popup_dis_area .ss_ok_btn").click(function(event) {
				/* Act on the event */
				AreaVisibility(false);
				//alert("ss_ok_btn");
				//数据提交
				ClickOkBtn();
			});

			//绑定点击取消按钮
			$(action_obj.dis_selector + " .ss_popup_dis_area .ss_cancel_btn").click(function(event) {
				/* Act on the event */
				//隐藏
				AreaVisibility(false);
			});

			//点击遮罩层
			$(action_obj.dis_selector + " .ss_shade_area").click(function(event) {
				/* Act on the event */
				//隐藏
				AreaVisibility(false);
				//alert("ss_shade_area");
			});

		}// func Init

		//显示或隐藏隐藏弹出层,true为显示,false隐藏
		function AreaVisibility(sym)
		{
			if(sym)
			{
				//显示遮罩层
				$(action_obj.dis_selector + " .ss_shade_area").removeClass('ss_area_hide');
				//显示弹出层
				$(action_obj.dis_selector + " .ss_popup_dis_area").removeClass('ss_area_hide');
			}
			else
			{
				//隐藏遮罩层
				$(action_obj.dis_selector + " .ss_shade_area").addClass('ss_area_hide');
				$(action_obj.dis_selector + " .ss_popup_dis_area").addClass('ss_area_hide');
			}

		}

		//点击确定按钮提交数据操作
		function ClickOkBtn()
		{
			//alert(action_obj.bind_selector);
			adSubData(action_obj.bind_selector,SubDataCall);
		}

		//提交数据后的回调函数
		function SubDataCall(ret_obj,extra_data)
		{
			//alert("ok");
			var ret_code = ret_obj.ret_code;
			var ret_state = ret_obj.ret_state;
			//alert(ret_state);return;

			//判断返回标志位
			if(ret_code == 0)
			{
				//订单生成成功,跳转到结算页面
				var url = ret_state;

				top.location.href = url;
			}
			else
			{
				alert(ret_state);
			}
			return ;
		}

		Init();
		return action_obj;


	}

	confirm_notice_dlg = ConfirmNotice();
})
