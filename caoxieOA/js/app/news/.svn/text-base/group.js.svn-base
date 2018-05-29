
var choicegroup_sendnew,
GROUPPAGE = {

	init: function() {
		this.initDom();
		this.addEvent();
	},

	initDom: function() {

	},

	createGrid: function() {
	
	},
	
	addEvent: function() {
		var self=this;
		$('#login_user').click(function(){
			self.sidePanel = Public.sidePanel({
				icon: '',
				type: 1,
				closeBtn: 1,
				width:350,
				title: '群组成员(4)',
				content: "member.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: ""
					});
				}
			}).getPanel();
		});
		
		
		 choicegroup_sendnew=$("#group_sendnewsfitid");
       //加入群
		$("#choicgroupAnswer_fitid").click(function(){
			$(this).popbox({
				height:70,
				direction: 'bottom',
				content: choicegroup_sendnew
			});
		});
		
		
         
         
         $('#file_record').click(function(){
			self.sidePanel = Public.sidePanel({
				icon: '',
				type: 1,
				closeBtn: 1,
				width:350,
				title: '文件',
				content: "fileRecord.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: ""
					});
				}
			}).getPanel();
		});
		
		
		//成员个人详情
		$('#member_details_personalid').click(function(){
			self.sidePanel = Public.sidePanel({
				icon: ' ',
				type: 1,
				closeBtn: 1,
				width:350,
				title: '成员',
				content: "details/personal.html",
				ok:function(){
				}
			}).getPanel();
		});
		// 当点击的范围不是成员资料弹窗时 关闭弹窗
		GROUPPAGE.closeMenu();
         
	},  
	
	closeMenu : function(){
		$(document).click(function(e){
			if($(e.target).parents(".member_info").length==0){
				// 隐藏成员资料的弹框
				$(".member_info").css("display","none");
			}
		});
	},
	//消息通知设置
	news_notify_fit:function(){
		parent.Public.openWin('page/news/group/news_notice_fit.html', '消息通知设置', 600, 420, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
		$(".popbox").css("display","hidden");
	}
	
	
		
		
	
};

GROUPPAGE.init();