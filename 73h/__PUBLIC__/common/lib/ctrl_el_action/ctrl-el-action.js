// JavaScript Document
/*按钮操作函数,对按钮操作进行封装
isSimPost 为true是使用模拟提交
*/
var CtrlElAction = {	//初始化对象
	//按钮操作函数集
	btnFunc:{
		//绑定按钮点击事件
		bindBtnClick : function (btn_selector)
		{
			$(btn_selector).each(function(index, element) {
				$(this).click(function(e) {
					//获取提示语
					var notice_word = $(this).attr("data-notice_word");
					param = {};
					param.url = $(this).attr("data-url");
					//获取附加数据
					param.data = CtrlElAction.getElData.getElExtraData(this);
					//param.data = GetElExtraData(this);
					//alert(param.data);
					
					notice_modal.Show('操作提示',notice_word,CtrlElAction.handleFunc.handelBtnSubmit,param);
		    	});//submit_btn click   
		    });//submit btn each	
		},//bindBtnClick

		
		/* 
		 * 	绑定提交按钮点击事件,可提交指定表单
			需要指定类别data-data_src_type form/self  若是form,则需要指定form选择器data-form_slcr
		 */
		bindBtnClickEx : function (btn_selector)
		{
			$(btn_selector).each(function(index, element) {
				$(this).click(function(e) {
					//获取提示语
					var notice_word = $(this).attr("data-notice_word");
					param = {};
					param.url = $(this).attr("data-url");
					//获取附加数据
					param.data = CtrlElAction.getElData.getElExtraDataEx(this);
					//param.data = GetElExtraData(this);
					//alert(param.data);
					
					notice_modal.Show('操作提示',notice_word,CtrlElAction.handleFunc.handelBtnSubmit,param);
		    	});//submit_btn click   
		    });//submit btn each	
		},//bindBtnClick



		//详情下拉框按钮链接,点击按钮时改变其显示名称
		detailBoxLinkBtnDis:function ()
		{
			$(".i_show_detail_box_link_btn").each(function(index, el) {
				$(this).click(function(event) {
					/* Act on the event */
					//获取显示标记
					var show_sym = $(this).attr("data-show_sym_is_default");
					//alert(show_sym);
					var dis_name = "";
					if (show_sym == 0) {
						show_sym = 1;

						//显示反向名称
						dis_name = $(this).attr("data-anti_dis_name");
					}
					else
					{
						show_sym = 0;
						//显示反向名称
						dis_name = $(this).attr("data-dis_name");
					}

					//设置按钮名称
					$(this).html(dis_name);

					//设置显示标记
					$(this).attr("data-show_sym_is_default",show_sym)
				});
			});
		},//detailBoxLinkBtnDis
	},


	//下拉选择框操作集
	selCtrlFunc : {
		//内容选择框change绑定,进行跳转操作
		contenSelChangeBind : function ()
		{
			//选择框值改变按钮
			$(".content_select ").each(function(index, element) {
	            $(this).change(function(){
					//模拟提交,使用get方式
					//获取提交的字段名称
					var field = $(this).attr("data-fields");
					var data_obj = {};
					data_obj[field] = $(this).val(); ;

	            	var this_obj = this;
					if(typeof($(this_obj).attr("data-other_fields"))!="undefined" )
					{
						var fields_str = $(this_obj).attr("data-other_fields");
						//alert(fields_str);
						var field_arr = fields_str.split(",");
						for(var i in field_arr)
						{
							//alert(f_str);
							var f_str = field_arr[i];
							//alert(f_str);
							var attr_str = "data-"+	f_str;
							data_obj[f_str] = $(this_obj).attr(attr_str);
							//alert(data_obj[f_str]);
						}
					}
					//alert(field);
					url = $(this).attr("data-url");
					SimGet(url,data_obj);
				});//change
	        });//each
		},//ContenSelChangeBind
	},

	//数据获取
	getElData : {
		//获取指定元素中属性的数据,返回url格式的字符串
		getElExtraData : function(this_obj)
		{
			//获取附加数据,使用’&‘分割对象'='分割字段,a=b&c=d;
			var extra_data = "";
			if(typeof($(this_obj).attr("data-fields"))!="undefined" )
			{
				var fields_str = $(this_obj).attr("data-fields");
				//alert(fields_str);
				var field_arr = fields_str.split(",");
				for(var i in field_arr)
				{
					//alert(f_str);
					var f_str = field_arr[i];
					//alert(f_str);
					var attr_str = "data-"+	f_str;
					extra_data = extra_data + f_str + "=" + $(this_obj).attr(attr_str) + "&";
				}
				
				//删除最后的分隔符
				extra_data = extra_data.substr(0,extra_data.length-1);
			}
			return extra_data;
		},

		//获取数据操作目标指定读取的方式是本身还是指定表单
		getElExtraDataEx : function(this_obj){
			//获取数据提交来源 self 还是form
			var data_src_type = $(this_obj).attr("data-data_src_type");
			var extra_data = "";
			//获取数据
			if(data_src_type == 'form')
			{
				//获取表单的选择器
				var slcr = $(this_obj).attr("data-form_slcr");
				extra_data = $(slcr).serialize();
			}
			else
			{
				//默认情况获取的是自身的数据
				//获取自身数据
				extra_data = CtrlElAction.getElData.getElExtraData(this_obj);
			}	
			return extra_data;	
		},//getElExtraDataEx
	},

	//回调处理函数集
	handleFunc:{
		//按钮提交回调函数
		handelBtnSubmit : function (param)
		{
			var data_obj = {};
			//data_obj.id = param.id;
			data_obj.data = param.data;
			//alert(data_obj.extra_data);
			url = param.url;
			if(CtrlElAction.isSimPost)
			{
				SimPost(url,data_obj);return;
			}
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
		},//btnSubmit

	},
	// 失去焦点的样式
	formBlur : {
		inputBlur : function(){
			$("form .i_form_ctrl").each(function(index, el) {
				// 获取控件
				var inputBox = $(this).find('[name]');
				$(inputBox).blur(function(){
				    $(this).css("border","1px solid #999");
				});
			});

		},
	},

	//表单检测
	formChk	: {
		//表单提交检测,检测表单控件的值是否为空,如果为空,则进行提示
		//控件项-i_form_ctrl，标题-i_title  控件本身-i_ctrl
		formSubmitChk : function(form_selr){
			var ret = true;
			//遍历指定的选择器
			$(form_selr + " .i_form_ctrl").each(function(index, el) {
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
						// 没有输入信息的框修改为红色 并写入提示信息
						$(this).css("border","1px solid red");
					});
					// 让为空的输入框获取焦点
					inputBox.focus();

					ret = false;

					return false;
				}
			});

			return ret;
		},
	},

	//是否模拟post
	isSimPost:false,
};


///前端控件元素操作,继承于CtrlElAction类
var HomeCtrlElAction = {
	OncallBackSuccess:"",
	OncallBackError:"",
	// 需要点击事件  
	init : function(btn_selector,parameter){
		//函数赋值
		thisObjInit = function(parameter){
			if(parameter != undefined){
				HomeCtrlElAction.OncallBackSuccess = parameter[0].func1;
				HomeCtrlElAction.OncallBackError	= parameter[1].func2;
			}
		},
		//绑定
		thisBindEventClick = function(){
			HomeCtrlElAction.btnFunc.bindSbmtBtnClick(btn_selector);
		},
		// 调用
		thisObjInit(parameter);
		thisBindEventClick();
     },
     // 不需要点击事件
    initStatic : function(btn_selector,parameter){
		//函数赋值
		thisObjInit = function(parameter){
			if(parameter != undefined){
				HomeCtrlElAction.OncallBackSuccess = parameter[0].func1;
				HomeCtrlElAction.OncallBackError	= parameter[1].func2;

			}
		},
		//绑定
		thisBindEventClick = function(){
			HomeCtrlElAction.btnFunc.btnDataSubmit(btn_selector);
		},
		// 调用
		thisObjInit(parameter);
		thisBindEventClick();
     },
	//按钮操作函数集
	btnFunc : {
		//绑定提交按钮,可以提交本身属性或者是提交指定表单
		bindSbmtBtnClick : function (btn_selector){
			$(btn_selector).each(function(index, element) {
				$(this).click(function(e) {
					var submit_if = true;
					//获取数据提交来源 self 还是form
					var data_src_type = $(this).attr("data-data_src_type");
					//参数
					var param = {};
					param.url = $(this).attr("data-url");
					//获取数据
					if(data_src_type == 'self')
					{
						//获取自身数据
						param.data = CtrlElAction.getElData.getElExtraData(this);
					}
					else
					{
						//获取表单的选择器
						var slcr = $(this).attr("data-form_slcr");

						//进行表单检查
						if(!CtrlElAction.formChk.formSubmitChk(slcr)){
							//检测失败
							submit_if = false;
						}
						else
						{
							//获取数据
							param.data = $(slcr).serialize();
						} 

					}

					//alert(submit_if);return;
					if(submit_if){
						HomeCtrlElAction.btnFunc.btnSubmitEx(param);
					}
					

		    	});//submit_btn click   
		    });//submit btn each	
		},//bindSbmtBtnClick

		//按钮提交回调函数
		btnSubmitEx : function (param){
			var data_obj = {};
			//data_obj.id = param.id;
			data_obj.data = param.data;
			//alert(data_obj.extra_data);
			url = param.url;
			// alert(CtrlElAction.isSimPost);
			if(CtrlElAction.isSimPost)  // 是否是模拟提交
			{
				SimPost(url,data_obj);return;
							 
			}
			// alert(url);
			$.post(url,$.param(data_obj),function(Json){
				//获取数据
				ret_code = Json.ret_code;
				ret_state = DataTransDecode(Json.ret_state);
				
				// alert(ret_code);
				
				//判断返回标志位
				if(ret_code == 0)
				{
					var ret_state = HomeCtrlElAction.trim(ret_state);
					//数据操作成功
					//设置回调
					if(ret_state==''){ // 当ret_state  为空时   执行传递的方法 
						if(typeof(HomeCtrlElAction.OncallBackSuccess) == "function"){ // 判断传递的参数是否为方法
							HomeCtrlElAction.OncallBackSuccess();
						}
					}else{// 当ret_state 不为空时  跳转页面
						top.location.href=ret_state;
					}
				}
				else
				{
					if(typeof(HomeCtrlElAction.OncallBackError) == "function"){
						// alert(HomeCtrlElAction.callBackError);
						HomeCtrlElAction.OncallBackError(ret_state);
					}
				}
			},"json");

		},//btnSubmitEx

		/*
		 * 数据提交，指定元素的选择器，不需要数据绑定，相应的数据
		 */
		 btnDataSubmit : function(btn_selr){
		 	var this_obj = $(btn_selr)[0];
			var submit_if = true;
			//获取数据提交来源 self 还是form
			var data_src_type = $(this_obj).attr("data-data_src_type");
			//参数
			var param = {};
			param.url = $(this_obj).attr("data-url");
			//获取数据
			if(data_src_type == 'self')
			{
				//获取自身数据
				param.data = CtrlElAction.getElData.getElExtraData(this_obj);
			}
			else
			{
				//获取表单的选择器
				var slcr = $(this_obj).attr("data-form_slcr");

				//进行表单检查
				if(!CtrlElAction.formChk.formSubmitChk(slcr)){
					//检测失败
					submit_if = false;
				}
				else
				{
					//获取数据
					param.data = $(slcr).serialize();							
				}

			}

			//alert(submit_if);return;
			if(submit_if){
				HomeCtrlElAction.btnFunc.btnSubmitEx(param);
			}
		 }
	},

	trim :function(str){ //删除左右两端的空格
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
　　 },

}
