var menudata = [{
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
				pid : 15,
				choose : 1
			}
			],
THISPAGE = {
	
	init:function(){
		this.addEvent();
		this.initTree();
		this.loadRight(menudata);
	},
	
	initDom:function(){
		
	},
	
	
	loadRight:function(menudata){
		Public.grantTable({
			dom: $('#rightPanel'),
			menudata: menudata
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
                    href: 'loadGrant(1)',
                    tags: ['2'],
                    nodes: [
                        {
                            text: '行政部',
                            href: 'loadGrant(1)',
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
                	id:'1',
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
			    loadRolesGrant(data.id);
			}
	    });
	},
	
	addEvent:function(){
        
        $('#roles-grant-save').bind('click',function(){
        	var checkid = parent.Public.getGrantCheck($('#rightPanel'));
        });
        $('#roles-grant-add-roles').bind('click',function(){
        	parent.Public.openWin('page/manager/roles/add.html','添加角色',600,220,function(index,layero){
        		var body = parent.layer.getChildFrame('body', index);
        		var iframeWin = parent.window[layero.find('iframe')[0]['name']];
        		iframeWin.THISPAGE.submit();
        	});
        });
        $('#roles-grant-edit-roles').bind('click',function(){
        	parent.Public.openWin('page/manager/roles/edit.html','编辑角色',600,220,function(index,layero){
        		var body = parent.layer.getChildFrame('body', index);
        		var iframeWin = parent.window[layero.find('iframe')[0]['name']];
        		iframeWin.THISPAGE.submit();
        	});
        });
        
	}
	
	
};

THISPAGE.init();


function loadRolesGrant(id){
	console.info(id);
	THISPAGE.loadRight(menudata);
}
