
THISPAGE = {
	
	init:function(){
		this.createGrid();
		this.addEvent();
		this.resumebyid();
		this.interviewAdd();//面试记录
		this.offereditselect();
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,name:'张三',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'未处理'},
		    {no:2,name:'小四',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'已发OFFER'},
		    {no:3,name:'方国伟',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'未处理'},
		    {no:4,name:'刘广田',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'已发OFFER'},
		    {no:5,name:'栾艳男',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'未处理'},
		    {no:6,name:'柳闻',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'面试未通过'},
		     {no:7,name:'栾艳男',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'未处理'},
		    {no:8,name:'柳闻',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'面试未通过'},
		     {no:9,name:'栾艳男',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'未处理'},
		    {no:10,name:'柳闻',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'面试未通过'},
		    {no:11,name:'栾艳男',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'未处理'},
		    {no:12,name:'柳闻',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'面试未通过'},
		     {no:13,name:'栾艳男',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'未处理'},
		    {no:14,name:'柳闻',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'面试未通过'},
		     {no:15,name:'栾艳男',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'未处理'},
		    {no:16,name:'柳闻',sex:'男',nl:'17',xl:'本科',zw:'招聘专员',gzjy:'一年以上',phone:'15978211586',email:'15213240042@163.com',rktime:'2016-07-26',planname:'12345',stante:'面试未通过'}
		    
		];
		$("#demand_grid").jqGrid({
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
				name:"name",
				label: '姓名',
				width:90,
				fixed: !1,
				align: 'left'
			},{
				name:"sex",
				label: '性别',
				width:90,
				fixed: !1,
				align: 'left'
			},{
				name:"nl",
				label: '年龄',
				width:100,
				fixed: !1,
				align: 'left',
				hidden: !0
			},{
				name:"xl",
				label: '学历',
				width:90,
				fixed: !1,
				align: 'left'
			},{
				label: '职位',
				name: "zw",
				width: 90,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '工作经验',
				name: "gzjy",
				width: 90,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '联系电话',
				name: "phone",
				width: 150,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: 'E-mail',
				name: "email",
				width: 150,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '入库时间',
				name: "rktime",
				width: 150,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '计划名称',
				name: "planname",
				width: 150,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '状态',
				name: "stante",
				width: 150,
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
		});
	},addEvent:function(){
		$('#add_resume').click(function(){
			Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '添加',
				content: "resume/resumeAdd.html",
				ok:function(opt){
					opt.close();
				}
			});
		})
	},sex_select:function(){
		sexCom = $("#sex").combo({
			data: [{
				id: 0,
				name: "男"
			},{
				id: 1,
				name: "女"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 200,
			defaultSelected: null || 0
		}).getCombo();
	},choicecletpost:function(){
		//加载表单中的职位
	     sexCom = $("#edit_post").combo({
			data: [{
				id: 0,
				name: "请选择"
			},{
				id: 1,
				name: "美工"
			}, {
				id: 2,
				name: "数据库工程师"
			}, {
				id: 3,
				name: "java web工程师"
			}, {
				id: 4,
				name: "门卫"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 200,
			defaultSelected: null || 0
		}).getCombo();
	},choicesletplan:function(){
		//加载表单中的计划名称
	     sexCom = $("#choice_plan").combo({
			data: [{
				id: 0,
				name: "请选择"
			},{
				id: 1,
				name: "计划一"
			}, {
				id: 2,
				name: "计划二"
			}, {
				id: 3,
				name: "计划三"
			}, {
				id: 4,
				name: "计划四"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 200,
			defaultSelected: null || 0
		}).getCombo();
	},resumebyid:function(){
		$('#eidt_resumebyid').click(function(){
			var data = $("#demand_grid").jqGrid('getGridParam', 'selarrrow');
				/* 判断是否选择单选   多选和不选弹框提示*/
				if(data.length != 1) {
					alert("限须选一条数据编辑!");
				}else{
					Public.sidePanel({
						icon: 'fa-plus',
						type: 1,
						title: '修改',
						content: "resume/resumeAdd.html",
						ok:function(opt){
							opt.close();
						}
					  });
			   }
		})
	},interviewAdd:function(){
		$('#interviewbyid').click(function(){
			var data = $("#demand_grid").jqGrid('getGridParam', 'selarrrow');
				/* 判断是否选择单选   多选和不选弹框提示*/
				if(data.length != 1) {
					alert("限须选一条数据编辑!");
				}else{
					Public.sidePanel({
						icon: 'fa-plus',
						type: 1,
						title: '面试记录添加',
						content: "resume/interviewAdd.html",
						ok:function(opt){
							opt.close();
						}
					});
				}
		})
	},initDom_select:function(){
		sexCom = $("#choice_fsinteviewfsid").combo({
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
			width: 200,
			defaultSelected: null || 0
		}).getCombo();
	},offereditselect:function(){
		$('#editadd_offer').click(function(){
			var data = $("#demand_grid").jqGrid('getGridParam', 'selarrrow');
				/* 判断是否选择单选   多选和不选弹框提示*/
				if(data.length != 1) {
					alert("限须选一条数据编辑!");
				}else{
					Public.sidePanel({
						icon: 'fa-plus',
						type: 1,
						title: 'OFFER添加',
						content: "resume/offerAdd.html",
						ok:function(opt){
							opt.close();
						}
					});
				}
		})
	}
};
THISPAGE.init();


function add_filesmole(){
		Public.filesLi({
			dom: $('#uprefiles_ul'),
			data: ""
		});
   }