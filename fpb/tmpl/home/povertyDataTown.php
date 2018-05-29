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
    <link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/common/css/bootstrap.min.css">
    <script src="/fpb/__PUBLIC__/common/js/bootstrap.min.js"></script>
    <!--   数字增加的动画效果的插件 -->
    <script src="/fpb/__PUBLIC__/common/js/jquery.animateNumber.min.js"></script> 

  	<link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/povertyData.css">
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/povertyData.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDtownshipDisFundsData.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDmap.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDoutOfPoorPlan.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDpoorRea.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDprojectNum.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDdataRadius.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/numberAddAnim.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDtitleNumCha.js"></script>
    <script src="/fpb/__PUBLIC__/common/js/jquery.rotate.min.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/povertyDataTouch.js"></script>
    <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/PDbgCanvas.js"></script>
	<title>工作动态</title>
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
      <div class="row header">
          <div class=" header_title">
              <div class="header_title_text">贫困总人口<span class="header_title_num" id="total_num">97295</span>人<div class="header_title_pro">
                  <div class="header_title_pro_children"></div>
              </div></div>
          </div>
          <div class=" header_title">
              <div class="header_title_text">脱贫中<span class="header_title_num" id="poor_num">9074</span>人<div class="header_title_pro">
                  <div class="header_title_pro_children"></div>
               </div>
  
              </div>
              
          </div>
          <div class=" header_title">
              <div class="header_title_text">已经脱贫<span class="header_title_num" id="been_poor_num">79873</span>人<div class="header_title_pro">
                  <div class="header_title_pro_children"></div>
              </div></div>
              
          </div>
          <div class=" header_title">
              <div class="header_title_text">脱贫工作完成率<span class="header_title_num" id="target">67</span>%<div class="header_title_pro">
                  <div class="header_title_pro_children"></div>
              </div></div>
          </div>
      </div>
      <!-- 顶部脱贫人口完 -->
      <div class="row area">
          <div class="col-lg-4 area_money">
              <div class="area_money_key">扶贫资金:</div>
              <div class="area_money_key"><span class="area_money_value" id="out_poor_funds">3923</span>万</div>
          </div>
          <div class="col-lg-5  area_money">
              <a href="javascript:" onclick="history.back(-1); "><canvas id="return_canvas"></canvas></a>
              <div class="area_money_img">
                <img class="img_bg" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/1.png">
                <div class="img_text">蔡官镇</div>
                <div class="img_num"><span class="img_num_text" id="per_num">29836</span>人</div>
              </div>
              <a href="javascript:" onclick="history.go(1); "><canvas id="next_canvas"></canvas></a>
              
          </div>
          
      </div>
      <div class="row con">
          <div class="col-lg-4 con_data">
              <div class="data">
                  <div class="data_bg"></div>
                  <div class="row">
                      <div class=" data_item data_area">
                          
                      </div>
                      <div class=" data_item data_white">
                          
                      </div>
                      <div class=" data_item data_pro">
                          
                      </div>
                      <div class=" data_item">
                          <div class="data_item_intro">资</br>金</br><span class="data_item_unit">(万元)</span></div>
                      </div>
                  </div>
                  <div class="data_intro">乡镇办名<span class="data_funds">在建拨付资金</span></div>
              </div>
          </div>
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
                        $file_str = file_get_contents($root_dir."/fpb/__PUBLIC__/home/home/svg/01.svg");
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
  <div class="container">
      <div class="row con1">
          <div class="col-lg-1 menu">
              <a href="/fpb/tmpl/home/povertyData1Town.php">
              <img class="menu_img" src="/fpb/__PUBLIC__/home/pic/bg/pov_data/6.png">
              </a>
          </div>
          <div class="col-lg-6 con_table">
              <canvas id="table_canvas"></canvas>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-4 data_table">
              <canvas id="data_canvas"></canvas>
          </div>
      </div>

      <div class="con2">
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
      </div>

      <div class="con2">
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
          <div class="con2_item">
              <canvas class="item_data_f"></canvas>
              <div class="item_area"></div>
          </div>
      </div>
  </div>
</body>   
<script>
  $(document).ready(function() {
    var parameter = {
      "bg":"bg", // 背景
      "bg_table":"bg_table",  // 显示脱贫的比例数
      "bg_td":"bg_td",
      "return_canvas":"return_canvas",  // 返回按钮
      "next_canvas":"next_canvas", // 前进按钮

    };
    PovertyData.init(parameter);  
    //title  栏 所有动态变化数字选择器和data
    var numData = [
        {"selector":[{"sel":"header_title"},{"sel":"header_title_pro"},{"sel":"header_title_num"},{"sel":"header_title_pro_children"}]},
        {"num":[{"sel":"total_num","data":0},{"sel":"poor_num","data":0},{"sel":"been_poor_num","data":0},{"sel":"target"}]},
        {"areaData":[{"sel":"img_text","content":"西秀"},{"sel":"per_num","content":229836},{"sel":"out_poor_funds","content":6923}],}
    ];
    TitleNum.init(numData);
    // 扶贫数据下正方形部分  
    var funds_parameter = [
      // 选择器   selector下的funds  代表扶贫总资金  areaData下的area  代表区域  funds 代表当前所得的扶贫资金
      {"selector":{"tomnshipName":"data_area","whiteBox":"data_white","dataSet":"data_pro","totalPriceSel":"area_money_value","funds":0}},
      {"areaData":[{"area":"杨武乡","funds":1500},{"area":"刘官乡","funds":432},{"area":"蔡官镇","funds":443},{"area":"大西桥镇","funds":440},{"area":"东关乡","funds":432},{"area":"东屯乡","funds":725},{"area":"华西乡","funds":998},{"area":"黄腊乡","funds":1008},{"area":"岩腊乡","funds":545},{"area":"新场乡","funds":5000},{"area":"双堡镇","funds":2035},{"area":"七眼桥镇","funds":600},{"area":"宁谷镇","funds":1000},{"area":"旧州乡","funds":698},{"area":"轿子山镇","funds":854},{"area":"鸡场乡","funds":562}]}
    ];
    townDisFundsData.init(funds_parameter);

    var map_parameter = {
      // 地图
      "map_area":"map_area",
      "jump_url":"/fpb/tmpl/home/townOutOfPoorData.php", // 点击地图后跳转的链接
    };
    MapClick.isEnlarge = false;
    MapClick.init(map_parameter);  
    // 地图动画效果
    var map_anim_parameter = [
      // 地图
      {"selector":{"map_bg1":"map_bg1","map_bg2":"map_bg2","map_bg3":"map_bg3","map_bg4":"map_bg4"}}
    ];
    MapAnimation.init(map_anim_parameter); 


    var reason_parameter = [
      // draw_rect   外层div选择器  poor_rea_canvas  画布选择器  id选择器  
     {"poorReaSel":{"draw_rect":"draw_rect","poor_rea_canvas":"poor_rea_canvas",}},
      /* PR 因无力  两有户  因学  因病   因灾   因失业   PRCnumber是基数  */
      {"poorRea":[{"PR":80,"PRCnumber":100},{"PR":50,"PRCnumber":100},{"PR":60,"PRCnumber":100},{"PR":20,"PRCnumber":100},{"PR":30,"PRCnumber":100},{"PR":20,"PRCnumber":100}]}, 
    ];
    PoorRea.init(reason_parameter); 

    var plan_parameter = [
      /* 最后一个数据表的各项数据  每一个data的第一项  year1  表示年份
        funds  表示扶持资金 单位 万元  project  表示在建项目 单位 个
       */
      {"selector":{"data_table":"data_table", "data_canvas":"data_canvas","beenPN":"0","willPN":"0"}},
      {"data":[{"year1":2015,"funds":1},
      {"year1":2016,"funds":2},
      {"year1":2017,"funds":3},
      {"year1":2018,"funds":4},
      {"year1":2019,"funds":5}]},
    ];
    PDoutOfPoorPlan.init(plan_parameter); 

    var project_parameter = [
      {"selector":{"con_table":"con_table","table_canvas":"table_canvas"}},
      //  area  代表当前乡镇名   value  代表当前乡镇在建项目个数
      {"LinearTable":[{"area":"杨武乡","value":"0"},{"area":"刘官乡","value":"0"},{"area":"蔡官镇","value":"0"},{"area":"大西桥镇","value":"0"},{"area":"东关乡","value":"0"},{"area":"东屯乡","value":"0"},{"area":"华西乡","value":"50"},{"area":"黄腊乡","value":"0"},{"area":"岩腊乡","value":"100"},{"area":"新场乡","value":"0"},{"area":"双堡镇","value":"0"},{"area":"七眼桥镇","value":"0"},{"area":"宁谷镇","value":"0"},{"area":"旧州乡","value":"0"},{"area":"轿子山镇","value":"0"},{"area":"鸡场乡","value":"0"}]}
    ];
    PDprojectNum.init(project_parameter);  

    var parameter = [
      // 选择器   selector 下的funds代表贫困总人口  areaNum代表这个区域有多少个子地区    代表贫困总人口  areaData 下的funds  代表 各个地区的贫困人口  
      {"selector":{"box_sel":"con2","rect_item":"con2_item","area_name":"item_area","canvas_item":"item_data_f","funds":5000,"areaNum":6}},
      {"areaData":[{"area":"杨武乡","funds":1500},{"area":"刘官乡","funds":432},{"area":"蔡官镇","funds":443},{"area":"大西桥镇","funds":440},{"area":"东关乡","funds":432},{"area":"东屯乡","funds":725},{"area":"华西乡","funds":998},{"area":"黄腊乡","funds":1008},{"area":"岩腊乡","funds":545},{"area":"新场乡","funds":5000},{"area":"双堡镇","funds":2035},{"area":"七眼桥镇","funds":600},{"area":"宁谷镇","funds":1000},{"area":"旧州乡","funds":698},
      // {"area":"轿子山镇","funds":854},
      // {"area":"鸡场乡","funds":562}
      ]}
    ];
    PDdataRadius.init(parameter);  
  });


</script>
</html>