var ProductPar = {
    init : function(parameter,e_option){
        var this_Obj = {};
        start = function(parameter,e_option){
            //listen click
            this_Obj.thisBindEventClick.bindEvent();
            //element init
            //output
        };
        // 生成保存json 数据的数组
        this_Obj.sizeArray = new Array(); // 保存尺码项的数组
        this_Obj.colorArray = new Array(); // 保存颜色项的数组

        this_Obj.thisSelector = {
            footer_show                   : "",   //底部导航栏最外层选择器
            footer_n              : "",   //点击按钮的父选择器
            footer_n_img                : "",   //点击按钮选择器
            container_size          : "",   //尺码选项最外层选择器
            container_size_com    : "",   //尺码选项父选择器
            container_color         : "",   // 颜色选项最外层选择器
            container_color_com   : "",   // 颜色选项父选择器
            container_popup          : "",   // 数量选择器根部选择器
            container_popup_show    : "",   // 减少
            page         : "",   
            // container_sel_item_1_class   : "",   // 类别导航三级菜单项
            // page                         : "",   //  整个页面 
        }
        this_Obj.thisObjInit = function(parameter,e_option){
            // 解析类名
           this_Obj.thisParsingJson.ParsingJson(parameter);
            // 解析菜单项
            this_Obj.thisParsingJson.ParsingJsonMenu(e_option);
        },

        // 解析JSON格式参数
        this_Obj.thisParsingJson = {
            ParsingJson : function(parameter){
                // alert(parameter);
                $.each(parameter,function(i,item){
                    // i是键  item是值this_Obj
                    // alert(i);
                    this_Obj.initSelector.initSelectorJson(parameter,i,item);

                });
            },

            ParsingJsonMenu : function(e_option){
                // var classItem = new Array();
                $.each(e_option,function(i,item){
                    if(i=="size"){
                        var j=0;
                        $.each(item,function(i,item){
                            $.each(item,function(i,item){
                            	// alert(item);
                                j++;
                                this_Obj.sizeArray[j-1] = item;
                            });
                        });
                    }
                    
                    if(i=="color"){
                        var j = 0;
                        $.each(item,function(i,item){
                            $.each(item,function(i,item){
                                j++;
                                this_Obj.colorArray[j-1] = item;
                            });
                        });
                    }
                });
            }

        }

        this_Obj.initSelector = {
            initSelectorJson : function(parameter,i,item){
                    // alert(item);
                    if(i in parameter){
                        // // alert(parameter.i);
                        switch(i){

                            case "footer_show":
                                this_Obj.thisSelector.footer_show = parameter.footer_show;
                                break;
                            case  "footer_n":
                                this_Obj.thisSelector.footer_n = parameter.footer_n;
                                break;
                            case "footer_n_img":
                                this_Obj.thisSelector.footer_n_img = parameter.footer_n_img;
                                break;
                            case "container_size":
                                this_Obj.thisSelector.container_size = parameter.container_size;
                                break;
                            case "container_size_com":
                                this_Obj.thisSelector.container_size_com = parameter.container_size_com;
                                break;
                            case "container_color":
                                this_Obj.thisSelector.container_color = parameter.container_color;
                                break;
                            case "container_color_com":
                                this_Obj.thisSelector.container_color_com = parameter.container_color_com;
                                break;
                            case "container_popup":
                                this_Obj.thisSelector.container_popup = parameter.container_popup;
                                break;
                            case "container_popup_show":
                                this_Obj.thisSelector.container_popup_show = parameter.container_popup_show;
                                break;
                            case "page":
                                this_Obj.thisSelector.page = parameter.page;
                                break;
                            // case "container_sel_item_1_class":
                            //     thisObj.thisSelector.container_sel_item_1_class = parameter.container_sel_item_1_class;
                            //     break;
                            // case "page":
                            //     thisObj.thisSelector.page = parameter.page;
                            //     break;
                        }
                    }
            },
        }
        
        // 绑定点击事件
        this_Obj.thisBindEventClick = {
            
            bindEvent : function(){
                this_Obj.thisBindEventClick.bindEventCartClick();
                // 绑定页面点击事件
                this_Obj.thisBindEventClick.pageClick();
            },

            bindEventCartClick : function(){
            	//生成购物车点击按钮选择器
            	var cartSel = "."+this_Obj.thisSelector.footer_show+" ."+this_Obj.thisSelector.footer_n+" ."+this_Obj.thisSelector.footer_n_img;
            	$(cartSel).click(function(){
            		this_Obj.EventProcessing.eventProCartClick();
            	});

            },	

            pageClick : function(){
                var pageSel = "."+this_Obj.thisSelector.page;

                $(pageSel).click(function(event){
                    this_Obj.EventProcessing.eventProPage(this,event);
                });
            },


	    }

	    // 处理事件
	    this_Obj.EventProcessing = {
	    	// 购物车点击处理事件
	    	eventProCartClick : function(){
	    		var  popups = "."+this_Obj.thisSelector.container_popup;
	    		// 是否在现实状态选择器
	    		var isShow = "."+this_Obj.thisSelector.container_popup_show;
	    		// 生成尺码父选择器
	    		var sizeGenCode = "."+this_Obj.thisSelector.container_size+" ."+this_Obj.thisSelector.container_size_com;
	    		// 生成颜色父选择器
	    		var colorGenCode = "."+this_Obj.thisSelector.container_color+" ."+this_Obj.thisSelector.container_color_com;
	    		// 判断弹窗是否在显示状态
	    		if($(popups).hasClass(isShow)){
	    			// var sizeCode = thisObj.GenCode.genCodeSize();
	    			// 移除动态生成的代码
	    			$(sizeGenCode).children().remove();  
	    			$(colorGenCode).children().remove();
	    			// 在现实状态 
	    			$(popups).css("display","none");
	    			$(popups).removeClass(isShow);
	    		}else{
	    			// 不在显示状态
	    			$(popups).css("display","block");
	    			$(popups).addClass(isShow);
	    			// 获取尺码动态生成的代码
	    			var sizeCode = this_Obj.GenCode.genCodeSize();
	    			// 添加在父容器内
	    			$(sizeGenCode).append(sizeCode);

	    			var colorCode = this_Obj.GenCode.genCodeColor();
	    			$(colorGenCode).append(colorCode);
	    		}
	    	},

	    	eventProPage : function(this_obj,e){
	    		var isShow = "."+this_Obj.thisSelector.container_popup_show;
	    		// 底部导航的高度
                var headerNavHeight = $("."+this_Obj.thisSelector.footer_show).height();
                // 获取动态生成的菜单栏的高度
                var dynMenuHeight = $("."+this_Obj.thisSelector.container_popup).height();
                // 屏幕的高度
               	var Height = $(window).height();
                // 获取屏幕滚动的高度
                var scrollTopHeight = $(window).scrollTop();
               	// page  没有被挡住部分的高度
               	var showHei = Height-headerNavHeight-dynMenuHeight+scrollTopHeight;
               	// 生成尺码父选择器
                var heightY = e.pageY;
                if(heightY<showHei){
                    this_Obj.EventProcessing.isShowShopPra();
                }
            },
            isShowShopPra : function(){
                var popups = "."+this_Obj.thisSelector.container_popup;
                // 是否在现实状态选择器
                var sizeGenCode = "."+this_Obj.thisSelector.container_size+" ."+this_Obj.thisSelector.container_size_com;
                // 生成颜色父选择器
                var colorGenCode = "."+this_Obj.thisSelector.container_color+" ."+this_Obj.thisSelector.container_color_com;
                // 获取当前点击位置的Y坐标
                
                $(popups).css("display","none");
                $(popups).removeClass(isShow);
                $(sizeGenCode).children().remove();  
                $(colorGenCode).children().remove();
            },
	    } 

	    // 动态生成代码
	    this_Obj.GenCode = {

	    	// 生成尺码代码
	    	genCodeSize : function(){

	    		var  sizeCode = "";
	    		var j = 0;
	    		$(this_Obj.sizeArray).each(function(){
	    			// alert(thisObj.sizeArray[j]);
	    			sizeCode = sizeCode + '<li class="container_size_com_item">'+this_Obj.sizeArray[j]+'</li>';
	    			j++;
	    		});
	    		return sizeCode;
	    	},

	    	// 生成颜色代码
	    	genCodeColor : function(){
	    		var  colorCode = "";
	    		var j = 0;
	    		$(this_Obj.colorArray).each(function(){
	    			// alert(thisObj.sizeArray[j]);
	    			colorCode = colorCode + '<li class="container_color_com_item">'+this_Obj.colorArray[j]+'</li>';
	    			j++;
	    		});
	    		return colorCode;
	    	},

	    }


        this_Obj.thisObjInit(parameter,e_option);
        start();
    }
};