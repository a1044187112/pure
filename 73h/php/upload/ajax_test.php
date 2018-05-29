<?php
	$get_id = $_GET['get_id'];
	$data_arr = array();
	switch ($get_id) {
		case '1':	
			$data_arr['ret_code'] = 1;
			$data_arr['ret_state'] = "";		
			break;
		
		case '2':	
			$data_arr['ret_code'] = 2;
			$data_arr['ret_state'] = "";		
			break;
		default:
			$data_arr = array();
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "";		
	}
	}
	
	echo json_encode($data_arr);
