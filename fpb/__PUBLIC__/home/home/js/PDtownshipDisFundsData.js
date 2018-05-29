var townDisFundsData = {
            selector : "",
            dataSet  : "",
            // 初始化数据
            init : function(parameter){
                townDisFundsData.selector = parameter[0].selector;
                townDisFundsData.dataSet = parameter[1].areaData;
                townDisFundsData.start(townDisFundsData.selector,townDisFundsData.dataSet);
                
            },
            start : function(selector,dataSet){
                //动态生成乡镇代码
                townDisFundsData.bindEvent.fundsDataArea(selector,dataSet);
                // 生成小白方块的代码
                townDisFundsData.bindEvent.fundsDataBox(selector,dataSet);
                // 生成所占比例条
                townDisFundsData.bindEvent.fundsDataProportion(selector,dataSet);
                // 计算每一个所占扶贫资金的比例
                townDisFundsData.bindEvent.computeProportion(selector,dataSet);
            },
    //  绑定事件的操作
    bindEvent : {
        fundsDataArea : function(selector,dataSet){
                var areaSel = "."+selector.tomnshipName;
                var _html = townDisFundsData.genCode.genCodeArea(dataSet);
                $(areaSel).append(_html);
            },
        fundsDataBox : function(selector,dataSet){
                var boxSel = "."+selector.whiteBox;
                var _html =  townDisFundsData.genCode.genCodeWhiteBox(dataSet);
                $(boxSel).append(_html);
            },
        fundsDataProportion : function(selector,dataSet){
                var proportionSel = "."+selector.dataSet;
                var _html = townDisFundsData.genCode.genCodeProportion(dataSet);
                $(proportionSel).append(_html);
            },
        computeProportion : function(selector,dataSet){
                // 获取总的扶贫资金
                var fundsTotal = selector.funds;
                // 将扶贫资金加入到信息中
                $("."+selector.totalPriceSel).text(fundsTotal);
                townDisFundsData.eventPro.townProPerData(dataSet,fundsTotal);
            },
    },
            
            
            
            
    // 处理事件的操作
    eventPro : {
        townProPerData : function(dataSet,fundsTotal){
            // 遍历area  计算每一个乡或镇扶贫资金所占的百分比
                $.each(dataSet,function(index){
                    if(parseInt(fundsTotal)!=0){
                        var funds = this.funds;
                        var value = Math.round(parseInt(this.funds)/parseInt(fundsTotal)*100);
                        // 对每一个设置动画效果
                        // $($(".data_item_value")[index]).css("width",value*0.56+"%"); // 设置所占比例的显示div的宽度
                        $($(".data_item_value")[index]).animate({
                            width: "+="+value*0.55+"%", // 每一个所占比例item的宽度
                        }, 2000,function(){
                            townDisFundsData.eventPro.setUpCanvasPosition(funds,value*0.56,bgColor,index);
                        });
                        var bgColor = $($(".data_item_value")[index]).css("background-color");
                        // townDisFundsData.eventPro.setUpCanvasPosition(this.funds,value*0.56,bgColor,index);
                    }else{
                        $($(".data_item_value")[index]).css("width",0+"%");
                        // townDisFundsData.eventPro.setUpCanvasPosition(0,0,bgColor,index);
                    }
                    
                });
        },
        // 每一个canvas  在图形中的定位
        setUpCanvasPosition : function(num,value,bgColor,index){
            if(index%2 == 0 ){
                    bgColor = "rgba(5,128,198,0.7)";
                    // alert(bgColor);
                }
                $($(".data_canvas")[index]).css("left",(value+17)+"%");
                $($(".data_canvas")[index]).css("top",index*37+34+"px");
                var can = document.getElementsByClassName("data_canvas")[index];
                can.width = 200;
                can.height = 100;
                $($(".data_canvas")[index]).css("width","12%");
                $($(".data_canvas")[index]).css("height","20px");
                var cxt = can.getContext("2d");
                townDisFundsData.drawImg.drawFunds(cxt,num,bgColor);
        }
    },
    // 绘制图形的方法
    drawImg : {
        //  绘制提示每个乡镇的扶贫资金
            drawFunds : function(cxt,num,bgColor){
                // alert(num);
                // $($(".data_canvas").css("top",34+"px");
                cxt.lineWidth = "2";
                cxt.beginPath();
                cxt.moveTo(1,1);
                cxt.lineTo(199,1);
                cxt.lineTo(199,70);
                cxt.lineTo(132,70);
                cxt.lineTo(100,100);
                cxt.lineTo(70,70);
                cxt.lineTo(1,70);
                cxt.closePath();
                cxt.fillStyle = bgColor;
                cxt.stroke();
                cxt.fill();
                cxt.fillStyle = "#ffffff";
                cxt.textBaseline = "middle";
                cxt.textAlign = "left";
                cxt.font = "70px 黑体";
                var textWidth = cxt.measureText(num).width; //获取所绘制的文字的宽度
                if (num==0) {
                    // alert(55);
                    // var textWidth = cxt.measureText("0.0").width;
                    cxt.fillText(num,100-textWidth/2,35);
                }else{
                    cxt.fillText(num,100-textWidth/2,35);
                }
            },
    },     
    // 生成代码的操作
    genCode : {
        //动态生成乡镇代码
            genCodeArea : function(dataSet){
                var _html = "";
                $.each(dataSet,function(){
                    _html += " <div class='data_item_area'>"+this.area+"</div>";
                });
                return _html;
            },
            genCodeWhiteBox : function(dataSet){
                var _html = "";
                $.each(dataSet,function(){
                    _html += " <div class='data_item_piece'></div>";
                });
                return _html;
            },
            genCodeProportion : function(dataSet){
                var _html = "";
                $.each(dataSet,function(){
                    _html += "<div class='data_item_pro'></div>\
                              <div class='data_item_value'></div>\
                              <canvas class='data_canvas'></canvas>";
                });
                return _html;
            },
    },
           
            
    // } ,

}