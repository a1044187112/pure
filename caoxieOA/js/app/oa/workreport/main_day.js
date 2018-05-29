var rowDate = [],rowIndex = 0,
DAYMAINPAGE = {
	
	init:function(){
		this.initDom();
		this.loadTable();
		this.addEvent();
	},
	
	initDom:function(){
	},
	
	loadTable:function(){
		rowDate =  [{
				date: '2016年8月25日',
				address:'未提交',
				equipment: '   0 ',
				time: '编辑'
			},{
				date: '2016年8月25日',
				address:'未提交',
				equipment: '0 ',
				time: '编辑'
			},{
				date: '2016年8月25日',
				address:'未提交',
				equipment: '0 ',
				time: '编辑'
			},{
				date: '2016年8月25日',
				address:'09-05 16:58',
				equipment: '0 ',
				time: '待审批'
			}];
		var data = {
			status: true,
			list:rowDate
		};
		var tableDom = template('table-tmp', data);;
		$('#table-content').html(tableDom);
	},
	
	
	
	addEvent:function(){
		//搜索条件切换
		$('.widget').bind('click',function(){
			$('.widget').addClass("cfilter");
			$(this).removeClass("cfilter");
			
			$('.widget').find("i").removeClass("fa-folder-open-o");
			$(this).find("i").addClass("fa-folder-open-o");
        });
        
        $('.widget').bind('click',function(){
			$('.widget').addClass("cfilter");
			$(this).removeClass("cfilter");
			
			$('.widget').find("i").removeClass("fa-folder-open-o");
			$(this).find("i").addClass("fa-folder-open-o");
        });
//      $(document).click(function(){
//		    $('#add-user-div').click(function(){
//		      	return false;
//		    })
//	    	$("#add-user-div").css('display','none');
//	    });

        //添加评审人
        $('#add-btn').on('click',function(e){
			$.dialog({
				width: 410,
				height: 360,
				title: '选择权限',
				content: 'url:page/select/select_users.html',
				data: {
					skey : null
				},
				lock: true,
				ok: function(){
					if(typeof this.content.callback === 'function'){
						var data = this.content.callback();
						self.$_right.find('input').val(data.values);
						self.$_right.data("contactInfo", data.objs);
						console.info(data.values);
						console.info(data.objs);
						this.close();
					}
			        return false;
				},
				cancel: function(){
			        return true;
				}
			});
		});
		
		//添加可看人员
		$('#add-share-btn').on('click',function(e){
			$.dialog({
				width: 410,
				height: 360,
				title: '选择权限',
				content: 'url:page/select/select_users.html',
				data: {
					skey : null
				},
				lock: true,
				ok: function(){
					if(typeof this.content.callback === 'function'){
						var data = this.content.callback();
						self.$_right.find('input').val(data.values);
						self.$_right.data("contactInfo", data.objs);
						console.info(data.values);
						console.info(data.objs);
						this.close();
					}
			        return false;
				},
				cancel: function(){
			        return true;
				}
			});
		});
	    
	},
	
	//编辑
	edit:function(index){
		console.info(rowDate[index])
		Public.sidePanel({
			icon: 'fa-edit',
			type: 1,
			title: '编辑简报',
			content: "edit.html",
			autoClose:false
		})
	},
	
	//查看
	info:function(index){
		console.info(rowDate[index])
		Public.sidePanel({
			icon: 'fa-file-text-o',
			type: 1,
			title: '我的日报',
			content: "info.html",
		})
	},
	
	
};

DAYMAINPAGE.init();
