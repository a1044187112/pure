var WaitService = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
            thisObj.draw.drawImage();
		};

		thisObj.thisSelector = {
            mycanvas           :"",
            mycanvas_been_payment_URL	:"",
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
                        case "mycanvas":
                            thisObj.thisSelector.mycanvas = parameter.mycanvas;
                            break;                        
                        case "mycanvas_been_payment_URL":
                            thisObj.thisSelector.mycanvas_been_payment_URL = parameter.mycanvas_been_payment_URL;
                            break;
                        
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
            	thisObj.thisBindEventClick.canvasBeenPaymentClick();
            },

           
            // 点击已支付栏
            canvasBeenPaymentClick : function(){
            	var mycanvasSel = "."+thisObj.thisSelector.mycanvas;
                $(mycanvasSel).click(function(){
                    window.location.href=thisObj.thisSelector.mycanvas_been_payment_URL;
                });
            },
           
        }
            //  处理事件
        thisObj.thisEventProcessing = {
    
            

             
        }

        // js绘图
        thisObj.draw = {
            drawImage : function(){
                var can = document.getElementsByClassName(thisObj.thisSelector.mycanvas);
                $(can).each(function(){
                     var ctx = this.getContext("2d");
                    ctx.strokeStyle="#999";
                    ctx.lineWidth = "2";
                    ctx.moveTo(2,0);
                    ctx.lineTo(15,13);
                    ctx.lineTo(2,25);
                    ctx.stroke();
                });
            },
        }
		thisObj.thisObjInit(parameter);
		start();
	}
};