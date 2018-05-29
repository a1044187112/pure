FOUNDPAGE = {
	init:function(){
		this.initDom();
		this.loadData();
		this.addEvent();
	},
	
	initDom:function(){
		
	},
	
	loadData:function(){
		var self = this;
		var memberData = [{
			id: 0,
			name: '老莫',
			img: '../../../img/avatar.jpg'
		},{
			id: 1,
			name: '王宏',
			img: '../../../img/avatar.jpg'
		}];
		
		self.buildMember('member-list',memberData);
		
	},
	
	getPost:function(){
		
	},
	
	addEvent:function(){
		var self = this;
		
		self.found_group_range = $("#found_group_range").combo({
			data: [{
				id: 0,
				name: "私有群组"
			},{
				id: 1,
				name: "公开群主"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 420,
			defaultSelected: null || 0,
			cache: false
		}).getCombo();
		
		var liData = {
			list:[{
				id: 0,
				img:'../../../img/avatar.jpg',
				name:'测试用户',
				selected: true
			},{
				id: 1,
				img:'../../../img/avatar.jpg',
				name:'测试用户2',
				selected: false
			}]
		};
		
		var userLiDom = template('memberLiTemp', liData);
		
		$('#btn_addCharnge').click(function(e){
			var dd = $(this).popbox({
				direction: 'right',
				title:'项目负责人',
				closeBut: !0,
				content: userLiDom,
				onFun:function(obj){
					
				}
			});
		});
		
		var treeData ={
			list: [{
				id: 1,
				text: '行政部',
				nodes:[{
					id: 01,
					showImg: true,
					img: '../../../img/avatar.jpg',
					selected: false,
					text: '梁XX',
				},{
					id: 02,
					showImg: true,
					img: '../../../img/avatar.jpg',
					selected: true,
					text:'老莫',
				}]
			},{
				id: 2,
				text: '设计部',
				nodes:[{
					id: 01,
					showImg: true,
					img: '../../../img/avatar.jpg',
					selected: true,
					text: '梁XX',
				},{
					id: 02,
					showImg: true,
					img: '../../../img/avatar.jpg',
					selected: false,
					text:'老莫',
				}]
			}]
		};
		
		
		var groupDom = template('groupTreeTemp', treeData);
		$('#btn_addManber').click(function(){
			$(this).popbox({
				title:'组员',
				direction: 'right',
				height: 400,
				content: groupDom,
				onFun:function(p){
					self.userTree();
				}
			});
		});
	},
	
	buildLiMember:function(id, data){
		
	},
	
	userTree:function(){
		var self = this;
		$('.lc-tree>li>a').on('click',function(e){
			var _this = $(this);
			var ul = $(this).next('ul');
			if(ul.is(':hidden')){
				_this.find('.expand-tree-icon i').addClass('active');
				ul.show();
			}else{
				_this.find('.expand-tree-icon i').removeClass('active');
				ul.hide();
			}
			
		});
		
		$('.lc-tree ul li>a').on('click',function(e){
			var _this = $(this);
			if(_this.data('selected') == 0){
				_this.find('i').remove();
				_this.data('selected',1);
				self.selDelMember(_this.data('userid'));
			}else{
				_this.data('selected',0);
				_this.append('<i class="fa fa-check"></i>');
				self.selAddMember('member-list',{
					id: _this.data('userid'),
					img: '../../../img/avatar.jpg',
					name: _this.data('name')
				});
			}
		});
	},
	
	buildMember:function(id,data){
		var items = '';
		$.each(data,function(i, item){
			items += [
			    '<li class="member" id="member-'+item.id+'">',
			       '<a href="javascript:;" uib-tooltip="'+item.name+'">',
			           '<div class="lc-avatar lc-avatar-40">',
			               '<img src="'+item.img+'" class="member-avatar-30"  />',
			           '</div>',
			           '<span data-memberid="'+item.id+'" class="avatar-close"></span>',
			       '</a>',
			    '</li>'
			].join('');
		});
		
		var memberDom = $(items);
		memberDom.find('a').hover(function(){
			$(this).find('.avatar-close').css({'visibility':'visible'});
		},function(){
			$(this).find('.avatar-close').css({'visibility':'hidden'});
		});
		
		memberDom.find('a').click(function(e){
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
		
		memberDom.find('.avatar-close').bind('click',function(e){
			var memberId = $(this).data('memberid');
			$('#member-' + memberId).remove();
		});
		
		$('#' + id).html(memberDom);
	},
	
	/**
	 * 选择新增人选
	 * @param {Object} id
	 * @param {Object} item
	 */
	selAddMember:function(id,item){
		var itemDom = [
			    '<li class="member" id="member-'+item.id+'">',
			       '<a href="javascript:;" uib-tooltip="'+item.name+'">',
			           '<div class="lc-avatar lc-avatar-40">',
			               '<img src="'+item.img+'" class="member-avatar-30"  />',
			           '</div>',
			           '<span data-memberid="'+item.id+'" class="avatar-close"></span>',
			       '</a>',
			    '</li>'
			].join('');
			
		var memberDom = $(itemDom);
		memberDom.find('a').hover(function(){
			$(this).find('.avatar-close').css({'visibility':'visible'});
		},function(){
			$(this).find('.avatar-close').css({'visibility':'hidden'});
		});
		
		memberDom.find('a').click(function(e){
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
		
		memberDom.find('.avatar-close').bind('click',function(e){
			var memberId = $(this).data('memberid');
			$('#member-' + memberId).remove();
		});
		
		$('#' + id).append(memberDom);
	},
	
	/**
	 * 删除选中关联人
	 * @param {Object} memberId
	 */
	selDelMember:function(memberId){
		$('#member-' + memberId).remove();
	},
	
	submit:function(){
		
	}
};

FOUNDPAGE.init();
