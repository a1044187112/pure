var iframe = parent.document.getElementById('home_iframe').contentWindow;

var menudata = [
			{
				level : 0,
				id : 1,
				name : '日常',
				img : '../../../css/images/app-oa.png',
			}
			,{
				level : 0,
				id : 2,
				name : '行政',
				img : '../../../css/images/app-oa.png',
			}
			,{
				level : 0,
				id : 3,
				name : '设置',
				img : '../../../css/images/app-oa.png',
			}
			,{
				level : 1,
				id : 11,
				name : '项目管理',
				pid : 2,
				url : 'projectPage'
			}
			,{
				level : 1,
				id : 111,
				name : '查询',
				pid : 11,
			}
			,{
				level : 1,
				id : 112,
				name : '添加',
				pid : 11,
			},{
				level : 1,
				id : 113,
				name : '删除',
				pid : 11,
			}
			
			,{
				level : 1,
				id : 1122,
				name : '任务管理',
				pid : 2,
				url : 'taskPage'
			}
			,{
				level : 1,
				id : 1114,
				name : '查询任务',
				pid : 1122,
			}
			,{
				level : 1,
				id : 2115,
				name : '添加任务',
				pid : 1122,
			},{
				level : 1,
				id : 1216,
				name : '删除任务',
				pid : 1122,
			},{
				level : 1,
				id : 1777,
				name : '权限角色',
				pid : 2,
				url : 'rolePage'
			}
			,{
				level : 1,
				id : 3454,
				name : '查询',
				pid : 1777,
			}
			,{
				level : 1,
				id : 5345436,
				name : '添加',
				pid : 1777,
			},{
				level : 1,
				id : 764113,
				name : '删除',
				pid : 1777,
			}
			],
THISPAGE = {
	init:function(){
		this.initDom();
		this.createGrid();
		this.addEvent();
	},
	setButton:function(ids){
		button_ids = ids;
		console.info(button_ids);
	},
	getButton:function(){
		return button_ids;
	},
	initDom:function(){
		this.$_matchCon = $("#matchCon");
		this.$_beginDate = $("#beginDate").val('2015-01-01');
        this.$_endDate = $("#endDate").val('2015-01-01');
        this.$_matchCon.placeholder();
        this.$_beginDate.datepicker();
        this.$_endDate.datepicker();
	},
	createGrid:function(){
		Public.grantTable({
			dom: $('#grid'),
			menudata: menudata
		});
	},
	/**删除确认?,msg提示内容;fnVerify确定按钮的操作;fnCancel取消按钮的操作*/
	delConfirm:function(msg,fnVerify,fnCancel){
		parent.layer.confirm(msg == null?'您删除之后无法恢复,确定吗?':msg,{
			title:'系统提示',
			btn: ['确定','取消'] //按钮
		}, function(index){
			parent.layer.close(index);//关闭
			fnVerify();
		}, function(){
			fnCancel();
		});
	},
	/**请求时连接服务器失败的提示,外层调用方法：parent.Public.connectFailure();*/
	connectFailure:function(){
		parent.Public.tips({type:1, content:'连接服务器失败'});
	},
	/**psot请求远程操作,外层调用方法：parent.Public.ajaxPostRequest(url,msg,data,fnSucceed);*/
	ajaxPostRequest:function(url,msg,data,fnSucceed){
		parent.layer.msg(msg == null?"操作中,请稍候……":msg,{icon:16,time:-1,shade:[0.3,'#000']});
		$.ajax({
			url : url,
			type : "POST",
			data : data,
			success : function(data){
				parent.Public.tips(data);
				parent.layer.closeAll('dialog');
				fnSucceed(data);
			},
			error : function(){
				parent.layer.closeAll('dialog');
				THISPAGE.connectFailure();
			}
		});
	},
	addEvent:function(){
		$('#menuAdd').on('click',function(){
			parent.Public.openWin('page/manager/menus/menu_edit.html','编辑',600,500,function(index,layero){
				var iframeWin = parent.window[layero.find('iframe')[0]['name']];
				iframeWin.pageMenu.menuSave();
			});
		});
	}
};
THISPAGE.init();