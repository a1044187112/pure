THISMYMEETPAGE = {
	init : function(){
		this.addEvent.methodSet();
	},
	addEvent : {
		methodSet : function(){
			// 选择按钮点击事件
			THISMYMEETPAGE.addEvent.meetItemBtnClick();
			// 全选按钮点击事件
			THISMYMEETPAGE.addEvent.meetChkAllBtnClick();
		},
		meetItemBtnClick : function(){
			$(".noborder-warp").delegate(".radio_chk","click",function(){
				THISMYMEETPAGE.eventPre.meetItemEventPre($(this));
			});
		},
		meetChkAllBtnClick : function(){
			$(".noborder-warp").delegate(".chk_all","click",function(){
				THISMYMEETPAGE.eventPre.meetChkAllventPre($(this));
			});
		},
	},
	eventPre : {
		meetItemEventPre : function($this_obj){
			if($this_obj.hasClass("selected")){
				$this_obj.removeClass("selected").addClass($this_obj.attr("data-cancel")).removeClass($this_obj.attr("data-check"));
			}else{
				$this_obj.addClass("selected").removeClass($this_obj.attr("data-cancel")).addClass($this_obj.attr("data-check"));
			}
		},
		
		meetChkAllventPre : function($this_obj){
			var $radio_chk = $(".radio_chk");
			if($this_obj.hasClass("selected")){
				$this_obj.removeClass("selected").addClass($this_obj.attr("data-cancel")).removeClass($this_obj.attr("data-check"));
				$radio_chk.removeClass("selected").addClass($this_obj.attr("data-cancel")).removeClass($this_obj.attr("data-check"));
			}else{
				$this_obj.addClass("selected").removeClass($this_obj.attr("data-cancel")).addClass($this_obj.attr("data-check"));
				$radio_chk.addClass("selected").removeClass($this_obj.attr("data-cancel")).addClass($this_obj.attr("data-check"));
			}
		},
	},
	
};
THISMYMEETPAGE.init();
