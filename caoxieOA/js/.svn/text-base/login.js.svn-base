
login = {
	
	init:function(){
		this.addEvent();
	},
	
	submit:function(){
		var ipt_name = $("#userid");
	    var ipt_pwd = $("#userpwd");
	    if(ipt_name.val().replace(/[ ]/g,"") == ""){
			ipt_name.focus();
			$('.error').html('请输登录账号').show();
			return false;
		}else if(ipt_pwd.val().replace(/[ ]/g,"") == ""){
			ipt_pwd.focus();
			$('.error').html('请输入登录密码').show();
			return false;
		}
		$('.error').html('').hide();
		return true;
	},
	login:function(){
		if(login.submit()){
			//$(this).button('loading');
			//$(this).button('reset');
			$(this).button('loading');
			window.location.href = "index.html";
		}
	},
	addEvent:function(){
		var t = this;
		$('#but_login').on('click',function(e){
			login.login();
		});
		//回车键
		$(document).keydown(function(e){
			if(e.keyCode == 13){
				login.login();
			}
		});
		$('#enterpriseReg').click(function(e){
			window.location.href = "page/register/orgRegister.html";
		});
	}
};
login.init();