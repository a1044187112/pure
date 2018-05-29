var $_form = $("#form-group-addBepartment"),
	THISPAGE = {

		init: function() {
			this.initDom($("#superiorTree"));
			this.initTree();
			this.addEvent();
			this.initValidator();
		},

		initDom: function(category) {
			var res = {
				"INFO": "",
				"STATUS": true,
				"rows": [{
					"beginDate": "",
					"endDate": "",
					"gmtCreate": {
						"date": 14,
						"day": 1,
						"hours": 15,
						"minutes": 15,
						"month": 8,
						"seconds": 34,
						"time": 1442214934000,
						"timezoneOffset": -480,
						"year": 115
					},
					"gmtModify": {
						"date": 14,
						"day": 1,
						"hours": 15,
						"minutes": 15,
						"month": 8,
						"seconds": 34,
						"time": 1442214934000,
						"timezoneOffset": -480,
						"year": 115
					},
					"id": "C14FCAB5790713FE0D49BCEF",
					"isDelete": 0,
					"name": "部门",
					"pageCount": 0,
					"pageIndex": 0,
					"pageSize": 30,
					"parentId": "0",
					"startIndex": -30,
					"targetName": "BaseGoodsType",
					"toId": "C14FBD0D719513FE0B62B0D7"
				}, {
					"beginDate": "",
					"endDate": "",
					"gmtCreate": {
						"date": 14,
						"day": 1,
						"hours": 15,
						"minutes": 17,
						"month": 8,
						"seconds": 41,
						"time": 1442215061000,
						"timezoneOffset": -480,
						"year": 115
					},
					"gmtModify": {
						"date": 14,
						"day": 1,
						"hours": 15,
						"minutes": 17,
						"month": 8,
						"seconds": 41,
						"time": 1442215061000,
						"timezoneOffset": -480,
						"year": 115
					},
					"id": "C14FCAB769B963FCBB5DD616",
					"isDelete": 0,
					"name": "办公室",
					"pageCount": 0,
					"pageIndex": 0,
					"pageSize": 30,
					"parentId": "C14FCAB5790713FE0D49BCEF",
					"startIndex": -30,
					"targetName": "BaseGoodsType",
					"toId": "C14FBD0D719513FE0B62B0D7"
				}, {
					"beginDate": "",
					"endDate": "",
					"gmtCreate": {
						"date": 14,
						"day": 1,
						"hours": 15,
						"minutes": 17,
						"month": 8,
						"seconds": 55,
						"time": 1442215075000,
						"timezoneOffset": -480,
						"year": 115
					},
					"gmtModify": {
						"date": 14,
						"day": 1,
						"hours": 15,
						"minutes": 17,
						"month": 8,
						"seconds": 55,
						"time": 1442215075000,
						"timezoneOffset": -480,
						"year": 115
					},
					"id": "C14FCAB79EB173FEC01C956B",
					"isDelete": 0,
					"name": "财务部门",
					"pageCount": 0,
					"pageIndex": 0,
					"pageSize": 30,
					"parentId": "C14FCAB5790713FE0D49BCEF",
					"startIndex": -30,
					"targetName": "BaseGoodsType",
					"toId": "C14FBD0D719513FE0B62B0D7"
				}, {
					"beginDate": "",
					"endDate": "",
					"gmtCreate": {
						"date": 14,
						"day": 1,
						"hours": 15,
						"minutes": 18,
						"month": 8,
						"seconds": 23,
						"time": 1442215103000,
						"timezoneOffset": -480,
						"year": 115
					},
					"gmtModify": {
						"date": 14,
						"day": 1,
						"hours": 15,
						"minutes": 18,
						"month": 8,
						"seconds": 23,
						"time": 1442215103000,
						"timezoneOffset": -480,
						"year": 115
					},
					"id": "C14FCAB80D7783FC59BBA9D1",
					"isDelete": 0,
					"name": "IT",
					"pageCount": 0,
					"pageIndex": 0,
					"pageSize": 30,
					"parentId": "C14FCAB5790713FE0D49BCEF",
					"startIndex": -30,
					"targetName": "BaseGoodsType",
					"toId": "C14FBD0D719513FE0B62B0D7"
				}]
			};
			//		var res = parent.CONFIG.dapartmentData;
			var w=$(".col-sm-6").width();

			var $category = category;
			var treeData = [];
			for(i = 0; i < res.rows.length; i++) {
				var o = res.rows[i];
				if(o) {
					var t = {
						id: o.id,
						name: o.name,
						parentId: o.parentId,
						typeNumber: '00'
					};
					treeData.push(t);
				}
			}
			this.categoryTree = Public.categoryTree($category, {
				data: treeData,
				width: w,
				inputWidth: 540,
				defaultSelected: null || 0,
				showRoot: !1
			});
		},

		initTree: function() {
			typeCom = $("#typeSelected").combo({
				data: [{
					id: 0,
					name: "11111111111"
				}, {
					id: 1,
					name: "2222222222"
				}, {
					id: 2,
					name: "333333333"
				}, {
					id: 3,
					name: "44444444"
				}],
				value: "id",
				text: "name",
				name: "gender",
				class: "form-control",
				defaultSelected: null || 0
			}).getCombo();
		},
		initValidator: function() {
			var $_validate = $_form.validator({
				rules: {

				},
				messages: {
					required: "请填写{0}"
				},
				fields: {
					username: "required;",
					department:"required"
				},
				display: function(t) {
					return $(t).closest(".form-group").find("label").text()
				},
				ignore: ":hidden",
				theme: "yellow_bottom",
				timely: 1,
				stopOnError: !0
			});
		},

		addEvent: function() {

		}
	};
	
	function jumpPage(){
//	alert(111);
	parent.Public.openWin('page/select/select_addDepartment.html','新增部门',480,550,function(index,layero){
				var body = parent.getChildFrame('body', index);
});
}

THISPAGE.init();