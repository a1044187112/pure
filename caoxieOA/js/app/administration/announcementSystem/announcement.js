THISPAGE = {
	
	init:function(){
		this.initDom();
		this.addEvent();

	},
	
    initDom:function(){
    	
    },
	
	getPost:function(){

	},
	
	
	submit:function(){
		
	},
	
	addEvent:function(){
		$("#add_announcement").on("click",function(){
    		Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '添加公告',
				width:850,
				autoClose: false,
				content: "announcementSystem_add.html",
				ok:function(obj){
					ADDPAGE.submit();
				}
			})
			
    });
    $(".edit_announcement").on("click",function(){
    		Public.sidePanel({
				icon: 'fa-pencil',
				type: 1,
				title: '编辑公告',
				content: "announcementSystem_add.html"
			})
    		
    		event.stopPropagation();
			
    });
       $(".media-body").on("click",function(){
        	Public.sidePanel({
				icon: 'fa-search',
				background: '#F0F3F4',
				type: 1,
				title: '公告',
				content: "announcementSystem_see.html"
			});
			
			　event.stopPropagation();
       });
       $(".delete_announcement").on("click",function(){
       	    event.stopPropagation();
       })
	}
};



THISPAGE.init();
