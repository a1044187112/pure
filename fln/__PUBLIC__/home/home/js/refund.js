var Refund = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
		};

		thisObj.thisSelector = {
            refund_btn           :"",
            textarea_text	:"",
            container_submit_btn    :"",
		};

		thisObj.thisObjInit = function(parameter){
			thisParsingJson.ParsingJson(parameter);
		}

		thisParsingJson = {
			ParsingJson : function(parameter){
				$.each(parameter,function(i,item){
					initSelector.initSelectorJson(parameter,i,item);
				});
			},
		}

		initSelector = {
			initSelectorJson : function(parameter,i,item){
				if(i in parameter){
					switch(i){
                        case "refund_btn":
                            thisObj.thisSelector.refund_btn = parameter.refund_btn;
                            break;                        
                        case "textarea_text":
                            thisObj.thisSelector.textarea_text = parameter.textarea_text;
                            break;
                        case "container_submit_btn":
                            thisObj.thisSelector.container_submit_btn = parameter.container_submit_btn;
                            break;
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
            	thisObj.thisBindEventClick.refundBtnItemClick();
            },
            refundBtnItemClick : function(){
                var refundBtnSel = "."+thisObj.thisSelector.refund_btn;
                $(refundBtnSel).click(function(){
                    thisObj.thisEventProcessing.eventProRefundBtnItemClick(this);
                });
            },
           
           
        }
        //  处理事件
        thisObj.thisEventProcessing = {
    
            eventProRefundBtnItemClick : function(this_obj){
                var textareaText = "."+thisObj.thisSelector.textarea_text;
                // 获取点击对象的text
                var refundText = $(this_obj).text();
                // 获取textarea框的内容
                var textarea_text = $(textareaText).text();
                if(textarea_text=="其它..."){
                    textarea_text = refundText;
                }else{
                    textarea_text = textarea_text+refundText;
                }
                $(textareaText).text(textarea_text);
            },

             
        }

       
		thisObj.thisObjInit(parameter);
		start();
	}
};