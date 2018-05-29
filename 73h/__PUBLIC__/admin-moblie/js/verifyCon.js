var BtnClick = {
	eventBtnClick : function(btnSel,id,num,url){
		$(btnSel).click(function(){
			// alert(55);
			thisGenCode.init("是否进行信息确认",id,num,url);
		});
	},
}
thisGenCode = {
        init : function(text,id,num,url){
        	thisGenCode.bindEventClick();
        	thisGenCode.errorReceiptCode(text,id,num,url);
        },

        errorReceiptCode : function(text,id,num,url){
                var _html = "";
                _html += '<div class="bg"> <div class="confirmReceipt">\
                <div class="intro">'+text+'</div>\
                <div class="ui-grid-a btn">\
					<div class="ui-block-a btn_confirm"\
                        data-url='+url+'\
                        data-data_src_type ="self"\
                        data-fields="id,num"\
                        data-id='+id+'\
                        data-num='+num+'\
                    >'+"确认"+'</div>\
					<div class="ui-block-b btn_cancle">'+"取消"+'</div>\
                </div>\
                </div></div>';
                $("body").append(_html); 
                thisGenCode.confirmReceiptCss();
                
                // setTimeout(function(){
                //         $(".confirmReceipt").fadeOut(4000);
                //     },1500);
                //     setTimeout(function(){
                //         $(".confirmReceipt").remove();
                //     },4500);
        },

        confirmReceiptCss : function(){
        	$(".bg").css({ position:'absolute', width:'100%', top:'0', bottom:'0', backgroundColor:'rgba(247,251,252,0.6)', });
            $(".confirmReceipt").css({ zIndex: '999999', width: '55%', position: 'fixed',
                backgroundColor: '#a8a9a9', borderRadius: '10px', border:'none', color:'#eee',textAlign:'center',
                height:'100px',  paddingTop:'25px', 
            });
            $(".intro").css({
             	borderBottom:'1px solid rgba(0,0,0,0.2)', paddingBottom:'21px', marginTop:'-2px',
             });
            $(".btn").css({
             	width:'100%', padding:'0px',
             });
            $(".btn_confirm").css({
             	borderRight:'1px solid rgba(0,0,0,0.2)',  height:'33px', lineHeight:'33px',
             });
            $(".btn_cancle").css({
             	 height:'33px', lineHeight:'33px',
             });
            // $(".confirmReceipt_img").css({ width: '100%', display:'block', opacity:'0.6'});
            var _widht = document.documentElement.clientWidth;  //屏幕宽
            var _height = document.documentElement.clientHeight; //屏幕高
            var boxWidth = $(".confirmReceipt").width();
            var boxHeight = $(".confirmReceipt").height();
            //让提示框居中
            $(".confirmReceipt").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
        },
    	
    	bindEventClick : function(){
    		// 确认按钮点击事件
    		$("body").delegate(".btn_confirm","click",function(){
                CtrlElAction.isSimPost=false;
                HomeCtrlElAction.btnFunc.btnDataSubmit(".btn_confirm");
    			// window.location.href="/73h/tmpl/admin-moblie/phySuccess.html";
    		});
    		$("body").delegate(".btn_cancle","click",function(){
    			$(".bg").remove();
    		});
    		
    	},
    }