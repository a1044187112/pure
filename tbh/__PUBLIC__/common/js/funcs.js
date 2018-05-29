// JavaScript Document
//数据传输编码
function DataTransEncode(data)
{
	return encodeURI(data);
}

//数据传输解码
function DataTransDecode(data)
{
	//alert(data);
	return decodeURIComponent(data);
}

//显示信息
function ShowMsg(id, msg)
{
	//alert(msg);
	$("#"+id+" .erro_msg").html(msg);
	//alert(msg);
}

//清空输入框的数据
function ResetInputCtrl(id)
{
	$("#"+id+" .ctrl_pos").val("");
}

//模拟提交
function SimPost(url, data_obj)
{
 	document.write("<form name='sim_form' style='display:none'>");
	for(var obj_item in data_obj)
	{
		document.write("<input type='hidden'   name='" + obj_item + "' value='" +data_obj[obj_item]+"' />");
	}
	//document.write(" <input type='submit' name='Submit' value='提交' />");
	document.write("</form>");  
 	var myForm=document.forms['sim_form'];  
    myForm.action= url;  
	myForm.method='POST';  
    myForm.submit();  
}


//模拟提交
function SimGet(url, data_obj)
{
 	document.write("<form name='sim_form' style='display:none'>");
	for(var obj_item in data_obj)
	{
		document.write("<input  type='hidden'   name='" + obj_item + "' value='" +data_obj[obj_item]+"' />");
	}
	//document.write(" <input type='submit' name='Submit' value='提交' />");
	document.write("</form>");  
 	var myForm=document.forms['sim_form'];  
    myForm.action= url;  
	myForm.method='GET';  
    myForm.submit();  
}

//随机字符串
function randomStr(min, max){
	var str = "",
		range = min,
		arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	// 随机产生
	range = Math.round(Math.random() * (max-min)) + min;
	
	for(var i=0; i<range; i++){
		pos = Math.round(Math.random() * (arr.length-1));
		str += arr[pos];
	}
	return str;
}

//去掉前后的空白符,如果传入的字符不对,则返回空
function Trim(str){
	var t_str = "";
	if(str != undefined)
		t_str = str.replace(/(^\s*)|(\s*$)/g, "");
	else
	{
	}

	return t_str;
}





