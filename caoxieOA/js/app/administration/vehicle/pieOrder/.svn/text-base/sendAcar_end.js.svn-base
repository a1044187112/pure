var $_form = $("#add-department-form"),
	THISPAGE = {

		init: function() {
			this.initDom();
			this.initTree();
			this.addEvent();
			this.initValidator();
		},

		initDom: function() {
			
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
			     
		      $("#btn-return").on("click",function(){
               $(".wrapper").load("pieOrder/pieOrder.html");
         })	     

		}
	};

THISPAGE.init();