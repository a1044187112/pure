var iframe = parent.document.getElementById('home_iframe').contentWindow;
THISPAGE = {
	init:function(){
		this.initDom();
		this.addEvent();
	},
	initDom:function(){
		this.$_right = $('#rights');
		this.$_app = $("#app_name");
		this.app_name = this.$_app.combo({
			data: [
			{
				id: 1,
				name: "选择模块"
			},
			{
				id: 2,
				name: "日常办公"
			},
			{
				id: 3,
				name: "行政办公"
			},
			{
				id: 4,
				name: "人力资源"
			}],
			value: "id",
			text: "name",
			width: 220,
			defaultSelected: null || 0
		}).getCombo();
	},
	addEvent:function(){
		var self = this;
		top.Public.uploadFile('#icon-upload','/upload',function(e,data){
			
		});
		
		$('#rights').on('click','.ui-icon-ellipsis',function(e){
			$.dialog({
				width: 410,
				height: 360,
				title: '选择权限',
				content: 'url:page/select/select_buttons.html',
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
	
	menuSave:function(){
		parent.layer.closeAll();
	}
}
THISPAGE.init();