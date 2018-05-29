var $select_grid = $("#table-content_goods"),curRow, curCol,
copyvalue_id="",
choicetype="",
WULIAOPAGE = {
	init:function(){
		this.initDom();
		this.addEvent();
	},
	
	initDom:function(){
		var _self = this;
		this.$_type = $('#platenumber');
		_self.com_type = this.$_type.combo({
			data:[{
				id:'0',
				name: 'GA1234'
			},{
				id:'1',
				name: 'GA4567'
			},{
				id:'2',
				name: 'GA2654'
			},{
				id:'3',
				name: 'GAJH25'
			}],
			value: "id",
			text: "name",
			width: 170,
			defaultSelected: null || 0
		}).getCombo();
		
		
		
	},
	
	
	copyxuqiu:function(id){
		copyvalue_id=id;
		var copy_value=$("#"+id).val();
		//赋值
		textareavalue=copy_value;
		parent.Public.openWin("page/oa/approval/copyvalue.html",'申请物品备注',500,400,function(index,layero){
			var iframeWin = parent.window[layero.find('iframe')[0]['name']];
			iframeWin.copyxuqiu();
		});
		
	},
	
	
	addEvent:function(){
		$('.wuliao-warp').on('click','#btn-paicheback',function(e){
			THISPAGE.sidePanel.options.closeBtn = 1;
			THISPAGE.sidePanel.realod('addNav.html');
		});
		
		
	}
};

WULIAOPAGE.init();


function copyvalue(value){
	$("#"+copyvalue_id).val(value);
}