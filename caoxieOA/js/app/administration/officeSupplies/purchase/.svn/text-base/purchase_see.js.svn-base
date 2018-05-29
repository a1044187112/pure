
WuLiaoPage = {
	
	init:function(){
		this.initDom();
		this.initGrid();
		this.addEvent();
	},
	
	initDom:function(){
		var self = this;
	},
	
	initGrid:function(){
		setTimeout(function(){
			var i=$(".manage-wrap").css("width").split("px");
			var data = [{
			no: 1,
			itemName: '列表名称',
			fuze: '0000',
			type: "笔记本"
		}, {
			no: 2,
			itemName: '列表名称',
			fuze: '0000',
			type: "记事本"
		}, {
			no: 3,
			itemName: '列表名称',
			fuze: '0000',
			type: "笔记本"
		}, {
			no: 1,
			itemName: '列表名称',
			fuze: '0000',
			type: "笔记本"
		}, {
			no: 2,
			itemName: '列表名称',
			fuze: '0000',
			type: "笔记本"
		}, {
			no: 3,
			itemName: '列表名称',
			fuze: '0000',
			type: "笔记本"
		}];
		$("#grid_purchase").jqGrid({
			data: data,
			datatype: "local",
			width: i[0],
			height: 300,
			altRows: !0,
			gridview: !0,
			multiselect: !0,
			styleUI: 'Bootstrap',
			colModel: [{
				name: 'type',
				label: "图片",
				width: 70,
				fixed: !1,
				align: 'left',
				formatter: function(val, opt, row) {
					return '<img alt="image" src="../../../img/avatar.jpg" style="width:50px; height:50px;">'
				}
			}, {
				name: 'type',
				label: "名称",
				width: 90,
				fixed: !1,
				align: 'left',
				formatter: function(val, opt, row) {
					return '<h3>' + val + '</h3><h2 style="margin-top:5px;">001002</h2>'
				}
			}, {
				name: "itemName",
				label: '类型',
				width: 90,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "规格",
				width: 90,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "单位",
				width: 80,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "参考价格",
				width: 80,
				fixed: !1,
				align: 'left'
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			shrinkToFit: !0,
			forceFit: !0,
			rowNum: 1e3,
			cellEdit: !0,
			forceFit: !0,
			footerrow: !0,
			userDataOnFooter: !0,
			cellsubmit: "clientArray",
			localReader: {
				root: "rows",
				records: "records",
				repeatitems: !1,
				id: "id"
			},
			jsonReader: {
				root: "rows",
				records: "records",
				repeatitems: !1,
				id: "id"
			},
			loadComplete: function(a) {},
			gridComplete: function() {},
			loadError: function(a, b, c) {},
			ondblClickRow: function(a, b, c, d) {},
			resizeStop: function(a, b) {},
			afterSaveCell: function(t, i, a, n, r){
				alert(i);
				switch(i){
				    case "name":
				    	var d = $("#" + t).data("spaceInfo");
				    break;
				}
			},
			userData: {
				goods: "合计：",
				number: 0
			}
		});
		},50)
		
	},
	
	addEvent:function(){
	
	},
	
};
WuLiaoPage.init();