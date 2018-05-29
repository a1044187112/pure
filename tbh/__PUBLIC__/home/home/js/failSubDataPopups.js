thisGenCode = {
            

        errorReceiptCode : function(text){
                var _html = "";
                _html += '<div class="confirmReceipt">\
                '+text+'\
                </div>';
                $("body").append(_html); 
                thisGenCode.confirmReceiptCss();
                setTimeout(function(){
                        $(".confirmReceipt").fadeOut(4000);
                    },1500);
                    setTimeout(function(){
                        $(".confirmReceipt").remove();
                    },4500);
        },

        confirmReceiptCss : function(){
            $(".confirmReceipt").css({ zIndex: '999999', width: '55%', position: 'fixed',
                backgroundColor: '#7b7a7b', borderRadius: '10px', border:'none', color:'#09aee6',textAlign:'center',
                height:'100px',  paddingTop:'40px',
            });
            $(".confirmReceipt_img").css({ width: '100%', display:'block', opacity:'0.6'});
            var _widht = document.documentElement.clientWidth;  //屏幕宽
            var _height = document.documentElement.clientHeight; //屏幕高
            var boxWidth = $(".confirmReceipt").width();
            var boxHeight = $(".confirmReceipt").height();
            //让提示框居中
            $(".confirmReceipt").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
        },
    
    }