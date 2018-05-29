var JoinLawyer = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
		};

		thisObj.thisSelector = {
            input_text           :"",
            input_next_btn		 :"",
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
                        case "input_text":
                            thisObj.thisSelector.input_text = parameter.input_text;
                            break;   
                        case "submit_btn":
                            thisObj.thisSelector.submit_btn = parameter.submit_btn;
                            break;                                             
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
            	thisObj.thisBindEventClick.bindInputFocus();
            	thisObj.thisBindEventClick.bindNextBtn();
            },

           
            // 获取焦点和失去焦点
            bindInputFocus : function(){
            	var inputText = "."+thisObj.thisSelector.input_text;
                $(inputText).bind({
                    focus:function(){
                        if (this.value == this.defaultValue){
                        this.value="";
                        }
                    },
                    blur:function(){
                        if (this.value == ""){
                        this.value = this.defaultValue;
                        }
                    }
                });
            },
            bindNextBtn : function(){
            	var nextBtnSel = "."+thisObj.thisSelector.submit_btn;
            	$(nextBtnSel).click(function(){
            		window.location.href="/fln/tmpl/home/selectorGoodAt.html";
            	});
            },
           
        }
            //  处理事件
        thisObj.thisEventProcessing = {
    
            

             
        }

       
		thisObj.thisObjInit(parameter);
		start();
	}
};