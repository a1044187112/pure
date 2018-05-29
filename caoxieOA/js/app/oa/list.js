
THISPAGE = {
	
	init:function(){
		this.createGrid();
		this.addEvent();
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,itemName:'列表名称',fuze:'0000'},
		    {no:2,itemName:'列表名称',fuze:'0000'},
		    {no:3,itemName:'列表名称',fuze:'0000'},
		    {no:1,itemName:'列表名称',fuze:'0000'},
		    {no:2,itemName:'列表名称',fuze:'0000'},
		    {no:3,itemName:'列表名称',fuze:'0000'}
		];
		$("#grid").jqGrid({
			data: data,
			datatype: "local",
			autowidth: !0,
			height: i.h - 50,
			altRows: !0,
			gridview: !0,
			multiselect: !0,
			styleUI : 'Bootstrap',
			colModel:[{
				name:'no',
				label:"编号",
				width: 120,
				fixed: !1,
				align: 'center'
			},{
				name:"itemName",
				label: '名称',
				width:210,
				fixed: !1,
				align: 'left'
			},{
				name:"fuze",
				label: '负责人',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '开始日期',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"endDate",
				label: '截止日期',
				width:100,
				fixed: !1,
				align: 'center'
			},{
				name:"state",
				label: '状态',
				width:170,
				fixed: !1,
				align: 'left'
			},{
				label: '进度',
				name: "p",
				width: 190,
				fixed: !1,
				align: 'center',
				title: !1
			},{
				label: '工期预警',
				name: "w",
				width: 90,
				fixed: !1,
				align: 'center',
				title: !1
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
			shrinkToFit: !0,
			forceFit: !0,
			footerrow: !0,
			userDataOnFooter: !0,
			jsonReader: {
				root: "data.rows",
				records: "data.records",
				total: "data.total",
				userdata: "data.userdata",
				repeatitems: !1,
				id: "id"
			},
			loadComplete: function(a) {
			},
			gridComplete: function() {
			},
			loadError: function(a, b, c) {},
			ondblClickRow: function(a, b, c, d) {
			},
			resizeStop: function(a, b) {
			}
		});
	},
	
	addEvent:function(){
		$('#add').click(function(){
			Public.sidePanel({
				title: '添加',
				content: '-----------'
			});
		});
		
		$('#openWin').bind('click',function(){
			parent.Public.openWin('page/oa/form.html','表单设计页面',300,200);
		});
		
		$(window).resize(function() {
            Public.resizeGrid()
       });
	}
};

THISPAGE.init();
