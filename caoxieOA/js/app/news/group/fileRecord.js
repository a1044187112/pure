THISPAGE = {
	init : function(){
		this.addEvent();
	},
	addEvent : function(){
		// 点击不时在弹出的窗口是   将窗口隐藏
		THISPAGE.closeMenu();
		//  文件选中后点击事件
		THISPAGE.fileClick();
		// 删除按钮点击事件
		THISPAGE.deleteFile();
		
	},
	//  文件选中后点击事件
	fileClick : function(){
		$(".item_more").click(function(e){
			// 先隐藏之前可能点击的显示在窗口的菜单
			$(".item_more").parentsUntil(".item").parent().find(".sel").css("display","none");
			$(this).parentsUntil(".item").parent().find(".sel").css("display","block");
			e.stopPropagation();
		});
	},
	// 点击不时在弹出的窗口是   将窗口隐藏
	closeMenu : function(){
		$("body").click(function(){
			if($(this).parents(".sel").length==0){
				$(".item_more").parentsUntil(".item").parent().find(".sel").css("display","none");
			}
		});
	},
	
	deleteFile : function(){
		$(".s_i_delete").click(function(){
			$(this).parentsUntil(".item").parent().remove();
		});
	},
};
THISPAGE.init();
