THISPAGE = {
	
	init:function(){
//		this.initFileList('group');
		$(".right-wrap").load("perDoc/mainPersonal.html");
		this.addEvent();
		selectAll();
	},
	
	initDom:function(){
		
	},
	
	addEvent:function(){
		// 个人文件  剩余空间
		THISPAGE.residualSpace();
		// 控制右边栏文件内容的显示与隐藏
		THISPAGE.fileShowOrHide();
		var self = this;
//		THISPAGE.type = "group"; // 默认显示方式
		var checkAll = $('#checkAll');
//		$(".right-wrap").delegate(".wrapper .btn-group a","click",function(){
//			$('.wrapper .btn-group a').removeClass('active');
//			THISPAGE.type = $(this).attr('type');
//			self.initFileList();
//			$(this).addClass('active');
//		});
		// 左边菜单栏点击事件
		$(".tree-selector .nav-item").click(function(){
			// 如果是选中状态 移除选中
			$(".tree-selector .nav-item").removeClass("active")
			$(this).addClass("active");
			// 如果点击的是回收站按钮
			if($(this).hasClass("nav_item_rb")){
				$(".right-wrap").children().remove();
				$(".right-wrap").removeClass("file_share");
				$(".right-wrap").removeClass("right_wrap_file");
				$(".right-wrap").addClass("recycle_bin");
				$(".right-wrap").load("recycleBin/main.html");
				
			}else if($(this).hasClass("nav_item_share")){ // 如果点击的共享按钮
				$(".right-wrap").children().remove();
				$(".right-wrap").removeClass("recycle_bin");
				$(".right-wrap").removeClass("right_wrap_file");
				$(".right-wrap").addClass("file_share");
				$(".right-wrap").load("shareFile/main.html");
			}else if($(this).hasClass("nav_item_company")){
				$(".right-wrap").children().remove();
				$(".right-wrap").removeClass("recycle_bin");
				$(".right-wrap").removeClass("file_share");
				$(".right-wrap").addClass("right_wrap_file");
				$(".right-wrap").load("comDoc/mainCompany.html");
			}else{
				$(".right-wrap").children().remove();
				$(".right-wrap").removeClass("recycle_bin");
				$(".right-wrap").removeClass("file_share");
				$(".right-wrap").addClass("right_wrap_file");
				$(".right-wrap").load("perDoc/mainPersonal.html");
			}
		
			// 获取传递的数据  点击的内容
//			var text = $(this).children("span").text();
//			var obj = {"class":text};
//			var url = '/caoxieOA/page/yunpan/ajax_test.php';
//			Public.ajaxPost(url,obj,THISPAGE.AjaxSuccess(),THISPAGE.AjaxError());
			
			
		});
		
		$('#fileWrapper').bind('contextmenu',function(e){
			e.cancelBubble = true;
			e.returnValue = false;
//			e.preventDefault();
			return false;
		});
		

		
		//适时隐藏自定义菜单
		$(document).bind('mousedown',function(e){
			RightMenu.hide();
		});
		
		// 当点击页面空白区域时  隐藏可能存在的右键点击的弹框菜单
		$("body").bind('click', function(e) {
			RightMenu.hide();
			// 如果点击的位置不是新建文件夹的弹窗  就隐藏弹窗
			if($(e.target).parents(".ul-inline").length==0){
				$(".new_fiel_ul").remove();
			}
		});
		$(".right-wrap").delegate("#fileWrapper","click",function(e){
			if($(e.target).parents(".homeThumb").length==0){
				RightMenu.hide();
			}
		});
		
		//  左键点击文件左上角图标时  改为选中状态
//		$(".checkedimg").click(function(){
//			//  判断祖先元素中是否有类名 .selected  如果有 则为选中状态   没有 则让该元素选中
//			if($(this).parentsUntil(".homeThumb").parent().hasClass("selected")){ //  有 
//				$(this).parentsUntil(".homeThumb").parent().removeClass("selected");
//			}else{  // 无
//				$(this).parentsUntil(".homeThumb").parent().addClass("selected");
//			}
//		});
		
		
		
		//  列表模式下   标记为星标文件操作 
		$("#fileWrapper").delegate(".xstar","click",function(e){
			var text = "";
			var _html = "";
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
				text = "取消标记成功";
			}else{
				$(this).addClass("selected");
				text = "标记成功";
			}
			e.stopPropagation();
			$(".sel_star").text(text);
			$(".sel_star").css("display","block");
			setInterval(function(){
				$(".sel_star").css("display","none");
			},2000);
		});
		

		//右键菜单
		$('.file-list').on('mousedown','.file',function(e){
			if(e.which  != 3){
				RightMenu.hide();
				return;
			}
			
			//新建文件夹菜单禁用
			
			//选中处理
			var file = $(this),fileList = $('.file.selected');
			if(Array.from(fileList).contains(file[0]) == false){
				fileList.removeClass('selected');
				file.addClass('selected');
			}
			RightMenu.show({
				top: e.pageY - 100,
				left: (e.pageX - 200) + 5
			});
			
//			e.stopPropagation();
		});
		
		checkAll.click(function(e){
//			alert(55);
			e.stopPropagation();
		});
	},
	// 数据提交成功之后的回调方法 
	AjaxSuccess : function(data){
		// 返回成功后 将data 数据传到initFileList中  动态添加代码
		THISPAGE.data = data;
//		THISPAGE.initFileList();
	},
	// 数据提交失败之后的回调方法 
	AjaxError : function(err){
//		alert(err);
//		// 返回成功后 将data 数据传到initFileList中  动态添加代码
//		THISPAGE.data = data;
		THISPAGE.initFileList();
	},
	
	residualSpace : function(){
//		alert(55);
		// 获取已占用的
		var acc = $(".storage_text_occ").text();
		//  获取总的
		var tatol = $(".storage_text_total").text();
		// 获取总的宽度 
		var width = parseInt($(".storage_acc").css("width"));
		// 设置已用部分的比例
		$(".storage_sch").css("width",width*acc/tatol+"px")
	},
	
	// 文件右边模块信息展示的显示和隐藏
	fileShowOrHide : function(){
////		$(".right_wrap_file")
//		$("#fileWrapper").click(function(){
//			if($(".homeThumb").hasClass("selected")){
//				$(".my_info .file_info").css("display","block");
//				$(".my_info .my_title").css("display","none");
//			}else if($(".file-list-tr").hasClass("selected")){
//				$(".my_info .file_info").css("display","block");
//				$(".my_info .my_title").css("display","none");
//			}else{
//				$(".my_info .file_info").css("display","none");
//				$(".my_info .my_title").css("display","block");
//			}
//		});
	},
//		
};
// 全选按钮点击事件
var selectAll = function() {
	$(".right-wrap").delegate("#checkAll","click",function(){
//	$("#checkAll").click(function(){
		if($(this).hasClass("selected")){
			$(this).removeClass("selected");
			// 移除已经选中的按钮
			$(".file-list-tr").removeClass("selected");
			$(".homeThumb").removeClass("selected");
			$(".file_click_sel").css("visibility", "hidden");
			$(".my_info .my_title").css("display","block");
			$(".my_info .file_info").css("display","none");
		}else{
			$(this).addClass("selected");
			// 移除已经选中的按钮
			$(".file-list-tr").addClass("selected");
			$(".homeThumb").addClass("selected");
			// 显示菜单
			$(".file_click_sel").css("visibility", "visible");
		}
	});
		$("#checkAll").click(function(){
		if($(this).hasClass("selected")){
			$(this).removeClass("selected");
			// 移除已经选中的按钮
			$(".file-list-tr").removeClass("selected");
			$(".homeThumb").removeClass("selected");
			$(".file_click_sel").css("visibility", "hidden");
			
		}else{
			$(this).addClass("selected");
			// 移除已经选中的按钮
			$(".file-list-tr").addClass("selected");
			$(".homeThumb").addClass("selected");
			// 显示菜单
			$(".file_click_sel").css("visibility", "visible");
		}
	});
//  checkAllRadio.toggleClass('selected');
//  checkAll.toggleClass('selected');
//
//  var fileItems = filePanel.children().children('dd.file');
//  jQuery(checkAll).is('.selected') ?
//      fileItems.addClass("selected") : fileItems.removeClass("selected");
//
//
//  FileSystem.setSelectedFiles();
//  Toolbar.composite();
//  RightAside.loadContent();
};


/**
 * 工具和方法
 */
var Toolkit = {
	// 纵向滚动到指定位置
	scrollTween:function(y, callback, ele){
		if (ele) {
            ele.scrollTop(y || 0)
            return callback && callback();
        }
        $('html,body').animate({ // Chrome和IE使用html FF使用body
            scrollTop: (y || 0)
        }, 500, 'easeOutExpo', function() {
            return callback && callback();
        });
	},
	
	//禁止用滚动条
	forbidScroll:function(){
		document.body.parentNode.style.overflow = "hidden";
	},
	
	//启用滚动条
	allowScroll:function(){
		document.body.parentNode.style.overflow = "scroll";
	},
	
	// 取消选中的文本
	clearSelect:function(){
		if (document.selection && document.selection.empty) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
	},
	
	// 计算字符串的字节长度
	countByte:function(str){
		var size = 0;
        for (var i = 0, l = str.length; i < l; i++) {
            size += str.charCodeAt(i) > 255 ? 2 : 1;
        }
        return size;
	},
	
	//计算字符串长度 ，中文算两个字节长度
	countCharacters:function(str){
		var totalCount = 0;
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                totalCount++;
            } else {
                totalCount += 2;
            }
        }
        return totalCount;
	},
	
	// 根据字节截取长度
	substrByByte:function(str, limit){
		for (var i = 1, l = str.length + 1; i < l; i++) {
            if (this.countByte(str.substring(0, i)) > limit) {
                return str.substring(0, i - 1);
            }
        }
        return str;
	},
	
	paramOfUrl:function(url){
		url = url || location.href;
        var paramSuit = url.substring(url.indexOf('?') + 1).split("&");
        var paramObj = {};
        for (var i = 0; i < paramSuit.length; i++) {
            var param = paramSuit[i].split('=');
            if (param.length == 2) {
                var key = decodeURIComponent(param[0]);
                var val = decodeURIComponent(param[1]);
                if (paramObj.hasOwnProperty(key)) {
                    paramObj[key] = jQuery.makeArray(paramObj[key]);
                    paramObj[key].push(val);
                } else {
                    paramObj[key] = val;
                }
            }
        }
        return paramObj;
	},
	
	cancelBubble:function(e){
		if (e && e.stopPropagation)
            e.stopPropagation();
        else
            window.event.cancelBubble = true;
	},
	
	cancelDefault:function(e){
		if (e && e.preventDefault) {
//          e.preventDefault();
        } else {
            window.event.returnValue = false;
        }
        return false;
	},
	
	reflow:function(obj){
		$(obj).each(function() {
            $(this).hide().show();
        });
	},
	
	// 后台的返回时间可能是毫秒 这里转换成可视化的格式
	formatTime:function(milli){
		var fmtl = this.formatLength;
        if (/^\d+$/.test(milli)) {
            var date = new Date(milli);
            return [fmtl(date.getFullYear()), fmtl(date.getMonth() + 1), fmtl(date.getDate())].join('-') + ' ' + [fmtl(date.getHours()), fmtl(date.getMinutes()), fmtl(date.getSeconds())].join(':');
        }
        return milli;
	},
	
	formatSpace:function(size, num){
		var unit = [' B', ' KB', ' MB', ' GB', ' TB'],
            index = 0,
            num = num ? num : 2;
        size = size ? parseInt(size) : 0;
        while (size / 1024 > 1) {
            index++;
            size = size / 1024;
        }
        return size.toFixed(num) + unit[index];
	},
	
	formatSpace2:function(size){
		var unit = [' KB', ' MB', ' G'],
            index = 0;
        //size不存在或size为0，返回0MB
        if (!size || (size && size == 0)) {
            return 0 + unit[index];
        } else {
            //只显示MB之上的容量，即过滤B和KB
            size = parseInt(size) / 1024;
            //只处理到G
            while (size / 1024 > 1) {
                index++;
                size = size / 1024;
                if (index >= unit.length) {
                    break;
                }
            }
            //对size区模为0时既整数舍去小数位
            num = (size % 10 == 0) ? 0 : 2;
            return size.toFixed(num) + unit[index];
        }
	},
	
	//GB转B
	conversionB:function(str){
		var unit=str.substring(str.length-2);
        var size=str.substring(0,str.indexOf(" "));
        if (unit=="GB") {
            size=size*1024*1024*1024
        }else if(unit=="MB"){
            size=size*1024*1024
        }else if(unit=="KB"){
            size=size*1024
        }
        return size+"B"
	},
	
	//B转GB
	conversionGB:function(str){
		var size=str;
        if (size<1000) {
            return size.toFixed(2)+" B"
        }else if (size/1024<1000) {
            return (size/1024).toFixed(2)+" KB"
        }else if(size/1024/1024<1000){
            return (size/1024/1024).toFixed(2)+" MB"
        }else{
            return (size/1024/1024/1024).toFixed(2)+" GB"
        }
	},
	
	//将时间转换回Date对象
	getDate:function(time){
		if (/^\d{4}-\d{1,2}-\d{1,2}\s+\d{1,2}:\d{1,2}:\d{1,2}$/.test(time)) {
            var list = time.split(/[-:\s]/);
            return new Date(list[0], list[1] - 1, list[2], list[3], list[4], list[5]);
        }
        return time || new Date();
	},
	
	getTimestamp:function(){
		var date = new Date(),
            formatTime = (date.getTime() / 1000).toFixed(0);
        return formatTime;
	},
	
	// 格式化数字为指定长度
	formatLength:function(num){
		return String(num).length == 1 ? ('0' + num) : num;
	},
	
	verifyEmail:function(email){
		return /^([\w-])+(\.\w+)*@([\w-])+((\.\w+)+)$/.test(email);
	},
	
	verifyIp:function(ip){
		return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(ip);
	},
	
	verifyIpAndMask:function(ip){
		return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\/([1-9]|[12][0-9]|3[012])$/.test(ip);
	},
	
	gotoemail:function(email){
		email = email.split('@')[1]
        emails = {
            'gmail.com': 'http://gmail.com',
            "hotmail.com": "http://www.hotmail.com",
            "live.com": "http://www.hotmail.com",
            "126.com": "http://mail.126.com",
            "163.com": "http://mail.163.com",
            "sina.com": "http://mail.sina.com.cn",
            "sina.cn": "http://mail.sina.com.cn",
            "qq.com": "http://mail.qq.com",
            "vip.qq.com": "http://mail.qq.com",
            "foxmail.com": "http://mail.qq.com",
            "yahoo.com": "http://mail.yahoo.com",
            "yahoo.com.tw": "http://mail.yahoo.com.tw",
            "yahoo.com.hk": "http://mail.yahoo.com.hk",
            "sohu.com": "http://mail.sohu.com",
            "yeah.net": "http://wwww.yeah.net",
            "emacle.com": "http://mail.emacle.com"
        }
        if (!emails[email]) return 'http://www.' + email
        return emails[email]
	},
	
	//字符串数组去重，即去除target中包含在exist中的元素(String Array Remove Exist)
	sarmExist:function(target, exist){
		var temp = [], //临时数组1
            temparray = []; //临时数组2

        for (var i = 0; i < exist.length; i++) {
            temp[exist[i]] = true; //把数组B的值当成临时数组1的键并赋值为真
        };

        for (var i = 0; i < target.length; i++) {
            if (!temp[target[i]]) {
                temparray.push(target[i]); //同时把数组A的值当成临时数组1的键并判断是否为真，如果不为真说明没重复，就合并到一个新数组里，这样就可以得到一个全新并无重复的数组
            };
        };

        return temparray;
	},
	
	// 调用复制功能，传入一个目标button的id,以及完成以后的callback(可选)
	copyBoard:function(btnId, text, callback){
		$("#" + btnId).zclip({
            path: "/webstatic/js/lib/ZeroClipboard.swf",
            copy: function(){
                return text;
            },
            beforeCopy:function(){
            	
            },
            afterCopy:function(args){
                if (typeof callback === 'function') {
                    callback.call(this, args.text);
                }
            }
        });
	},
	
	highLightCode:function(str){
        if (str.length == 0) return "";
        str = str.replace(/&/g, "&amp;");
        str = str.replace(/</g, "&lt;");
        str = str.replace(/>/g, "&gt;");
        return str;
    },
    
    htmlEncode: function(str){
        if (str.length == 0) return "";
        str = str.replace(/&/g, "&amp;");
        str = str.replace(/</g, "&lt;");
        str = str.replace(/>/g, "&gt;");
        str = str.replace(/ /g,"&nbsp;");
        str = str.replace(/\'/g, "&#39;");
        str = str.replace(/\"/g, "&quot;");
        str = str.replace(/\n/g, "<br>");
        return str;
    },

    htmlDecode: function(str){
        if(str.length ==0) return "";
        str = str.replace(/&amp;/g, "&");
        str = str.replace(/&lt;/g, "<");
        str = str.replace(/&gt;/g, ">");
        str = str.replace(/&nbsp;/g, " ");
        str = str.replace(/&#39;/g, "\'");
        str = str.replace(/&quot;/g, "\"");
        str = str.replace(/<br>/g, "\n");
        return str;
    },

    randomNumber: function(n,m){
        return parseInt(n+Math.random()*(m-n));
    }
};

/**
 * 动态添加元素
 */
var DomWrapper = {
	wrapper: null,
	append:function(dom){
		this.getWrapper().append(dom);
	},
	
	prepend:function(dom){
		this.getWrapper().append(dom);
	},
	
	getWrapper:function(){
		if(this.wrapper === null){
			this.wrapper = $('#fileWrapper');
            if (this.wrapper.size() === 0) {
                this.wrapper = $('<div id="fileWrapper" />').prependTo('body');
            }

            // 点击对话框不会触发给document绑定的点击行为
            this.wrapper.click(Toolkit.cancelBubble);
            this.wrapper.mousedown(Toolkit.cancelBubble);
		}
		return this.wrapper;
	}
};

var CachePriority = {
	Low: 1,
	Normal:2,
	High:4
};

var Cache = new Class({

    initialize: function(size) {
        this.items = {};
        this.count = 0;
        this.size = size || -1;
        this.fillFactor = 0.75;
        this.purgeSize = Math.round(this.size * this.fillFactor);

        this.stats = {
            hits: 0,
            missed: 0
        };
    },

    getItem: function(key) {
        var item = this.items[key];

        if (item != null) {
            if (!this.isExpired(item)) {
                item.lastAccessed = new Date().getTime();
            } else {
                this.removeItem(key);
                item = null;
            }
        }

        var result = null;
        if (item != null) {
            result = item.value;
            this.stats.hits++;
        } else {
            this.stats.misses++;
        }
        return result;
    },

    setItem: function(key, value, options) {
        var CacheItem = function(k, v, o) {
            if ((k === null) || (k === '')) throw new Error("key cannot be null or empty");

            this.key = k;
            this.value = v;
            o = o || {};
            if (o.expirationAbsolute != null) o.expirationAbsolute = o.expirationAbsolute.getTime();
            if (o.priority == null) o.priority = CachePriority.Normal;
            this.options = o;

            this.lastAccessed = new Date().getTime();
        };

        this.addItem(new CacheItem(key, value, options));

        if ((this.size > 0) && (this.count > this.size)) {
            this.purge();
        }
    },

    clear: function() {
        for (var key in this.items) {
            this.removeItem(key);
        }
    },

    purge: function() {
        var tmparray = [];

        for (var key in this.items) {
            var item = this.items[key];
            if (this.isExpired(item)) {
                this.removeItem(key);
            } else {
                tmparray.push(item);
            }
        }

        if (tmparray.length > this.purgeSize) {
            tmparray = tmparray.sort(function(a, b) {
                if (a.options.priority != b.options.priority) {
                    return b.options.priority - a.options.priority;
                } else {
                    return b.lastAccessed - a.lastAccessed;
                }
            });

            while (tmparray.length > this.purgeSize) {
                var ritem = tmparray.pop();
                this.removeItem(ritem.key);
            }
        }
    },

    addItem: function(item) {
        if (this.items[item.key] != null) this.removeItem(item.key);

        this.items[item.key] = item;
        this.count++;
    },

    removeItem: function(key) {
        var item = this.items[key];
        delete this.items[key];
        this.count--;

        if (item.options.callback != null) {
            var callback = function() {
                item.options.callback(item.key, item.value);
            };
            setTimeout(callback, 0);
        }
    },

    isExpired: function(item) {
        var now = new Date().getTime();
        var expired = false;
        if ((item.options.expirationAbsolute) && (item.options.expirationAbsolute < now)) {
            expired = true;
        }
        if (!expired && (item.options.expirationSliding)) {
            var lastAccess = item.lastAccessed + (item.options.expirationSliding * 1000);
            if (lastAccess < now) {
                expired = true;
            }
        }
        return expired;
    }

});

var Context = new(new Class({
	cache: new Cache(100),
	curpath: null,
	query: null,
	initialize:function(){
		
	},
	
	setContext:function(meta){
		this.cache.setItem(meta.path, meta);
	},
	
	//返回上下文,即dataset
	getContext:function(path){
		return this.cache.getItem(path || this.curpath) || {
			//auth: 
		};
	},
	
	updateContext:function(mate){
		this.setContext($.extend(this.getContext(meta.path), meta));
	},
	
	//当前路径权限认证
	getAuthentication:function(){
		
	}
}));

/**
 * 右键菜单
 */
var RightMenu = new (new Class({
	
	rightMenu: null,
	initialize:function(){
		var self = this;
		$(function(){
			var menu = [
			'<ul id="contextMenu" class="context-menu">',
				'<li data-item="dowload">',
					'<a class="text"><i></i><span>下载</span></a>',
				'</li>',
				'<li data-item="delete">',
					'<a class="text first">删除</a>',
				'</li>',
				'<li data-item="move">',
					'<a class="text"><i></i><span>移动到</span></a>',
				'</li>',
				'<li data-item="">',
					'<a class="text first">重命名</a>',
				'</li>',
				'<li>',
					'<a class="text"><i></i><span>共享</span></a>',
				'</li>',
				'<li>',
					'<a class="text first">发送</a>',
				'</li>',
			'</ul>'
			];
			self.rightMenu = $(menu.join(''));
			DomWrapper.append(self.rightMenu);
		});
	},
	// 右键菜单显示状态 
	show:function(offset){
		var self = this,menu = this.rightMenu,containVisbleItem = false;
		menu.children().each(function(){
			var curItem = $(this);
			if(curItem.css("display") !== "none"){
				containVisbleItem = true;
				return false;
			}
		});
		//if (!containVisbleItem) return false;
		//权限？
		var wind = $(window),
		    width = wind.width(),
		    height = wind.height(),
		    scroll = $(document).scrollTop(),
		    menuHeight = menu.outerHeight();
		   
		if (offset.left + 200 > width) {
            offset.left = width - 200;
        }

        if (offset.top + menuHeight > scroll + height) {
            offset.top -= (offset.top + menuHeight) - (scroll + height) + 10;
        }
        
        // 判断二级菜单的浮动方向
        if (offset.left + 380 > width) {
            menu.find('.sub-menu').addClass('sub-left');
        } else {
            menu.find('.sub-menu').removeClass('sub-left');
        }

        menu.css(offset).show();
        $(document).bind('mousewheel', this.preventWheel);
	},
	// 右键菜单隐藏状态
	hide:function(){
		this.rightMenu.hide();
        $(document).unbind('mousewheel', this.preventWheel);
	},
	
	preventWheel:function(){
		return false;
	},
	
	bindEvent: function(){
		var self = this;
        this.rightMenu.on('click', 'li', function(e) {
            if (!$(this).is('.menubar')) self.hide();
            return false;
        });
        this.rightMenu.on('contextmenu', function(e) {
            e.cancelBubble = true;
            e.returnValue = false;
//          e.preventDefault();
            return false;
        });

        // 防止触发隐藏菜单事件
        this.emacleMenu.mousedown(Toolkit.cancelBubble);
	}
}));

var AdapterIO = {
	
	// 从本地存储中获取排序类型
	getOrder:function(){
		var defaultOrder = {
			
		};
	}
};

var fileShowStyle = {
	fileList: "file-list",
    thumbList: "thumb-list"
};

var em263 = {
    type: "263group",
    authority263:null,
    groupid: null
};

var FileSystem = new(new Class({
	Implements: [Events],
	xmlhttp: null,
	personaltree: null,

    companytree: null,

    centerDiv: null,
    
    suffixes:{
    	zi: ['7z', 'arj', 'bz2', 'bzip2', 'cab', 'cpio', 'deb', 'dmg', 'gz', 'gzip', 'hfs', 'iso', 'lha', 'lzh', 'lzma', 'rar', 'rpm', 'split', 'swm', 'tar', 'taz', 'tbz', 'tbz2', 'tgz', 'tpz', 'wim', 'xar', 'z', 'zip'],
        mp: ['mp3', 'wma', 'wav', 'mod', 'md', 'aac', 'flac', 'ape', 'mid', 'ogg', 'm4a'],
        vi: ['wmv', 'asf', 'asx', 'rm', 'rmvb', 'mpg', 'mpeg', 'mpe', '3gp', 'mov', 'mp4', 'm4v', 'avi', 'dat', 'mkv', 'vob'],
        im: ['bmp', 'pcx', 'tiff', 'gif', 'jpeg', 'jpg', 'tga', 'fpx', 'png', 'tif', 'raw', "pjpg", "pbmp", "ppng"],
        ps: ['psd'],
        ai: ['ai', 'eps', 'svg'],
        fl: ['swf', 'flv'],
        wd: ['doc'],
        docx:['docx'],
        xs: [ 'xlsx','csv'],
        xls:['xls'],
        pt: ['ppt'],
        pptx:['pptx'],
        pd: ['pdf'],
        ml: ['js','java','html','css','xml'],
        xt: ['txt', 'properties', 'config']
    },
    supportInGallery:['.bmp', '.jpg', '.png', '.tiff', '.gif', '.exif', '.fpx', '.psd', '.cdr', '.pcd', '.ufo', '.eps', '.ai', '.raw', '.tif', '.jpeg'],
    supportPreview:['.png','.jpg','.jpeg','.gif','.fpx','.psd','.ai','.eps','.bmp','.tiff','.tif','.wav','.mp3','.wma','.ape','.flac','.aac','.mmf','.amr','.m4a','.m4r','.ogg','.wavpack','.mp2','.mp4','.avi','.mov','.asf','.vod','.wmv','.rm','.swf','.3gp','.flv','.wmv9','.rmvb','.asx','.vob','.mkv','.doc','.docx','.dotx','.dot','.xls','.xlsx','.xlsm','.xlsb','.ppt','.pptx','.pps','.ppsx','.pot','.pdf','.xls','.xlsx','.xlsm','.xlsb','.potx','.rtf','.txt','.csv','.dwg','.dxf','.dwf','.html','.htm','.xml','.mht','.cs','.css','.cxx','.diff','.groovy','.h','.java','.js','.less','.m','.make','.ml','.mm','.php','.pl','.properties','.py','.rb','.scala','.script','.sh','.sql','.vi','.vim','.xsd','.xsl','.xslt','.yaml','.log','.dpt','.et','.ett','.wpt'],
    fileListStyle: fileShowStyle.fileList,
    selectedFiles:[],
    checkAllFlag: false,
    initialize:function(){
    	var self = this;
    	$(document).bind('keydown', function(e) {
            if (e.keyCode === 27) {
                self.cancelEdit();
                self.calcelCheckAll();
//              e.preventDefault();
//              e.stopPropagation();
            }
        });
        $(document).bind('click', this.cancelEdit);

        self.addEvent(EmacleEvents.SUCCESS, function() {
            //Toolbar.resize();
        });

        if (!Cookie.read('fileListStyle')) {
            Cookie.write("fileListStyle", fileShowStyle.fileList);
        }
        self.fileListStyle = Cookie.read('fileListStyle');
    },
    
    cancelEdit:function(e){
    	//FileSystem.closeRename();
        //FileSystem.closeCreate();
    },
    
    calcelCheckAll:function(){
    	var load = $('.file.selected').size() > 0;
        var checkAll = $('#checkAll'),
            checkAllRadio = $('#checkAllRadio');

        checkAll.removeClass('selected');
        checkAllRadio.removeClass('selected');
        jQuery('.file').removeClass('selected');
        if (load) {
            RightAside.loadContent();
        }

        //Toolbar.hide();
        FileSystem.clearSelectedFiles();
    },
    
    getIcon:function(sfx){
    	sfx = sfx.toLowerCase();

        var icon = '';
        Object.forEach(this.suffixes, function(v, k) {
            if (v.contains(sfx)) {
                icon = 'icon-' + k;
            }
        });
        return icon;
    },
    
    getThumbIcon:function(sfx){
    	sfx = sfx.toLowerCase();
        var icon = '';
        Object.forEach(this.suffixes, function(v, k) {
            if (v.contains(sfx)) {
                icon = 't-' + k;
            }
        });
        return icon;
    },
    
    loadFiles:function(path, params){
    	var self = this;
    	path = path; //根据上下文获取
    	url = "";
    	params = "";
    	
    	this.xmlhttp && this.xmlhttp.abort();
    	this.xmlhttp = $.ajax({
    		url: url,
    		type:"post",
    		dataType: 'json',
    		cache: false,
    		async:false,
    		beforeSend: function(){
    			
    		},
    		success:function(res){
    			self.centerDiv = $('.right-wrap');
    			
    		}
    	});
    },
    
    getSelectedFiles:function(){
    	var fileList = $("#fileWrapper .file-list .file");
    	for (var i = 0; i < fileList.length; i++) {
            var data_path = fileList.eq(i).dataset("path");
            var data_fttime = fileList.eq(i).dataset("fmttime");
            if (FileSystem.selectedFiles.contains(data_path)) {
                if (!Context.isTrash()) {
                    fileList.eq(i).addClass("selected");
                }else{
                    if(FileSystem.selectedTimes.contains(data_fttime)){
                        fileList.eq(i).addClass("selected");
                    }
                }
            }
        }
    },
    
    setSelectedFiles:function(){
    	var fileList = $('#fileWrapper .file-list .file .selected');
    	FileSystem.selectedFiles = [];
    	FileSystem.selectedTimes = [];
    	for(i = 0;i < fileList.length; i++){
    		FileSystem.selectedFiles.push(fileList.eq(i).dataset("path"));
    		//其他
    	}
    },
    
    clearSelectedFiles:function(){
    	FileSystem.selectedFiles = [];
    	FileSystem.selectedTimes = [];
    },
    
    assemble:function(files){
    	files = Array.from(files);
    	//判断不同文件ICON
    	var getIcon = function(){
    		if(this.dir){
    			//var part = 
    		}
    	}
    }
}));

THISPAGE.init();
