var Paymentcom = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisEventProcessing.thisEventProcessingTextChange();
            thisEventProcessing.thisEventProcessingImgRotate();
            thisEventProcessing.thisEventProcessingTextWait();
            //element init
            //output
        };
        thisObj.num = 0;
        thisSelector = {
            contaienr_img_text1 : "", 
            img_first_center    : "",            
            container_text_wait : "",
            jumpPageURL         : "",
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

                            case "contaienr_img_text1":
                                thisSelector.contaienr_img_text1 = parameter.contaienr_img_text1;
                                break;
                            case "img_first_center":
                                thisSelector.img_first_center = parameter.img_first_center;
                                break;
                            case "container_text_wait":
                                thisSelector.container_text_wait = parameter.container_text_wait;
                                break;
                            case "jumpPageURL":
                                thisSelector.jumpPageURL = parameter.jumpPageURL;
                                break;
                        }
                    }
            },
        }
        

        thisEventProcessing = {
            thisEventProcessingTextChange : function(){
                var textChange = "."+thisSelector.contaienr_img_text1;
                var time = $(textChange).text();
                var t = setTimeout("thisEventProcessing.thisEventProcessingTextChange()",1000);
                time--;
                if(time==0){
                    clearTimeout(t);
                    if( Paymentcom.test){
                        // alert(55);
                        location.href = thisSelector.jumpPageURL;
                    }
                }
                $(textChange).text(time)
            },

            thisEventProcessingImgRotate : function(){
                var imgRotate = "."+thisSelector.img_first_center;
                thisObj.num++;
                $(imgRotate).rotate(2*thisObj.num); 
                setTimeout("thisEventProcessing.thisEventProcessingImgRotate()",20);
            },

            thisEventProcessingTextWait : function(){
                var textWait = "."+thisSelector.container_text_wait;
                var point = ".";
                var text = $(textWait).text();
                if(text=="......"){
                    $(textWait).text("");
                }else{
                    text = text+point;
                    $(textWait).text(text);
                }
                setTimeout("thisEventProcessing.thisEventProcessingTextWait()",300);
            },
        }
        thisObjInit(parameter);
        start();
    }
};