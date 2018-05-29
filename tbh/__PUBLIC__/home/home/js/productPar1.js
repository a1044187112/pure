var ProductPar1 = {
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
            container_confirm_btn       : "",   // 确认按钮
            page                        : "",
            input_size                  :"",
            input_color                 :"",
            input_num                   :"",
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
                            case "container_confirm_btn":
                                thisObj.thisSelector.container_confirm_btn = parameter.container_confirm_btn;
                                break;
                            case "page":
                                thisObj.thisSelector.page = parameter.page;
                                break;
                            case "input_size":
                                thisObj.thisSelector.input_size = parameter.input_size;
                                break;
                            case "input_color":
                                thisObj.thisSelector.input_color = parameter.input_color;
                                break;
                            case "input_num":
                                thisObj.thisSelector.input_num = parameter.input_num;
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
                // 绑定确认按钮点击事件
                thisObj.thisBindEventClick.confirmClick();
                
            },

            bindSizeComItem : function(){
                // alert(55);
                // 尺码选择项父选择器
                var siezSel = "."+thisObj.thisSelector.container_size+" ."+thisObj.thisSelector.container_size_com;
                // 生产尺码选择项按钮
                var sel = "."+thisObj.thisSelector.container_size_com_item;
                // alert(siezSel);
                // alert(sel);
                $(siezSel).delegate(sel,"click",function(){
                    // alert(88);
                    // 处理事件
                    thisObj.EventProcessing.EventProcessingSizeComItem(this,sel);
                });
            },

            bindColorComItem : function(){
                // 生成颜色选择项
                var colorSel = "."+thisObj.thisSelector.container_color+" ."+thisObj.thisSelector.container_color_com;
                var sel = "."+thisObj.thisSelector.container_color_com_item;
                $(colorSel).delegate(sel,"click",function(){
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

            confirmClick : function(){
                // 生成选择器
                var confirmSel = "."+thisObj.thisSelector.container_confirm_btn;
                $(confirmSel).click(function(){
                    thisObj.EventProcessing.EventProcessingConfirmClick();
                    
                });
            },
            
            
        }

        thisObj.EventProcessing ={
            // 尺码选项处理事件
            EventProcessingSizeComItem : function(this_obj,sel){
                $(sel).each(function(){
                    // 遍历 将所有的恢复成未选中中状态
                    $(this).css("border","1px solid #bbb");
                    $(this).removeClass("selected");
                });
                // 将当前点击的改为选中状态
                $(this_obj).css("border","1px solid red");
                $(this_obj).addClass("selected");
            },

            //颜色选项处理事件
            EventProcessingColorComItem : function(this_obj,colorSel){
                $(colorSel).each(function(){
                    // 遍历 将所有的恢复成未选中中状态
                    $(this).children().css("border","1px solid #bbb");
                    $(this).removeClass("selected");
                });
                // 将当前点击的改为选中状态
                $(this_obj).css("border","1px solid red");
                $(this_obj).addClass("selected");
            },

            // 减少按钮点击处理事件
            EventProcessingNumSub : function(this_obj,subSel){
                // 获取input输入框选择器
                var inputSel = "."+thisObj.thisSelector.container_num_number+">"+"input";
                var number = $(inputSel)[0].value;
                number-=0;
                number--;
                // 当number小于零时 将input值改为1   不小于零时  正常赋值
                if(number<1){
                    $(inputSel)[0].value=1;
                }else{
                    $(inputSel)[0].value=number;
                }
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
                
            },

            EventProcessingConfirmClick : function(){
                var sizeSel = "."+thisObj.thisSelector.container_size_com+" ."+thisObj.thisSelector.container_size_com_item;
                var colorSel = "."+thisObj.thisSelector.container_color_com+" ."+thisObj.thisSelector.container_color_com_item;
                var numSel = "."+thisObj.thisSelector.container_num_number;
                var size = 0;
                var color = "";
                var number = 0;
                // 获取尺码信息
                $(sizeSel).each(function(){
                    // alert(this);
                    if($(this).hasClass("selected")){
                        size = $(this).text();
                        // alert("size");
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
                // 给form的输入框赋值
                thisObj.EventProcessing.inputAssig(size,color,number);
            },
            inputAssig : function(size,color,number){
                // 获取表单中input的选择器
                var inputSizeSel = "."+thisObj.thisSelector.input_size;
                var inputColorSel = "."+thisObj.thisSelector.input_color;
                var inputNumSel = "."+thisObj.thisSelector.input_num;
                 //  给input  赋值 
                $(inputSizeSel).val(size);
                $(inputColorSel).val(color);
                $(inputNumSel).val(number);

                CtrlElAction.isSimPost=false;
                var i_option =[
                      {"func1":function(){
                            thisObj.EventProcessing.confirmPopus();
                      }}, // 与后台交互成功时执行的方法 
                      {"func2":function(text){
                            thisGenCode.errorReceiptCode(text);
                      }}// 与后台交互失败时的执行方法
                  ];
                HomeCtrlElAction.initStatic(".abai_btn_cart",i_option);
            },
            // 点击确认按钮  提交数据成功后返回之后的弹框
            confirmPopus : function(){
                //  数据成功返回后 讲商品参数选择框 隐藏
                $(".container_popup").css("display","none");
                $(".container_popup").removeClass(".container_popup_show");
                $(".container_size_com").children().remove();  
                $(".container_color_com").children().remove();

                thisObj.thisGenCode.confirmReceiptCode();
                    setTimeout(function(){
                        $("#mb_box").fadeOut(2000);
                    },500);
                    setTimeout(function(){
                        $("#mb_box").remove();
                        $("#mb_con").remove();
                    },2000);
            },
        }

        
        thisObj.thisGenCode = {
            confirmReceiptCode : function(){
                 var _html = "";
                 _html += '<div id="mb_box"></div><div id="mb_con">';
                _html += '<div id="mb_msg">'+'<div id="text_msg">'+'添加成功'+'</div>'+'</div>';
                
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
        


        thisObj.thisObjInit(parameter);
        start();
    }
};