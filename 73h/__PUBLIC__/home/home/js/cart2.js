var Cart2 = {
    init : function(parameter){
        var thisObj = {};
        var this_obj_btn_add = "",
        start = function(parameter){
            //listen click
            thisBindEvent.bindEvent();
            //element init
            //output
        };

        thisSelector = {
            area_selector : "",             //区域元素选择器
            sub_item_el_class_name  : "",   //子条目元素类名
            sub_item_col_class_name : "",   //子条目元素列的类名
            sub_item_chg_col_width  : 0,    //变动的列的宽度
            sel_btn_cname           : "",   //选择按钮的类名
            item_cnt_dec_btn_cname  : "",   //条目数量减少按钮类名
            item_cnt_inc_btn_cname  : "",   //条目数量增加按钮类名
            img_url                 : "",   //选择按钮的类名
            item_been_sel_cname     : "",   //条目被选中的类名
            item_conter_in_cname    : "",   //条目计数器框的类名
            item_price_info_cname   : "",   //条目价格信息类名
            all_been_chk_cname      :"",    
            check_all               :"",
            pi_value                :"",
            total_number            :"",
            total_price             :"",
            radio_comm_number       :"",
            mdi_ic_item_first       :"",
            mdi_delete              :"",
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

                            case "img_url":
                                thisSelector.img_url = parameter.img_url;
                                break;
                            case  "selector":
                                thisSelector.selector = parameter.selector;
                                break;
                            case "sub_item_el_class_name":
                                thisSelector.sub_item_el_class_name = parameter.sub_item_el_class_name;
                                break;
                            case "sub_item_col_class_name":
                                thisSelector.sub_item_col_class_name = parameter.sub_item_col_class_name;
                                break;
                            case "sub_item_chg_col_width":
                                thisSelector.sub_item_chg_col_width = parameter.sub_item_chg_col_width;
                                break;
                            case "sel_btn_cname":
                                thisSelector.sel_btn_cname = parameter.sel_btn_cname;
                                break;
                            case "item_cnt_dec_btn_cname":
                                thisSelector.item_cnt_dec_btn_cname = parameter.item_cnt_dec_btn_cname;
                                break;
                            case "item_cnt_inc_btn_cname":
                                thisSelector.item_cnt_inc_btn_cname = parameter.item_cnt_inc_btn_cname;
                                break;
                            case "item_been_sel_cname":
                                thisSelector.item_been_sel_cname = parameter.item_been_sel_cname;
                                break;
                            case "item_conter_in_cname":
                                thisSelector.item_conter_in_cname = parameter.item_conter_in_cname;
                                break;
                            case "item_price_info_cname":
                                thisSelector.item_price_info_cname = parameter.item_price_info_cname;
                                break;
                            case "all_been_chk_cname":
                                thisSelector.all_been_chk_cname = parameter.all_been_chk_cname;
                                break;
                            case "check_all" :
                                thisSelector.check_all = parameter.check_all;
                                break;
                            case "pi_value" :
                                thisSelector.pi_value = parameter.pi_value;
                                break;
                            case "total_number" :
                                thisSelector.total_number = parameter.total_number;
                                break;
                            case "total_price" : 
                                thisSelector.total_price = parameter.total_price;
                                break;
                            case "radio_comm_number" :
                                thisSelector.radio_comm_number = parameter.radio_comm_number;
                                break;
                            case "mdi_ic_item_first" : 
                                thisSelector.mdi_ic_item_first = parameter.mdi_ic_item_first;
                                break;
                            case "mdi_delete" :
                                thisSelector.mdi_delete = parameter.mdi_delete;
                                break;
                            case "bi_clear_btn" :
                                thisSelector.bi_clear_btn = parameter.bi_clear_btn;
                                break;
                            case "input_submit" :
                                thisSelector.input_submit = parameter.input_submit;
                                break;
                        }
                    }
            },
        }
        

        // 绑定点击事件
        thisBindEvent = {
            bindEvent : function(){
                // alert("func call");
                thisBindEvent.bindRadioClick(); // 绑定单选按钮点击事件
                thisBindEvent.bindSelectAllClick(); // 绑定全选按钮点击事件
                thisBindEvent.bindSubItemClick(); // 绑定减少数量按钮点击事件
                thisBindEvent.bindAddItemClick(); // 绑定增加数量按钮点击事件
                thisBindEvent.swipeLeftOrRight(); // 左右滑动事件
                thisBindEvent.swipeUpOrDown(); // 上下滑动事件
                thisBindEvent.deleteItemClick(); // 删除按钮点击事件
                thisBindEvent.totalNumberClick(); // 结算按钮点击事件
                // input输入框获取焦点的操作
                thisBindEvent.bindInputOnFocus();
            },

            // 绑定单选按钮点击事件
            bindRadioClick : function(){
                sel =  parameter.selector+"."+parameter.sub_item_el_class_name+"."+parameter.sub_item_col_class_name
                // alert("."+parameter.sel_btn_cname);
                $("."+parameter.sel_btn_cname).click(function(){
                    this_obj_btn_radio = this;
                    thisEventProcessing.eventProcssingRadioClick(this);
                });
            },

            // 绑定全选按钮点击事件
            bindSelectAllClick : function(){
                var checkAll = "."+thisSelector.check_all+">img";
                $(checkAll).click(function(){
                    thisEventProcessing.eventProcssingSelectAllClick(this);
                });
            },

            // 绑定减少数量按钮点击事件
            bindSubItemClick : function(){
                var sler = "."+thisSelector.item_cnt_dec_btn_cname;
                $(sler).click(function(){
                      thisEventProcessing.eventProcssingSubItemClick(this);
                });
            },
            //绑定增加数量按钮点击事件
            bindAddItemClick :function(){
                var itemBtnCname = "."+thisSelector.item_cnt_inc_btn_cname;

                $(itemBtnCname).click(function(){
                    transferJavascript.tsData();
                    this_obj_btn_add = this;
                });
            },

            swipeLeftOrRight : function(){
                thisEventProcessing.eventProcssingLeftOrRight();
            },

            swipeUpOrDown : function(){
                thisEventProcessing.eventProcssingUpOrDown();
            },
            deleteItemClick : function(){
                var delBtn = "."+thisSelector.sub_item_el_class_name+" ."+thisSelector.mdi_delete;
                $(delBtn).click(function(){
                    thisEventProcessing.eventProcssingDeleteBtnClick(this);
                });
            },
            // 结算按钮点击事件
            totalNumberClick : function(){
                var totalNumSelBtn = "."+thisSelector.bi_clear_btn;
                $(totalNumSelBtn).click(function(){
                    var value = $(".total_cnt").val();
                    if(value!=0){
                        transferJavascript.submitDataBtn();
                    }
                });
            },
            // input输入框获取焦点的操作
            bindInputOnFocus : function(){
                thisEventProcessing.evnetProInputOnFocus();
            },
            // 当input 输入框失去焦点之后提交数据并返回正确确时的方法 
            inputBlurRetDataSucc : function(){
                // 获取输入的数量  
                // var num = Number($(thisSelector.radio_comm_number).val());
                // var unpri = Number($("."+thisSelector.pi_value).text());
                // $("."+thisSelector.total_number).val(num);
                // $("."+thisSelector.total_price).val(num*unpri);
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
            // 单选按钮处理事件
            eventProcssingRadioClick : function(this_object){
                var radioHasClass = thisSelector.item_been_sel_cname;
                var  imgsrc = thisSelector.img_url;
                //var radioHasClass = thisSelector.selector+"."+thisSelector.sub_item_el_class_name+"."+thisSelector.item_been_sel_cname;
                if($(this_object).parent().hasClass(radioHasClass)){ // 判断父元素是否有类mdi_item_been_sel  
                        $(this_object).attr("src",imgsrc+"10.png");
                        $(this_object).parent().removeClass(radioHasClass);
                        thisCompute.priceallRadioClick(this_object,0);
                }else{
                        $(this_object).attr("src",imgsrc+"4.png");  // 选中状态
                        $(this_object).parent().addClass(radioHasClass);
                        thisCompute.priceallRadioClick(this_object,1);
                }
                
            },
            // 全选按钮处理事件
            eventProcssingSelectAllClick : function(this_object){
                //选择器生成
                var sler = thisSelector.selector+">."+thisSelector.sub_item_el_class_name+">."+thisSelector.sub_item_col_class_name+">."+thisSelector.sel_btn_cname;
                var  imgsrc = thisSelector.img_url;
                var slerBeenSelCname = thisSelector.item_been_sel_cname;
                var allBeenChk = thisSelector.all_been_chk_cname;
                var checkAll = "."+thisSelector.check_all+">img";
                if($(this_object).parent().hasClass(allBeenChk)){
                        $(sler).attr("src",imgsrc+"10.png"); // 全选  选中状态
                        $(checkAll).attr("src",imgsrc+"10.png");
                        $(sler).parent().removeClass(slerBeenSelCname);
                        $(this_object).parent().removeClass(allBeenChk);
                        thisCompute.priceAllSelectAllClick(1);
                    }else{
                        // alert(sler);
                        $(sler).attr("src",imgsrc+"4.png"); //全选  未选中状态
                        $(checkAll).attr("src",imgsrc+"4.png");
                        $(sler).parent().addClass(slerBeenSelCname);
                        $(this_object).parent().addClass(allBeenChk);
                        thisCompute.priceAllSelectAllClick(0);
                    }
            },
            // 减少按钮处理事件
            eventProcssingSubItemClick : function(this_object){
                var sler = "."+thisSelector.item_cnt_dec_btn_cname;
                var  imgsrc = thisSelector.img_url;
                var radioCommNumber = thisSelector.radio_comm_number;
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

                thisCompute.priceAllItemClick(item,value,0); //  减少当前数量是0； 增加当前数量是1；
            },

            // 增加按钮处理事件
            eventProcssingAddItemClick : function(){
                var radioCommNumber = thisSelector.radio_comm_number;
                var sler = "."+thisSelector.item_cnt_inc_btn_cname;
                var item = 0;
                 for(var i=0;i<$(sler).length;i++){
                    if(this_obj_btn_add==$(sler)[i]){
                        item = i;
                    }
                }
                var value = $(radioCommNumber)[item].value
                value-=0;
                value++;
                $(radioCommNumber)[item].value=value; // 当前商品的数量
                thisCompute.priceAllItemClick(item,value,1); //  减少当前数量是0； 增加当前数量是1；
            },
            // 左右滑动处理事件
            eventProcssingLeftOrRight : function(){
                var item = "."+thisSelector.sub_item_el_class_name;
                var itemRadio = item+" ."+thisSelector.mdi_ic_item_first;
                var itemDel = item +" ."+thisSelector.mdi_delete;
                $(item).each(function(){
                    $(this).swipe({fingers:"all", swipeLeft:swipe1, swipeRight:swipe2 });
                    function swipe1(event, direction, distance, duration, fingerCount){
                        // alert(6666);
                        // 左滑
                        $(this).children(itemRadio).css("display","none");
                        $(this).children(itemDel).css("display","block");
                    }
                    function swipe2(event, direction, distance, duration, fingerCount){
                        $(this).children(itemRadio).css("display","block");
                        $(this).children(itemDel).css("display","none");
                        // 右滑
                    }
                });
            },
            // 上下滑动处理事件
            eventProcssingUpOrDown : function(){
                var selector = thisSelector.selector;
                $(selector).swipe({fingers:"all", swipeUp:swipe3, swipeDown:swipe4 });
                    function swipe3(event, direction, distance, duration, fingerCount){
                        // alert("上滑");
                        var end_st = document.body.scrollTop + distance*2 + "px";
                        $("body").animate({scrollTop: end_st},400);
                    }

                    function swipe4(event, direction, distance, duration, fingerCount){
                        // alert("下滑");
                        var end_st = document.body.scrollTop - distance*2;
                        if(end_st < 0) end_st=0;
                        end_st += "px";
                        $("body").animate({scrollTop: end_st},400);
                    }
            },
            // 删除按钮事件
            eventProcssingDeleteBtnClick : function(this_obj){
                $(this_obj).parent().remove();
            },
          
            //  input 输入框获取焦点事件
            evnetProInputOnFocus : function(){
                // input输入框选择器
                var radioCommNumber = thisSelector.radio_comm_number;
                // 结算按钮选择器  
                var billShopBtn = "."+thisSelector.bi_clear_btn
                // 获取提交input 数据的选择器
                var inputSubmitSel = "."+thisSelector.input_submit;
                // 获取焦点时的操作
                var this_index = 0;
                $(radioCommNumber).each(function(index){
                    $(this).focus(function(){
                        this_index = index;
                        $(billShopBtn).css("display","none");
                    });
                });
                // 失去焦点时的操作 
                $(radioCommNumber).blur(function(){
                    // 获取输入的数量  
                    var num = Number($($(radioCommNumber)[this_index]).val());
                    // 计算商品合计和数量
                    $($(inputSubmitSel)[this_index]).attr("data-num",num);
                    // 提交数据
                    // alert($($(inputSubmitSel)[this_index]).attr("data-num"));
                    transferJavascript.inputSubmitData(inputSubmitSel+":eq("+this_index+")");
                });
            },
        }

        
        thisCompute = {
            // 单选选中或取消后的总价
            priceallRadioClick : function(this_object,index){
                thisTotalpriceall.totalPriceTotalNumber();
            },

            // 全选选中后的总价
            priceAllSelectAllClick:function(index){
                if(index==1){
                    thisTotalpriceall.totalPriceTotalNumber();
                }
                if(index==0){
                    thisTotalpriceall.totalPriceTotalNumber();
                }
                
            },


            priceAllItemClick:function(item,value,index){
                var  imgsrc = thisSelector.img_url;
                var radioHasClass = thisSelector.item_been_sel_cname;
                // 图片按钮选择器
                var imgbtnSelector =  thisSelector.selector+">."+thisSelector.sub_item_el_class_name+">."+thisSelector.sub_item_col_class_name+">."+thisSelector.sel_btn_cname; 
                if($(imgbtnSelector).parent().hasClass(radioHasClass)){ // 选中状态
                    if (index==1) {
                        thisTotalpriceall.totalPriceTotalNumber();
                    }
                    if (index==0) {

                        thisTotalpriceall.totalPriceTotalNumber();
                    }
                }
            },

        }

        thisTotalpriceall = {
            totalPriceTotalNumber : function(){  //  输出总价
                var number =0;
                var total = 0;
                var  imgsrc = thisSelector.img_url;
                var selectorValue = "."+thisSelector.pi_value;
                var radioHasClass = thisSelector.item_been_sel_cname;
                var radioCommNumber = thisSelector.radio_comm_number;
                var imgbtnSelector =  thisSelector.selector+">."+thisSelector.sub_item_el_class_name+">."+thisSelector.sub_item_col_class_name+">."+thisSelector.sel_btn_cname; 
                for(var i=0;i<$(selectorValue).length;i++){
                    if ($($(imgbtnSelector)[i]).parent().hasClass(radioHasClass)) {

                        var value = $(radioCommNumber)[i].value;
                        var unitprice = $(selectorValue)[i].innerHTML;
                        unitprice-=0
                        total-=0;
                        value-=0;
                        unitprice = unitprice*value;
                        total+=unitprice;
                        number+=value;
                    }
                }
                // alert("."+thisSelector.total_number);
                $("."+thisSelector.total_number).val(number);
                $("."+thisSelector.total_price).val(total);
            }
        }

    transferJavascript = {
        tsData : function(){ 
            CtrlElAction.isSimPost=false;
              var i_option =[
                  {"func1":function(){
                    thisEventProcessing.eventProcssingAddItemClick();
                  }}, // 与后台交互成功时执行的方法 
                  {"func2":function(text){
                    thisGenCode.errorReceiptCode(text);
                  }}// 与后台交互失败时的执行方法
              ];
              HomeCtrlElAction.initStatic(this_obj_btn_add,i_option);
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
    }
        


        thisObjInit(parameter);
        start();
    }
};