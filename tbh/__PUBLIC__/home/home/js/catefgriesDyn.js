// var submit = {
// 	submitData : function(data_obj){
// 		var data_obj = JSON.stringify(data_obj);
// 		// alert(data_obj);
// 		$.post(submit.url,$.param(data_obj),function(data){
// 			// alert($.param(data_obj));
// 			if(data.ret_code==0){
// 				dynGenCode.resJson(data.ret_state);
// 			}
// 		},"json");
// 	}
// }
var dynGenCode = {
	// 解析json
	resJson : function(json){
		// alert(json);
		dynGenCode.updataHtml(json);  //追加代码
	},
	// 分页加载商品信息 请求成功的执行方法
	pageResJson : function(json){
		dynGenCode.appendHtml(json);  //追加代码
	},
	// 生成代码
	genCode : function(json){
		// alert(json[1]);
		var _html = "";
		var j=0;
		$.each(json,function(i,item){
			// alert(i);
			// alert(json.length);
			// $.each(item,function(i,item){
							
				if(json.length%2==0){
					if(j%2==1){
						_html+="<div class='ui-grid-d container_com'>\
						<div class='ui-block-a container_com_space'></div>\
						<div class='ui-block-b container_com_item'>\
							<div class='container_com_item_btn'\
								data-url="+dynGenCode.url+"\
								data-data_src_type='self'\
			                    data-fields='id'\
			                    data-id="+json[j-1].id+"\
							 >\
							<img src="+json[j-1].img_url+">\
							<div class='container_com_item_price'>"+json[j-1].text+"</div>\
							<div class='container_com_item_price'>￥"+json[j-1].price+"<span>"+json[j-1].buy_num+"人付款</span></div></div>\
						</div>\
						<div class='ui-block-c container_com_space'></div>\
						<div class='ui-block-d container_com_item'>\
							<div class='container_com_item_btn'\
								data-url="+dynGenCode.url+"\
								data-data_src_type='self'\
			                    data-fields='id'\
			                    data-id="+item.id+"\
							 >\
							<img src="+item.img_url+">\
							<div class='container_com_item_price'>"+item.text+"</div>\
							<div class='container_com_item_price'>￥"+item.price+"<span>"+item.buy_num+"人付款</span></div></div>\
						</div>\
						<div class='ui-block-e container_com_space'></div>\
					</div>"
					}
					
				}else{
					if(j%2==1){
						_html+="<div class='ui-grid-d container_com'>\
						<div class='ui-block-a container_com_space'></div>\
						<div class='ui-block-b container_com_item'>\
							<div class='container_com_item_btn'\
								data-url="+dynGenCode.url+"\
								data-data_src_type='self'\
			                    data-fields='id'\
			                    data-id="+json[j-1].id+"\
							 >\
							<img src="+json[j-1].img_url+">\
							<div class='container_com_item_price'>"+json[j-1].text+"</div>\
							<div class='container_com_item_price'>￥"+json[j-1].price+"<span>"+json[j-1].buy_num+"人付款</span></div></div>\
						</div>\
						<div class='ui-block-c container_com_space'></div>\
						<div class='ui-block-d container_com_item'>\
							<div class='container_com_item_btn'\
								data-url="+dynGenCode.url+"\
								data-data_src_type='self'\
			                    data-fields='id'\
			                    data-id="+item.id+"\
							 >\
							<img src="+item.img_url+">\
							<div class='container_com_item_price'>"+item.text+"</div>\
							<div class='container_com_item_price'>￥"+item.price+"<span>"+item.buy_num+"人付款</span></div></div>\
						</div>\
						<div class='ui-block-e container_com_space'></div>\
					</div>"
					}
					if(j==(json.length-1)){
						_html+="<div class='ui-grid-d container_com'>\
						<div class='ui-block-a container_com_space'></div>\
						<div class='ui-block-b container_com_item'>\
							<div class='container_com_item_btn'\
								data-url="+dynGenCode.url+"\
								data-data_src_type='self'\
			                    data-fields='id'\
			                    data-id="+json[j].id+"\
							 >\
							<img src="+json[j].img_url+">\
							<div class='container_com_item_price'>"+json[j].text+"</div>\
							<div class='container_com_item_price'>￥"+json[j].price+"<span>"+json[j].buy_num+"人付款</span></div></div>\
						</div>\
						<div class='ui-block-c container_com_space'></div>\
					</div>"
					}
				}
			// });
			j++;
		});

		

		return _html;
	},
	// 将代码追加到页面内
	updataHtml : function(json){
		var _html = dynGenCode.genCode(json);
		$(".shop").children().remove();
		$(".shop").append(_html);
		// window.location.href="/tbh/tmpl/home/categories.html";
	},
	appendHtml : function(json){
		var _html = dynGenCode.genCode(json);
		$(".shop").append(_html);
	}
}