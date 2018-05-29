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
<!--   <script src="/fpb/__PUBLIC__/common/lib/jqm/jquery.mobile-1.4.5.min.js"></script> -->

  <script type="text/javascript" src="/fpb/__PUBLIC__/common/js/jquery.touchSwipe.min.js"></script>

  <link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/common.css?xxx">
  <link rel="stylesheet" type="text/css" href="/fpb/__PUBLIC__/home/home/css/index.css?xxx">
  <script type="text/javascript" src="/fpb/__PUBLIC__/home/home/js/index.js?xxx"></script>
  <title>西秀扶贫-首页</title>
</head>

<body style="overflow: hidden;">
    <div data-role="page" id="pageone" style="overflow: hidden;">

      <div class="ui-grid-a info_dis_area">


      
        <div class="ui-block-a info_item menu_con">
          <!-- 菜单 -->
            <div class="menu_item hp_bid_data">
               <div class="mi_img"><img src="/fpb/__PUBLIC__/home/pic/bg/index/3.png"></div>
              <div class="mi_title">扶贫数据</div> 
            </div>
            <a href="/fpb/tmpl/home/helpPlan.html" class="menu_item ">
               <div class="mi_img"><img src="/fpb/__PUBLIC__/home/pic/bg/index/2.png"></div>
              <div class="mi_title">扶贫计划</div> 

            </a>
            <a href="/fpb/tmpl/home/workNewsList.html" class="menu_item ">
               <div class="mi_img"><img src="/fpb/__PUBLIC__/home/pic/bg/index/5.png"></div>
              <div class="mi_title">工作动态</div> 

            </a>
            <a href="/fpb/tmpl/home/articleList.html" class="menu_item ">
               <div class="mi_img"><img src="/fpb/__PUBLIC__/home/pic/bg/index/6.png"></div>
              <div class="mi_title">项目指南</div> 
            </a>

            <a href="/fpb/tmpl/home/policyNews.html" class="menu_item ">
               <div class="mi_img"><img src="/fpb/__PUBLIC__/home/pic/bg/index/9.png"></div>
              <div class="mi_title">政策前沿</div> 
            </a>

            <a href="/fpb/tmpl/home/articleDetail.html" class="menu_item ">
               <div class="mi_img"><img src="/fpb/__PUBLIC__/home/pic/bg/index/4.png"></div>
              <div class="mi_title">脱贫成效</div> 
            </a>
          <!-- 菜单结束 -->
        </div>
        <div class="ui-block-b info_item map_con">


          <div class="ui-grid-b i_header">
            <div class="ui-block-a h_item menu_list">
              <img src="/fpb/__PUBLIC__/home/pic/bg/index/7.png">
            </div>
            <div class="ui-block-b h_item">
            </div>
            <div class="ui-block-c h_item">
            </div>
          </div>     

          <!-- 地图 -->
          <div class="fight_map_area" style="position: relative;">
            <?php
              $root_dir = $_SERVER['DOCUMENT_ROOT'];
              $file_str = file_get_contents($root_dir."/fpb/__PUBLIC__/home/home/svg/index.svg");
              echo $file_str;
            ?>
          </div>            
          <!-- 地图结束 -->

          <!-- 比例图 -->
          <div class="ratio_digm_area" style="background-image: url('/fpb/__PUBLIC__/home/pic/bg/ratio_dgm/1.png');
            background-repeat: no-repeat;background-size: cover;">
            <!-- 比例图拉环 -->
            <div class="ratio_dgm_pring_area" style="">
              <span class="rd_circle"></span>
              <span class="rd_hline"></span>
            </div>
            <div class="ratio_dgm_pring_down_area" style="">
              <span class="rd_hline"></span>
              <span class="rd_circle"></span>
            </div>
            <!-- 比例图拉环结束 -->

            <div class="rd_area_1 rd_title_area">
              脱贫攻坚贫困人口分布比例图  
            </div>
            <div class="rd_area_2" style="position: relative;"></div>
            <div class="rd_area_3 rd_title_area">
              2016脱贫攻坚措施
            </div>
            <div class="rd_area_4" >
              <div class="popl_distb_dgm_area">
                <div class="popl_distb_dgm_ctnt">

                  <div class="ui-grid-a pdd_item_con">
                    <div class="ui-block-a pdd_data_item">
                      <div class="ui-grid-a pd_item_ctnt">
                        <div class="ui-block-a cnt_item">
                          <img src="/fpb/__PUBLIC__/home/pic/bg/ratio_dgm/3.png">
                        </div>
                        <div class="ui-block-b cnt_item">
                          <div class="ci_title">产业和就业扶持:</div>
                          <div class="ci_cnt">共计<span class="val">19035</span>人。</div>
                        </div>
                      </div>
                    </div>
                    <div class="ui-block-b pdd_data_item">
                      <div class="ui-grid-a pd_item_ctnt">
                        <div class="ui-block-a cnt_item">
                          <img src="/fpb/__PUBLIC__/home/pic/bg/ratio_dgm/4.png">
                        </div>
                        <div class="ui-block-b cnt_item">
                          <div class="ci_title">生态保护扶持:</div>
                          <div class="ci_cnt">共计<span class="val">19035</span>人。</div>
                        </div>
                      </div>
                    </div>
                  </div>  

                  <div class="ui-grid-a pdd_item_con">
                    <div class="ui-block-a pdd_data_item">
                      <div class="ui-grid-a pd_item_ctnt">
                        <div class="ui-block-a cnt_item">
                          <img src="/fpb/__PUBLIC__/home/pic/bg/ratio_dgm/5.png">
                        </div>
                        <div class="ui-block-b cnt_item">
                          <div class="ci_title">异地扶贫搬迁扶持:</div>
                          <div class="ci_cnt">共计<span class="val">19035</span>人。</div>
                        </div>
                      </div>
                    </div>
                    <div class="ui-block-b pdd_data_item">
                      <div class="ui-grid-a pd_item_ctnt">
                        <div class="ui-block-a cnt_item">
                          <img src="/fpb/__PUBLIC__/home/pic/bg/ratio_dgm/6.png">
                        </div>
                        <div class="ui-block-b cnt_item">
                          <div class="ci_title">社会保障兜底:</div>
                          <div class="ci_cnt">共计<span class="val">19035</span>人。</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ui-grid-a pdd_item_con">
                    <div class="ui-block-a pdd_data_item">
                      <div class="ui-grid-a pd_item_ctnt">
                        <div class="ui-block-a cnt_item">
                          <img src="/fpb/__PUBLIC__/home/pic/bg/ratio_dgm/7.png">
                        </div>
                        <div class="ui-block-b cnt_item">
                          <div class="ci_title">医疗救助和教育扶贫:</div>
                          <div class="ci_cnt">共计<span class="val">19035</span>人。</div>
                        </div>
                      </div>
                    </div>
                    <div class="ui-block-b pdd_data_item">
                      <div class="ui-grid-a pd_item_ctnt">
                        <div class="ui-block-a cnt_item">
                          <img src="/fpb/__PUBLIC__/home/pic/bg/ratio_dgm/8.png">
                        </div>
                        <div class="ui-block-b cnt_item">
                          <div class="ci_title">基础设施扶持:</div>
                          <div class="ci_cnt">共计<span class="val">19035</span>人。</div>
                        </div>
                      </div>
                    </div>
                  </div>   
                </div>
              </div>              
            </div>
            <div class="rd_area_5 show_next_page" data-next=".help_intro_area_1">
              <div class="show_more">
                点击查看更多
              </div>
              <div class="up_arrow_outer">
                <div class="up_arrow">
                  <span class="ua_tri1"></span>
                  <span class="ua_tri2"></span>
                </div>                
              </div>

            </div>
          </div>
          <!-- 比例图结束 -->
          
          <!-- 扶贫概况 -->
          <div class="help_intro_area help_intro_area_1 " style="background-image: url('/fpb/__PUBLIC__/home/pic/bg/hp_intro/10.png');
            background-repeat: no-repeat;background-size: cover;">
            <div class="ratio_dgm_pring_down_area" style="">
              <span class="rd_hline"></span>
              <span class="rd_circle"></span>
            </div>

            <div class="hp_area_1">
              <div class="ha_title">
                西秀概况
              </div>
              
            </div> 
            <div class="hp_area_2 intro_img">
              <img src="/fpb/__PUBLIC__/home/pic/bg/hp_intro/1.png" height="100%" width="100%">
            </div>

             <div class="hp_area_3 show_next_page"  data-next=".help_intro_area_2">
              <div class="show_more">
                点击查看更多
              </div>
              <div class="up_arrow_outer">
                <div class="up_arrow">
                  <span class="ua_tri1"></span>
                  <span class="ua_tri2"></span>
                </div>                
              </div>

            </div>

          </div>
          <!-- 扶贫概况结束 -->          
          <!-- 扶贫概况 -->
          <div class="help_intro_area help_intro_area_2 " style="background-image: url('/fpb/__PUBLIC__/home/pic/bg/hp_intro/10.png');
            background-repeat: no-repeat;background-size: cover;">
            <div class="ratio_dgm_pring_down_area" style="">
              <span class="rd_hline"></span>
              <span class="rd_circle"></span>
            </div>

            <div class="hp_area_1">
              <div class="ha_title">
                
              </div>
              
            </div> 
            <div class="hp_area_2 intro_img">
              <img src="/fpb/__PUBLIC__/home/pic/bg/hp_intro/2.png" height="100%" width="100%">
            </div>

             <div class="hp_area_3 show_next_page" data-next=".help_intro_area_3">
              <div class="show_more">
                点击查看更多
              </div>
              <div class="up_arrow_outer">
                <div class="up_arrow">
                  <span class="ua_tri1"></span>
                  <span class="ua_tri2"></span>
                </div>                
              </div>

            </div>

          </div>
          <!-- 扶贫概况结束 -->       
          <!-- 扶贫概况 -->
          <div class="help_intro_area help_intro_area_3 " style="background-image: url('/fpb/__PUBLIC__/home/pic/bg/hp_intro/10.png');
            background-repeat: no-repeat;background-size: cover;">
            <div class="ratio_dgm_pring_down_area" style="">
              <span class="rd_hline"></span>
              <span class="rd_circle"></span>
            </div>

            <div class="hp_area_1">
              <div class="ha_title">
                
              </div>
              
            </div> 
            <div class="hp_area_2 intro_img">
              <img src="/fpb/__PUBLIC__/home/pic/bg/hp_intro/3.png" height="100%" width="100%">
            </div>

             <div class="hp_area_3 show_next_page"  data-next=".help_intro_area_4">
              <div class="show_more">
                点击查看更多
              </div>
              <div class="up_arrow_outer">
                <div class="up_arrow">
                  <span class="ua_tri1"></span>
                  <span class="ua_tri2"></span>
                </div>                
              </div>

            </div>

          </div>
          <!-- 扶贫概况结束 --> 
          <!-- 扶贫概况 -->
          <div class="help_intro_area help_intro_area_4 dis_area" style="background-image: url('/fpb/__PUBLIC__/home/pic/bg/hp_intro/10.png');
            background-repeat: no-repeat;background-size: cover;">
            <div class="ratio_dgm_pring_down_area" style="">
              <span class="rd_hline"></span>
              <span class="rd_circle"></span>
            </div>

            <div class="hp_area_1">
              <div class="ha_title">
                
              </div>
              
            </div> 
            <div class="hp_area_2 intro_img">
              <img src="/fpb/__PUBLIC__/home/pic/bg/hp_intro/4.png" height="100%" width="100%">
            </div>

             <a href="/fpb/tmpl/home/index.php" class="hp_area_3 " style="max-width: 40px;margin: 0 auto;">
              <img src="/fpb/__PUBLIC__/home/pic/bg/index/22.png" style="">   
                
            </a>

          </div>
          <!-- 扶贫概况结束 -->


        </div>
      </div>
      



    </div> 
</body>

<script>
	$(document).ready(function() {
    var pic_dir_path = "/fpb/__PUBLIC__/home/pic/bg/ratio_dgm/";
    var redirect_rul  = "/fpb/tmpl/home/subAdminDivMap.php";
    var e_options = [
      {"type":"system","pic_dir_path":pic_dir_path,"redirect_rul":redirect_rul,},
      {"type":"ratio_item","name":"杨武乡","ratio":5,"num":2233},
      {"type":"ratio_item","name":"双堡镇","ratio":10,"num":1235},
      {"type":"ratio_item","name":"岩腊乡","ratio":10,"num":1265},
      {"type":"ratio_item","name":"鸡肠乡","ratio":10,"num":9960},
      {"type":"ratio_item","name":"东关办","ratio":95,"num":563},
      {"type":"ratio_item","name":"杨武乡","ratio":50,"num":2233},
      {"type":"ratio_item","name":"双堡镇","ratio":50,"num":1235},
      {"type":"ratio_item","name":"岩腊乡","ratio":50,"num":1265},
      {"type":"ratio_item","name":"鸡肠乡","ratio":220,"num":9960},
      {"type":"ratio_item","name":"东关办","ratio":50,"num":563},
      {"type":"ratio_item","name":"杨武乡","ratio":50,"num":2233},
      {"type":"ratio_item","name":"双堡镇","ratio":150,"num":1235},
      {"type":"ratio_item","name":"岩腊乡","ratio":50,"num":1265},
      {"type":"ratio_item","name":"鸡肠乡","ratio":50,"num":9960},
      {"type":"ratio_item","name":"东关办","ratio":50,"num":563},
      {"type":"ratio_item","name":"杨武乡","ratio":50,"num":2233},
      {"type":"ratio_item","name":"双堡镇","ratio":50,"num":1235},
    ];
    Index.initCtrl(e_options);  
	});


</script>

</html>
