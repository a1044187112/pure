var Cart2 = {
    init : function(parameter){
        var thisObj = {};
        thisObj.thisNow="";
        thisObj.thisAddBtn = "",
        start = function(parameter){
            //listen click
            thisBindEventClick.bindEvent();
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
            img_url                 : "",   //图片路径
            item_been_sel_cname     : "",   //条目被选中的类名
            item_conter_in_cname    : "",   //条目计数器框的类名
            item_price_info_cname   : "",   //条目价格信息类名
            all_been_chk_cname      :"",    
            check_all               :"",    // 全选按钮
            pi_value                :"",  // 单价
            total_number            :"",  //总的数量
            total_price             :"",  // 总价
            radio_comm_number       :"",  // 每件商品数量选择器
            delete_item             :"",  // 删除按钮选择器
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
                             case "delete_item" :
                                thisSelector.delete_item = parameter.delete_item;
                            case "footer_nav_num_btn" :
                                thisSelector.footer_nav_num_btn = parameter.footer_nav_num_btn;
                        }
                    }
            },
        }
        

        // 绑定点击事件
        thisBindEventClick = {
            bindEvent : function(){
                // alert("func call");
                thisBindEventClick.bindRadioClick(); // 绑定单选按钮点击事件
                thisBindEventClick.bindSelectAllClick(); // 绑定全选按钮点击事件
                thisBindEventClick.bindSubItemClick(); // 绑定减少数量按钮点击事件
                thisBindEventClick.bindAddItemClick(); // 绑定增加数量按钮点击事件
                thisBindEventClick.bindDeleteItemClick(); // 绑定删除按钮
                thisBindEventClick.buyShopBtn();
            },

            // 绑定单选按钮点击事件
            bindRadioClick : function(){
                sel =  parameter.selector+"."+parameter.sub_item_el_class_name+"."+parameter.sub_item_col_class_name
                // alert("."+parameter.sel_btn_cname);
                $("."+parameter.sel_btn_cname).click(function(){
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


            bindSubItemClick : function(){
                var sler = "."+thisSelector.item_cnt_dec_btn_cname;
                $(sler).click(function(){
                    $(".footer_nav_num_btn").css("display","none");
                    thisObj.thisAddBtn = this;
                    transferJavascript.inputSubmitData(thisObj.thisAddBtn);
                    // thisEventProcessing.eventProcssingSubItemClick();
                });
            },

            bindAddItemClick :function(){
                var itemBtnCname = "."+thisSelector.item_cnt_inc_btn_cname;
                $(itemBtnCname).click(function(){
                    thisEventProcessing.eventProcssingAddItemClick(this);
                });
            },
            bindDeleteItemClick :function(){
                var delItem = "."+thisSelector.delete_item;
                $(delItem).click(function(){
                    thisObj.thisNow = this;
                    CtrlElAction.isSimPost=false;
                        var i_option =[
                              {"func1":function(){
                                    thisEventProcessing.eventProcssingDeleteItem();
                              }}, // 与后台交互成功时执行的方法 
                              {"func2":function(text){
                                    // thisGenCode.errorReceiptCode(text);
                              }}// 与后台交互失败时的执行方法
                          ];
                        HomeCtrlElAction.initStatic(".container_delete_item",i_option);

                });
            },
            buyShopBtn : function(){
                var buyShopSel = "."+thisSelector.footer_nav_num_btn;
                $(buyShopSel).click(function(){
                    transferJavascript.submitDataBtn(this);
                });
            },
        }

        //  处理事件
        thisEventProcessing = {
            eventProcssingRadioClick : function(this_object){
                var radioHasClass = thisSelector.item_been_sel_cname;
                var  imgsrc = thisSelector.img_url;
                //var radioHasClass = thisSelector.selector+"."+thisSelector.sub_item_el_class_name+"."+thisSelector.item_been_sel_cname;
                if($(this_object).parent().hasClass(radioHasClass)){ // 判断父元素是否有类mdi_item_been_sel  
                        $(this_object).attr("src",imgsrc+"3.png");
                        $(this_object).parent().removeClass(radioHasClass);
                        thisCompute.priceallRadioClick(this_object,0);
                }else{
                        $(this_object).attr("src",imgsrc+"4.png");  // 选中状态
                        $(this_object).parent().addClass(radioHasClass);
                        thisCompute.priceallRadioClick(this_object,1);
                }
                // if ($(this_object).attr("src")=="cart/10.png") {
                //         $(this_object).attr("src","cart/4.png"); //  选中状态
                //         thisCompute.priceallRadioClick(this_object,1); // 1表示选中状态 
                //    }else{
                //         $(this_object).attr("src","cart/10.png"); // 未选中状态
                //          $(".chk_all>img").attr("src","cart/10.png");
                //         thisCompute.priceallRadioClick(this_object,0); // 0表示未选中
                // }
                
            },

            eventProcssingSelectAllClick : function(this_object){
                //选择器生成
                var sler = thisSelector.selector+">."+thisSelector.sub_item_el_class_name+">."+thisSelector.sub_item_col_class_name+">."+thisSelector.sel_btn_cname;
                var  imgsrc = thisSelector.img_url;
                var slerBeenSelCname = thisSelector.item_been_sel_cname;
                var allBeenChk = thisSelector.all_been_chk_cname;
                var checkAll = "."+thisSelector.check_all+">img";
                if($(this_object).parent().hasClass(allBeenChk)){
                        $(sler).attr("src",imgsrc+"3.png"); // 全选  选中状态
                        $(checkAll).attr("src",imgsrc+"3.png");
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

            eventProcssingSubItemClick : function(){
                 $(".footer_nav_num_btn").css("display","block");
                var sler = "."+thisSelector.item_cnt_dec_btn_cname;
                var  imgsrc = thisSelector.img_url;
                var radioCommNumber = "."+thisSelector.radio_comm_number;
                var item = 0;
                 for(var i=0;i<$(sler).length;i++){
                    if(thisObj.thisAddBtn==$(sler)[i]){
                        item = i;
                    }
                }
                var value = $($(radioCommNumber)[item]).text(); // 当前商品的数量
                value-=0;
                value++;
                $($(radioCommNumber)[item]).text(value); // 当前商品的数量
                thisCompute.priceAllItemClick(item,value,0); //  减少当前数量是0； 增加当前数量是1；

                //  将数量赋值给data-num
                $(thisObj.thisAddBtn).attr("data-num",value);
                // alert($(this_object).attr("data-num"));
            },


            eventProcssingAddItemClick : function(this_object){
                var radioCommNumber = "."+thisSelector.radio_comm_number;
                var sler = "."+thisSelector.item_cnt_inc_btn_cname;
                var item = 0;
                 for(var i=0;i<$(sler).length;i++){
                    if(this_object==$(sler)[i]){
                        item = i;
                    }
                }
                var value = $($(radioCommNumber)[item]).text();
                value-=0;
                value--;
                if(value<1){
                   $($(radioCommNumber)[item]).text(1);
                }else{
                     $($(radioCommNumber)[item]).text(value);
                }
                // alert(55);

                thisCompute.priceAllItemClick(item,value,1); //  减少当前数量是0； 增加当前数量是1；
            },

            eventProcssingDeleteItem :function(){
                $( thisObj.thisNow).parent().parent().remove();
                thisObj.thisGenCode.confirmReceiptCode();
                setTimeout(function(){
                        $("#mb_box").fadeOut(1500);
                    },500);
                    setTimeout(function(){
                        $("#mb_box").remove();
                        $("#mb_con").remove();
                    },1500);
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
                var radioCommNumber = "."+thisSelector.radio_comm_number;
                var imgbtnSelector =  thisSelector.selector+">."+thisSelector.sub_item_el_class_name+">."+thisSelector.sub_item_col_class_name+">."+thisSelector.sel_btn_cname; 
                for(var i=0;i<$(selectorValue).length;i++){
                    if ($($(imgbtnSelector)[i]).parent().hasClass(radioHasClass)) {

                        var value = $($(radioCommNumber)[i]).text();
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
                $("."+thisSelector.total_number)[0].innerHTML=number;
                $("."+thisSelector.total_price)[0].innerHTML=total;
            }
        }

    thisObj.thisGenCode = {
            confirmReceiptCode : function(){
                 var _html = "";
                 _html += '<div id="mb_box"></div><div id="mb_con">';
                _html += '<div id="mb_msg">'+'<div id="text_msg">'+'已删除'+'</div>'+'</div>';
                
                _html += '</div>';
                //必须先将_html添加到body，再设置Css样式
                $("body").append(_html); 
                 GenerateCss();
            },

        }

        // 取消商品弹框
        var GenerateCss = function () {
            $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
                filter: 'Alpha(opacity=60)', backgroundColor: '#7b7a7b', top: '0', left: '0', opacity: '0.6'
            });
            $("#mb_con").css({ zIndex: '999999', width: '50%', position: 'fixed',
                backgroundColor: '#7b7a7b', borderRadius: '15px', 
            });
            $("#mb_msg").css({ backgroundColor:'#d4e8f1', borderRadius:'15px', border:'none'});
            $("#text_msg").css({color:'#888',fontSize:'20px', textAlign:'center',lineHeight:'6.5'});
            //右上角关闭按钮hover样式
            // $("#mb_ico").hover(function () {
            //     $(this).css({ backgroundColor: 'Red', color: 'White' });
            // }, function () {
            //     $(this).css({ backgroundColor: '#DDD', color: 'black' });
            // });
            var _widht = document.documentElement.clientWidth;  //屏幕宽
            var _height = document.documentElement.clientHeight; //屏幕高
            var boxWidth = $("#mb_con").width();
            var boxHeight = $("#mb_con").height();
            //让提示框居中
            $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
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
                    thisEventProcessing.eventProcssingSubItemClick();
                  }}, // 与后台交互成功时执行的方法 
                  {"func2":function(text){
                    thisGenCode.errorReceiptCode(text);
                  }}// 与后台交互失败时的执行方法
              ];
            HomeCtrlElAction.initStatic(inputSubmitSel,i_option);
        },
        // 点击结算按钮提交数据
        submitDataBtn : function(selector){
            CtrlElAction.isSimPost=false;
            HomeCtrlElAction.btnFunc.btnDataSubmit(selector);
        },
    }

        thisObjInit(parameter);
        start();
    }
};