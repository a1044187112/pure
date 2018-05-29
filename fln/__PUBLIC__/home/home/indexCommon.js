var IndexCommon = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
		};

		thisObj.thisSelector = {
            release_btn           :"",
            a_btn	:"",
            img_btn    :"",
            mycanvas    :"",
            release_url     :"",
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
                        case "release_btn":
                            thisObj.thisSelector.release_btn = parameter.release_btn;
                            break;                        
                        case "a_btn":
                            thisObj.thisSelector.a_btn = parameter.a_btn;
                            break;
                        case "img_btn":
                            thisObj.thisSelector.img_btn = parameter.img_btn;
                            break;
                        case "mycanvas":
                            thisObj.thisSelector.mycanvas = parameter.mycanvas;
                            break;
                        case "release_url":
                            thisObj.thisSelector.release_url = parameter.release_url;
                            break;
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
                thisObj.thisBindEventClick.releaseBtnClick();
                thisObj.thisBindEventClick.canvasBtnClick();
                thisObj.thisBindEventClick.imgBtnClick();
            },
            releaseBtnClick : function(){
                var relBtnSel = "."+thisObj.thisSelector.release_btn;
                $(relBtnSel).click(function(){
                    thisObj.thisEventProcessing.eventProReleaseBtnClick();
                });
            },
            canvasBtnClick : function(){
                var canSel = "#"+thisObj.thisSelector.mycanvas;
                // alert(54);
                $(canSel).click(function(){
                     thisObj.thisEventProcessing.eventProCanvasBtnClick();
                });
            },
            imgBtnClick : function(){
                var imgSel = "."+thisObj.thisSelector.img_btn;
                $(imgSel).click(function(){
                    thisObj.thisEventProcessing.eventProImgBtnClick();
                });
            },
        }
        //  处理事件
        thisObj.thisEventProcessing = {
    
           eventProReleaseBtnClick : function(){
                var Asel = "."+thisObj.thisSelector.a_btn;
                $(Asel).css("display","block");
                var bottomHeight = $("."+thisObj.thisSelector.release_btn).height();
                thisObj.canvas.drawImage();
                $(Asel).css("bottom",bottomHeight+"px");
           },
           eventProCanvasBtnClick : function(){
                var Asel = "."+thisObj.thisSelector.a_btn;
                $(Asel).css("display","none");
           },
           eventProImgBtnClick : function(){
                window.location.href=thisObj.thisSelector.release_url;
           },
             
        }

        thisObj.canvas = {
            drawImage : function(){
                var can = document.getElementById(thisObj.thisSelector.mycanvas);
                var ctx = can.getContext("2d");
                ctx.moveTo(5,5); 
                ctx.lineTo(20,20);
                ctx.moveTo(5,20); 
                ctx.lineTo(20,5);
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#c40926";
                ctx.stroke();
            },
        }
       
		thisObj.thisObjInit(parameter);
		start();
	}
};