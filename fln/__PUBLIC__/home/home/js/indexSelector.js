var IndexSelector = {
    init : function(parameter,menuPar){
        var thisObj = {};
        start = function(parameter,menuPar){
            //listen click
            thisObj.thisBindEventClick.bindEvent();
            thisObj.canvasInit.canvasInitDraw();
            //element init
            //output
        };
        thisObj.addressArray = new Array();
        thisObj.addressSecArray = new Array();
        thisObj.serviceArray = new Array();


        thisObj.thisSelector = {
            mycanvas                   : "",   
            canvas_address              : "", 
            canvas_service              :"",  
            address_ul                  :"",
            address_ul_sec              : "",
            service                     : "",
        }
        thisObj.thisObjInit = function(parameter,menuPar){
            thisObj.thisParsingJson.ParsingJson(parameter);
            // 解析menu参数
            thisObj.thisParsingJson.ParsingJsonMenu(menuPar);
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

            ParsingJsonMenu : function(menuPar){
                $.each(menuPar,function(i,item){
                    // 地区选择一级菜单
                    if(i=="address"){
                        $.each(item,function(i,item){
                            var j = i;
                            $.each(item,function(i,item){
                                // alert(j);
                                thisObj.addressArray[j]=item;
                            });
                        });
                    }
                    // alert(thisObj.addressArray);
                    // 地区选择二级菜单
                    if(i=="address_sec"){
                        $.each(item,function(i,item){
                            var j = i;
                            $.each(item,function(i,item){
                                thisObj.addressSecArray[j]=item;
                            });
                        });
                    }

                    // 服务菜单
                    if(i=="service"){
                        $.each(item,function(i,item){
                            var j = i;
                            $.each(item,function(i,item){
                                thisObj.serviceArray[j]=item;
                            });
                        });
                    }
                });
            },

        }

        thisObj.initSelector = {
            initSelectorJson : function(parameter,i,item){
                    // alert(item);
                    if(i in parameter){
                        // // alert(parameter.i);
                        switch(i){

                            case "mycanvas":
                                thisObj.thisSelector.mycanvas = parameter.mycanvas;
                                break;
                            case  "canvas_address":
                                thisObj.thisSelector.canvas_address = parameter.canvas_address;
                                break;
                            case  "canvas_service":
                                thisObj.thisSelector.canvas_service = parameter.canvas_service;
                                break;   
                            case  "address_ul":
                                thisObj.thisSelector.address_ul = parameter.address_ul;
                                break; 
                            case  "address_li":
                                thisObj.thisSelector.address_li = parameter.address_li;
                                break; 
                            case  "address_ul_sec":
                                thisObj.thisSelector.address_ul_sec = parameter.address_ul_sec;
                                break; 
                            case  "address_li_sec":
                                thisObj.thisSelector.address_li_sec = parameter.address_li_sec;
                                break; 
                            case  "service":
                                thisObj.thisSelector.service = parameter.service;
                                break; 
                            case  "service_li":
                                thisObj.thisSelector.service_li = parameter.service_li;
                                break; 
                        }
                    }
            },
        }
        
        // 绑定点击事件
        thisObj.thisBindEventClick = {
            bindEvent : function(){
                // 地区按钮点击事件
                thisObj.thisBindEventClick.canvasAddressClick();
                // 服务按钮点击事件
                thisObj.thisBindEventClick.canvasServiceClick();
                // 地区一级菜单点击事件
                thisObj.thisBindEventClick.addressMenuClick();
                // 地区二级菜单点击事件
                thisObj.thisBindEventClick.addressSecMenuClick();
                // service  菜单点击事件
                thisObj.thisBindEventClick.serviceMenuClick();
                // page 点击事件
                thisObj.thisBindEventClick.pageClick();
            },
            canvasAddressClick : function(){
                var addressSel = "#"+thisObj.thisSelector.canvas_address;
                $(addressSel).click(function(){
                    thisObj.EventProcessing.eventProaddressMenuShow();
                });
            },
            canvasServiceClick : function(){
                var serviceSel = "#"+thisObj.thisSelector.canvas_service;
                $(serviceSel).click(function(){
                    thisObj.EventProcessing.eventProServiceMenuShow();
                });
            },
            addressMenuClick : function(){
                var addressSelfir = "."+thisObj.thisSelector.address_li;
                $(".page").delegate(addressSelfir,"click",function(){
                    var this_Obj = this;
                    $(addressSelfir).each(function(i){
                         $(this).children().css("color","#333333");
                         $(this).css("background-color","#fff");
                         
                         if(this_Obj==this){
                            // 获取当前点击的item
                            // alert(i);
                         }
                    });
                    $(this).css("background-color","#faf2dd");
                    $(this).children().css("color","#e83e59");
                    thisObj.EventProcessing.eventProFirstMenuShow();
                });
            },
            addressSecMenuClick : function(){
                var addressSelSec = "."+thisObj.thisSelector.address_li_sec;
                $(".page").delegate(addressSelSec,"click",function(){
                    $(addressSelSec).each(function(i){
                         $(this).children().css("color","#333333");
                         $(this).css("background-color","#fff");
                         
                    });
                    $(this).children().css("color","#e83e59");
                    $(this).css("background-color","#faf2dd");
                });
            },
            serviceMenuClick : function(){
                var serviceSelFir = "."+thisObj.thisSelector.service_li;
                $(".page").delegate(serviceSelFir,"click",function(){
                    $(serviceSelFir).each(function(i){
                         $(this).children().css("color","#333333");
                         $(this).css("background-color","#fff");
                    });
                    $(this).css("background-color","#faf2dd");
                    $(this).children().css("color","#e83e59");
                });
            },
            // page点击事件
            pageClick : function(){
                $('html,body').click(function(e){
                    // 点击非菜单区域 隐藏菜单
                    if($(e.target).parents(".header").length == 0)
                        {
                            // e.target  触发事件的dom 元素 判断 如果点击的元素父类不是菜单dom元素 则隐藏菜单
                            thisObj.EventProcessing.removeCode();
                        }
                });
            },
        }

        thisObj.EventProcessing ={
           eventProaddressMenuShow : function(){
                var addressSel = "."+thisObj.thisSelector.address_ul;
                var _html = thisObj.gencode.gencodeAddress();
                // alert(_html);
                // 先移除之前生成的 防止多次生成
                // $(addressSel).children().remove();
                thisObj.EventProcessing.removeCode();
                $(addressSel).append(_html);

                // 设置父容器的高度 防止过高影响浏览
                $(addressSel).css("height","240px");
           },
           eventProServiceMenuShow : function(){
                var serviceSel = "."+thisObj.thisSelector.service;
                var _html = thisObj.gencode.gencodeService();
                // $(serviceSel).children().remove();
                thisObj.EventProcessing.removeCode();
                $(serviceSel).append(_html);
                $(serviceSel).css("height","240px");
            },
           eventProFirstMenuShow : function(){
                var addressSecSel = "."+thisObj.thisSelector.address_ul_sec;
                var _html = thisObj.gencode.gencodeAddressSec();
                $(addressSecSel).children().remove();
                $(addressSecSel).append(_html);
           },
           // 点击向下箭头的时候移除之前生成的代码
           removeCode : function(){
                var addressSel = "."+thisObj.thisSelector.address_ul;
                var serviceSel = "."+thisObj.thisSelector.service;
                var addressSecSel = "."+thisObj.thisSelector.address_ul_sec;
                $(serviceSel).children().remove();
                $(serviceSel).css("height","0px");
                $(addressSel).children().remove();
                $(addressSel).css("height","0px");
                $(addressSecSel).children().remove();
           },
        }

        thisObj.gencode = {
            // 生成address一级菜单
            gencodeAddress : function(){
                var _html = '';
                $(thisObj.addressArray).each(function(i){
                    _html = _html + '<li class="address_li"><a class="address_btn" href="#">'+thisObj.addressArray[i]+'</a></li>';
                });
                return _html;
            },
            // 生成address二级菜单
            gencodeAddressSec : function(){
                var _html = '';
                $(thisObj.addressSecArray).each(function(i){
                    _html = _html + '<li class="address_li_sec"><a class="address_btn_sec" href="#">'+thisObj.addressSecArray[i]+'</a></li>';
                });
                return _html;
            },
            // 生成service菜单
            gencodeService : function(){
                var _html = '';
                $(thisObj.serviceArray).each(function(i){
                    _html = _html + '<li class="service_li"><a class="service_btn" href="#">'+thisObj.serviceArray[i]+'</a></li>';
                });
                return _html;
            },

            
            
        }

        thisObj.canvasInit = {
            canvasInitDraw : function(){
                var canvasSel = thisObj.thisSelector.mycanvas;
                var can = document.getElementsByClassName(canvasSel);
                $(can).each(function(){
                    var ctx = this.getContext("2d");
                    ctx.strokeStyle="#999";
                    ctx.lineWidth = "2";
                    ctx.moveTo(5,5);
                    ctx.lineTo(15,14);
                    ctx.lineTo(26,5);
                    ctx.stroke();
                });
            },
        }
     
   


        thisObj.thisObjInit(parameter,menuPar);
        start();
    }
};