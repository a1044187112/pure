THISCOMDOCPAGE = {
	init : function(){
//		alert(55);
		this.bindClick();
	},
	bindClick : function(){
		// 添加共享成员按钮点击事件
		THISCOMDOCPAGE.addMemClick();
		// 展开或隐藏权限人数显示
		THISCOMDOCPAGE.isExpand();
		// 禁止浏览器的有点击默认事件
//		THISCOMDOCPAGE.preventBoRightClick();
		// 新增右键点击事件、
//		THISCOMDOCPAGE.rightClickMenuShow();
		// 如果点击的不是权限人员范围内  隐藏列表
		THISCOMDOCPAGE.pageClick();
		//弹出菜单各项点击事件
		THISCOMDOCPAGE.popusMenuClick();
		// 删除按钮点击事件
		THISCOMDOCPAGE.DelBtnCLick();
		//点击成员下的权限按钮
		THISCOMDOCPAGE.modifyPerBtnClcik();
	},
	addMemClick : function(){
		$(".right-wrap").delegate(".f_i_share_i","click",function(){
//			alert(55);
			parent.Public.openWin('page/yunpan/pre/preAddMem.html', '成员和权限', 550, 330, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
				$(".popbox").css("display","hidden");
		});
	},
	isExpand : function(){
		$(".right-wrap").delegate(".is_expand","click",function(){
			if($(this).hasClass("is_expand_selected")){ // 隐藏
				$(this).removeClass("is_expand_selected");
				$(this).addClass("fa-caret-down");
				$(this).removeClass("fa-caret-right");
				$(".file_info .file_per").css("visibility","visible");
			}else{
				$(this).addClass("is_expand_selected");
				$(this).removeClass("fa-caret-down");
				$(this).addClass("fa-caret-right");
				$(".file_info .file_per").css("visibility","hidden");
			}
		});
	},
	preventBoRightClick : function(){
		$(".right-wrap").delegate(".file_per_c","contextmenu",function(){
			return false;
		});
	},
	rightClickMenuShow : function(){
		$(".right-wrap").delegate(".file_per_c","contextmenu",function(e){
			THISCOMDOCPAGE.index = $(this).index(".file_per_c");
			$(".my_info .file_info .file_per .file_per_menu").css("display","block");
			$(".my_info .file_info .file_per .file_per_menu").css("top",e.pageY-$(".my_info .file_info .file_per").offset().top);
			$(".my_info .file_info .file_per .file_per_menu").css("left",e.pageX-$(".my_info .file_info .file_per").offset().left);
		});
	},
	pageClick :function(){
		$("body").click(function(e){
			if($(e.target).parents(".file_per_c").length==0){
				$(".my_info .file_info .file_per .file_per_menu").css("display","none");
			}
		});
	},
	popusMenuClick : function(){
		$(".right-wrap").delegate(".file_per_menu .file_per_menu_item","click",function(){
			console.log($(this));
			var text = $(this).html();
			$($(".file_per_p_info span")[THISCOMDOCPAGE.index]).html(text);
		});
	},
	DelBtnCLick : function(){
		$(".right-wrap").delegate(".file_per_c .file_per_close","click",function(){
			$(this).parents(".file_per_c").remove();
			console.log($(this));
		});
	},
	modifyPerBtnClcik : function(){
		$(".right-wrap").delegate(".file_per_p_info","click",function(e){
			THISCOMDOCPAGE.index = $(this).index(".file_per_p_info");
			$(".my_info .file_info .file_per .file_per_menu").css("display","block");
			$(".my_info .file_info .file_per .file_per_menu").css("top",e.pageY-$(".my_info .file_info .file_per").offset().top);
			$(".my_info .file_info .file_per .file_per_menu").css("left",e.pageX-$(".my_info .file_info .file_per").offset().left);
		});
	},
};
THISCOMDOCPAGE.init();
