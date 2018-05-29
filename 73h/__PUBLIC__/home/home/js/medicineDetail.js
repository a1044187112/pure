var MedicineDetail = {
    init : function(parameter){
        var thisObj = {};
        // var this_object ={};
        start = function(parameter){
            // thisBindEventClick.bindEvent();
            // 调用其它js 
            transferJavascript.tsData();
        };
        thisObj.num = 0;
        thisSelector = {
            abai_btn_cart       : "", 
            lim_img             : "",
            img_URL             : "",
        }
        thisObjInit = function(parameter){
            thisParsingJson.ParsingJson(parameter);
        };
        function  func(){

        }

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

                            case "abai_btn_cart":
                                thisSelector.abai_btn_cart = parameter.abai_btn_cart;
                                break;
                            case "lim_img":
                                thisSelector.lim_img = parameter.lim_img;
                                break;
                            case "img_URL":
                                thisSelector.img_URL = parameter.img_URL;
                                break;
                        }
                    }
            },
        }


        thisBindEvent = {
            bindEvent : function(){
                thisBindEvent.eventConfirmReceiptClick();
                // 讲商品详情下的图片宽度设置为100%；
                // thisBindEventClick.setLimImg();
            },
           
            // 点击确认收货按钮
            eventConfirmReceiptClick : function(){
                var confirmSel = "."+thisSelector.abai_btn_cart;
                 thisGenCodeSucc.confirmReceiptCode();
                    setTimeout(function(){
                        $(".confirmReceipt").fadeOut(4000);
                    },1500);
                    setTimeout(function(){
                        $(".confirmReceipt").remove();
                    },4500);
            },
            // setLimImg : function(){
            //     var imgSel = "."+thisSelector.lim_img+">img";
            //     // $(imgSel).css("width","100%");
            // },
        }
        thisGenCodeSucc = {
            

            confirmReceiptCode : function(){
                var _html = "";
                _html += '<div class="confirmReceipt">\
                <img class="confirmReceipt_img" src='+thisSelector.img_URL+"home/pic/bg/medicine_detail/1.png"+'>\
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
        
        // 当提交数据失败是的页面显示
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
    transferJavascript = {
        tsData : function(){
            CtrlElAction.isSimPost=false;
              var i_option =[
                  {"func1":function(){
                    thisBindEvent.bindEvent();
                  }}, // 与后台交互成功时执行的方法 
                  {"func2":function(text){
                    thisGenCode.errorReceiptCode(text);
                  }}// 与后台交互失败时的执行方法
              ];
              HomeCtrlElAction.init(".onsubmit",i_option);
        },
    }


    thisObjInit(parameter);
    start();
    }
};
