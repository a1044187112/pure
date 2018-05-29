var choice_new_fit="",choice_newsend_fit="",
EXAMINEPAGE = {

	init: function() {
		this.initDom();
		this.addEvent();
	},

	initDom: function() {
        var _self = this;
        
		_self.$_radio_news = $('#radio_news_fit');
		_self.radioNews = _self.$_radio_news.cssRadio({
			 callback:function(a){
			     var v = a.find('input').val();
			     choice_new=v;
			     
			     console.info("==========v========"+choice_new);
		     }
		});
		
		$_radio_newssend_fit = $('#radio_newssend_fit');
		_self.radionewssendfit = $_radio_newssend_fit.cssRadio({
			 callback:function(a){
			     var s = a.find('input').val();
			     choice_newsend_fit=s;
			     
			     console.info("==========s========"+choice_newsend_fit);
		     }
		});
		
		
	},

	
	addEvent: function() {
		
	}
	
	
	
	
	
};

EXAMINEPAGE.init();