THISPAGE = {
	
	init:function(){
		this.initDom();
		this.addEvent();
	},
	
	initDom:function(){
//		sexCom = $("#sex").combo({
//			data: [{
//				id: 0,
//				name: "男"
//			}, {
//				id: 1,
//				name: "女"
//			}],
//			value: "id",
//			text: "name",
//			width: 220,
//			defaultSelected: null || 0
//		}).getCombo();
        console.log(document);
	},
	
	getPost:function(){
		
	},
	
	submit:function(){
		
	},
	
	addEvent:function(){
		$('.tab-wrapper .tab-navigation a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		});
	}
};
THISPAGE.init();
