ListPage = {

	init: function() {
		this.initDom();
		this.createGrid();
		this.addEvent();
	},

	initDom: function() {

	},

	createGrid: function() {
		var i = Public.setGrid();
		var data = [{
			no: 1,
			itemName: '列表名称',
			fuze: '0000',
			type: "桌子"
		}, {
			no: 2,
			itemName: '列表名称',
			fuze: '0000',
			type: "椅子"
		}, {
			no: 3,
			itemName: '列表名称',
			fuze: '0000',
			type: "板凳"
		}, {
			no: 1,
			itemName: '列表名称',
			fuze: '0000',
			type: "板凳"
		}, {
			no: 2,
			itemName: '列表名称',
			fuze: '0000',
			type: "椅子"
		}, {
			no: 3,
			itemName: '列表名称',
			fuze: '0000',
			type: "桌子"
		}];
		$("#grid_receive").jqGrid({
			data: data,
			datatype: "local",
			autowidth: !0,
			height: i.h - 10,
			altRows: !0,
			gridview: !0,
			multiselect: !0,
			styleUI: 'Bootstrap',
			colModel: [{
				name: 'type',
				label: "图片",
				width: 100,
				fixed: !1,
				align: 'left',
				formatter: function(val, opt, row) {
					return '<img alt="image" src="../../../img/avatar.jpg" style="width:50px; height:50px;">'
				}
			}, {
				name: 'type',
				label: "名称",
				width: 100,
				fixed: !1,
				align: 'left',
				formatter: function(val, opt, row) {
					return '<a href="javascript:void(0);" class="seeReceive"><h3>' + val + '</h3><h2 style="margin-top:5px;">001002</h2></a>'
				}
			}, {
				name: "itemName",
				label: '类型',
				width: 100,
				fixed: !1,
				align: 'left'
			}, {
				name: "date",
				label: '规格',
				width: 100,
				fixed: !1,
				align: 'center'
			}, {
				name: "position",
				label: '数量',
				width: 170,
				fixed: !1,
				align: 'left'
			}, {
				label: '单位',
				name: "p",
				width: 190,
				fixed: !1,
				align: 'center',
				title: !1
			}, {
				label: '借调人',
				name: "p",
				width: 190,
				fixed: !1,
				align: 'center',
				title: !1
			},{
				label: '借调理由',
				name: "p",
				width: 190,
				fixed: !1,
				align: 'center',
				title: !1
			},{
				label: '借调数量',
				name: "p",
				width: 190,
				fixed: !1,
				align: 'center',
				title: !1
			}, {
				label: '审批时间',
				name: "p",
				width: 190,
				fixed: !1,
				align: 'center',
				title: !1
			}, {
				label: '审批结果',
				name: "p",
				width: 190,
				fixed: !1,
				align: 'center',
				title: !1
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#page_receive",
			rowNum: 100,
			rowList: [100, 200, 500],
			viewrecords: !0,
			shrinkToFit: !0,
			forceFit: !0,
//			footerrow: !0,
			userDataOnFooter: !0,
			jsonReader: {
				root: "data.rows",
				records: "data.records",
				total: "data.total",
				userdata: "data.userdata",
				repeatitems: !1,
				id: "id"
			},
			loadComplete: function(a) {},
			gridComplete: function() {},
			loadError: function(a, b, c) {},
			ondblClickRow: function(a, b, c, d) {},
			resizeStop: function(a, b) {}
		});

	},

	addEvent: function() {
		
		//固定资产借调
		$("#purchase").on("click", function() {
			Public.sidePanel({
				icon: 'fa-external-link',
				type: 1,
				title: '固定资产借调',
				content: "toLoan/toLoan_add.html"
			})
		});
	   
		$(".seeReceive").on("click", function() {
			Public.sidePanel({
				icon: 'fa-external-link',
				type: 1,
				title: '固定资产查看',
				content: "toLoan/toLoan_see.html"
			})
		});
	}
};
ListPage.init();