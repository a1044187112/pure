var MapClick = {
	selector : "",
    jump_url : "",
    isdb     : "",
    t        : "",
    num      : "",
    index    : "",
    x        : "",
    y        : "",
            // 初始化数据
    init : function(parameter){
        MapClick.selector = parameter.map_area;
        MapClick.jump_url = parameter.jump_url;
        MapClick.bindEvent.mapEvent(MapClick.selector); 
        MapClick.bindEvent.mapDoubleClick(MapClick.selector);  
        MapClick.getUrl();
    },
	// 绑定地图的点击事件
	bindEvent : {
        // 单击事件
		mapEvent : function(selector){
            // 16个 乡镇区域地图选择器
            var mapSel = "."+selector+" svg>g";
            $(mapSel).each(function(index){
                $(this).click(function(event) {
                    clearTimeout(MapClick.t);  // 取消上次延时未执行的方法
                    MapClick.isdb = false;
                    // 获取到当前点击对象的标识位  先判断是否有该元素 在乡镇地图中没有该元素 
                    var obj = $("text[font-size='10']");// 镇相关的标志位
                    var townObj = $("text[font-size='15']");
                    var markNum = 0;
                    // alert(obj.length);
                    if(obj.length>0){
                        markNum =  $("text[font-size='10']")[index].innerHTML;
                    }
                    if(townObj > 0){
                        townMarkNum = $("text[font-size='15']")[index].innerHTML;
                    }
                    MapClick.index = markNum;
                    MapClick.t = setTimeout(MapClick.bindEvent.mapClick, 500);
                });
            });
        },
        mapClick : function(){
            if(MapClick.isdb!=false){
                return;
            }
        },
        // 双击事件
        mapDoubleClick : function(selector){
             MapClick.isdb = true;
            // 16个 乡镇区域地图选择器
            var mapSel = "."+selector+" svg>g";
            $(mapSel).each(function(index){
                $(this).dblclick(function(event) {
                    // 获取到当前点击对象的标识位
                    // alert($("text[font-size='10']").length);
                     if($("text[font-size='10']").length>0){
                        
                        window.location.href = MapClick.jump_url + MapClick.index;
                        return;
                     };
                    clearTimeout(MapClick.t); // 取消上次延时未执行的方法
                    // 双击后将地图放大 
                    if(MapClick.isEnlarge){
                        MapClick.enlargeMap.largeMap(event);
                    }else{
                        if($("text[font-size='15']").length>0){
                            // 获取当前页面的url 后面拼接的参数
                            var url = window.location.search;

                            // alert(MapClick.jump_url+url+"&map_num1="+MapClick.index);
                            //var num = $(this).text();
                            //alert(num);
                            //window.location.href = MapClick.jump_url+url+"&map_num1="+MapClick.index;
                            var divs_num = $(this).text();
                            divs_num = divs_num.replace(/(^\s*)|(\s*$)/g, ""); 
                            // alert(divs_num);
                            if(url==''){
                                window.location.href = MapClick.jump_url+url+"?map_num1="+divs_num;
                            }else{
                                window.location.href = MapClick.jump_url+url+"&map_num1="+divs_num;
                            }
                        }
                    }
                });
            });
        },
        
	},

    //  双击后地图放大的效果
    enlargeMap : {
        // 首先放大地图
        largeMap : function(event){
            MapClick.num++;
            var num = MapClick.num%4;
            var mapSel = "."+MapClick.selector;
            switch(num){
                case 0:
                    MapClick.enlargeMap.largeMapFourth(mapSel,event);
                    break;
                case 1:
                    MapClick.enlargeMap.largeMapFir(mapSel,event);
                    break;
                case 2:
                    MapClick.enlargeMap.largeMapSec(mapSel,event);
                    break;
                case 3:
                    MapClick.enlargeMap.largeMapThird(mapSel,event);
                    break;
            }
            // 地一次双击是放大 
            
        },
        largeMapFir : function(mapSel,event){
            // 第一次放大  需要将移动的值赋为0
            MapClick.x = 0;
            MapClick.x = 0;
            // 将当前点击元素移动到中心点
            MapClick.positionMap.posMapClickNow(event);
            $("."+MapClick.selector).animate({
                        width: "+=200px",
                        height: "+=200px",
                        top: "-=100px",
                        left: "-=100px"
                        // top: "-="+100-arr[1]+"px",
                        // left: "-="+100-arr[0]+"px"
                    }, 500);
        },
        largeMapSec : function(mapSel,event){
            MapClick.positionMap.posMapClickNow(event);
            $("."+MapClick.selector).animate({
                        width: "+=200px",
                        height: "+=200px",
                        // lineHeight: "+=50px",
                        top: "-=100px",
                        left: "-=100px"
                    }, 500);
        },
        largeMapThird : function(mapSel,event){
            // MapClick.positionMap.posMapClickNow(event);
            $("."+MapClick.selector).animate({
                        width: "-=200px",
                        height: "-=200px",
                        // lineHeight: "+=50px",
                        top: "+=100px",
                        left: "+=100px"
                    }, 500);
        },
        largeMapFourth : function(mapSel,event){
            // MapClick.positionMap.posMapClickNow(event);
            // 返回缩放 需要把偏移值为0
             $("."+MapClick.selector+" svg").animate({
                        left: 0+"px",
                        top: 0+"px"
                    }, 800);
            $("."+MapClick.selector).animate({
                        width: "-=200px",
                        height: "-=200px",
                        // lineHeight: "+=50px",
                        top: "0",
                        left: "0"
                    }, 500);
        },
    },
    positionMap: {
        posMapClickNow : function(event){
            //  获取将要放大的div的中心点 然后获取当前点击位置的 坐标  计算点击位置的坐标到中心点坐标的x , y 差值 然后移动当前的点击位置
            //  到中心点  然后 放大地图  


            // 获取父容器的宽度
            var FWidth = $("."+MapClick.selector).css("width");
            // $("."+MapClick.selector).css("background-color","red");
            // // 获取父容器的高度
            var FHeight = $("."+MapClick.selector).css("height");
            //获取body的宽度的中心点
            var bodyX = $("body").css("width");
            // // 将地图移动到中间的偏移值 
            // // var numX =  num*parseInt(FWidth);
            // var numY =  num*parseInt(FHeight);

            // // 获取父容器到body 左边线的位置
            var marBodyLeft = $("."+MapClick.selector).offset().left;
            // alert(marBodyLeft);
            // // 获取父容器到body 上边线的位置
            var marBodyTop = $("."+MapClick.selector).offset().top;
            // 以某一中心点放大  获取中心点坐标
            var x = parseInt(FWidth)/2+marBodyLeft;
            // alert(x+"---"+event.pageX);
            var y = parseInt(FHeight)/2+marBodyTop;
            // alert(y);
            // //对当前点击位置进行定位
            var clickX =  event.pageX;
            var clickY =  event.pageY;
            // 计算出当前点击位置在父容器中的坐标
            // var FclickX = clickX - marBodyLeft;
            // var FclickY = clickY - marBodyTop;
            var offArr = new Array();
            offArr[0] = clickX - x;
            offArr[1] = clickY-y;
            // alert(-offArr[0]-MapClick.x);
            // alert(x+"---"+clickX+"----"+offArr[0]+"----"+bodyX);
            $("."+MapClick.selector+" svg").animate({
                        left: -offArr[0]+MapClick.x+"px",
                        top: -offArr[1]-MapClick.y+"px"
                    }, 800);
            // 保存上一次点击之后移动的值  
            // 下一次点击之后移动  需要加上上一次移动的值
            MapClick.x = offArr[0];
            MapClick.x = offArr[1];

        },
    },
	getUrl : function(){

    },
}
// 在双击事件(dblclick)，触发的两次单击事件(click)中，第一次的单击事件(click)会被屏蔽掉，
// 但第二次不会。也就是说双击事件(dblclick)会返回一次单击事件(click)结果和一次双击事件(dblclick) 结果。
// 而不是一次双击事件(dblclick)结果和两次单击事件结果(click)。  
//　　如此这般的话，只需消灭掉多余的一次单击事件(click)，这个问题就解决了。
//　　http://www.2cto.com/kf/201311/255681.html   双击事件参考网页
var MapAnimation = {
    selector : "",
    num : "",
    t :"",  // 记时器  
    // 初始化数据
    init : function(parameter){
        MapAnimation.num=0;
        MapAnimation.selector = parameter[0].selector;
        var mapWidth = $(".map").css("width");
        $(".map").css("height",mapWidth);
        // alert(mapWidth+"---"+$(".map").css("height"));
        var bg1Height = $(".map_bg1").css("height");
        // 将第一张背景图设置水平方向 和竖直方向居中
        var offTop = (parseInt(mapWidth)-parseInt(bg1Height))/2;
        $(".map").css("padding-top",8+"px");
        // alert(offTop+"---"+$(".map_bg1").css("height"));
        $(".map1").css("padding-top",8+"px");
        $(".map2").css("margin-top",8+"px");
        $(".map3").css("padding-top",8+"px");
        $(".map4").css("padding-top",8+"px");
        var x = $(".map_bg2").css("width");
        var y = $(".map_bg2").css("height");
        // alert(x+'---'+y);
        MapAnimation.mapAnim.mapAnimBg1();
        
    },
    mapAnim : {
        mapAnimBg1 : function(){
            var bg1Sel = "."+MapAnimation.selector.map_bg1;
            MapAnimation.num++;
            // $(".map").rotate(180)
            $(".map").rotate(1*MapAnimation.num); // 旋转的角度
            $(".map2").rotate(-2*MapAnimation.num);
            // $(".map3").rotate(-3*MapAnimation.num);
            // $(".map4").rotate(-3*MapAnimation.num);
            $(".map5").rotate(-1*MapAnimation.num);
            MapAnimation.t = setTimeout("MapAnimation.mapAnim.mapAnimBg1()",20);
            if(MapAnimation.num*1.5>=360){
                // alert(MapAnimation.num);
                // clearTimeout(MapAnimation.t);
            }
        },
    },
}