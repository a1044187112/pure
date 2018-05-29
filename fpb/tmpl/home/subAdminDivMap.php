<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="/fpb/__PUBLIC__/common/lib/jqm/jquery.mobile-1.4.5.min.css">
    <script src="/fpb/__PUBLIC__/common/js/jquery-1.11.3.min.js"></script>
<!--    <script src="/fpb/__PUBLIC__/common/lib/jqm/jquery.mobile-1.4.5.min.js"></script> -->

    <script src="/fpb/__PUBLIC__/common/lib/action-popup/action-popup.js"></script>
    <link rel="stylesheet" href="/fpb/__PUBLIC__/common/lib/action-popup/action-popup.css?a=333">


    <link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/common.css">
<!--     <link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/header.css"> -->
    <link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/planDetail.css">

  <title>某乡镇扶贫地图</title>
</head>
<body style="background-image: url('/fpb/__PUBLIC__/home/pic/bg/plan/1.png');
            background-repeat: no-repeat;background-size: cover;">

    <!-- 头部导航栏 -->
    <div class="ui-grid-b i_header dis_area">
      <a href="/fpb/tmpl/home/index.php" class="ui-block-a h_item">
        <img src="/fpb/__PUBLIC__/home/pic/bg/header/2.png">
      </a>
      <a class="ui-block-b h_item">
      </a>
      <a href="javascript :;" onClick="javascript :history.back(-1);" class="ui-block-c h_item">
        <img src="/fpb/__PUBLIC__/home/pic/bg/header/4.png">
      </a>
    </div>
    <!-- 头部导航栏结束 -->


  <div class="country_map_area">
    <!-- 地图 -->
    <?php
      $root_dir = $_SERVER['DOCUMENT_ROOT'];
      $file_str = file_get_contents($root_dir."/fpb/__PUBLIC__/home/home/svg/1.svg");
      echo $file_str;
    ?>         
    <!-- 地图结束 -->
  </div>


</body>

<script>
  $(document).ready(function() {
   // alert($("svg>g").length);

    //$("svg>g")
    var con_height = window.innerHeight;
    $(".country_map_area").attr("style","height:"+con_height+"px;");

    var redirect_rul  = "/fpb/tmpl/home/adminDivsIndex.html";
    //监听区域
    $("svg>g").each(function(index, el) {
      $(this).click(function(event) {
        /* Act on the event */
        //alert(index);
        window.location.href = redirect_rul;
      });
    });
  });


</script>
</html>