var ProAndMoneyPlan = {
    selector : "",
    dataSet  : "",
      // 初始化参数
    init : function(parameter){
        ProAndMoneyPlan.selector = parameter[0].selector;
        ProAndMoneyPlan.dataSet = parameter[1].year;
        // alert( PoorRea.dataSet); 
        ProAndMoneyPlan.start(ProAndMoneyPlan.selector,ProAndMoneyPlan.dataSet);

    },
    start : function(selector,dataSet){
         ProAndMoneyPlan.initCanvas.dateTable(selector,dataSet);
    },
    //初始化画布
    initCanvas : {
        dateTable : function(selector){
                var WIDTH = ProAndMoneyPlan.toolMethod.getScreenWidth(); //获取屏幕宽度
                var can = document.getElementById(selector.sel_canvas);
                can.height =  330;  // 设置canvas的高度
                can.width = WIDTH;
                var cxt = can.getContext("2d");
                $("#"+selector.sel_canvas).css("width",WIDTH+"px");
                ProAndMoneyPlan.callTheMethod.drawTable(cxt,WIDTH);
            },
    },
    // 调用方法集
    callTheMethod : {
        drawTable : function(cxt,WIDTH){
                // 画线和刻度
                ProAndMoneyPlan.canvasDraw.drawTableLine(cxt,WIDTH);
                ProAndMoneyPlan.canvasDraw.drawTableGra(cxt,WIDTH);
                // 画数量所占比例
                ProAndMoneyPlan.canvasDraw.drawTableDataLeft(cxt,WIDTH);
                ProAndMoneyPlan.canvasDraw.drawTableDataRight(cxt,WIDTH);
                // // 绘制刻度表上的文字
                ProAndMoneyPlan.canvasDraw.deawTableFont(cxt,WIDTH);
                
            },
    },
    //  canvas绘制  
    canvasDraw : {
        drawTableLine : function(cxt,WIDTH){
                // 画数据表的坐标线
                cxt.lineWidth = "1";
                cxt.strokeStyle = "#eee";
                cxt.beginPath();
                cxt.moveTo(WIDTH/9*1.5,0);
                cxt.lineTo(WIDTH/9*1.5,270);
                cxt.lineTo(WIDTH/9*7.5,270);
                cxt.lineTo(WIDTH/9*7.5,260);
                cxt.stroke();
            },
        drawTableGra : function(cxt,WIDTH){
                cxt.lineWidth = "1";
                cxt.strokeStyle = "#eee";
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
        drawTableDataLeft : function(cxt,WIDTH){
                // 获取左边排的y坐标的数据
                var leftArr = ProAndMoneyPlan.toolMethod.getdataLeft();
                cxt.lineWidth = "12";
                cxt.strokeStyle = "#74fbfd";
                // 每一条的左边数据
                cxt.beginPath();
                $.each(leftArr,function(index){
                    cxt.moveTo(WIDTH/9*(2.5+index)-6,268);
                    cxt.lineTo(WIDTH/9*(2.5+index)-6,leftArr[index]);
                });
                cxt.stroke();

                
            },
        drawTableDataRight : function(cxt,WIDTH){
                cxt.lineWidth = "12";
                cxt.strokeStyle = "#74fbfd";
                // 获取右边排的y坐标的数据
                var rightArr = ProAndMoneyPlan.toolMethod.getdataRight();
                // 绘制每一天右边的数据
                cxt.strokeStyle = "#4aa9e4";
                cxt.beginPath();
                $.each(rightArr,function(index){
                    cxt.moveTo(WIDTH/9*(2.5+index)+7,268);
                    cxt.lineTo(WIDTH/9*(2.5+index)+7,rightArr[index]);
                });
                cxt.stroke();
            },
        deawTableFont : function(cxt,WIDTH){
                var leftValueArr = ProAndMoneyPlan.toolMethod.getFooterTableLeftValue();
                var rightValueArr = ProAndMoneyPlan.toolMethod.getFootereTableRightValue();
                cxt.lineWidth = "1";
                cxt.font =  12+"px 黑体";
                cxt.fillStyle = "#74fbfd";
                // 绘制文字  左边刻度
                cxt.fillText(leftValueArr[0],WIDTH/9*1.5-46,38);
                cxt.fillText(leftValueArr[1],WIDTH/9*1.5-46,98);
                cxt.fillText(leftValueArr[2],WIDTH/9*1.5-46,158);
                cxt.fillText(leftValueArr[3],WIDTH/9*1.5-46,218);
                // 
                // cxt.fillText(80,WIDTH/9*1.5-46,38);
                // cxt.fillText(60,WIDTH/9*1.5-46,98);
                // cxt.fillText(40,WIDTH/9*1.5-46,158);
                // cxt.fillText(20,WIDTH/9*1.5-46,218);
                cxt.fillText(0,WIDTH/9*1.5-35,278);
                 // 绘制文字  右边刻度
                cxt.fillText(rightValueArr[0],WIDTH/9*1.5+20,38);
                cxt.fillText(rightValueArr[1],WIDTH/9*1.5+20,98);
                cxt.fillText(rightValueArr[2],WIDTH/9*1.5+20,158);
                cxt.fillText(rightValueArr[3],WIDTH/9*1.5+20,218);
                //  cxt.fillText(80,WIDTH/9*1.5+20,38);
                // cxt.fillText(60,WIDTH/9*1.5+20,98);
                // cxt.fillText(40,WIDTH/9*1.5+20,158);
                // cxt.fillText(20,WIDTH/9*1.5+20,218);
                // cxt.fillText("2",WIDTH/9*1.5-25,278);
                // alert(ProAndMoneyPlan.thisSelector.year[0].data.year1);
                $.each(ProAndMoneyPlan.dataSet,function(index){
                    cxt.fillText(ProAndMoneyPlan.dataSet[index].data.year1,WIDTH/9*(2.9+index)-25,300);

                });
                cxt.font =  15+"px 黑体";
                cxt.fillStyle = "#eee";
                cxt.fillText("年",WIDTH/9*7.5+12,268);
            },

    },   
            
            
    toolMethod : {
            // 获取需要绘制圆的外层div的宽度
            getScreenWidth : function(){
                var widthSel = "."+ProAndMoneyPlan.selector.rect_sel;
                return $(widthSel).width();
            },
            // 获取左边排的每一个数据条上面个点的y坐标
            getdataLeft : function(){
                var leftValueArr = ProAndMoneyPlan.toolMethod.getFooterTableLeftValue();
                // 图表的高度
                var tableHeight = 270;
                var dataArr = new Array();
                var graduationMax = 4.5*(leftValueArr[0]-leftValueArr[1]) //刻度总的值

                $.each(ProAndMoneyPlan.dataSet,function(index){
                    if(ProAndMoneyPlan.dataSet[index].data.funds==""){ // 当传入的该项数据为空时
                        dataArr[index] = tableHeight;
                    }else{
                        dataArr[index] = tableHeight-parseInt(ProAndMoneyPlan.dataSet[index].data.funds)/graduationMax*tableHeight;  // 获取左边排的每一个数据条上面个点的y坐标
                    }
                    if(!dataArr[index]){
                        dataArr[index] = 0;
                    }
                });
                return dataArr;
            },
             // 获取右边排的每一个数据条上面个点的y坐标
            getdataRight : function(){
                var rightValueArr = ProAndMoneyPlan.toolMethod.getFootereTableRightValue();
                // 图表的高度
                var tableHeight = 270;
                var dataArr = new Array();
                var graduationMax = 4.5*(rightValueArr[0]-rightValueArr[1]) //刻度总的值
                $.each(ProAndMoneyPlan.dataSet,function(index){
                    if(ProAndMoneyPlan.dataSet[index].data.funds==""){ // 当传入的该项数据为空时
                        dataArr[index] = tableHeight;
                    }else{
                        dataArr[index] = tableHeight-parseInt(ProAndMoneyPlan.dataSet[index].data.project)/graduationMax*tableHeight;  // 获取右边排的每一个数据条上面个点的y坐标
                    }
                    if(!dataArr[index]){
                        dataArr[index] = 0;
                    }
                });
                return dataArr;
            },

            // 获取数据表左边的刻度值
            getFooterTableLeftValue : function(){
                var leftValueArr = new Array();
                if(ProAndMoneyPlan.dataSet.length == 0){
                    leftValueArr[0] = 0;
                }else{
                    $.each(ProAndMoneyPlan.dataSet,function(index){
                        // 当传递的参数为空时 
                        if(ProAndMoneyPlan.dataSet[index].data.funds==""){
                            leftValueArr[index] = 0;
                        }else{
                            leftValueArr[index] = ProAndMoneyPlan.dataSet[index].data.funds;
                        }
                    });
                }
                leftValueArr = ProAndMoneyPlan.toolMethod.sortNumber(leftValueArr); // 得到排序后的数组
                // alert(ProAndMoneyPlan.toolMethod.genCodeValue(leftValueArr));
                return ProAndMoneyPlan.toolMethod.genCodeValue(leftValueArr);// 得到的最后刻度值
            },
            // 获取数据表右边的刻度值
            getFootereTableRightValue : function(){
                var rightValueArr = new Array();
                if(ProAndMoneyPlan.dataSet.length == 0){
                    rightValueArr[0] = 0;
                }else{
                    $.each(ProAndMoneyPlan.dataSet,function(index){
                        if(ProAndMoneyPlan.dataSet[index].data.funds==""){
                            rightValueArr[index] = 0;
                        }else{
                            rightValueArr[index] = ProAndMoneyPlan.dataSet[index].data.project;  
                        }
                    });
                }
                rightValueArr = ProAndMoneyPlan.toolMethod.sortNumber(rightValueArr); // 得到排序后的数组
                return ProAndMoneyPlan.toolMethod.genCodeValue(rightValueArr);// 得到的最后刻度值
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
                var numMax = parseInt(arr[0]);  //得到最大的数 
                while(numMax%4 != 0){
                    numMax++;
                }
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
            

        } ,
}