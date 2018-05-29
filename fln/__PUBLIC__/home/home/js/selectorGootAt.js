var SelectorGoodAt = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisObj.thisBindEventClick.bindEvent();
            //element init
            //output
        };
        thisObj.addressArray = new Array();
        thisObj.addressSecArray = new Array();
        thisObj.serviceArray = new Array();


        thisObj.thisSelector = {
            sel_item                   : "",   
            container_btn              : "",  
            img_selector               : "", 
            img_selector_URL           : "",
            img_unselector_URL         : "",
        }
        thisObj.thisObjInit = function(parameter){
            thisObj.thisParsingJson.ParsingJson(parameter);
            // 解析menu参数
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

                            case "sel_item":
                                thisObj.thisSelector.sel_item = parameter.sel_item;
                                break;
                            case  "container_btn":
                                thisObj.thisSelector.container_btn = parameter.container_btn;
                                break;
                            case  "img_selector":
                                thisObj.thisSelector.img_selector = parameter.img_selector;
                                break;
                            case  "img_selector_URL":
                                thisObj.thisSelector.img_selector_URL = parameter.img_selector_URL;
                                break;
                            case  "img_unselector_URL":
                                thisObj.thisSelector.img_unselector_URL = parameter.img_unselector_URL;
                                break;
                        }
                    }
            },
        }
        
        // 绑定点击事件
        thisObj.thisBindEventClick = {
            bindEvent : function(){
                // 最外层点击事件
                thisObj.thisBindEventClick.itemClick();
            },
            
            itemClick :function(){
                var itemSel = "."+thisObj.thisSelector.sel_item;
                $(itemSel).click(function(){
                    thisObj.EventProcessing.eventProItemClick(this);
                });
            },

        }

        thisObj.EventProcessing ={
           
           eventProItemClick : function(this_Obj){
                var selClass = thisObj.thisSelector.img_selector;
                var selectorURL = thisObj.thisSelector.img_selector_URL;  // 选中时的图片
                var unselectorURL = thisObj.thisSelector.img_unselector_URL; // 未选中时的图片
                var imgFatherSel = thisObj.thisSelector.container_btn;
                if($(this_Obj).hasClass(selClass)){ 
                    $(this_Obj).removeClass(selClass);  // 移除类名 
                    $(this_Obj).children("."+imgFatherSel).children().attr("src",unselectorURL);  // 更改图片的url
                }else{
                    $(this_Obj).addClass(selClass);
                    $(this_Obj).children("."+imgFatherSel).children().attr("src",selectorURL);
                }
           },
           
        }

       

        
     
   


        thisObj.thisObjInit(parameter);
        start();
    }
};