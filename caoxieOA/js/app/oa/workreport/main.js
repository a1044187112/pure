THISPAGE = {
	
	init:function(){
		this.initDom();
		this.addEvent();
	},
	
	initDom:function(){
		$("#tab-right").load("main_day.html");
		this.initTree();
	},
	
	initTree:function(){
		var defaultData = [
        {
            text: '日报',
            href: '#parent1',
            tags: ['4'],
            nodes: [
                {
                    text: '我的日报',
                    href: '#child1',
                    tags: ['2']
              },{
                    text: '我的评审',
                    href: '#child2',
                    tags: ['0']
              },{
                    text: '成员日报',
                    href: '#child2',
                    tags: ['0']
              }
            ]
          },
        {
            text: '周报',
            href: '#parent2',
            tags: ['0'],
            nodes: [
                {
                    text: '我的周报',
                    href: '#child1',
                    tags: ['2']
              },{
                    text: '我的评审',
                    href: '#child2',
                    tags: ['0']
              },{
                    text: '成员周报',
                    href: '#child2',
                    tags: ['0']
              }
            ]
          },
        {
            text: '月报',
            href: '#parent3',
            icon: 'glyphicon glyphicon-cloud-download',
            tags: ['0'],
            nodes: [
                {
                    text: '我的月报',
                    href: '#child1',
                    tags: ['2']
              },{
                    text: '我的评审',
                    href: '#child2',
                    tags: ['0']
              },{
                    text: '成员月报',
                    href: '#child2',
                    tags: ['0']
              }
            ]
          },
        {
            text: '简报统计',
            href: '#parent5',
            icon: 'glyphicon glyphicon-certificate',
            tags: ['0']
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
	
	
	
	addEvent:function(){
		$('#tes').bind('click',function(){
			$("#tab-right").load("main_day.html");
        });
	}
};

THISPAGE.init();
