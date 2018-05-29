THISPAGE = {
	init : function(){
		this.addEvent();
	},
	addEvent : function(){
		//  组的点击事件
		$(".group_sel").click(function(){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				// 切换箭头
				$(this).children(".fa-sort-down").css("display","none");
				$(this).children(".fa-caret-right").css("display","inline");
				//  切换群组或个人信息的显示
				$(this).siblings(".group_list").css("display","none");
				$(this).siblings(".py_list").css("display","none");
				
			}else{
				$(this).addClass("active");
				$(this).children(".fa-sort-down").css("display","inline");
				$(this).children(".fa-caret-right").css("display","none");
				
				$(this).siblings(".group_list").css("display","block");
				$(this).siblings(".py_list").css("display","block");
			}
		});
		
		// 左边单个条目的点击事件
		$(".con_g_item").click(function(){
			THISPAGE.itemClick(this);
		});
		$(".con_py_item").click(function(){
			THISPAGE.itemClick(this);
		});
		// 右边单个条木的点击事件
		$("body").delegate(".con_sel_item","click",function(){
			THISPAGE.rightItemClick(this);
		});
//		alert(55);
		
		
	},
	// 左边条目点击事件执行方法
	itemClick : function(obj_this){
		var text ="";
		var imgurl ="";
		var dataId = "";
		// 判断是否已被选中
		if($(obj_this).hasClass("item_selected")){
			// 已经被选中 改为未选中
			$(obj_this).removeClass("item_selected");
			//将小圆改为未选中状态
			$(obj_this).children(".sel").css("background","#fff");
			// 获取当前点击条目的编号
			imgurl = $(obj_this).children("img").attr("src");
			str = $(obj_this).children(".name").text();
			dataId = $(obj_this).attr("data-id");
			THISPAGE.showItem(imgurl,str,dataId,0); // 0 表示取消选中
		}else{
			// 改为选中状态
			$(obj_this).addClass("item_selected");
			//将小圆改为选中状态
			$(obj_this).children(".sel").css("background-color","#64be33");
			// 获取当前点击条目的编号
			imgurl = $(obj_this).find(".fp_img").attr("src");
//			alert($(obj_this).children(".fp")[0]);
			str = $(obj_this).children(".name").text();
			dataId = $(obj_this).attr("data-id");
			THISPAGE.showItem(imgurl,str,dataId,1); // 1 表示选中  
		}
	},
	
	// 将选中的条目显示在右边的选中框中
	showItem : function(imgurl,str,dataId,num){
		if(num==0){
			// 取消选中时  要将已选中的移除
			var dataId1 = $(".sel_list").attr("data-id");
			if(dataId==dataId1){
				$(".sel_list").find(".name").parents(".con_py_item").remove();
			}
			
			// 当num=0时 要删除右边选中的 
			$(".sel_list").find(".con_sel_item").each(function(){
				if(dataId==$(this).attr("data-id")){
//					$(".sel_list").find(".name").parent().remove();
					$(this).remove();
				}
			});			
		}else if(num==1){
			var _html="";
			_html='<li class="con_sel_item" data-id='+dataId+' ><div class="fp"><img src='+imgurl+'></div><div class="name">'+str+'</div><div class="sel"></div></li>';
			$(".sel_list").append(_html);
			// 添加之后  需要吧该项设置为红色状态
			$(".con_sel_item").children(".sel").css("background-color","red");
		}
		THISPAGE.showSelLen();
		
	},
	// 右边条目点击事件执行方法
	rightItemClick : function(obj_this){
		$(obj_this).remove();
		// 获取到当前点击的item  与左边的进行比较 把相同的  取消选中的状态
		var str = $(obj_this).attr("data-id");
		$(".container_left").find(".con_g_item").each(function(){
			if(str==$(this).attr("data-id")){
				$(this).find(".sel").css("background","white");
				$(this).removeClass("item_selected");
			}
		});
		$(".container_left").find(".con_py_item").each(function(){
			if(str==$(this).attr("data-id")){
				$(this).find(".sel").css("background","white");
				$(this).removeClass("item_selected");
			}
		});
		THISPAGE.showSelLen();
	},
	showSelLen : function(){
		// 获取到选中的个数 
		var len = $(".container_left").find(".item_selected").length;
		// 将数量添加到右侧的数量显示框中 
		$(".sel_num").text(len);
		if(len==0){
			$(".selected_none").css("display","block");
		}else{
			$(".selected_none").css("display","none");
		}
		// 
//		$(".layui-layer-btn0").text('共享'); 
	},
};
THISPAGE.init();
