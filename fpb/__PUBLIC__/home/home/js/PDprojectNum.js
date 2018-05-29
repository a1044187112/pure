var PDprojectNum = {
    selector : "",
    dataSet  : "",
      // 初始化参数
    init : function(parameter){
        PDprojectNum.selector = parameter[0].selector;
        PDprojectNum.dataSet = parameter[1].LinearTable;
        // alert( PoorRea.dataSet); 
        PDprojectNum.start(PDprojectNum.selector,PDprojectNum.dataSet);

    },
    start : function(selector,dataSet){
         PDprojectNum.initCanvas.tableInit(selector,dataSet);
    },
    // 初始化画布
    initCanvas : {
        tableInit : function(selector,dataSet){
            var WIDTH = parseInt($("."+selector.con_table).css("width")); //获取屏幕宽度
            var can = document.getElementById(selector.table_canvas);
            can.height = 360;  // 设置canvas的高度
            can.width = WIDTH;
            var cxt = can.getContext("2d");
            $("#"+selector.table_canvas).css("width",WIDTH+"px");
            PDprojectNum.callTheMethod.initCtrl(cxt,WIDTH,selector,dataSet);
        },
    },
    //  调用方法的集合 
    callTheMethod : {
        initCtrl : function(cxt,x,selector,dataSet){
            // 绘制最外层的轴线
            PDprojectNum.canvasDraw.axisLine(cxt,x);
            // // // 绘制刻度和箭头
            PDprojectNum.canvasDraw.drawGraAndArrow(cxt,x);
            // // // 绘制文字
            PDprojectNum.canvasDraw.drawFonts(cxt,x,selector,dataSet);
            // // // 绘制各个乡镇所占的位置比例
            PDprojectNum.canvasDraw.drawPoints(cxt,x,selector,dataSet);
        },
    },
    //  canvas绘制  
canvasDraw : {
        axisLine : function(cxt,x){
                cxt.lineWidth = "2";
                cxt.strokeStyle = "#00ffff";
                cxt.beginPath();
                cxt.moveTo(40,30);
                cxt.lineTo(40,300);
                cxt.lineTo(x/12*11,300);
                cxt.stroke();
    },
    drawGraAndArrow : function(cxt,x){
                cxt.lineWidth = "2";
                cxt.strokeStyle = "#00ffff";
                cxt.beginPath();
                cxt.moveTo(30,40);
                cxt.lineTo(40,30);
                cxt.lineTo(50,40);
                cxt.moveTo(x/12*11-10,290);
                cxt.lineTo(x/12*11,300);
                cxt.lineTo(x/12*11-10,310);
                cxt.stroke();
                // 绘制y的刻度
                for(var i = 2;i<30;i++){
                    cxt.beginPath();
                    cxt.strokeStyle = "#00ffff";
                    cxt.beginPath();
                    if(i%10==0){
                        cxt.moveTo(30,9*i+30);
                    }else{
                       cxt.moveTo(35,9*i+30); 
                    }
                    cxt.lineTo(40,9*i+30);
                    cxt.stroke();
                }
                // 绘制x轴的刻度
                for(var i=1;i<=16;i++){
                    cxt.beginPath();
                    cxt.strokeStyle = "#00ffff";
                    cxt.lineWidth = "8";
                    cxt.beginPath();
                    cxt.moveTo((x*11/12-40)/16*i+15,300);
                    cxt.lineTo((x*11/12-40)/16*i+15,293);
                    cxt.stroke();
                }
    },
    drawFonts : function(cxt,x,selector,dataSet){
                // 获取刻度值
                var leftValueArr = PDprojectNum.toolMethpd.getTableLeftValue(selector,dataSet);

                cxt.lineWidth = "1";
                cxt.font = 12+"px 黑体";
                cxt.fillStyle = "#0eef27";
                cxt.fillText(leftValueArr[0],10,40);
                cxt.fillText(leftValueArr[1],10,130); 
                cxt.fillText(leftValueArr[2],10,210); 
                cxt.fillText("0",20,305); 
                cxt.font = 16+"px 黑体";
                cxt.fillStyle = "#00b5ec";
                cxt.fillText("项",60,30); 
                cxt.fillText("目",60,55); 
                cxt.fillText("数",60,80); 
                cxt.font = 12+"px 黑体";
                cxt.fillText("(个)",55,105);  
                cxt.font = 10+"px 黑体";

                var areaArr = new Array();
                $.each(dataSet,function(index){
                    areaArr[index] = dataSet[index].area;
                });
                for(var i = 1;i<=areaArr.length;i++){
                    cxt.fillText(areaArr[i-1],(x*11/12-40)/16*i,320);
                } 
                cxt.font = 20+"px 黑体";
                cxt.fillText("在建项目",0,355);  
                cxt.fillStyle = "#5ff570"; 
                cxt.font = 14+"px 黑体";
                cxt.fillText("乡镇办名",x*11/12-70,355);      
    },
    drawPoints : function(cxt,x,selector,dataSet){
                // 获取刻度值
                var leftValueArr = PDprojectNum.toolMethpd.getTableLeftValue(selector,dataSet);
                //计算每一个小刻度所占的数量是多少
                var scaleValue = leftValueArr[0]/30;
                var arrNum = new Array();
                $.each(dataSet,function(index){
                    arrNum[index] = dataSet[index].value;
                    cxt.beginPath();
                    cxt.strokeStyle = "#00ffff";
                    cxt.lineWidth = "1";
                    cxt.beginPath();
                    cxt.moveTo((x*11/12-40)/16*index+15,270-(arrNum[index-1]*9/scaleValue)+30);
                    cxt.lineTo((x*11/12-40)/16*(index+1)+15,270-(arrNum[index]*9/scaleValue)+30);
                    cxt.stroke();
                    // 以每一个点为圆心  绘制圆
                    // alert();
                    if(scaleValue!=0){
                        PDprojectNum.canvasDraw.drawPointsArc((x*11/12-40)/16*(index+1)+15,270-(arrNum[index]*9/scaleValue)+30,cxt);
                    }
                    
                });
                
    },
    drawPointsArc : function(x,y,cxt){
                cxt.lineWidth = "2";
                cxt.strokeStyle = "#01ffff";
                cxt.beginPath();
                cxt.arc(x,y,6,0,2*Math.PI);
                cxt.closePath();
                //创建放射状/圆形渐变对象 grd
                var grd=cxt.createRadialGradient(x,y,3,x,y,5); 
                grd.addColorStop(0,"#01ffff"); 
                grd.addColorStop(1,"#0ea6e5");


                cxt.fillStyle = grd;
                cxt.fill();
                cxt.beginPath();
                cxt.arc(x,y,7,0,2*Math.PI);
                cxt.closePath();
                cxt.stroke();
    },
    },
    
    
    
    toolMethpd : {

        getTableLeftValue : function(selector,dataSet){
            var rightValueArr = new Array();
            $.each(dataSet,function(index){
                rightValueArr[index] = dataSet[index].value;
            });
            rightValueArr =  PDprojectNum.toolMethpd.sortNumber(rightValueArr); // 得到排序后的数组
            return  PDprojectNum.toolMethpd.genCodeValue(rightValueArr);// 得到的最后刻度值
        },
                // 数字排序的方法  降序排序
        sortNumber : function(arr){
            for(var i = 0; i<arr.length-1; i++){
                for(j = i+1; j<arr.length; j++){
                    if(parseInt(arr[i])<parseInt(arr[j])){
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
            // alert(arr);
            var numMax = parseInt(arr[0]);  //得到最大的数 
            while( !((numMax%3 == 0) && (numMax%5 == 0)) ){
                numMax++;
            }
            var difNum = numMax/3;
            $.each(arr,function(index){
                arr[index] = numMax-index*difNum;
            });
            return arr;
        },
    },
}