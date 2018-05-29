	ADDTASKPAGE = {
		init:function(){
			this.initDom();
//			this.loadCheckItem();
			this.addEvent();
			// 计算任务检查项完成
			this.taskCarryOut();
		},
		
		initDom:function(){
			toolbar = ['bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color','|','ol', 'ul', 'blockquote', '|','image', 'table'];
			this.editor = new Simditor({
                textarea: $('#note'),
                placeholder: '这里输入文字...',
                toolbar: toolbar,
                height: 150,
                emoji:{
                	imagePath: '../../../img/emoji/'
                },
                upload:{
                	url: '',
                	params: null,
                	fileKey: 'fileDataFileName',
                	connectionCount: 3,
                	leaveConfirm: '正在上传文件'
                }
            });
		},
		
		loadCheckItem:function(){
			var checkItemDatas = {
				list:[{
					id: 1,
					selected: 0,
					text: 'oa日常办公检查',
					time: '2016-09-11'
				},{
					id: 1,
					selected: 1,
					text: 'oa日常办公检查',
					time: '2016-09-11'
				},{
					id: 1,
					selected: 1,
					text: 'oa日常办公检查',
					time: '2016-09-11'
				}]
			};
			
			var checkItemDom = template('temp-project-task-checkItem', checkItemDatas);
			$('#task-check-item').html(checkItemDom);
			$('#task-check-item').find('li').click(function(){
				var _this = $(this);
				var selected = _this.data('selected');
				
			});
		},
		
		addEvent:function(){
			// 添加检查项按钮
			$('#btn-show-add-task').off("click");
			$('#btn-show-add-task').on('click',function(){
				$(this).hide();
				$('.subtask-editor').show();
			});
			// 添加检查项确认按钮
			$('#btn-confirm-stack-add').off("click");
			$("#btn-confirm-stack-add").on("click",function(){
				// 获取输入的text
				var inputText = $(".taskName").val();
				if(inputText==''){
				}else{
					var _html = '<li><a href="javascript:;" class="check-link"><i class="fa fa-square-o" data-select="fa-check-square" data-cancel-select="fa-square-o" ></i> </a><span class="m-l-xs todo-completed">'+inputText+'</span></li>';
					$("#task-check-item").append(_html);
					$('.subtask-editor').hide();
					$('#btn-show-add-task').show();
					ADDTASKPAGE.taskCarryOut();
				}
			});
			//  添加检查项取消按钮
			$('#btn-cencal-stack-add').off("click");
			$('#btn-cencal-stack-add').on('click',function(){
				$('.subtask-editor').hide();
				$('#btn-show-add-task').show();
			});
			
			// 添加描述
			$('#btn-add-remark-show').off("click");
			$('#btn-add-remark-show').on('click',function(e){
				$(this).hide();
				$('.subtask-remark').show();
			});
			// 添加描述下确认按钮
			$(".subtask-remark .confirm").off("click");
			$(".subtask-remark .confirm").on("click",function(){
				// 获取输入的text
				var inputText = $(".subtask-remark .remark").val();
				if(inputText==''){
				}else{
					$(".task_description").html(inputText);
					$('.subtask-remark').hide();
					$('#btn-add-remark-show').show();
				}
			});
			
			// 添加描述下取消按钮
			$('.subtask-remark .cencal').off("click");
			$('.subtask-remark .cencal').on('click',function(e){
				$('.subtask-remark').hide();
				$('#btn-add-remark-show').show();
			});
			
			// 每一项检查项点击事件
			$(".row-item").delegate(".check-link i","click",function(){
				if($(this).hasClass("selected")){
					$(this).removeClass("selected").removeClass($(this).attr("data-select")).addClass($(this).attr("data-cancel-select"));
				}else{
					$(this).addClass("selected").addClass($(this).attr("data-select")).removeClass($(this).attr("data-cancel-select"));
				}
				ADDTASKPAGE.taskCarryOut();
			});
		},
		
		taskCarryOut : function(){
			// 检查项的项数
			var num_task = $("#task-check-item>li").length;
		    // 已完成的检查项项数
		    var num_task_carryout = $("#task-check-item .check-link .selected").length;
		    // 计算百分比
		    var num_proportion = parseInt(num_task_carryout*100/num_task);
		    $(".progress .progress-bar-info").css("width",num_proportion+"%");
		    $(".progress .progress-bar-info").text(num_proportion+"%");
		},
	};
	ADDTASKPAGE.init();