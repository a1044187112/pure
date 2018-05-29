THISPAGESHARE = {
	init : function(){
		this.addEvent();
	},
	addEvent : function(){
		// 分享文件   还原按钮
		THISPAGESHARE.returnShareBtnClick();
		// 分享文件  每一项点击事件
		THISPAGESHARE.shareItemClick();
		// 分享文件页面 和回收站页面全选按钮点击事件
		THISPAGESHARE.selectedAllBtnClick();
		
	},
	returnShareBtnClick : function(){
		$(".right-wrap").delegate(".share_return","mousedown",function(e){
			e.stopPropagation();
			parent.Public.openWin('page/yunpan/shareFile/shareFileCancel.html', '取消分享文件', 500, 250, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
			$(".popbox").css("display","hidden");
		});
		
		$(".right-wrap").delegate(".share_menu_return","mousedown",function(e){
			e.stopPropagation();
			parent.Public.openWin('page/yunpan/shareFile/shareFileCancel.html', '取消分享文件', 500, 250, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
			$(".popbox").css("display","hidden");
		});
		
	},
	shareItemClick : function(){
		$(".right-wrap").delegate(".share_table_item","mousedown",function(e){
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
			}else{
				$(this).addClass("selected");
			}
//			// 勾选上导航的选中按钮
			if($(".share_table_item").hasClass("selected")){
				// 显示还原按钮
				$(".share_menu_return").css("visibility","visible");
//				$(this).find(".share_return").css("visibility","visible");
			}else{
				$(".share_menu_return").css("visibility","hidden");
//				$(this).find(".share_return").css("visibility","hidden");
			}
		});
	},
	
	selectedAllBtnClick : function(){
		//分享页面
		$(".right-wrap").delegate(".file_sel_all","click",function(){
			if($(this).parents(".menu").hasClass("selected")){
				$(this).parents(".menu").removeClass("selected");
				$(".file_share .share_table_item").removeClass("selected");
//				$(".share_return").css("display","none");
				$(".share_return").css("visibility","hidden");
				$(".share_menu_return").css("visibility","hidden");
			}else{
				$(this).parents(".menu").addClass("selected");
				//将每一项选中
				$(".file_share .share_table_item").addClass("selected");
				$(".share_return").css("visibility","visible");
				$(".share_menu_return").css("visibility","visible");
			}
		});
	},
	
};
THISPAGESHARE.init();
