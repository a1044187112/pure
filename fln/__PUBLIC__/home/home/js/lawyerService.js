var LawyerService = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
            thisObj.canvasDraw.drawImage();
		};

		thisObj.thisSelector = {
            mycanvas           :"",
            canvasUrl	:"",
            // bottom_border    :"",
            // mycanvas    :"",
            // release_url     :"",
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
                        case "canvasUrl":
                            thisObj.thisSelector.canvasUrl = parameter.canvasUrl;
                            break;
                        // case "bottom_border":
                        //     thisObj.thisSelector.bottom_border = parameter.bottom_border;
                        //     break;
                        // case "mycanvas":
                        //     thisObj.thisSelector.mycanvas = parameter.mycanvas;
                        //     break;
                        // case "release_url":
                        //     thisObj.thisSelector.release_url = parameter.release_url;
                        //     break;
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
                thisObj.thisBindEventClick.itemClick();
            },
            itemClick : function(){
                var itemSel = "."+thisObj.thisSelector.container_nav_item;
                 // alert(itemSel);
                $(itemSel).click(function(){
                    thisObj.thisEventPro.eventProItem(this);
                    
                });
            },
        }
        //  处理事件
        thisObj.thisEventPro = {
                    
        }

        thisObj.canvasDraw = {
            drawImage : function(){
                var can = document.getElementsByClassName(thisObj.thisSelector.mycanvas);
                $(can).each(function(){
                    var cxt = this.getContext("2d");
                    cxt.lineWidth = "1.5";
                    cxt.moveTo(7,4);
                    cxt.lineTo(19,12);
                    cxt.lineTo(7,20);
                    cxt.strokeStyle = "#888";
                    cxt.stroke();
                });
            },
        }
        
       
		thisObj.thisObjInit(parameter);
		start();
	}
};