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
			type: "车辆"
		}, {
			no: 2,
			itemName: '列表名称',
			fuze: '0000',
			type: "车辆"
		}, {
			no: 3,
			itemName: '列表名称',
			fuze: '0000',
			type: "车辆"
		}, {
			no: 1,
			itemName: '列表名称',
			fuze: '0000',
			type: "车辆"
		}, {
			no: 2,
			itemName: '列表名称',
			fuze: '0000',
			type: "车辆"
		}, {
			no: 3,
			itemName: '列表名称',
			fuze: '0000',
			type: "车辆"
		}];
		$("#grid_pieOrder").jqGrid({
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
				label: "用车人",
				width: 70,
				fixed: !1,
				align: 'left',
				formatter: function(val, opt, row) {
					return '<a href="javascript:void(0);" class="seePieOrder"><h3>' + val + '</h3></a>'
				}
			},  {
				name: 'type',
				label: "单号",
				width: 90,
				fixed: !1,
				align: 'left'
			},{
				name: 'type',
				label: "预计时间",
				width: 190,
				fixed: !1,
				align: 'left'
			}, {
				name: "itemName",
				label: '申请时间',
				width: 120,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "使用车辆",
				width: 90,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "驾驶员",
				width: 80,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "用车性质",
				width: 80,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "状态",
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
			pager: "#page_pieOrder",
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
		
		$('.seePieOrder').click(function() {
			Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '查看',
				content: "pieOrder/pieOrder_see.html"
			});
			
		});
		
        //打印派车单
        $("#btn-sendACarPrint").on("click",function(){
			$(".wrapper").load("pieOrder/sendAcar_print.html");
		});
		
		//派车
		$("#btn-sendACar").on("click",function(){
			$(".wrapper").load("pieOrder/sendACar.html");
		});
		
		//结束派车
		$("#btn-sendACarEnd").on("click",function(){
			$(".wrapper").load("pieOrder/sendACar_end.html");
		});
		
		}
	};

ListPage.init();