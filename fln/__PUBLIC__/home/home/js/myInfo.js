var MyInfo = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			// thisObj.thisBindEventClick.bindEvent();
            thisObj.thisEventPro.eventProHeight();
		};

		thisObj.thisSelector = {
            bg_hidden           :"",
            container	:"",
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
                        case "bg_hidden":
                            thisObj.thisSelector.bg_hidden = parameter.bg_hidden;
                            break;                        
                        case "container":
                            thisObj.thisSelector.container = parameter.container;
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
            },
            
        }
        //  处理事件
        thisObj.thisEventPro = {
             eventProHeight : function(){
                var bgHiddenSel = "."+thisObj.thisSelector.bg_hidden;
                var conSel = "."+thisObj.thisSelector.container;
                var conHeight = $(conSel).height();
                var windowHeight = $(window).height();
                var bgHeight = windowHeight - conHeight +"px";
                $(bgHiddenSel).css("height",bgHeight);
                $(window).resize(function(){
                     $(bgHiddenSel).css("height",bgHeight);
                });
             },       
        }

        
        
       
		thisObj.thisObjInit(parameter);
		start();
	}
};