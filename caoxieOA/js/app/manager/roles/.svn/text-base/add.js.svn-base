var $_form = $("#manage-form"),
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
				phone:'required;length[~29]',
				username:"required;",
				no: "required;"
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
				console.info($_form.find('input[name=username]'));
				console.info($_form.find('input[name=username]').val());
				console.info($_form.find('input[name=username]').value);
				parent.Public.tips({type: 1, content : "成功"});
				parent.Public.ajaxPost('ZCustomerStageAction!getAll.sr', null, function(res){
					if(res.STATUS){
						CONFIG.customerStageInfo = res.rows;
					}else{
//						Public.tips({type: 1, content : res.INFO});
					}
				});
				parent.layer.closeAll();
				return true;
			}else{
				return false;
			}
		});
	}
};
THISPAGE.init();
