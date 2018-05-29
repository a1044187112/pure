THISMOVEFILEPAGE = {

	init: function() {
		this.initDom();
	},
	initDom: function() {
		Public.zTree.init($("#tree"), {
			defaultClass: "innerTree",
			showRoot: !0,
			rootTxt: "全部"
		}, {
			callback: {
				beforeClick: function(e, t) {
					/*
					$("#currentCategory").data("id", t.id).html(t.name);
					$("#search").trigger("click")*/
				}
			}
		});
		Public.zTree._callback([{
			"id": 1,
			"parentId": 0,
			"name": "网页设计"
		}, {
			"id": 5,
			"parentId": 0,
			"name": "网页设计"
		}, {
			"id": 2,
			"parentId": 1,
			"name": "网页设计",
			icon: "../../../static/images/user_y_16.png"
		}, {
			"id": 3,
			"parentId": 1,
			"name": "网页设计",
			icon: "../../../static/images/user_n_16.png"
		}, {
			"id": 4,
			"parentId": 1,
			"name": "网页设计"
		}, {
			"id": 6,
			"parentId": 5,
			"name": "网页设计"
		}]);
	},

};

//	function jumpPage(){
////	alert(111);
//	parent.Public.openWin('page/select/select_addDepartment.html','新增部门',480,550,function(index,layero){
//				var body = parent.getChildFrame('body', index);
//});
//}

THISMOVEFILEPAGE.init();