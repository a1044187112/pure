var WIPEDPAGE = {
	init:function(){
		this.initDom();
		this.addEvent();
	},
	
	initDom:function(){
		
		
	},
	
	
	
	addEvent:function(){
		$('.wuliao-warp').on('click','#btn-evectionback',function(e){
			THISPAGE.sidePanel.options.closeBtn = 1;
			THISPAGE.sidePanel.realod('addNav.html');
		});
		
	}
};

WIPEDPAGE.init();

