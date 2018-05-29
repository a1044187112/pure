var SubmitOrder1 = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisObj.thisBindEventClick.bindEvent();
            //element init
            //output
        };

        thisObj.thisSelector = {
            container                   : "",   //最外层选择器
            container_size              : "",   //尺码选择项的根部选择器
            contaienr_size_com          : "",   //尺码选择项的父选择器
            container_size_com_item     : "",   //尺码选择项
            container_color             : "",   //颜色选择器根部选择器
            container_color_com         : "",   // 颜色选择项父选择器
            container_color_com_item    : "",   // 颜色选择项
            container_num               : "",   // 数量选择器根部选择器
            container_num_sub           : "",   // 减少
            container_num_number        : "",   // number
            container_num_add           : "",   // 增加
            footer_price                : "",
            get_size                    : "",
            get_color                   : "",
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

                            case "container":
                                thisObj.thisSelector.container = parameter.container;
                                break;
                            case  "container_size":
                                thisObj.thisSelector.container_size = parameter.container_size;
                                break;
                            case "container_size_com":
                                thisObj.thisSelector.container_size_com = parameter.container_size_com;
                                break;
                            case "container_size_com_item":
                                thisObj.thisSelector.container_size_com_item = parameter.container_size_com_item;
                                break;
                            case "container_color":
                                thisObj.thisSelector.container_color = parameter.container_color;
                                break;
                            case "container_color_com":
                                thisObj.thisSelector.container_color_com = parameter.container_color_com;
                                break;
                            case "container_color_com_item":
                                thisObj.thisSelector.container_color_com_item = parameter.container_color_com_item;
                                break;
                            case "container_num":
                                thisObj.thisSelector.container_num = parameter.container_num;
                                break;
                            case "container_num_sub":
                                thisObj.thisSelector.container_num_sub = parameter.container_num_sub;
                                break;
                            case "container_num_number":
                                thisObj.thisSelector.container_num_number = parameter.container_num_number;
                                break;
                            case "container_num_add":
                                thisObj.thisSelector.container_num_add = parameter.container_num_add;
                                break;
                            case "container_info":
                                thisObj.thisSelector.container_info = parameter.container_info;
                                break;
                            case "submint_btn_order":
                                thisObj.thisSelector.submint_btn_order = parameter.submint_btn_order;
                                break;
                            case "footer_price":
                                thisObj.thisSelector.footer_price = parameter.footer_price;
                                break;
                            case "get_size":
                                thisObj.thisSelector.get_size = parameter.get_size;
                                break;
                            case "get_color":
                                thisObj.thisSelector.get_color = parameter.get_color;
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
                // 绑定尺码选择项
                thisObj.thisBindEventClick.bindSizeComItem();
                //绑定颜色选择项
                thisObj.thisBindEventClick.bindColorComItem();
                // 绑定减少数量按钮
                thisObj.thisBindEventClick.bindNumSub();
                // 绑定增加数量按钮
                thisObj.thisBindEventClick.bindNumAdd();
                // 提交订单按钮
                thisObj.thisBindEventClick.eventProcssingSubmitClick();
                // 初始化价格
                thisObj.thisBindEventClick.initPrice();
            },

            bindSizeComItem : function(){
                // 生产尺码选择项按钮
                var sel = "."+thisObj.thisSelector.container_size+" ."+thisObj.thisSelector.container_size_com+" ."+thisObj.thisSelector.container_size_com_item;
                $(sel).click(function(){
                    // 处理事件
                    thisObj.EventProcessing.EventProcessingSizeComItem(this,sel);
                });
            },

            bindColorComItem : function(){
                // 生成颜色选择项
                var colorSel = "."+thisObj.thisSelector.container_color+" ."+thisObj.thisSelector.container_color_com+" ."+thisObj.thisSelector.container_color_com_item;
                $(colorSel).click(function(){
                    thisObj.EventProcessing.EventProcessingColorComItem(this,colorSel);
                }); 
            },

            bindNumSub : function(){
                // 生成减少按钮选择器
                var subSel = "."+thisObj.thisSelector.container_num+" ."+thisObj.thisSelector.container_num_sub;
                $(subSel).click(function(){
                    thisObj.EventProcessing.EventProcessingNumSub(this,subSel);
                });
            },

            bindNumAdd : function(){
                // 生成增加按钮选择器
                var addSel = "."+thisObj.thisSelector.container_num+" ."+thisObj.thisSelector.container_num_add;
                $(addSel).click(function(){
                    thisObj.EventProcessing.EventProcessingNumAdd(this.addSel);
                });
            },

            eventProcssingSubmitClick : function(){
                var subBtn = "."+thisObj.thisSelector.submint_btn_order;
                $(subBtn).click(function(){
                    thisObj.EventProcessing.eventProcssingSubmitClick(this);
                });
            },
            initPrice : function(){
                var priceSel = "."+thisObj.thisSelector.footer_price;
                var pricetext = $(priceSel).text();
                // 分离出价格部分
                var priceSlice = pricetext.slice(1,pricetext.length-3);  // 商品合计的价格
                // 获取下方价格的input 选择器
                var totalPriceSel = "."+thisObj.thisSelector.total_price;
                // 将价格赋值给input
                $(totalPriceSel).val(priceSlice);
            },

        }

        thisObj.EventProcessing ={
            // 尺码选项处理事件
            EventProcessingSizeComItem : function(this_obj,sel){
                $(sel).each(function(){
                    // 遍历 将所有的恢复成未选中中状态
                    $(this).css("border","1px solid #bbb");
                    $(this).removeClass("selected");
                    // 将当前点击的改为选中状态
                    $(this_obj).css("border","1px solid red");
                    $(this_obj).addClass("selected");
                });
                // 获取选中的尺码
                var size = $(this_obj).text();
                // 获取下方的input 选择器
                var sizeSel = "."+thisObj.thisSelector.get_size;
                // 讲选中的尺码赋值给input
                $(sizeSel).val(size);
            },

            //颜色选项处理事件
            EventProcessingColorComItem : function(this_obj,colorSel){
                 $(colorSel).each(function(){
                    // 遍历 将所有的恢复成未选中中状态
                    $(this).css("border","1px solid #bbb");
                    $(this).removeClass("selected");
                    // 将当前点击的改为选中状态
                    $(this_obj).css("border","1px solid red");
                    $(this_obj).addClass("selected");
                });
                 // 获取选中的尺码
                var color = $(this_obj).text();
                // 获取下方的input 选择器
                var colorSel = "."+thisObj.thisSelector.get_color;
                // 讲选中的尺码赋值给input
                $(colorSel).val(color);
            },

            // 减少按钮点击处理事件
            EventProcessingNumSub : function(this_obj,subSel){
                // 获取input输入框选择器
                var inputSel = "."+thisObj.thisSelector.container_num_number+">"+"input";
                var number = $(inputSel)[0].value;
                number-=0;
                number--;
                var index = 0;  //合计的判断
                // 当number小于零时 将input值改为1   不小于零时  正常赋值
                if(number<1){
                    $(inputSel)[0].value=1;
                    index = 2;
                }else{
                    $(inputSel)[0].value=number;
                    index = 0;
                }
                if (number==0) {
                    number++;
                }
                thisObj.EventProcessing.eventProcssingTotalPrice(number,index);
            },

            // 增加按钮点击处理事件
            EventProcessingNumAdd : function(this_obj,addSel){
                var inputSel = "."+thisObj.thisSelector.container_num_number+">"+"input";
                var number = $(inputSel)[0].value;
                number-=0;
                number++;
                if(number>99){
                    $(inputSel)[0].value=99;
                }else{
                    $(inputSel)[0].value=number;
                }
                thisObj.EventProcessing.eventProcssingTotalPrice(number,1);
                
            },
            // 核算总价
            eventProcssingTotalPrice : function(number,index){
                var totalPrice = 0; // 总价
                var unitPrice = 0; // 单价
                var priceSel = "."+thisObj.thisSelector.footer_price;
                var pricetext = $(priceSel).text();
                // 分离出价格部分
                var priceSlice = pricetext.slice(1,pricetext.length-3);  // 商品合计的价格
                if(index==1){ // 点击的是增加数量按钮
                    // 计算出单价
                    unitPrice = priceSlice/(number-1);
                    // alert(unitPrice);
                    totalPrice = unitPrice*number;
                }
                if(index==0){ // 点击的是减少按钮  减少按钮点击之前number不为1的状态
                    // 计算出单价
                    unitPrice = priceSlice/(number+1);
                    // alert(unitPrice);
                    totalPrice = unitPrice*number;
                }
                if (index==2) { // 减少按钮点击之前就为1的状态
                    unitPrice = priceSlice/(number);
                    totalPrice = unitPrice*number;
                }

                
                // var totalPrice = priceSlice*number;
                $(priceSel).text("￥"+totalPrice+".00");
                // 获取下方价格的input 选择器
                var totalPriceSel = "."+thisObj.thisSelector.total_price;
                // 将价格赋值给input
                $(totalPriceSel).val(totalPrice);
             },

            eventProcssingSubmitClick : function(this_obj){
                // 获取textarea 的评语
                var selector = "."+thisObj.thisSelector.container_info;
                var sizeSel = "."+thisObj.thisSelector.container_size_com+" ."+thisObj.thisSelector.container_size_com_item;
                var colorSel = "."+thisObj.thisSelector.container_color_com+" ."+thisObj.thisSelector.container_color_com_item;
                var numSel = "."+thisObj.thisSelector.container_num_number;
                var priceSel = "."+thisObj.thisSelector.footer_price;
                var size = 0;
                var color = "";
                var number = 0;
                var totalPrice = 0;
                var infoArray = new Array(5);
                var j = 0;
                // 获取尺码信息
                $(sizeSel).each(function(){
                    // alert(this);
                    if($(this).hasClass("selected")){
                        size = $(this).text();
                    }
                });
                // 获取颜色信息 
                $(colorSel).each(function(){
                    if($(this).hasClass("selected")){
                        color = $(this).text();
                    }
                });
                // 获取数量
                $(numSel).children().each(function(){
                    // alert($(this).is("input"));  // 判断当前元素是否input 元素
                    if($(this).is("input")){
                        number = $(this).val();
                    }
                });
                // 获取总价
                var pricetext = $(priceSel).text();
                // 分离出价格部分
                var priceSlice = pricetext.slice(1,pricetext.length-3);
                priceSlice-=0;
                var totalPrice = priceSlice*number;
                // alert(totalPrice);
                // 获取地址输入信息
                $(selector).find("input").each(function(){
                    infoArray[j] = $(this).text();
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
                thisObj.AjaxSubmit.ajaxEvaSubmitData(size,color,number,totalPrice,infoArray);

            },

        }

        thisObj.AjaxSubmit = {
            // 提交评价数据
            ajaxEvaSubmitData : function(size,color,number,totalPrice,infoArray){
                if(size==0){
                    // alert("size==0");
                } 
                if(color==""){
                    // alert("color==''");
                }
                var _json = jQuery.param({ "size":size,"color":color,"number":number,"totalPrice":totalPrice,"nameText":infoArray[0], "phoneText":infoArray[1],"areaText":infoArray[2],"addressText":infoArray[3],"idText":infoArray[4] }); 
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