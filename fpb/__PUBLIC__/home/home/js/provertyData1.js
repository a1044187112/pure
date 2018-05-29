var PovertyData1 = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
            // thisObj.Animation.update();
		};
        thisObj.tScale  = window.devicePixelRatio;
		thisObj.thisSelector = {
            bg      :"",
            bg_table:"",
            bg_td   :"",
            return_canvas   :"",
            next_canvas     :"",
            draw_rect       :"",
            map_area        :"",
            menu_item       :"",
            img_border      :"",
            img_border_con  :"",
            img_border_line :"",
            menu_item_page  :"",
            pageSet         :"",
            outOfPoorMea    :"",

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
                    thisObj.thisSelector[i] = parameter[i];
				}
			},
		}
		thisObj.thisBindEventClick = {
            bindEvent : function(){
                // 生成表格表格背景
                thisObj.thisBindEventClick.tableBg();
                // 绘制导航的前进 后退按钮
                thisObj.drawBtn.bindDraw();
                //扶贫导航下的事件
                thisObj.outOfPoorNav.init();
                //  扶贫措施下滑效果
                thisObj.thisBindEventClick.outPoorSlideDown();
            },
          tableBg : function(){
            // table的选择器 和每一个小格的选择器
            var tableSel = "."+thisObj.thisSelector.bg;
            var tableTdSel = tableSel+" ."+thisObj.thisSelector.bg_td;
            // 获取body的宽度 和高度
            var scrollWidth = $("body").width();
            var scrollHeight = $("body").height();
            // 获取背景小格中每个小格的宽高
            var tableWidth = $(tableTdSel).css("width");
            var tableHeight = $(tableTdSel).css("height");
            //算出需要多少行
            var rowsNum = parseInt(parseInt(scrollHeight)/parseInt(tableHeight));
            // 算出多少列
            var colsNum = parseInt(parseInt(scrollWidth)/parseInt(tableWidth));
            // 返回动态生成的代码
            var _html = thisObj.genCode.genCodeBgTable(rowsNum+5,colsNum);
            thisObj.thisEventProcessing.eventProJoinCode(tableSel,_html);

          },
          outPoorSlideDown : function(){
            $(".content").slideDown(3000);
            $(".content_img").css("margin-top","20px");
          },




        }
        
        thisObj.thisEventProcessing = {
            // 将生成的代码加入页面中
            eventProJoinCode : function(tableSel,_html){
                $(tableSel).children().remove(); // 移除之前生成的 
                $(tableSel).append(_html);  // 添加代码
            },
        }
        thisObj.outOfPoorNav = {
            init : function(){
                // nav  点击事件
                thisObj.outOfPoorNav.setNavClick();
                
                // thisObj.outOfPoorNav.setIframeHeight();
                // 绑定滚动条的上下滑动事件
                // thisObj.outOfPoorNav.scrollBarSlide();
                setTimeout("thisObj.outOfPoorNav.showIframe()",3000);
            },
            // 当css3  动画效果执行完之后 显示frame
            showIframe : function(){
                // $("."+thisObj.thisSelector.img_border).css("animation","opacity_myfirst 2.5s");
                // $("."+thisObj.thisSelector.img_border).css("opacity","1");
                // $("."+thisObj.thisSelector.img_border).slideDown(2000);
                $("."+"img1").slideDown(2000);
                $("."+"img_border_con").slideDown(2000);
                $("."+"img_border_line").slideDown(2000);
                $("."+"menu_item_page").slideDown(2000);
                //  设置 iframe 的高度 和图片高度一样  
                setTimeout("thisObj.outOfPoorNav.setIframeHeight()",2000);
            },
            setNavClick : function(){
                // $("."+thisObj.thisSelector.img_border).hide();
                // 获取导航选择器
                var navSel = "."+thisObj.thisSelector.menu_item;
                $(navSel).click(function(index){
                    //  点击二级菜单之后将iframe  设置为显示
                    var this_obj = this;
                    var i = 0;
                    $(navSel).each(function(index){
                        if(this_obj == this){
                            i = index;
                        }
                        // 改变字体颜色
                        $(this).css("color","#00dcff");
                    });
                    $(this).css("color","#0eef27");
                    // 更换页面 
                    thisObj.outOfPoorNav.jumpPage(i);
                });
            },
            jumpPage : function(index){
                // 获取ifream 选择器   
                var iframeSel = "."+thisObj.thisSelector.menu_item_page;
                $(iframeSel).attr("src",thisObj.thisSelector.pageSet[index].page);
            },
            setIframeHeight : function(){
                // 获取ifream 选择器   
                var iframeSel = "."+thisObj.thisSelector.menu_item_page;
                //  获取背景图片选择器 
                var bgImgSel = "."+thisObj.thisSelector.img_border_con;
                var bgHeight = $(bgImgSel).css("height");
                var iframeHeight = parseInt(bgHeight)-23;
                $(iframeSel).css("height",iframeHeight+"px");
                // 获取iframe  内部  html 文件body的高度  并设置 滚动条的高度
                thisObj.outOfPoorNav.setIframeScrollBar(iframeHeight);
                
            },
            setIframeScrollBar : function(iframeHeight){
                var iframeSel = "."+thisObj.thisSelector.menu_item_page;
                // 获取滚动条选择器
                var scrollBarSel = "."+thisObj.thisSelector.img_border_line;
                $(iframeSel).load(function(){
                    // 获取iframe  内部heml页面的高度
                    var mainheight = $(this).contents().find("body").height()+30;
                    // 算计  iframe 与内部heml页面的高度比
                    var hPro = iframeHeight/mainheight;
                    if(hPro>=1){
                        //hPro  大于等于1时  iframe 比 内部heml页面的高度 的高度要高 不做处理
                    }else{
                        // 获取滚动条的原始高度 
                        var scrollBarHeight = $(scrollBarSel).css("height");
                        // 将滚动条按比例缩放
                        $(scrollBarSel).css("height",parseInt(scrollBarHeight)*hPro+"px");
                    }
                });
            },
            scrollBarSlide : function(){
               // 获取滚动条选择器
                var iframeSel = "."+thisObj.thisSelector.menu_item_page;
                 $(iframeSel).swipe( {
                    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                      if(direction == "up")//向上滑动
                      {
                            alert("up");
                      }
                      else if(direction == "down")//向下滑动
                      {
                        alert("down");
                      }
                    }
                });
            },

        }
        thisObj.drawBtn = {
            bindDraw : function(){
                // 返回按钮
                thisObj.drawBtn.returnDraw();
                thisObj.drawBtn.nextDraw();
            },
            returnDraw : function(){
                // var returnSel = "."+thisObj.thisSelector.return_canvas;
                var can = document.getElementById(thisObj.thisSelector.return_canvas);
                can.width = 200;
                can.height = 100;
                $("#"+thisObj.thisSelector.return_canvas).css("width","15%");
                $("#"+thisObj.thisSelector.return_canvas).css("height","60px");
                var cxt = can.getContext("2d");
                cxt.lineWidth = "6";
                cxt.strokeStyle = "#00ffff";
                cxt.beginPath();
                cxt.moveTo(150,10);
                cxt.lineTo(5,50);
                cxt.lineTo(150,95);
                cxt.closePath();
                cxt.fillStyle = "#005667";
                cxt.stroke();
                cxt.fill();
                cxt.lineWidth = "1";
                cxt.font = "34px 黑体";
                cxt.fillStyle = "#00ffff"; 
                cxt.fillText("返回",75,62);
            },
            nextDraw : function(){
                var can = document.getElementById(thisObj.thisSelector.next_canvas);
                can.width = 200;
                can.height = 100;
                $("#"+thisObj.thisSelector.next_canvas).css("width","15%");
                $("#"+thisObj.thisSelector.next_canvas).css("height","60px");
                var cxt = can.getContext("2d");
                cxt.lineWidth = "6";
                cxt.strokeStyle = "#00ffff";
                cxt.beginPath();
                cxt.moveTo(5,5);
                cxt.lineTo(150,45);
                cxt.lineTo(5,90);
                cxt.closePath();
                cxt.fillStyle = "#005667";
                cxt.stroke();
                cxt.fill();
                cxt.lineWidth = "1";
                cxt.font = "34px 黑体";
                cxt.fillStyle = "#00ffff"; 
                cxt.fillText("前进",10,57);
            },
        }
        
       
        
        
        

        // 动态生成代码
        thisObj.genCode = {
            // 背景网格代码生成
            genCodeBgTable : function(rowsNum,colsNum){
                var _html = "";
                // 生成每一个小格
                var tableHtml = "";
                for(var i = 0;i<colsNum;i++){
                    tableHtml += "<td class='bg_td'></td>";
                }

                for(var i = 0;i<rowsNum;i++){
                    _html += "<tr class='bg_tr'>"+tableHtml+"</tr>";
                }
                return _html;
            },
            //动态生成乡镇代码
            genCodeArea : function(_html){
                var _html = "";
                $.each(thisObj.thisSelector.area,function(){
                    _html += " <div class='data_item_area'>"+this.area+"</div>";
                });
                return _html;
            },
            genCodeWhiteBox : function(){
                var _html = "";
                $.each(thisObj.thisSelector.area,function(){
                    _html += " <div class='data_item_piece'></div>";
                });
                return _html;
            },
            genCodeProportion : function(){
                var _html = "";
                $.each(thisObj.thisSelector.area,function(){
                    _html += "<div class='data_item_pro'></div>\
                              <div class='data_item_value'></div>\
                              <canvas class='data_canvas'></canvas>";
                });
                return _html;
            },
        }   
       
       
       

     

		thisObj.thisObjInit(parameter);
		start();
        
	}
};