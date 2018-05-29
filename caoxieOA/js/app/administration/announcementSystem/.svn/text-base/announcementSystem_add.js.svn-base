 var add=0;//计id
var $_form = $("#manage-form_announcementSystem");
ADDPAGE = {

		init: function() {
			this.initDom($("#superiorTree"));
			this.initTree();
			this.addEvent();
			this.initValidator();
		},

		initDom: function(category) {
			toolbar = ['title','bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'indent', 'outdent', 'alignment','|','ol', 'ul', 'blockquote', '|','image', 'table','link', 'hr','code', 'markdown','emoji','fullscreen'];
			this.editor = new Simditor({
                textarea: $('#note'),
                placeholder: '这里输入文字...',
                toolbar: toolbar,
                emoji:{
                	imagePath: '../../../img/emoji/'
                },
                upload:{
                	url: '',
                	params: null,
                	fileKey: 'fileDataFileName',
                	connectionCount: 3,
                	leaveConfirm: '正在上传文件'
                }
                //defaultImage: 'img/a9.jpg'
            });
            this.editor.setValue('<h1>一、管理制度</h1><p>管理制度内容</p><h1>二、节点赋值</h1><p>代码客户</p>');
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
			setTimeout(function(){
				var w=$("#addSpan").width();
			    this.categoryTree = Public.categoryTree($category, {
				data: treeData,
				width: w,
				inputWidth: 170,
				defaultSelected: null || 0,
				showRoot: !1
			});
			},100)			
			
			 this.$_driveDate = $("#crTime").val('2015-01-01');
             this.$_driveDate.datepicker();
           
		},

		initTree: function() {
			
		},
		initValidator: function() {
			var $_validate = $_form.validator({
				rules: {

				},
				messages: {
					required: "请填写{0}"
				},
				fields: {
					name: "required;",
					centen:"required"
				},
				display: function(t) {
					return $(t).closest(".ctn-wrap").find(".ui-input").text();
				},
				ignore: ":hidden",
				theme: "yellow_bottom",
				timely: 5,
				stopOnError: !0
			});
		},
		
		submit:function(){
			console.log(this.editor.getValue());
			alert(this.editor.getValue());
		},

		addEvent: function() {
            
		}
	};

ADDPAGE.init();