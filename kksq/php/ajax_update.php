<?php

    //解析url的参数数据
    function ParseUrlData($data_str)
    {
        //$ret_arr = array();
        //$data_str = urldecode(html_entity_decode(I('post.data')));
        //decleration=编辑++&id=4
        $ret_arr = array();
        $main_arr = explode( '&',$data_str);
        //var_dump($main_arr);
        foreach ($main_arr as $mv_str) {
            $t_arr = explode("=", $mv_str );
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
	//post测试打印
	//var_dump($_POST);return;
	//var_dump(ParseUrlDataEx($_POST['data']));return;

	//数据返回
	$data_arr = array();
	$data_arr['ret_code'] = 0;
	$data_arr['ret_state'] = "http://www.baidu.com";
	echo json_encode($data_arr);








