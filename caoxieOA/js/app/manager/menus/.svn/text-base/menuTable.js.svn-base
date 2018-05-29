/**
 * 菜单展示组件
 * @param {Object} options
 */
Public.grantTable = function(options){ return new Public.GrantTable(options); }

Public.GrantTable = function(options){
	var defaults = {
		autoClose : true,
		removeOthers : true,
		onClose : null,
		onShow : null
	}
	this.options = $.extend({},defaults,options);
	this._init();
}

Public.GrantTable.prototype = {
	_init:function(){
		var self = this,opts = this.options;
		this._create();
		this._addEvent();
	},
	
	_create:function(){
		var opts = this.options, self = this;
		var dt = opts.menudata;
		var htm = '';
		for(var i=0;i<dt.length;i++){
			if(dt[i].level==0){
				htm += '<div class="col-sm-12 app-frame" ><div class="col-sm-12 tb-header" ><img class="app-icon" src="'+dt[i].img+'"><span class="app-menus"> '+dt[i].name+'&nbsp;</span></div>';
				for(var j=0;j<dt.length;j++){
					if(dt[j].pid==dt[i].id){
						htm += '<div class="col-sm-12 " style="background: #fff;padding: 0;"><div class="col-sm-12 tborder"><span id="'+dt[j].id+'" class="menu_handle"><a href="javascript:void(0);" onclick="menuEdit('+dt[j].id+')">编辑</a>|<a href="javascript:void(0);" onclick="menuDel('+dt[j].id+')">删除</a></span><div class="col-sm-2 menus" ><span class="fright"> '+dt[j].name+'</span></div>';
							   htm += '<div class="col-sm-4 menuss">';
							   for(var k=0;k<dt.length;k++){
								   if(dt[k].pid==dt[j].id){
									   htm += '|<span class="menulf">'+dt[k].name+'</span>';
							   		}
							   }
							   htm += '</div>';
							   htm += '<div class="col-sm-3 menuss "><span>URL：'+dt[j].url+'</span></div></div></div>';
					}
				}
				htm += '</div>';
			}
		}
		this.obj = $(htm);
		opts.dom.html(this.obj);
	},
	_addEvent:function(){
        $('div.tborder').hover(function(){
        	$('span#'+$(this).find('span').attr('id')).show();
        },function(){
        	$('span#'+$(this).find('span').attr('id')).hide();
        });
	}
};

function menuEdit(id){
	parent.Public.openWin('page/manager/menus/menu_edit.html','菜单编辑',600,500,function(index,layero){
		var body = parent.getChildFrame('body', index);
		var iframeWin = window[layero.find('iframe')[0]['name']];
	});
}

function menuDel(id){
	parent.layer.confirm('您删除之后无法恢复,确定吗?',{
		title:'系统提示',
		btn: ['确定','取消'] //按钮
	}, function(index){
		parent.layer.close(index);//关闭
		console.info('操作成功');
	}, function(){
	});
}