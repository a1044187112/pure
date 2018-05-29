<?php
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
    return $this->ParseUrlData(html_entity_decode($data_str));
}
//提取数据并返回
function aaa($data){

    // $data1=$_POST;
    // $data = $this->ParseUrlDataEx($data1);
    if($data==1){
        echo "aaa";
        $result["recode"]=0;
        $result["restate"]="";
        echo json_encode($result); 
    }
    elseif($data==2)
    {
        $result["recode"]=0;
        $result["restate"]="http://www.baidu.com";
        echo json_encode($result);
    }
}