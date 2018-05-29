var Information = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisObj.thisBindEventClick.bindEvent();
            //element init
            //output
        };

        thisObj.thisSelector = {
            action_btn_con_submit                   : "",   
            input_item              : "",   
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

                            case "action_btn_con_submit":
                                thisObj.thisSelector.action_btn_con_submit = parameter.action_btn_con_submit;
                                break;
                            case  "input_item":
                                thisObj.thisSelector.input_item = parameter.input_item;
                                break;
                                             
                        }
                    }
            },
        }
        
        // 绑定点击事件
        thisObj.thisBindEventClick = {
            bindEvent : function(){
                // 提交按钮点击事件
                thisObj.thisBindEventClick.submitBtnClick();
            },
            submitBtnClick : function(){
                var refundItemSel = "."+thisObj.thisSelector.action_btn_con_submit;
                $(refundItemSel).click(function(){
                    thisObj.EventProcessing.eventProcessingSubmitClick();
                });
                
            },

        }

        thisObj.EventProcessing ={
           
            // 提交按钮处理事件
            eventProcessingSubmitClick : function(){
                var textArea = "."+thisObj.thisSelector.input_item;
                var info = new Array(4);
                var i=0;
                $(textArea).each(function(){
                    info[i] = $(this).val();
                    i++;
                });
                $(info).each(function(){
                    // alert(55);
                    if(this==""){
                        // alert("请输入出生日期");
                        return;
                    }
                });
                // alert(info);
                thisObj.AjaxSubmit.ajaxEvaSubmitData(info);
            },
         
           

        }

        thisObj.AjaxSubmit = {
            // 提交评价数据
            ajaxEvaSubmitData : function(info){
                var _json = jQuery.param({ "姓名":info[0],"性别":info[1],"出生日期":info[2],"电话号码":info[3]}); 
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