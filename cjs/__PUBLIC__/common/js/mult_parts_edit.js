// JavaScript Document
$(function () {
			var mult_parts_editor = new Object()	//声明类对象,多重部分字段编辑器
			window["mult_parts_editor"] = mult_parts_editor;//把类赋值给window对象，作为window对象的属性
			//var editor_num = 0;
			//alert("load");
			
			//编辑器的内容
			//初始化函数,第一个参数是编辑部分的配置,第二个参数是提交部分的配置
			mult_parts_editor.Init = function (){
				//绑定值删除操作
				BindClickValueRemoveAction();
				//绑定所有的选择框值改变事件
				BindSelectChg();
				//绑定添加按钮
				BindClickSubPartAddBtn();
				//重置所有的显示值
				ResetSubmitBoxValue();
				
			}//init func
			
	//绑定子部分添加按钮点击事件
	function BindClickSubPartAddBtn(){
		$(".mult_parts_edit .add_sub_part_box .sub_part_add_btn").each(function(index, element) {
			//alert(index);
			//点击添加按钮
			$(this).click(function(e) {
				//主框对象
				var main_box = $(this).parent().parent().parent();
				//添加子模块对象
				var add_box = main_box.find('.add_sub_part_box');
				//获取选中的数据,最后一个选择框的中选中项
				var sel_val = add_box.find("select:last").val();
				//alert(sel_val);
				var sel_html = add_box.find("select:last").find("option:selected").text();
				//alert(sel_val);
				//判断是否有数据选中
				if(sel_val != null && sel_val != "")
				{
					//将添加的值显示到显示和编辑子模块
					var dis_box = main_box.find(".dis_sub_part_box ");
					//alert(value_box_obj.html());
					//添加内容项到内容显示区域
					var item_html = '\
					<span>'+sel_html+'<span class="badge"><span class="glyphicon glyphicon-remove" aria-hidden="true">\
					<input type="hidden" value="'+sel_val+'" />\
					</span></span></span>\
					';	
					
					dis_box.append(item_html);
					
					//重新绑定按钮操作
					BindClickValueRemoveAction();	
					
					//重置提交值
					ResetSubmitBoxValue(main_box);	
				}	
				else{
					alert("请选择数据项");
				}
									
			
			});//add_btn click        
		});//each
	
		
	}//func BindClickSubPartAddBtn
			
	//监听select change 函数
	function BindSelectChg()
	{
		/////级联select change 监听
		$(".mult_parts_edit .add_sub_part_box select").each(function(index, element) {
			//alert(index)
			$(this).change(function(e) {
				var item_index = index;
			//	alert($(this).attr("data-sub_level_data_url").length);
			//alert(typeof($(this).attr("data-sub_level_data_url")));
				
				//判断是否需要获取下一级别的数据
				if(typeof($(this).attr("data-sub_level_data_url"))!="undefined" )
				{
					
					//alert("ntet");
					var cur_id = $(this).val();
					//alert(cur_id);
					//判断是否选择了id
					if(cur_id != "")
					{
						//清空级联子级别
						var t_item_index = item_index+1;
						while(true)
						{
							var ctrl_obj =$(".mult_parts_edit .add_sub_part_box select:eq(" + t_item_index +")");
							//alert(t_item_index);
							
							//if(ctrl_obj.attr("data-sub_level_data_url").length > 0)
							if(typeof(ctrl_obj.attr("data-sub_level_data_url"))!="undefined")
							{
								//alert(ctrl_obj.html());
								ctrl_obj.html("");
							}
							else
							{
								//alert("break");
								ctrl_obj.html("");
								break;
							}
							t_item_index++;
						}
						//item_index = 1;
						//获取下一级别的数据
							var data_obj = {};
							data_obj.id = cur_id;
							data_obj.extra_data = parseInt(item_index)+1;	//附加数据记录子级别的select index
							
							url = $(this).attr("data-sub_level_data_url");
							//alert(url);//SimPost(url,data_obj);return;
							$.post(url,$.param(data_obj),function(Json){
								var next_item_index = Json.extra_data;
								var data = Json.data;
								//修改子级别的内容
								//清空
								var ctrl_obj =$(".mult_parts_edit .add_sub_part_box select:eq(" + next_item_index +")");
								//alert(ctrl_obj.html());
								ctrl_obj.html("");
								var op_html = "<option value=''>请选择数据</option>";
									ctrl_obj.append(op_html);
								$.each(data,function(key,value){
									//alert(key);
									//alert(value.name);
									op_html = '<option value="'+value.id+'"> ';
									//判断属性名,因为内容的标题使用title,而第一类别和第二类别为name
									//alert(value.name);
									//alert(typeof(value.name));
									if(typeof(value.name)!="undefined" )
									{
										op_html += value.name;
									}
									else
									{
										op_html += value.title;
									}
									
									op_html += '</option>';
									ctrl_obj.append(op_html);
								});//each	
								
							},"json");					
					}//if id
					
				}//if obj
				
				//alert(item_index);
			});//caascade select change
		});//cascade select each	
	}
																
	//删除值按钮绑定
	function BindClickValueRemoveAction()
	{
		//删除已指定的值
		$(".mult_parts_edit .dis_sub_part_box .glyphicon-remove").each(function(index, element) {
			$(this).click(function(e) {
				$(this).parent().parent().remove();
				
				//重置链接值
				ResetSubmitBoxValue();
			});
			
			$(this).mousemove(function(e) {
				$(this).parent().attr("style","  background-color: #FFF000;");
			});
			
			$(this).mouseout(function(e) {
				$(this).parent().attr("style","");
			});
		});
	}//BindClickValueRemoveAction
	
	//重置提交部分的值
	function ResetSubmitBoxValue()
	{
		$(".mult_parts_edit").each(function(index, element) {
			main_box_obj = $(this);
			//alert("ok");
			var value_str = "";
			//获取所有的已选择的值的id
			main_box_obj.find(".dis_sub_part_box .glyphicon-remove input").each(function(index, element) {
												//alert($(this).val());
				value_str = value_str + $(this).val() + ",";
			});
			//alert(value_str);
			
			//去掉最后一个逗号
			if(value_str.length > 0)
			{
				value_str = value_str.substr(0,value_str.length-1);
			}
			
			//设置值
			//alert();
			main_box_obj.find(".submit_sub_part_box .submit_item").val(value_str);            
        });

	}

			
			
});
