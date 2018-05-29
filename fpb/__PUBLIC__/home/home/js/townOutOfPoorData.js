var TownOutOfPoorData = {
    init : function(parameter){
        var thisObj = {};
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
                var _html = thisObj.genCode.genCodeBgTable(rowsNum+12,colsNum);
                thisObj.thisEventProcessing.eventProJoinCode(tableSel,_html);

          },
          
        }
        // 处理事件
        thisObj.thisEventProcessing = {
            // 将生成的代码加入页面中
            eventProJoinCode : function(tableSel,_html){
                $(tableSel).children().remove(); // 移除之前生成的 
                $(tableSel).append(_html);  // 添加代码
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