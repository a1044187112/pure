THISPAGE = {

	init: function() {
		this.initDom();
		this.addEvent();
	},

	initDom: function() {

	},

	createGrid: function() {
	
	},
	
	addEvent: function() {
		
		$('#nav-btn li').bind('click',function(e){
			$('#nav-btn li').removeClass('active');
			$(this).addClass('active');
			var url = $(this).attr('url');
			$(".wrapper").load(url);
			
		});
        $(".wrapper").load("information/information.html");
       
		
		//证照新增
		
		$("#add-main").on("click",function(){
         	parent.Public.openWin('page/administration/licence/main_add.html', '证照新增', 800, 470, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
         });

		
	}
};

THISPAGE.init();