THISPAGE = {
	
	init:function(){
		this.initDom();
		this.createGrid();
		this.addEvent();
		$(".noborder-warp").load("myMeet/myMeet.html");
	},
	
	initDom:function(){
		this.$_driveDate = $("#crTime").val('2015-01-01');
        this.$_driveDate.datepicker();
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
				label:"名称",
				width: 100,
				fixed: !1,
				align: 'left'
			},{
				name:'type',
				label:"会议类型",
				width: 90,
				fixed: !1,
				align: 'left'
			},{
				name:"itemName",
				label: '会议主题',
				width:110,
				fixed: !1,
				align: 'left'
			},{
				name:"date",
				label: '开始时间',
				width:100,
				fixed: !1,
				align: 'center'
			},{
				name:"position",
				label: '参会人员',
				width:170,
				fixed: !1,
				align: 'left'
			},{
				label: '会议状态',
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
		// 新建会议按钮点击事件
		THISPAGE.newMeetingBtnClick();
	},
	newMeetingBtnClick : function(){
		$(".new_meet_btn").click(function(){
			var sidePanel_obj = new  Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '会议申请',
				width:850,
				autoClose: true,
				content: "newMeet/newMeeting.html",
				ok:function(obj){
					ADDPAGE.submit();
				}
			})
		});
	},
};
THISPAGE.init();