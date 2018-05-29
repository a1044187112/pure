// JavaScript Document
/*文件上传类,使用指定的选择器绑定文件change事件,当文件选择完毕后,直接上传到相应的url中
*/
var FileUpload={
	//初始化对象
	fileUpload:function(i_options){
		var this_obj = {};	
		
		///系统选项
		this_obj.sys_opt = {};
		this_obj.sys_opt.selector = "";	//控件选择器
		this_obj.sys_opt.data_url = "";	//数据操作的url
		
		//初始化
		this_obj.Init = function(i_options){
			//解析配置数据
			ParseOptions(i_options);
			
			//事件绑定
			BindEvent();
		}//	
		
		
		///////////配置解析/////////////////////////////////
		//解析配置项
		function ParseOptions(i_options)
		{
			SysOptionsAssign(i_options,"selector");
			SysOptionsAssign(i_options,"data_url");
		}//func ParseOptions
		
				//系统选项赋值
		function SysOptionsAssign(option_obj,attr_name)
		{
			//判断当前的属性是否存在,如果存在则进行赋值
			if((attr_name in option_obj))
			{
				this_obj.sys_opt[attr_name] = option_obj[attr_name];
			}
		}
		
		
		/////////元素创建///////////////////////////////////////////
		//事件绑定
		function BindEvent(){
			//绑定指定控件的change事件
			$(this_obj.sys_opt.selector).change(function(e) {
				 var name = $(this).attr("name");
				 //formData.append(name,this.files[0]);
				 //alert(name);
				FileUpload.SendFile(this_obj.sys_opt.data_url,name,this.files);
			});//change
				
		}//func BindEvent
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
		return pic_slider;
		
	},//func init
	
	//上传函数
	SendFile:function(url,name,files,callback){	
				//alert(files.length);
				$.each(files, function(i){
					 var formData = new FormData(); 
					 formData.append(name,this);
					 //alert(url);
					 $.ajax({
						url: url,  //server script to process data
						type: 'POST',
	/*					xhr: function() {  // custom xhr
							myXhr = $.ajaxSettings.xhr();
							if(myXhr.upload){ // check if upload property exists
								myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // for handling the progress of the upload
							}
							return myXhr;
						},*/
						//Ajax事件
						beforeSend: function(){
							//alert("send bef");	
						},
						success: function(data){
							//alert("ok s");
							//alert(data);
							json_obj = $.parseJSON(data);
							//alert(json_obj.ret);
							callback(json_obj);
							//alert("上传成功!!");	
						},
						error: function(){
							//alert("errr");	
						},
						// Form数据
						data: formData,
						//Options to tell JQuery not to process data or worry about content-type
						cache: false,
						contentType: false,
						processData: false
					}); //ajax						
					
				});//each
				
	
	},//function file

	//上传函数,可添加附加数据
	SendFileEx:function(url,name,files,callback,extra_data){	
		$.each(files, function(i){
			 var formData = new FormData(); 
			 formData.append(name,this);
			 formData.append("extra_data",extra_data);
			 $.ajax({
				url: url,  //server script to process data
				type: 'POST',
				success: function(data){
					//alert(data);
					json_obj = $.parseJSON(data);
					//alert(json_obj.extra_data);
					callback(json_obj);
				},
				// Form数据
				data: formData,
				cache: false,
				contentType: false,
				processData: false
			}); //ajax		
			
		});//each
				
	},//function SendFileEx





	ctrlObjs:{},
	
	//多文件上传
	mutilFileUpload:function(i_options){
		var this_obj = {};	
		
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		
		///系统选项
		this_obj.sys_opt = {};
		this_obj.sys_opt.selector		= "";				//父元素选择器表达式
		this_obj.sys_opt.upload_url 		= "";			//数据上传的url
		this_obj.sys_opt.upload_name 		= "upload";		//文件上传的名称
		this_obj.sys_opt.content    		= "";			//内容
		this_obj.sys_opt.default_num		= 0;			//默认文件编号
		this_obj.sys_opt.el_name = "file";	//文件域的元素名称
		this_obj.sys_opt.default_file_calss			= "btn-primary";			//默认文件的类名
		this_obj.sys_opt.dis_files_name				= "dis_files";		//提交表单中显示文件名
		this_obj.sys_opt.default_file_num_name		= "dis_files";		//提交表单中默认的文件编号
		
		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置数据
			ParseOptions(i_options);
			//alert("ok1");
			//创建元素
			CreateEl();
			
			//创建子元素
			CreateSubEl();
			
			//事件绑定
			BindEvent();
			
			
			//更新上传数据
			UpdateUploadValue();
			
		}//	Init
		
		//重置,清除修改之前的数据,然后重新设置显示
		this_obj.Reset = function()
		{
			//alert(this_obj.sys_opt.selector+" .img_box .img_item_dis");
			//alert(this_obj.sys_opt.selector);
			//alert($(this_obj.sys_opt.selector+" .img_box .img_item_dis").length);
			//隐藏所有添加的显示的图片
			$(this_obj.sys_opt.selector+" .img_box .img_item_dis").each(function(index, element) {
                $(this).removeClass("img_item_dis");
				$(this).addClass("img_item_del");
            });
			
			//更新上传数据
			UpdateUploadValue();
			
			//清除所有所有内容
			//$(this_obj.sys_opt.selector).html("");
			
			//创建元素
			//CreateEl();
			
			//创建子元素
			//CreateSubEl();
			
			//事件绑定
			//BindEvent();				
		}
		
		//获取显示的文件
		this_obj.GetDisFiles = function(){
			
			var files_str = "";
			$(this_obj.sys_opt.selector+" .i_file_upload .img_box .img_item_dis").each(function(index, element) {
                files_str += $(this).find("img").attr("src");
				files_str += ",";
				//alert(files_str);
            });
			
			//去掉后面的分隔符
			if(files_str.length > 0)
				files_str = files_str.substr(0,files_str.length-1);
			
			//alert(files_str);
			return files_str;
		}
		
		//获取已删除的文件
		this_obj.GetDelFiles = function(){ 
			var files_str = "";
			$(this_obj.sys_opt.selector+" .i_file_upload .img_box .img_item_del").each(function(index, element) {
                files_str += $(this).find("img").attr("src");
				files_str += ",";
				//alert(files_str);
            });
			
			//去掉后面的分隔符
			if(files_str.length > 0)
				files_str = files_str.substr(0,files_str.length-1);
				
			return files_str;
		}
		
		//获取当前默认的文件,如果没有设置,则返回0
		this_obj.GetDefaultFileNum = function()
		{
			var default_num = 0;
			$(this_obj.sys_opt.selector+" .i_file_upload .img_box .img_item_dis .set_btn").each(function(index, element) {
				if($(this).hasClass(""+this_obj.sys_opt.default_file_calss))
				 	default_num = index;
            });

			return default_num;
		}
		
		
		/////////////////系统内部调用接口////////////////////////////////////////////////////
		
		///////////配置解析/////////////////////////////////
		//解析配置项
		function ParseOptions(i_options)
		{
			//遍历用户自定义配置项
			$.each(i_options, function(i){
				//alert(this.type );
				switch(this['type'])
				{
					case 'system':
						//调用初始化函数进行初始化操作
						InitSysOptions(this);
					break;
					default:
						//将元素添加到数据数组中即可
						this_obj.sub_el_src.push(this);	
				}
				
			});//each
				
		}//func ParseOptions
		
		//初始化系统选项
		function InitSysOptions(option_obj)
		{
			//alert(option_obj['el_name']);
			//父元素的id
			SysOptionsAssign(option_obj,'selector');
			SysOptionsAssign(option_obj,'upload_url');
			SysOptionsAssign(option_obj,'default_num');
			SysOptionsAssign(option_obj,'el_name');
			
			//alert(this_obj.sys_opt.el_name);
			//初始化系统名称
			this_obj.sys_opt.dis_files_name = this_obj.sys_opt.el_name +"_dis_files";
			this_obj.sys_opt.default_file_num_name = this_obj.sys_opt.el_name +"_default_file_num";
				
		}
				
		//系统选项赋值
		function SysOptionsAssign(option_obj,attr_name)
		{
			//判断当前的属性是否存在,如果存在则进行赋值
			if((attr_name in option_obj))
			{
				this_obj.sys_opt[attr_name] = option_obj[attr_name];
			}
		}
		///////////配置解析结束/////////////////////////////////
		
		/////////元素创建///////////////////////////////////////////
		//创建元素并添加到父元素中
		function CreateEl()
		{
			
			this_obj.sys_opt.content ='\
			 	<div class="well i_file_upload">\
					<input type="file" multiple/>\
					<div class="img_scroll">\
						<div class="img_box" >\
						</div>\
					</div>\
					<div style="clear:both"></div>\
					<input type="hidden" name="'+this_obj.sys_opt.dis_files_name +'"/>\
					<input type="hidden" name="'+this_obj.sys_opt.default_file_num_name+'"/>\
				</div>\
			';
			
			//清空元数据
			$(this_obj.sys_opt.selector).html("");
			//添加到指定的框中
			$(this_obj.sys_opt.selector).append(this_obj.sys_opt.content);
		}
		
		//创建子元素
		function CreateSubEl()
		{
			//遍历子元素对象
			$.each(this_obj.sub_el_src,function(i){
					NewSubEl(this.src);
			});
			
			//设置默认显示图片
			$(this_obj.sys_opt.selector+" .i_file_upload .img_box .img_item:eq("+this_obj.sys_opt.default_num+")").find(".set_btn").addClass(""+this_obj.sys_opt.default_file_calss);
						
		}// func CreateSubEl
		
		//创建新的子元素
		function NewSubEl(file_src)
		{
				var img_html = '\
							<div class="img_item img_item_dis"><img src="'+file_src+'" class="img-thumbnail"  />\
								<div class="caption">\
										<div class="btn-group btn-group-justified" role="group">\
											<div class="btn-group " role="group">\
												<button type="button" class="btn btn-default btn-xs del_btn" >\
													<span class="glyphicon glyphicon-remove" ></span>\
												</button>\
											</div>\
											<div class="btn-group" role="group">\
												<button type="button" class="btn btn-default btn-xs set_btn" >\
													<span class="glyphicon glyphicon-pushpin" ></span>\
												</button>\
											</div>\
										</div>\
								</div>\
							</div>';
				
				$(this_obj.sys_opt.selector+" .img_box").append(img_html);			
		}
		////////////元素创建结束////////////////////////////////
		
		
		///////////////事件相关//////////////////////////////////////////////
		function BindEvent()
		{
			//绑定文件域change事件
			$(this_obj.sys_opt.selector + " :file").change(function(e) {
				//alert(this_obj.sys_opt.upload_url);
                FileUpload.SendFile(this_obj.sys_opt.upload_url,this_obj.sys_opt.upload_name,this.files,UpldRetCall);
				

            });
			
			//绑定按钮事件
			BindBtnEvent();
			
		}
		
		//绑定按钮事件
		function BindBtnEvent()
		{
			//删除按钮绑定事件
			$(this_obj.sys_opt.selector + " .i_file_upload .del_btn").each(function(index, element) {
				//鼠标划过
				$(this).hover(function(){
						$(this).html("删除");
					},function(){
						$(this).html('<span class="glyphicon glyphicon-remove" ></span>');
						
					});//hover
					
				//点击
				$(this).click(function(e) {
					//隐藏当前图片
					$(this_obj.sys_opt.selector+" .img_box .img_item:eq("+index+")").removeClass("img_item_dis");
					$(this_obj.sys_opt.selector+" .img_box .img_item:eq("+index+")").addClass("img_item_del");
					
					
					//更新隐藏域
					UpdateUploadValue();
                });//click
            });	//each
			
			
			//设置按钮绑定事件
			$(this_obj.sys_opt.selector + " .i_file_upload .set_btn").each(function(index, element) {
				
				//鼠标划过
				$(this).hover(function(){
						$(this).html("设为默认");
					},function(){
						$(this).html('<span class="glyphicon glyphicon-pushpin" ></span>');
						
					});//hover
					
				//点击
				$(this).click(function(e) {
                  	$(this_obj.sys_opt.selector + " .i_file_upload .set_btn").each(function(index, element) {
                        $(this).removeClass(""+this_obj.sys_opt.default_file_calss);
                    });  
					
					//添加默认
					$(this).addClass(""+this_obj.sys_opt.default_file_calss);
					
					//更新隐藏域
					UpdateUploadValue();
                });//click
            });	//each		
				
		}
		
		//更新上传的数据,更新隐藏于中的三个数据
		function UpdateUploadValue()
		{
			
			$(this_obj.sys_opt.selector+" [name="+this_obj.sys_opt.dis_files_name+"]").val(this_obj.GetDisFiles());
			//$(this_obj.sys_opt.selector+" [name=del_files]").val(this_obj.GetDelFiles());
			$(this_obj.sys_opt.selector+" [name="+this_obj.sys_opt.default_file_num_name+"]").val(this_obj.GetDefaultFileNum());
		}
		
		
		//上传图片回调
		function UpldRetCall(json)
		{
			//alert(json.ret_code);
			if(json.ret_code == '1')
			{
				NewSubEl(json.ret_state);
				//alert(json.ret);
				
				//重新绑定事件
				BindBtnEvent();
				
								
				//更新上传数据
				UpdateUploadValue();
			}
			else
			{
				alert(json.ret_state);	
			}

			
		}
		
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
	
		//FileUpload.ctrlObjs = this_obj;
	},//mutilFileUpload
	
	//获取当前显示的文件名
	getDisFiles:function(){
		//alert("ok");
		return 	FileUpload.ctrlObjs.GetDisFiles();
	},
	
	//获取已删除的文件名
	getDelFiles:function(){
		return 	FileUpload.ctrlObjs.GetDelFiles();	
	},
	
	//获取当前默认的文件编号
	getDefaultFileNum:function(){
		return 	FileUpload.ctrlObjs.GetDefaultFileNum();	
		
	},
	
	//重置
	reset:function(){
		return 	FileUpload.ctrlObjs.Reset();	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}//class file upload