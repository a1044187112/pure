/**
 * 系统配置
 */
config = CONFIG = {
	version: 1.0,
	curDate: null,
	realName: "",
	userName: "",
	companyName: "",
	companyAddr: "",
	rights: {},
	isAdmin:true,
	init:function(){
		Buffer.unit();
	}
};

/*--共有函数--*/
Public = {
	
	init:function(){
		Public.app.init();
		this.uiEvent();
		//this.setting();
		config.init();
	},
	
	setting:function(){
		 layer.open({
	        type: 2,
	        skin: 'layer-ext-moon',
	        title: 'layer弹层组件',
	        fix: false,
	        shadeClose: true,
	        maxmin: true,
	        area: ['1000px', '500px'],
	        content: '------------'
	    });
	},
	/**
	 * ui 事件
	 */
	uiEvent:function(){
		var self = this;
		$(".navbar-right li").hover(function(){
			$(this).find(".refresh-all-panel").addClass("hover");
			$(this).find(".container").show();
	
		},function(){
			$(this).find(".container").hide();
			$(this).find(".refresh-all-panel").removeClass("hover");
	
		});
		
		$('#s-menu-allapps').bind('click',function(){
			if($('#allapps').is(":hidden")){
				$('#center').hide();
			    $('#allapps').show();
			}else{
				$('#allapps').hide();
				$('#center').show();
			}
		});
		
		$('.sidebar-container .tab-navigation a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		});
		
		$('#exit').bind('click',function(){
//			self.exit();
		});
		
		$(function(){
			$('#s-menu-1 a').tooltip({
		        selector: "[data-toggle=tooltip]",
		        container: "body"
		   });
		   $("[data-toggle=popover]").popover();
		});
		
		this.sidebarRight();
	},
	
//	exit:function(){
//		layer.confirm('您确定退出系统吗？', {
//		  btn: ['退出系统','取消'] //按钮
//		}, function(){
//		  window.location.href = "login.html";
//		}, function(){
//		  layer.msg('取消退出系统', {
//		    time: 1000, //20s后自动关闭
//		    //btn: ['明白了', '知道了']
//		  });
//		});
//		//window.location.href = "login.html";
//	},
	
	iframePage:function(url){
		$('#home_iframe').attr('src',url);
	},
	
	/**
	 * 右侧栏通知组件
	 */
	sidebarRight:function(){
		/*
		$('#login_user').on("click", function(c){
			$("#right-sidebar").toggleClass("sidebar-open");
		});*/
		
		$(document).on('click', function (e) {
			var item = e.target;
			if($(item).is($('#login_user'))){
				if($('#right-sidebar').hasClass('sidebar-open')){
					$("#right-sidebar").removeClass("sidebar-open");
					$('#login_user').removeClass('hover');
				}else{
					$("#right-sidebar").addClass("sidebar-open");
					$('#login_user').addClass('hover');
				}
			}else if($(item).is($('#login_user').find('i,span'))){
				if($('#right-sidebar').hasClass('sidebar-open')){
					$("#right-sidebar").removeClass("sidebar-open");
					$('#login_user').removeClass('hover');
				}else{
					$("#right-sidebar").addClass("sidebar-open");
					$('#login_user').addClass('hover');
				}
			}else{
				if(!$(item).closest($('#right-sidebar')).length){
					if($('#right-sidebar').hasClass('sidebar-open')){
						$('#right-sidebar').removeClass('sidebar-open');
						$('#login_user').removeClass('hover');
					}
				}
			}
		});
	},
	
	/**
	 * 在窗口中打开新页面
	 * @param {Object} url
	 */
	openWin:function(url,title,width,height,callback,btn){
		layer.open({
			type: 2,
			content: url,
			zIndex: 100,
			title: [
			    title
			    /*'background-color:#ffffff; color:#333333;font-weight: bold;'*/
			],
			area: [width + "px",height + 'px'],
			btn: !btn?['确定', '取消']:['取消'],
			//closeBtn: 1,
			yes: !btn?function(index,layero){
				callback(index,layero);
			}:''
		});
	},
	/**
	 * 获取选中的权限
	 * @param {Object} id
	 */
	getGrantCheck:function(obj){ 
		var back = new Array();
		var check = obj.find('input:checked');
		$.each(check, function(){     
			back.push(this.value);
		});   
		return back;
	},
	
	/**
	 * 加载另一个页面元素
	 * @param {Object} url
	 */
	loadWin:function(url,title,callback){
		$.post(url, {}, function(str){
		    layer.open({
		        type: 1,
		        zIndex: 100,
		        title: [
				    title,
				    'background-color:#28C7DA; color:#fff;font;font-weight: bold;'
				],
		        content: str, //注意，如果str是object，那么需要字符拼接。
		        btn: ['确定保存', '取消'],
		        yes:function(index,layero){
					callback(index,layero);
				}
		    });
		});
	},
	
	
	/**
	 * 表格高度
	 * @param {Object} adjustH
	 * @param {Object} adjustW
	 */
	setGrid:function(adjustH, adjustW){
		var adjustH = adjustH || 70;
		var adjustW = adjustW || 20;
		var gridW = $(window).width() - adjustW, gridH = $(window).height() - $(".grid-wrap").offset().top - adjustH;
		return {
			w : gridW,
			h : gridH
		}
	},
	
	/**
	 * 元素100%高度
	 * @param {Object} obj
	 */
	setAutoHeight:function(obj){
		if(!obj || obj.length < 1){
			return ;
		}
		this._setAutoHeight(obj);
		$(window).bind('resize', function(){
			Public._setAutoHeight(obj);
		});
	},
	
	_setAutoHeight:function(obj){
		obj = $(obj);
		//parent = parent || window;
		var winH = $(window).height();
		var h = winH - obj.offset().top - (obj.outerHeight() - obj.height());
		obj.height(h);
	},
	
	/**
	 * 重置表格高度
	 * @param {Object} adjustH
	 * @param {Object} adjustW
	 */
	resizeGrid:function(adjustH, adjustW){
		var grid = $("#grid");
		var gridWH = Public.setGrid(adjustH, adjustW);
		grid.jqGrid('setGridHeight', gridWH.h);
		grid.jqGrid('setGridWidth', gridWH.w);
	},
	
	/**
	 * 表格高度自适应
	 * @param {Object} $grid
	 */
	autoGrid:function($grid){
		$grid.jqGrid('setGridWidth', $grid.closest('.grid-wrap').innerWidth() -2 );//去掉border的宽度
	},
	
	/**
	 * 节点100%高度
	 * @param {Object} obj
	 */
	setAutoHeight:function(obj){
		if(!obj || obj.length < 1){
			return ;
		}
		
		Public._setAutoHeight(obj);
		$(window).bind('resize', function(){
			Public._setAutoHeight(obj);
		});
	},
	
	titleShow:function(){
		$('[data-toggle="tooltip"]').tooltip();
	},
	
	/**
	 * 日期控件检测
	 */
	dateCheck:function(){
		$('.ui-datepicker-input').bind('focus', function(e){
			$(this).data('original', $(this).val());
		}).bind('blur', function(e){
			var reg = /((^((1[8-9]\d{2})|([2-9]\d{3}))(-)(10|12|0?[13578])(-)(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(11|0?[469])(-)(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(0?2)(-)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(-)(0?2)(-)(29)$)|(^([3579][26]00)(-)(0?2)(-)(29)$)|(^([1][89][0][48])(-)(0?2)(-)(29)$)|(^([2-9][0-9][0][48])(-)(0?2)(-)(29)$)|(^([1][89][2468][048])(-)(0?2)(-)(29)$)|(^([2-9][0-9][2468][048])(-)(0?2)(-)(29)$)|(^([1][89][13579][26])(-)(0?2)(-)(29)$)|(^([2-9][0-9][13579][26])(-)(0?2)(-)(29)$))/;
			var _self = $(this);
			setTimeout(function(){
				if(!reg.test(_self.val())) {
					parent.Public.tips({type:1, content : '日期格式有误！如：2013-08-08。'});
					_self.val(_self.data('original'));
				};
			}, 10)
	
		});
	},
	
	getDefaultPage:function(){
		var win = window.self;
		var i = 20;//最多20层，防止无限嵌套
		try{
			do{
				if (/default.jsp/.test(win.location.href)) {
					return win;
				}
				win = win.parent;
				i--;
			} while(i>0);
		}catch(e){
			return win;
		}
		return win;
	},
	
	getHostName:function(){
		var defaultPage = Public.getDefaultPage();
		var result = defaultPage.location.hostname;
		if(!/.com/.test(result)){
			//是IP形式的，兼容内网
			result += ':'+defaultPage.location.port;
		}
		return result
	},
	
	/**
	 * 绑定回车键事件
	 */
	bindEnterSkip:function(obj, func){
		var args = arguments;
		$(obj).on('keydown', 'input:visible:not(:disabled)', function(e){
			if (e.keyCode == '13') {
				var inputs = $(obj).find('input:visible:not(:disabled)');
				var idx = inputs.index($(this));
				idx = idx + 1;
				if (idx >= inputs.length) {
					if (typeof func == 'function') {
						var _args = Array.prototype.slice.call(args, 2 );
						func.apply(null,_args);
					}
				} else {
					inputs.eq(idx).focus();
				}
			}
		});
	},
	
	/**
	 * 获取url参数值
	 */
	urlParam:function(){
		var param, url = location.search, theRequest = {};
	    if (url.indexOf("?") != -1) {
	        var str = url.substr(1);
	        strs = str.split("&");
	        for(var i = 0, len = strs.length; i < len; i ++) {
				param = strs[i].split("=");
		        theRequest[param[0]]=decodeURIComponent(param[1]);
		    }
	    }
	    return theRequest;
	},
	
	/**
	 * 默认json格式
	 * 默认post方式
	 * @param {Object} ajaxOpts
	 */
	ajax:function(ajaxOpts){
		alert(ajaxOpts);
		var opts = {
			type: "POST",
			dataType: "json",
			error: function(err){  
				//parent.Public.tips({type: 1, content : '服务端响应错误！'});
		    }
		};
		$.extend(true, opts, ajaxOpts);
		var success = ajaxOpts.success;
		opts.success = function(data, status){
			success && success(data, status); 
		}
		$.ajax(opts); 
	},
	
	/**
	 * 通用post请求，返回json
	 * @param {Object} url
	 * @param {Object} params
	 * @param {Object} callback
	 * @param {Object} errCallback
	 */
	ajaxPost:function(url, params, callback, errCallback){
		$.ajax({
			type:"POST",
			url: url,
			data: params, 
			async:true,
			dataType: "json",
			success: function(data, status){
				callback(data);
			},
			error: function(err,ms){
				parent.Public.tips({type: 1, content : '服务端响应错误！'});
			    errCallback && errCallback(err);
			}
		});
	},
	
	/**
	 * 通用get请求，返回json
	 * @param {Object} url
	 * @param {Object} params
	 * @param {Object} callback
	 * @param {Object} errCallback
	 */
	ajaxGet:function(url, params, callback, errCallback){
		$.ajax({
			type:"GET",
			url: url,
			data: params, 
			async:true,
			dataType: "json",
			success: function(data, status){
				callback(data);
			},
			error: function(err,ms){
				parent.Public.tips({type: 1, content : '服务端响应错误！'});
			    errCallback && errCallback(err);
			}
		});
	},
	
	/**
	 * 数值显示格式转化
	 * @param {Object} val
	 * @param {Object} dec
	 */
	numToCurrency:function(val, dec){
		val = parseFloat(val);	
		dec = dec || 2;	//小数位
		if(val === 0 || isNaN(val)){
			return '';
		}
		val = val.toFixed(dec).split('.');
		var reg = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
		return val[0].replace(reg, "$1,") + '.' + val[1];
	},
	
	/**
	 * 数值显示
	 * @param {Object} val
	 */
	currencyToNum:function(val){
		var val = String(val);
		if ($.trim(val) == '') {
			return '';
		}
		val = val.replace(/,/g, '');
		val = parseFloat(val);
		return isNaN(val) ? 0 : val;
	},
	
	/**
	 * 只允许输入数字
	 * @param {Object} e
	 */
	numerical:function(e){
		var allowed = '0123456789.-', allowedReg;
		allowed = allowed.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
		allowedReg = new RegExp('[' + allowed + ']');
		var charCode = typeof e.charCode != 'undefined' ? e.charCode : e.keyCode; 
		var keyChar = String.fromCharCode(charCode);
		if(!e.ctrlKey && charCode != 0 && ! allowedReg.test(keyChar)){
			e.preventDefault();
		};
	},
	
	/**
	 * 限制只能输入允许的字符，不支持中文的控制
	 * @param {Object} obj
	 * @param {Object} allowedReg
	 */
	limitInput:function(obj, allowedReg){
		var ctrlKey = null;
	    obj.css('ime-mode', 'disabled').on('keydown',function(e){
	        ctrlKey = e.ctrlKey;
	    }).on('keypress',function(e){
	        allowedReg = typeof allowedReg == 'string' ? new RegExp(allowedReg) : allowedReg;
	        var charCode = typeof e.charCode != 'undefined' ? e.charCode : e.keyCode; 
	        var keyChar = $.trim(String.fromCharCode(charCode));
	        if(!ctrlKey && charCode != 0 && charCode != 13 && !allowedReg.test(keyChar)){
	            e.preventDefault();
	        } 
	    });
	},
	
	/**
	 * 限制输入长度
	 * @param {Object} obj
	 * @param {Object} count
	 */
	limitLength:function(obj, count){
		obj.on('keyup',function(e){
	        if(count < obj.val().length){
	        	e.preventDefault();
	        	obj.val(obj.val().substr(0,count));
	        }
	    });
	},
	
	/**
	 * 表格添加、删除row
	 * @param {Object} val
	 * @param {Object} opt
	 * @param {Object} row
	 */
	billsOper:function (val, opt, row) {
		var html_con = '<div class="operating" data-id="' + opt.rowId + '"><span class="ui-icon ui-icon-plus" title="新增行"></span><span class="ui-icon ui-icon-trash" title="删除行"></span></div>';
		return html_con;
	},
	
	bindEnterSkip:function(obj, func){
		var args = arguments;
		$(obj).on('keydown', 'input:visible:not(:disabled)', function(e){
			if (e.keyCode == '13') {
				var inputs = $(obj).find('input:visible:not(:disabled)');
				var idx = inputs.index($(this));
				idx = idx + 1;
				if (idx >= inputs.length) {
					if (typeof func == 'function') {
						var _args = Array.prototype.slice.call(args, 2 );
						func.apply(null,_args);
					}
				} else {
					inputs.eq(idx).focus();
				}
			}
		});
	},
	
	/**
	 * 选择框下拉
	 * @param {Object} $obj
	 * @param {Object} opts
	 */
	categoryTree:function($obj, opts){
		if ($obj.length === 0) {
	        return;
	    }
		opts = opts ? opts : opts = {};
		var opts = $.extend(true, {
			inputWidth:'145',
			width:'',//'auto' or int
			height:'240',//'auto' or int
			trigger:true,
			defaultClass:'ztreeCombo',
			disExpandAll:false,//展开全部
			defaultSelectValue:0,
			showRoot:true,//显示root选择
			rootTxt:'全部',
			treeSettings : {
				callback:{
					beforeClick: function(treeId, treeNode) {
						if(_Combo.obj){
							_Combo.obj.val(treeNode.name);
							_Combo.obj.data('id', treeNode.id);
							_Combo.hideTree();
						}
					}
				}
			}
		}, opts);
		var _Combo = {
			container:$('<span class="ui-tree-wrap" style="width:'+opts.inputWidth+'px"></span>'),
			obj : $('<input type="text" class="input-txt" style="width:'+(opts.inputWidth-26)+'px" id="'+$obj.attr('id')+'" autocomplete="off" readonly value="'+($obj.val()||$obj.text())+'">'),
			trigger : $('<span class="trigger"></span>'),
			data:{},
			init : function(){
				var _parent = $obj.parent();
				var _this = this;
				$obj.remove();
				this.obj.appendTo(this.container);
				if(opts.trigger){
					this.container.append(this.trigger);
				}
				this.container.appendTo(_parent);
				opts.callback = function(publicTree ,data){
					_this.zTree = publicTree;
					_this.data = data;
					if(publicTree){
						publicTree.obj.css({
							'max-height' : opts.height
						});
						for ( var i = 0, len = data.length; i < len; i++){
							_this.data[data[i].id] = data[i];
						};
						if(opts.defaultSelectValue !== ''){
							_this.selectByValue(opts.defaultSelectValue);
						};
						_this._eventInit();
					}
				};
				this.zTree = Public.zTree.init($('body'), opts , opts.treeSettings);
				Public.zTree._callback(opts.data);
				return this;
			},
			showTree:function(){
				if(!this.zTree)return;
				if(this.zTree){
					var offset = this.obj.offset();
					var topDiff = this.obj.outerHeight();
					var w = opts.width? opts.width : this.obj.width();
					var _o = this.zTree.obj.hide();
					_o.css({width:w, top:offset.top + topDiff,left:offset.left-1});
				}
				var _o = this.zTree.obj.show();
				this.isShow = true;
				this.container.addClass('ui-tree-active');
			},
			hideTree:function(){
				if(!this.zTree)return;
				var _o = this.zTree.obj.hide();
				this.isShow = false;
				this.container.removeClass('ui-tree-active');
			},
			_eventInit: function(){
				var _this = this;
				if(opts.trigger){
					_this.trigger.on('click',function(e){
						e.stopPropagation();
						if(_this.zTree && !_this.isShow){
							_this.showTree();
						}else{
							_this.hideTree();
						}
					});
				};
				_this.obj.on('click',function(e){
					e.stopPropagation();
					if(_this.zTree && !_this.isShow){
						_this.showTree();
					}else{
						_this.hideTree();
					}
				});
				if(_this.zTree){
					_this.zTree.obj.on('click',function(e){
						e.stopPropagation();
					});
				}
				$(document).click(function(){
					_this.hideTree();
				});
			},
			getValue:function(){
				var id = this.obj.data('id') || '';
				if(!id){
					var text = this.obj.val();
					if(this.data){
						for(var item in this.data){
							if(this.data[item].name === text){
								id = this.data[item].id;
							}
						}
					}
				}
				return id;
			},
			getText:function(){
				if(this.obj.data('id'))
					return this.obj.val();
				return '';
			},
			selectByValue:function(value){
				if(value !== ''){
					if(this.data){
						this.obj.data('id', value);
						this.obj.val(this.data[value].name);
					}
				}
				return this;
			}
		};
		return _Combo.init();
	},
	
	/**
	 * 文件上传函数
	 * @param {Object} dom
	 * @param {Object} uploadUrl
	 * @param {Object} callback
	*/
	uploadFile:function(dom, uploadUrl, callback){
		alert(55);
		try{
			
		    var uploader = $(dom).fileupload({
				url: uploadUrl,
				dataType: "json",
				type: 'PUT',
				autoUpload: !0,
				maxFileSize:500000,
				maxNumberOfFiles : 1,
				forceIframeTransport: true,
				acceptFileTypes:  /(\.|\/)(gif|jpe?g|png)$/i,
				sequentialUploads: !0,
		        done: function (e, data) {//设置文件上传完毕事件的回调函数
					window.setTimeout(function() {
			            //jQuery("#upload_progress").fadeOut(500);
			        },2e3);
					callback(e,data);
		        },
		        progressall: function (e, data) {//设置上传进度事件的回调函数
		        	//jQuery("#upload_progress").show();
		        	var dom = [
					'<div style="padding:10px 15px 0px 15px;">',
						'<div class="row" style="padding: 10px 0px 0px 0px;border-bottom:1px solid #F2F2F2;">',
						    '<div class="col-md-1"><img src="img/kuaipan/excel.png" /></div>',
							'<div class="col-md-6">1111111.excel</div>',
							'<div class="col-md-5">',
								'<div class="progress">',
									'<div style="width: 35%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="35" role="progressbar" class="progress-bar progress-bar-success">',
									'</div>',
								'</div>',
							'</div>',
						'</div>',
					'</div>'
					];
					top.layer.open({
						type: 1,
						id: 'file-upload',
					    title: [
							'文件上传',
						    'background-color:#ffffff; color:#ccc;font;font-weight: bold;'
						],
					    closeBtn: 1, //不显示关闭按钮
					    shade: [0],
					    area: ['440px', '175px'],
					    move: !1,
					    shade: 0,
					    offset: 'rb', //右下角弹出
					    shift: 5,
					    content:dom.join('')
					});
		        	
		            var i = parseInt(data.loaded / data.total * 100, 10);
		            jQuery(".progress .progress-bar").css("width", i + "%").html(i + "%");
		        }
		    });
	        uploader.find("input:file").removeAttr('disabled');
	    }catch(e){
	    	console.log(e);
	    }
	},
	
	/**
	 * 权限验证
	 */
	verifyRight:function(right){
		var self = this;
		var isAdmin = config.isAdmin;
		var siExperied = config.siExpired = true;
		var rights = config.rights;
		if (isAdmin && !siExperied) {
			return true;
		};
		if(siExperied){
			if(btnItem[right]){
				return true;
			}else{
				var html = [].join('');
			}
		}else{
			
		}
	},
	
	/**
	 * 消息提示
	 * @param {Object} title 标题
	 * @param {Object} content 内容
	 * @param {Object} callback 点击回调函数
	 */
	msg:function(obj,callback){
		Push.create(obj.title, {
		    body: obj.content,
		    icon: obj.img,
		    timeout: 4000,
		    onClick: function () {
		        window.focus();
		        this.close();
		    }
		});
		/*
		toastr.options = {
			  "closeButton": true,
			  "debug": true,
			  "progressBar": false,
			  "positionClass": "toast-bottom-right",
			  "showDuration": "400",
			  "hideDuration": "1000",
			  "timeOut": "7000",
			  "extendedTimeOut": "1000",
			  "showEasing": "swing",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut",
			  onclick: callback
		};
		var $toast = toastr["info"](title, content);
		*/
	}
};

/**
 * 菜单应用
 */
Public.app = {
	navData:{},
	barData:[],
	init:function(){
		this.load();
	},
	/**
	 * 加载应用
	 */
	load:function(){
		var self = this;
		var data = [{
			id: 1,
			text: '日常办公',
			img: 'css/images/app-oa.png',
			homePage: 'page/home.html',
			menu:[{
				id: 1,
				fid: 1,
				text: '项目',
				url: 'page/oa/project/main.html'
			},{
				id: 2,
				fid: 1,
				text: '任务',
				url: 'page/oa/layout_list.html'
			},{
				id: 3,
				fid: 1,
				text: '简报',
				url: 'page/oa/workreport/main.html'
			},{
				id: 3,
				fid: 1,
				text: '审批',
				url: 'page/oa/approval/main.html'
			},{
				id: 3,
				fid: 1,
				text: '考勤',
				url: ''
			},{
				id: 3,
				fid: 1,
				text: '简报',
				url: 'page/oa/pro/main.html'
			}]
		},{
			id: 2,
			text: '行政办公',
			img: 'css/images/app-crm.png',
			homePage: 'page/home.html',
			menu:[{
				id: 1,
				fid: 2,
				text: '会议',
				url: 'page/administration/conference/main.html'
			},{
				id: 2,
				fid: 2,
				text: '公告/制度',
				url: 'page/administration/announcementSystem/main.html'
			},{
				id: 3,
				fid: 2,
				text: '档案',
				url: ''
			},{
				id: 4,
				fid: 2,
				text: '印章',
				url: ''
			},{
				id: 5,
				fid: 2,
				text: '证照',
				url: 'page/administration/licence/main.html'
			},{
				id: 6,
				fid: 2,
				text: '车辆',
				url: 'page/administration/vehicle/main.html'
			},{
				id: 6,
				fid: 2,
				text: '固定资产',
				url: 'page/administration/fixedAssets/main.html'
			},{
				id: 6,
				fid: 2,
				text: '办公用品',
				url: 'page/administration/officeSupplies/main.html'
			}]
		},{
			id: 3,
			text: '人事管理',
			img: 'css/images/app-hr.png',
			homePage: 'page/home.html',
			menu:[{
				id: 1,
				fid: 3,
				text: '人事档案',
				url: 'page/hr/records/main.html'
			},{
				id: 2,
				fid: 3,
				text: '培训',
				url: 'page/hr/train/main.html'
			},{
				id: 3,
				fid: 3,
				text: '考勤',
				url: ''
			},{
				id: 4,
				fid: 3,
				text: '薪资',
				url: ''
			},{
				id: 5,
				fid: 3,
				text: '组织机构',
				url: 'page/hr/organization/main.html'
			}]
		},{
			id: 5,
			text: '文件管理',
			icon: 'fa-folder',
			homePage: 'page/home.html',
			menu:[{
				id: 1,
				fid: 5,
				text: '云盘',
				url: 'page/yunpan/main.html'
			},{
				id: 1,
				fid: 5,
				text: '消息',
				url: 'page/news/main.html'
			}]
		},{
			id: 4,
			text: '系统管理',
			icon: 'fa-cog',
			homePage: 'page/home.html',
			menu:[{
				id: 1,
				fid: 4,
				text: '账号设置',
				url: 'page/manager/user/main.html'
			},{
				id: 1,
				fid: 4,
				text: '企业设置',
				url: 'page/manager/org/main.html'
			},{
				id: 1,
				fid: 4,
				text: '成员管理',
				url: 'page/manager/member/main.html'
			},{
				id: 1,
				fid: 4,
				text: '角色/权限',
				url: 'page/manager/roles/main.html'
			},{
				id: 1,
				fid: 4,
				text: '菜单管理',
				url: 'page/manager/menus/menu.html'
			}]
		}];
		
		self.barData = data;
		var appMenu = "";
		$.each(self.barData, function(index, obj) {
			self.navData[obj.id] = obj.menu;
			var icon = obj.img ? '<img src="'+obj.img+'" alt="" />' : '<i class="icon fa '+ obj.icon + '"></i>';
			appMenu += '<li id="app-'+obj.id+'"><a href="javascript:;" data-home="'+obj.homePage+'" data-id="'+obj.id+'" data-text="'+obj.text+'" class="app-btn s-menu-btn" title="">'+icon+'</a></li>'
		    if(index == 0){
		    	self.navMenu(obj.menu,obj.text,obj.homePage)
		    }
		});
		appMenu += '<li id="s-menu-allapps"><a href="javascript:;" data-id="0" class="app-btn s-menu-btn" title="后台管理" data-id="superadmin"><i class="fa fa-th-large" style="font-size: 34px;"></i></a></li>';
		$('#apps-menu .bar-menu').html(appMenu);
		$('#apps-menu .bar-menu a').bind('click',function(){
			$('#allapps').hide();
			$('#center').show();
			var id = $(this).data('id');
			var text = $(this).data('text');
			var homePage = $(this).data('home');
			if(id == 0)return;
			var navData = self.navData[id];
			self.navMenu(navData,text,homePage)
		});
	},
	
	/**
	 * 导航栏事件
	 * @param {Object} navData
	 * @param {Object} text
	 * @param {Object} homePage
	 */
	navMenu:function(navData,text,homePage){
		var navDom = '<li class="divider"><b class="navbar-brand" href="">'+text+'</b></li><li><a class="hover" href="javascript:;" onclick="Public.iframePage(\'page/home.html\')">首页</a></li>';
		if(navData){
			$.each(navData, function(i,item) {
				navDom += '<li><a href="javascript:;" data-url="'+item.url+'">'+item.text+'</a></li>';
			});
		}
		$('#center .navbar-left').html(navDom);
		$('#center .navbar-left a').bind('click',function(){
			$('#center .navbar-left a').removeClass('hover');
			$(this).addClass('hover');
			Public.iframePage($(this).data('url'));
		});
		if($('#home_iframe').attr('src') != homePage)Public.iframePage(homePage);
	},
	
	/**
	 * 应用移动
	 */
	move:function(){
		$('#apps-menu .bar-menu').on('mousedown', 'li', function(e){
			e.preventDefault();
			e.stopPropagation();
			
		});
	}
};

/**
 * 名片
 * @param {Object} t
 * @param {Object} data
 */
Public.memberCard = function(t, data){
	var card = [
	    '<div class="member-card">',
	        '<div class="member-card-left">',
	            '<div class="lc-avatar lc-avatar-90 ">',
	                '<img src="'+data.img+'" />',
	            '</div>',
	            '<div class="name">',
	                '<div class="card-item-display ">'+data.name+'</div>',
	                '<div class="card-item-name">' + data.bumen + '</div>',
	            '</div>',
	        '</div>',
	        '<div class="member-card-right">',
	            '<div class="member-card-item">',
	                '<span class="card-item-label">部门</span>',
	                '<span class="card-item-value">'+data.bumen+'</span>',
	            '</div>',
	            '<div class="member-card-item">',
	                '<span class="card-item-label">职务</span>',
	                '<span class="card-item-value">'+data.zhiwu+'</span>',
	            '</div>',
	            '<div class="member-card-item">',
	                '<span class="card-item-label">手机</span>',
	                '<span class="card-item-value">'+data.phone+'</span>',
	            '</div>',
	            '<div class="member-card-item">',
	                '<span class="card-item-label">邮箱</span>',
	                '<span class="card-item-value">'+data.email+'</span>',
	            '</div>',
	            '<button type="button"  class="btn btn-white btn-bitbucket"><i class="fa fa-info"></i></button>',
	            '<button type="button"  class="btn btn-white btn-bitbucket"><i class="fa fa-info"></i></button>',
	            '<button type="button"  class="btn btn-white btn-bitbucket"><i class="fa fa-info"></i></button>',
	        '</div>',
	    '</div>'
	];
	var cardDom = $(card.join(''));
	$(t).popbox({
		direction: 'bottom',
		closeBut: true,
		width: 420,
		height: 180,
		content: cardDom
	});
};

/**
 * 滑动面板组件
 * @param {Object} options
 */
Public.sidePanel = function(options){ 
	return new Public.SidePanel(options);
}

Public.SidePanel = function(options){
	var defaults = {
		renderTo: 'body',
		html:'',
		autoClose : false,
		yes_on: true,
		removeOthers : true,
		onClose : null,
		onShow : null
	}
	this.options = $.extend({},defaults,options);
	this._init();
	!Public.SidePanel._collection ?  Public.SidePanel._collection = [this] : Public.SidePanel._collection.push(this);
}

Public.SidePanel.removeAll = function(){
	try {
		for(var i=Public.SidePanel._collection.length-1; i>=0; i--){
			Public.SidePanel._collection[i].remove();
		}
	}catch(e){}
}

var SidePanel_obj = Public.SidePanel.prototype = {
	_init:function(){
		var self = this,opts = this.options;
		if($('.sidepanel')){
			$('.sidepanel').remove();
		}
		this._create();
		this._event();
	},
	
	_create:function(){
		var opts = this.options, self = this;self.w = $(window).width() / 2;
		self.w = !opts.width ? self.w : opts.width;
		this.obj = $('<div class="sidepanel">'+
			'<div class="sidepanel-toolbar">'+
			   '<div class="title"><i class="fa '+opts.icon+'"></i>'+opts.title+'</div>'+
			   '<div class="close"><i class="fa fa-close"></i></div>'+
			'</div>'+
			'<div class="sidepanel-body"><div class="spiner-example">正在加载,请稍等...<div class="sk-spinner sk-spinner-three-bounce"><div class="sk-bounce1"></div><div class="sk-bounce2"></div><div class="sk-bounce3"></div></div></div></div>'+
			'<div class="sidepanel-footer">'+
				'<a class="ui-btn ui-btn-sp ok" style="margin-right:10px;">确定</a>'+
				'<a class="ui-btn canel">取消</a>'+ 
			'</div>'+
		'</div>');
		this.closeBtn = this.obj.find('.close');
		this.canelBtn = this.obj.find('.canel');
		this.okBtn = this.obj.find('.ok');
		this.closeBtn.bind('click',function(){
			opts.autoClose = true;
			self.close();
			//self.obj.css('transform','translateX('+self.w+'px)');
		});
		this.canelBtn.bind('click',function(){
			//self.obj.css('transform','translateX('+self.w+'px)');
			self.close();
			opts.autoClose = true;
		});
		this.okBtn.bind('click',function(e){
			opts.ok(self);
		});
		if(opts.background)self.obj.css('background',opts.background);
		//self.obj.css({'width':self.w+'px','transform':'translateX('+self.w+'px)','-webkit-transform':'translateX('+self.w+'px)','-moz-transform':'translateX('+self.w+'px)'});
		self.obj.css({'width': self.w + 'px','right': '-' + self.w + 'px'});
	    this.obj.appendTo('body');
	    if(opts.type == 0){
	    	this.obj.find('.sidepanel-body').html(opts.content);
	    }else if(opts.type == 1){
	    	this.obj.find('.sidepanel-body').load(opts.content);
	    }else if(opts.type == 2){
	    	this.obj.find('.sidepanel-body').html('<iframe src='+opts.content+' style="width: 100%;height: 100%;"  marginwidth="0" marginheight="0" frameborder="0" scrolling="auto" />');
	    }
	    if(opts.closeBtn == 1){
	    	this.obj.find('.sidepanel-footer').hide();
	    }
	    this._setPos();
	},
	
	_setPos:function(){
		var self = this, opts = this.options;
		opts.yes_on=true;
		window.setTimeout(function(){
			self.open();
			opts.yes_on=false;
		},50);
	},
	
	_event:function(){
		var self = this, opts = this.options;
		// 关闭document的点击事件 如果不关闭 上一次的点击事件对象没有销毁  当在次点击时  执行次数会增加  创建多个对象
		$(document).off("click");
		$(document).on('click', function (e) {
			var obj_this = this;
			var item = e.target;
		    var x = e.originalEvent.x || e.originalEvent.layerX || 0;
		    var y = e.originalEvent.y || e.originalEvent.layerY || 0;
		    var objLeft = $('.sidepanel').offset().left;
		    if(opts.autoClose)return;
			if($(item).is(self.closeBtn)){
				//self.obj.css('transform','translateX('+self.w+'px)');
				self.close(obj_this);
			}
			else{
				if(x < objLeft){
					if(opts.yes_on){
						//self.obj.css('display','none');
						/*
					    window.setTimeout(function(){
					    	
					        //self.obj.css('transform','translateX('+self.w+'px)');
					        //self.obj.css('display','block');
					    },20);*/
					    window.setTimeout(function(){
					    	self.open();
					    },20);
					}else{
						self.close();
						//self.obj.css('transform','translateX('+self.w+'px)');
					}
				}
			}
			
		});
	},
	
	close:function(obj_this){
		var self = this,opts = this.options;
		//self.obj.css('transform','translateX('+self.w+'px)');
		self.obj.animate({right: '-' + self.w + 'px'}, "slow");
		opts.autoClose = true;
//		$(document).off("click");
	},
	
	open:function(){
		var self = this,opts = this.options;
		//self.obj.css('transform','translateX('+self.w+'px)');
		self.obj.animate({right: '0px'}, "slow");
		//opts.autoClose = false;
	},
	
	realod:function(url){
		var self = this, opts = this.options;
		if(opts.type == 0){
	    	this.obj.find('.sidepanel-body').html(url);
	    }else if(opts.type == 1){
	    	this.obj.find('.sidepanel-body').load(url);
	    }else if(opts.type == 2){
	    	this.obj.find('.sidepanel-body').html('<iframe src='+url+' style="width: 100%;height: 100%;"  marginwidth="0" marginheight="0" frameborder="0" scrolling="auto" />');
	    }
	    if(opts.closeBtn == 1){
	    	this.obj.find('.sidepanel-footer').hide();
	    }else{
	    	this.obj.find('.sidepanel-footer').show();
	    }
	},
	
	getPanel:function(){
		return this;
	}
};
/**
 * 文件li组件
 * @param {Object} options
 */
Public.filesLi = function(options){ return new Public.FilesLi(options); }

Public.FilesLi = function(options){
	var defaults = {
		autoClose : true,
		removeOthers : true,
		onClose : null,
		onShow : null
	}
	this.options = $.extend({},defaults,options);
	this._init();
}

Public.FilesLi.prototype = {
	
	_init:function(){
		var self = this,opts = this.options;
		this._create();
	},
	
	_create:function(){
		var opts = this.options, self = this;
		var data = opts.data;
		
		var file_num = 0;
		//取最大编号
		$.each(opts.dom.find('[name=remove-button]'), function(){     
			var num = $(this).attr("data-index");
			num = parseInt(num);
			if(num>=file_num){
				file_num = num+1;
			}
		});
		
		var htm = '';
		htm='<li class="upfiles_li" data-id="'+file_num+'"><div class="upfiles_div1"><input name="file-name" value="'+data+'"  class="ui-input ui_inputSty"/></div>'+
   	    '<div class="upfiles_div2"><input name="path" type="file" class="upfiles_ok" value="" />'+
		'</div><div class="upfiles_div3"><div class="fr"><div class="btn-group btn-groupSty"><a name="remove-button" class="btn btn-link"href="javascript:void(0);"  data-index='+file_num+'><i class="fa fa-trash-o"></i> <a></div></div></div></li>';
		file_num ++;
		this.obj = $(htm);
		var _obj = this.obj;
		opts.dom.append(_obj);
		var _this = this;
		_obj.find('[name=remove-button]').bind('click',function(){
			var num = $(this).attr("data-index");
			$(document.querySelectorAll('[data-id="'+num+'"]')).remove();
		   	event.stopPropagation();
		});
	}
};




/**
 * 权限控制组件
 * @param {Object} options
 */
Public.grantTable = function(options){ return new Public.GrantTable(options); }

Public.GrantTable = function(options){
	var defaults = {
		autoClose : true,
		removeOthers : true,
		onClose : null,
		onShow : null
	}
	this.options = $.extend({},defaults,options);
	this._init();
}

Public.GrantTable.prototype = {
	
	_init:function(){
		var self = this,opts = this.options;
		this._create();
	},
	
	_create:function(){
		var opts = this.options, self = this;
		var dt = opts.menudata;
		var level_0id = 0;
		var level_1id = 100;
		var level_2id = 10000;
		
		var htm = '';
		for(var i=0;i<dt.length;i++){
			if(dt[i].level==0){
				htm += 
					'<div class="col-sm-12 app-frame" >'
						+'<div class="col-sm-12 tb-header" data-id="'+level_0id+'" data-right="'+dt[i].choose+'">'
							+'<img class="app-icon" alt="" src="'+dt[i].img+'">'
							+'<span class="app-menus"> '+dt[i].name+'&nbsp;<input type="checkbox" value="'+dt[i].id+'" name="menus" onclick="grantClickEvent('+level_0id+')" /></span>'
						+'</div>';
				for(var j=0;j<dt.length;j++){
					if(dt[j].pid==dt[i].id){
						htm += '<div class="col-sm-12 pd0 " style="background: #fff;">'
							   +'<div class="col-sm-12 tborder">'
							   +'<div class="col-sm-1 menus " data-id="'+level_1id+'" data-parentid="'+level_0id+'" data-right="'+dt[j].choose+'">'
							   +'<span class="fright"> '+dt[j].name+' <input type="checkbox" value="'+dt[j].id+'" name="menus" onclick="grantClickEvent('+level_1id+')" /></span>'
							   +'</div>';
							   for(var k=0;k<dt.length;k++){
							   		if(dt[k].pid==dt[j].id){
							   			htm += '<div class="col-sm-1 menuss" data-id="'+level_2id+'" data-parentid="'+level_1id+'"  data-grandpaid="'+level_0id+'" data-right="'+dt[k].choose+'">'
							   				  +'<span class="mright"> '+dt[k].name+'&nbsp;<input type="checkbox" value="'+dt[k].id+'" name="menus" /></span>'
							   				  +'</div>';
							   			level_2id ++;	
							   		}
							   }
						htm += '</div>';
						htm += '</div>';
						level_1id ++;
					}
				}
				htm += '</div>';
				level_0id ++;
			}
		}
		opts.dom.html(htm);
		this._init_check();
	},
	_init_check:function(){
		var check = document.querySelectorAll('[data-right="1"]') ;
		$(check).find('input').attr("checked","true");
		
		var uncheck = document.querySelectorAll('[data-right="0"]') ;
		$.each(uncheck, function(){     
			var id = $(this).attr("data-id");
		    grantLockCheck(id);
		});   
	}
	
};

function grantClickEvent(id){
	var self = document.querySelectorAll('[data-id="'+id+'"]') ;
	var choose = $(self).attr("data-right");
	if(choose==1){
		grantLockCheck(id);
		$(self).attr("data-right","0");
	}else{
		$(self).attr("data-right","1");
		grantUnlockockCheck(id);
	}
	
}
function grantLockCheck(id){
	var son = document.querySelectorAll('[data-parentid="'+id+'"]') ;
	$(son).find('input').attr('disabled','true');
	$(son).find('input').removeAttr('checked');
	$(son).attr("data-right","0");
	
	var grandson = document.querySelectorAll('[data-grandpaid="'+id+'"]') ;
	$(grandson).find('input').attr('disabled','true');
	$(grandson).find('input').removeAttr('checked');
	$(grandson).attr("data-right","0");
	
}
function grantUnlockockCheck(id){
	var son = document.querySelectorAll('[data-parentid="'+id+'"]') ;
	$(son).find('input').removeAttr('disabled');
	
	if(id>=100){
		$(son).attr("data-right","1");
		$(son).find('input').prop('checked',true); 
	}
	
}
//生成树
Public.zTree = {
    zTree: {},
    opts:{
    	showRoot:true,
    	defaultClass:'',
    	callback:'',
    	rootTxt:'全部'
    },
    setting: {
        view: {
            dblClickExpand: false,
            showLine: true,
            selectedMulti: false
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "parentId",
                rootPId: ""
            }
        },
        callback: {
            //beforeClick: function(treeId, treeNode) {}
        }
    },
    _getTemplate: function(opts) {
    	this.id = 'tree'+parseInt(Math.random()*10000);
        var _defaultClass = "ztree";
        if (opts) {
            if(opts.defaultClass){
                _defaultClass += ' ' + opts.defaultClass;
            }
        }
        return '<ul id="'+this.id+'" class="' + _defaultClass + '"></ul>';
    },
    init: function($target, opts, setting ,callback) {
        if ($target.length === 0) {
            return;
        }
        var self = this;
        self.opts = $.extend(true, self.opts, opts);
        self.container = $($target);
        self.obj = $(self._getTemplate(opts)); 
        self.container.append(self.obj);
        setting = $.extend(true, self.setting, setting);
        return self;
    },
    _callback: function(data){
    	var self = this;
    	var callback = self.opts.callback;
    	if(self.opts.showRoot){
    		data.unshift({name:self.opts.rootTxt,id:0});
        	self.obj.addClass('showRoot');
    	}
    	if(!data.length) return;
    	self.zTree = $.fn.zTree.init(self.obj, self.setting, data);
    	//self.zTree.selectNode(self.zTree.getNodeByParam("id", 101));
    	self.zTree.expandAll(!self.opts.disExpandAll);
    	if(callback && typeof callback === 'function'){
    		callback(self, data);
    	}
    }
};

/*操作提示*/
Public.tips = function(options){ return new Public.Tips(options); }
Public.Tips = function(options){
	var defaults = {
		renderTo: 'body',
		type : 0,
		autoClose : true,
		removeOthers : true,
		time : undefined,
		top : 10,
		onClose : null,
		onShow : null
	}
	this.options = $.extend({},defaults,options);
	this._init();
	
	!Public.Tips._collection ?  Public.Tips._collection = [this] : Public.Tips._collection.push(this);
}

Public.Tips.removeAll = function(){
	try {
		for(var i=Public.Tips._collection.length-1; i>=0; i--){
			Public.Tips._collection[i].remove();
		}
	}catch(e){}
}

Public.Tips.prototype = {
	_init : function(){
		var self = this,opts = this.options,time;
		if(opts.removeOthers){
			Public.Tips.removeAll();
		}

		this._create();

		if(opts.autoClose){
			time = opts.time || opts.type == 1 ? 5000 : 3000;
			window.setTimeout(function(){
				self.remove();
			},time);
		}

	},
	
	_create : function(){
		var opts = this.options, self = this;
		if(opts.autoClose) {
			this.obj = $('<div class="ui-tips"><i></i></div>').append(opts.content);
		} else {
			this.obj = $('<div class="ui-tips"><i></i><span class="close"></span></div>').append(opts.content);
			this.closeBtn = this.obj.find('.close');
			this.closeBtn.bind('click',function(){
				self.remove();
			});
		};
		
		switch(opts.type){
			case 0 : 
				this.obj.addClass('ui-tips-success');
				break ;
			case 1 : 
				this.obj.addClass('ui-tips-error');
				break ;
			case 2 : 
				this.obj.addClass('ui-tips-warning');
				break ;
			default :
				this.obj.addClass('ui-tips-success');
				break ;
		}
		
		this.obj.appendTo('body').hide();
		this._setPos();
		if(opts.onShow){
				opts.onShow();
		}

	},

	_setPos : function(){
		var self = this, opts = this.options;
		if(opts.width){
			this.obj.css('width',opts.width);
		}
		var h =  this.obj.outerHeight(),winH = $(window).height(),scrollTop = $(window).scrollTop();
		//var top = parseInt(opts.top) ? (parseInt(opts.top) + scrollTop) : (winH > h ? scrollTop+(winH - h)/2 : scrollTop);
		var top = parseInt(opts.top) + scrollTop;
		this.obj.css({
			position : Public.isIE6 ? 'absolute' : 'fixed',
			left : '50%',
			top : top,
			zIndex : '9999',
			marginLeft : -self.obj.outerWidth()/2	
		});

		window.setTimeout(function(){
			self.obj.show().css({
				marginLeft : -self.obj.outerWidth()/2
			});
		},150);

		if(Public.isIE6){
			$(window).bind('resize scroll',function(){
				var top = $(window).scrollTop() + parseInt(opts.top);
				self.obj.css('top',top);
			})
		}
	},

	remove : function(){
		var opts = this.options;
		this.obj.fadeOut(200,function(){
			$(this).remove();
			if(opts.onClose){
				opts.onClose();
			}
		});
	}
};

/**
 * 地区组件
 * @param {Object} e
 */
Public.areasCombo = function(e){
	function t(t, i){
		return t.combo({
			data: i,
			text: "name",
			value: "id",
			width: 195,
			listHeight: 100,
			defaultSelected: -1,
			cache: !1,
			editable: !0,
			callback: {
				onFocus: null,
				onBlur: null,
				beforeChange: null,
				onChange: function() {
					switch (this) {
					case e.provinceCombo:
						e.cityCombo.loadData(a(e.provinceCombo.getValue()), -1, !1);
						e.areaCombo.loadData([], -1, !1);
						break;
					case e.cityCombo:
						e.areaCombo.loadData(n(e.cityCombo.getValue()), -1, !1);
						break;
					case e.areaCombo:
					}
				},
				onExpand: null,
				onCollapse: null
			}
		}).getCombo()
	}
	function r() {
		var e = [];
		for (i = 0, len = u.length; len > i; i++) 2 === u[i].type && 1 === u[i].parent_id && e.push({
			name: u[i].name,
			id: u[i].id
		});
		return e
	}
	function a(e) {
		var t = [];
		for (i = 0, len = p.length; len > i; i++) p[i].parent_id === e && t.push({
			name: p[i].name,
			id: p[i].id
		});
		return t
	}
	function n(e) {
		var t = [];
		if (h[e]) t = h[e].areaData;
		else {
			for (i = 0, len = d.length; len > i; i++) 4 === d[i].type && d[i].parent_id === e && t.push({
				name: d[i].name,
				id: d[i].id
			});
			h[e] = {
				areaData: t
			}
		}
		return t
	}
	var o, s, l, d = [],
		c = !1,
		u = [],
		p = [],
		h = {};
	e.init = function(url,a, n, h, f) {
		o = a;
		s = n;
		l = h;
		if (a && n && h) {
			Public.ajaxGet(url, {}, function(a) {
				if (a) {
					c = !0;
					d = a.areas_get_response.areas.area;
					for (i = 0, len = d.length; len > i; i++) {
						2 === d[i].type && 1 === d[i].parent_id && u.push({
							name: d[i].name,
							id: d[i].id,
							type: 2,
							parent_id: 1
						});
						3 === d[i].type && p.push({
							name: d[i].name,
							id: d[i].id,
							type: d[i].type,
							parent_id: d[i].parent_id
						})
					}
					e.provinceCombo = t(o, r());
					e.cityCombo = t(s, []);
					e.areaCombo = t(l, []);
					f()
				} else top.Public.tips({
					type: 1,
					content: "初始化省市区失败！"
				})
			});
			return e
		}
	};
	return e
}(Public.areasCombo || {});

/*----------- 数据缓存 -------------*/
Buffer = {
	
	unit:function(){
		Public.ajaxGet('ZCustomerStageAction!getAll.sr', null, function(res){
			if(res.STATUS){
				CONFIG.customerStageInfo = res.rows;
			}else{
				Public.tips({type: 1, content : res.INFO});
			}
		});
	}
};

//单选框插件
$.fn.cssRadio = function(opts){
	var opts = $.extend({}, opts);
	var $_radio = $('label.radio', this), $_this = this;
	$_radio.each(function() {
		var self = $(this);
		if (self.find("input")[0].checked) {
			self.addClass("checked");
		};

	}).hover(function() {
		$(this).addClass("over");
	}, function() {
		$(this).removeClass("over");
	}).click(function(event) {
		$_radio.find("input").removeAttr("checked");
		$_radio.removeClass("checked");
		$(this).find("input").attr("checked", "checked");
		$(this).addClass("checked");
		opts.callback($(this));
	});
	return {
		getValue: function() {
			return $_radio.find("input[checked]").val();
		},
		setValue: function(index) {
			return $_radio.eq(index).click();
		}
	}
};
//复选框插件
$.fn.cssCheckbox = function() {
	var $_chk = $(".chk", this);
	$_chk.each(function() {
		if ($(this).find("input")[0].checked) {
			$(this).addClass("checked");
		};
		if ($(this).find("input")[0].disabled) {
			$(this).addClass("dis_check");
		};
	}).hover(function() {
		$(this).addClass("over")
	}, function() {
		$(this).removeClass("over")
	}).click(function(event) {
		if ($(this).find("input")[0].disabled) {
			return;
		};
		$(this).toggleClass("checked");
		$(this).find("input")[0].checked = !$(this).find("input")[0].checked;
		event.preventDefault();
	});
	
	return {
		chkAll:function(){
			$_chk.addClass("checked");
			$_chk.find("input").attr("checked","checked");
		},	
		chkNot:function(){
			$_chk.removeClass("checked");
			$_chk.find("input").removeAttr("checked");
		},
		chkVal:function(){
			var val = [];
			$_chk.find("input:checked").each(function() {
            	val.push($(this).val());
        	});
			return val;
		}
	}
};

(function($){
	$.fn.popbox = function(method){
		var elem = $(this);
		var elemClass = 'popbox';
		var elemObj;
		var _options;
		var currentID;
		var methods = {
			init:function(params){
				var _self = this;
				var defaults = {
					renderTo: 'body',
					closeBut: false,
					html:'',
					width: 252,//'auto' or int
					height:240,//'auto' or int
					direction: 'right',
					beforeLoadingContent : 'Please, wait...',
					btns:[],
					left: 100,
					top: 100,
					onFun: undefined
				}
				_options = $.extend({},defaults,params);
				//$('body').find('.' + elemClass).attr('data-popmodal_id') == elem.attr('data-popmodal_id') ){
				if($('body').find('.' + elemClass).length !== 0){
					$('.' + elemClass).remove();
				}
					currentID = new Date().getMilliseconds();
					elem.attr('data-popmodal_id',currentID);
					var popboxHtml = [
					    '<div class="popbox" data-popmodal_id="'+ currentID +'">',
					            '<div class="popbox-body"></div>',
					    '</div>'
					];
					popBoxDom = $(popboxHtml.join(''));
					if(_options.title){
						var head = '<div class="popbox-header"><h3>'+_options.title+'</h3></div>';
						popBoxDom.prepend(head);
						//popBoxDom.find('.popbox-header h3').text(_options.title);
					}
					if(_options.closeBut){
						var close = '<button class="close fa fa-remove"></button>';
						popBoxDom.prepend(close);
					}
		            popBoxDom.find('.popbox-body').html(_options.content);
					popBoxDom.appendTo('body');
					
					elemObj = $('.' +elemClass);
					
					getPlacement();
					
					if (_options.onFun && $.isFunction(_options.onFun)) {
						_options.onFun(_self);
					}

					$('html').on('click.'+ elemClass +'Event',function(event){
						$(this).addClass(elemClass + 'Open');
						obj = $(event.srcElement || event.target);
						//$(this).addClass('popboxOpen');
						if(elemObj.is(':hidden')){
							closeBox();
						}
						if (!obj.parents().addBack().is('.' + elemClass) && !obj.parents().addBack().is(elem)) {
							closeBox();
						}
					});
					
					if(_options.closeBut){
						elemObj.find('.close').bind('click',function(){
							closeBox();
						});
					}
					
					$(window).resize(function() {
						getPlacement();
					});
				
				return elemObj;
			},
			
			close:function(){
				console.log('this close box ');
				closeBox();
			}
		};
		
		function closeBox(){
			elemObj.fadeOut("fast");
		}
		
		function getPlacement(){
			var w = $(window).width() / 2, opt = _options;
			var btn_left = elem.offset().left;
			var btn_top = elem.offset().top;
			switch(opt.direction){
				case 'left':
				    opt.left = btn_left - opt.width - 10;
				    opt.top = btn_top - (opt.width / 2) + elem.height();
				break;
				case 'right':
				    opt.left = btn_left + $(elem).width() + 10;
				    opt.top = btn_top - (opt.width / 2) + elem.height();
				break;
				case 'top':
				    opt.left = btn_left - (opt.width / 2) + elem.width();
				    opt.top = btn_top - opt.width;
				break;
				case 'bottom':
				    opt.left = btn_left - (opt.width / 2) + elem.width();
				    opt.top = btn_top + elem.height()  + 20;
				break;
			}
			
			elemObj.css({
				'left': opt.left + 'px',
				'top': opt.top + 'px',
				'width': opt.width + 'px',
				'height': opt.height + 'px'
			}).show();
		}
		
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		
	};
	
	$.event.special.destroyed = {
	    remove: function(o) {
	      if (o.handler) {
	      	o.handler();
	      }
	    }
	};
})(jQuery);

/**
 * SWFObject v2.2
 * http://code.google.com/p/swfobject/
 * swfobject.embedSWF("test.swf", "myContent", "300", "120", "9.0.0", "expressInstall.swf");
 */
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/**
 * 消息提示插件
 */
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});

/**
 * Push
 * =======
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Tyler Nickerson
 *
 * @preserve
 */
(function(global,factory){"use strict";if(typeof define==="function"&&define.amd){define(function(){return new(factory(global,global.document))})}else if(typeof module!=="undefined"&&module.exports){module.exports=new(factory(global,global.document))}else{global.Push=new(factory(global,global.document))}})(typeof window!=="undefined"?window:this,function(w,d){var Push=function(){var self=this,isUndefined=function(obj){return obj===undefined},isString=function(obj){return String(obj)===obj},isFunction=function(obj){return obj&&{}.toString.call(obj)==="[object Function]"},currentId=0,incompatibilityErrorMessage="PushError: push.js is incompatible with browser.",hasPermission=false,notifications={},lastWorkerPath=null,closeNotification=function(id){var errored=false,notification=notifications[id];if(typeof notification!=="undefined"){if(notification.close){notification.close()}else if(notification.cancel){notification.cancel()}else if(w.external&&w.external.msIsSiteMode){w.external.msSiteModeClearIconOverlay()}else{errored=true;throw new Error("Unable to close notification: unknown interface")}if(!errored){return removeNotification(id)}}return false},addNotification=function(notification){var id=currentId;notifications[id]=notification;currentId++;return id},removeNotification=function(id){var dict={},success=false,key;for(key in notifications){if(notifications.hasOwnProperty(key)){if(key!=id){dict[key]=notifications[key]}else{success=true}}}notifications=dict;return success},createCallback=function(title,options){var notification,wrapper,id,onClose;options=options||{};self.lastWorkerPath=options.serviceWorker||"sw.js";onClose=function(){removeNotification(id);if(isFunction(options.onClose)){options.onClose.call(this)}};if(w.Notification){try{notification=new w.Notification(title,{icon:isString(options.icon)||isUndefined(options.icon)?options.icon:options.icon.x32,body:options.body,tag:options.tag,requireInteraction:options.requireInteraction})}catch(e){if(w.navigator){w.navigator.serviceWorker.register(options.serviceWorker||"sw.js");w.navigator.serviceWorker.ready.then(function(registration){registration.showNotification(title,{icon:options.icon,body:options.body,vibrate:options.vibrate,tag:options.tag,data:options.data,requireInteraction:options.requireInteraction})})}}}else if(w.webkitNotifications){notification=w.webkitNotifications.createNotification(options.icon,title,options.body);notification.show()}else if(navigator.mozNotification){notification=navigator.mozNotification.createNotification(title,options.body,options.icon);notification.show()}else if(w.external&&w.external.msIsSiteMode()){w.external.msSiteModeClearIconOverlay();w.external.msSiteModeSetIconOverlay(isString(options.icon)||isUndefined(options.icon)?options.icon:options.icon.x16,title);w.external.msSiteModeActivate();notification={}}else{throw new Error("Unable to create notification: unknown interface")}id=addNotification(notification);wrapper={get:function(){return notification},close:function(){closeNotification(id)}};if(options.timeout){setTimeout(function(){wrapper.close()},options.timeout)}if(typeof notification!=="undefined"){if(isFunction(options.onShow))notification.addEventListener("show",options.onShow);if(isFunction(options.onError))notification.addEventListener("error",options.onError);if(isFunction(options.onClick))notification.addEventListener("click",options.onClick);notification.addEventListener("close",onClose);notification.addEventListener("cancel",onClose)}else if(isFunction(options.onClick)){if(isFunction(options.onClick)){w.addEventListener("notificationclick",function(event){options.onClick.call(event.notification)})}w.addEventListener("notificationclose",function(event){onClose.call(event.notification)})}return wrapper},Permission={DEFAULT:"default",GRANTED:"granted",DENIED:"denied"},Permissions=[Permission.GRANTED,Permission.DEFAULT,Permission.DENIED];self.Permission=Permission;self.Permission.request=function(onGranted,onDenied){if(!self.isSupported){throw new Error(incompatibilityErrorMessage)}callback=function(result){switch(result){case self.Permission.GRANTED:hasPermission=true;if(onGranted)onGranted();break;case self.Permission.DENIED:hasPermission=false;if(onDenied)onDenied();break}};if(w.Notification&&w.Notification.requestPermission){Notification.requestPermission(callback)}else if(w.webkitNotifications&&w.webkitNotifications.checkPermission){w.webkitNotifications.requestPermission(callback)}else{throw new Error(incompatibilityErrorMessage)}};self.Permission.has=function(){return hasPermission};self.Permission.get=function(){var permission;if(!self.isSupported){throw new Error(incompatibilityErrorMessage)}if(w.Notification&&w.Notification.permissionLevel){permission=w.Notification.permissionLevel}else if(w.webkitNotifications&&w.webkitNotifications.checkPermission){permission=Permissions[w.webkitNotifications.checkPermission()]}else if(w.Notification&&w.Notification.permission){permission=w.Notification.permission}else if(navigator.mozNotification){permission=Permissions.GRANTED}else if(w.external&&w.external.msIsSiteMode()!==undefined){permission=w.external.msIsSiteMode()?Permission.GRANTED:Permission.DEFAULT}else{throw new Error(incompatibilityErrorMessage)}return permission};self.isSupported=function(){var isSupported=false;try{isSupported=!!(w.Notification||w.webkitNotifications||navigator.mozNotification||w.external&&w.external.msIsSiteMode()!==undefined)}catch(e){}return isSupported}();self.create=function(title,options){if(!self.isSupported){throw new Error(incompatibilityErrorMessage)}if(!isString(title)){throw new Error("PushError: Title of notification must be a string")}if(!self.Permission.has()){return new Promise(function(resolve,reject){self.Permission.request(function(){try{resolve(createCallback(title,options))}catch(e){reject(e)}},function(){reject("Permission request declined")})})}else{return new Promise(function(resolve,reject){try{resolve(createCallback(title,options))}catch(e){reject(e)}})}};self.count=function(){var count=0,key;for(key in notifications){count++}return count},self.__lastWorkerPath=function(){return self.lastWorkerPath},self.close=function(tag){var key;for(key in notifications){notification=notifications[key];if(notification.tag===tag){return closeNotification(key)}}};self.clear=function(){var i,success=true;for(key in notifications){var didClose=closeNotification(key);success=success&&didClose}return success}};return Push});


