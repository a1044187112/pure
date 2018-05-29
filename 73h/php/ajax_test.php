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

		case '3':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "";		
			break;
		case '4':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/73h/tmpl/home/confirmEditConInfoCart.html";	
			break;
		case '5':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/73h/tmpl/home/confirmBuyNowEditInfo.html";	
			break;
		case '6':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/73h/tmpl/home/EditConInfoCart.html";	
			break;
		case '7':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/73h/tmpl/admin-moblie/verifyProject.html";	
			break;
		case '8':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/73h/tmpl/admin-moblie/regCon.html";	
			break;
		case '9':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/73h/tmpl/admin-moblie/verifyCon.html";	
			break;
		case '10':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/73h/tmpl/admin-moblie/phySuccess.html";	
			break;
		case '11':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/73h/tmpl/admin-moblie/confirmSuccess.html";	
			break;
		default:
			$data_arr = array();
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "";		
	}
	
	
	echo json_encode($data_arr);
