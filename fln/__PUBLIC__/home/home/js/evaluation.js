var Evaluation = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
		};

		thisObj.thisSelector = {
            container_eva           :"",
            container_eva_item		 :"",
            img_btn                 :"",
            eva_sel                 :"",
            eva_btn                 :"",
            selImgURL               :"",
            unselImgURL             :"",
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
                        case "container_eva":
                            thisObj.thisSelector.container_eva = parameter.container_eva;
                            break;   
                        case "container_eva_item":
                            thisObj.thisSelector.container_eva_item = parameter.container_eva_item;
                            break; 
                        case "img_btn":
                            thisObj.thisSelector.img_btn = parameter.img_btn;
                            break;  
                        case "eva_sel":
                            thisObj.thisSelector.eva_sel = parameter.eva_sel;
                            break;  
                        case "eva_btn":
                            thisObj.thisSelector.eva_btn = parameter.eva_btn;
                            break;  
                        case "selImgURL":
                            thisObj.thisSelector.selImgURL = parameter.selImgURL;
                            break; 
                        case "unselImgURL":
                            thisObj.thisSelector.unselImgURL = parameter.unselImgURL;
                            break;                                            
					}
				}
			},
		}
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
            	thisObj.thisBindEventClick.imgRadioClick();// 
            },

           imgRadioClick : function(){
                var imgRadio = "."+thisObj.thisSelector.img_btn;
                $(imgRadio).click(function(){
                    thisObj.thisEventProcessing.eventProImgRadioClick(this);
                });
           },
           
        }
            //  处理事件
        thisObj.thisEventProcessing = {
    
            eventProImgRadioClick : function(this_obj){
                var imgRadio = "."+thisObj.thisSelector.img_btn;
                // 移除之前的所有效果  
                $(imgRadio).attr("src",thisObj.thisSelector.unselImgURL);
                // 移除之前点击的可能动态存在的类名
                $(imgRadio).removeClass("active");
                // 把当前点击的改为选中状态
                $(this_obj).attr("src",thisObj.thisSelector.selImgURL);
                // 给当前点击的加上类名
                $(this_obj).addClass("active");
            },

             
        }

       
		thisObj.thisObjInit(parameter);
		start();
	}
};