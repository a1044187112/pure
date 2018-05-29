var SubmitOrder = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            thisObj.thisBindEventClick.bindEvent();
        };

        thisObj.thisSelector = {
            container_info                 : "",   //信息录入item
            submint_btn_order              : "",   // 提交订单
            footer_show_item_item           :"",
            total_price                     :"",
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
                            case "container_info":
                                thisObj.thisSelector.container_info = parameter.container_info;
                                break;
                            case "submint_btn_order":
                                thisObj.thisSelector.submint_btn_order = parameter.submint_btn_order;
                                break;
                            case "footer_show_item_item":
                                thisObj.thisSelector.footer_show_item_item = parameter.footer_show_item_item;
                                break;
                            case "total_price":
                                thisObj.thisSelector.total_price = parameter.total_price;
                                break;
                        }
                    }
            },
        }
        

        // 绑定点击事件
        thisObj.thisBindEventClick = {
            bindEvent : function(){
                // alert("func call");
                thisObj.thisBindEventClick.eventProcssingSubmitClick(); // 绑定提交按钮点击事件
                 // 初始化价格
                thisObj.thisBindEventClick.initPrice();
                
            },
            eventProcssingSubmitClick : function(){
                var subBtn = "."+thisObj.thisSelector.submint_btn_order;
                $(subBtn).click(function(){
                    thisObj.thisEventProcessing.eventProcssingSubmitClick(this);
                });
            },
            initPrice : function(){
                var priceSel = "."+thisObj.thisSelector.footer_show_item_item;
                var pricetext = $(priceSel).text();
                // 分离出价格部分
                var priceSlice = pricetext.slice(1,pricetext.length-3);  // 商品合计的价格
                // alert(priceSlice);
                // 获取下方价格的input 选择器
                var totalPriceSel = "."+thisObj.thisSelector.total_price;
                // 将价格赋值给input
                $(totalPriceSel).val(priceSlice);
            },
            
        }

        // 处理事件
        thisObj.thisEventProcessing = {
            
            eventProcssingSubmitClick : function(this_obj){
                // 获取textarea 的评语
                var selector = "."+thisObj.thisSelector.container_info;
                var infoArray = new Array(5);
                var j = 0;
                $(selector).find("input").each(function(){
                    infoArray[j] = $(this).val();
                    j++
                }); 
                if(infoArray[0]=="姓名"){
                    // alert("姓名");
                    // return;
                }else if(infoArray[1]=="手机或固定电话"){

                }else if(infoArray[2]=="选择省份 选择城市 选择地区"){
                    
                }else if(infoArray[3]=="街道门牌信息"){
                    
                }else if(infoArray[4]=="邮政编码（选填）"){
                    
                }            
                thisObj.AjaxSubmit.ajaxEvaSubmitData(infoArray);

            },

        }

        
        thisObj.AjaxSubmit = {
            // 提交评价数据
            ajaxEvaSubmitData : function(infoArray){
                var _json = jQuery.param({ "nameText":infoArray[0], "phoneText":infoArray[1],"areaText":infoArray[2],"addressText":infoArray[3],"idText":infoArray[4] }); 
                // alert(_json);
                $.ajax({
                    url:"",
                    type:"POST",
                    async:true,
                    data:_json,
                    dataType:"String",
                    cache:false,
                    success:function(r,textStatus){
                        // r.由服务器返回，并根据dataType参数进行处理后的数据。
                        // textStatus 描述状态的字符串
                        // alert(r);
                        // alert(textStatus);
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown){
                        // 三个参数 XMLHttpRequest  错误信息  捕获的错误对象
                        // alert(XMLHttpRequest+textStatus+errorThrown);
                    },
                });
            },
        }
   


        thisObj.thisObjInit(parameter);
        start();
    }
};