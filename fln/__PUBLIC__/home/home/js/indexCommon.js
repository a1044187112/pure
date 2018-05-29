var IndexCommon = {
	init : function(parameter){
		thisObj_a = {};
		start = function(parameter){
			thisObj_a.thisBindEventClick.bindEvent();
		};

		thisObj_a.thisSelector = {
            release_btn           :"",
            a_btn	:"",
            img_btn    :"",
            mycanvas    :"",
            release_url     :"",
		};

		thisObj_a.thisObjInit = function(parameter){
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
                            thisObj_a.thisSelector.release_btn = parameter.release_btn;
                            break;                        
                        case "a_btn":
                            thisObj_a.thisSelector.a_btn = parameter.a_btn;
                            break;
                        case "img_btn":
                            thisObj_a.thisSelector.img_btn = parameter.img_btn;
                            break;
                        case "mycanvas":
                            thisObj_a.thisSelector.mycanvas = parameter.mycanvas;
                            break;
                        case "release_url":
                            thisObj_a.thisSelector.release_url = parameter.release_url;
                            break;
					}
				}
			},
		}
		// 绑定事件
		thisObj_a.thisBindEventClick = {
            bindEvent : function(){
                thisObj_a.thisBindEventClick.releaseBtnClick();
                thisObj_a.thisBindEventClick.canvasBtnClick();
                thisObj_a.thisBindEventClick.imgBtnClick();
                thisObj_a.thisBindEventClick.pageClick();
            },
            releaseBtnClick : function(){
                var relBtnSel = "."+thisObj_a.thisSelector.release_btn;
                $(relBtnSel).click(function(){
                    thisObj_a.thisEventProcessing.eventProReleaseBtnClick();
                });
            },
            canvasBtnClick : function(){
                var canSel = "#"+thisObj_a.thisSelector.mycanvas;
                // alert(54);
                $(canSel).click(function(){
                     thisObj_a.thisEventProcessing.eventProCanvasBtnClick();
                });
            },
            imgBtnClick : function(){
                var imgSel = "."+thisObj_a.thisSelector.img_btn;
                $(imgSel).click(function(){
                    thisObj_a.thisEventProcessing.eventProImgBtnClick();
                });
            },
            // page点击事件
            pageClick : function(){
                $('html,body').click(function(e){
                    // 点击非菜单区域 隐藏菜单
                    // alert(e.target);
                    if($(e.target).parents("footer").length == 0)
                        {
                            // e.target  触发事件的dom 元素 判断 如果点击的元素父类不是菜单dom元素 则隐藏菜单
                            // thisObj.EventProcessing.removeCode();
                            $("."+thisObj_a.thisSelector.a_btn).css("display","none");                       
                        }
                });
            },
        }
        //  处理事件
        thisObj_a.thisEventProcessing = {
    
           eventProReleaseBtnClick : function(){
                var Asel = "."+thisObj_a.thisSelector.a_btn;
                $(Asel).css("display","block");
                var bottomHeight = $("."+thisObj_a.thisSelector.release_btn).height();
                thisObj_a.canvas.drawImage();
                $(Asel).css("bottom",bottomHeight+"px");
           },
           eventProCanvasBtnClick : function(){
                var Asel = "."+thisObj_a.thisSelector.a_btn;
                $(Asel).css("display","none");
           },
           eventProImgBtnClick : function(){
                window.location.href=thisObj_a.thisSelector.release_url;
           },
             
        }

        thisObj_a.canvas = {
            drawImage : function(){
                var can = document.getElementById(thisObj_a.thisSelector.mycanvas);
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
       
		thisObj_a.thisObjInit(parameter);
		start();
	}
};