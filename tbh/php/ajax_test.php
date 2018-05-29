<?php
	$get_id = $_GET['get_id'];
	$data_arr = array();
	switch ($get_id) {
		case '1':	
			$data_arr['ret_code'] = 1;
			$data_arr['ret_state'] = "";		
			break;
		
		case '2':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/requestRefund.html";		
			break;
		case '3':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/receiptSucc.html";		
			break;
		case '4':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/beenEvaluation.html";		
			break;
		case '5':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "";		
			break;
		case '6':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/beenEvaluation.html";		
			break;
		case '7':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "{'data':'1'}";		
			break;
		case '8':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/productPar.html";		
			break;
		case '9':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/submitOrder1.html";		
			break;
		case '10':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "";		
			break;
		case '11':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/paymentSucc.html";		
			break;
		case '12':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/pay.html";		
			break;
		case '13':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/refundCom.html";		
			break;
		case '14':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/waitSellShip.html";		
			break;
		case '15':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/refund.html";		
			break;
		case '16':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/hotelInfo.html";		
			break;
		case '17':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/waitReceipt.html";		
			break;
		case '18':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/productPar.html";		
			break;
		case '19':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "";		
			break;
		case '20':	
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "/tbh/tmpl/home/submitOrder.html";		
			break;
		case '21':	
			$data[0]["id"]=1;
	        $data[0]['name']="建材";
	        $data[1]["id"]=2;
	        $data[1]["name"]="石料";
	        $data[2]["id"]=2;
	        $data[2]["name"]="石料";
	        $data[3]["id"]=2;
	        $data[3]["name"]="石料";
	        $data_arr['ret_code']=0;
	        $data_arr['ret_state']=$data;
	        // echo json_encode($ret_data);		
			break;
		default:
			$data_arr = array();
			$data_arr['ret_code'] = 0;
			$data_arr['ret_state'] = "";		
	}
	
	
	echo json_encode($data_arr);

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