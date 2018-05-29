var examine_fit="",
EXAMINEPAGE = {

	init: function() {
		this.initDom();
		this.addEvent();
	},

	initDom: function() {

	},

	createGrid: function() {
	
	},
	
	addEvent: function() {
		//设置
		$('#examine_newsexafit_id').click(function(){
			self.sidePanel = Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				closeBtn: 1,
				width:350,
				title: '设置',
				content: "examine/fit.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: ""
					});
				}
			}).getPanel();
		});
		
		
		examine_fit=$("#examine_choicebtn_fitid");
       //选择设置
		$("#choiceexaminefitid").click(function(){
			$(this).popbox({
				height:70,
				direction: 'bottom',
				content: examine_fit
			});
		});
		
	},
	
	
	
	
	
	examine_fit:function(){
     	self.sidePanel = Public.sidePanel({
			icon: 'fa-plus',
			type: 1,
			closeBtn: 1,
			width:350,
			title: '设置',
			content: "examine/fit.html",
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
	
	
	examine_object:function(){
		parent.Public.openWin('page/news/examine/examine_object.html', '审批助手', 800, 650, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
	}
	
};

EXAMINEPAGE.init();