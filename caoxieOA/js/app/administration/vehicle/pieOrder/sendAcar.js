var $_form = $("#add-department-form"),
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
			typeCom = $("#typeSelected").combo({
				data: [{
					id: 0,
					name: "11111111111"
				}, {
					id: 1,
					name: "2222222222"
				}, {
					id: 2,
					name: "333333333"
				}, {
					id: 3,
					name: "44444444"
				}],
				value: "id",
				text: "name",
				name: "gender",
				class: "form-control",
				defaultSelected: null || 0
			}).getCombo();
			
		},
		initValidator: function() {
			var $_validate = $_form.validator({
				rules: {

				},
				messages: {
					required: "请填写{0}"
				},
				fields: {
					postName: "required;",
					postLevel:"required"
				},
				display: function(t) {
					return $(t).closest(".form-group").find("label").text()
				},
				ignore: ":hidden",
				theme: "yellow_bottom",
				timely: 1,
				stopOnError: !0
			});
		},

		addEvent: function() {
			//
			$("#btn-sendAcar").on("click",function(){
			$(".wrapper").load("pieOrder/sendAcar_print.html");
		    });
		    
		     $("#btn-return").on("click",function(){
            $(".wrapper").load("pieOrder/pieOrder.html");
         })
		    
		    //选择车辆
		    $("#choiceCar").on("click",function(){
		    	parent.Public.openWin('page/administration/vehicle/pieOrder/choiceCar.html', '车辆选择', 540, 450, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
		    })

		}
	};

THISPAGE.init();