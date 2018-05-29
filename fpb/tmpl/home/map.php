<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<meta charset="utf-8" />
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0">	 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

  	<script src="/fpb/__PUBLIC__/common/js/jquery-1.11.3.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/common/css/bootstrap.min.css">
    <script src="/fpb/__PUBLIC__/common/js/bootstrap.min.js"></script>
    <!--   数字增加的动画效果的插件 -->
    <script src="/fpb/__PUBLIC__/common/js/jquery.animateNumber.min.js"></script> 

  	<link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/povertyData.css">
    
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDmap.js"></script>
   
    
    <script src="/fpb/__PUBLIC__/common/js/jquery.rotate.min.js"></script>
    
  
	<title>工作动态</title>
</head>
<body>


      <div class="row con">
           <div class="col-lg-3 "></div>
          <div class="col-lg-5 con_map">
              <div class="map">
                <img class="map_bg1" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/2.png">
                <div class="map2">
                  <img class="map_bg2" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/3.png">
                </div>
                <div class="map3">
                    <img class="map_bg3" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/5.png">
                </div>
                <div class="map4">
                    <img class="map_bg4" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/4.png">
                </div>
                <div class="map5">
                    <div class="map_area">
                      <?php
                        $root_dir = $_SERVER['DOCUMENT_ROOT'];
                        $file_str = file_get_contents($root_dir."/fpb/__PUBLIC__/home/home/svg/index1.svg");
                        echo $file_str;
                      ?>
                      </div>
                </div>
              </div>
          </div>
          <div class="col-lg-3 area_money draw_rect">
              <canvas id="poor_rea_canvas"></canvas>
          </div>
      </div>
  </div>

</body>   
<script>
  $(document).ready(function() {
    // var parameter = {
    //   "bg":"bg", // 背景
    //   "bg_table":"bg_table",  // 显示脱贫的比例数
    //   "bg_td":"bg_td",
    //   "return_canvas":"return_canvas",  // 返回按钮
    //   "next_canvas":"next_canvas", // 前进按钮

    // };


    var map_parameter = {
      // 地图
      "map_area":"map_area",
      "jump_url":"/fpb/tmpl/home/townOutOfPoorData.php?map_num=0",
    };
    MapClick.init(map_parameter);  
    // 地图动画效果
    var map_anim_parameter = [
      // 地图
      {"selector":{"map_bg1":"map_bg1","map_bg2":"map_bg2","map_bg3":"map_bg3","map_bg4":"map_bg4"}}
    ];
    MapAnimation.init(map_anim_parameter); 


 
  });


</script>
</html>