<?php
	//var_dump($_POST);
	$ret_arr = array();
	$ret_arr['ret_code'] = 0;

	//输出内容选择返回数据
	$data = array();
	$data[0]['id'] 		= "2";
	$data[0]['name'] 	= "滴滴油";
	$data[1]['id'] 		= "345";
	$data[1]['name'] 	= "毛球保养机";
	$ret_arr['ret_data'] = $data;
	echo json_encode($ret_arr);return;