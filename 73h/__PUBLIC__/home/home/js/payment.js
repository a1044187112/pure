var Orderfrom = {
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
            container_cancel    : "",            
            container_confirm   : "",
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
                            case "container_cancel":
                                thisSelector.container_cancel = parameter.container_cancel;
                                break;
                            case "container_confirm":
                                thisSelector.container_confirm = parameter.container_confirm;
                                break;
                    }
                }
            },
        }
        thisBindEventClick = {
            bindEvent : function(){
                thisBindEventClick.eventCancelClick();
                thisBindEventClick.eventConfirmClick();
                
            },
            // 取消按钮点击事件
            eventCancelClick : function(){
                var cancelSel = "."+thisSelector.container_buy+" ."+thisSelector.container_cancel;
                $(cancelSel).click(function(){
                    thisEventProcessing.eventProCancelClick(this);
                    thisBindEventClick.bombBoxConfirmClick(this);
                    thisBindEventClick.bombBoxcancelClick(this);
                    thisBindEventClick.imgCloseClick();
                });
            },
            // 弹框确定按钮点击事件
            bombBoxConfirmClick : function(this_obj){
                $("body").delegate("#mb_btn_ok","click",function () {
                    $("#mb_box,#mb_con").remove();
                    //点击确认后 移除元素
                    $(this_obj).parentsUntil(".container").prev().remove();
                    $(this_obj).parentsUntil(".container").remove();
                });
            },
            // 弹框取消按钮点击事件
            bombBoxcancelClick : function(this_obj){
                $("body").delegate("#mb_btn_no","click",function () {
                    $("#mb_box,#mb_con").remove();
                });
            },
            // 又上角小叉按钮点击事件
            imgCloseClick : function(){
                $("body").delegate(".img_btn_cancel","click",function () {
                    $("#mb_box,#mb_con").remove();
                });
            },

            // 点击支付按钮
            eventConfirmClick : function(){
                var paymentSel = "."+thisSelector.container_buy+" ."+thisSelector.container_confirm;
                $(paymentSel).click(function(){
                    window.location.href="/73h/tmpl/home/wechatPaymentDrug.html";
                });
            },

            

        }

        thisEventProcessing = {
            //  处理事件
            eventProCancelClick : function(this_obj){
                thisGenCode.genCodeConfirm();
            },
            
        }

        thisGenCode = {
            genCodeConfirm : function(){
                
                 var _html = "";
                 _html += '<div id="mb_box"></div><div id="mb_con">';
                _html += '<div id="mb_msg">' +'<img src="/73h/__PUBLIC__/home/pic/test/order_from/4.png">'+'<div class="img_btn_cancel"></div>'+ '</div><div id="mb_btnbox">';
                
                _html += '<input id="mb_btn_ok" type="button" value="确定" />';
                _html += '<input id="mb_btn_no" type="button" value="取消" />';
               
                _html += '</div></div>';
                //必须先将_html添加到body，再设置Css样式
                $("body").append(_html); 
                 GenerateCss();
            },

        }

        // 取消商品弹框
        var GenerateCss = function () {
            $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
                filter: 'Alpha(opacity=60)', backgroundColor: '#7b7a7b', top: '0', left: '0', opacity: '0.6'
            });
            $("#mb_con").css({ zIndex: '999999', width: '70%', position: 'fixed',
                backgroundColor: '#7b7a7b', borderRadius: '10px', 
            });
            $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
                backgroundColor: '#DDD', borderRadius: '15px 15px 0 0',
                borderBottom: '3px solid #009BFE', fontWeight: 'bold'
            });
            $("#mb_msg>img").css({ width:'100%', display:'block', opacity:'0.5', position:'relative',
            });
            $(".img_btn_cancel").css({ width:'30px', height:'30px',position:'absolute',top:'0px',
                right:'0px', zIndex:'200', opacity:'0', });

            $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
                border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
                lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
            });
            $("#mb_btnbox").css({  textAlign: 'center', borderRadius:'15px' ,});
            $("#mb_btn_ok,#mb_btn_no").css({ width: '85px', height: '30px', color: 'white', border: 'none' });
            $("#mb_btn_ok").css({ backgroundColor: '#3dbabc', width:'50%', borderBottomLeftRadius: '10px'});
            $("#mb_btn_no").css({ backgroundColor: '#fff100', width:'50%',color:'#d7521c', borderBottomRightRadius: '10px'});
            //右上角关闭按钮hover样式
            $("#mb_ico").hover(function () {
                $(this).css({ backgroundColor: 'Red', color: 'White' });
            }, function () {
                $(this).css({ backgroundColor: '#DDD', color: 'black' });
            });
            var _widht = document.documentElement.clientWidth;  //屏幕宽
            var _height = document.documentElement.clientHeight; //屏幕高
            var boxWidth = $("#mb_con").width();
            var boxHeight = $("#mb_con").height();
            //让提示框居中
            $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    }
        
        

    


        thisObjInit(parameter);
        start();
    }
};