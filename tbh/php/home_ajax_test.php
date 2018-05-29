<?php
/**
 * Created by PhpStorm.
 * User: zl
 * Date: 2016/8/25
 * Time: 16:33
 */

function ParseUrlData($data_str)
{
    $ret_arr = array();
    $main_arr = explode('&', $data_str);
    foreach ($main_arr as $mv_str) {
        $t_arr = explode("=", $mv_str);
        $ret_arr[$t_arr[0]] = trim(urldecode($t_arr[1]));
    }
    return $ret_arr;
}

//解析url的参数数据,需要进行html转义

function ParseUrlDataEx($data_str)
{
    //将数据进行html 解码
    return ParseUrlData(html_entity_decode($data_str));
}
$ret_arr = array(
    '0'=>array(
        'img_url' => '/tbh/__PUBLIC__/home/pic/bg/categories/1.png',
        'text' => '背景墙马赛克卫生间装修',
        'price' => '88.00',
        'buy_num' => '165',
        'id' => '10',
    ),
    '1'=>array(
        'img_url' => '/tbh/__PUBLIC__/home/pic/bg/categories/2.png',
        'text' => '背景墙马赛克卫生间装修',
        'price' => '99.00',
        'buy_num' => '52',
        'id' => '11',
    ),
    '2'=>array(
        'img_url' => '/tbh/__PUBLIC__/home/pic/bg/categories/1.png',
        'text' => '背景墙马赛克卫生间装修',
        'price' => '150.00',
        'buy_num' => '34',
        'id' => '12',
    ),
    '3'=>array(
        'img_url' => '/tbh/__PUBLIC__/home/pic/bg/categories/2.png',
        'text' => '背景墙马赛克卫生间装修',
        'price' => '150.00',
        'buy_num' => '34',
        'id' => '13',
    ),
    // '4'=>array(
    //     'img_url' => '/tbh/__PUBLIC__/home/pic/bg/categories/2.png',
    //     'text' => '背景墙马赛克卫生间装修',
    //     'price' => '150.00',
    //     'buy_num' => '34',
    //     'id' => '13',
    // ),
    // '5'=>array(
    //     'img_url' => '/tbh/__PUBLIC__/home/pic/bg/categories/2.png',
    //     'text' => '背景墙马赛克卫生间装修',
    //     'price' => '150.00',
    //     'buy_num' => '34',
    //     'id' => '13',
    // ),
);

$data = ParseUrlDataEx($_POST['data']);
$ret=array();
$ret['ret_code']=1;
$ret['ret_state']="失败";
if(empty($data['menu0'])){
    if(empty($data['menu1'])){
        if(empty($data['menu2'])){
            $ret['ret_code']=0;
            $ret['ret_state']=$ret_arr;
        }
        $ret['ret_code']=0;
        $ret['ret_state']=$ret_arr;
    }
    $ret['ret_code']=0;
    $ret['ret_state']=$ret_arr;
}
echo json_encode($ret);

