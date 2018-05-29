var WIPEDPAGE = {
	init:function(){
		this.initDom();
		this.addEvent();
	},
	
	initDom:function(){
		var _self = this;
		_self.$_radio_classes = $('#radiojob_classes');
		_self.radioClasses = _self.$_radio_classes.cssRadio({
			 callback:function(a){
			     var v = a.find('input').val();
			   
		     }
		});
		
		
	},
	
	
	
	addEvent:function(){
		$('.wuliao-warp').on('click','#btn-jobback',function(e){
			THISPAGE.sidePanel.options.closeBtn = 1;
			THISPAGE.sidePanel.realod('addNav.html');
		});
		
	}
};

WIPEDPAGE.init();

