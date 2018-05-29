//http://www.3lian.com/edu/2015/05-06/210185.html   js实现滑动触屏事件监听的方法
// window.onload = function(){
// 	alert(55);
// 	var spanTouch = document.getElementById("header1");
// 	spanTouch.addEventListener("touchstart",function(event){
// 		alert(event.targetTouches[0]);
// 	});
// 	spanTouch.addEventListener("touchmove",function(event){
// 		alert(event.targetTouches[0]);
// 	});
// 	spanTouch.addEventListener("touchend",function(event){
// 		alert(event.targetTouches[0]);
// 	});
// }
 $(document).ready(function() {
 	var startX = 0;
 	var startY = 0;
 	var moveX = 0;
 	var moveY = 0;
 	var endX = 0;
 	var endY = 0;    
    $(".img_border_line").mousedown(function(e){ // 鼠标安下
    	startX = e.pageX;
    	startY = e.pageY;
    }).mousemove(function(e){ // 鼠标移动
    	moveX = e.pageX;
    	moveY = e.pageY;
    	console.log(startX+"---"+startY+"----"+moveX+"----"+moveY);

    });
    $(".img_border_line").mouseup(function(e){ // 松开鼠标
    	console.log(startX+"---"+startY+"----"+moveX+"----"+moveY);
    	// alert(55);
    });
 
 });