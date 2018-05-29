THISPAGE = {
	
	init:function(){
		this.crateGrid();
		this.addEvent();
		this.initTree();
		this.loadRight();
	},
	
	initDom:function(){
		
	},
	
	crateGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,itemName:'陈XX',fuze:'0000',beginDate:'普通用户',department:'总经办'},
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
				name:'no',
				label:"头像",
				width: 60,
				
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return '<img class="img-circle" src="../../../img/avatar.jpg" />';
				}
			},{
				name:"itemName",
				label: '姓名',
				width:150,
				display:'none',
				align: 'left',
				fixed: !1,
				formatter:function(val, opt, row){
					return '<a class="fb title" href="javascript:;" onclick="shouwItem();">'+val+'</a><br/><small class="text-muted clear text-ellipsis">管理员</small>'
				}
			},{
				name:"itemName",
				label: '姓名',
				hidden:true
			},{
				name:"fuze",
				label: '编号',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"department",
				label: '部门',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '角色',
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
	
	loadRight:function(){
		Public.grantTable({
			dom: $('#rightPanel'),
			menudata: [{
				level : 0,
				id : 1,
				name : '日常',
				img : '../../../css/images/app-oa.png',
				choose : 1
			}
			,{
				level : 0,
				id : 2,
				name : '行政',
				img : '../../../css/images/app-oa.png',
				choose : 0
			}
			,{
				level : 0,
				id : 3,
				name : '设置',
				img : '../../../css/images/app-oa.png',
				choose : 1
			}
			,{
				level : 1,
				id : 11,
				name : '项目管理',
				img : '../../../css/images/app-oa.png',
				pid : 2,
				choose : 1
			}
			,{
				level : 1,
				id : 111,
				name : '查询',
				img : '../../../css/images/app-oa.png',
				pid : 11,
				choose : 1
			}
			]
		});
	},
	
	initTree:function(){
		var defaultData = [
        {
            text: '西美产业信息',
            href: '#parent1',
            tags: ['4'],
            nodes: [
                {
                    text: '总经办',
                    href: '#child1',
                    state: {
					    selected: true
					},
                    tags: ['2'],
                    nodes: [
                        {
                            text: '行政部',
                            href: '#grandchild1',
                            tags: ['0']
                  },
                        {
                            text: '财务部',
                            href: '#grandchild2',
                            tags: ['0']
                  }
                ]
              },
                {
                    text: '不知道的部',
                    href: '#child2',
                    tags: ['0']
              }
            ]
          },
        {
            text: '市场部(28)',
            href: '#parent2',
            icon: 'glyphicon glyphicon-earphone',
            tags: ['0']
          },
        {
            text: '服务部',
            href: '#parent3',
             icon: 'glyphicon glyphicon-cloud-download',
            tags: ['0']
          },
        {
            text: '研发部',
            href: '#parent4',
             icon: 'glyphicon glyphicon-certificate',
            tags: ['0']
          },
        {
            text: '不知道的不',
            href: '#parent5',
            tags: ['0']
          }
        ];
		 $('#treeview').treeview({
	        color: "#428bca",
	        expandIcon: 'glyphicon glyphicon-chevron-right',
	        collapseIcon: 'glyphicon glyphicon-chevron-down',
	        nodeIcon: 'glyphicon glyphicon-stop',
	        selectedColor: "#76B0F3",
            selectedBackColor: "#EAF0FB",
	        data: defaultData,
	        onNodeSelected: function(event, data) {
	        	var node ;
	        	node = $('#treeview').treeview('getSelected');
			    console.info(node);
			}
	    });
	},
	
	addEvent:function(){
		$(window).resize(function() {
            Public.resizeGrid()
        });
        /*
        $('#add-cy').bind('click',function(){
        	parent.Public.openWin('page/manager/member/add.html','添加成员',600,450,function(index,layero){
        		var body = parent.layer.getChildFrame('body', index);
        		var iframeWin = parent.window[layero.find('iframe')[0]['name']];
        		iframeWin.THISPAGE.submit();
        	});
        });*/
        $('#add-bumen').bind('click',function(){
        	parent.Public.openWin('page/manager/member/addDepartment.html','添加部门',600,350,function(index,layero){
        		var body = parent.layer.getChildFrame('body', index);
        		var iframeWin = parent.window[layero.find('iframe')[0]['name']];
        		iframeWin.THISPAGE.submit();
        	});
        });
        $('#manage-grand').bind('click',function(){
        	parent.Public.openWin('page/manager/member/grant.html','授权',400,650,function(index,layero){
        		var body = parent.layer.getChildFrame('body', index);
        		var iframeWin = parent.window[layero.find('iframe')[0]['name']];
        		iframeWin.THISPAGE.submit();
        	});
        });
        
        
        $('#add-cy').bind('click',function(){
        	$.dialog({
				title : '新增客户',
				content : '<div>未实现</div>',
				data: {oper: 'add', callback: function(data, oper, dialogWin){
					//parent.getCustomer();
					//_self.customerCombo.selectByValue(data.id, false);
					//customerCombo.loadData('/basedata/contact.do?action=list', ['id', data.id]);
					if(data && data.id) {
						$_obj.data('contactInfo', data);	//存储
						$_obj.find('input').val(data.number + ' ' + data.name);	//回填数据
						parent.CONFIG.customerInfo.push(data);	//增加进缓存
						customerCombo.collapse();	//关闭下拉
					}
					dialogWin && dialogWin.api.close();
				}},
				width : 640,
				height : 156,
				max : false,
				min : false,
				cache : false,
				lock: true,
				okVal:'确定',
				ok:function(){
					
				},
				cancelVal:'取消',
				cancel:function(){
					return true;
				}
			});
        });
	},
	
	
};

THISPAGE.init();
