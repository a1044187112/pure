THISLOGINPAGE = {
	init : function(){
		this.appendHtml();
		// 登录按钮点击事件
		this.loginClick();
		//关闭按钮点击事件
		this.closeClick();
	},
	appendHtml : function(){
		var _html = "";
		_html +=  '<div class="body_bg"></div>'+
			'<div class="window">'+
			'<img class="window_bg" src="../../img/login-bg.jpg" />'+
			'<div><img  class="logo" src="../../img/hp.jpg" /></div>'+
			'<div class="close"><i class="fa fa-close"></i></div>'+
			'<div class="header">'+
				'<div class="com_intro"></div>'+
			'</div>'+
			'<div class="con">'+
				'<div class="hp">'+
//					'<img src="../../img/avatar.jpg" />'+
				'</div>'+
				'<div class="account"><from id="account">'+
					'<input id="account_ac"  type="text" name="account" placeholder="请输入账号" />'+
					'<input id="account_pw" type="password" name="pw" placeholder="请输入密码" />'+
				'<from></div>'+
			'</div>'+
			'<div class="footer window_footer">登录</div>';
		$("body").append(_html);
		// 获取页面高度
		var bodyH = $(window).height();
		// 获取弹窗高度
		var winH = $(".window").height();
		$(".window").css({marginTop:(bodyH-winH-50)/2+"px"});
	},
	loginClick : function(){
		$("body").delegate(".window_footer","click",function(){
			// 判断input是否为空
			 var ac_text = $("#account_ac").val();
			 var pw_text = $("#account_pw").val();
			 if(ac_text==""||pw_text==""){
			 	if(ac_text==""){
			 		$("#account_ac").addClass("account_ac");
			 	}else if(pw_text==''){
			 		$("#account_pw").addClass("account_pw");
			 	}
			 }else{
			 	// 提交数据
			 	var data = $("#account").serialize();
			 	$.post(url,data,function(){
//			 		$(".body_bg").remove();
//			 		$(".window").remove();
			 	});
			 }
		});
	},
	
	closeClick : function(){
		$("body").delegate(".window .close","click",function(){
			$(".body_bg").remove();
			$(".window").remove();
		});
	}
};
THISLOGINPAGE.init();
