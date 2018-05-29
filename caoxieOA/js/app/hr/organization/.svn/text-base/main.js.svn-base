THISPAGE = {

	init: function() {
		this.initDom();
		this.initTree();
		this.addEvent();
	},

	initDom: function() {

	},

	initTree: function() {
		var defaultData = [{
			text: '部门信息',
			href: '#parent1',
			icon: 'glyphicon glyphicon-home',
			tags: ['4'],
			type: "部门",
			nodes: [{
				text: '行政部门',
				href: '#child1',
				icon: 'glyphicon glyphicon-home',
				tags: ['3'],
				type: "部门",
				nodes: [{
					text: '办公室',
					href: '#child1',
					type: "部门",
					tags: ['0']
				}, {
					text: '人事部',
					href: '#child1',
					type: "部门",
					tags: ['0']
				}, {
					text: '信息部',
					href: '#child1',
					type: "部门",
					tags: ['0']
				}]
			}, {
				text: '财务部门',
				href: '#child2',
				icon: 'glyphicon glyphicon-home',
				tags: ['2'],
				type: "部门",
				nodes: [{
					text: '财务部',
					href: '#child1',
					type: "部门",
					tags: ['0']
				}, {
					text: '采购部',
					href: '#child2',
					type: "部门",
					tags: ['0']
				}]
			}, {
				text: 'IT',
				href: '#child3',
				icon: 'glyphicon glyphicon-home',
				tags: ['3'],
				type: "部门",
				nodes: [{
					text: '后端工程师',
					href: '#child1',
					type: "部门",
					tags: ['0']
				}, {
					text: '前端开发师',
					href: '#child2',
					type: "部门",
					tags: ['0']
				}, {
					text: 'ui设计师',
					href: '#child3',
					type: "部门",
					tags: ['0']
				}]
			}, {
				text: '后勤部门',
				href: '#child4',
				icon: 'glyphicon glyphicon-home',
				type: "部门",
				tags: ['3'],
				nodes: [{
					text: '卫生部',
					href: '#child1',
					type: "部门",
					tags: ['0']
				}, {
					text: '保卫室',
					href: '#child2',
					type: "部门",
					tags: ['0']
				}, {
					text: '维护部',
					href: '#child3',
					type: "部门",
					tags: ['0']
				}]
			}]
		}, {
			text: '岗位信息',
			href: '#parent2',
			icon: 'glyphicon glyphicon-user',
			tags: ['3'],
			nodes: [{
				text: '我的岗位',
				href: '#child1',
				tags: ['0']
			}, {
				text: '我的岗位2',
				href: '#child2',
				tags: ['0']
			}, {
				text: '成员岗位',
				href: '#child3',
				tags: ['0']
			}]
		}];
		$('#treeview').treeview({
			color: "#428bca",
			expandIcon: 'glyphicon glyphicon-chevron-right',
			collapseIcon: 'glyphicon glyphicon-chevron-down',
			nodeIcon: 'glyphicon glyphicon-stop',
			selectedColor: "#666666",
			selectedBackColor: "#E6E6E6",
			data: defaultData
		});

		$("#showPage").load("department.html");
		$('#treeview').on('nodeSelected', function(even, data) {
			$("#COMBO_WRAP").remove();
			$(".ztree").remove();
			if(data.type === "部门") {
				joupPage("department.html", data);
			} else {
				joupPage("position.html", data);
			}

		});
	},

	addEvent: function() {

	}
};

function joupPage(url, data) {

	$("#showPage").load(url);

	//进行页面input的赋值
	if(url === "department.html") {
		setTimeout(function() {
			$("#tryTest").val(data.text);
		}, 100);
	} else {
		setTimeout(function() {
			$(".psotName").val(data.text);
		}, 100);
	}

}
THISPAGE.init();