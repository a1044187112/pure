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
			$("#add_system").on("click",function(){
    		Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '添加制度',
				content: "announcementSystem_add.html"
			})
			
    });
    $(".edit_system").on("click",function(){
    		Public.sidePanel({
				icon: 'fa-pencil',
				type: 1,
				title: '编辑制度',
				content: "announcementSystem_add.html"
			})
    		
    		event.stopPropagation();
			
    });
    
     $(".delete_system").on("click",function(){
    		
    		event.stopPropagation();
			
    });
       $(".feed-element").on("click",function(){

        	Public.sidePanel({
				icon: 'fa-search',
				type: 1,
				title: '制度',
				content: "announcementSystem_see.html"
			});
        })
	}
};


THISPAGE.init();
