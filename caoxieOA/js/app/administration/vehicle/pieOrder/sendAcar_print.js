THISPAGE = {

		init: function() {
			this.initDom();
			this.initTree();
			this.addEvent();
			this.initValidator();
		},

		initDom: function() {
			 var i=$(".right-wrap").css("height").split("px");
             $(".module-body").css("height",i[0]-40+'px');
		},
		


		initTree: function() {
			
			
		},
		initValidator: function() {
			
		},

		addEvent: function() {
            $("#btn-return").on("click",function(){
           $(".wrapper").load("pieOrder/pieOrder.html");
         })
		}
	};

THISPAGE.init();