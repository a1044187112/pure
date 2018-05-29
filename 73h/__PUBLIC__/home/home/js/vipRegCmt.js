var VipRegCmt = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisObj.thisBindEventClick.bindEvent();
            //element init
            //output
        };
        thisObj.num = 0;
        thisObj.thisSelector = {
            click_good_con                   : "",   
            up              : "",  
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

                            case "click_good_con":
                                thisObj.thisSelector.click_good_con = parameter.click_good_con;
                                break;
                            case  "up":
                                thisObj.thisSelector.up = parameter.up;
                                break;
                        }
                    }
            },
        }
        
        // 绑定点击事件
        thisObj.thisBindEventClick = {
            bindEvent : function(){
                // 初始化价格
                // thisObj.thisBindEventClick.initPrice();
                // 绑定点赞按钮的点击事件
                thisObj.thisBindEventClick.bindUpClick();
            },
            bindUpClick : function(){
                var upSel = "."+thisObj.thisSelector.click_good_con;
                var upInputSel = "."+thisObj.thisSelector.up;
                $(upSel).click(function(){
                    thisObj.num ++;
                    $(upInputSel).val(thisObj.num%2);
                });
            },
          
            // initPrice : function(){
            //     var priceSel = "."+thisObj.thisSelector.footer_price;
            //     var pricetext = $(priceSel).text();
            //     // 分离出价格部分
            //     var priceSlice = pricetext.slice(1,pricetext.length-3);  // 商品合计的价格
            //     // 获取下方价格的input 选择器
            //     var totalPriceSel = "."+thisObj.thisSelector.total_price;
            //     // 将价格赋值给input
            //     $(totalPriceSel).val(priceSlice);
            // },

        }

        thisObj.EventProcessing ={
    


        }
        thisObj.thisObjInit(parameter);
        start();
    }
};