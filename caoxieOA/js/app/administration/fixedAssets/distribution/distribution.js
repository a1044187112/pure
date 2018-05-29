ListPage = {

		init: function() {
			this.initDom();
			this.createGrid();
			this.initTree();
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
			type: "椅子"
		}, {
			no: 1,
			itemName: '列表名称',
			fuze: '0000',
			type: "椅子"
		}, {
			no: 2,
			itemName: '列表名称',
			fuze: '0000',
			type: "椅子"
		}, {
			no: 3,
			itemName: '列表名称',
			fuze: '0000',
			type: "椅子"
		}];
		$("#grid").jqGrid({
			data: data,
			datatype: "local",
			autowidth: !0,
			height: i.h-10,
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
					return '<a href="javascript:void(0);" class="seePurchase"><h3>' + val + '</h3><h2 class="nubAtice" style="margin-top:5px;">001002</h2></a>'
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
				label: "价格",
				width: 80,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "分配数量",
				width: 80,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "分配部门",
				width: 80,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "备注",
				width: 80,
				fixed: !1,
				align: 'left'
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#page",
			rowNum: 100,
			rowList: [100, 200, 500],
			viewrecords: !0,
			//shrinkToFit: !0,
			forceFit: !0,
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


		initTree: function() {
	
		},
		

		addEvent: function() {
             //固定资产分配查看
		$(".seePurchase").on("click", function() {
			Public.sidePanel({
				icon: 'fa-puzzle-piece',
				type: 1,
				title: '固定资产分配查看',
				content: "distribution/distribution_see.html"
			})
		});
		
		}
	};

ListPage.init();