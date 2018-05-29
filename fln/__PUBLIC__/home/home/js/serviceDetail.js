var ServiceDetail = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
		};

		thisObj.thisSelector = {
            total_price           :"",
            sub_item	:"",
            add_item    :"",
            num_item    :"",
            confirm_item    :"",
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
                        case "total_price":
                            thisObj.thisSelector.total_price = parameter.total_price;
                            break;                        
                        case "sub_item":
                            thisObj.thisSelector.sub_item = parameter.sub_item;
                            break;
                        case "add_item":
                            thisObj.thisSelector.add_item = parameter.add_item;
                            break;
                        case "num_item":
                            thisObj.thisSelector.num_item = parameter.num_item;
                            break;
                        case "confirm_item":
                            thisObj.thisSelector.confirm_item = parameter.confirm_item;
                            break;
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
            	thisObj.thisBindEventClick.subItemClick(); // 减少按钮点击事件
                thisObj.thisBindEventClick.addItemClick(); // 增加按钮点击事件
            },
            addItemClick : function(){
                var addItemSel = "."+thisObj.thisSelector.add_item;
                $(addItemSel).click(function(){
                    thisObj.thisEventProcessing.eventProAddItemClick(this);
                });
            },
            subItemClick : function(){
                 var subItemSel = "."+thisObj.thisSelector.sub_item;
                $(subItemSel).click(function(){
                    thisObj.thisEventProcessing.eventProSubItemClick(this);
                });
            },
           
        }
            //  处理事件
        thisObj.thisEventProcessing = {
    
            eventProAddItemClick : function(this_obj){
                var numItemSel = "."+thisObj.thisSelector.num_item;
                var number = parseInt($(numItemSel).val());
                number++;
                $(numItemSel).val(number);
                thisObj.thisEventProcessing.eventProTotalPrice(0);
            },
            eventProSubItemClick : function(this_obj){
                var numItemSel = "."+thisObj.thisSelector.num_item;
                var number = parseInt($(numItemSel).val());
                number--;
                if (number<1) {
                    $(numItemSel).val(1);
                    thisObj.thisEventProcessing.eventProTotalPrice(1);
                }else{
                    $(numItemSel).val(number);
                    thisObj.thisEventProcessing.eventProTotalPrice(2);
                }
            },
            
            eventProTotalPrice : function(index){
                var numItemSel = "."+thisObj.thisSelector.num_item;
                var totalPriceSel = "."+thisObj.thisSelector.total_price;
                var t_price = parseInt($(totalPriceSel).text()); // 获取单价
                var number = parseInt($(numItemSel).val()); // 获取数量
                if(index==0){ // 点击增加按钮的情况
                    // 获取每件商品的单价
                    var t_price = t_price/(number-1);
                }
                if (index==1) { // 点击减少按钮之前  input输入框的值已经为1时
                    // 不作处理 获取的价格就是当前商品的单价
                }
                if (index==2) { // 点击减少按钮之前 input输入框的值大于1时
                     var t_price = t_price/(number+1);
                }
                var t_price = number*t_price;
                $(totalPriceSel).text(t_price);
            },
             
        }

       
		thisObj.thisObjInit(parameter);
		start();
            
	}
};