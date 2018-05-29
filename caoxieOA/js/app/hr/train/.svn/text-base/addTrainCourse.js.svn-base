THISPAGE = {
	
	init:function(){
		this.initDom();
	},
	
	initDom:function(){
//		console.log($(".title").text());
        sexCom = $("#classCourse").combo({
			data: [{
				id: 0,
				name: "安全教育"
			}, {
				id: 1,
				name: "专业知识"
			}, {
				id: 2,
				name: "公司规范"
			}, {
				id: 3,
				name: "外语培训"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 220,
			defaultSelected: null || 0,
			extraListHtml: '<a href="javascript:void(0);" id="quickAddCategory" class="quick-add-link"><i class="ui-icon-add"></i>新增</a>'
		}).getCombo();
		sexCom = $("#getTime").combo({
			data: [{
				id: 0,
				name: "1小时"
			}, {
				id: 1,
				name: "2小时"
			}, {
				id: 2,
				name: "3小时"
			}, {
				id: 3,
				name: "4小时"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 220,
			defaultSelected: null || 0
		}).getCombo();
		$("#quickAddCategory").on("click",function(){
			$.dialog({
				width: 500,
				height: 160,
				title: '添加培训讲师',
				content: 'url:page/hr/train/addCourse.html',
				data: {
					skey : null
				},
				lock: true,
				ok: function(){
					if(typeof this.content.callback === 'function'){
						var data = this.content.callback();
						self.$_right.find('input').val(data.values);
						self.$_right.data("contactInfo", data.objs);
						console.info(data.values);
						console.info(data.objs);
						this.close();
					}
			        return false;
				},
				cancel: function(){
			        return true;
				}
			});
		})
	},

	
	getPost:function(){
		
	},
	

}
     var add=0;//计id
     //添加文件
   function add_new(){
   	    var str='<li class="upfiles_li" id="id'+add+'" onmouseover="showLog1('+add+');" onmouseout="hindLog1('+add+');">'+
   	    add+'<img class="up_imgLog" id="img'+add+'" src="../../../img/kuaipan/delete.png" onclick="removeElement('+add+');"></li>';
		$("#upfiles_ul").append(str);
		add++;												
   }
   //移除文件
   function removeElement(e){
	 console.log(e.id);
   	 $("#id"+e).remove();
   	 event.stopPropagation();
   }
  function showLog(){
  	$(".up_imgLog").css("display","block");
  }
   function hindLog(){

  	$(".up_imgLog").css("display","none");
  }
    function showLog1(e){
  	$("#img"+e).css("display","block");
  }
   function hindLog1(e){

  	$("#img"+e).css("display","none");
  }
THISPAGE.init();
