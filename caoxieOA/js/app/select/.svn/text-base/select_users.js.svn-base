function callback(){
	var e = $("#grid").jqGrid("getGridParam", "selarrrow");
	if (e && e.length > 0) {
		var values = '';
		var objs = [];
		for(var i=0;i<e.length;i++){
			var obj = $("#grid").jqGrid("getRowData", e[i]);
			values +=  obj.name + ',';
			objs.push({id:obj.name,code:obj.code});
		}
		values = values.substr(0,values.length-1);
		return {values:values,objs:objs};
		//api.data.type && t.CONFIG[api.data.type].push(i);
	}
}
$grid = $("#grid"),
addList = {},
THISPAGE = {
	
	init:function(){
		this.initGrid();
	},
	
	initGrid:function(){
		$grid.jqGrid({
			data: [{
				name: '张山',
				code: '组织办'
			},{
				name: '李思',
				code: '组织办'
			},{
				name: '王武',
				code: '组织办' 
			}],
			datatype: "local",
			autowidth: !0,
			height: 240,
			altRows: !0,
			gridview: !0,
			onselectrow: !0,
			multiselect: true,
			multiboxonly: false,/*多选*/
			viewrecords: true,
			styleUI : 'Bootstrap',
			colModel: [{
				label: '姓名',
				name: 'name',
				width: 70
			},{
				label: '所在部门',
				name: 'code',
				width: 70
			}],
			pager: "#page",
			viewrecords: !0,
			cmTemplate: {
				sortable: !1
			},
			rowNum: 100,
			rowList: [100, 200, 500],
			shrinkToFit: !0,
			jsonReader: {
				root: "rows",
				records: "records",
				total: "total",
				page: "page",
				repeatitems: !1,
				id: "id"
			},
			loadComplete: function() {
				$("#jqgh_grid_cb").hide();
			},
			loadError: function() {},
			onSelectRow: function(t, e) {
				if (e) {
					var i = $grid.jqGrid("getRowData", t);
					i.id = t;
					addList[t] = i
				} else addList[t] && delete addList[t]
			},
			onSelectAll: function(t, e) {
				for (var i = 0, a = t.length; a > i; i++) {
					var n = t[i];
					if (e) {
						var r = $grid.jqGrid("getRowData", n);
						addList[n] = r
					} else addList[n] && delete addList[n]
				}
			},
			gridComplete: function() {
				for (item in addList) $grid.jqGrid("setSelection", item, !1)
			}
		});
	}
};
THISPAGE.init();