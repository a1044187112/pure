//获取指定元素中属性的数据,返回url格式的字符串
function adGetElExtraData(this_obj)
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
}

	
//获取指定元素中属性的数据,返回data-fileds中指定的键的对象
function adGetElExtraDataEx(this_obj)
{
	//获取data-fields中的数据,然后获取对应data-*的值,并附加的对象中,用对应的字段作为键值
	var data_obj = {};
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
			//extra_data = extra_data + f_str + "=" + $(this_obj).attr(attr_str) + "&";
			data_obj[f_str] = $(this_obj).attr(attr_str);
		}
	}
	return data_obj;
}

//获取指定元素中指定属性的数据和包含的输入框的数据,返回url格式
function adGetElExtraDataEx1(this_obj)
{
	//获取附加数据,使用’&‘分割对象'='分割字段,a=b&c=d;
	var extra_data = "";
	//本身静态属性
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
		
	}

	//包含的输入控件的属性
	if(typeof($(this_obj).attr("data-inputs"))!="undefined" )
	{
		var inputs_str = $(this_obj).attr("data-inputs");
		//alert(fields_str);
		var input_arr = inputs_str.split(",");
		for(var i in input_arr)
		{
			//alert(f_str);
			//css类名
			var post_name = $("#"+input_arr[i]).attr("data-post_name");
			var val = $("#"+input_arr[i]).val();
			extra_data = extra_data + post_name + "=" + val + "&";
		}
	}

	if(extra_data.length > 0)
	{
		//删除最后的分隔符
		extra_data = extra_data.substr(0,extra_data.length-1);		
	}



	return extra_data;
}


//数据提交,指定被点击的对象的选择器和回调函数
//数据在提交之前需要进行检验,检验通过后才会提交数据
function adClickSubData(el_selector,call_func,chk_func)
{
	$(el_selector).click(function(event) {
		/* Act on the event */
			//alert("ok");
			//判断是否传递了检验函数,如果有则进行检验
			//alert(typeof(chk_func));
			//alert(chk_func());
			if((typeof(chk_func) == "function") && chk_func())
			{
				//获取数据提交到后台
				var data_str = adGetElExtraData(this);
				var	data_obj = {};
				data_obj.data = data_str;
				var	url = $(this).attr("data-url");
				//alert(url);
				//SimPost(url,data_obj);return;
				$.post(url,$.param(data_obj),function(Json){
					//alert(Json);
					//回调函数
					call_func(Json);
				},"json");					
			}
			
	});
}

//数据提交,指定被点击的对象的选择器和回调函数
//数据在提交之前需要进行检验,检验通过后才会提交数据
//指定附加参数,附加参数会传递到指定的回调函数中
function adClickSubDataEx(el_selector,ex_data,call_func,chk_func)
{
	$(el_selector).click(function(event) {

		/* Act on the event */
			if((typeof(chk_func) == "function") && chk_func())
			{
				//获取数据提交到后台
				var data_str = adGetElExtraData(this);
				var	data_obj = {};
				data_obj.data = data_str;
				var	url = $(this).attr("data-url");
				//alert(url);return;
				//SimPost(url,data_obj);return;
				$.post(url,$.param(data_obj),function(Json){
					//alert(Json);
					//回调函数
					call_func(Json,ex_data);
				},"json");					
			}
			
	});
}

//进行数据提交,但不进行绑定操作
function adSubData(el_selector,call_func,extra_data,chk_func)
{
	//alert(typeof(chk_func));
	//如果指定检测函数,则调用检测函数
	if((typeof(chk_func) == "function") && !chk_func())
	{
		//alert("chk_func");
		return ;
	}
	
	//获取数据提交到后台
	var data_str = adGetElExtraData($(el_selector)[0]);
	var	data_obj = {};
	data_obj.data = data_str;
	var	url = $(el_selector).attr("data-url");
	//alert(data_str);return;
	//SimPost(url,data_obj);return;
	$.post(url,$.param(data_obj),function(Json){
		//alert(call_func);
		//回调函数
		call_func(Json,extra_data);
	},"json");					
		
}

//进行数据提交,不进行绑定操作,获取数据时,指定元素中包含输入的数据
function adSubDataEx(el_selector,call_func,extra_data,chk_func)
{

	//alert(typeof(chk_func));
	//如果指定检测函数,则调用检测函数
	if((typeof(chk_func) == "function") && !chk_func(el_selector))
	{
		//alert("chk_func");
		return ;
	}
	
	//获取数据提交到后台
	var data_str = adGetElExtraDataEx1($(el_selector)[0]);
	var	data_obj = {};
	data_obj.data = data_str;
	var	url = $(el_selector).attr("data-url");
	//alert(data_str);return;
	//SimPost(url,data_obj);return;
	$.post(url,$.param(data_obj),function(Json){
		//alert(call_func);
		//回调函数
		call_func(Json,extra_data);
	},"json");					
		
}
