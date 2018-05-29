THISPAGE = {
	init : function(){

		this.bindClick();
	},
	bindClick : function(){
		// 弹出窗口选择成员按钮
		THISPAGE.addMemPerBtnClick();
		// 协作按钮点击事件
		THISPAGE.cooBtnClick();
		// 权限选项item点击事件
		THISPAGE.preItemClick();
	},
	addMemPerBtnClick : function(){
		$(".h_icon").click(function(){
			parent.Public.openWin('page/yunpan/sendFile/sendSelMem.html', '从联系人中选择', 700,500, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
				$(".popbox").css("display","hidden");
		});
	},
	
	
	cooBtnClick : function(){
		$(".h_sel").click(function(){
			if($(".pre_sel").hasClass("isShow")){
				$(".pre_sel").removeClass("isShow");
				$(".pre_sel").css("display","none");
			}else{
				$(".pre_sel").addClass("isShow");
				$(".pre_sel").css("display","block");
			}
		});
	},
	
	preItemClick : function(){
		$(".p_s_item").click(function(){
			$(".pre_value").text($(this).text());
		});
		
	},
};
THISPAGE.init();
