var TitleNum = {
    selector  : "",
	data : "",
    areaData    :"",
            // 初始化数据
    init : function(parameter){
        TitleNum.selector = parameter[0].selector;
        TitleNum.data = parameter[1].num;
        TitleNum.areaData = parameter[2].areaData;
        TitleNum.callTheMethod.init();
    },
    callTheMethod : {
        init : function(){
            // alert(55);
            TitleNum.proEvent.modifyDataNav();
            TitleNum.proEvent.eventProSetNavPro();
            TitleNum.proEvent.setNavHeight();
        },
    },
    proEvent : {
        // 导航上的数据  
          modifyDataNav : function(){
            // alert(TitleNum.areaData[0].sel);
            // 获取地区名字选择器
            var areaSel = "#"+TitleNum.areaData[0].sel;
            // 获取地区贫困人口数据
            var numSel = TitleNum.areaData[1].sel;
            // 导航上的扶贫资金选择器
            var outPoorFunds = TitleNum.areaData[2].sel;
            // 修改贫困数据
            $(areaSel).text(TitleNum.areaData[0].content);
            $("#"+numSel).text(TitleNum.areaData[1].content);
            $("#"+outPoorFunds).text(TitleNum.areaData[2].content);
            //  数字从0开始增加的动画效果调用方法 传入 id选择器 和 最大数值 
            numAddAnim.numAnimInt(numSel,TitleNum.areaData[1].content);
            numAddAnim.numAnimInt(outPoorFunds,TitleNum.areaData[2].content);
          },
          // 最上导航  数字的动画效果
            eventProSetNavPro : function(){
                var numArr = new Array();
                //  将传递过来的值计算出的百分比赋值给数组
                numArr[0] = 100;
                if(TitleNum.data[0].data==0){
                    numArr[1]=0;
                    numArr[2]=0;
                    numArr[3]=0;
                }else{
                    // 已脱贫所占的比例
                    numArr[1] = Math.round(TitleNum.data[1].data/TitleNum.data[0].data*100); 
                    //  未脱贫所占的比例
                    numArr[2] = Math.round(TitleNum.data[2].data/TitleNum.data[0].data*100);
                    numArr[3] = numArr[2];
                }

                
                // 数字增加动画效果的方法
                numAddAnim.numAnimFloat(TitleNum.data[3].sel,numArr[3]);
                numAddAnim.numAnimInt(TitleNum.data[0].sel,TitleNum.data[0].data);
                numAddAnim.numAnimInt(TitleNum.data[1].sel,TitleNum.data[1].data);
                numAddAnim.numAnimInt(TitleNum.data[2].sel,TitleNum.data[2].data);

                //  讲子div的高度  需要和父div高度一致 
                TitleNum.proEvent.setNavHeiAndG(numArr);
            },
            setNavHeiAndG : function(numArr){
                var setNavHeightSelC = "."+TitleNum.selector[0].sel;
                var setNavProSel = "."+TitleNum.selector[2].sel;
                var cSel = "."+TitleNum.selector[3].sel;
                // 获取父div的高度   
                var fHeight = parseInt($(setNavHeightSelC).css("height"));
                $(cSel).each(function(index){
                    // 当前数据所占比例乘上父div的高度  就是当前数据所占的总比例
                    $(this).css("height",numArr[index]*fHeight/100+"px");
                });
            },
            setNavHeight  : function(){
                var setNavHeightSelF = "."+TitleNum.selector[0].sel;
                var setNavHeightSelC = "."+TitleNum.selector[1].sel;
                TitleNum.proEvent.eventProSetNavHeight(setNavHeightSelF,setNavHeightSelC);
          },
          // 最上导航 将子div的高度和父div的高度设置一样
            eventProSetNavHeight : function(setNavHeightSelF,setNavHeightSelC){
                var fHeight = parseInt($(setNavHeightSelF).css("height"));
                $(setNavHeightSelC).css("height",(fHeight-2)+"px");
            },
    },
	
         
}
