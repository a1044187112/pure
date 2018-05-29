var parkDataSelDay = {
	selector : "",
	clickNum : "", // 标注点击次数
    // dataSet  : "",
      // 初始化参数
    init : function(parameter){
        parkDataSelDay.selector = parameter[0].selector;
        // alert( PoorRea.dataSet); 
        parkDataSelDay.start();

    },
    start : function(){
        //  点击事件
        parkDataSelDay.clickEvent.clickMethodSet();
        //  初始化时间
       	parkDataSelDay.timeInit.init();
    },	

    clickEvent : {
    	clickMethodSet : function(){
    		//左边按钮点击事件
    		parkDataSelDay.clickEvent.leftBtnClick();
    		//左边按钮点击事件
    		parkDataSelDay.clickEvent.rightBtnClick();
    		// 日期按钮点击事件
    		parkDataSelDay.clickEvent.tiemClick();
    	},
    	leftBtnClick : function(){
    		var btnSel = "."+parkDataSelDay.selector.return_sel;
    		$(btnSel).click(function(){
    			parkDataSelDay.clickEventPro.getYearAndMonthSub();
    		});
    	},
    	rightBtnClick : function(){
    		var btnSel = "."+parkDataSelDay.selector.next_sel;
    		$(btnSel).click(function(){
    			parkDataSelDay.clickEventPro.getYearAndMonthAdd();
    		});
    	},
    	tiemClick : function(){
    		var tiemSel = "."+parkDataSelDay.selector.now_time;
    		parkDataSelDay.clickNum = 0;
    		var click1 = 0;// 第一次点击是的日期
    		var click2 = 0; // 第二次点击是的日期
    		$(tiemSel).each(function(index){
    			$(this).click(function(){
    				parkDataSelDay.clickNum++;  // 点击第一次的时候 是开始日期  第二次的时候是结束日期
    				if(parkDataSelDay.clickNum==1){
    					click1 = parseInt($(this).text());
    				}else{
    					click2 = parseInt($(this).text());
    					//  第二次点击日历之后 将两个日期区域内的改为选中状态
    					parkDataSelDay.clickEventPro.setSelStatus(click1,click2);
    				}
    				// alert(click1+"---"+click2);
    				$(this).css("background-color","#a3ceee");
    				$(this).css("border-radius","50%");
    				if (parkDataSelDay.clickNum%2 == 0) {
    					parkDataSelDay.clickNum == 0;
    				} 
    			});
    		});
    	},
    },
    clickEventPro : {
    	// 点击之后获取 当前的 年份 和月份
    	getYearAndMonthSub : function(){
    		// 获取年
    		var year = parseInt($("."+parkDataSelDay.selector.data_year).text());
    		var month = parseInt($("."+parkDataSelDay.selector.data_month).text());
    		if(month==1){ // 当是一月是 减1之后 年份间1 month 等于12
    			year = year-1; 
    			month = 12;
    		}else{  // 月份不等于1时  月份减1
    			month =  parseInt(month)-1;  
    		}
    		// 再重新赋值
    		// alert(year+"----"+month);
    		$("."+parkDataSelDay.selector.data_year).text(year);
    		$("."+parkDataSelDay.selector.data_month).text(month+"月");
    		parkDataSelDay.timeInit.setCal(year,month);
    	},
    	getYearAndMonthAdd : function(){
    		// 获取年
    		var year = parseInt($("."+parkDataSelDay.selector.data_year).text());
    		var month = parseInt($("."+parkDataSelDay.selector.data_month).text());
    		if(month==12){ // 当是一月是 减1之后 年份间1 month 等于12
    			year = year+1; 
    			month = 1;
    		}else{  // 月份不等于1时  月份减1
    			month =  month+1;  
    		}
    		// 再重新赋值
    		// alert(year+"----"+month);
    		$("."+parkDataSelDay.selector.data_year).text(year);
    		$("."+parkDataSelDay.selector.data_month).text(month+"月");
    		parkDataSelDay.timeInit.setCal(year,month);
    	},
    	//  第二次点击日历之后 将两个日期区域内的改为选中状态
    	setSelStatus : function(sel1,sel2){
    		// 判断第一次点击和第二次点击的值的大小关系
    		if(sel1<sel2){ // 小于时
    			for(var i = 1; i<sel2-sel1 ;i++){
    				var a = sel1+i;
    				// alert(a);
    				// alert(a);
    				$("."+parkDataSelDay.selector.now_time+':contains('+a+')').css("background-color","#cae1f4");
    			}
    		}
    	},
    },
    timeInit : {
    	init : function(){
    		var date = new Date();
    		var year = date.getFullYear(); // 获取当前的年份
    		var month = date.getMonth()+1; // 获取当前的月份
    		parkDataSelDay.day = parseInt(date.getDate());  // 今天是号数
    		$("."+parkDataSelDay.selector.data_year).text(year);
    		$("."+parkDataSelDay.selector.data_month).text(month+"月");
    		var day = date.getDate(); // 获取当前是某一天
    		parkDataSelDay.timeInit.setCal(year,month);
    	},
    	setCal : function(year,month){
    		var days = parkDataSelDay.timeInit.returnDays(year,month); // 获取当前月有多少天
    		// alert(days);
    		var data1 = new Date(year,month-1,1); //  获取当前月的1号是星期几  0为星期天  6 为星期六
    		var num = data1.getDay(); // 获取这个月的1号是星期几
    		// 获取日历选择器  
    		var daySel = "."+parkDataSelDay.selector.now_time;
    		var nowNum = 1;
    		// 每一次遍历之前  先初始化  将值都改为空
    		$(daySel).text("");
    		$($(daySel)[num+parkDataSelDay.day-1]).css({borderBottom:"1px solid #E99413",color:"#E99413"});

    		$(daySel).each(function(index){
    			if(index>=num){
    				$(this).text(nowNum);  //设置当前对象的号数
    				// alert(nowNum);
    				nowNum++;
    				if(nowNum>days){  // 加到这个月的最大天数时  终止遍历
    					// alert(days+"nowNum"+"----"+nowNum);
    					return false;
    				}
    			}else{
    				$(this).text("");
    			}
    		});
    		// alert(nowNum);
    	},
    	returnDays : function(year,month){
    		// alert(month);
    		if(month ==2 ){
    			if(year%100==0){
    				return 28;  // 当年份 除以100 == 0时  二月  是有28天
    			}else{
    				//当年份 除以100 ！= 0时and 除以100等于时  二月  是有29天  否则 有28天
    				return  year%4 == 0 ? 29 : 28;  
    			}
    		}else if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    			return 31;
    		}else if(month==4||month==6||month==9||month==11){
    			return 30;
    		}
    	},
    },
}