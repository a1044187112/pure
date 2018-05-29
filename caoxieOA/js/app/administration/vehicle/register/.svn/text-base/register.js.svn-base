THISPAGE = {

	init: function() {
		this.initDom();
		this.initTree();
		this.addEvent();

	},

	initDom: function() {
       var i=$(".right-wrap").css("height").split("px");
       $(".ul_sty").css("height",i[0]-100+'px');
	},

	initTree: function() {

	},

	addEvent: function() {
		
		$(".ul_sty").children().on("click",function(){
			var url = $(this).attr('url');
			$(".wrapper").load(url);
		});

	}
};

THISPAGE.init();