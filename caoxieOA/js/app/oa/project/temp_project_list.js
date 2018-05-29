
PROJECT_LIST_PAGE = {
	init:function(){
		this.loadGrid();
		this.addEvent();
	},
	
	initDom:function(){
		
	},
	
	loadGrid:function(){
		var self = this;
		var data = {
			list:[{
				id: 0,
				title: '完成OA开发任务',
				beginDate: '2016-09-01',
				endDate: '2016-09-30',
				schedule: 45,
				renwu: 13,
				change: '梁永恩'
			},{
				id: 1,
				title: '建立公司制度',
				beginDate: '2016-09-01',
				endDate: '2016-09-30',
				schedule: 15,
				renwu: 13,
				change: '梁永恩'
			},{
				id: 2,
				title: '建立公司制度',
				beginDate: '2016-09-01',
				endDate: '2016-09-30',
				renwu: 13,
				schedule: 15,
				change: '梁永恩'
			},{
				id: 3,
				title: '建立公司制度',
				beginDate: '2016-09-01',
				endDate: '2016-09-30',
				renwu: 13,
				schedule: 15,
				change: '梁永恩'
			}]
		};
		var list = {};
		var projectDom = template('projectTemp', data);
		$('.project-list').html(projectDom);
		$.each(data.list,function(i, item){
			$('#table_tr_' + item.id).data('item',item);
		});
		$('.project-list').find('.project-actions a').click(function(e){
			e.stopPropagation();
			var id = $(this).attr('p-id');
			var type = $(this).attr('type');
			var row = $('#table_tr_' + id).data('item');
			switch(type){
				case 'del':
				    self.removeTr(id);
				    break;
				case 'lock':
					self.lockTr(id);
					break;
				case 'edit':
					self.editTr(id);
					break;
				case 'list':
					self.infoTr(id);
					break;
			}
		});
		
		$('.project-list').find('.user').bind('click',function(e){
			Public.memberCard(this,{
				id: 1,
				img: '../../../img/avatar.jpg',
				name: '梁XX',
				bumen: '研发',
				zhiwu: '（暂未填写）',
				phone: 13312233444,
				email: '（暂未填写）'
			})
		});
	},
	
	addEvent:function(){
		$('.project-list table tr').hover(function(e){
			$('.project-list .project-actions .project-btn-group').hide();
			$(this).find('.project-btn-group').show();
		});
		
		$('#btn-add-project').on('click',function(e){
			Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				closeBtn: 0,
				width: 700,
				title: '新建项目',
				content: "add.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: "正在保存，请稍后..."
					});
				}
			});
		});
	},
	
	/**
	 * 删除移除行
	 * @param {Object} id
	 */
	removeTr:function(id){
		$('#table_tr_' + id).remove();
	},
	
	/**
	 * 锁定行
	 * @param {Object} id
	 */
	lockTr:function(id){
		console.log(555555555555);
	},
	
	// 修改项目信息
	editTr:function(id){
		Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				closeBtn: 0,
				width: 700,
				title: '新建项目',
				content: "iconClick/modify.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: "正在保存，请稍后..."
					});
				}
			});
	},
	
//	// 查看项目详细信息
	infoTr:function(id){
		Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				closeBtn: 0,
				width: 700,
				title: '新建项目',
				content: "iconClick/info.html",
				ok:function(){
					parent.Public.tips({
						type: 0,
						content: "正在保存，请稍后..."
					});
				}
			});
	},
}
PROJECT_LIST_PAGE.init();