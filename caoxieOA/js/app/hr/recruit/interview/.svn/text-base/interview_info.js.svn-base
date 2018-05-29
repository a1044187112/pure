
THISPAGE = {
	
	init:function(){
		this.createGrid();
	/*	this.addEvent();*/
		this.edit_interviewbyid();
		this.editrend_offer();
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:2,zw:'张三',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:3,zw:'李四',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:4,zw:'刘广田',bm:'技术员',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:5,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:6,zw:'方国伟',bm:'技术员',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:7,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:8,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:9,zw:'方国伟',bm:'技术员',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:10,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:11,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:12,zw:'方国伟',bm:'技术员',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:13,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:14,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:15,zw:'方国伟',bm:'技术员',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:16,zw:'方国伟',bm:'技术员',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:17,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:18,zw:'方国伟',bm:'人事部经理',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀；推理判断能力弱'},
		    {no:19,zw:'方国伟',bm:'技术员',rs:'面试',yjygsj:'2016-08-12',tcsj:'举止、逻辑思维、专业知识考察',ssjh:'技术水平优秀'}
		    
		];
		$("#interview_grid").jqGrid({
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
					return '<span class="badge '+cal+'">'+val+'</span>';
				}
			},{
				name:"zw",
				label: '姓名',
				width:60,
				fixed: !1,
				align: 'left'
			},{
				name:"bm",
				label: '职位',
				width:90,
				fixed: !1,
				align: 'left'
			},{
				name:"rs",
				label: '方式',
				width:100,
				fixed: !1,
				align: 'left',
				hidden: !0
			},{
				name:"yjygsj",
				label: '面试时间',
				width:90,
				fixed: !1,
				align: 'left'
			},{
				label: '面试内容',
				name: "tcsj",
				width: 150,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '意见',
				name: "ssjh",
				width: 200,
				fixed: !1,
				align: 'left',
				title: !1
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#interview_page",
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
	/*},addEvent:function(){
		$('#add_interview').click(function(){
			Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '添加',
				content: "interview/interviewAdd.html",
				ok:function(opt){
					opt.close();
				}
			});
		})*/
	},initDom_select:function(){
		sexCom = $("#choice_inteviewfsid").combo({
			data: [{
				id: 0,
				name: "请选择"
			},{
				id: 1,
				name: "面试"
			}, {
				id: 2,
				name: "笔试"
			}, {
				id: 3,
				name: "电话"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 250,
			defaultSelected: null || 0
		}).getCombo();
	},edit_interviewbyid:function(){
		$('#edit_interviewbyid').click(function(){
			var data = $("#interview_grid").jqGrid('getGridParam', 'selarrrow');
				/* 判断是否选择单选   多选和不选弹框提示*/
				if(data.length != 1) {
					alert("请选择一向继续编辑!");
				}else{
					Public.sidePanel({
						icon: 'fa-plus',
						type: 1,
						title: '修改',
						content: "interview/interviewEdit.html",
						ok:function(opt){
							opt.close();
						}
					  });
			   }
		})
	},editrend_offer:function(){
		$('#editrend_offer').click(function(){
			var data = $("#interview_grid").jqGrid('getGridParam', 'selarrrow');
				/* 判断是否选择单选   多选和不选弹框提示*/
				if(data.length != 1) {
					alert("请选择一向继续编辑!");
				}else{
					Public.sidePanel({
						icon: 'fa-plus',
						type: 1,
						title: '发送OFFER信息',
						content: "interview/offerSend.html",
						ok:function(opt){
							opt.close();
						}
					  });
			   }
		})
	}
	
	
};
THISPAGE.init();

