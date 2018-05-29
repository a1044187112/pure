// JavaScript Document
/*按钮操作
  对指定的按钮进行批量操作
  绑定之后,点击事件会将按钮中的数据提交当响应的url中,默认情况下是有id的
  在btn中添加data-fields属性,表示需要设置的字段的值,然后在元素内建立字段相应的属性
*/
//绑定按钮点击事件
function BindBtnClick(btn_selector)
{
	$(btn_selector).each(function(index, element) {
		$(this).click(function(e) {
			//获取提示语
			var notice_word = $(this).attr("data-notice_word");
			param = {};
			param.url = $(this).attr("data-url");
			//获取附加数据
			param.data = GetElExtraData(this);
			
			notice_modal.Show('操作提示',notice_word,BtnSubmit,param);
    	});//submit_btn click   
    });//submit btn each	
}

//按钮提交回调函数
function BtnSubmit(param)
{
	var data_obj = {};
	//data_obj.id = param.id;
	data_obj.data = param.data;
	//alert(data_obj.extra_data);
	url = param.url;
	//alert(url);SimPost(url,data_obj);return;
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
}

//显示详细按钮设置
function ShowDetailActionSet()
{
			
		//为所有行添加按钮格
		$(".data_table .t_row").each(function(index, element) {
			toggle_id = $(this).find('.show_detail_box').attr('id');
			//alert(toggle_id);
            td_html ='<button type="button" class="btn btn-primary show_detail_btn" style=" font-size:12px;padding:5px;" data-toggle="collapse" href="#'+toggle_id+'"\
					aria-expanded="false" data-action="show">\
								 查看详细\
								 </button>\
                      	';
			$(this).find("td:last").append(td_html);
        });
		
		//所有编辑按钮点击事件
		$(".data_table .show_detail_btn").each(function(index, element) {
            //编辑按钮点击事件
			$(this).click(function(e) {
				//获取点击是进行的操作
				action = $(this).attr('data-action');
				//alert(action);
				if(action == 'show')
				{
					//进行编辑
					//按钮显示名称
					$(this).attr('data-action','cancel');
					$(this).html("关闭查看详细");

				}
				else
				{
					//取消编辑
					$(this).attr('data-action','show');
					$(this).html("查看详细");
					
					
					//编辑表和显示表对调显示属性
					//$(".modify_table").attr("style",'display:none');
					//$(".dis_table").attr("style",'');
				}
			});	//edit click
        });
	}


//绑定显示详细按钮
function BindShowDetailBtn()
{		
		//所有编辑按钮点击事件
		$(".data_table .show_detail_btn").each(function(index, element) {
			//关联id

            //编辑按钮点击事件
			$(this).click(function(e) {
				//获取点击是进行的操作
				var action = $(this).attr('data-action');
				//alert(action);
				if(action == 'show')
				{
					//进行编辑
					//按钮显示名称
					$(this).attr('data-action','cancel');
					$(this).html("关闭查看详细");

				}
				else
				{
					//取消编辑
					$(this).attr('data-action','show');
					$(this).html("查看详细");
					
				}
			});	//edit click
        });
	}

	
//获取指定元素中属性的数据,返回url格式的字符串
function GetElExtraData(this_obj)
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
function GetElExtraDataEx(this_obj)
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
	
	//内容选择框change绑定,进行跳转操作
	function ContenSelChangeBind()
	{
		//选择框值改变按钮
		$(".content_select ").each(function(index, element) {
            $(this).change(function(){
				//模拟提交,使用get方式
				//获取提交的字段名称
				var field = $(this).attr("data-fields");
				var data_obj = {};
				data_obj[field] = $(this).val(); ;
				//alert(data_obj.catg_id);
				url = $(this).attr("data-url");
				SimGet(url,data_obj);
			});//change
        });//each
	}//ContenSelChangeBind

	
//绑定提交按钮,提交整个表单
function BindSubmitBtnClick()
{
	$(".dis_table .submit_btn").each(function(index, element) {
		//绑定点击事件
     	$(this).click(function(e) {
			//数据获取进行提交
			data_str = $(this).parent().serialize();
			data_obj = {};
			data_obj.data = data_str;
			url = $(this).attr("data-url");
			//SimPost(url,data_obj);return;
			$.post(url,$.param(data_obj),function(Json){
				//alert(Json.ret_code);
				//获取数据
				ret_code = Json.ret_code;
				ret_state = DataTransDecode(Json.ret_state);
				
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
     	});//submit_btn click   
    });//submit btn each	
}
	
	
	//添加编辑选项,并将编辑按钮跟行编辑的编辑框链接
	function AddEditSet()
	{
		//所有的下拉框添加类
		$(".dis_table .collapse").each(function(index, element) {
            $(this).addClass("edit_box");
        });
		//alert("ok");
			
		//为所有行添加按钮格
		$(".dis_table tr").each(function(index, element) {
			toggle_id = $(this).find('.edit_box').attr('id');
			//alert(toggle_id);
            td_html ='<a class="btn btn-primary edit_btn" role="button" data-toggle="collapse" href="#'+toggle_id+'"\
					aria-expanded="false" data-action="edit">\
								 编辑\
								 </a>';
			$(this).find("td:last").append(td_html);
        });
		
		//所有编辑按钮点击事件
		$(".dis_table .edit_btn").each(function(index, element) {
            //编辑按钮点击事件
			$(this).click(function(e) {
				//获取点击是进行的操作
				action = $(this).attr('data-action');
				//alert(action);
				if(action == 'edit')
				{
					//进行编辑
					//按钮显示名称
					$(this).attr('data-action','cancel');
					$(this).html("取消");
					
					//显示编辑表,隐藏显示表
					//$(".modify_table").attr("style",'');
					//$(".dis_table").attr("style",'display:none');
				}
				else
				{
					//取消编辑
					$(this).attr('data-action','edit');
					$(this).html("编辑");
					
					
					//编辑表和显示表对调显示属性
					//$(".modify_table").attr("style",'display:none');
					//$(".dis_table").attr("style",'');
				}
			});	//edit click
        });
	}
	
	
	//详情下拉框按钮链接,点击按钮时改变其显示名称
	function DetailBoxLinkBtnDis()
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
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	