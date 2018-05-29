THISFILEPAGE = {
	init: function() {
		THISFILEPAGE.bindClick.clickMethod();
	},
	bindClick: {
		clickMethod: function() {
			//文件单击时间  列表模式下
			THISFILEPAGE.bindClick.fileClickList();
			//文件单击时间  图标模式下
			THISFILEPAGE.bindClick.fileClickIcon();
			// 文件双击事件 列表模式下
			THISFILEPAGE.bindClick.fileDouClickList();
			// 文件双击事件 图标模式下
			THISFILEPAGE.bindClick.fileDouClickIcon();
			// 图片预览关闭按钮
			THISFILEPAGE.bindClick.closeImgPre();
			// 文件预览关闭按钮
			THISFILEPAGE.bindClick.videoPreClick();
			// 发送文件点击按钮
			THISFILEPAGE.bindClick.sendFileClick();
			// 下载按钮点击事件
			THISFILEPAGE.bindClick.downloadFileClick();

		},
		fileClickList: function() {
			THISFILEPAGE.TimeFn = null;
			// 左键点击文件范围时  列表模式写
			$(".right-wrap").delegate(".file-list-tr", "click", function() {
				var obj_this = this;
				//  判断祖先元素中是否有类名 selected  如果有 则为选中状态   没有 则让该元素选中 同时只能有一个元素能被选中 
				$(".file-list-tr").removeClass("selected");
				$(".file-list-tr").find(".brief_icon").css("display", "none");
				$(obj_this).addClass("selected");
				$(obj_this).find(".brief_icon").css("display", "block");
				// 操作之后 看是否有某个选项是被选中  如果有被选中 显示上面的操作栏 如果没有 则隐藏
				if($(".file-list-tr").hasClass("selected")) {
					$(".file_click_sel").css("visibility", "visible");
					$(".my_info .my_title").css("display","none");
					$(".my_info .file_info").css("display","block");
				} else {
					$(".file_click_sel").css("visibility", "hidden");
					$(".my_info .my_title").css("display","block");
					$(".my_info .file_info").css("display","none");
				}
			});
		},

		fileClickIcon: function() {
			// 左键点击文件范围时    图标模式下  
			$(".right-wrap").delegate(".homeThumb", "click", function() {
				var obj_this = this;
				//  判断祖先元素中是否有类名 .selected  如果有 则为选中状态   没有 则让该元素选中  同时只能有一个元素被选中
				$(".homeThumb").removeClass("selected");
				$(obj_this).addClass("selected");
				// 操作之后 看是否有某个选项是被选中  如果有被选中 显示上面的操作栏 如果没有 则隐藏
				if($(".homeThumb").hasClass("selected")) {
					$(".file_click_sel").css("visibility", "visible");
				} else {
					$(".file_click_sel").css("visibility", "hidden");
				}

			});
		},

		fileDouClickList: function() {
			$(".right-wrap").delegate(".file-list-tr", "dblclick", function() {
				//				clearTimeout(THISFILEPAGE.TimeFn);
				THISFILEPAGE.preMenthod.getExtensionName(this);
			});
		},

		fileDouClickIcon: function() {
			$(".right-wrap").delegate(".homeThumb", "dblclick", function() {
				//				clearTimeout(THISFILEPAGE.TimeFn);
				THISFILEPAGE.preMenthod.getExtensionName(this);
			});
		},

		closeImgPre: function() {
			$(".close").click(function() {
				$(".img_pre").css("display", "none");
				$(".close").css("display", "none");
			});
		},

		videoPreClick: function() {
			$("body").delegate(".video_close", "click", function() {
				$("#wrapper").remove();
			});
		},
		sendFileClick: function() {
			$(".right-wrap").delegate(".send_icon", "click", function() {
				parent.Public.openWin('page/yunpan/sendFile/sendAddMem.html', '发送文件', 550, 390, function(index, layero) {
					var body = parent.getChildFrame('body', index);
					var iframeWin = window[layero.find('iframe')[0]['name']];

				});
				$(".popbox").css("display", "hidden");
			});
		},
		downloadFileClick: function() {
			$(".right-wrap").delegate(".download_icon", "click", function() {
				//				alert(55);
			});
		},
	},

	preMenthod: {
		//  处理双击事件 判断点击的文件类型
		// 获取文件扩展名
		getExtensionName: function(obj_this) {

			//或者文档名
			var fileName = $(obj_this).find(".thumH3").text();
			// 获取文件id
			var id = $(obj_this).attr("data-id");
			// 分隔字符串
			var fileArr = fileName.split(".");

			if(fileArr.length == 1) { // 如果分割出的字符串长度等于1  则为文档
				//					alert(55);
				//					      fv = $("#video").flareVideo();
				//					      fv.load([
				//					        {
				//					        	src: 'zz.mp4',
				//					          	type: 'video/mp4'
				//					        }
				//					      ]);
			} else {
				THISFILEPAGE.preMenthod.jmStrExtName(fileArr[fileArr.length - 1], id, obj_this);
			}
		},

		//  判断字符串扩展名类型
		jmStrExtName: function(text, id, obj_this) {
			var data = {
				"id": id
			};
			var params = $.param(data);
			if(text == "pdf") {

			} else if(text == "txt") {

			} else if(text == "png" || text == "jpg" || text == "svg" || text == "bmp" || text == "jpeg") {
				// 初始化
				//					$(".image").viewer();
			} else if(text == "pptx" || text == "doc" || text == "xls" || text == "docx" || text == "xlsx" || text == "pptx") {
				var _html = "";
				_html = '<div id="file_bg"></div>' +
					'<div id="file_con"><p id="file_title">超链接和列表.pptx<div id="file_close">x</div></p><div id="file_c_container"></div>' +
					'</div>';
				$("body").append(_html);
				$("#file_bg").css({
					position: "absolute",
					top: "0px",
					bottom: "0px",
					width: "100%",
					background: "#000",
					opacity: 0.3,
					zIndex: 55555,
				});
				$("#file_con").css({
					width: "60%",
					marginLeft: "20%",
					marginTop: "5%",
					height: "700px",
					background: "white",
					border: "3px solid #eee",
					zIndex: "55556",
					position: "absolute"
				});
				$("#file_title").css({
					height: "25px",
					width: "100%",
					color: "white",
					background: "#4487ef",
					fontSize: "15px",
					lineHeight: "25px",
					paddingLeft: "1%",
					marginTop: "-3px",
					position: "relative",
				});
				$("#file_close").css({
					height: "25px",
					fontSize: "25px",
					width: "25px",
					color: "white",
					position: "absolute",
					top: "0px",
					right: "0px",
					top: "-10px",
				});
				$("#file_close:hover").css("background", "red");
			} else {
				var _html = "";
				_html = '<div id="wrapper">' +
					'<div class="px-video-container" id="myvid" style="position: relative;">' +
					'<div class="video_close">关闭</div>' +
					'<div class="px-video-img-captions-container">' +
					'<div class="px-video-captions hide"></div>' +
					'<video width="630" height="360" poster="media/poster_PayPal_Austin2.jpg" controls>' +
					'<source src="../../mo.mp3"  />' +
					'</video>' +
					'<div class="px-video-controls"></div>' +
					'</div></div>';
				$("body").append(_html);
				THISFILEPAGE.toolMenthod.videoSet();
			}
		},
	},

	toolMenthod: {
		videoSet: function() {
			// 动态加载所需的js
			var oHead = document.getElementsByTagName('HEAD').item(0);
			var oScript = document.createElement("script");
			oScript.type = "text/javascript";
			oScript.src = "../../js/app/videoPre/px-video.js";
			oHead.appendChild(oScript);
			new InitPxVideo({
				"videoId": "myvid",
				"captionsOnDefault": true,
				"seekInterval": 20,
				"videoTitle": "PayPal Austin promo",
				"debug": true
			});
			// 设置窗口可以拖动
			var oBox = document.getElementById("wrapper");
			var oBar = document.getElementById("myvid");
			startDrag(oBar, oBox);
		},
	},

	fileReaderData: {
		frImg: function() {
			//检测当前的浏览器是否支持html5的fileReader
			if(!(window.FileReader && window.File && window.FileList && window.Blob)) {
				show.innerHTML = '您的浏览器不支持fileReader';
				upimg.setAttribute('disabled', 'disabled');
				return false;
			}
		}
	}

};
THISFILEPAGE.init();