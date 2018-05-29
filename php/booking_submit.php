<?php
	//var_dump($_POST);
	$ret_arr = array();
	$ret_arr['ret_code'] = 0;
	$ret_arr['ret_state'] = '/tmpl/cjs/serviceBookingDone.html';

	echo json_encode($ret_arr);
