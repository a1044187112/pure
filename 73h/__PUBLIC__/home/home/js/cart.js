// JavaScript Document
/*	购物车操作类
*/
$(function(){
	$("body").swipe(
						 {
							swipe:function(event,
							 direction, distance, duration, fingerCount) {
							
		                    if(direction == "up"){
		                    	event.stopPropagation();
		                    	var end_st = document.body.scrollTop + distance + "px";
		                    	$("body").animate({scrollTop: end_st},400);
		                    }
		                     if(direction == "down"){
		                     	event.stopPropagation();
		                    	 var end_st = document.body.scrollTop - distance;
		                         if(end_st < 0) end_st=0;
		                         end_st += "px";
		                         $("body").animate({scrollTop: end_st},400);
		                    }
							// $(this).text("你用"+fingerCount+"个手指以"+duration+"秒的速度向"
							//  + direction + "滑动了" +distance+ "像素 " );
						},
					});
});
var Cart = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		this_obj.sub_el_files = [];


		
		///系统选项
		this_obj.sys_opt = {
			area_selector : "",				//区域元素选择器
			sub_item_el_class_name 	: "", 	//子条目元素类名
			sub_item_col_class_name : "", 	//子条目元素列的类名
			sub_item_chg_col_width 	: 0, 	//变动的列的宽度
			sel_btn_cname			: "",	//选择按钮的类名
			item_cnt_dec_btn_cname	: "",	//条目数量减少按钮类名
			item_cnt_inc_btn_cname	: "",	//条目数量增加按钮类名
			img_url					: "",	//选择按钮的类名
			item_been_sel_cname		: "",	//条目被选中的类名
			item_conter_in_cname	: "",	//条目计数器框的类名
			item_price_info_cname	: "",	//条目价格信息类名
		};

		//函数集
		this_obj.func_set = {
			//配置函数集
			opt_func 				: "",
			//HTML DOM函数集
			html_dom_func 			: "",
			//事件相关绑定函数集
			event_bind_func 		: "",
			//子元素项选择器生成函数集
			item_selector_gen_func 		: "",
			//显示或隐藏函数集
			area_display_func 		: "",
			//ajax获取数据返回处理函数集
			ajax_ret_func			: "",
			//子元素操作函数集
			sub_el_operation_func 	: "",
			//html子元素控件代码生成函数集
			sub_el_ctrl_code_gen_func	: "",
			//事件相关的处理函数
			handle_event_func 		: "",
			//条件判断函数集
			condition_judge_func	: "",

			//子元素创建函数集
			create_form_ctrl_func 	: "",
			//子元素初始化函数
			init_form_ctrl_func	: "",
			//子元素清空函数
			clear_form_ctrl_func	: "",	

			//元素状态操作函数集
			el_status_opt_func		: "",		
		}

		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置函数
			this_obj.func_set.opt_func.parseOptions(i_options);

			//创建元素
			this_obj.func_set.html_dom_func.createEl();

			//绑定事件
			this_obj.func_set.event_bind_func.bindEvnet();
		}//	Init
		
		//关闭区域
		this_obj.closeArea = function(){

		}

		//返回元素的唯一识别选择器
		this_obj.getBoxUniqueSelr = function(){

		}
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
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'sub_item_el_class_name');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'sub_item_col_class_name');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'sub_item_chg_col_width');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'sel_btn_cname');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'item_been_sel_cname');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'img_url');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'item_cnt_dec_btn_cname');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'item_cnt_inc_btn_cname');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'item_conter_in_cname');
				this_obj.func_set.opt_func.sysOptionsAssign(option_obj,'item_price_info_cname');
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

		/////创建HTML DOM元素函数
		this_obj.func_set.html_dom_func = {
			//元素的创建
			createEl : function(){

			},
			//创建插件需要的基础元素并添加到父元素中
			createBaseEl : function(){

			},//func createEl



		};//创建HTML DOM元素函数结束

		////创建相应类型的表单控件
		this_obj.func_set.create_form_ctrl_func = {

		};//创建相应类型的表单控件结束

		//子元素控件代码生成函数集
		this_obj.func_set.sub_el_ctrl_code_gen_func = {
			//生成条目已选择的标志图片
			genItemBeenSelSymPic : function(){
				var img_url = this_obj.sys_opt.img_url +"10.png";
				return img_url;
			},

			//生成条目未选择的标志图片
			genItemUnSelSymPic : function(){
				var img_url = this_obj.sys_opt.img_url +"4.png";
				return img_url;
			},
		};//创建元素内部调用公用函数集结束

		////表单控件初始化
		this_obj.func_set.init_form_ctrl_func = {
		};//表单控件初始化

		////表单控件清空
		this_obj.func_set.clear_form_ctrl_func = {
		};////表单控件清空

		///事件相关绑定函数集
		this_obj.func_set.event_bind_func = {
			//绑定事件
			bindEvnet : function(){
				this_obj.func_set.event_bind_func.bindSubItemElSwipeEvent();
				this_obj.func_set.event_bind_func.bindDelBtnClick();
				this_obj.func_set.event_bind_func.bindSelBtnClick();
				this_obj.func_set.event_bind_func.bindItemCountChgBtnClick();
				this_obj.func_set.event_bind_func.bindAllChkBtnClick();
				this_obj.func_set.event_bind_func.bindItemCounterInputFocus();
			},
			//绑定子条目元素左右滑动事件
			bindSubItemElSwipeEvent : function(){
				var sub_item_sler = this_obj.func_set.item_selector_gen_func.genSubItemElSelr();
				//alert(sub_item_sler);

				$(sub_item_sler).each(function(index, el) {
					var i_this = this;
					
					
					$(this).swipe( {
					    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

					      if(direction == "left")
					      {
					      	event.stopPropagation();
					      	this_obj.func_set.handle_event_func.handleSubItemSwipeLeft(i_this);
					      }
					      else if(direction == "right"){
					      	event.stopPropagation();
					      	this_obj.func_set.handle_event_func.handleSubItemSwipeRight(i_this);

					      }
					      else if(direction == "up")//当向上滑动手指时令当前页面记数器加1
	                      {
	                        //window.scroll();
	                         //document.body.scrollTop += distance;
	                         //alert(document.body.scrollTop);
	                         // alert("上滑");
	                         var end_st = document.body.scrollTop + distance + "px";
	                         $("body").animate({scrollTop: end_st},400);

	                         //alert(document.body.scrollTop);alert(end_st);
	                      }
	                      else if(direction == "down")//当向下滑动手指时令当前页面记数器减1
	                      {
	                         //document.body.scrollTop -= distance;
	                        // alert(document.body.scrollTop);
	                         var end_st = document.body.scrollTop - distance;
	                         if(end_st < 0) end_st=0;
	                         end_st += "px";
	                         $("body").animate({scrollTop: end_st},400);
	                         // alert("下滑");
	                         //alert(document.body.scrollTop);alert(end_st);
	                      }

	                      //alert(distance + "," + duration);
	                      alert("你用"+fingerCount+"个手指以"+duration+"秒的速度向" + direction + "滑动了" +distance+ "像素 ");
					    }
					});		
				});
			},
			//绑定删除按钮事件
			bindDelBtnClick : function(){
				var btn_sler = this_obj.func_set.item_selector_gen_func.genItemDelBtnSelr();
				$(btn_sler).click(function(event) {
					/* Act on the event */
					//alert("ok");
					//调用处理函数
					this_obj.func_set.handle_event_func.handleDelBtnClick(this);
				});
			},

			//绑定选择框事件
			bindSelBtnClick : function(){
				var btn_sler = this_obj.func_set.item_selector_gen_func.genItemSelBtnSelr();
				//alert(btn_sler);
				$(btn_sler).click(function(event) {
					//alert("ok");
					this_obj.func_set.handle_event_func.handleItemSelBtnClick(this);
	       	 	});
			},

			//绑定数量改变按钮
			bindItemCountChgBtnClick : function(){
				//绑定减按钮
				var btn_sler = this_obj.func_set.item_selector_gen_func.genCountDecBtnSelr();//alert(btn_sler);
				$(btn_sler).click(function(event) {
		            /* Act on the event */
		            this_obj.func_set.handle_event_func.handleItemCountDecBtnClick(this);
		        });

		        //绑定加按钮
				var btn_sler = this_obj.func_set.item_selector_gen_func.genCountIncBtnSelr();//alert(btn_sler);
				$(btn_sler).click(function(event) {
		            /* Act on the event */
		            this_obj.func_set.handle_event_func.handleItemCountIncBtnClick(this);
		        });

			},

			//绑定全选按钮
			bindAllChkBtnClick :  function(){
				$(".chk_all").each(function(index, el) {
					var i_this = this;
					$(this).click(function(event) {
						/* Act on the event */
						this_obj.func_set.handle_event_func.handleChkAllBtnClick(i_this);
					});
					
				});
			},

			//绑定条目计数框的鼠标焦点事件
			bindItemCounterInputFocus : function(){
				var btn_sler = this_obj.func_set.item_selector_gen_func.genItemCounterInputSelr();//alert(btn_sler);
				$(btn_sler).change(function(event) {
		            /* Act on the event */
		            this_obj.func_set.handle_event_func.handleItemCounterInputChg();
		        });

			},
		};//事件相关绑定函数集结束

		////事件相关的处理函数
		this_obj.func_set.handle_event_func = {
			//处理子条目元素向左滑动事件
			handleSubItemSwipeLeft : function(i_this){
				//设置最左边的列的宽度为0
				var c_width = this_obj.sys_opt.sub_item_chg_col_width;
				var c_sler = this_obj.func_set.item_selector_gen_func.genSubItemColRelativeSelr(1);
				//alert($(i_this).html());
				$(i_this).find(c_sler).attr("style","width:0;");
				//alert($(i_this).find(c_sler).html());

				//设置右边的列的宽度为正常宽度
				var c_sler = this_obj.func_set.item_selector_gen_func.genSubItemColRelativeSelr(4);
				$(i_this).find(c_sler).attr("style","width:"+c_width+";");
			},
			//处理子条目元素向右滑动事件
			handleSubItemSwipeRight : function(i_this){
				//设置最右边的列的宽度为0
				var c_width = this_obj.sys_opt.sub_item_chg_col_width;
				var c_sler = this_obj.func_set.item_selector_gen_func.genSubItemColRelativeSelr(4);
				$(i_this).find(c_sler).attr("style","width:0; display:none;");

				//设置左边边的列的宽度为正常宽度
				var c_sler = this_obj.func_set.item_selector_gen_func.genSubItemColRelativeSelr(1);
				$(i_this).find(c_sler).attr("style","width:"+c_width+";");
			},

			//处理子条目滑动事件,由内部调用
			handleSubItemSwipeEvent : function(){
			},


			//处理删除按钮点击事件
			handleDelBtnClick : function(i_this){
				//删除当前条目
				$(i_this).parent().remove();
				//计算总计
				this_obj.func_set.el_status_opt_func.calcTotal();
			},

			//处理选择框处理事件
			handleItemSelBtnClick : function(i_this){
				//设置项目的选择状态
	            this_obj.func_set.el_status_opt_func.setItemSelStatus(i_this,1);

				//计算总计
				this_obj.func_set.el_status_opt_func.calcTotal();
			},


			//处理条目数量减少按钮点击事件
			handleItemCountDecBtnClick : function(i_this){
				this_obj.func_set.handle_event_func.handleItemCountChg(i_this,0);
			},
			//处理条目数量增加按钮点击事件
			handleItemCountIncBtnClick : function(i_this){
				this_obj.func_set.handle_event_func.handleItemCountChg(i_this,1);
			},

			//处理全选按钮点击事件
			handleChkAllBtnClick : function(i_this){
				var btn_sler = this_obj.func_set.item_selector_gen_func.genItemSelBtnSelr();//alert(btn_sler);
				var img_url = this_obj.sys_opt.img_url;
				//判断当前是否已经全选
				if($(i_this).parent().hasClass('all_been_chk'))
				{
					//已经被全选
					//取消选择全部
					$(btn_sler).each(function(index, el) {
						this_obj.func_set.el_status_opt_func.setItemSelStatus(this,3);
					});

					$(i_this).parent().find('.chk_all img').attr("src",this_obj.func_set.sub_el_ctrl_code_gen_func.genItemBeenSelSymPic());
					$(i_this).parent().removeClass('all_been_chk');
				}
				else
				{
					//没有被全选
					//选择全部
					$(btn_sler).each(function(index, el) {
						this_obj.func_set.el_status_opt_func.setItemSelStatus(this,2);
					});

					$(i_this).parent().find('.chk_all img').attr("src",this_obj.func_set.sub_el_ctrl_code_gen_func.genItemUnSelSymPic());
					$(i_this).parent().addClass('all_been_chk');
				}
				//计算总计
				this_obj.func_set.el_status_opt_func.calcTotal();				
			},

			//处理条目计数器输入框输入值改变事件
			handleItemCounterInputChg : function(){
				//alert("ok");
				//计算总计
				this_obj.func_set.el_status_opt_func.calcTotal();	
			},



			///////////私有函数////////////////////////////////////
			//处理条目数量改变,指定改变类型,0-减少,1-增加
			handleItemCountChg : function (i_this, chg_type){
				//获取当前值
	            var cur_val = $(i_this).parent().find('input').val();
	            //alert(cur_val);
	            //判断当前操作
	            if(chg_type == 1)
	            {
	                //增加
	                cur_val = parseInt(cur_val) + 1;
	            }
	            else{
	                //减少
	                cur_val = parseInt(cur_val) - 1;
	                if (cur_val < 1) {cur_val=1};
	            }

	            $(i_this).parent().find('input').val(cur_val);


				//计算总计
				this_obj.func_set.el_status_opt_func.calcTotal();	
			},
		};//事件相关的处理函数

		///ajax数据返回处理函数
		this_obj.func_set.ajax_ret_func = {

		};//ajax数据返回处理函数

		////子元素操作函数集
		this_obj.func_set.sub_el_operation_func = {
		};//子元素操作函数集

		////子元素项选择器生成函数集
		this_obj.func_set.item_selector_gen_func = {
			//生成子条目元素的选择器
			genSubItemElSelr : function(){
				return this_obj.sys_opt.selector + " ." + this_obj.sys_opt.sub_item_el_class_name;
			},

			//生成子条目中项的选择器,设置列的索引,从1开始
			genSubItemColSelr : function(index){
				return this_obj.func_set.item_selector_gen_func.genSubItemElSelr() + " ." + this_obj.sys_opt.sub_item_col_class_name + ":nth-child(" + index + ")";
			},

			//生成子条目中的项的相对选择器,也就是生成子条目本身层之后的选择器
			genSubItemColRelativeSelr : function(index){
				index = index - 1;
				return " ." + this_obj.sys_opt.sub_item_col_class_name + ":eq(" + index + ")";
			},

			//生成删除按钮的选择器
			genItemDelBtnSelr : function(){
				return this_obj.func_set.item_selector_gen_func.genSubItemColSelr(4);
			},

			//生成选择按钮的选择器
			genItemSelBtnSelr : function(){
				return this_obj.func_set.item_selector_gen_func.genSubItemElSelr() + " ." + this_obj.sys_opt.sel_btn_cname;
			},

			//生成数量减少按钮选择器
			genCountDecBtnSelr : function(){
				return this_obj.func_set.item_selector_gen_func.genSubItemElSelr() + " ." + this_obj.sys_opt.item_cnt_dec_btn_cname;
			},
			//生成数量增加按钮选择器
			genCountIncBtnSelr : function(){
				return this_obj.func_set.item_selector_gen_func.genSubItemElSelr() + " ." + this_obj.sys_opt.item_cnt_inc_btn_cname;
			},
			//生成条数数量计数器选择器
			genItemCounterInputSelr : function(){
				return this_obj.func_set.item_selector_gen_func.genSubItemElSelr() + " ." + this_obj.sys_opt.item_conter_in_cname + " input";
			},
		};//子元素项选择器获取函数集结束

		////条件判断函数集
		this_obj.func_set.condition_judge_func = {
		}//条件判断函数集

		////获取插件内部数据
		this_obj.func_set.get_plg_data_func = {

		}

		////显示或隐藏函数集
		this_obj.func_set.area_display_func = {

		}//显示或隐藏函数集结束

		///元素状态设置函数集
		this_obj.func_set.el_status_opt_func = {
			//设置条目选择,可指定是反选还是选择指定,1-表示反选,2-表示选择,3-表示不选择
			setItemSelStatus : function(i_this,sel_type){
				var img_url = this_obj.sys_opt.img_url;

				var sel_obj = $(i_this).parent().parent();
				var img_str = "";
				var ac_sel = false;
				var item_sel_cname = this_obj.sys_opt.item_been_sel_cname;
				switch(sel_type)
				{
					case 1:
					//反选
						if(sel_obj.hasClass(item_sel_cname))
			            {
			                //已被选择
			                img_str = img_url+"10.png";
			                ac_sel = false;
			            }
			            else{
			            	//未被选择
			                img_str = img_url+"4.png";
			                ac_sel = true;
			            }	
					break;
					case 2:
						//选择
			            img_str = img_url+"4.png";
			            ac_sel = true;

					break;
					case 3:
						//不选择
			                img_str = img_url+"10.png";
			                ac_sel = false;
					break;
					default:
					break;

				}

		        //设置
		        $(i_this).attr("src",img_str);
		        //alert(ac_sel);
		        //alert($(i_this).html());
		        if(ac_sel)
		        {
		        	sel_obj.addClass(item_sel_cname);
		        }
		        else{
		        	sel_obj.removeClass(item_sel_cname);
		        }
			},		

			//计算总计
			calcTotal : function(){
				//计算总价
				var total_cptl = 0;
				var goods_count = 0;
				var item_sel_sler = "." + this_obj.sys_opt.item_been_sel_cname;
				var counter_sler = "." + this_obj.sys_opt.item_conter_in_cname + " input";
				var price_sler = "." + this_obj.sys_opt.item_price_info_cname + " .pi_value";
				$(item_sel_sler).each(function(index, el) {
					//alert("ok");
					var t_count = $(this).find(counter_sler).val();    //数量
					var pre_price = $(this).find(price_sler).html();   //单价

					var cptl = t_count*pre_price;

					total_cptl += cptl;
					goods_count = parseInt(goods_count) + parseInt(t_count);
				});

				//alert(total_cptl);
				//设置
				$(".total_area .total_cptl").html(total_cptl);
				$(".total_area .total_cnt").html(goods_count);
			},
		}
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
		//插入到对象表中
		Cart.allCtlrObj.push(this_obj);

		return this_obj;
	},//initCtrl

	//所有对象
	allCtlrObj:[],

	//关闭所有的对象
	closeAllCtrl:function(){
		$.each(Cart.allCtlrObj,function(index, el) {
			this.closeArea();
		});
	},

}//Cart class
















