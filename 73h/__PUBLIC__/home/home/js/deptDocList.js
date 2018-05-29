// JavaScript Document
/*	插件模版js文件
*/
var DeptDoc = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		this_obj.sub_el_files = [];


		
		///系统选项
		this_obj.sys_opt = {		
			selector		: "",		//科室id
			dept_id			: "",		//科室id		
			date_str		: "",		//日期字符串		
			url				: "",		//提交的url	
			detail_url		: "",

			item_el_html	: "",		//条目元素的html	
		};

		//函数集
		this_obj.func_set = {
			//配置函数集
			opt_func 				: "",

			//ajax提交函数
			ajax_submit_func		: "",
			//ajax获取数据返回处理函数集
			ajax_ret_func			: "",
		
			//html元素操作函数
			html_dom_opt_func		: "",
			//元素选择器生成函数集
			el_selector_gen_func	: "",
		}

		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置函数
			this_obj.func_set.opt_func.parseOptions(i_options);

			//获取数据
			this_obj.func_set.ajax_submit_func.getData();
		}//	Init
		
		////////////// 内部私有函数集/////////////////////////////////
		//私有函数,配置数据函数
		this_obj.func_set.opt_func = {
			//解析配置项
			parseOptions : function (i_options){
				//遍历用户自定义配置项
				$.each(i_options, function(i){
					//alert(this.type );
					switch(this['type'])
					{
						case 'system':
							//调用初始化函数进行初始化操作
							this_obj.func_set.opt_func.initSysOptions(this);
						break;
						default:
							this_obj.func_set.opt_func.initSubElData(this);
						break;
					}
					
				});//each

					
			},//func parseOptions

			//初始化系统选项
			initSysOptions:function (option_obj)
			{
				//指定父元素的选择器
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'selector');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'dept_id');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'date_str');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'url');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'detail_url');
			},
			//初始化子元素数据
			initSubElData:function(option_obj)
			{			
				this_obj.sub_el_src.push(option_obj);
			},
					
			//系统选项赋值
			sysOptionsAssign : function (option_obj,attr_name)
			{
				//判断当前的属性是否存在,如果存在则进行赋值
				if((attr_name in option_obj))
				{
					this_obj.sys_opt[attr_name] = option_obj[attr_name];
				}
			},
		};//opt func 配置数据相关函数

		///////ajax提交函数集
		this_obj.func_set.ajax_submit_func = {
			//获取数据
			getData : function(){
				var data_obj = {};
				data_obj.data = this_obj.func_set.ajax_submit_func.genSubmitData();
				//alert(data_obj.data);
				var url = this_obj.sys_opt.url;
				$.post(url,$.param(data_obj),function(Json){
					this_obj.func_set.ajax_ret_func.handleAjaxRet(Json);
				},"json");
			},

			//生成提交数据,返回字符串
			genSubmitData : function(){
				var data = "dept_id="+this_obj.sys_opt.dept_id+"&date_str="+this_obj.sys_opt.date_str;
				return data;
			}

		};//ajax提交函数集

		/////ajax返回处理函数
		this_obj.func_set.ajax_ret_func = {
			//处理ajax返回
			handleAjaxRet : function(json_obj){
				//获取数据
				var ret_code 	= json_obj.ret_code;
				var ret_state 	= json_obj.ret_state;			
				//判断返回标志位
				if(ret_code == 0)
				{
					//数据返回成功
					//清空显示区域
					this_obj.func_set.html_dom_opt_func.clearElArea();
					//遍历数组,显示条目追加
					$.each(ret_state, function(index, el) {
						this_obj.func_set.html_dom_opt_func.appendItemEl(el);
					});
				}
				else
				{

				}
			}
		};//ajax返回处理函数

		/////htmnl 页面Dom操作函数集
		this_obj.func_set.html_dom_opt_func = {
			//清空条目区域,保存条目的html
			clearElArea : function(){
				//清空区域的代码
				var selr = this_obj.func_set.el_selector_gen_func.genElAreaSelr();
				$(selr).html("");

				//初始化变量
				this_obj.sys_opt.item_el_html = '\
					<a href="" class="ui-grid-b type_con">\
			          <div class="ui-block-a tc_item tc_img">\
			            <img src="">\
			          </div>\
			          <div class="ui-block-b tc_item tc_name">\
			          	<div class="tcn_item doc_name">\
			          		\
			          	</div>\
			          	<div class="tcn_item doc_level">\
			          		\
			          	</div>\
			          	<div class="tcn_item doc_skilled">\
			          		擅长 <span class="val"></span>\
			          	</div>\
			          	<div class="tcn_item patients">\
			          		就诊人数: <span class="val"></span>人\
			          	</div>\
			          	<div class="tcn_item rest_reg">\
			          		今日剩余<span class="val"></span>个号\
			          	</div>\
			          </div>\
			          <div class="ui-block-c tc_item tc_sym">\
			          	<div class="tci_tri_line">\
			          		<div class="tci_tri1"></div>\
			          		<div class="tci_tri2"></div>\
			          	</div>\
			          </div>\
				    </a>\
			    <div class="dlt_line"></div>\
				';
			},

			//追加条目
			appendItemEl : function(data_obj){
				//将条目追加到区域中
				var area_selr = this_obj.func_set.el_selector_gen_func.genElAreaSelr();
				$(area_selr).append(this_obj.sys_opt.item_el_html);

				//赋值
				//var item_selr = this_obj.func_set.el_selector_gen_func.genLatestAppendItemElSelr();
				//url
				var c_str = this_obj.sys_opt.detail_url+"?doc_id="+data_obj.doc_id+"&date_str="+this_obj.sys_opt.date_str;
				var dis_selr = this_obj.func_set.el_selector_gen_func.genLatestAppendItemElSelr();
				$(dis_selr).attr("href",c_str);
				//设置图片
				var c_str = data_obj.dis_pic;
				var dis_selr = this_obj.func_set.el_selector_gen_func.genLatestItemImgElSelr();
				$(dis_selr).attr("src",c_str);

				//医生姓名
				c_str = data_obj.name;
				dis_selr = this_obj.func_set.el_selector_gen_func.genLatestItemDocNameElSelr();
				$(dis_selr).html(c_str);

				//医生级别,职位+职称
				c_str = data_obj.pos + " "+ data_obj.job_title;
				dis_selr = this_obj.func_set.el_selector_gen_func.genLatestItemDocLevelElSelr();
				$(dis_selr).html(c_str);

				//擅长
				c_str = data_obj.skilled_intro;
				dis_selr = this_obj.func_set.el_selector_gen_func.genLatestItemDocSkilledElSelr();
				$(dis_selr).html(c_str);

				//就诊人数
				c_str = 10;
				dis_selr = this_obj.func_set.el_selector_gen_func.genLatestItemPatientsElSelr();
				$(dis_selr).html(c_str);

				//剩余挂号
				c_str = data_obj.rest_reg_cnt;
				dis_selr = this_obj.func_set.el_selector_gen_func.genLatestItemRestRegElSelr();
				$(dis_selr).html(c_str);

			}

		};//htmnl 页面Dom操作函数集

		/////元素选择器生成函数集
		this_obj.func_set.el_selector_gen_func = {
			//生成区域的选择器
			genElAreaSelr : function(){
				return this_obj.sys_opt.selector;
			},

			//生成条目的选择器
			genItemElSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genElAreaSelr() + ">.type_con";
			},

			//生成最近添加的条目的选择器
			genLatestAppendItemElSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genItemElSelr() + ":last";
			},

			//生成最新条目图片子元素的选择器
			genLatestItemImgElSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genLatestAppendItemElSelr() + " .tc_img img";
			},
			//生成最新条目医生名称选择器
			genLatestItemDocNameElSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genLatestAppendItemElSelr() + " .tc_name .doc_name";
			},
			//生成最新条目医生级别选择器
			genLatestItemDocLevelElSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genLatestAppendItemElSelr() + " .tc_name .doc_level";
			},
			//生成最新条目医生擅长选择器
			genLatestItemDocSkilledElSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genLatestAppendItemElSelr() + " .tc_name .doc_skilled .val";
			},
			//生成最新条目就诊人数选择器
			genLatestItemPatientsElSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genLatestAppendItemElSelr() + " .tc_name .patients .val";
			},
			//生成最新名称选择器
			genLatestItemRestRegElSelr : function(){
				return this_obj.func_set.el_selector_gen_func.genLatestAppendItemElSelr() + " .tc_name .rest_reg .val";
			},

		};//元素选择器生成函数集
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);

		return this_obj;
	},//initCtrl



}//DeptDoc class













