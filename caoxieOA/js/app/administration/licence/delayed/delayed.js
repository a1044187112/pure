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
			itemName: '证照',
			fuze: '0000',
			type: "证照"
		}, {
			no: 2,
			itemName: '证照',
			fuze: '0000',
			type: "证照"
		}, {
			no: 3,
			itemName: '证照',
			fuze: '0000',
			type: "证照"
		}, {
			no: 1,
			itemName: '证照',
			fuze: '0000',
			type: "证照"
		}, {
			no: 2,
			itemName: '证照',
			fuze: '0000',
			type: "证照"
		}, {
			no: 3,
			itemName: '证照',
			fuze: '0000',
			type: "证照"
		}];
		$("#grid_insurance").jqGrid({
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
				label: "证照名称",
				width: 70,
				fixed: !1,
				align: 'left',
				formatter: function(val, opt, row) {
					return '<a href="javascript:void(0);" class="seeAccident">' + val + '</a>'
				}
			}, {
				name: 'type',
				label: "证照编号",
				width: 190,
				fixed: !1,
				align: 'left'
			}, {
				name: "itemName",
				label: '发证日期',
				width: 120,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "有效期至",
				width: 190,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "办证机构",
				width: 80,
				fixed: !1,
				align: 'left'
			}, {
				name: 'type',
				label: "延期说明",
				width: 80,
				fixed: !1,
				align: 'left'
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#page_insurance",
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
			
         
         $("#btn-accidentEidt").on("click",function(){
         	parent.Public.openWin('page/administration/licence/delayed/delayed_add.html', '证照延期', 640, 480, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
         });
         
         $('.seeAccident').click(function() {
			Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '查看',
				content: "delayed/delayed_see.html"
			});
			
		})
		
		}
	};

ListPage.init();