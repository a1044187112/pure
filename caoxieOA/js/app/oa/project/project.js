THISPAGE = {
	
	init:function(){
		this.initDom();
		this.addEvent();
	},
	
	initDom:function(){
		this.loadTemp('temp_project_list.html');
	},
	
	loadTemp:function(url){
		$('.right-wrap .wrapper').html('<div class="spiner-example">正在加载,请稍等...<div class="sk-spinner sk-spinner-three-bounce"><div class="sk-bounce1"></div><div class="sk-bounce2"></div><div class="sk-bounce3"></div></div></div>');
		$('.right-wrap .wrapper').load(url);
	},
	
	/**
	 * 锁定行
	 * @param {Object} id
	 */
	lockTr:function(id){
		
	},
	
	addEvent:function(){
		
	},
	
	goMain:function(){
		THISPAGE.loadTemp('temp_project_main.html');
		$('.sidebard-panel').animate({left: "-225px"});
		$('.right-wrap').animate({left: '0px'});
		
	}
};

THISPAGE.init();

