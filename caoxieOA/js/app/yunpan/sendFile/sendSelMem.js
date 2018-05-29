THISPAGE = {
	init : function(){

		this.bindClick();
	},
	bindClick : function(){
		// 点击最上层联系人按钮
		THISPAGE.contactsBtnClick();
		// 群组按钮点击事件
		THISPAGE.groupBtnCLick();
		// 好友 按钮点击事件
		THISPAGE.pyBtnClick();
		
		//  群组范围下  点击选中某一项时
		THISPAGE.groupItemClick();
		//  好友范围下  点击选中某一项时
		THISPAGE.pyItemClick();
		// 已经选中的item  点击事件
		THISPAGE.beenSelItemClick();
		// 清空按钮点击事件
		THISPAGE.clearSelItem();
	},
	contactsBtnClick : function(){
		$(".con_title").click(function(){
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
				THISPAGE.iconShowOrHide(this,0);
				$(".container_left").css("display","none");
			}else{
				$(this).addClass("selected");
				THISPAGE.iconShowOrHide(this,1);
				$(".container_left").css("display","block");
			}
		});
	},
	groupBtnCLick : function(){
		$(".con_group_sel").click(function(){
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
				THISPAGE.iconShowOrHide(this,0);
				$(".group_list").css("display","none");
			}else{
				$(this).addClass("selected");
				THISPAGE.iconShowOrHide(this,1);
				$(".group_list").css("display","block");
			}
		});
	},
	
	pyBtnClick : function(){
		$(".con_py_sel").click(function(){
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
				THISPAGE.iconShowOrHide(this,0);
				$(".py_list").css("display","none");
			}else{
				$(this).addClass("selected");
				THISPAGE.iconShowOrHide(this,1);
				$(".py_list").css("display","block");
			}
		});
	},
	
	// 左边图标的显示和隐藏
	iconShowOrHide : function(obj_this,index){
		if(index==1){ // 选中状态
			$(obj_this).children(".fa-caret-right").css("display","none");  //向下箭头
			$(obj_this).children(".fa-sort-down").css("display","inline");
		}else if(index==0){
			$(obj_this).children(".fa-caret-right").css("display","inline"); //向右箭头
			$(obj_this).children(".fa-sort-down").css("display","none");
		}
	},
	
	groupItemClick : function(){
		var text = "" ;
		var id = "";
		$(".con_g_item").click(function(){
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
				$(this).children(".sel").css("background","white");
				// 获取点击位置的标志位
				text= $(this).children(".name").text();
				id = $(this).attr("data-id");
				THISPAGE.genCodeSelMem(text,id,0);
			}else{
				$(this).addClass("selected");
				$(this).children(".sel").css("background","#7cc145");
				text= $(this).children(".name").text();
				id = $(this).attr("data-id");
				THISPAGE.genCodeSelMem(text,id,1);
			}
		});
	},
	
	pyItemClick : function(){
		var text = "" ;
		var id = "";
		$(".con_py_item").click(function(){
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
				$(this).children(".sel").css("background","white");
				// 获取点击位置的标志位
				text= $(this).children(".name").text();
				id = $(this).attr("data-id");
				THISPAGE.genCodeSelMem(text,id,0);
			}else{
				$(this).addClass("selected");
				$(this).children(".sel").css("background","#7cc145");
				text= $(this).children(".name").text();
				id = $(this).attr("data-id");
				THISPAGE.genCodeSelMem(text,id,1);
			}
		});
	},
	
	// 在右边生成对应的代码
	genCodeSelMem : function(text,id,index){
		var _html = "";
		if(index==0){
			// 移除选中的  遍历右边的ul  找到name相同的 
			$(".con_sel_item").each(function(){
				if(id==$(this).attr("data-id")){
					$(this).remove();
				}
			});
			
		}else{
			_html = '<li class="con_sel_item" data-id='+id+'>'+
					'<div class="fp"><img src="../../../img/avatar.jpg"></div>'+
					'<div class="name">'+text+'</div>'+
					'<div class="sel"></div>'+
				'</li>';
			$(".sel_list").append(_html);
		}
		THISPAGE.showSelNum();
	},
	
	
	beenSelItemClick : function(){
		$(".sel_list").delegate(".con_sel_item","click",function(){
			//获取点击item的id
			var id = $(this).attr("data-id");
			// 遍历左边的item   name相同的取消选中
			// 群组
			$(".con_g_item").each(function(){
				if(id==$(this).attr("data-id")){
//					alert($(this).children(".name").text());
					$(this).removeClass("selected");
					$(this).children(".sel").css("background","white");
				}
			});
			// 好友
			$(".con_py_item").each(function(){
				if(id==$(this).attr("data-id")){
					$(this).removeClass("selected");
					$(this).children(".sel").css("background","white");
				}
			});
			// 点击之后 移除  并取消左边的选中状态
			$(this).remove();
			
			THISPAGE.showSelNum();
			
			
		});
	},
	
	clearSelItem : function(){
		$(".t_time_del").click(function(){
			$(".con_sel_item").remove();
			// 清空是取消左边的所有选中状态
			$(".con_g_item").removeClass("selected");
			$(".con_g_item").children(".sel").css("background","white");
			$(".con_py_item").removeClass("selected");
			$(".con_py_item").children(".sel").css("background","white");
			THISPAGE.showSelNum();
		});
	},
	// 每一次点击之后获取已选中的个数  将个数赋值到已选中个数显示
	showSelNum : function(){
		var len = $(".con_sel_item").length;
		$(".sel_num").text(len);
	},
};
THISPAGE.init();
