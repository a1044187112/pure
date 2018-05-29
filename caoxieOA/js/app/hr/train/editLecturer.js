THISPAGE = {
	
	init:function(){
		this.initDom();
	},
	
	initDom:function(){
		//讲师添加绑定
        $("#newAdd").on("click",function(){
        	$.dialog({
				width: 500,
				height: 160,
				title: '添加培训讲师',
				content: 'url:page/hr/train/addLecturer.html',
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
        });
        //讲师修改绑定
        $("#modifyAdd").on("click",function(){
        	$.dialog({
				width: 500,
				height: 160,
				title: '修改培训讲师',
				content: 'url:page/hr/train/addLecturer.html',
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
        });
	},

	
	getPost:function(){
		
	},
	

}
 
THISPAGE.init();
