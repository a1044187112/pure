var PDdataRadius = {
    selector : "",
    dataSet  : "",
      // 初始化参数
    init : function(parameter){
        PDdataRadius.selector = parameter[0].selector;
        PDdataRadius.dataSet = parameter[1].areaData;
        // alert( PoorRea.dataSet); 
        PDdataRadius.start(PDdataRadius.selector,PDdataRadius.dataSet);

    },
    start : function(selector,dataSet){
        //  动态传入 该区域下有多少个子地区  上限是16个  生成最下方贫困人口的分布图 根据传入的数量 移除 或者增加 画布   
        PDdataRadius.dynGenTownImg.genTownImg();
        PDdataRadius.initCanvas.vtDataF(selector,dataSet);
    },
    initCanvas : {
        vtDataF : function(selector,dataSet){
                var WIDTH = parseInt($("."+selector.rect_item).css("width")); //获取屏幕宽度
                // alert(WIDTH);
                // $(".con2").css("height",WIDTH+25+"px");
                var can = document.getElementsByClassName(selector.canvas_item);
                $.each(can,function(index){
                    this.height = WIDTH;  // 设置canvas的高度
                    this.width = WIDTH;
                    var cxt = this.getContext("2d");
                    $(this).css("width",WIDTH+"px");
                    $(this).css("height",WIDTH+"px");
                    PDdataRadius.callTheMethod.init(cxt,WIDTH,index);
                });
            },
    },
    callTheMethod : {
        init : function(cxt,x,index){
                // 绘制背景
                PDdataRadius.canvasDraw.drawBg(cxt,x);
                // 绘制白色的圆
                PDdataRadius.canvasDraw.drawWhiteRadius(cxt,x);
                // // 绘制所占比例的data半圆
                PDdataRadius.canvasDraw.drawDataRadius(cxt,x,index);
                // // 绘制圆中的数据
                // PDdataRadius.canvasDraw.drawDataFonts(cxt,x);
            }, 
    },       
        //  canvas绘制  
    canvasDraw : {
        drawBg : function(cxt,x){
                cxt.lineWidth = "1";
                cxt.fillStyle = "rgba(15,66,113,0.5)";
                cxt.beginPath();
                cxt.arc(x/2,x/2,x/2,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
            },
            drawWhiteRadius : function(cxt,x){
                cxt.lineWidth = x/20;
                cxt.strokeStyle = "white";
                cxt.beginPath();
                cxt.arc(x/2,x/2,x/8*3,0,2*Math.PI)
                cxt.closePath();
                cxt.stroke();
            },
            drawDataRadius : function(cxt,x,index){
                // 获取总的扶贫资金
                var fundsTotal = PDdataRadius.selector.funds;
                // $.each(thisObj.thisSelector.area,function(index){
                    if(parseInt(fundsTotal)!=0){
                        // alert(index);
                        var value = Math.round(parseInt( PDdataRadius.dataSet[index].funds)/parseInt(fundsTotal)*100);
                        if(!value){
                            value = 0;
                        }
                        cxt.lineWidth = x/20*3;
                        cxt.strokeStyle = "#00ffff";
                        cxt.beginPath();
                        cxt.arc(x/2,x/2,x/8*3,-0.5*Math.PI,-value/50*Math.PI-0.5*Math.PI,true)
                        cxt.stroke();
                        // 绘制圆中的数据
                        PDdataRadius.canvasDraw.drawDataFonts(cxt,x,value);
                    }else{
                        $($(".data_item_value")[index]).css("width",0+"%");
                    }
                    $($("."+PDdataRadius.selector.area_name)[index]).text(PDdataRadius.dataSet[index].area);
                    
                // });

                
            },
            drawDataFonts : function(cxt,x,text){
                cxt.fillStyle = "white";
                cxt.font = "25px 黑体";
                text = text+"%";
                var textWidth = cxt.measureText(text).width; // 计算出所绘制的文字的宽度
                cxt.fillText(text,x/2-textWidth/2,x/2+10);
            },
    },     

    dynGenTownImg : {
        genTownImg : function(){
            // var num = parseInt(PDdataRadius.dataSet.length);
            var num = parseInt(PDdataRadius.selector.areaNum);
            switch(num){
                case 1 :
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[5].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[4].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[3].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[2].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[1].remove();
                    $("."+PDdataRadius.selector.box_sel)[1].remove();
                    break;
                case 2 :
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[5].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[4].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[3].remove();
                   $($("."+PDdataRadius.selector.box_sel)[0]).children()[2].remove();
                    $("."+PDdataRadius.selector.box_sel)[1].remove();
                    break;
                case 3 :
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[5].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[4].remove();
                   $($("."+PDdataRadius.selector.box_sel)[0]).children()[3].remove();
                   $("."+PDdataRadius.selector.box_sel)[1].remove();
                    break;
                case 4 :
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[5].remove();
                   $($("."+PDdataRadius.selector.box_sel)[0]).children()[4].remove();
                   $("."+PDdataRadius.selector.box_sel)[1].remove();
                    break;
                case 5 :
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[6].remove();
                   $($("."+PDdataRadius.selector.box_sel)[0]).children()[5].remove();
                   $("."+PDdataRadius.selector.box_sel)[1].remove();
                    break;
                case 6 :
                    $($("."+PDdataRadius.selector.box_sel)[0]).children()[7].remove();
                   $($("."+PDdataRadius.selector.box_sel)[0]).children()[6].remove();
                   $("."+PDdataRadius.selector.box_sel)[1].remove();
                    break;
                case 7 :
                   $($("."+PDdataRadius.selector.box_sel)[0]).children()[7].remove();
                   $("."+PDdataRadius.selector.box_sel)[1].remove();
                    break;
                case 8 :
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[5].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[4].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[3].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[2].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[1].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[0].remove();
                    break;
                case 9 :
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[5].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[4].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[3].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[2].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[1].remove();
                    break;
                case 10 :
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[5].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[4].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[3].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[2].remove();
                    break;
                case 11 :
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[5].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[4].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[3].remove();
                    break;
                case 12 :
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[5].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[4].remove();
                    break;
                case 13 :
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[6].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[5].remove();
                    break;
                case 14 :
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[7].remove();
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[6].remove();
                    break;
                case 15 :
                    $($("."+PDdataRadius.selector.box_sel)[1]).children()[7].remove();
                    break;
            }
        },
    },  
            
}