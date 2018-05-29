var choicegroup_into,
MAINPAGE = {

	init: function() {
		this.initDom();
		this.addEvent();
	},

	initDom: function() {

	},

	createGrid: function() {
	
	},
	
	addEvent: function() {
		//菜单按钮
		$('#newsbtn_munesid li').bind('click',function(e){
			$('#newsbtn_munesid li').removeClass('active');
			$(this).addClass('active');
			var url = $(this).attr('url');
			$(".news_centerload_view").load(url);
			
		});
        $(".news_centerload_view").load("group.html");
       
       
       
        //加入群
       choicegroup_into=$("#choicegroup_sendnewsid");
		$("#addintogroup").click(function(){
			$(this).popbox({
				height:150,
				direction: 'bottom',
				content: choicegroup_into
			});
		});
         
	},
	
	//创建群组
	found_group : function(){
			parent.Public.openWin('page/news/choiceinto/found_group.html', '创建群组', 800, 500, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
			$(".popbox").css("display","hidden");
	},
	
	
	//加入群组
	choiceinto_group : function(){
				parent.Public.openWin('page/news/choiceinto/into_group.html', '加入群组', 600, 300, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];
		
			});
			$(".popbox").css("display","hidden");
	},
	
	//发起私聊
	choiceprivate_chat : function(){
			parent.Public.openWin('page/news/choiceinto/private_chat.html', '发起私聊', 600, 700, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			},true);
			$(".popbox").css("display","hidden");
	}
	
};

MAINPAGE.init();



