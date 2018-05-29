
THISPAGE = {
	
	init:function(){
		this.createGrid();
		this.addEvent();
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,zw:'小四',bm:'B10',rs:'在线demo',yjygsj:'15978211586',tcsj:'guowei157@163.com',ssjh:'2016-06-11',stant:'已发OFFER [2016-06-04]'},
		    {no:2,zw:'方国伟',bm:'人事部经理',rs:'行政部',yjygsj:'15978211586',tcsj:'guowei157@163.com',ssjh:'2016-06-11',stant:'已发OFFER [2016-06-04]'},
		    {no:3,zw:'刘广田',bm:'招聘专员',rs:'行政部',yjygsj:'15978211586',tcsj:'guowei157@163.com',ssjh:'2016-06-11',stant:'已发OFFER [2016-06-04]'},
		    {no:4,zw:'小三',bm:'test',rs:'行政部',yjygsj:'15978211586',tcsj:'guowei157@163.com',ssjh:'2016-06-11',stant:'已发OFFER [2016-06-04]'},
		    {no:5,zw:'罗娜',bm:'美工',rs:'行政部',yjygsj:'215978211586',tcsj:'guowei157@163.com',ssjh:'2016-06-11',stant:'未入职'},
		    {no:6,zw:'朱春颖',bm:'市场策划',rs:'行政部',yjygsj:'15978211586',tcsj:'guowei157@163.com',ssjh:'2016-06-11',stant:'未入职'},
		    {no:7,zw:'刘洋',bm:'招聘专员',rs:'行政部',yjygsj:'15978211586',tcsj:'guowei157@163.com',ssjh:'2016-06-11',stant:'未入职'},
		    
		];
		$("#offer_grid").jqGrid({
			data: data, //url
			datatype: "local", //json
			autowidth: !0,
			height: i.h - 15,
			altRows: !0,
			gridview: !0,
			multiselect: !0,
			styleUI : 'Bootstrap',
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
				width:90,
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
				label: '入职部门',
				width:100,
				fixed: !1,
				align: 'left',
				hidden: !0
			},{
				name:"yjygsj",
				label: '联系电话',
				width:90,
				fixed: !1,
				align: 'left'
			},{
				label: 'E-mail',
				name: "tcsj",
				width: 90,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '要求入职时间',
				name: "ssjh",
				width: 150,
				fixed: !1,
				align: 'left',
				title: !1
			},{
				label: '状态',
				name: "stant",
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
			pager: "#offer_page",
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
		$('#edit_offer').click(function(){
			var id = $("#offer_grid").jqGrid('getGridParam', 'selarrrow');
				/* 判断是否选择单选   多选和不选弹框提示*/
				if(id.length != 1) {
					alert("请选择一向继续编辑!");
				}else{
					Public.sidePanel({
						icon: 'fa-plus',
						type: 1,
						title: '修改',
						content: "offer/offerAdd.html",
						ok:function(opt){
							opt.close();
						}
					});
				}
		})
	}
};
THISPAGE.init();

