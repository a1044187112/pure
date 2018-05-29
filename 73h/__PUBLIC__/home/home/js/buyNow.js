var   BuyNow = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisBindEvent.bindEvent();
            //element init
            //output
            // transferJavascript.tsData();
        };

        thisSelector = {
            btn_URL                 :"",
            mi_dec_btn              :"",
            mi_inc_btn              :"",
            item_price_info_cname   :"",
            pi_value                :"",
            total_number            :"",
            total_price             :"",
            radio_comm_number       :"",
            bi_clear_btn            :"",
            input_submit            :"",
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
                            case "btn_URL":
                                thisSelector.btn_URL = parameter.btn_URL;
                                break;
                            case "mi_dec_btn":
                                thisSelector.mi_dec_btn = parameter.mi_dec_btn;
                                break;
                            case "mi_inc_btn":
                                thisSelector.mi_inc_btn = parameter.mi_inc_btn;
                                break;
                            case "item_price_info_cname":
                                thisSelector.item_price_info_cname = parameter.item_price_info_cname;
                                break;
                            case "pi_value":
                                thisSelector.pi_value = parameter.pi_value;
                                break;
                            case "total_number":
                                thisSelector.total_number = parameter.total_number;
                                break;
                            case "total_price":
                                thisSelector.total_price = parameter.total_price;
                                break;
                            case "radio_comm_number":
                                thisSelector.radio_comm_number = parameter.radio_comm_number;
                                break;
                            case "bi_clear_btn":
                                thisSelector.bi_clear_btn = parameter.bi_clear_btn;
                                break;
                            case "input_submit":
                                thisSelector.input_submit = parameter.input_submit;
                                break;
                        }
                    }
            },
        }
        

        // 绑定点击事件
        thisBindEvent = {
            bindEvent : function(){
                // 初始化数据
                thisBindEvent.init();
                thisBindEvent.bindSubItemClick(); // 绑定减少数量按钮点击事件
                // 绑定增加按钮点击事件
                thisBindEvent.bindAddItemClick();
                // input输入框获取焦点的操作
                thisBindEvent.bindInputOnFocus();

                thisBindEvent.bindBillingBtnClick();// 结算按钮点击事件
            },
            init : function(){
                $("."+thisSelector.total_number).val("1");
                $("."+thisSelector.total_price).val($("."+thisSelector.pi_value).text());
            },
            

            // 绑定减少数量按钮点击事件
            bindSubItemClick : function(){

                var sler = "."+thisSelector.mi_dec_btn;
                $(sler).click(function(){
                      thisEventProcessing.eventProcssingSubItemClick(this);
                });
            },
            //绑定增加数量按钮点击事件
            bindAddItemClick :function(){
                var itemBtnCname = "."+thisSelector.mi_inc_btn;
                $(itemBtnCname).click(function(){
                    //  提交数据之前 先将按钮设为不可用
                    $("."+thisSelector.bi_clear_btn).css("display","none");
                    transferJavascript.tsData();
                });
            },
            bindInputOnFocus : function(){
                thisEventProcessing.evnetProInputOnFocus();
            },
            bindBillingBtnClick : function(){
                $("."+thisSelector.bi_clear_btn).click(function(){
                    transferJavascript.submitDataBtn();
                    // thisEventProcessing.eventProcssingtotalNumberClick();
                });
            },
           // 点击加号按钮的数据成功返回时提交
           addBtnSubData : function(){
                thisEventProcessing.eventProcssingAddItemClick(this);
           },
            // 当input 输入框失去焦点之后提交数据并返回正确确时的方法 
            inputBlurRetDataSucc : function(){
                // 获取输入的数量  
                var num = Number($(thisSelector.radio_comm_number).val());
                var unpri = Number($("."+thisSelector.pi_value).text());
                $("."+thisSelector.total_number).val(num);
                $("."+thisSelector.total_price).val(num*unpri);
                $("."+thisSelector.bi_clear_btn).css("display","block");
            },
            // 返回失败是的方法
            inputBlurRetDataFail : function(text){
                // 将输入框的值重置为1
                $(thisSelector.radio_comm_number).val(1);
                // 弹窗提示用户 错误
                thisGenCode.errorReceiptCode(text);
            },
           

        }

        //  处理事件
        thisEventProcessing = {
            
           
            // 减少按钮处理事件
            eventProcssingSubItemClick : function(this_object){
                var sler = "."+thisSelector.item_cnt_dec_btn_cname;
                // 商品数量
                var radioCommNumber = thisSelector.radio_comm_number;
                // 商品总数量选择器 
                var totalNum = "."+thisSelector.total_number;
                // 商品总价格选择器
                var totalPrice = "."+thisSelector.total_price;
                var item = 0;
                 for(var i=0;i<$(sler).length;i++){
                    if(this_object==$(sler)[i]){
                        item = i;
                    }
                }
                var value = $(radioCommNumber)[item].value; // 当前商品的数量
                value-=0;
                value--;
                if(value<1){
                    // alert(value);
                    $(radioCommNumber)[item].value=1;
                }else{
                     $(radioCommNumber)[item].value=value;
                }
                var value = parseInt($(radioCommNumber)[item].value); // 当前商品的数量
                var unit = parseInt($("."+thisSelector.item_price_info_cname).text()); // 当前商品的单价
                $(totalNum).val(value);
                $(totalPrice).val(value*unit);
            },

            // 增加按钮处理事件
            eventProcssingAddItemClick : function(this_object){
                var radioCommNumber = thisSelector.radio_comm_number;
                var sler = "."+thisSelector.item_cnt_inc_btn_cname;
                // 商品总数量选择器 
                var totalNum = "."+thisSelector.total_number;
                // 商品总价格选择器
                var totalPrice = "."+thisSelector.total_price;
                var item = 0;
                 for(var i=0;i<$(sler).length;i++){
                    if(this_object==$(sler)[i]){
                        item = i;
                    }
                }
                var value = $(radioCommNumber)[item].value
                value-=0;
                value++;
                
                $(radioCommNumber)[item].value=value; // 当前商品的数量
                var value = parseInt($(radioCommNumber)[item].value); // 当前商品的数量
                var unit = parseInt($("."+thisSelector.item_price_info_cname).text()); // 当前商品的单价
                $(totalNum).val(value);
                $(totalPrice).val(value*unit);
                // alert(55);
                //数据成功返回  将按钮设置为可用
                $("."+thisSelector.bi_clear_btn).css("display","block");
            },
            
         
            
            eventProcssingtotalNumberClick : function(){
                var totalPrice = "."+thisSelector.total_price;
                var totalNumber = "."+thisSelector.total_number;
                // 获取价格
                var price = $(totalPrice).text();
                var number = $(totalNumber).text();
            },

            evnetProInputOnFocus : function(){
                // input输入框选择器
                var radioCommNumber = thisSelector.radio_comm_number;
                // 结算按钮选择器  
                var billShopBtn = "."+thisSelector.bi_clear_btn
                // 获取提交input 数据的选择器
                var inputSubmitSel = "."+thisSelector.input_submit;
                // 获取焦点时的操作
                $(radioCommNumber).focus(function(){
                    $(billShopBtn).css("display","none");
                });
                // 失去焦点时的操作 
                $(radioCommNumber).blur(function(){
                    // 获取输入的数量  
                    var num = Number($(radioCommNumber).val());
                    // 计算商品合计和数量
                    $(inputSubmitSel).attr("data-num",num);
                    // 提交数据
                    // alert($(inputSubmitSel).attr("data-num")+"---"+num);
                    transferJavascript.inputSubmitData(inputSubmitSel);
                });
            },
        }
       
    transferJavascript = {
        //  
        tsData : function(){ 
            CtrlElAction.isSimPost=false;
              var i_option =[
                  {"func1":function(){
                    thisBindEvent.addBtnSubData();
                  }}, // 与后台交互成功时执行的方法 
                  {"func2":function(text){
                    thisGenCode.errorReceiptCode(text);
                  }}// 与后台交互失败时的执行方法
              ];
              HomeCtrlElAction.initStatic(".bi_clear_btn",i_option);
        },
        inputSubmitData : function(inputSubmitSel){
            CtrlElAction.isSimPost=false;
            var i_option =[
                  {"func1":function(){
                    thisBindEvent.inputBlurRetDataSucc();
                  }}, // 与后台交互成功时执行的方法 
                  {"func2":function(text){
                    thisBindEvent.inputBlurRetDataFail(text);
                  }}// 与后台交互失败时的执行方法
              ];
            HomeCtrlElAction.initStatic(inputSubmitSel,i_option);
        },
        // 点击结算按钮提交数据
        submitDataBtn : function(){
            CtrlElAction.isSimPost=false;
            HomeCtrlElAction.btnFunc.btnDataSubmit(".bill_shop_btn");
        },
    },


        thisObjInit(parameter);
        start();
    }
};