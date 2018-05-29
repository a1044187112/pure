THISPAGE = {
	init : function(){
		this.addEventListenr.clickMenthodSet();
		
		// 初始化下拉选择框
		var $activate_selectator4 = $('#activate_selectator4');
			var isInitShow = true;
			$activate_selectator4.click(function() {
				var $select4 = $('#select4');
				if($select4.data('selectator') === undefined) {
					$select4.selectator({
						showAllOptionsOnFocus: true
					});
					$activate_selectator4.val('destroy selectator');
				} else {
					$select4.selectator('destroy');
					$activate_selectator4.val('activate selectator');
				}
			});
			$activate_selectator4.trigger('click');
	},
	addEventListenr : {
		clickMenthodSet : function(){
			// 全选按钮点击事件
			THISPAGE.addEventListenr.selAllClick();
			// 设备单个选项点击事件
			THISPAGE.addEventListenr.selItemClick();
			// 查看按钮点击事件
			THISPAGE.addEventListenr.viewBtnClick();
			// 添加新提醒按钮点击事件
			THISPAGE.addEventListenr.addnewRemindClick();
			// 删除提醒方式按钮点击事件
			THISPAGE.addEventListenr.delnewRemindClick();
		},
		selAllClick : function(){
			var $selAllSelector = $(".sel_all");
			$selAllSelector.click(function(){
				THISPAGE.perEvent.selAllEvnet($(this));
			});
		},
		selItemClick : function(){
			var $selAllSelector = $(".selectEquipment");
			$selAllSelector.click(function(){
				THISPAGE.perEvent.selItemEvent($(this));
			});
		},
		viewBtnClick : function(){
			var $selAllSelector = $(".been_m_info");
			$selAllSelector.click(function(){
				THISPAGE.perEvent.viewBtnEvent($(this));
			});
		},
		addnewRemindClick : function(){
			var $selAllSelector = $(".add_remind");
			$selAllSelector.click(function(){
				console.log(55555555);
				THISPAGE.perEvent.newRemindBtnEvent($(this));
			});
		},
		delnewRemindClick : function(){
			$(".add_sel_style").delegate(".del_add","click",function(){
				$(this).parents(".add_style").remove();
			});
		},
	},
	// 处理事件
	perEvent : {
		selAllEvnet : function($this_obj){
			if($this_obj.hasClass("check")){
				$this_obj.removeClass("fa-check-circle-o");
				$this_obj.addClass("fa-circle-o");
				$this_obj.removeClass("check");
				$this_obj.css("color","#999");
				$(".selectEquipment").removeClass("active");
			}else{
				$this_obj.removeClass("fa-circle-o");
				$this_obj.addClass("fa-check-circle-o");
				$this_obj.addClass("check");
				$this_obj.css("color","rgb(102,220,71)");
				$(".selectEquipment").addClass("active");
			}
		},
		
		selItemEvent : function($this_obj){
			if($this_obj.hasClass("active")){
				$this_obj.removeClass("active");
			}else{
				$this_obj.addClass("active");
			}
		},
		
		viewBtnEvent : function($this_obj){
			console.log(555555555555555555);
			// 创建遮罩层
//			var $bg_html = $(document.createElement("div"));
//			$bg_html.addClass("body_view_bg").css({position:"abslute",width:"100%",top:"0",bottom:"0",background:"rgba(0,0,0,0.1)"});
//			$("body").append($bg_html);
			
		},
		
		newRemindBtnEvent : function($this_obj){
			var _html = '<div class="add_style"><select><option value="st1">系统消息</option><option value="st1">电子邮件</option><option value="st3">手机短信</option><option value="st4">语音通话</option><option value="st5">系统弹窗</option></select>'+
			'<select><option value="tiem1">5</option><option value="tiem2">10</option><option value="tiem3">15</option><option value="tiem4">20</option><option value="tiem5">25</option><option value="tiem6">30</option>'+
			'<option value="tiem7">35</option><option value="tiem8">40</option><option value="tiem9">45</option><option value="tiem10">50</option><option value="tiem11">55</option><option value="tiem12">60</option>'+
			'</select><select><option value="ts1">分钟</option><option value="ts2">小时</option><option value="ts3">天</option></select><div class="del_add"><i class="fa fa-close"></i></div></div>';
			$(".add_sel_style").append(_html);
		},
	},
};
THISPAGE.init();
