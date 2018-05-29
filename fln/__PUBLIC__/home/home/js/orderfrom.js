var Orderfrom = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
            thisObj.draw.drawImage();
		};

		thisObj.thisSelector = {
            mycanvas           :"",
            mycanvas_payment	:"",
            mycanvas_been_payment :"",
            mycanvas_eva		:"",
            mycanvas_payment_URL	:"",
            mycanvas_been_payment_URL	:"",
            mycanvas_eva_URL	:"",
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
                        case "mycanvas_payment":
                            thisObj.thisSelector.mycanvas_payment = parameter.mycanvas_payment;
                            break;
                        case "mycanvas_been_payment":
                            thisObj.thisSelector.mycanvas_been_payment = parameter.mycanvas_been_payment;
                            break;
                        case "mycanvas_eva":
                            thisObj.thisSelector.mycanvas_eva = parameter.mycanvas_eva;
                            break;
                        case "mycanvas_payment_URL":
                            thisObj.thisSelector.mycanvas_payment_URL = parameter.mycanvas_payment_URL;
                            break;
                        case "mycanvas_been_payment_URL":
                            thisObj.thisSelector.mycanvas_been_payment_URL = parameter.mycanvas_been_payment_URL;
                            break;
                        case "mycanvas_eva_URL":
                            thisObj.thisSelector.mycanvas_eva_URL = parameter.mycanvas_eva_URL;
                            break;
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
                thisObj.thisBindEventClick.canvasRightClick(); // 向右箭头点击事件
            	thisObj.thisBindEventClick.canvasBeenPaymentClick();
            	thisObj.thisBindEventClick.CanvasEvaClick();
            },

            canvasRightClick : function(){
                var mycanvasSel = "."+thisObj.thisSelector.mycanvas_payment;
                $(mycanvasSel).click(function(){
                    window.location.href=thisObj.thisSelector.mycanvas_payment_URL;
                });
            },
            // 点击已支付栏
            canvasBeenPaymentClick : function(){
            	var mycanvasSel = "."+thisObj.thisSelector.mycanvas_been_payment;
                $(mycanvasSel).click(function(){
                    window.location.href=thisObj.thisSelector.mycanvas_been_payment_URL;
                });
            },
            //点击评价栏canvas
            CanvasEvaClick : function(){
            	var mycanvasSel = "."+thisObj.thisSelector.mycanvas_eva;
                $(mycanvasSel).click(function(){
                    alert(thisObj.thisSelector.mycanvas_eva_URL);
                    window.location.href=thisObj.thisSelector.mycanvas_eva_URL;
                    //alert(55);
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