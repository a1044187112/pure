THISPAGE = {
	
	init:function(){
		this.createGrid();
		this.createGrid1();
		this.createGrid2();
		this.createGrid3();
	},
	//培训计划下的数据
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,titleName:'培训实施1',content:'培训的内容如下，html，css，java',beginDate:'普通用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施2',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'通过',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施3',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未通过',approvalOpinion:'还行还行还行'},
		    {no:1,titleName:'培训实施4',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施5',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施6',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'}
		];
		$("#course1_grid").jqGrid({
			data: data,
			datatype: "local",
			width: i.w-220,
			height: i.h-60,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"课程名称",
				width: 100,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"titleName",
				label: '课程类别',
				width:110,
				align: 'left',
				fixed: !1
			},{
				name:"content",
				label: '说明',
				width:420,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '课时（小时）',
				width:200,
				fixed: !1,
				align: 'left'
			},{
				name:"approval",
				label: '文件',
				width:200,
				fixed: !1,
				align: 'left'
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#course1_page",
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
		}).trigger('reloadGrid');
	},
	
	createGrid1:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,titleName:'培训实施111111',content:'培训的内容如下，html，css，java',beginDate:'普通用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施211111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'通过',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施31111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未通过',approvalOpinion:'还行还行还行'},
		    {no:1,titleName:'培训实施4111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施511',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施611',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'}
		];
		$("#course2_grid").jqGrid({
			data: data,
			datatype: "local",
			width: i.w-220,
			height: i.h-60,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"课程名称",
				width: 100,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"titleName",
				label: '课程类别',
				width:110,
				align: 'left',
				fixed: !1
			},{
				name:"content",
				label: '说明',
				width:420,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '课时（小时）',
				width:200,
				fixed: !1,
				align: 'left'
			},{
				name:"approval",
				label: '文件',
				width:200,
				fixed: !1,
				align: 'left'
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#course2_page",
			rowNum: 200,
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
		}).trigger('reloadGrid');
	},
	createGrid2:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,titleName:'培训实施2222',content:'培训的内容如下，html，css，java',beginDate:'普通用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施22222',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'通过',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施32222',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未通过',approvalOpinion:'还行还行还行'},
		    {no:1,titleName:'培训实施42222',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施5222',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施622',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'}
		];
		$("#course3_grid").jqGrid({
			data: data,
			datatype: "local",
			width: i.w-220,
			height: i.h-60,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"课程名称",
				width: 100,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"titleName",
				label: '课程类别',
				width:110,
				align: 'left',
				fixed: !1
			},{
				name:"content",
				label: '说明',
				width:420,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '课时（小时）',
				width:200,
				fixed: !1,
				align: 'left'
			},{
				name:"approval",
				label: '文件',
				width:200,
				fixed: !1,
				align: 'left'
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#course3_page",
			rowNum: 200,
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
		}).trigger('reloadGrid');
	},
	
	createGrid3:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,titleName:'培训实施13333',content:'培训的内容如下，html，css，java',beginDate:'普通用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施23333',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'通过',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施33333',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未通过',approvalOpinion:'还行还行还行'},
		    {no:1,titleName:'培训实施4333',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施5333',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施6333',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'}
		];
		$("#course4_grid").jqGrid({
			data: data,
			datatype: "local",
			width: i.w-220,
			height: i.h-60,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"课程名称",
				width: 100,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"titleName",
				label: '课程类别',
//				width:110,
				align: 'left',
				fixed: !1
			},{
				name:"content",
				label: '说明',
//				width:320,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '课时（小时）',
//				width:200,
				fixed: !1,
				align: 'left'
			},{
				name:"approval",
				label: '文件',
				width:200,
				fixed: !1,
				align: 'left'
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#course4_page",
			rowNum: 200,
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
		}).trigger('reloadGrid');
	},
};

THISPAGE.init();