THISFILEMENU = {
	init: function() {
		this.addEvent();
	},
	addEvent: function() {
		//  点击文件管理页面上几个对文件操作按钮 
		$(".right-wrap").delegate(".btn_item_com", "click", function(e) {
			var index = $(this).index();
			switch(index) {
				case 0: //新建文件夹
					THISFILEMENU.fileOperating.newFile(e);
					break;
				case 1: // 下载
					THISFILEMENU.fileOperating.installFlie();
					break;
				case 2: // 移动
					THISFILEMENU.fileOperating.moveFile();
					break;
				case 3: // 重命名
					THISFILEMENU.fileOperating.renameFile();
					break;
				case 4: // 删除
					THISFILEMENU.fileOperating.deleteFile();
					break;
			}
		});
		// 新建文件夹弹窗点击事件
		$(".right-wrap").delegate(".new_file_sel", "click", function() {
			THISFILEMENU.fileOperating.newsFileSelClass(this);
		});
		//  重命名框 和新建文件夹 当input  输入框失去焦点后获取输入的内容 并替换文档名字  隐藏输入框
		$(".right-wrap").delegate(".name_input","blur",function(){
			var name = $(this).val();
			//  找到按钮
			var btn = $(this).parent().siblings(".file_op_btn");
			if(name==""){
				if($(btn).hasClass("new_file_btn")){  // 有new_file_btn这个类名的 表示新建的文件夹  失去焦点时  移除生成的代码\
					$(this).parentsUntil(".file-list-tr").parent().remove();
				}else if($(this).hasClass("new_file_input")){  // 图标模式下
					$(this).parentsUntil(".homeThumb").parent().remove();
				}
			}else{
				$(this).prev(".thumH3").text(name);
			}
			$(btn).css("visibility","hidden");// 隐藏按钮
			$(this).css("display","none");
			$(this).prev(".thumH3").css("display","block");
			$(this).siblings("h4").css("display","block");
		});
		
		// 重命名框 和新建文件夹  确认按钮点击事件
		$(".right-wrap").delegate(".confirm_btn","click",function(e){
			e.stopPropagation();
			THISFILEMENU.fileOperating.inputConfirmBtnCLickPro(this);
		});
		// 重命名框 和新建文件夹  取消按钮点击事件
		$(".right-wrap").delegate(".cancel_btn","click",function(e){
			e.stopPropagation();
			THISFILEMENU.fileOperating.inputcancelBtnCLickPro(this);
		});
		
	},
	fileOperating: { //  文件操作方法集 
		// 下载文件
		installFlie: function() { // 下载文件
			var arrayAjax = [];
			// 判断是在图标模式下  还是在列表模式下 
			var len = $("#fileWrapper").children(".file-list-tr").length;
			var numInstall = 0; // 记录下载的个数
			if(len != 0) { // 不等于0  是在列表模式
				// 获取标记状态下的文件的标志位   然后传到后台 
				$(".file-list-tr").each(function() {
					if($(this).hasClss("selected")) {
						arrayAjax[numInstall] = $(this).attr("data-name");
						numInstall++;
					}
				});

			} else { // 等于0  在图标模式下
				// 获取标记状态下的文件的标志位   然后传到后台 
				$(".homeThumb").each(function() {
					if($(this).hasClass("selected")) {
						arrayAjax[numInstall] = $(this).attr("data-name");
						numInstall++;
					}
				});
			}
		},
		moveFile: function() { // 移动文件
			parent.Public.openWin('page/yunpan/moveFile/moveFile.html', '移动到', 500, 350, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
			$(".popbox").css("display", "hidden");
			//   改变弹框确认按钮的文字
			$(".layui-layer-btn0").text('确认');
		},
		renameFile: function() { // 重命名文件
			// 获取要修改的文件  名字 
			//  列表模式下
			var fileName = "";
			$(".file-list-tr").each(function() {
				if($(this).hasClass("selected")) { // 选中状态的文件
					$(this).find(".thumH3").css("display", "none");
					$(this).find("h4").css("display","none");
					$(this).find(".name_input").css("display", "block");
					//alert($(this).find(".name_input")[0]);
					// 让input获取焦点  
					$(this).find(".name_input")[0].focus();
					$(this).find(".file_op_btn").css("visibility","visible");
				}
			});
			// 图标模式下
			$(".homeThumb").each(function() {
				if($(this).hasClass("selected")) { // 选中状态的文件
					$(this).find(".thumH3").css("display", "none");
					$(this).find(".name_input").css("display", "block");
					// 让input获取焦点  
					$(this).find(".name_input")[0].focus();
					// 隐藏文件名下的文件夹内部项的显示
					$(this).find("h4").css("display","none");
				}
			});
		},
		deleteFile: function() { // 删除文件
			//				alert(55);
			parent.Public.openWin('page/yunpan/delFile/deleteFile.html', '确认删除', 400, 250, function(index, layero) {
				var body = parent.getChildFrame('body', index);
				var iframeWin = window[layero.find('iframe')[0]['name']];

			});
			$(".popbox").css("display", "hidden");
			//   改变弹框确认按钮的文字
			//				$(".layui-layer-btn0").text('确认'); 
			//				$(".layui-layer-btn0").css("display","none");
		},

		newFile: function(e) { // 新建文件夹
			// 生产选择框
			var sel_html = "";
			sel_html = '<ul class="new_fiel_ul" style="height:120px;width:180px;position:absolute;z-index:500;border:1px solid #ddd;background: white;font-size:14px;top:33px;left:-1px;text-align:left;">' +
				'<li class="new_file_sel" style="width:100%;height:35px;line-height:35px;">&nbsp;&nbsp;新建多人协作文件夹</li>' +
				'<li class="new_file_sel" style="width:100%;height:35px;line-height:35px;">&nbsp;&nbsp;新建自动同步文件夹</li>' +
				'<li class="new_file_sel" style="width:100%;height:35px;line-height:35px;">&nbsp;&nbsp;新建普通文件夹</li>' +
				'</ul>';
			$(".new_file").append(sel_html);

		},

		newsFileSelClass: function(this_obj) {
			var index = $(this_obj).index(".new_file_sel");
			$(".new_fiel_ul").remove();
			switch(index) {
				case 0:
					parent.Public.openWin('page/yunpan/newFile/newFileMoCoo.html', '新建多人协作文件夹', 650, 490, function(index, layero) {
						var body = parent.getChildFrame('body', index);
						var iframeWin = window[layero.find('iframe')[0]['name']];

					});
					$(".popbox").css("display", "hidden");
					break;
				case 1:
					parent.Public.openWin('page/yunpan/newFile/newFileSyn.html', '新建自动同步文件夹', 650, 200, function(index, layero) {
						var body = parent.getChildFrame('body', index);
						var iframeWin = window[layero.find('iframe')[0]['name']];

					});
					$(".popbox").css("display", "hidden");
					break;
				case 2:
					var _html = "";
					// 列表模式下
					if(THISPAGE.type == "group") {
						_html = '<dd class="file homeThumb clearfix" >' +
							'<div class="summary clearfix">' +
							'<div class="thumbshow">' +
							'<span class="thumRadio thumbimg bg"><b class="checkedimg"></b></span>' +
							'</div>' +
							'<div class="thumbTu">' +
							'<span class="thumbimg t-folder icon_rel" style="">' +
							'<b class="big_jiami"></b>' +
							'</span>' +
							'<h3 class="thumH3" title="{{name}}">' + "文档" + '</h3>' +
							'<input class="name_input new_file_input" type="text" size="8" style="display: none;width: 100%;"/>'
						'<h4 class="thumSpan">' + "1项" + '</h4>' +
						'</div>'
						'</div>'
						'</dd>';
					} else { // 图标模式下
						_html = '<dd class="file file-list-tr clearfix">' +
							'<div class="time">2016-08-17 05:00:00</div>' +
							'<div class="summary">' +
							'<div class="radio"><a></a></div>' +
							'<div class="actions xstar "><a class="mark">yjy</a></div>' +
							'<div class="brief">' +
							'<div class="info">' +
							'<a class="icon icon-folder icon_rel">' +
							' <b class="jiami"></b>' +
							'</a>' +
							'<hgroup>' +
							'<h3 class="thumH3" title="">文件管理</h3>' +
							'<input class="name_input" type="text" />' +
							'<h4 style="display:none;">0项</h4>' +
							'</hgroup>' +
							'<span class="confirm_btn file_op_btn new_file_btn">确定</span>'+
				            '<span class="cancel_btn file_op_btn new_file_btn">取消</span>'+
							'</div>' +
							'</div>' +
							'<div class="brief brief_icon" style="display: none;">' +
							'<ul class="actions {{$value.iconNumClass}}">' +
							'<li class="{{hasLink}} send_icon"><a class="link">发送此文件</a></li>' +
							'<li class="{{hasDownload}} download_icon"><a class="download">下载</a></li>' +
							'</ul>' +
							'</div>' +
							'</div>' +
							'<div class="discuss-panel clearfix"></div>' +
							'</dd>';
					}

					$(".file-list").append(_html);
					// 让input获取焦点  图标模式下
					if(THISPAGE.type == "group"){
						$(".file-list .homeThumb:last-child").find(".thumH3").css("display","none");
						$(".file-list .homeThumb:last-child").find(".name_input").css("display","block");
						$(".file-list .homeThumb:last-child").find(".name_input")[0].focus();
					}else{
						// 让input获取焦点  列表模式下
//						alert($(".file-list .homeThumb:last-child").find(".thumH3")[0]);
						$(".file-list .file-list-tr:last-child").find(".thumH3").css("display","none");
						$(".file-list .file-list-tr:last-child").find(".name_input").css("display","block");
						$(".file-list .file-list-tr:last-child").find(".name_input")[0].focus();
					}
					break;
			}
		},
		
		inputConfirmBtnCLickPro : function(this_obj){
			// 获取input框输入的值
			var name = $(this_obj).prev("hgroup").find(".name_input").val();
			$(this_obj).prev("hgroup").find(".name_input").css("display","none");
			if(name == ""){
				if($(this_obj).hasClass("new_file_btn")){  // 新建文件夹 输入 为空的情况  移除生成的代码
					$(this_obj).parentsUntil(".file-list-tr").parent().remove();
				}else{  // 重命名  输入 为空的情况 
				}
			}else{
				$(this_obj).prev("hgroup").find(".thumH3").text(name);
			}
			$(this_obj).prev("hgroup").find(".thumH3").css("display","blcok");
			$(this_obj).prev("hgroup").find("h4").css("display","blcok");
			$(".file_op_btn").css("visibility","hidden")
		},
		
		inputcancelBtnCLickPro : function(this_obj){
			$(this_obj).prevAll("hgroup").find(".name_input").css("display","none");
			if($(this_obj).hasClass("new_file_btn")){  // 新建文件夹 输入 为空的情况  移除生成的代码
				$(this_obj).parentsUntil(".file-list-tr").parent().remove();
			}
			$(this_obj).prevAll("hgroup").find(".thumH3").css("display","blcok");
			$(this_obj).prevAll("hgroup").find("h4").css("display","blcok");
			$(".file_op_btn").css("visibility","hidden")
		}
	}
};
THISFILEMENU.init();