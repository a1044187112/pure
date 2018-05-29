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
		    {no:1,titleName:'sssss',content:'培训的内容如下，html，css，java',beginDate:'普通用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施2',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'通过',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施3',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未通过',approvalOpinion:'还行还行还行'},
		    {no:1,titleName:'培训实施4',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施5',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施6',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'}
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
				width: 50,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"titleName",
				label: '标题',
				width:150,
				align: 'left',
				fixed: !1,
				formatter:function(val,opt,row){
					return '<a class="line" href="javascript:;" onclick="openAddForm();">'+val+'</a>';
				}
			},{
				name:"content",
				label: '培训讲师',
				width:100,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '培训课程',
				width:150,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '培训内容',
				width:150,
				fixed: !1,
				align: 'left'
			},{
				name:"approval",
				label: '审批人',
				width:80,
				fixed: !1,
				align: 'left'
			},{
				label: '审批时间',
				name: "approvalOpinion",
				width: 100,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '审批结果',
				name: "approvalOpinion",
				width: 80,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '文件',
				name: "approvalOpinion",
				width: 100,
				fixed: !1,
				align: 'left',
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
		$("#grid1").jqGrid({
			data: data,
			datatype: "local",
			autowidth: !0,
			height: 500,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"编号",
				width: 120,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"titleName",
				label: '课程名称',
				width:120,
				align: 'left',
				fixed: !1
			},{
				name:"content",
				label: '课程分类',
				width:270,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '说明',
				width:200,
				fixed: !1,
				align: 'left'
			},{
				name:"approval",
				label: '小时',
				width:140,
				fixed: !1,
				align: 'left'
			},{
				label: '文件',
				name: "approvalOpinion",
				width: 180,
				fixed: !1,
				align: 'left',
				title: !1
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#page1",
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
		    {no:1,titleName:'培训实施111111',content:'培训的内容如下，html，css，java',beginDate:'普通用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施211111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'通过',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施31111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未通过',approvalOpinion:'还行还行还行'},
		    {no:1,titleName:'培训实施4111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},


		];
		$("#grid2").jqGrid({
			data: data,
			datatype: "local",
			autowidth: !0,
			height: 190,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"编号",
				width: 50,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"titleName",
				label: '培训讲师',
				width:100,
				align: 'left',
				fixed: !1
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#page2",
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
		    {no:1,titleName:'培训实施111111',content:'培训的内容如下，html，css，java',beginDate:'普通用户',approval:'未审批',approvalOpinion:'还行还行还行'},
		    {no:2,titleName:'培训实施211111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'通过',approvalOpinion:'还行还行还行'},
		    {no:3,titleName:'培训实施31111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未通过',approvalOpinion:'还行还行还行'},
		    {no:1,titleName:'培训实施4111',content:'培训的内容如下，html，css，java',beginDate:'用户',approval:'未审批',approvalOpinion:'还行还行还行'},


		];
		$("#gridLecturer").jqGrid({
			data: data,
			datatype: "local",
			autowidth: !0,
			height: 190,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"编号",
				width: 50,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return val;
				}
			},{
				name:"titleName",
				label: '培训讲师',
				width:90,
				align: 'left',
				fixed: !1,
				editable : true
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#pageLecturer",
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
	}
};

THISPAGE.init();