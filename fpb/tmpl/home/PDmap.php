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


  	<link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/povertyData.css">
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDmap.js"></script>
	<title>工作动态</title>
</head>
<body>
  <!-- 背景网格开始  -->
  <div class="bg">
      <table class="bg_table" cellspacing="0">
          <tr class="bg_tr">
              <td class='bg_td'></td>
          </tr>
      </table>
  </div>
  <!-- 背景网格结束  -->
  <div class="container">
      <!-- 顶部脱贫人口完 -->
          <div class="col-sm-6 col-md-6 col-lg-5 con_map">
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
  </div>
</body>   
<script>
  $(document).ready(function() {
    var parameter = {
      // 地图
      "map_area":"map_area",
    };
    MapClick.init(parameter);  
  });


</script>
</html>