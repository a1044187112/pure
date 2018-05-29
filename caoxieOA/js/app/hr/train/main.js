var add_plan = "active1";
var add_common = "couesr1";
var addForm_type;
THISPAGE = {

	init: function() {
		this.initDom();
		this.addEvent();
	},

	initDom: function() {
		
		/* 给编辑添加点击事件*/
		
		$("#editFrom").on("click", function() {
			
			/* 判断选择的是培训计划 进行滑动编辑*/
			
			if(add_plan === "active1") {
				var id = $("#grid").jqGrid('getGridParam', 'selarrrow');
				
				/* 判断是否选择单选   多选和不选弹框提示*/
				
				if(id.length != 1) {
					parent.Public.tips({type: 1, content : '请选择一向继续编辑!'});
					return;
				}
				Public.sidePanel({
					icon: 'fa-plus',
					type: 1,
					title: '编辑',
					content: "addPlay.html"
				});
				addForm_type='编辑';
				
				/* 判断选择的是培训课程 进行弹窗编辑*/
				
			} else if(add_plan === "active2") {
				
				/* 培训课程下的分类表格 进行依次判断是否选择单选   多选和不选弹框提示*/
				
				var idList =[];
				var id = $("#course1_grid").jqGrid('getGridParam', 'selarrrow');
				var id1 = $("#course2_grid").jqGrid('getGridParam', 'selarrrow');
				var id2 = $("#course3_grid").jqGrid('getGridParam', 'selarrrow');
				var id3 = $("#course4_grid").jqGrid('getGridParam', 'selarrrow');

				if(!(id.length == 1 || id1.length == 1 || id2.length == 1 || id3.length == 1)) {
				    parent.Public.tips({type: 1, content : '请选择一向继续编辑!'});
					return;
				}
				parent.Public.openWin('page/hr/train/addTrainCourse.html', '编辑课程', 900, 500, function(index, layero) {
					
					//		var iframeWin = window[layero.find('iframe')[0]['name']];

				});
				
			} 

		});
		/*初始化隐藏div只显示第一个*/
		$("#allDiv").children('div').css('display', 'none');
		$("#allDiv").find("#div_active1").css('display', 'block');
		jQuery.getScript('../../../js/app/hr/train/course.js', function() {
			$("#allTab").find("#tab_couesr1").css('display', 'block');
		});

		/*新增培训计划事件*/
		$('#addOnwFrom').click(function() {
			Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '添加',
				content: "addPlay.html"
			});
			addForm_type='添加';
			
		});
		
	},
	addEvent: function() {

	}
};
/* 培训点击事件*/
function ifopen(e) {
	jQuery.getScript('../../../js/app/hr/train/mainData.js', function() {
		$("#allActive").children('li').removeClass('active');
	    $('#' + e.id).addClass('active');
	    $("#allDiv").children('div').css('display', 'none');
	    $('#div_' + e.id).css('display', 'block');
	    add_plan = e.id;
	})

}
/*课程点击事件*/
function course(e) {
	jQuery.getScript('../../../js/app/hr/train/course.js', function() {
		$("#allCouesr").children('li').removeClass('active');
		$('#' + e.id).addClass('active');
		$("#allTab").children('div').css('display', 'none');
		$('#tab_' + e.id).css('display', 'block');
	});
}
/*课程新增*/
function newAddCommon() {
	parent.Public.openWin('page/hr/train/addTrainCourse.html', '添加课程', 900, 500, function(index, layero) {
		var body = parent.getChildFrame('body', index);
		var iframeWin = window[layero.find('iframe')[0]['name']];

	});
}
function openAddForm(){
	Public.sidePanel({
				icon: 'fa-search',
				type: 1,
				title: '查看',
				content: "seePlay.html"
		});

     addForm_type='查看'	;
}

THISPAGE.init();