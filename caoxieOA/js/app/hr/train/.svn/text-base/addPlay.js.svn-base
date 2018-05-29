// var $_form=$("#manage-form");
THISPAGE = {
	
	init:function(){
		this.initDom();
	},
	
	initDom:function(){
 
	},

	
	getPost:function(){
		
	},
	
    initValidator:function(){
//		var $_validate = $_form.validator({
//			rules:{
//				
//			},
//			messages:{
//	            required: "请填写{0}"
//			},
//			fields:{
//				phone:'required;length[~29]',
//				username:"required;",
//				no: "required;"
//			},
//			display: function(t) {
//				return $(t).closest(".form-group").find("label").text()
//			},
//			ignore: ":hidden",
//			theme: "yellow_bottom",
//			timely: 1,
//			stopOnError: !0
//		});
	},
}
     var add=0;//计id
     //添加文件
   function add_new(){
		Public.filesLi({
			dom: $('#upfiles_ul'),
			data: "fff"
		});
   }
   /*培训人员添加*/
  function open_man(){
  	parent.Public.openWin('page/hr/train/addTrainMan.html', '添加培训人员', 460, 499, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
  }
  /*培训讲师添加*/
  function open_lecturer(){
  	parent.Public.openWin('page/hr/train/editLecturer.html', '编辑讲师', 600, 499, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
  }

THISPAGE.init();
