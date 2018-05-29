THISPAGE = {
	
	init:function(){
		this.initDom();
//		this.createGrid();
		this.addEvent();
	},
	
	initDom:function(){
		
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,itemName:'项目名称',fuze:'0000',beginDate:'普通用户',endDate:'2016-06-30'},
		    {no:2,itemName:'信息化办公建设',fuze:'0000'},
		    {no:3,itemName:'刘CC',fuze:'0000'},
		    {no:1,itemName:'慕容XX',fuze:'0000'},
		    {no:2,itemName:'欧阳CC',fuze:'0000'},
		    {no:3,itemName:'司马CC',fuze:'0000'}
		];
		$("#grid").jqGrid({
			data: data,
			datatype: "local",
			autowidth: !0,
			height: i.h - 15,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"编号",
				width: 60,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"itemName",
				label: '项目名称',
				width:240,
				align: 'left',
				fixed: !1,
				formatter:function(val, opt, row){
					return '<a class="fb title" href="javascript:;" onclick="shouwItem();">'+val+'</a><br/><small class="text-muted clear text-ellipsis">创建于：2016-06-30</small>'
				}
			},{
				name:"fuze",
				label: '项目进度',
				width:170,
				fixed: !1,
				align: 'left',
				formatter:function(){
					return '<div class="progress" style="margin-bottom:0"><div class="progress-bar" role="progressbar" style="width:68%" ;="">88%</div></div>';
				}
			},{
				name:"beginDate",
				label: '参与人',
				width:180,
				fixed: !1,
				align: 'left',
				formatter:function(){
					return '<span class="label label-default">小花</span>&nbsp;<span class="label label-default">小王</span>';
				}
			},{
				name:"state",
				label: '状态',
				width:70,
				fixed: !1,
				align: 'left',
				formatter:function(){
					return '<span class="grann">进行中</span>';
				}
			},{
				label: '操作',
				name: "option",
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
		
	},
	
};

THISPAGE.init();