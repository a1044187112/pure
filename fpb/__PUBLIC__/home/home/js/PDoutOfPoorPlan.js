var PDoutOfPoorPlan  = {
    selector : "",
    dataSet  : "",
    bodyW    : "",
      // 初始化参数
    init : function(parameter){
        PDoutOfPoorPlan.selector = parameter[0].selector;
        PDoutOfPoorPlan.dataSet = parameter[1].data;
        //  获取body 宽度 适配字体大小
        PDoutOfPoorPlan.bodyW = $("body").css("width");
        // alert(PDoutOfPoorPlan.bodyW);
        // alert( PoorRea.dataSet); 
        PDoutOfPoorPlan.start(PDoutOfPoorPlan.selector,PDoutOfPoorPlan.dataSet);

    },
    start : function(selector,dataSet){
         PDoutOfPoorPlan.initCanvas.dataInit(selector,dataSet);
    }, 
    // 初始化画布
    initCanvas : {
        dataInit : function(selector,dataSet){
                var WIDTH = parseInt($("."+selector.data_table).css("width")); //获取屏幕宽度
                var can = document.getElementById(selector.data_canvas);
                can.height = WIDTH;  // 设置canvas的高度
                can.width = WIDTH;
                var cxt = can.getContext("2d");
                $("#"+selector.data_canvas).css("width",WIDTH+"px");
                $(".data_table").css("height",WIDTH/5*4+"px");
                $("#"+selector.data_canvas).css("height",WIDTH+"px");
                PDoutOfPoorPlan.callTheMethod.init(cxt,WIDTH,dataSet);
        },    
    },
    //  调用方法的集合 
    callTheMethod : {
       init : function(cxt,x,dataSet){
                // 绘制文字
                 PDoutOfPoorPlan.canvasDraw.drawFonts(cxt,x,dataSet);
                // 绘制最外层的边框
                PDoutOfPoorPlan.canvasDraw.canvasDrawBorder.drawBorderInit(cxt,x);
                // 绘制内部数据占比例的圆
                PDoutOfPoorPlan.canvasDraw.drawDataRadius(cxt,x);
                // 绘制左边的线条
                 PDoutOfPoorPlan.canvasDraw.drawLine.drawLineInit(cxt,x);
                
            }, 
    },
    //  canvas绘制  
    canvasDraw : {
        // 绘制最外层边框所有操作
        canvasDrawBorder : {
            drawBorderInit : function(cxt,x){
                PDoutOfPoorPlan.canvasDraw.canvasDrawBorder.drawBorderLeft(cxt,x);
                PDoutOfPoorPlan.canvasDraw.canvasDrawBorder.drawBorderLeftAngleL(cxt,x);
                PDoutOfPoorPlan.canvasDraw.canvasDrawBorder.drawBorderLeftAngler(cxt,x);
                PDoutOfPoorPlan.canvasDraw.canvasDrawBorder.drawBorderRight(cxt,x);
                PDoutOfPoorPlan.canvasDraw.canvasDrawBorder.drawBorderRightAngleT(cxt,x);
                PDoutOfPoorPlan.canvasDraw.canvasDrawBorder.drawBorderRightAngleB(cxt,x);
            },
            // 绘制最外层的边框  左边的框
            drawBorderLeft : function(cxt,x){
                cxt.lineWidth = "14";
                cxt.strokeStyle = "#00ffff";
                cxt.beginPath();
                cxt.moveTo(x/10*3,8);
                cxt.lineTo(x/10*2,8);
                cxt.lineTo(x/10*1,100);

                cxt.lineTo(x/10*1,x/7*4.3);
                cxt.lineTo(x/10*2,x/7*5.3);
                cxt.lineTo(x/10*7+30,x/7*5.3);
                cxt.lineTo(x/10*9,x/7*4.3);
                cxt.lineTo(x/10*9,x/7*5-100);
                cxt.stroke();
            },
            // 左边框上面的尖角
            drawBorderLeftAngleL : function(cxt,x){
                cxt.lineWidth = "1";
                cxt.strokeStyle = "#00ffff";
                cxt.beginPath();
                cxt.moveTo(x/10*3-1,1);
                cxt.lineTo(x/10*3+24,1);
                cxt.lineTo(x/10*3,15);
                cxt.closePath();
            },
            // 左边框右边的尖角
            drawBorderLeftAngler : function(cxt,x){
                cxt.fillStyle = "#00ffff";
                cxt.fill();
                cxt.beginPath();
                cxt.moveTo(x/10*9-7,x/7*5-99);
                cxt.lineTo(x/10*9-7,x/7*5-120);
                cxt.lineTo(x/10*9+7,x/7*5-100);
                cxt.closePath();
                cxt.fillStyle = "#00ffff";
                cxt.fill();
            },
            // 右边的框
            drawBorderRight : function(cxt,x){
                cxt.lineWidth = "14";
                cxt.strokeStyle = "#00ffff";
                cxt.beginPath();
                cxt.moveTo(x/10*5,8);
                cxt.lineTo(x/10*7+30,8);
                cxt.lineTo(x/10*9,x/7*1);
                cxt.lineTo(x/10*9,x/7*2.6);
                cxt.stroke();
            },
            // 右边框上面的尖角
            drawBorderRightAngleT : function(cxt,x){
                cxt.lineWidth = "1";
                cxt.strokeStyle = "#00ffff";
                cxt.beginPath();
                cxt.moveTo(x/10*5+1,1);
                cxt.lineTo(x/10*5-25,15);
                cxt.lineTo(x/10*5,15);
                cxt.closePath();
            },
             // 右边框右边的尖角
            drawBorderRightAngleB : function(cxt,x){
                cxt.fillStyle = "#00ffff";
                cxt.fill();
                cxt.beginPath();
                cxt.moveTo(x/10*9+7,x/7*2.6-1);
                cxt.lineTo(x/10*9+7,x/7*2.6+25);
                cxt.lineTo(x/10*9-7,x/7*2.6-1);
                cxt.closePath();
                cxt.fillStyle = "#00ffff";
                cxt.fill();
            },

        },
        drawFonts : function(cxt,x){
                cxt.lineWidth = "1";
                cxt.fillStyle = "#0eef27";
                cxt.font = "25px 黑体";
                //  判断是否有值
                if(PDoutOfPoorPlan.selector.willPN!=""&&PDoutOfPoorPlan.selector.willPN!=0){
                    cxt.fillText(PDoutOfPoorPlan.selector.willPN,x/10*2.3,x/5*1.8-x/9*2*Math.cos(Math.PI/4*5)+10);
                    cxt.fillText(PDoutOfPoorPlan.selector.beenPN,x/10*7.2,x/5*1.8-x/9*2*Math.cos(Math.PI/4)-28);
                    cxt.strokeStyle = "#124072";
                    cxt.beginPath();
                    cxt.moveTo(x/10*1.2,x/7*4.5);
                    cxt.lineTo(x/10*8.7,x/7*4.5);
                    cxt.lineTo(x/10*7+30,x/7*5.3-7);
                    cxt.lineTo(x/10*2,x/7*5.3-7);
                    cxt.closePath();
                }else{

                }
                
                cxt.fillStyle = "rgba(18,64,114,0.5)";
                cxt.stroke();
                cxt.fill();
                cxt.fillStyle = "white";
                // alert(PDoutOfPoorPlan.dataSet.length-1);
                 // 根据不同屏幕大小 改变字体大小
                 // alert(55);
                if (parseInt(PDoutOfPoorPlan.bodyW)<1700&&parseInt(PDoutOfPoorPlan.bodyW)>1551) {
                    cxt.font = "28px 黑体";
                }else if(parseInt(PDoutOfPoorPlan.bodyW)<1550&&parseInt(PDoutOfPoorPlan.bodyW)>1451){
                    cxt.font = "27px 黑体";
                }else if(parseInt(PDoutOfPoorPlan.bodyW)<1450&&parseInt(PDoutOfPoorPlan.bodyW)>1351){
                    cxt.font = "25px 黑体";
                }else if(parseInt(PDoutOfPoorPlan.bodyW)<1350){
                    cxt.font = "23px 黑体";
                }else{
                    cxt.font = "30px 黑体";
                }
                if(PDoutOfPoorPlan.dataSet.length==1){
                    if(PDoutOfPoorPlan.dataSet[0].year1!=""){
                        cxt.fillText(PDoutOfPoorPlan.dataSet[0].year1+"五年计划脱贫",x/10*2.2,x/7*5);
                    }else{
                        cxt.fillText("暂无数据",x/10*3.8,x/7*5);
                    }
                }
                if(PDoutOfPoorPlan.dataSet.length==0){
                    cxt.fillText("暂无数据",x/10*3.8,x/7*5);
                }
                if(PDoutOfPoorPlan.dataSet.length>1){
                    cxt.fillText(PDoutOfPoorPlan.dataSet[0].year1+"-"+PDoutOfPoorPlan.dataSet[PDoutOfPoorPlan.dataSet.length-1].year1+"五年计划脱贫",x/10*2.2,x/7*5);
                }
                
        },
        drawDataRadius : function(cxt,x){
                // 获取每项数据所占的比例
                var dataArr = PDoutOfPoorPlan.toolMethpd.getProDataItem();
                var arrColor = new Array("#1acbff","#0082be","#01b9ff","#00c1fe","#0187ce");
                var arrYear = new Array();
                if(PDoutOfPoorPlan.dataSet[0].year!=""){
                    $.each(PDoutOfPoorPlan.dataSet,function(index){
                         arrYear[index] = PDoutOfPoorPlan.dataSet[index].year1;
                    });
                    // var radian = new Array();
                    $.each(dataArr,function(i){
                        cxt.lineWidth = "12";
                        cxt.strokeStyle = arrColor[i];
                        cxt.beginPath();
                        cxt.arc(x/2+20,x/5*1.8,x/9*2-18*i,-0.5*Math.PI,1.5*(dataArr[i]/100)*Math.PI-0.5*Math.PI,false);
                        cxt.stroke();
                        // radian = (1.5*(dataArr[i]/100))*Math.PI;
                        // 绘制每条数据开始和结尾 的圆弧部分  圆心 半径 弧度
                        if(PDoutOfPoorPlan.dataSet[i].funds!=""){
                            PDoutOfPoorPlan.canvasDraw.drawSmallRadius(cxt,x/2+20,x/5*1.8,x/9*2-18*i,dataArr[i],arrColor[i]);
                        }
                    });
                     $.each(dataArr,function(i){
                        // 绘制年份
                        cxt.lineWidth = "1";
                        cxt.fillStyle = arrColor[i];
                        cxt.font = "20px 黑体";
                        cxt.fillText(arrYear[i],x/2+40-(x/9*2-18),x/5*1.82-(x/9*2-20*i));

                    });
                }
                
                
            },
        drawSmallRadius : function(cxt,x,y,r,radian,color){
               cxt.lineWidth = 5;
               cxt.beginPath();
               cxt.arc(x+r*Math.sin(1*Math.PI),y+r*Math.cos(1*Math.PI),6,0,2*Math.PI);
               cxt.arc(x+r*Math.sin(-0.5*Math.PI-(1-radian/100)*1.5*Math.PI),y-r*Math.cos(-0.5*Math.PI-(1-radian/100)*1.5*Math.PI),6,0,2*Math.PI);
               cxt.fillStyle = color;
               cxt.fill();
            },
        drawLine : {
            drawLineInit : function(cxt,x){
                PDoutOfPoorPlan.canvasDraw.drawLine.drawleftHorline(cxt,x);
                if(PDoutOfPoorPlan.selector.beenPN!=""&&PDoutOfPoorPlan.selector.beenPN!=0){
                    PDoutOfPoorPlan.canvasDraw.drawLine.drawRightLine(cxt,x);
                    PDoutOfPoorPlan.canvasDraw.drawLine.drawRightRect(cxt,x);
                }
                if(PDoutOfPoorPlan.selector.willPN!=""&&PDoutOfPoorPlan.selector.willPN!=0){
                    PDoutOfPoorPlan.canvasDraw.drawLine.drawLeftLine(cxt,x);
                    PDoutOfPoorPlan.canvasDraw.drawLine.drawLeftRect(cxt,x);
                }
            },
            // 绘制左边的小横条
            drawleftHorline : function(cxt,x){
                 cxt.lineWidth = "4";
                cxt.strokeStyle = "rgba(1,134,193,0.5)";
                for(var i = 0; i<18; i++){
                    cxt.beginPath();
                    cxt.moveTo(x/10*1.8,x/10*1.3+i*12);
                    cxt.lineTo(x/10*1.8+20,x/10*1.3+i*12);
                    cxt.stroke();
                }
            },
            // 右边的线
            drawRightLine : function(cxt,x){
                // 右边的线和小方块
                cxt.lineWidth = "1";
                cxt.strokeStyle = "#0186c1";
                cxt.beginPath();
                cxt.moveTo((x/2+20)+x/9*2*Math.sin(Math.PI/4),x/5*1.8-x/9*2*Math.cos(Math.PI/4));
                cxt.lineTo((x/2+20)+x/9*2*Math.sin(Math.PI/4)+20,x/5*1.8-x/9*2*Math.cos(Math.PI/4)-20);
                cxt.lineTo(x/10*8.5,x/5*1.8-x/9*2*Math.cos(Math.PI/4)-20);
                cxt.stroke();
            },
            // 右边的小方块
            drawRightRect : function(cxt,x){
                cxt.lineWidth = "10";
                cxt.strokeStyle = "#f49100";
                cxt.beginPath();
                cxt.moveTo(x/10*8.5,x/5*1.8-x/9*2*Math.cos(Math.PI/4)-26);
                cxt.lineTo(x/10*8.5,x/5*1.8-x/9*2*Math.cos(Math.PI/4)-14);
                cxt.stroke();
            },
            // 左边线
            drawLeftLine : function(cxt,x){
                cxt.lineWidth = "1";
                cxt.strokeStyle = "#0186c1";
                cxt.beginPath();
                cxt.moveTo((x/2+60)+x/9*2*Math.sin(Math.PI/4*5),x/5*1.9-x/9*2*Math.cos(Math.PI/4*5));
                cxt.lineTo((x/2+20)+x/9*2*Math.sin(Math.PI/4*5)-20,x/5*1.8-x/9*2*Math.cos(Math.PI/4*5)+20);
                cxt.lineTo(x/10*2,x/5*1.8-x/9*2*Math.cos(Math.PI/4*5)+20);
                cxt.stroke();
            },
            // 左边的小方块
            drawLeftRect: function(cxt,x){
                cxt.lineWidth = "10";
                cxt.strokeStyle = "#f49100";
                cxt.beginPath();
                cxt.moveTo(x/10*2,x/5*1.8-x/9*2*Math.cos(Math.PI/4*5)+26);
                cxt.lineTo(x/10*2,x/5*1.8-x/9*2*Math.cos(Math.PI/4*5)+14);
                cxt.stroke();
            },

        },
    },        
    toolMethpd : {
        getProDataItem : function(){
                var dataArr = new Array();
                //  获取某一年的贫困人口为最大的数字
                var maxNum = PDoutOfPoorPlan.toolMethpd.renMaxNum();
                $.each(PDoutOfPoorPlan.dataSet,function(index){
                    //  获取脱贫人数所占的比例
                    dataArr[index] = Math.round(parseInt(PDoutOfPoorPlan.dataSet[index].funds)/parseInt(maxNum)*100); 
                    if(!dataArr[index]) {
                        dataArr[index] = 0;
                    }

                });  
                return dataArr;
            },

        renMaxNum : function(){
            var max = new Array();
            $.each(PDoutOfPoorPlan.dataSet,function(index){
                 max[index] = PDoutOfPoorPlan.dataSet[index].funds;
            });
            max = PDoutOfPoorPlan.toolMethpd.sortNumber(max);
            return max[0];
        },
         sortNumber : function(arr){
                for(var i = 0; i<arr.length-1; i++){
                    for(j = i+1; j<arr.length; j++){
                        if(arr[i]<arr[j]){
                            var temp = arr[j];
                            arr[j] = arr[i];
                            arr[i] = temp;
                        }
                    }   
                }
                return arr;
            },
    },
            
}