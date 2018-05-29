var Refund = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisObj.thisBindEventClick.bindEvent();
            //element init
            //output
        };

        thisObj.thisSelector = {
            submitURL                   : "",   
            container_reason              : "",   
            container_reason_item          : "",   
            container_textarea     : "",   
            refund_textarea             : "",   
            container_submit         : "",   
            refund_price            : "",
        }
        thisObj.thisObjInit = function(parameter){
            thisObj.thisParsingJson.ParsingJson(parameter);
        },

        // 解析JSON格式参数
        thisObj.thisParsingJson = {
            ParsingJson : function(parameter){
                // alert(parameter);
                $.each(parameter,function(i,item){
                    // i是键  item是值
                    // alert(i);
                    thisObj.initSelector.initSelectorJson(parameter,i,item);

                });
            },
        }

        thisObj.initSelector = {
            initSelectorJson : function(parameter,i,item){
                    // alert(item);
                    if(i in parameter){
                        // // alert(parameter.i);
                        switch(i){

                            case "submitURL":
                                thisObj.thisSelector.submitURL = parameter.submitURL;
                                break;
                            case  "container_reason":
                                thisObj.thisSelector.container_reason = parameter.container_reason;
                                break;
                            case "container_reason_item":
                                thisObj.thisSelector.container_reason_item = parameter.container_reason_item;
                                break;
                            case "container_textarea":
                                thisObj.thisSelector.container_textarea = parameter.container_textarea;
                                break;
                            case "refund_textarea":
                                thisObj.thisSelector.refund_textarea = parameter.refund_textarea;
                                break;
                            case "container_submit":
                                thisObj.thisSelector.container_submit = parameter.container_submit;
                                break;  
                            case "refund_price":
                                thisObj.thisSelector.refund_price = parameter.refund_price;
                                break;                     
                        }
                    }
            },
        }
        
        // 绑定点击事件
        thisObj.thisBindEventClick = {
            bindEvent : function(){
                // 退货原因item点击事件
                thisObj.thisBindEventClick.refundItemClick();
                // 提交申请按钮点击事件
                thisObj.thisBindEventClick.submitBtnClick();
            },
            refundItemClick : function(){
                var refundItemSel = "."+thisObj.thisSelector.container_reason+" ."+thisObj.thisSelector.container_reason_item;
                $(refundItemSel).click(function(){
                    thisObj.EventProcessing.eventProcessingRefundItem(this);
                });
                
            },

            submitBtnClick : function(){
                var submitSel = "."+thisObj.thisSelector.container_submit;
                $(submitSel).click(function(){
                    thisObj.EventProcessing.eventProcessingSubmitClick();
                });
            },

        }

        thisObj.EventProcessing ={
            // 退货原因
            eventProcessingRefundItem : function(this_obj){
                var textArea = "."+thisObj.thisSelector.container_textarea+" ."+thisObj.thisSelector.refund_textarea;
                var refundText = $(this_obj).text();
                    var areaText = $(textArea).text()
                    // alert(areaText);
                    if(areaText=="其它..."){
                        areaText ="";
                        // alert(55);
                        areaText=areaText+" "+refundText;
                    }else{
                        areaText=areaText+" "+refundText;
                    }
                    $(textArea).text(areaText);
            },
            // 提交按钮处理事件
            eventProcessingSubmitClick : function(){
                // alert(55);
                CtrlElAction.isSimPost=false;
                HomeCtrlElAction.btnFunc.btnDataSubmit(".container_submit_item_btn");
            },
         
           

        }

       
   


        thisObj.thisObjInit(parameter);
        start();
    }
};