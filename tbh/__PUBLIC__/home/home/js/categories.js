var Categories = {
    init : function(parameter,e_option){
        var thisObj = {};
        start = function(parameter,e_option){
            //listen click
            thisObj.thisBindEventClick.bindEvent();
            //element init
            //output
        };
        // 生成保存json 数据的数组
        thisObj.menu1Code = new Array(); 
        // 
        thisObj.classItemFir = new Array();
        thisObj.classItemFirCode = new Array();

        thisObj.cbrandsItem = new Array();
        thisObj.cbrandsItemCode = new Array();

        thisObj.priceItem = new Array();
        thisObj.priceItemCode = new Array();

        thisObj.classSecond = new Array();
        thisObj.classSecondCode = new Array();


        thisObj.thisSelector = {
            header_nav                   : "",   //
            header_nav_item              : "",   //
            container_sel                : "",   //
            container_sel_item          : "",   //
            container_sel_item_sec    : "",   //
            container_sel_price         : "",   // 
            class_item   : "",   // 
            other_item          : "",   // 
            class_item_sec    : "",   // 
            container_com_item_btn  :"",
            // container_sel_item_1         : "",   // 类别导航三级菜单
            // container_sel_item_1_class   : "",   // 类别导航三级菜单项
            // page                         : "",   //  整个页面 
        }
        thisObj.thisObjInit = function(parameter,e_option){
            // 解析类名
            thisObj.thisParsingJson.ParsingJson(parameter);
            // 解析菜单项
            thisObj.thisParsingJson.ParsingJsonMenu(e_option);
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

            ParsingJsonMenu : function(e_option){
                // var classItem = new Array();
                $.each(e_option,function(i,item){
                    if(i=="menu1"){
                        var j = 0;
                        $.each(item,function(i,item){
                            $.each(item,function(i,item){
                                j++;
                                thisObj.menu1Code[j-1] = item;
                                // alert(item);
                            });
                        });
                    }

                    if(i=="class"){
                        var j=0;
                        $.each(item,function(i,item){
                            // alert(item);
                            $.each(item,function(i,item){
                                if(i=="nav"){
                                    j++;
                                    thisObj.classItemFir[j-1] = item;
                                }
                                if(i=="sub_id"){
                                    thisObj.classItemFirCode[j-1] = item;
                                }
                            });
                        });
                    }
                    
                    if(i=="brands"){
                        var j = 0;
                        $.each(item,function(i,item){
                            $.each(item,function(i,item){
                                if(i=="nav"){
                                    j++;
                                    thisObj.cbrandsItem[j-1] = item;
                                }
                                if(i=="sub_id"){
                                    thisObj.cbrandsItemCode[j-1] = item;
                                }
                            });
                        });
                    }
                    if(i=="price"){
                        var j = 0;
                        $.each(item,function(i,item){
                            $.each(item,function(i,item){
                                if(i=="nav"){
                                    j++;
                                    thisObj.priceItem[j-1] = item;
                                }
                                if(i=="sub_id"){
                                    thisObj.priceItemCode[j-1] = item;
                                }
                            });
                        });
                    }
                    // if(i=="classSecond"){
                    //     var j = 0;
                    //     $.each(item,function(i,item){
                    //         $.each(item,function(i,item){
                    //             if(i=="nav"){  //  保存菜单名
                    //                 j++;
                    //                 thisObj.classSecond[j-1] = item; 
                    //             }
                    //             if(i=="sub_id"){  // 保存提交的状态码
                    //                 thisObj.classSecondCode[j-1] = item;
                    //             }
                    //         });
                    //     });
                    // }
                    
                });
            }

        }

        thisObj.initSelector = {
            initSelectorJson : function(parameter,i,item){
                    // alert(item);
                    if(i in parameter){
                        // // alert(parameter.i);
                        switch(i){

                            case "header_nav":
                                thisObj.thisSelector.header_nav = parameter.header_nav;
                                break;
                            case  "header_nav_item":
                                thisObj.thisSelector.header_nav_item = parameter.header_nav_item;
                                break;
                            case "container_sel":
                                thisObj.thisSelector.container_sel = parameter.container_sel;
                                break;
                            case "container_sel_item":
                                thisObj.thisSelector.container_sel_item = parameter.container_sel_item;
                                break;
                            case "container_sel_item_sec":
                                thisObj.thisSelector.container_sel_item_sec = parameter.container_sel_item_sec;
                                break;
                            case "container_sel_price":
                                thisObj.thisSelector.container_sel_price = parameter.container_sel_price;
                                break;
                            case "class_item":
                                thisObj.thisSelector.class_item = parameter.class_item;
                                break;
                            case "other_item":
                                thisObj.thisSelector.other_item = parameter.other_item;
                                break;
                            case "class_item_sec":
                                thisObj.thisSelector.class_item_sec = parameter.class_item_sec;
                                break;
                            case "container_com_item_btn":
                                thisObj.thisSelector.container_com_item_btn = parameter.container_com_item_btn;
                                break;
                            // case "container_sel_item_1":
                            //     thisObj.thisSelector.container_sel_item_1 = parameter.container_sel_item_1;
                            //     break;
                            // case "container_sel_item_1_class":
                            //     thisObj.thisSelector.container_sel_item_1_class = parameter.container_sel_item_1_class;
                            //     break;
                            // case "page":
                            //     thisObj.thisSelector.page = parameter.page;
                            //     break;
                        }
                    }
            },
        }
        
        // 绑定点击事件
        thisObj.thisBindEventClick = {
            
            bindEvent : function(){
                thisObj.thisBindEventClick.bindEventHeaderNav();
                thisObj.thisBindEventClick.bindEventClassSecondNav();
                thisObj.thisBindEventClick.bindEventBrandsNav();
                thisObj.thisBindEventClick.bindEventPriceNav();
                thisObj.thisBindEventClick.bindEventClassThirdNav();
                thisObj.thisBindEventClick.bindEventPageClick();
                // 商品条目点击事件
                thisObj.thisBindEventClick.shopItemClick();
                // 监听滚动条加载到底部时  加载数据
                thisObj.thisBindEventClick.scrollTopDyn();
            },
            // 第一级导航点击事件绑定
            bindEventHeaderNav : function(){
                // 选择器生成
                var itemSel = "."+thisObj.thisSelector.header_nav+" ."+thisObj.thisSelector.header_nav_item;
                $(itemSel).each(function(index){
                    $(this).click(function(){
                        // alert(index);
                        thisObj.EventProcessing.eventProGenCode(this,itemSel);
                            // 获取之前的input输入框中的内容  如果和现在点击的输入框中的内容一致  则关闭menu
                            var val = $(".menu0").val();
                            if(val == thisObj.menu1Code[index]){
                                $(".menu0").val("");
                                $("."+thisObj.thisSelector.container_sel_item).children().remove();
                                $("."+thisObj.thisSelector.container_sel_price).children().remove();
                            }else{
                                // alert(thisObj.menu1Code[index]);
                                $(".menu0").val(thisObj.menu1Code[index]);
                            }
                            // 点击一级菜单的时候  吧二三级菜单清空
                            $(".menu1").val("");
                            $(".menu2").val("");
                            // 此时如果点击的是销量优先 则需要提交数据 
                            if(index==1){
                                // 提交的是form  表单的选择器
                                transferJavascript.inputSubmitData(".submit_form");
                            } 
                            
                    });
                });
            },

            // 绑定类别导航栏二级导航点击事件
            bindEventClassSecondNav : function(){
                // 类别导航栏二级导航选择器
                var itemSelSec = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item;
                // alert(itemSelSec);
                $(itemSelSec).delegate("."+thisObj.thisSelector.class_item,"click",function(){
                    thisObj.thisClickSecClass = this;
                    // 获取当前点击对象对策下标
                    var index = $("."+thisObj.thisSelector.class_item).index($(this));
                    // alert(index);
                    // 将下班指向的数组中对应的值 赋给input  
                    $(".menu1").val(thisObj.classItemFirCode[index]); 
                    // 点击二级菜单的时候  吧二三级菜单清空
                    $(".menu2").val("");
                    // 请求返回三级菜单 如果返回成功 在成功回调方法中再次请求返回商品数据
                    transferJavascript.tsData(".submit_form_menu");
                    
                });
            },

            // 绑定品牌导航栏二级导航点击事件
            bindEventBrandsNav : function(){
                var itemSelBrands = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item;
                $(itemSelBrands).delegate("."+thisObj.thisSelector.other_item,"click",function(){
                    thisObj.EventProcessing.eventProGenCodeBrandsSec(this);
                    // 获取当前点击对象对策下标
                    var index = $("."+thisObj.thisSelector.other_item).index($(this));
                    // 将下班指向的数组中对应的值 赋给input  
                    $(".menu1").val(thisObj.cbrandsItemCode[index]); 
                    // 点击二级菜单的时候  吧二三级菜单清空
                    $(".menu2").val("");
                    transferJavascript.inputSubmitData(".submit_form");
                });
            },

            // 绑定价格导航栏二级导航点击事件
            bindEventPriceNav : function(){
                var itemSelBrands = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_price;
                $(itemSelBrands).delegate("."+thisObj.thisSelector.other_item,"click",function(){
                    thisObj.EventProcessing.eventProGenCodePricesSec(this);
                    // 获取当前点击对象对策下标
                    var index = $("."+thisObj.thisSelector.other_item).index($(this));
                    // 将下班指向的数组中对应的值 赋给input  
                    $(".menu2").val(thisObj.priceItemCode[index]); 
                    // 点击二级菜单的时候  吧二三级菜单清空
                    $(".menu2").val("");
                    transferJavascript.inputSubmitData(".submit_form");
                });
            },

            // 绑定类别三级菜单
            bindEventClassThirdNav : function(){
                var itemClassThird = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item_sec;
                $(itemClassThird).delegate("."+thisObj.thisSelector.class_item_sec,"click",function(){
                    thisObj.EventProcessing.eventProClassThird(this);
                    // 获取当前点击对象对策下标
                    var index = $("."+thisObj.thisSelector.class_item_sec).index($(this));
                    // alert(index);
                    // 将下班指向的数组中对应的值 赋给input  
                    $(".menu2").val(thisObj.classSecondCode[index]); 
                    transferJavascript.inputSubmitData(".submit_form");
                    // 点击二级菜单的时候  吧二三级菜单清空
                    // $(".menu2").val("");
                    // var dataArr = new Array();
                    // var classText = $($(this).parentsUntil("."+thisObj.thisSelector.container_sel).parents().prev("."+thisObj.thisSelector.header_nav).children("."+thisObj.thisSelector.header_nav_item)[1]).text();
                    // var parentText = $(this).parentsUntil("."+thisObj.thisSelector.container_sel).parents().children("."+thisObj.thisSelector.container_sel_item).children();
                    // $(parentText).each(function(){
                    //     // alert($(this).css("color"));
                    //     if($(this).hasClass("selector")){
                    //         var parentText = $(this).text();
                    //     }
                    // });
                    // var thisText = $(this).text();
                    // dataArr[0] = classText;
                    // dataArr[1] = parentText;
                    // dataArr[2] = thisText;
                    // submit.submitData(dataArr);
                });
            },

            // 屏幕点击事件
             bindEventPageClick : function(){
                var page = "."+thisObj.thisSelector.page;
                $(".page").click(function(event){
                    thisObj.EventProcessing.eventPage(event);
                });
            },

            // 商品条目点击事件
            shopItemClick : function(){
                var shopItemSel = "."+thisObj.thisSelector.container_com_item_btn;
                $("body").delegate(shopItemSel,"click",function(){
                    // alert(55);
                        // 点击商品后提交数据 跳转到商品详情
                        CtrlElAction.isSimPost=false;
                        HomeCtrlElAction.btnFunc.btnDataSubmit(this);
                    });
            },
            // 监听滚动条加载到底部时  加载数据
            scrollTopDyn : function(){
                // 监听屏幕滚动事件
                 $(window).scroll(function(){
                        var bheight  = $(window).height(); //获取窗口高度
                        var sheight = h = document.body.scrollHeight;;//获取body的高度
                        var stop = $("body").scrollTop();//滚动条距离顶部的距离
                        // alert(stop+"---"+bheight+"---"+sheight+"---");
                        // alert(screen.availHeight);
                        if(stop>=sheight-bheight){//当滚动条到顶部的距离等于滚动条高度减去窗口高度时
                            transferJavascript.pageShopInfoAsync(".submit_form")
                        }
                 });
                
            }

        }
            

        thisObj.EventProcessing ={
            //  生成一级菜单栏
            eventProGenCode : function(this_obj,itemSel){
                // 动态界面最外层选择器
                var dynSel = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item;
                // 价格菜单选择器
                var dynSel3 = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_price;
                // 消除之前生产的代码
                $(dynSel).children().remove();
                $(dynSel3).children().remove();
                $("."+thisObj.thisSelector.container_sel_item_sec).children().remove();
                // 查找当前的点击对象
                if($(itemSel)[0]===this_obj){
                    // 生成动态代码
                    $(dynSel).append(thisObj.GenCode.genCodeClass());
                }
                // if($(itemSel)[1]===this_obj){
                //     $(dynSel).append(thisObj.GenCode.genCodeClass());
                // }
                if($(itemSel)[2]===this_obj){
                    $(dynSel).append(thisObj.GenCode.genCodeBrands());
                }
                if($(itemSel)[3]===this_obj){
                    $(dynSel3).append(thisObj.GenCode.genCodePrice());
                }
                
            },
            // 类别二级菜单
            eventProGenCodeClassSec :function(this_obj){
                var itemSelSec = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item+" ."+thisObj.thisSelector.class_item;
                // 类别二级菜单父选择器
                var classItemThird = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item_sec;
                // 点击之后  将所有菜单项改为未选中状态  
                $(itemSelSec).css("color","#444");
                // 删除类名
                $(itemSelSec).removeClass("selector");
                // 将当前点击项改为选中状态
                $(this_obj).css("color","red");
                // 增加类名
                $(this_obj).addClass("selector");
                // 清楚之前生成的数据
                $(classItemThird).children().remove();
                // 动态界面最外层选择器
                //var dynSel = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item;
                 $(classItemThird).append(thisObj.GenCode.genCodeClassSec());
            },
            //品牌二级菜单项点击事件
            eventProGenCodeBrandsSec : function(this_obj){
                // 生成的item选择器
                var genItem = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item+" ."+thisObj.thisSelector.other_item;
                // 移除出可能生成的三级菜单代码
                    // 点击之后  将所有菜单项改为未选中状态 
                    $(genItem).css("color","#444");
                    // 将当前点击项改为选中状态
                    $(this_obj).css("color","red");
            },

            //价格二级菜单项点击事件
            eventProGenCodePricesSec : function(this_obj){
                // 生成的item选择器
                var genItem = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_price+" ."+thisObj.thisSelector.other_item;
                // 移除出可能生成的三级菜单代码
                    // 点击之后  将所有菜单项改为未选中状态 
                    $(genItem).css("color","#444");
                    // 将当前点击项改为选中状态
                    $(this_obj).css("color","red");
            },

            eventProClassThird : function(this_obj){
                var itemClassThirdItem = "."+thisObj.thisSelector.container_sel+" ."+thisObj.thisSelector.container_sel_item_sec+" ."+thisObj.thisSelector.class_item_sec;
                $(itemClassThirdItem).css("color","#444");
                $(this_obj).css("color","red");
            },

            // 点击不是菜单选项区域 菜单栏消失
            eventPage : function(e){
                // alert($(".container_sel").scrollTop());
                // alert($(".container_sel").height());
                // alert($(".header_nav").height());
                // alert(event.pageY);
                
                // 获取第一级菜单的高度
                var headerNavHeight = $(".header_nav").height();
                // 获取动态生成的菜单栏的高度
                var dynMenuHeight = $(".container_sel").height();
                // 获取当前点击位置的Y坐标
                var heightY = e.pageY;
                if((heightY-dynMenuHeight-(headerNavHeight*2))>0){
                    // alert(55);
                    $("."+thisObj.thisSelector.container_sel_item).children().remove();
                    $("."+thisObj.thisSelector.container_sel_item_sec).children().remove();
                    $("."+thisObj.thisSelector.container_sel_price).children().remove();
                }
            },

        }

        // 返回三级菜单数据 解析并赋值 
        thisObj.menu3Ret = {
            menu3ClassRet : function(data){
                thisObj.classSecond = new Array();
                thisObj.classSecondCode = new Array();
                var j = 0;
                $.each(data,function(i,item){
                    thisObj.classSecond[j] = item.name;
                    thisObj.classSecondCode[j] = item.id;
                    j++;
                });
                thisObj.EventProcessing.eventProGenCodeClassSec(thisObj.thisClickSecClass);
                transferJavascript.inputSubmitData(".submit_form");
            },
        }


        // 生成代码
        thisObj.GenCode = {
            // 类别导航代码生成
            genCodeClass : function(){
                // alert(thisObj.classItemFir[0]);
                var classCodeFir = "";
                var j=0;
                $(thisObj.classItemFir).each(function(){
                    classCodeFir = classCodeFir+'<div class="class_item">'+thisObj.classItemFir[j]+'</div>';
                    j++;
                });
                // alert(classCodeFir);
                return classCodeFir;
            },
            // 品牌导航代码生成
            genCodeBrands : function(){
                var classCodeFir = "";
                var j=0;
                $(thisObj.cbrandsItem).each(function(){
                    classCodeFir = classCodeFir+'<div class="other_item">'+thisObj.cbrandsItem[j]+'</div>';
                    j++;
                });
                return classCodeFir;
            },

            // 价格导航代码生成
            genCodePrice : function(){
                var classCodeFir = "";
                var j=0;
                $(thisObj.priceItem).each(function(){
                    classCodeFir = classCodeFir+'<div class="other_item">'+thisObj.priceItem[j]+'</div>';
                    j++;
                });
                return classCodeFir;
            },

            // 类别选择三级导航
            genCodeClassSec : function(){
                var classCodeFir = "";
                var j=0;
                $(thisObj.classSecond).each(function(){
                    classCodeFir = classCodeFir+'<div class="class_item_sec">'+thisObj.classSecond[j]+'</div>';
                    j++;
                });
                return classCodeFir;
            }
        }
    
    transferJavascript = {
        // 请求菜单返回的数据
        tsData : function(inputSubmitSel){ 
            CtrlElAction.isSimPost=false;
              var i_option =[
                  {"func1":function(data){
                     thisObj.menu3Ret.menu3ClassRet(data);
                  }}, // 与后台交互成功时执行的方法 
                  {"func2":function(text){
                    // thisGenCode.errorReceiptCode(text);
                  }}// 与后台交互失败时的执行方法
              ];
              HomeCtrlElAction.initStatic(inputSubmitSel,i_option);
        },
        // 请求商品返回的商品信息
        inputSubmitData : function(inputSubmitSel){
            CtrlElAction.isSimPost=false;
            var i_option =[
                  {"func1":function(text){
                    dynGenCode.resJson(text);
                  }}, // 与后台交互成功时执行的方法 
                  {"func2":function(text){
                    thisGenCode.errorReceiptCode(text);
                  }}// 与后台交互失败时的执行方法
              ];
            HomeCtrlElAction.initStatic(inputSubmitSel,i_option);
        },
        // 分页加载商品信息
        pageShopInfoAsync : function(inputSubmitSel){
            CtrlElAction.isSimPost=false;
            var i_option =[
                  {"func1":function(text){
                    dynGenCode.pageResJson(text);
                  }}, // 与后台交互成功时执行的方法 
                  {"func2":function(text){
                    thisGenCode.errorReceiptCode(text);
                  }}// 与后台交互失败时的执行方法
              ];
            HomeCtrlElAction.initStatic(inputSubmitSel,i_option);
        },
        // 点击结算按钮提交数据
        // submitDataBtn : function(){
        //     CtrlElAction.isSimPost=false;
        //     HomeCtrlElAction.btnFunc.btnDataSubmit(".bill_shop_btn");
        // },
    }


        thisObj.thisObjInit(parameter,e_option);
        start();
    }
};