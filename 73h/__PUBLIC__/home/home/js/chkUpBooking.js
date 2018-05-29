var ChkUpBooking = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisBindEventClick.bindEvent();
            //element init
            //output
        };
        thisSelector = {
            bst_text       : "", 
            
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
                            case "bst_text":
                                thisSelector.bst_text = parameter.bst_text;
                                break;
                        }
                    }
            },
        }
        thisBindEventClick = {
            bindEvent : function(){
                thisBindEventClick.submitBtn();
                // 设置获取焦点是  input内容框显示为空
                thisBindEventClick.setInputFocus();
            },
            submitBtn : function(){
                var submitSel = "."+thisSelector.bst_text;
                $(submitSel).click(function(){
                    thisEventProcessing.inquireForm();
                });
            },
            setInputFocus : function(){
                $("form .input_text").each(function(){
                    $(this).focus(function(){
                        $(this).val("");
                        $(this).css("color","#444")
                        $(this).css("border","1px solid #999");
                    });
                });
            },

        }

        thisEventProcessing = {
            inquireForm : function(){
                $("form .input_text").each(function(){
                    if($(this).val()==""){
                        $(this).val("请完善您的信息");
                        $(this).css("color","red")
                        $(this).css("border","1px solid red");
                    }
                });
            },
            
        }

    

    


        thisObjInit(parameter);
        start();
    }
};