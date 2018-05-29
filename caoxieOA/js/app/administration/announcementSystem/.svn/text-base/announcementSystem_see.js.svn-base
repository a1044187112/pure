THISPAGE = {

	init: function() {
		this.initDom();
		this.initTree();
		this.addEvent();
		this.initValidator();
	},

	initDom: function() {

	},

	initTree: function() {

	},
	initValidator: function() {

	},

	addEvent: function() {

		/*初始化加载的评论方法 */

		$("#share").on("click", function() {
			$(".webkit").css("height", "80px")
		});

		$("#release").on("click", function() {
			var str = $("#comment").val();
			var open = '<div class="social-feed-box"><div class="social-avatar"><a href="" class="pull-left"><img alt="image" src="../../../img/avatar.jpg"></a><div class="media-body"><a href="javascript:;">' +
				'逆光狂胜蔡舞娘</a><small class="text-muted">17 小时前</small></div></div><div class="social-body"><p>' + str + '</p><div class="btn-group">' +
				'<button class="btn btn-white btn-xs"><i class="fa fa-thumbs-up"></i> 赞</button><button class="btn btn-white btn-xs shareUser"><i class="fa fa-comments"></i>' +
				'评论</button><button class="btn btn-white btn-xs"><i class="fa fa-share"></i> 分享</button></div></div><div class="social-footer">' +
				'<div class="social-comment webkit_1"><a href="" class="pull-left"><img alt="image" src="../../../img/avatar.jpg"></a><div class="media-body">' +
				'<textarea class="form-control" placeholder="填写评论..." id="comment_1"></textarea><div class="btn-group" style="float: right; padding-top: 5px;">' +
				'<button class="btn btn-white btn-xs" id="release_1"><i class="fa icon-share"></i> 发布</button>' +
				'<button class="btn btn-white btn-xs" id="cancel_1"><i class="fa "></i> 取消</button></div></div></div></div></div>';
			$("#opnes").prepend(open);
			$(".webkit").css("height", "0");
			$("#comment").val('');
			additional();
		});

		$("#cancel").on("click", function() {
			$(".webkit").css("height", "0")
		});
		additional();

		/*-------------------------------------------分割线-------------------------------------------------------*/
		/*用户之间的评论*/
		function additional() {
			$(".shareUser").on("click", function() {
				//找寻父元素的父元素的父元素里的类
				var parentE = $(this).parent().parent().parent().find('.webkit_1');
				$(parentE).css("height", "80px")
			});

			$("#release_1").on("click", function() {
				//拿当前元素的父元素
				var obj = $(this).parent();
				var str = $(obj).parent().find('textarea').val();
				var parentAll = $(obj).parent().parent();
				var open = '<div class="social-comment"><a href="" class="pull-left"><img alt="image" src="../../../img/avatar.jpg"></a><div class="media-body">' +
					'<a href="javascript:;">尤小右</a> ' + str + '<br><a href="#" class="small"><i class="fa fa-thumbs-up">' +
					'</i> 26</a> -<small class="text-muted">8月18日</small></div></div>';
				//把open插在第一位	
				$(parentAll.parent()).prepend(open);
				$(parentAll).css("height", "0");
				$($(obj).parent().find('textarea')).val('');
			});

			$("#cancel_1").on("click", function() {
				//拿当前元素的父元素
				var obj = $(this).parent();
				var parentAll = $(obj).parent().parent();
				$(parentAll).css("height", "0")
			});
		}
	}
};

THISPAGE.init();