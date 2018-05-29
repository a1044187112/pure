var addint=0;
THISPAGE = {
	
	init:function(){
		this.createGrid();
		this.addEvent();
		this.initDom_select();
		this.edit_demandbyid();
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,zw:'前台招聘',bm:'网络',rs:'3',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:2,zw:'美工',bm:'网络',rs:'10',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:3,zw:'专员招聘',bm:'网络',rs:'4',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:4,zw:'招聘技术员',bm:'网络',rs:'2',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:5,zw:'招聘10人',bm:'网络',rs:'7',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:6,zw:'前台接待',bm:'网络',rs:'12',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:7,zw:'前台接待',bm:'网络',rs:'3',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:8,zw:'前台接待',bm:'网络',rs:'4',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:9,zw:'前台接待',bm:'网络',rs:'5',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:10,zw:'前台接待',bm:'网络',rs:'3',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:11,zw:'前台接待',bm:'网络',rs:'9',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'},
		    {no:12,zw:'前台接待',bm:'网络',rs:'7',yjygsj:'2016-06-30至2016-07-30',ssjh:'已发布'}
		    
		];
		$("#plan_grid").jqGrid({
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
				label:"编号",
				width: 40,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return '<span class="badge '+cal+'">'+val+'</span>';
				}
			},{
				name:"zw",
				label: '计划名称',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"bm",
				label: '招聘渠道',
				width:100,
				fixed: !1,
				align: 'left'
			},{
				name:"rs",
				label: '人数',
				width:100,
				fixed: !1,
				align: 'left',
				hidden: !0
			},{
				name:"yjygsj",
				label: '用工时间',
				width:150,
				fixed: !1,
				align: 'left'
			},{
				label: '状态',
				name: "ssjh",
				width: 80,
				fixed: !1,
				align: 'left',
				title: !1
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#plan_page",
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
		$('#add_demand').click(function(){
			Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '添加',
				content: "plan/planAdd.html",
				ok:function(opt){
					opt.close();
				}
			});
		})
	},initDom_select:function(){
		sexCom = $("#seach_stant").combo({
			data: [{
				id: 0,
				name: "全部"
			},{
				id: 1,
				name: "未通过审批"
			}, {
				id: 2,
				name: "未提交"
			}, {
				id: 3,
				name: "审批中"
			}, {
				id: 4,
				name: "已发布"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 150,
			defaultSelected: null || 0
		}).getCombo();
	},deletrid:function(obj){
		//删除表单tr
		event.stopPropagation();
	    $("#reruit_trid"+obj.id).remove();
	    THISPAGE.poptotal();
	},loadselectbume:function(t){
		//加载表单中的部门
	     sexCom = $("#add_bumen"+t).combo({
			data: [{
				id: 0,
				name: "请选择"
			},{
				id: 1,
				name: "总经办"
			}, {
				id: 2,
				name: "IT部"
			}, {
				id: 3,
				name: "业务部"
			}, {
				id: 4,
				name: "企业服务部"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 100,
			defaultSelected: null || 0
		}).getCombo();
	/*		var res = {"INFO":"","STATUS":true,"rows":[{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":34,"time":1442214934000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":34,"time":1442214934000,"timezoneOffset":-480,"year":115},"id":"C14FCAB5790713FE0D49BCEF","isDelete":0,"name":"成品","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":43,"time":1442214943000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":43,"time":1442214943000,"timezoneOffset":-480,"year":115},"id":"C14FCAB59C3923FD9A91AA4B","isDelete":0,"name":"半成品","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":58,"time":1442214958000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":58,"time":1442214958000,"timezoneOffset":-480,"year":115},"id":"C14FCAB5D46F33FEEA5E82CC","isDelete":0,"name":"包装用品","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":16,"month":8,"seconds":15,"time":1442214975000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":16,"month":8,"seconds":15,"time":1442214975000,"timezoneOffset":-480,"year":115},"id":"C14FCAB6161F43FC4DA20F6F","isDelete":0,"name":"配件","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":3,"time":1442215023000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":3,"time":1442215023000,"timezoneOffset":-480,"year":115},"id":"C14FCAB6D55053FE24E8459B","isDelete":0,"name":"原材料","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":41,"time":1442215061000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":41,"time":1442215061000,"timezoneOffset":-480,"year":115},"id":"C14FCAB769B963FCBB5DD616","isDelete":0,"name":"智能手机","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"C14FCAB5790713FE0D49BCEF","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":55,"time":1442215075000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":55,"time":1442215075000,"timezoneOffset":-480,"year":115},"id":"C14FCAB79EB173FEC01C956B","isDelete":0,"name":"功能手机","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"C14FCAB5790713FE0D49BCEF","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":18,"month":8,"seconds":23,"time":1442215103000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":18,"month":8,"seconds":23,"time":1442215103000,"timezoneOffset":-480,"year":115},"id":"C14FCAB80D7783FC59BBA9D1","isDelete":0,"name":"座充","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"C14FCAB5790713FE0D49BCEF","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"}]};
		var $category = "add_bumen"+t;
    	var treeData = [];
    	for(i = 0;i <  res.rows.length;i++){
			var o = res.rows[i];
			if(o){
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
    		width: 540,
            inputWidth: 540,
            defaultSelected: null || 0,
            showRoot: !1
    	});*/
	},choicecletpost:function(t){
		//加载表单中的职位
	     sexCom = $("#add_post"+t).combo({
			data: [{
				id: 0,
				name: "请选择"
			},{
				id: 1,
				name: "美工"
			}, {
				id: 2,
				name: "数据库工程师"
			}, {
				id: 3,
				name: "java web工程师"
			}, {
				id: 4,
				name: "门卫"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 100,
			defaultSelected: null || 0
		}).getCombo();
	},addpost_reruitchoiceid:function(){
		addint++;
		var htm='<tr id="reruit_trid'+addint+'"><td class="table_td_wid"> <span id="add_bumen'+addint+'"></span></td>'+
				'<td class="table_td_wid"> <span id="add_post'+addint+'" </td>'+
				'<td class="table_td_wid"> <input type="text"  class="ui-input plan_choice_ren_td_input input_edit" name="name"  id="renshu'+addint+'"  onchange="THISPAGE.poptotal();"  value="1" onKeyUp="clearNoNum_esfz(event,this)" onBlur="checkNum_esfz(this)"> </td>'+
				'<td class="table_td_wid"> <textarea readonly="readonly" class="xuqiu_t" name="name" id="edittextarea'+addint+'"  onclick=\'THISPAGE.copyxuqiu("edittextarea'+addint+'");\'  ></textarea> </td>'+
				'<td class="table_td_wid_bj"  style="color:red;"><a  onclick=\'THISPAGE.deletrid(this);\' id="'+addint+'" href="javascript:void(0);">删除</a></td></tr >';
		$("#addpost_reruitchoice_table").append(htm);
		THISPAGE.loadselectbume(addint);
		THISPAGE.choicecletpost(addint);
		THISPAGE.poptotal();
	},poptotal:function(){
		var total=0;
		for(var i=1;i<=addint;i++){
			if(document.getElementById("renshu"+i)!=null){
				var rs=$("#renshu"+i).val();
				if(rs.length>0){
					$("#renshu"+i).val(parseInt(rs))
					total +=parseInt(rs);
				}
			}
		}
		$("#rstatol_hjid").val(total);
	},copyxuqiu:function(id){
		copyvalue_id=id;
		parent.Public.openWin('page/hr/recruit/plan/copyvalue.html','职位需求描述',500,400,function(index,layero){
			var iframeWin = parent.window[layero.find('iframe')[0]['name']];
			iframeWin.copyxuqiu();
		});
	},edit_demandbyid:function(){
		$('#edit_demandbyid').click(function(){
			var id = $("#plan_grid").jqGrid('getGridParam', 'selarrrow');
				/* 判断是否选择单选   多选和不选弹框提示*/
				if(id.length != 1) {
					alert("请选择一向继续编辑!");
				}else{
					Public.sidePanel({
						icon: 'fa-plus',
						type: 1,
						title: '修改',
						content: "plan/planAdd.html",
						ok:function(opt){
							opt.close();
						}
					  });
			   }
		})
	}
};
THISPAGE.init();

function clearNoNum_esfz(event,obj){ 
        //响应鼠标事件，允许左右方向键移动 
    event = window.event||event; 
    if(event.keyCode == 37 | event.keyCode == 39){ 
        return; 
    } 
    //先把非数字的都替换掉，除了数字和. 
    obj.value = obj.value.replace(/[^\d.]/g,""); 
    //必须保证第一个为数字而不是. 
    obj.value = obj.value.replace(/^\./g,""); 
    //保证只有出现一个.而没有多个. 
    obj.value = obj.value.replace(/\.{2,}/g,"."); 
    //保证.只出现一次，而不能出现两次以上 
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
} 
function checkNum_esfz(obj){ 
    //为了去除最后一个. 
    obj.value = obj.value.replace(/\.$/g,""); 
} 
var copyvalue_id="";
function copyvalue(value){
	$("#"+copyvalue_id).val(value);
}


