// JavaScript Document
/*按钮操作函数,对按钮操作进行封装
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
					
					notice_modal.Show('操作提示',notice_word,CtrlElAction.btnFunc.btnSubmit,param);
		    	});//submit_btn click   
		    });//submit btn each	
		},

		//绑定提交按钮,可以提交本身属性或者是提交指定表单
		bindSbmtBtnClick : function (btn_selector)
		{
			$(btn_selector).each(function(index, element) {
				$(this).click(function(e) {
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
						param.data = $(slcr).serialize();
					}

					//alert(param.data);return;

					CtrlElAction.btnFunc.btnSubmitEx(param);

		    	});//submit_btn click   
		    });//submit btn each	
		},

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
		},
		//按钮提交回调函数
		btnSubmit : function (param)
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
		},
		//按钮提交回调函数
		btnSubmitEx : function (param)
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
				
				//alert(ret_code);
				
				//判断返回标志位
				if(ret_code == 0)
				{
					//数据操作成功
					//设置回调
					top.location.href=ret_state;
				}
				else
				{
				}
			},"json");	
		},
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
					//alert(data_obj.catg_id);
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
	},

	//是否模拟post
	isSimPost:false,

}