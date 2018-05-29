var   DocDetailInfo = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisBindEventClick.bindEvent();
            //element init
            //output
        };

        thisSelector = {
            name_space           :"",
            sel_dep              :"",
       

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
                            case "name_space":
                                thisSelector.name_space = parameter.name_space;
                                break;
                            case "sel_dep":
                                thisSelector.sel_dep = parameter.sel_dep;
                         
                        }
                    }
            },
        }
        

        thisBindEventClick = {
            bindEvent : function(){
                thisBindEventClick.fontSizeName();
                thisBindEventClick.selDepfontSize();

            },
            fontSizeName : function(){
                var sizeNmaeSel = "."+thisSelector.name_space;
                var text = $(sizeNmaeSel).text();
                if(text.length>2){
                    $(sizeNmaeSel).css("letter-spacing","0px");
                }else{
                    $(sizeNmaeSel).css("letter-spacing","22px");
                }
            },
            selDepfontSize : function(){
                var fontSizeSel = "."+thisSelector.sel_dep;
                var text = $(fontSizeSel).text();
                if(text.length>2){
                    $(fontSizeSel).css("letter-spacing","0px");
                }else{
                    $(fontSizeSel).css("letter-spacing","22px");
                }
            },

        }

        //  处理事件
        thisEventProcessing = {
            
           
            
        }
       

        thisObjInit(parameter);
        start();
    }
};