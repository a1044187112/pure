var WaitReceipt = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
            thisObj.draw.drawImage();
		};

		thisObj.thisSelector = {
            mycanvas           :"",
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
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
                thisObj.thisBindEventClick.canvasRightClick(); // 向右箭头点击事件
            },

            canvasRightClick : function(){
                var mycanvasSel = "."+thisObj.thisSelector.mycanvas;
                $(mycanvasSel).click(function(){
                    window.location.href="/tbh/tmpl/home/logInfo.html";
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
                    ctx.strokeStyle="#888";
                    ctx.lineWidth = "2";
                    ctx.moveTo(0,0);
                    ctx.lineTo(15,13);
                    ctx.lineTo(0,25);
                    ctx.stroke();
                });
            },
        }
		thisObj.thisObjInit(parameter);
		start();
	}
};