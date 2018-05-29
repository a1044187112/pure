var briefing_fit="",
briefingPAGE = {

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
		//设置
		$('#newsexafit_id').click(function(){
			console.info("000000000");
			self.sidePanel = Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				closeBtn: 1,
				width:350,
				title: '设置',
				content: "briefing/fit.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: ""
					});
				}
			}).getPanel();
		});
		
		
		briefing_fit=$("#choicebriefing_fitid");
       //选择设置
		$("#briefingbtnchoiceid").click(function(){
			$(this).popbox({
				height:70,
				direction: 'bottom',
				content: briefing_fit
			});
		});
		
		
		
	},
	
	
	openbriefing_fit:function(){
		var self=this;
		self.sidePanel = Public.sidePanel({
				icon: '  ',
				type: 1,
				closeBtn: 1,
				width:350,
				title: '设置',
				content: "briefing/fit.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: ""
					});
				}
			}).getPanel();
			$(".popbox").css("display","hidden");
			$(".popbox-body").css("display","hidden");
	},
	
	
	examine_briefing:function(){
		parent.Public.openWin('page/news/briefing/examine_brifing.html', '简报助手', 800, 700, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
			$(".layui-layer-btn").css("display","hidden");
	}
	
};

briefingPAGE.init();