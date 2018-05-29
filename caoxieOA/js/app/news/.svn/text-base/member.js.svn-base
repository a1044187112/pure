MEMBERPAGE = {

	init: function() {
		this.initDom();
		this.addEvent();
	},

	initDom: function() {

	},

	
	addEvent: function() {
		// 点击不时在弹出的窗口是   将窗口隐藏
		MEMBERPAGE.closeMenu();
		// 点击添加新成员弹窗
		MEMBERPAGE.addMember();
		//  点击成员后面的小按钮
		MEMBERPAGE.selMember();
		// 成员资料点击事件 
		MEMBERPAGE.memberInfo();
		// 移除成员按钮点击事件
		MEMBERPAGE.moveMember();
		
	},
	// 点击添加新成员弹窗
	addMember : function(){
		$("#choiceaddnewmanid").on("click",function(){
         	parent.Public.openWin('page/news/choiceinto/private_chat.html', '添加新成员', 600, 300, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
         });
	},
	
	selMember : function(){
		$(".item_more").click(function(e){
			// 先隐藏之前可能点击的显示在窗口的菜单
			$(".item_more").parent("item").find(".sel").css("display","none");
			$(this).parent(".item").find(".sel").css("display","block");
			e.stopPropagation();
		});
	},
	
	closeMenu : function(){
		$("body").click(function(e){
//			alert(55);
			if($(e.target).parents(".sel").length==0){
				$(".item_more").parent(".item").find(".sel").css("display","none");
			}
		});
	},
	
	memberInfo : function(){
		$(".s_i_info").click(function(e){
			$(".member_info").css("display","block");
			e.stopPropagation();
		});
	},
	
	moveMember : function(){
		$(".s_i_install").click(function(){
			$(this).parents(".item").remove();
		});
	},
};

MEMBERPAGE.init();