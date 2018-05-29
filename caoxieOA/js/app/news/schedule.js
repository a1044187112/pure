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
		$('#newsexafit_id').click(function(){
			self.sidePanel = Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				closeBtn: 1,
				width:350,
				title: '设置',
				content: "examine_fit.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: ""
					});
				}
			}).getPanel();
		});
		
		
		$("#add-main").on("click",function(){
         	parent.Public.openWin('page/administration/vehicle/main_add.html', '车辆新增', 800, 500, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
         });
	}
	
};

EXAMINEPAGE.init();