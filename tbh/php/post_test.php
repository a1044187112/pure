<?php
$get_id = $_GET['get_id'];
$data_arr = array();
switch ($get_id) {
    case '0':
        $data_arr['ret_code'] = 0;
        $data_arr['ret_state'] = "";
        break;
    case '1':
        $data_arr['ret_code'] = 1;
        $data_arr['ret_state'] = "";
        break;
    default:
        $data_arr = array();
        $data_arr['ret_code'] = 0;
        $data_arr['ret_state'] = "";
}

echo json_encode($data_arr);

//解析url的参数数据
function ParseUrlData($data_str)
{
    $ret_arr = array();
    $main_arr = explode( '&',$data_str);
    //var_dump($main_arr);
    foreach ($main_arr as $mv_str) {
        $t_arr = explode("=", $mv_str );
        $ret_arr[$t_arr[0]] = trim(urldecode($t_arr[1]));
    }

    return $ret_arr;
}
