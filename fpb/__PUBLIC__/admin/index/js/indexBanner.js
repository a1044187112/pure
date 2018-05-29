// JavaScript Document
//绑定链接编辑按钮元素
function BindAndLinkEditBtn(i_options)
{
	//遍历编辑型按钮
	$(".data_edit_btn").each(function(index, el) {
		//获取元素对应的编辑框的选择器
		var selr = $(this).attr("data-editor_selector");
		var link_btn_selr = $(this).attr("data-self_selr");
		var data_action_type = $(this).attr("data-action_type");

		//追加选择项
		i_options[0].selector = selr;
		i_options[0].link_btn_selr = link_btn_selr;
		i_options[0].data_action_type = data_action_type;
		var ctrl_obj = DataEditor.initCtrl(i_options);
		//alert(ctrl_obj.getBoxUniqueSelr());
		//$(this).attr("data-target",ctrl_obj.getBoxUniqueSelr());
	});
}


//绑定选择框
function BindBtnClick1(btn_selector, call_func)
{
	
	$(btn_selector).each(function(index, element) {
     	$(this).click(function(e) {
			call_func(this);				
        });//submit_btn click   
    });//submit btn each	
}

//选择按钮操作
function SelBtnAction(this_obj)
{				//将元素添加到已选择框中
				var el_html = '<div class="thumbnail img_item">' + $(this_obj).parent().parent().html() + '</div>';
				$(".been_sel_con .img_box").append(el_html);
				
				//更新提交数据
				UpdateSubmitData();
				
				
				//绑定取消按钮
				BindBtnClick1(".cancel_btn",CancelBtnAction);
}

//取消按钮事件
function CancelBtnAction(this_obj)
{
	//删除当前元素
	$(this_obj).parent().parent().remove();
	
	//更新提交数据
	UpdateSubmitData();
	
}

//更新提交数据,就是更新已选择商品的连接字符串
function UpdateSubmitData()
{
	//alert(field_name);
	//获取值
	var value_str = "";
	$(".been_sel_con .img_box .id_val").each(function(index, element) {
		value_str = value_str + $(this).html() + ",";
        
    });
	if(value_str != "")
		value_str = value_str.substr(0,value_str.length-1);
	
	//alert(value_str);
	//设置值
	//$(".been_sel_con form [name=index_banner]").val(value_str);	
	$(".been_sel_con form button").attr("data-"+field_name,value_str);	
}


//绑定下拉选择框的change事件
function BindSelInputChange(get_url)
{
	//alert(get_url);
	$(".content_select").change(function(e) {
        //获取数据
		var catg_id = $(this).val();
		
		//更新翻页id
		$(".page_info_box .page_info a").each(function(index, element) {
			$(this).attr("data-catg_id", catg_id);
		});
		//alert(catg_id);return;
		//获取数据
		var data_obj = {};
		data_obj.catg_id = catg_id;
		var url = get_url;
		//SimPost(url,data_obj);return;
		$.post(url,$.param(data_obj),function(Json){
			//alert(Json);return;
			HandleRetData(Json);

		},"json");			
    });//change
}

//返回数据处理
function HandleRetData(Json)
{
	//alert("ret");
				//清空显示框
			var sel_container = $(".sel_container .row");
			sel_container.html("");
			
			if(Json['data'].length > 0)
			{
				//添加新元素
				$.each(Json['data'],function(index){
					//alert(this['id']);
					var el_html = '                     		<div class="col-md-2">\
									<div class="thumbnail">\
										<div class="id_val" style="display:none">'+this['id']+'</div>\
											<img src="'+this['default_pic']+'" />\
										<div class="caption">'+this['name']+'\
										</div>\
										<p>\
											<button type="button" class="btn btn-xs sel_btn">选择</button>\
											<button type="button" class="btn btn-xs cancel_btn">取消</button>\
										</p>\
									</div>\
								</div>';
					sel_container.append(el_html);
				});//each				
			}	
			else
			{
				sel_container.html("没有上架商品!!");
			}	
}


//绑定翻页按钮
function BindPageBtn()
{
	$(".page_info_box .page_info a").each(function(index, element) {
        $(this).click(function(e) {
            //拦截链接跳转
			e.preventDefault();
			//alert("ok");

			//获取本地数据进行提交
			var data_obj = GetElExtraDataEx(this);
			//alert(data.catg_id);
			var url = $(this).attr("data-url");
			//SimPost(url,data_obj);return;
			$.post(url,$.param(data_obj),function(Json){
				//alert(Json);return;
				HandleRetData(Json);
	
			},"json");
        });
    });
}

























