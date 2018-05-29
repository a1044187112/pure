var $_form = $("#manage-add-department-form"),
THISPAGE = {
	
	
	init:function(){
		this.initValidator();
	},
	initValidator:function(){
		var $_validate = $_form.validator({
			rules:{
				
			},
			messages:{
	            required: "请填写{0}"
			},
			fields:{
				username:"required;"
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
	
	submit:function(){
		$_form.isValid(function(v){
			if(v){
				parent.layer.closeAll();
				return true;
			}else{
				return false;
			}
		});
	}
};
THISPAGE.init();
