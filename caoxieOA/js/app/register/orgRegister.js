var $_form = $('#registerForm'),
register = {
	
	init:function(){
		this.initDom();
		this.validator();
		this.addEvent();
	},
	
	initDom:function(){
		
	},
	
	validator:function(){
		$_form.validator({
			focusCleanup: true,
		    stopOnError:false,
		    msgClass:'n-right',
		    rules:{
		    	verfCode:[/^[A-Za-z0-9]{4}$/, '长度为4位'],
	            validateCode:function(element, params){
	                return /^[A-Za-z0-9]{6}$/.test( $.trim(element.value) ) || '长度为6位';
	            },
	            realname:[/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/, '请填写真实姓名'],
	            pwdVerify:function(element, params){
	            	var val = $(element).val();
	            	if(val == $('#password').val()){
	            		return true;
	            	}else{
	            		return "你输入的两次密码不一致";
	            	}
	            },
	            phone:[/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/, '请输入正确的手机号码'],
	            checkUserName:function(element, params){
	            	var val = $(element).val();
	            	var b = true;
	            	if ($.trim(val).length > 0) {
	            		$.ajax({
	                        type: "post",
	                        url: 'user/checkUserName',
	                        cache: false,
	                        async: false,
	                        data: {"userName": val},
	                        dataType: "json",
	                        success: function(r){
	                            if (r.code == 200){
	                            	b = false;
								}
	                        }
	                   });
					}
                   return b;
	            }
		    },
		    fields:{
		    	orgName:{
		    		timely: 1,
		    		rule: "required;checkUserName;",
		    		tip: "请输入企业名称",
		    		ok: "",
		    		msg:{
		                required: "企业名称不能为空",
		                checkUserName : "该企业名称已注册",
		            }
		    	},
		    	phone:{
		    		timely: 1,
		    		rule: "required;mobile;phone;",
		    		tip: "请正确填写11位手机号",
		    		ok: "",
		    		msg:{
		    			required: "手机号码不能为空",
		    			mobile: "手机号码不正确"
		    		}
		    	},
		    	code:{
		    		timely: 1,
		    		rule: "required;verfCode;",
		    		tip: "请输入4位图形识别码",
		    		ok: "",
		            msg: {
		            	required: "验证码不能为空"
		            }
		    	},
		    	"password": {
		        	timely: 1,
		            rule: "required;password;",
		            tip: "6~20英文字母或数字",
		            ok: "",
		            msg: {
		                required: "登录密码不能为空!"
		            }
	           },
	           "verify":{
	           		timely: 1,
		            rule: "required;password;pwdVerify;",
		            tip: "6~20英文字母或数字",
		            ok: "",
		            msg: {
		                required: "确认密码不能为空!",
		            }
	           }
		    },
		    valid:function(form){
		    	
		    },
		    invalid:function(form){
		    	
		    }
		});
	},
	getParams:function(){
		var p = {
			name : $.trim($('#orgName').val()),
			mobile : $.trim($("#phone").val()),
			verify : $.trim($("#verify").val()),
			code : $.trim($("#code").val()),
			type : 1,//企业1个人2
		};
		return p;
	},
	
	addEvent:function(){
		$('#btn-register').bind('click',function(e){
			$_form.isValid(function(v){
				if(v){
					var params = register.getParams();
					if(params){
						$.ajax({
							url : "user/register",
							type : "POST",
							data : params,
							success : function(r){
								if(r.code == '200'){
									alert(r.msg);
									window.location = "login";//登录页面
								}else {
									alert(r.msg);
								}
							},
							error : function(){
								alert('连接服务器失败');
							}
						});
					}else{
						alert('嗯,请检查必填项!');
					}
				}else{
					alert('请检查必填项');
				}
			});
		});
		//回车键
		$(document).keydown(function(e){
			if(e.keyCode == 13){
				if(t.submit()){
					//window.location.href = "index.html";
				}
			}
		});
	}
};
register.init();