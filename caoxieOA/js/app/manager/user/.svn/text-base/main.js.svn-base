THISPAGE = {
	
	init:function(){
		this.loadTable();
		this.addEvent();
	},
	
	initDom:function(){
		
	},
	
	loadTable:function(){
		var data = {
			status: true,
			list:[{
				id: 1,
				address:'贵州贵安新区',
				equipment: 'pc chrome',
				time: '2016-08-25 00:00:00'
			},{
				id: 1,
				address:'贵州贵安新区',
				equipment: 'pc chrome',
				time: '2016-08-25 00:00:00'
			},{
				id: 1,
				address:'贵州贵安新区',
				equipment: 'pc chrome',
				time: '2016-08-25 00:00:00'
			},{
				id: 1,
				address:'贵州贵安新区',
				equipment: 'pc chrome',
				time: '2016-08-25 00:00:00'
			}]
		};
		var tableDom = template('table-tmp', data);;
		$('#table-content').html(tableDom);
	},
	
	addEvent:function(){
		$('.module-header .nav a').click(function (e) {
			/*var tab = $(this).attr('href');
			$('.module-body div').hide();
			$(tab).show();*/
			e.preventDefault();
		    $(this).tab('show');
		});
		
		Public.uploadFile("#btn-upload","",function(){
			
		});
	}
};

THISPAGE.init();
