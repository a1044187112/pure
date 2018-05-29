var Inbound = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisBindEventClick.bindEvent();
            //element init
            //output
        };
        thisObj.num = 0;
        thisSelector = {
            container_buy       : "", 
            container_confirm_receipt  : "",
        };

        thisObjInit = function(parameter){
            thisParsingJson.ParsingJson(parameter);
        };

        // 解析JSON格式参数
        thisParsingJson = {
            ParsingJson : function(parameter){
                // alert(parameter);
                $.each(parameter,function(i,item){
                    // i是键  item是值
                    // alert(i);
                    initSelector.initSelectorJson(parameter,i,item);

                });
            },
        }

        initSelector = {
            initSelectorJson : function(parameter,i,item){
                    // alert(item);
                    if(i in parameter){
                        // // alert(parameter.i);
                        switch(i){
                            case "container_buy":
                                thisSelector.container_buy = parameter.container_buy;
                                break;
                            case "container_confirm_receipt":
                                thisSelector.container_confirm_receipt = parameter.container_confirm_receipt;
                                break;
                        }
                    }
            },
        }
        thisBindEventClick = {
            bindEvent : function(){
                thisBindEventClick.eventConfirmReceiptClick();
           
            },
           
            // 点击确认收货按钮
            eventConfirmReceiptClick : function(){
                var confirmSel = "."+thisSelector.container_buy+" ."+thisSelector.container_confirm_receipt;
                $(confirmSel).click(function(){

                    thisGenCode.confirmReceiptCode();
                    setTimeout(function(){
                         $(".confirmReceipt").remove();
                    },1000);
                });
            },

            
            
        }

        thisGenCode = {

            confirmReceiptCode : function(){
                var _html = "";
                _html += '<div class="confirmReceipt">\
                <img class="confirmReceipt_img" src="/73h/__PUBLIC__/home/pic/test/order_from/1.png">\
                </div>';
                $("body").append(_html); 
                confirmReceiptCss();
            },
        }

       
        // 确认收货按钮弹框
        var confirmReceiptCss = function(){
             $(".confirmReceipt").css({ zIndex: '999999', width: '55%', position: 'fixed',
                backgroundColor: '#7b7a7b', borderRadius: '10px', border:'none', 
            });
             $(".confirmReceipt_img").css({ width: '100%', display:'block', opacity:'0.6'});
            var _widht = document.documentElement.clientWidth;  //屏幕宽
            var _height = document.documentElement.clientHeight; //屏幕高
            var boxWidth = $(".confirmReceipt").width();
            var boxHeight = $(".confirmReceipt").height();
            //让提示框居中
            $(".confirmReceipt").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
        }
        

    


        thisObjInit(parameter);
        start();
    }
};