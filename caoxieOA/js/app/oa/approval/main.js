
THISPAGE = {
	
	init:function(){
		this.initDom();
		this.initTree();
		this.createGrid();
		this.addEvent();
	},
	
	initDom:function(){
		this.$_type = $('#type');
		this.com_type = this.$_type.combo({
			data:[{
				id:'0',
				name: '分类'
			},{
				id:'1',
				name: '未读'
			},{
				id:'2',
				name: '新反馈'
			},{
				id:'3',
				name: '以查阅'
			}],
			value: "id",
			text: "name",
			width: 110,
			defaultSelected: null || 0
		}).getCombo();
	},
	
	initTree:function(){
		var defaultData = [
        {
            text: '审批',
            href: '#parent1',
            tags: ['4'],
            nodes: [
                {
                    text: '待办审批',
                    href: '#child1',
                    tags: ['2']
              },{
                    text: '我提交的审批',
                    href: '#child2',
                    tags: ['0']
              },{
                    text: '已办审批',
                    href: '#child2',
                    tags: ['0']
              },{
                    text: '全部审批',
                    href: '#child2',
                    tags: ['0']
              }
            ]
          },
        {
            text: '统计',
            href: '#parent2',
            tags: ['0'],
            nodes: [{
                    text: '审批申请统计',
                    href: '#child2',
                    tags: ['0']
              },{
                    text: '审批综合统计',
                    href: '#child2',
                    tags: ['0']
              }
            ]
         }
        ];
		 $('#treeview').treeview({
	        color: "#428bca",
	        expandIcon: 'glyphicon glyphicon-chevron-right',
	        collapseIcon: 'glyphicon glyphicon-chevron-down',
	        nodeIcon: 'glyphicon glyphicon-stop',
	        selectedColor: "#666666",
            selectedBackColor: "#E6E6E6",
	        data: defaultData
	    });
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,itemName:'陈XX',fuze:'0000',beginDate:'普通用户',endDate:'2016-06-30'},
		    {no:2,itemName:'扬XX',fuze:'0000'},
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
				name:"itemName",
				label: '名称',
				width:280,
				align: 'left',
				fixed: !1,
				formatter:function(val, opt, row){
					return '<a class="fb title" href="javascript:;" onclick="shouwItem();">'+val+'</a><br/><small class="text-muted clear text-ellipsis">管理员</small>'
				}
			},{
				name:"fuze",
				label: '审核部门',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '提交时间',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"state",
				label: '状态',
				width:170,
				fixed: !1,
				align: 'left'
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
		var self = this;
		$('#add').click(function(){
			self.sidePanel = Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				closeBtn: 1,
				title: '提交审批',
				content: "addNav.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: ""
					});
				}
			}).getPanel();
		});
	}
};

THISPAGE.init();