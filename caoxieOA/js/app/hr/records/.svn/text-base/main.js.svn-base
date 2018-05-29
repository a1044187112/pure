THISPAGE = {
	
	init:function(){
		this.initDom();
		this.createGrid();
		this.addEvent();
	},
	
	initDom:function(){
		this.$_matchCon = $("#matchCon");
		this.$_beginDate = $("#beginDate").val('2015-01-01');
        this.$_endDate = $("#endDate").val('2015-01-01');
        this.$_matchCon.placeholder();
        this.$_beginDate.datepicker();
        this.$_endDate.datepicker();
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {record_code:1,name:'张三',gender:'男',department:'技术部',position:'工程师',user_code:'0100',card_code:'5221321...',in_work_date:'2014.12.03'},
		    {record_code:2,name:'李四',gender:'男',department:'技术部',position:'工程师',user_code:'0100',card_code:'5221321...',in_work_date:'2014.12.03'},
		    {record_code:3,name:'飒飒',gender:'女',department:'技术部',position:'工程师',user_code:'0100',card_code:'5221321...',in_work_date:'2014.12.03'},
		    {record_code:4,name:'宝宝',gender:'女',department:'技术部',position:'工程师',user_code:'0100',card_code:'5221321...',in_work_date:'2014.12.03'},
		    {record_code:5,name:'丝丝',gender:'女',department:'技术部',position:'工程师',user_code:'0100',card_code:'5221321...',in_work_date:'2014.12.03'},
		    {record_code:6,name:'小时',gender:'女',department:'技术部',position:'工程师',user_code:'0100',card_code:'5221321...',in_work_date:'2014.12.03'}
		];
		$("#grid").jqGrid({
			data: data, //url
			datatype: "local", //json
			autowidth: !0,
			height: i.h - 15,
			altRows: !0,
			gridview: !0,
			multiselect: !0,
			styleUI : 'Bootstrap',
			colModel:[{
				name:'record_code',
				label:"档案编号",
				width: 50,
				fixed: !1,
				align: 'left'
			},{
				name:"name",
				label: '姓名',
				width:49,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					return '<a class="line" href="javascript:;" onclick="openrecord();">'+val+'</a>'
				}
			},{
				name:"gender",
				label: '性别',
				width:40,
				fixed: !1,
				align: 'left'
			},{
				name:"department",
				label: '部门',
				width:80,
				fixed: !1,
				align: 'left'
			},{
				name:"position",
				label: '职位',
				width:80,
				fixed: !1,
				align: 'left'
			},{
				name: "user_code",
				label: '员工工号',
				width: 100,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				name: "card_code",
				label: '身份证号',
				width: 100,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				name: "in_work_date",
				label: '入职时间',
				width: 97,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				name: "birthday",
				label: '出生日期',
				width: 97,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				name: "native",
				label: '籍贯',
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
			footerrow: !1,
			userDataOnFooter: !1,
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
		
		$('#add').bind('click',function(){
			parent.Public.openWin('page/hr/records/add.html','添加员工1',1100,600,function(index,layero){
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];
				
			});
		});
		$('#openWin').bind('click',function(){
			alert(111);
			var trye=$('#grid').jqGrid('getGridParam','selrow');
			console.log(trye);
		});
		
		$(window).resize(function() {
            Public.resizeGrid()
       });
	}
};

/*员工信息查看*/
function openrecord(){
	parent.Public.openWin('page/hr/records/message.html','员工信息',900,600,function(index,layero){
				var body = parent.getChildFrame('body', index);
//				var iframeWin = window[layero.find('iframe')[0]['name']];
				
			},1);
}
THISPAGE.init();