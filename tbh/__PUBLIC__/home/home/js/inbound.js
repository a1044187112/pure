var Inbound = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
            thisObj.draw.drawImage();
		};

		thisObj.thisSelector = {
			container_cart :"",
			container_cart_img :"",
			contaienr_btn_item :"",
            mycanvas           :"",
            delete_btn         :"",
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
						case "container_cart":
                                thisObj.thisSelector.container_cart = parameter.container_cart;
                                break;
                            case  "container_cart_img":
                                thisObj.thisSelector.container_cart_img = parameter.container_cart_img;
                                break;
                            case "container_btn_item":
                                thisObj.thisSelector.container_btn_item = parameter.container_btn_item;
                                break;
                            case "mycanvas":
                                thisObj.thisSelector.mycanvas = parameter.mycanvas;
                                break;
                            case "delete_btn":
                                thisObj.thisSelector.delete_btn = parameter.delete_btn;
                                break;
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
            	thisObj.thisBindEventClick.swipeLeftOrRight(); // 左右滑动事件
                thisObj.thisBindEventClick.swipeUpOrDown(); // 上下滑动事件
                thisObj.thisBindEventClick.deleteItemClick(); // 删除按钮点击事件
                thisObj.thisBindEventClick.canvasRightClick(); // 向右箭头点击事件
                thisObj.thisBindEventClick.editBtnClick(); // 编辑按钮点击事件
            },

            swipeLeftOrRight : function(){
                // thisObj.thisEventProcessing.eventProcssingLeftOrRight();
            },
            swipeUpOrDown : function(){
            	// thisObj.thisEventProcessing.eventProcssingUpOrDown();
            },
            deleteItemClick : function(){
                var delBtn = "."+thisObj.thisSelector.container_cart+" ."+thisObj.thisSelector.container_btn_item;
                $(delBtn).click(function(){
                    thisObj.thisEventProcessing.eventProcssingDeleteBtnClick(this);
                });
            },
            canvasRightClick : function(){
                var mycanvasSel = "."+thisObj.thisSelector.container_cart+" ."+thisObj.thisSelector.mycanvas;
                $(mycanvasSel).click(function(){
                    CtrlElAction.isSimPost=false;
                    HomeCtrlElAction.btnFunc.btnDataSubmit(this);
                    
                    // window.location.href="/tbh/tmpl/home/waitReceipt.html";
                });
            },
            editBtnClick : function(){
                var editBtn = "."+thisObj.thisSelector.container_cart+" ."+thisObj.thisSelector.delete_btn;
                $(editBtn).click(function(){
                    thisObj.thisEventProcessing.eventProcssingCanvasRightClick(this);
                    // thisObj.thisEventProcessing.eventProcssingEditBtnClick();
                });
            },
        }
            //  处理事件
        thisObj.thisEventProcessing = {
          
          

            // 左右滑动处理事件
            // eventProcssingLeftOrRight : function(){
            //     var item = "."+thisObj.thisSelector.container_cart;
            //     var itemRadio = item+" ."+thisObj.thisSelector.container_cart_img;
            //     var itemDel = item +" ."+thisObj.thisSelector.container_btn_item;
            //     $(item).each(function(){
            //         $(this).swipe({fingers:"all", swipeLeft:swipe1, swipeRight:swipe2 });
            //         function swipe1(event, direction, distance, duration, fingerCount){
            //             // 左滑
            //             // $(this).css("transform","translate(-90px,0)");
            //             $(this).children(itemRadio).css("display","none");
            //             $(this).children(itemDel).css("display","block");
            //             $(this).children(".container_cart_info").css("width","48%");
            //         }
            //         function swipe2(event, direction, distance, duration, fingerCount){
            //             // $(this).css("transform","translate(0px,0px)");
            //             $(this).children(itemRadio).css("display","block");
            //             $(this).children(itemDel).css("display","none");
            //              $(this).children(".container_cart_info").css("width","46%");
            //             // 右滑
            //         }
            //     });
            // },
            // 上下滑动处理事件
            // eventProcssingUpOrDown : function(){
            //     var selector = thisObj.thisSelector.page;
            //     $(selector).swipe({fingers:"all", swipeUp:swipe3, swipeDown:swipe4 });
            //         function swipe3(event, direction, distance, duration, fingerCount){
            //             // alert("上滑");
            //             var end_st = document.body.scrollTop + distance*2 + "px";
            //             $("body").animate({scrollTop: end_st},400);
            //         }

            //         function swipe4(event, direction, distance, duration, fingerCount){
            //             // alert("下滑");
            //             var end_st = document.body.scrollTop - distance*2;
            //             if(end_st < 0) end_st=0;
            //             end_st += "px";
            //             $("body").animate({scrollTop: end_st},400);
            //         }
            // },
            // 删除按钮事件
            eventProcssingDeleteBtnClick : function(this_obj){
                $(this_obj).parent().remove();
            },
             eventProcssingCanvasRightClick : function(this_obj){
                var item = "."+thisObj.thisSelector.container_cart;
                var itemRadio = item+" ."+thisObj.thisSelector.container_cart_img;
                var itemDel = item +" ."+thisObj.thisSelector.container_btn_item;
                if($(this_obj).hasClass("right")){
                    $(this_obj).removeClass("right");
                    $(this_obj).parentsUntil(item).parent().children(itemRadio).css("display","block");
                    $(this_obj).parentsUntil(item).parent().children(itemDel).css("display","none");
                    $(this_obj).parentsUntil(item).parent().children(".container_cart_info").css("width","46%");

                }else{
                    $(this_obj).addClass("right");
                    $(this_obj).parentsUntil(item).parent().children(itemRadio).css("display","none");
                    $(this_obj).parentsUntil(item).parent().children(itemDel).css("display","block");
                    $(this_obj).parentsUntil(item).parent().children(".container_cart_info").css("width","48%");
                }

             },

              eventProcssingCanvasRightClick : function(this_obj){
                var item = "."+thisObj.thisSelector.container_cart;
                var itemRadio = item+" ."+thisObj.thisSelector.container_cart_img;
                var itemDel = item +" ."+thisObj.thisSelector.container_btn_item;
                if($(this_obj).hasClass("right")){
                    $(this_obj).removeClass("right");
                    // $(this_obj).parentsUntil(item).parent().children(itemRadio).css("display","block");
                    // $(this_obj).parentsUntil(item).parent().children(itemDel).css("display","none");
                    // $(this_obj).parentsUntil(item).parent().children(".container_cart_info").css("width","46%");
                    $(this_obj).parentsUntil(item).parent().css("-webkit-animation","mysecond 1s");                  
                    $(this_obj).parentsUntil(item).parent().css("transform","translateX(0px)");
                    $(this_obj).text("编辑");
                }else{
                    $(this_obj).addClass("right");
                    // $(this_obj).parentsUntil(item).parent().children(itemRadio).css("display","none");
                    // $(this_obj).parentsUntil(item).parent().children(itemDel).css("display","block");
                    // $(this_obj).parentsUntil(item).parent().children(".container_cart_info").css("width","50%");
                    $(this_obj).text("完成");
                    $(this_obj).parentsUntil(item).parent().css("-webkit-animation","myfirst 1s");                  
                    $(this_obj).parentsUntil(item).parent().css("transform","translateX(-21%)");
                }
             },
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