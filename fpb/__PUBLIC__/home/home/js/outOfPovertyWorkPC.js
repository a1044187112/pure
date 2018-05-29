var OutOfPovertyWork = {
	init : function(parameter){
		thisObj = {};
		start = function(parameter){
			thisObj.thisBindEventClick.bindEvent();
            // thisObj.Animation.update();
		};
        thisObj.tScale  = window.devicePixelRatio;
		thisObj.thisSelector = {
            header_per_children1:"",
            header_per_children2:"",
			poor_num :"",
			poor_num_canvas :"",
			poor_rea_canvas :"",
            year_canvas:"",
            poorNum:"",
            poorRea:"",
            year:"",

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
		// 绑定事件
		thisObj.thisBindEventClick = {
            bindEvent : function(){
                // 设置脱贫完成率
                thisObj.thisBindEventClick.setSchedule();
                // 第一个圆部分 
                thisObj.thisBindEventClick.radiusDrawPoorNum();
            	// 第二个 正方形部分
                thisObj.thisBindEventClick.rectDrawPoorRea();// 
                // 第三个数据表部分
                thisObj.thisBindEventClick.dateTable();
            },
            setSchedule : function(){
                var setFatherSel = "."+thisObj.thisSelector.header_per_children1;
                var setSSel = "."+thisObj.thisSelector.header_per_children2; // 进度条选择器
                // 得到脱贫进度百分比
                var beenPN = parseInt(thisObj.thisSelector.poorNum[0].beenPN);
                var willPN = parseInt(thisObj.thisSelector.poorNum[0].willPN);
                var value = Math.round((beenPN/(beenPN+willPN))*100); // 把数字四舍五入 取整
                if ((beenPN+willPN) ==0) {
                    value = 0;
                }
                if(!value){
                    $(setSSel).css("width",0+"%");  // 设置宽度
                    $(setFatherSel).text(0+"%"); // 赋值  
                }else{
                   $(setSSel).css("width",value+"%");  // 设置宽度
                   $(setFatherSel).text(value+"%"); // 赋值  
                }
            },
            radiusDrawPoorNum : function(){
                var WIDTH = thisObj.getWidth.getScreenWidth(); //获取屏幕宽度
                var can = document.getElementById(thisObj.thisSelector.poor_num_canvas);
                can.height = thisObj.tScale*WIDTH/6*3.3;  // 设置canvas的高度
                can.width = thisObj.tScale*WIDTH;
                var cxt = can.getContext("2d");
                $("#"+thisObj.thisSelector.poor_num_canvas).css("width",WIDTH+"px");
                thisObj.thisEventProcessing.genData(WIDTH,cxt);
            },
            rectDrawPoorRea : function(){
                var WIDTH = thisObj.getWidth.getScreenWidth(); //获取屏幕宽度
                var can = document.getElementById(thisObj.thisSelector.poor_rea_canvas);
                can.height = thisObj.tScale*WIDTH/6*4.5;  // 设置canvas的高度
                can.width = thisObj.tScale*WIDTH;
                var cxt = can.getContext("2d");
                $("#"+thisObj.thisSelector.poor_rea_canvas).css("width",WIDTH+"px");
                thisObj.thisEventProPoorRea.drawRect(cxt,thisObj.tScale*WIDTH);
            },
            dateTable : function(){
                var WIDTH = thisObj.getWidth.getScreenWidth(); //获取屏幕宽度
                var can = document.getElementById(thisObj.thisSelector.year_canvas);
                can.height =  330;  // 设置canvas的高度
                can.width = thisObj.tScale*WIDTH;
                var cxt = can.getContext("2d");
                $("#"+thisObj.thisSelector.year_canvas).css("width",WIDTH+"px");
                thisObj.thisEventProTable.drawTable(cxt,thisObj.tScale*WIDTH);
            },
        }
            
        //  绘制第一个贫困人数 圆的部分
        thisObj.thisEventProcessing = {
          
          // 生成绘制圆的各种参数
          genData : function(WIDTH,cxt,tScale){
                var x = WIDTH/2;
                var y = WIDTH/5+50;
                var r = WIDTH/5;
                // alert(x+"---"+y+"---"+r);
                //  绘制贫困人数最底部的圆
                thisObj.thisEventProcessing.drawPoorNum(cxt,x,y,r);
                // 绘制第二层白色的圆
                thisObj.thisEventProcessing.drawPoorNumSec(cxt,x,y,r);
                // 绘制第三层 交际处底色的圆
                thisObj.thisEventProcessing.bgRadiusThird(cxt,x,y,r);
                // 绘制第四层 脱贫人数的半圆 
                thisObj.thisEventProcessing.outOfPoorRadius(cxt,x,y,r);
                // 绘制第二层 最里面的圆
                thisObj.thisEventProcessing.bgRadiusFive(cxt,x,y,r);
                // 绘制左边的线   
                thisObj.thisEventProcessing.drawLeftLine(cxt,x,y,r);
                // 绘制右边的线
                thisObj.thisEventProcessing.drawRightLine(cxt,x,y,r);
                // 绘制字体的Y坐标 如果y坐标小于字体高度时  字体就会被覆盖  需要加上他们的差值
                var fontDrawHeight = thisObj.thisEventProcessing.returnNum(x,y,r);  
          },

          drawPoorNum : function(cxt,x,y,r){
            cxt.fillStyle = "#19364b";
            cxt.beginPath();
            cxt.arc(x,y,r,0,2*Math.PI);
            cxt.closePath();
            cxt.fill();
          },
          drawPoorNumSec : function(cxt,x,y,r){
            cxt.fillStyle = "#ffffff";
            cxt.beginPath();
            cxt.arc(x,y,r-28,0,2*Math.PI);
            cxt.closePath();
            cxt.fill();
          },
          bgRadiusThird : function(cxt,x,y,r){
            cxt.fillStyle = "#19364b";
            cxt.beginPath();
            cxt.arc(x,y,r-40,0,2*Math.PI);
            cxt.closePath();
            cxt.fill();
          },
          outOfPoorRadius : function(cxt,x,y,r){
            var beenPN = parseInt(thisObj.thisSelector.poorNum[0].beenPN); // 脱贫人数
            var willPN = parseInt(thisObj.thisSelector.poorNum[0].willPN); // 未脱贫人数
            var value = Math.round(beenPN/(beenPN+willPN)*100); // 把数字四舍五入 取整   得到占圆的比例
            value = value/100; // 把百分比转换成小数 不该小数乘以360度  就是脱贫人数所占的比例
            cxt.strokeStyle = "#74fbfd";
            cxt.lineWidth = "21";
            // alert(-0.5*Math.PI+(2*value*Math.PI));
            cxt.beginPath();
            cxt.arc(x,y,r-34,-0.5*Math.PI,-0.5*Math.PI-2*value*Math.PI,true);
            cxt.stroke();
            
          },
          bgRadiusFive : function(cxt,x,y,r){
            cxt.fillStyle = "#19364b";
            cxt.beginPath();
            cxt.arc(x,y,r-50,0,2*Math.PI,true);
            cxt.closePath();
            cxt.fill();
          },
          drawLeftLine : function(cxt,x,y,r){
            var beenPN = parseInt(thisObj.thisSelector.poorNum[0].beenPN); // 脱贫人数
            var willPN = parseInt(thisObj.thisSelector.poorNum[0].willPN); // 未脱贫人数
            var value = Math.round(beenPN/(beenPN+willPN)*100); // 把数字四舍五入 取整   得到占圆的比例
            value = value/100;
            cxt.beginPath();
            cxt.lineWidth = "2";
            var fontDrawHeight = thisObj.thisEventProcessing.returnNum(x,y,r);  // 绘制字体的Y坐标 如果y坐标小于字体高度时  字体就会被覆盖  需要加上他们的差值
            //  x第一个点坐标
            cxt.moveTo(x+(r-30)*Math.cos((0.5+value)*Math.PI),y-(r-30)*Math.sin((0.5+value)*Math.PI));
            cxt.lineTo(x*2/3-25,fontDrawHeight+20);
            cxt.lineTo(30,fontDrawHeight+20);
            // cxt.closePath();
            cxt.strokeStyle = "#4dace0";
            cxt.stroke();
            // 绘制左两边的小方块
            thisObj.thisEventProcessing.drawLeftRect(cxt,15,fontDrawHeight+20);
            // 绘制左边的文字
            thisObj.thisEventProcessing.drawLeftfont(cxt,x,y,r);
          },
          drawRightLine : function(cxt,x,y,r){
            // alert((x*2)-20);
            cxt.beginPath();
            cxt.lineWidth = "2";
            var fontDrawHeight = thisObj.thisEventProcessing.returnNum(x,y,r);  // 绘制字体的Y坐标 如果y坐标小于字体高度时  字体就会被覆盖  需要加上他们的差值
            //  x第一个点坐标
            cxt.moveTo(x+(r-30)*Math.cos(Math.PI/6),y-(r-30)*Math.sin(Math.PI/6));
            cxt.lineTo(x*4/3+15,fontDrawHeight+20);
            cxt.lineTo(x*2-30,fontDrawHeight+20);
            // cxt.closePath();
            cxt.strokeStyle = "#4dace0";
            cxt.stroke();
            thisObj.thisEventProcessing.drawRightRect(cxt,x*2-15,fontDrawHeight+20);
            // 绘制右边的文字
            thisObj.thisEventProcessing.drawRightfont(cxt,x,y,r);
          },
          // 绘制左两边的小方块
          drawLeftRect : function(cxt,x,y){
            cxt.strokeStyle = "#e69535";
            cxt.lineWidth = "14";
            cxt.beginPath();
            cxt.moveTo(22,y-10);
            cxt.lineTo(22,y+10);
            cxt.closePath();
            cxt.stroke();
          },
          drawRightRect : function(cxt,x,y){
            cxt.strokeStyle = "#e69535";
            cxt.lineWidth = "14";
            cxt.beginPath();
            cxt.moveTo(x-18,y-10);
            cxt.lineTo(x-18,y+10);
            cxt.closePath();
            cxt.stroke();
          },
          // 绘制左边的文字
          drawLeftfont : function(cxt,x,y,r){ 
            // 获取脱贫人数
            var beenPN = thisObj.thisSelector.poorNum[0].beenPN;

            cxt.lineWidth = "1";
            cxt.font = thisObj.tScale*16+"px 黑体-简";
            cxt.fillStyle = "#95fbb3"; 
            var fontDrawHeight = thisObj.thisEventProcessing.returnNum(x,y,r);  // 绘制字体的Y坐标 如果y坐标小于字体高度时  字体就会被覆盖  需要加上他们的差值
            // 绘制文字
            cxt.fillText(beenPN+"人",x/5,fontDrawHeight);
            cxt.font = 14+"px 黑体";
            cxt.fillText("已脱贫",x/5,fontDrawHeight+45);
          },
          // 绘制右边的文字
          drawRightfont : function(cxt,x,y,r){
            //未脱贫人数
            var willPN = thisObj.thisSelector.poorNum[0].willPN;

            cxt.lineWidth = "1";
            cxt.font = thisObj.tScale*16+"px 黑体-简";
            cxt.fillStyle = "#95fbb3";
            // cxt.strokeStyle = "#95fbb3";
            // 绘制文字
            var fontDrawHeight = thisObj.thisEventProcessing.returnNum(x,y,r);  // 绘制字体的Y坐标 如果y坐标小于字体高度时  字体就会被覆盖  需要加上他们的差值
            cxt.fillText(willPN+"人",x/5*8-40,fontDrawHeight);
            cxt.font =  thisObj.tScale*14+"px 黑体";
            // cxt.strokeText("未脱贫",x/5*8-10,y-r/2+5);
            cxt.fillText("未脱贫",x/5*8-30,fontDrawHeight+45);
          },
          // // 绘制字体的Y坐标 如果y坐标小于字体高度时  字体就会被覆盖  需要加上他们的差值  该方法返回差值
          returnNum : function(x,y,r){
            var fontDrawHeight = y-r/2-60;  // 绘制字体的Y坐标 如果y坐标小于字体高度时  字体就会被覆盖  需要加上他们的差值
            if (fontDrawHeight< thisObj.tScale*18) {
                fontDrawHeight = fontDrawHeight+thisObj.tScale*18-fontDrawHeight;
            }
            return fontDrawHeight;
        },
        }
        thisObj.thisEventProPoorRea = {
            // 绘制第一个正方形 
            drawRect : function(cxt,WIDTH){
                cxt.fillStyle = "#21466d";
                cxt.beginPath();
                cxt.fillRect(WIDTH/9,10,WIDTH/9*7,WIDTH/5*3.3); 
                cxt.closePath();
                //  中心点的坐标（WIDTH/2,WIDTH/10*3-20），   画6边形
                var x = WIDTH/2;
                var y = WIDTH/10*3.3+15;
                var R = WIDTH/10*3.3-25;
                 // 绘制边上的圆弧部分
                 thisObj.thisEventProPoorRea.drawArc(cxt,WIDTH/9,10,WIDTH/9*8,WIDTH/5*3.3);
                 // 绘制正六边形上占比例区域
                thisObj.thisEventProPoorRea.drawNgonCover(cxt,x,y,R);
                 // 绘制正6边形
                 thisObj.thisEventProPoorRea.drawNgon(cxt,x,y,R);
                 // 绘制正六边形上的文字 和数字
                thisObj.thisEventProPoorRea.drawNgonFont(cxt,x,y,R);
                 
                 
            },
            drawArc : function(cxt,x1,y1,x2,y2){
                cxt.lineWidth = "12";
                cxt.strokeStyle = "#4dace0";
                // 绘制左上的圆弧
                cxt.beginPath();
                cxt.arc(x1+20,30,Math.sqrt(800)-2,-0.4*Math.PI,-1.1*Math.PI,true);
                cxt.stroke();

                // 绘制右上的圆弧
                cxt.beginPath();
                cxt.arc(x2-20,30,Math.sqrt(800)-2,-0.6*Math.PI,0.1*Math.PI,false);
                cxt.stroke();

                 // 绘制左下的圆弧
                cxt.beginPath();
                cxt.arc(x1+20,y2-10,Math.sqrt(800)-2,0.4*Math.PI,1.1*Math.PI,false);
                cxt.stroke();

                // 绘制右下的圆弧
                cxt.beginPath();
                cxt.arc(x2-20,y2-10,Math.sqrt(800)-2,-0.1*Math.PI,0.6*Math.PI,false);
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
                cxt.font =  thisObj.tScale*14+"px 黑体";
                cxt.fillStyle = "#95fbb3";
                // 绘制文字
                cxt.fillText("因无力",x+R*Math.cos(Math.PI/6)+5,y-R*Math.sin(Math.PI/6)-10);
                cxt.fillText("两有户",x+R*Math.cos(Math.PI/2)-25,y-R*Math.sin(Math.PI/2)-15);
                cxt.fillText("因学",x+R*Math.cos(Math.PI/6*5)-45,y-R*Math.sin(Math.PI/6*5)-5);
                cxt.fillText("因病",x+R*Math.cos(Math.PI/6*7)-55,y-R*Math.sin(Math.PI/6*7)+15);
                cxt.fillText("因灾",x+R*Math.cos(Math.PI/6*9)-15,y-R*Math.sin(Math.PI/6*9)+15);
                cxt.fillText("因失业",x+R*Math.cos(Math.PI/6*11)-10,y-R*Math.sin(Math.PI/6*11)+20);
                cxt.fillStyle = "#f3b342";
                cxt.font =  thisObj.tScale*16+"px 黑体";
                cxt.fillText("0",x+5,y+40);
                cxt.fillText("50",x+R*Math.cos(Math.PI/2)*0.5-45,y-R*Math.sin(Math.PI/2)*0.5+40);
                cxt.fillText("100",x+R*Math.cos(Math.PI/2)-70,y-R*Math.sin(Math.PI/2)+20);
            },
            drawNgonCover : function(cxt,x,y,R){
                var numArr = thisObj.getWidth.returnPoorReaData();
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

        }
        thisObj.thisEventProTable = {
            drawTable : function(cxt,WIDTH){
                // 画线和刻度
                thisObj.thisEventProTable.drawTableLine(cxt,WIDTH);
                // 画数量所占比例
                thisObj.thisEventProTable.drawTableData(cxt,WIDTH);
                // 绘制刻度表上的文字
                thisObj.thisEventProTable.deawTableFont(cxt,WIDTH);
                
            },
            drawTableLine : function(cxt,WIDTH){
                // 画线和刻度
                cxt.lineWidth = "1";
                cxt.strokeStyle = "#eee";
                cxt.beginPath();
                cxt.moveTo(WIDTH/9*1.5,0);
                cxt.lineTo(WIDTH/9*1.5,270);
                cxt.lineTo(WIDTH/9*7.5,270);
                cxt.lineTo(WIDTH/9*7.5,260);
                cxt.stroke();

                // 画刻度
                cxt.beginPath();
                cxt.moveTo(WIDTH/9*1.5,210);
                cxt.lineTo(WIDTH/9*1.5+14,210);

                cxt.moveTo(WIDTH/9*1.5,150);
                cxt.lineTo(WIDTH/9*1.5+14,150);

                cxt.moveTo(WIDTH/9*1.5,90);
                cxt.lineTo(WIDTH/9*1.5+14,90);

                cxt.moveTo(WIDTH/9*1.5,30);
                cxt.lineTo(WIDTH/9*1.5+14,30);
                cxt.stroke();
            },
            drawTableData : function(cxt,WIDTH){
                // 获取左边排的y坐标的数据
                var leftArr = thisObj.thisEventProTable.getdataLeft();
                cxt.lineWidth = "12";
                cxt.strokeStyle = "#74fbfd";
                // 每一条的左边数据
                cxt.beginPath();
                $.each(leftArr,function(index){
                    cxt.moveTo(WIDTH/9*(2.5+index)-6,268);
                    cxt.lineTo(WIDTH/9*(2.5+index)-6,leftArr[index]);
                });
                cxt.stroke();

                // 获取右边排的y坐标的数据
                var rightArr = thisObj.thisEventProTable.getdataRight();
                // 绘制每一天右边的数据
                cxt.strokeStyle = "#4aa9e4";
                cxt.beginPath();
                $.each(rightArr,function(index){
                    cxt.moveTo(WIDTH/9*(2.5+index)+7,268);
                    cxt.lineTo(WIDTH/9*(2.5+index)+7,rightArr[index]);
                });
                // cxt.moveTo(WIDTH/9*2.5+7,268);
                // cxt.lineTo(WIDTH/9*2.5+7,rightArr[0]);

                // cxt.moveTo(WIDTH/9*3.5+7,268);
                // cxt.lineTo(WIDTH/9*3.5+7,rightArr[1]);

                // cxt.moveTo(WIDTH/9*4.5+7,268);
                // cxt.lineTo(WIDTH/9*4.5+7,rightArr[2]);

                // cxt.moveTo(WIDTH/9*5.5+7,268);
                // cxt.lineTo(WIDTH/9*5.5+7,rightArr[3]);

                // cxt.moveTo(WIDTH/9*6.5+7,268);
                // cxt.lineTo(WIDTH/9*6.5+7,rightArr[4]);
                cxt.stroke();
            },
            deawTableFont : function(cxt,WIDTH){
                var leftValueArr = thisObj.getWidth.getFooterTableLeftValue();
                var rightValueArr = thisObj.getWidth.getFootereTableRightValue();
                cxt.lineWidth = "1";
                cxt.font =  thisObj.tScale*12+"px 黑体";
                cxt.fillStyle = "#74fbfd";
                // 绘制文字  左边刻度
                cxt.fillText(leftValueArr[0],WIDTH/9*1.5-46,38);
                cxt.fillText(leftValueArr[1],WIDTH/9*1.5-46,98);
                cxt.fillText(leftValueArr[2],WIDTH/9*1.5-46,158);
                cxt.fillText(leftValueArr[3],WIDTH/9*1.5-46,218);
                cxt.fillText(leftValueArr[4],WIDTH/9*1.5-35,278);
                 // 绘制文字  右边刻度
                cxt.fillText(rightValueArr[0],WIDTH/9*1.5+30,38);
                cxt.fillText(rightValueArr[1],WIDTH/9*1.5+30,98);
                cxt.fillText(rightValueArr[2],WIDTH/9*1.5+30,158);
                cxt.fillText(rightValueArr[3],WIDTH/9*1.5+30,218);
                // cxt.fillText("2",WIDTH/9*1.5-25,278);
                // alert(thisObj.thisSelector.year[0].data.year1);
                $.each(thisObj.thisSelector.year,function(index){
                    cxt.fillText(thisObj.thisSelector.year[index].data.year1,WIDTH/9*(2.9+index)-25,300);

                });
                // cxt.fillText(thisObj.thisSelector.year[0].data.year1,WIDTH/9*2.5-25,300);
                // cxt.fillText(thisObj.thisSelector.year[1].data.year1,WIDTH/9*3.5-25,300);
                // cxt.fillText(thisObj.thisSelector.year[2].data.year1,WIDTH/9*4.5-25,300);
                // cxt.fillText(thisObj.thisSelector.year[3].data.year1,WIDTH/9*5.5-25,300);
                // cxt.fillText(thisObj.thisSelector.year[4].data.year1,WIDTH/9*6.5-25,300);
                cxt.font =  thisObj.tScale*15+"px 黑体";
                cxt.fillStyle = "#eee";
                cxt.fillText("年",WIDTH/9*7.5+12,268);
            },
            // 获取左边排的每一个数据条上面个点的y坐标
            getdataLeft : function(){
                var leftValueArr = thisObj.getWidth.getFooterTableLeftValue();
                // 图表的高度
                var tableHeight = 270;
                var dataArr = new Array();
                var graduationMax = 4.5*(leftValueArr[0]-leftValueArr[1]) //刻度总的值
                $.each(thisObj.thisSelector.year,function(index){
                    if(thisObj.thisSelector.year[index].data.funds==""){ // 当传入的该项数据为空时
                        dataArr[index] = tableHeight;
                    }else{
                        dataArr[index] = tableHeight-parseInt(thisObj.thisSelector.year[index].data.funds)/graduationMax*tableHeight;  // 获取左边排的每一个数据条上面个点的y坐标
                    }
                    if(!dataArr[index]){
                        dataArr[index] = 0;
                    }
                });
                return dataArr;
            },
             // 获取右边排的每一个数据条上面个点的y坐标
            getdataRight : function(){
                var rightValueArr = thisObj.getWidth.getFootereTableRightValue();
                // 图表的高度
                var tableHeight = 270;
                var dataArr = new Array();
                var graduationMax = 4.5*(rightValueArr[0]-rightValueArr[1]) //刻度总的值
                $.each(thisObj.thisSelector.year,function(index){
                    if(thisObj.thisSelector.year[index].data.project==""){ // 当传入的该项数据为空时
                        dataArr[index] = tableHeight;
                    }else{
                        dataArr[index] = tableHeight-parseInt(thisObj.thisSelector.year[index].data.project)/graduationMax*tableHeight;  // 获取右边排的每一个数据条上面个点的y坐标
                    }
                    if(!dataArr[index]){
                        dataArr[index] = 0;
                    }
                });
                return dataArr;
            }
        }


           
        thisObj.getWidth = {
            // 获取需要绘制圆的外层div的宽度
            getScreenWidth : function(){
                var widthSel = "."+thisObj.thisSelector.poor_num;
                return $(widthSel).width();
            },
            // 返回中间正方形中正6边形的刻度  和占比例值
            returnPoorReaData : function(){
                var numArr = new Array();
                var i = 0;
                // alert(thisObj.thisSelector.poorReaCnumber[2][0].PR3Cnumber);
                $.each( thisObj.thisSelector.poorRea[0],function(index,item){
                    if(thisObj.thisSelector.poorReaCnumber[i][0].PRCnumber == 0){
                        numArr[i] = 0;
                    }else{
                        numArr[i] = parseInt(this)/parseInt(thisObj.thisSelector.poorReaCnumber[i][0].PRCnumber);
                    }
                    i++;
                });
                return  numArr;
            },
            // 获取数据表左边的刻度值
            getFooterTableLeftValue : function(){
                var leftValueArr = new Array();
                if(thisObj.thisSelector.year.length == 0){
                    leftValueArr[0] = 0;
                }else{
                    $.each(thisObj.thisSelector.year,function(index){
                        leftValueArr[index] = thisObj.thisSelector.year[index].data.funds;
                    });
                }

                leftValueArr = thisObj.getWidth.sortNumber(leftValueArr); // 得到排序后的数组
                return thisObj.getWidth.genCodeValue(leftValueArr);// 得到的最后刻度值
            },
            // 获取数据表右边的刻度值
            getFootereTableRightValue : function(){
                var rightValueArr = new Array();
                if(thisObj.thisSelector.year.length == 0){
                    rightValueArr[0] = 0;
                }else{
                    $.each(thisObj.thisSelector.year,function(index){
                        rightValueArr[index] = thisObj.thisSelector.year[index].data.project;
                    });
                }
                rightValueArr = thisObj.getWidth.sortNumber(rightValueArr); // 得到排序后的数组
                return thisObj.getWidth.genCodeValue(rightValueArr);// 得到的最后刻度值
            },
            // 数字排序的方法  降序排序
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
            // 生成刻度的方法
            genCodeValue : function(arr){
                var numMax = arr[0];  //得到最大的数 
                while(numMax%4 != 0){
                    numMax++;
                }
                // alert(55);
                var difNum = numMax/4;
                $.each(arr,function(index){
                    arr[index] = numMax-index*difNum;
                });
                arr[1] = arr[0]-(arr[0]/4);
                arr[2] = arr[1]- (arr[0]/4);
                arr[3] = arr[2]-(arr[0]-arr[1]);
                arr[4] = arr[3]-(arr[1]-arr[2]);
                return arr;
            },
            

        } 
        // 动画效果
        // thisObj.Animation = {
        //     update : function(){
        //         var incNum = 0.05;
        //         setInterval(function(){
        //             // 更新第一个类似进度条的动画效果
        //              // 每一个增加的比例
        //             thisObj.Animation.progressBar(incNum);
        //         },50);
        //     },
        //     progressBar : function(incNum){
        //         incNum += 0.05;
        //         // alert(incNum);
        //         var beenPN = parseInt(thisObj.thisSelector.poorNum[0].beenPN);
        //         var willPN = parseInt(thisObj.thisSelector.poorNum[0].willPN);
        //         // 得到百分比
        //         var value = Math.round((beenPN/(beenPN+willPN))*100);
        //         thisObj.thisBindEventClick.setSchedule();
        //     },
        // }

		thisObj.thisObjInit(parameter);
		start();
        
	}
};