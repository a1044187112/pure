THISRBPAGE = {
	init : function(){
		this.addEvent();
	},
	addEvent : function(){
		// 清空回收站按钮
		THISRBPAGE.deleteRb();
		// 每一项点击事件
		THISRBPAGE.itemClick();
		// 右键点击事件 弹出菜单
		THISRBPAGE.itemRightClick();
		// 阻止浏览器右键默认点击事件
		THISRBPAGE.preventBoRightClick();
		// 当有弹出菜单 点击的不是菜单范围时 隐藏菜单
		THISRBPAGE.documentClickHideMenu();
		// 弹出菜单删除按钮点击事件 
		THISRBPAGE.menuDelBtnCLick();
		// 回收站 还原按钮点击事件
		THISRBPAGE.returnBtnClick();
		//回收站页面全选按钮点击事件
		THISRBPAGE.selectedAllBtnClick();
		
	},
	deleteRb : function(){
		$(".right-wrap").delegate(".delete_r_b","click",function(){
			parent.Public.openWin('page/yunpan/recycleBin/deleteRb.html', '清空回收站', 500, 250, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
				$(".popbox").css("display","hidden");
		});
	},
	
	itemClick : function(){
		$(".right-wrap").delegate(".table_item","click",function(){
//			alert(55);
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
				$(".rb_menu_return").css("visibility","hidden");
			}else{
				$(this).addClass("selected");
				$(".rb_menu_return").css("visibility","visible");
			}
			// 勾选上导航的选中按钮
			if($(".table_item").hasClass("selected")){
				$(".rb_menu_return").css("visibility","visible");
				// 显示还原按钮
//				$(this).find(".return").css("visibility","visible");
			}else{
				$(".rb_menu_return").css("visibility","hidden");
//				$(this).find(".return").css("visibility","hidden");
				
			}
		});
	},
	// 阻止右键浏览器  弹出浏览器默认菜单的方法
	preventBoRightClick : function(){
		$(".right-wrap").delegate(".table_item","contextmenu",function(){
//			alert(55);
			return false;
		});
	},
	itemRightClick : function(e){
		$(".right-wrap").delegate(".table_item","mousedown",function(e){
//		$(".table_item").mousedown(function(e){
			if(e.which==3){
				// 获取点击位置的坐标 
				x = e.clientX;
				y = e.clientY;
				// 将弹框定位到点击的位置
				$(".rb_op").css("top",y+"px");
				$(".rb_op").css("left",(x-170)+"px");
				$(".rb_op").css("display","block");
				$(".table_item").removeClass("selected");
				$(this).addClass("selected");
			}
		});
	},
	
	
	documentClickHideMenu : function(){
		$("body").click(function(e){
			if($(e.target).parents(".rb_op").length==0){
				$(".rb_op").css("display","none");
			}
		});
	},
	
	menuDelBtnCLick : function(){
		$(".right-wrap").delegate(".rb_file_del","mousedown",function(e){
			$(this).parents(".table_item").remove();
//			$(".file_table .selected").remove();
//			$(".rb_op").css("display","none");
			e.stopPropagation();
		});
	},
	
	returnBtnClick : function(){
		// 
		$(".right-wrap").delegate(".return","mousedown",function(e){
			e.stopPropagation();
			parent.Public.openWin('page/yunpan/recycleBin/returnFile.html', '还原文件', 400, 250, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
			$(".popbox").css("display","hidden");
		});
		
		$(".right-wrap").delegate(".rb_menu_return","mousedown",function(e){
			e.stopPropagation();
			parent.Public.openWin('page/yunpan/recycleBin/returnFile.html', '还原文件', 400, 250, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
			$(".popbox").css("display","hidden");
		});
	},


	
	selectedAllBtnClick : function(){
		 // 回收站页面
		 $(".right-wrap").delegate(".rb_sel_all","click",function(){
			if($(this).parents(".menu").hasClass("selected")){
				$(this).parents(".menu").removeClass("selected");
				$(".recycle_bin .table_item").removeClass("selected");
				$(".return").css("visibility","hidden");
				$(".rb_menu_return").css("visibility","hidden");
			}else{
				$(this).parents(".menu").addClass("selected");
				$(".rb_menu_return").css("visibility","visible");
				//将每一项选中
				$(".recycle_bin .table_item").addClass("selected");
				$(".return").css("visibility","visible");
			}
		});
	},
	// 加载数据
	initFileList:function(){
		var fileListsT = {
			status: '',
			fileList:[{
				getIcon: 't-folder',
				getIconBg: 'icon-folder',
				name: '文档.mp3',
				size: '35kb',
				pov: '5天',
				iconNumClass: 'share',
				hasSync: '',
				hasMark: '',
				hasLink: '',
				hasDownload: '',
				delTime: '2016-08-17 22:55:14',
				id:1,
			},{
				getIcon: 't-folder',
				getIconBg: 'icon-folder',
				name: '文档.pptx',
				size: '35kb',
				pov: '5天',
				iconNumClass: 'share',
				hasSync: '',
				hasMark: '',
				hasLink: '',
				hasDownload: '',
				delTime: '2016-08-17 22:55:14',
				id:2,
			},{
				getIcon: 't-folder',
				getIconBg: 'icon-folder',
				name: '文档.png',
				size: '35kb',
				pov: '5天',
				iconNumClass: 'share',
				hasSync: '',
				hasMark: '',
				hasLink: '',
				hasDownload: '',
				delTime: '2016-08-17 22:55:14',
				id:3,
			}]
		};
		var fileListDom = "";
		fileListDom = template('file_table_rb', fileListsT);
		$('.recycle_bin .file_table_rb').html(fileListDom);
	},
};
THISRBPAGE.init();
