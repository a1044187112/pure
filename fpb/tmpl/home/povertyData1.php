<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<meta charset="utf-8" />
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0">	 -->
  <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style type="text/css">
      @font-face{
        font-family: "bgqc";
        src: url(/fpb/__PUBLIC__/home/fonts/bg.TTF);
      }
  </style>
  	<script src="/fpb/__PUBLIC__/common/js/jquery-1.11.3.min.js"></script>
    <!--   数字增加的动画效果的插件 -->
    <script src="/fpb/__PUBLIC__/common/js/jquery.animateNumber.min.js"></script> 
    <link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/common/css/bootstrap.min.css">
    <script src="/fpb/__PUBLIC__/common/js/bootstrap.min.js"></script>
     <script src="/fpb/__PUBLIC__/common/js/jquery.rotate.min.js"></script>
     <!-- <script type="text/javascript" src="/fpb/__PUBLIC__/common/js/jquery.touchSwipe.min.js"></script> -->

  	<link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/povertyData1.css">
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/provertyData1.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDmap.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/numberAddAnim.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDtitleNumCha.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/povertyDataTouch.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDbgCanvas.js"></script>
	<title>扶贫数据</title>
</head>
<body>
<canvas id="canvas" ></canvas>
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
      <div class="row header" >
          <div class=" header_title">
              <div class="header_title_text">贫困总人口<span class="header_title_num" id="total_num">0</span>人<div class="header_title_pro">
                  <div class="header_title_pro_children"></div>
              </div></div>
          </div>
          <div class=" header_title">
              <div class="header_title_text">脱贫中<span class="header_title_num" id="poor_num">0</span>人<div class="header_title_pro">
                  <div class="header_title_pro_children"></div>
               </div>
  
              </div>
              
          </div>
          <div class=" header_title">
              <div class="header_title_text">已经脱贫<span class="header_title_num" id="been_poor_num">0</span>人<div class="header_title_pro">
                  <div class="header_title_pro_children"></div>
              </div></div>
              
          </div>
          <div class=" header_title">
              <div class="header_title_text">脱贫工作完成率<span class="header_title_num" id="target">0</span>%<div class="header_title_pro">
                  <div class="header_title_pro_children"></div>
              </div></div>
          </div>
      </div>
      <!-- 顶部脱贫人口完 -->
      <div class="row area">
          <div class="col-sm-6 col-md-5 col-lg-4 area_money">
              <div class="area_money_key">扶贫资金:</div>
              <div class="area_money_key"><span class="area_money_value" id="out_poor_funds">3923</span>万</div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-5  area_money">
              <a href="javascript:" onclick="history.back(-1); "><canvas id="return_canvas"></canvas></a>
              <div class="area_money_img">
                <img class="img_bg" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/1.png">
                <div class="img_text">西秀区</div>
                <div class="img_num"><span class="img_num_text" id="per_num">29836</span>人</div>
              </div>
              <a href="javascript:" onclick="history.go(1); "><canvas id="next_canvas"></canvas></a>
              
          </div>
          
      </div>
      <div class="row con">
          <div class="col-sm-6 col-md-5 col-lg-4 con_data con_anim">
              <div class="menu">
                <img class="menu_img_bg" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/7.png" style="visibility:hidden;">
                  <img class="menu_img" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/7.png">
                  <div class="menu_img_text">扶贫导航</div>
                  <div class="data_nav">
                      <img class="menu_nav" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/9.png">
                      <img class="menu_nav_line" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/10.png">
                      <a class="menu_item" href="#">扶贫计划</a>
                      <a class="menu_item" href="#">工作动态</a>
                      <a class="menu_item" href="#">区域信息</a>
                      <a class="menu_item" href="#">区域数据</a>
                  </div>
              </div>
              <div class="img_border">
                  <img class="img1" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/11.png" style="display:none;">
                  <img class="img_border_con" id="header1"  src="/fpb/__PUBLIC__/home/pic/bg/pov_data/8.png" >
                  <img class="img_border_line" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/12.png" style="display:none;" >
                  <iframe class="menu_item_page"   src="/fpb/tmpl/home/outOfPovPlan.html"  frameborder="0"  wmode="transparent" ></iframe>
              </div>
          </div>
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
          <div class="col-sm-5 col-md-4 col-lg-3 area_money draw_rect">
              <div class="header">
                  <img class="header_img" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/13.png">
                  <div class="header_text">西秀区扶贫措施</div>
              </div>
              <div class="content" style="display:none;">
                  <div class="content_item">
                      <div class="con_item_title">1.产业就业扶持</div>
                      <div class="con_item_num"><span class="item_num">100</span>人</div>
                      <div class="con_item_com_rate">已完成&nbsp;&nbsp;&nbsp;<span class="com_rate_num">85</span>%</div>
                  </div>
                  <div class="content_item">
                      <div class="con_item_title">2.社会保障兜底</div>
                      <div class="con_item_num"><span class="item_num">100</span>人</div>
                      <div class="con_item_com_rate">已完成&nbsp;&nbsp;&nbsp;<span class="com_rate_num">85</span>%</div>
                  </div>
                  <div class="content_item">
                      <div class="con_item_title">3.生态保护扶持</div>
                      <div class="con_item_num"><span class="item_num">100</span>人</div>
                      <div class="con_item_com_rate">已完成&nbsp;&nbsp;&nbsp;<span class="com_rate_num">85</span>%</div>
                  </div>
                  <div class="content_item">
                      <div class="con_item_title">4.医疗教育扶持</div>
                      <div class="con_item_num"><span class="item_num">100</span>人</div>
                      <div class="con_item_com_rate">已完成&nbsp;&nbsp;&nbsp;<span class="com_rate_num">85</span>%</div>
                  </div>
                  <div class="content_item">
                      <div class="con_item_title">5.易地搬迁扶持</div>
                      <div class="con_item_num"><span class="item_num">100</span>人</div>
                      <div class="con_item_com_rate">已完成&nbsp;&nbsp;&nbsp;<span class="com_rate_num">85</span>%</div>
                  </div>
                  <div class="content_item">
                      <div class="con_item_title">6.基础设施其它扶持</div>
                      <div class="con_item_num"><span class="item_num">100</span>人</div>
                      <div class="con_item_com_rate">已完成&nbsp;&nbsp;&nbsp;<span class="com_rate_num">85</span>%</div>
                  </div>
                  <!-- <img class="content_img" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/14.png"> -->
              </div>
              <img class="content_img" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/14.png">
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row con1 con_anim">
          <div class=" col-lg-4 ">
            <a href="/fpb/tmpl/home/povertyData.php">
              <div class="menu">
                  <img class="menu_img_bg" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/6.png">
                  <img class="menu_img" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/7.png">
                  <div class="menu_text_data">数据分析</div>
              </div></a>
          </div>
      </div>  
  </div>
</body>   
<script>
  $(document).ready(function() {
    var map_parameter = {
      // 地图
      "map_area":"map_area",
      "jump_url":"/fpb/tmpl/home/povertyDataTown.php?map_num=", // 点击地图后跳转的链接
    };
    MapClick.isEnlarge = false;
    MapClick.init(map_parameter);  
    // 地图动画效果
    var map_anim_parameter = [
      // 地图
      {"selector":{"map_bg1":"map_bg1","map_bg2":"map_bg2","map_bg3":"map_bg3","map_bg4":"map_bg4"}}
    ];
    MapAnimation.init(map_anim_parameter); 



    var parameter = {
      "bg":"bg",
      "bg_table":"bg_table",  // 显示脱贫的比例数
      "bg_td":"bg_td",
      "return_canvas":"return_canvas",
      "next_canvas":"next_canvas",
      "draw_rect":"draw_rect",
      "menu_item":"menu_item",  // 扶贫导航左侧的菜单选择
      "img_border":"img_border",
      "img_border_con":"img_border_con",// 背景图片
      "img_border_line":"img_border_line",// 滚动条
      "menu_item_page":"menu_item_page",// 导入页面的ifream
      //  pageSet  iframe四个menu 对应得跳转url 
      "pageSet":[{"page":"/fpb/tmpl/home/outOfPovPlan.html"},{"page":"/fpb/tmpl/home/adminDivsIndexPC.html"},{"page":"/fpb/tmpl/home/articleDetailPC.html"},{"page":"/fpb/tmpl/home/outOfPovertyWorkPC.html"}],
    };
    PovertyData1.init(parameter); 
    //title  栏 所有动态变化数字选择器和data
    var numData = [
        {"selector":[{"sel":"header_title"},{"sel":"header_title_pro"},{"sel":"header_title_num"},{"sel":"header_title_pro_children"}]},
        {"num":[{"sel":"total_num","data":94352},{"sel":"poor_num","data":44374},{"sel":"been_poor_num","data":5623},{"sel":"target"}]},
        {"areaData":[{"sel":"img_text","content":"西秀"},{"sel":"per_num","content":229836},{"sel":"out_poor_funds","content":6923}],}
    ];
    TitleNum.init(numData);

      
    
  });
</script>
</html>