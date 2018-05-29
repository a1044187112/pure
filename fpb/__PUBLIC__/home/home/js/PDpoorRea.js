var PoorRea = {
    selector : "",
    dataSet  : "",
    // 初始化数据
    init : function(parameter){
        PoorRea.selector = parameter[0].poorReaSel;
        PoorRea.dataSet = parameter[1].poorRea;
        // alert( PoorRea.dataSet); 
        PoorRea.start(PoorRea.selector,PoorRea.dataSet);

    },
    start : function(selector,dataSet){
		 PoorRea.setUpCanvasAttr.rectDrawPoorRea(selector,dataSet);
    },

    //  设置画布的属性
    setUpCanvasAttr : {
    	rectDrawPoorRea : function(selector,dataSet){
    		 var WIDTH = parseInt($("."+selector.draw_rect).css("width")); //获取屏幕宽度
                var can = document.getElementById(selector.poor_rea_canvas);
                can.height = WIDTH/6*4.9;  // 设置canvas的高度
                can.width = WIDTH+15;
                // alert(thisObj.tScale);
                var cxt = can.getContext("2d");
                $(selector.poor_rea_canvas).css("width",WIDTH+"px");
                PoorRea.drawImg.drawRect(cxt,WIDTH,selector,dataSet);
    	}
    },
    //  绘制图形
    drawImg : {
    	// 绘制第一个正方形 
        drawRect : function(cxt,WIDTH,selector,dataSet){
            cxt.fillStyle = "#21466d";
            cxt.beginPath();
            cxt.fillRect(20,20,WIDTH/9*7,WIDTH/5*3.7); 
            cxt.closePath();
            //  中心点的坐标（WIDTH/2,WIDTH/10*3-20），   画6边形
            var x = WIDTH/18*7+20;
            var y = WIDTH/10*3.6+20;
            var R = WIDTH/10*3.3-45;
            // 绘制边上的圆弧部分
            PoorRea.drawImg.drawArc(cxt,WIDTH/14,30,WIDTH/9*8,WIDTH/5*3.7);
            // // 绘制正六边形上占比例区域
            
            PoorRea.drawImg.drawNgonCover(cxt,x,y,R,dataSet);
            // // 绘制正6边形
            PoorRea.drawImg.drawNgon(cxt,x,y,R);
            // // 绘制正六边形上的文字 和数字
            PoorRea.drawImg.drawNgonFont(cxt,x,y,R);
            // // 绘制右边介绍栏部分  传入最大的x  和 y 坐标 
            PoorRea.drawImg.drawIntroFont(WIDTH/9*7+20,WIDTH/5*3.7,cxt,WIDTH);
                 
        },
            drawArc : function(cxt,x1,y1,x2,y2){
                cxt.lineWidth = "12";
                cxt.strokeStyle = "#4dace0";
                // 绘制左上的圆弧
                cxt.beginPath();
                cxt.arc(40,40,Math.sqrt(800)-2,-0.4*Math.PI,-1.1*Math.PI,true);
                cxt.stroke();

                // 绘制右上的圆弧
                cxt.beginPath();
                cxt.arc(x2-54,40,Math.sqrt(800)-2,-0.6*Math.PI,0.1*Math.PI,false);
                cxt.stroke();

                 // 绘制左下的圆弧
                cxt.beginPath();
                cxt.arc(40,y2-5,Math.sqrt(800)-2,0.4*Math.PI,1.1*Math.PI,false);
                cxt.stroke();

                // 绘制右下的圆弧
                cxt.beginPath();
                cxt.arc(x2-54,y2-5,Math.sqrt(800)-2,-0.1*Math.PI,0.6*Math.PI,false);
                cxt.stroke();
            },
            drawNgon : function(cxt,x,y,R){
                cxt.lineWidth = "1";
                cxt.strokeStyle = "#5dc9fa";
                cxt.beginPath();
                cxt.moveTo(x+R*Math.cos(Math.PI/6),y-R*Math.sin(Math.PI/6));
                cxt.lineTo(x+R*Math.cos(Math.PI/2),y-R*Math.sin(Math.PI/2));
                cxt.lineTo(x+R*Math.cos(Math.PI/6*5),y-R*Math.sin(Math.PI/6*5));
                cxt.lineTo(x+R*Math.cos(Math.PI/6*7),y-R*Math.sin(Math.PI/6*7));
                cxt.lineTo(x+R*Math.cos(Math.PI/6*9),y-R*Math.sin(Math.PI/6*9));
                cxt.lineTo(x+R*Math.cos(Math.PI/6*11),y-R*Math.sin(Math.PI/6*11));
                cxt.closePath();
                cxt.stroke();

                // 画对角线
                cxt.beginPath();
                cxt.moveTo(x+R*Math.cos(Math.PI/6),y-R*Math.sin(Math.PI/6));
                cxt.lineTo(x+R*Math.cos(Math.PI/6*7),y-R*Math.sin(Math.PI/6*7));
                cxt.stroke();
                
                cxt.moveTo(x+R*Math.cos(Math.PI/2),y-R*Math.sin(Math.PI/2));
                cxt.lineTo(x+R*Math.cos(Math.PI/6*9),y-R*Math.sin(Math.PI/6*9));
                cxt.stroke();

                cxt.moveTo(x+R*Math.cos(Math.PI/6*5),y-R*Math.sin(Math.PI/6*5));
                cxt.lineTo(x+R*Math.cos(Math.PI/6*11),y-R*Math.sin(Math.PI/6*11)); 
                cxt.stroke();                
            },
            drawNgonFont : function(cxt,x,y,R){
                cxt.lineWidth = "1";
                cxt.font =  14+"px 黑体";
                cxt.fillStyle = "#95fbb3";
                // 绘制文字
                cxt.fillText("因无力",x+R*Math.cos(Math.PI/6)+10,y-R*Math.sin(Math.PI/6)-10);
                cxt.fillText("两有户",x+R*Math.cos(Math.PI/2)-25,y-R*Math.sin(Math.PI/2)-15);
                cxt.fillText("因学",x+R*Math.cos(Math.PI/6*5)-60,y-R*Math.sin(Math.PI/6*5)-5);
                cxt.fillText("因病",x+R*Math.cos(Math.PI/6*7)-70,y-R*Math.sin(Math.PI/6*7)+15);
                cxt.fillText("因灾",x+R*Math.cos(Math.PI/6*9)-20,y-R*Math.sin(Math.PI/6*9)+35);
                cxt.fillText("因失业",x+R*Math.cos(Math.PI/6*11)+10,y-R*Math.sin(Math.PI/6*11)+20);
                cxt.fillStyle = "#f3b342";
                cxt.font =  16+"px 黑体";
                cxt.fillText("0",x+5,y+40);
                cxt.fillText("50",x+R*Math.cos(Math.PI/2)*0.5-35,y-R*Math.sin(Math.PI/2)*0.5+20);
                cxt.fillText("100",x+R*Math.cos(Math.PI/2)-40,y-R*Math.sin(Math.PI/2)+15);
            },
            drawNgonCover : function(cxt,x,y,R,dataSet){

                var numArr =  PoorRea.returnPoorReaData(dataSet);
                cxt.strokeStyle = "#95fbb3";
                cxt.lineWidth = "1";
                // alert(numArr);
                cxt.beginPath();
                cxt.moveTo(x+R*Math.cos(Math.PI/6)*numArr[0],y-R*Math.sin(Math.PI/6)*numArr[0]);
                cxt.lineTo(x+R*Math.cos(Math.PI/2)*numArr[1],y-R*Math.sin(Math.PI/2)*numArr[1]);
                cxt.lineTo(x+R*Math.cos(Math.PI/6*5)*numArr[2],y-R*Math.sin(Math.PI/6*5)*numArr[2]);
                cxt.lineTo(x+R*Math.cos(Math.PI/6*7)*numArr[3],y-R*Math.sin(Math.PI/6*7)*numArr[3]);
                cxt.lineTo(x+R*Math.cos(Math.PI/6*9)*numArr[4],y-R*Math.sin(Math.PI/6*9)*numArr[4]);
                cxt.lineTo(x+R*Math.cos(Math.PI/6*11)*numArr[5],y-R*Math.sin(Math.PI/6*11)*numArr[5]);
                cxt.closePath();
                cxt.stroke();
                cxt.fillStyle = "#95fbb3";
                cxt.fill();
            },
            drawIntroFont : function(x,y,cxt,maxX){
                if(maxX>=x+45){
                    var maxX1 = x+45;
                }else{
                    var maxX1 = maxX-5;
                }
                // alert(x+45);
                cxt.lineWidth="4";
                cxt.beginPath();
                cxt.moveTo(x,y/5);
                cxt.lineTo(x+20,y/5);
                cxt.lineTo(x+30,y/4+5);
                cxt.lineTo(x+45,y/4+5);
                cxt.lineTo(x+45,y/3*2);
                cxt.lineTo(x+20,y/7*5+20);
                cxt.lineTo(x+20,y/7*6);
                cxt.lineTo(x,y/7*6);
                cxt.stroke();
                cxt.fillStyle = "rgba(0,129,230,0.3)";
                cxt.fill();
                cxt.lineWidth="1";
                cxt.font =  20+"px 黑体";
                cxt.fillStyle = "#01cafe";
                cxt.fillText("致",x+7,y/4+45);
                cxt.fillText("贫",x+7,y/4+75);
                cxt.fillText("原",x+7,y/4+105);
                cxt.fillText("因",x+7,y/4+135);
            },
    },
    
            
            // 计算致贫原因中数据占基数的比例
            returnPoorReaData : function(dataSet){
               var numArr = new Array();
                var i = 0;
                // alert(thisObj.thisSelector.poorReaCnumber[2][0].PR3Cnumber);
                $.each( dataSet,function(index,item){
                    // alert(dataSet[i].PRCnumber);
                    if(dataSet[i].PRCnumber == 0){
                        numArr[i] = 0;
                    }else{
                        numArr[i] = parseInt(this.PR)/parseInt(dataSet[i].PRCnumber);
                    }
                    i++;
                });
                // alert(numArr);
                return  numArr;
            },
        
}