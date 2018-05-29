var Index = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
		};

		thisObj.thisSelector = {
            container_nav_item           :"",
            nav_active	:"",
            bottom_border    :"",
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
                        case "container_nav_item":
                            thisObj.thisSelector.container_nav_item = parameter.container_nav_item;
                            break;                        
                        case "nav_active":
                            thisObj.thisSelector.nav_active = parameter.nav_active;
                            break;
                        case "bottom_border":
                            thisObj.thisSelector.bottom_border = parameter.bottom_border;
                            break;
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
                    // var itemSel = "."+thisObj.thisSelector.container_nav_item;
                    // var bottomImg = "."+thisObj.thisSelector.bottom_border;
                    // $(bottomImg).css("display","none");
                    // $(itemSel).removeClass(thisObj.thisSelector.nav_active);
                    // $(this).addClass(thisObj.thisSelector.nav_active);
                    // $(this).children(bottomImg).css("display","block");
                    // alert(55);
                });
            },
        }
        //  处理事件
        thisObj.thisEventPro = {
            eventProItem : function(this_obj){
                var itemSel = "."+thisObj.thisSelector.container_nav_item;
                var bottomImg = "."+thisObj.thisSelector.bottom_border;
                $(bottomImg).css("display","none");
                $(itemSel).removeClass(thisObj.thisSelector.nav_active);
                $(this_obj).addClass(thisObj.thisSelector.nav_active);
                 $(this_obj).children(bottomImg).css("display","block");
            },          
        }

        
        
       
		thisObj.thisObjInit(parameter);
		start();
	}
};