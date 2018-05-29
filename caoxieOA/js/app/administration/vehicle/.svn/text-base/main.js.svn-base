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
        $(".wrapper").load("carInformation/carInformation.html");
       
		
		//新增车辆
		
		$("#add-main").on("click",function(){
         	parent.Public.openWin('page/administration/vehicle/main_add.html', '车辆新增', 800, 500, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
         });

		
	}
};

THISPAGE.init();