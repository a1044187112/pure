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
		
        $("#showPage_office").load("distribution/distribution.html");
		$(".left-selector li").on("click",function(){
			$(".left-selector li").removeClass("active");
			$(this).addClass("active");
			var str=$(this).attr("url");
			$("#showPage_office").load(str);
		})

        //固定资产信息添加
		$("#add-btn").on("click", function() {
			parent.Public.openWin('page/administration/fixedAssets/information/information_add.html', '固定资产添加', 850, 650, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
		});

		
	}
};

THISPAGE.init();