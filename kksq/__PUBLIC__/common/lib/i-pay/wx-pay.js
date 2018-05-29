// JavaScript Document
/*	
	微信支付类
	静态类
*/
var WxPay = {	//初始化对象
	redirectUrl : "",	//url
	payParamStr : "", 	//支付参数字符串
	btnSelr		: "", 	//按钮选择器
	//初始化数据,指定按钮选择器、跳转url、支付参数字符串
	initData:function(btn_selr,re_url, param_str){
		WxPay.redirectUrl = re_url;
		WxPay.payParamStr = param_str;

		//绑定按钮点击事件
		WxPay.btnSelr = btn_selr;

		$(WxPay.btnSelr).click(function(){
			//alert("bind");
			//var clearing_done_re_url = WxPay.redirectUrl;
						//支付成功,跳转到支付完成页面,否则跳转到
						//top.location.href = clearing_done_re_url;
						//alert(WxPay.payParamStr);
			//调用处理事件
			WxPay.callWxPay();
		});
	},//initCtrl

	callWxPay:function(){
		//alert(param_str);
		if (typeof WeixinJSBridge == "undefined"){
			alert("请在微信端打开!!!");
		    if( document.addEventListener ){
		        document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
		    }else if (document.attachEvent){
		        document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
		        document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
		    }
		}else{
		    jsApiCall(WxPay.payParamStr);
		}

		//私有函数
		//调用支付接口
		//调用微信JS api 支付
		function jsApiCall(param_str)
		{
			// {
   //         "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入     
   //         "timeStamp":" 1395712654",         //时间戳，自1970年以来的秒数     
   //         "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串     
   //         "package":"prepay_id=u802345jgfjsdfgsdg888",     
   //         "signType":"MD5",         //微信签名方式：     
   //         "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
   //     }
			//alert(param_str);
			var param = jQuery.parseJSON(param_str);
			//alert(param);
			//var param_str1={"appId":"wx69b9085dbfafbe09","nonceStr":"wi6vxgqa5uqf9xt4913jvv8ru292n5li","package":"prepay_id=wx2016070501144301f19f4cae0630399914","signType":"MD5","timeStamp":"1467652483","paySign":"62D2943066EDC5766E4BB6EAA5D400A9"};
			WeixinJSBridge.invoke(
				'getBrandWCPayRequest',
				param,
				function(res){
					//WeixinJSBridge.log(res.err_msg);
					//alert(res.err_code+","+res.err_desc+","+res.err_msg);
					//alert(res.err_msg);
					var clearing_done_re_url = WxPay.redirectUrl;
					//判断返回结果
					if(res.err_msg == "get_brand_wcpay_request:ok")
					{
						//支付成功,跳转到支付完成页面,否则跳转到
						top.location.href = clearing_done_re_url;
					}
					else
					{
						alert("用户取消支付或支付失败,请重新支付!!");
					}
				}
			);
		}		
	},//func call WxPay





}//WxPay class













