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
		/**
		 * @param 【displayNone_1  supplies】办公用品信息  
		 *        【displayNone_2  collar】办公用品领用  
		 *        【displayNone_3  storage】办公用品入库
		 */
        $("#showPage_office").load("purchase/purchase.html");
		$("#supplies").on("click", function() {
			$("#supplies").addClass("active");   $(".displayNone_1").css("display","block");
			$("#collar").removeClass("active");  $(".displayNone_2").css("display","none");
			$("#storage").removeClass("active"); $(".displayNone_3").css("display","none");
		
			$("#showPage_office").load("supplies/supplies.html");
		});

		$("#collar").on("click", function() {
			$("#collar").addClass("active");      $(".displayNone_2").css("display","block");
			$("#supplies").removeClass("active"); $(".displayNone_1").css("display","none");
			$("#storage").removeClass("active");  $(".displayNone_3").css("display","none");
			
		    $("#showPage_office").load("purchase/purchase.html");
		});
		
		$("#storage").on("click", function() {
			$("#storage").addClass("active");     $(".displayNone_3").css("display","block");
			$("#supplies").removeClass("active"); $(".displayNone_1").css("display","none");
			$("#collar").removeClass("active");   $(".displayNone_2").css("display","none");
		
			$("#showPage_office").load("receive/receive.html");
		});

        //办公用品信息添加
		$("#add-btn").on("click", function() {
			parent.Public.openWin('page/administration/officeSupplies/supplies/supplies_add.html', '添加新用品', 850, 480, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
		});
		
		//办公用品信息编辑
		 $("#openWin").on("click", function() {
			parent.Public.openWin('page/administration/officeSupplies/supplies/supplies_add.html', '编辑新用品', 850, 480, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
		});
		
		//办公用品入库
		$("#purchase").on("click", function() {
			Public.sidePanel({
				icon: 'fa-download',
				type: 1,
				title: '办公用品入库',
				content: "receive/receive_add.html"
			})
		});

		
	}
};

THISPAGE.init();