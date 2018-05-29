PROJECT_MAIN_PAGE = {
	
	init:function(){
		this.loadTask();
		this.addEvent();
		//ProjectGannt.init();
	},
	
	initDom:function(){
		
	},
	
	loadTask:function(){
		var data = {
			taskItems:[{
				title: '任务列表',
				type: 0,
				list:[{
					name: '任务列表也可以拖动排序，拖动左侧的任务列表试试看',
					time: '2016-09-11'
				},{
					name: 'OA日常模块开发',
					time: '2016-09-11'
				},{
					name: '新建任务',
					time: '2016-09-11'
				},{
					name: '新建任务',
					time: '2016-09-11'
				},{
					name: 'OA日常模块开发',
					time: '2016-09-11'
				},{
					name: '新建任务',
					time: '2016-09-11'
				},{
					name: '新建任务',
					time: '2016-09-11'
				},{
					name: 'OA日常模块开发',
					time: '2016-09-11'
				},{
					name: '新建任务',
					time: '2016-09-11'
				}]
			},{
				title: '进行中',
				type: 1,
				list:[{
					state: 0,
					name: '新建任务',
					time: '2016-09-11'
				},{
					state: 1,
					name: 'OA日常模块开发',
					time: '2016-09-11'
				},{
					state: 2,
					name: '新建任务',
					time: '2016-09-11'
				}]
			},{
				title: '已完成',
				type: 2,
				list:[{
					name: '新建任务',
					time: '2016-09-11'
				},{
					name: 'OA日常模块开发',
					time: '2016-09-11'
				},{
					name: '新建任务',
					time: '2016-09-11'
				}]
			}]
		};
		
		var taskDom = template('taskTemp', data);
		$('.wrapper-content').html(taskDom);
	},
	
	addEvent:function(){
		
		$('#btn-back').on('click',function(e){
			THISPAGE.loadTemp('temp_project_list.html');
			$('.sidebard-panel').animate({left: "0px"});
		    $('.right-wrap').animate({left: '225px'});
		});
		// 新建任务按钮点击事件
		$(".task_list").delegate(".new_task_item","click",function(){
			$(this).css("display","none");
			$(this).next(".new_task_info").css("display","block");
		});
		// 新建任务点击确认按钮
		$(".task_list").delegate(".nt_textarea  .n_t_confirm","click",function(){
			// 获取输入的内容 
			var inputText = $(this).prev(".n_t_text").val();
			var _html = '';
			if(inputText==''){  // 输入为空时不做处理
			}else{
				_html+='<li class="success-element" onclick="TaskItemDetails();"><a class="task_name" href="javascript:;">'+inputText+'</a><div class="agile-detail"><a href="#" class="pull-right btn btn-xs btn-white">张超</a>'+
                                '<i class="fa fa-clock-o"></i> 2015.09.01<span class="label label-danger">紧急</span></div></li>';
                $(this).parents(".new_task_info").prevAll(".connectList").append(_html);
			}
		});
		// 新建任务取消按钮
		$(".task_list").delegate(".nt_textarea .n_t_cancel","click",function(){
			$(this).parents(".new_task_info").css("display","none");
			$(this).parents(".new_task_info").prev().css("display","block");
		});
		
		// 点击新建任务列表
		$(".task_list").delegate(".new_task_list","click",function(){
			$(this).css("display","none");
			$(this).next().css("display","block");
		});
		// 点击新建任务列表下确定按钮
		$(".task_list").delegate(".nt_textInput  .n_t_confirm","click",function(){
			// 获取输入的内容 
			var inputText = $(this).prev(".n_t_input_text").val();
			var _html = ''; 
			var list_html = '';
			if(inputText==''){  // 输入为空时不做处理
			}else{
				_html+='<h3>'+inputText+'</h3><br /><ul class="sortable-list connectList agile-list ui-sortable"> </ul><div class="new_task new_task_item"><i class="fa fa-plus"></i>新建任务</div>'+
                    '<div class="new_task_info nt_textarea"><textarea class="n_t_text"></textarea><button class="n_t_confirm">确定</button><button class="n_t_cancel">取消</button></div>';
				list_html+='<div style="width: 290px;display: inline-block;  margin: 0px 10px 0px 10px;"><div class="ibox" ><div class="ibox-content" style="background: rga(238,236,232);"><div class="new_task new_task_list"><i class="fa fa-plus"></i>新建任务列表</div>'+
					'<div class="new_task_info nt_textInput"><input class="n_t_input_text" placeholder="列表名"></input><button class="n_t_confirm">确定</button><button class="n_t_cancel">取消</button>'+
                      '  </div></div></div></div>';
				$(this).parents(".ibox-content").append(_html);
				$(this).parents(".ibox-content").children(".new_task_list").remove();
				$(this).parents(".ibox-content").children(".nt_textInput").remove();
				$(".task_list").append(list_html);
			}
		});
		// 新建任务列表取消按钮
		$(".task_list").delegate(".nt_textInput .n_t_cancel","click",function(){
			$(this).parents(".new_task_info").css("display","none");
			$(this).parents(".new_task_info").prev().css("display","block");
		});
	}
};

function TaskItemDetails(){
	Public.sidePanel({
		icon: 'fa-plus',
		type: 1,
		closeBtn: 0,
		width: 700,
		title: '任务详细',
		content: "add_task.html",
		ok:function(){
			parent.Public.tips({
				type: 0,
				content: "正在保存，请稍后..."
			});
		}
	});
};

var tasksData =  {
    data:[
        {id:1, text:"Project #2", start_date:"2016-09-12", duration:18,order:10,
            progress:0.4, open: true},
        {id:2, text:"Task #1", 	  start_date:"2016-09-12", duration:8, order:10,
            progress:0.6, parent:1},
        {id:3, text:"Task #2",    start_date:"2016-09-18", duration:8, order:20,
            progress:0.6, parent:1}
    ],
            links:[
    { id:1, source:1, target:2, type:"1"},
    { id:2, source:2, target:3, type:"0"},
    { id:3, source:3, target:4, type:"0"},
    { id:4, source:2, target:5, type:"2"},
]
};

function getCurGanttMode() {
	return $(".gantt-date-modes").find(".active").find("input").val()
}

function projectTaskDetails(n, t){
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
}

function getEvent() {
	if (window.event) return window.event;
	for (func = getEvent.caller; func != null;) {
		var n = func.arguments[0];
		if (n && (n.constructor == Event || n.constructor == MouseEvent || n.constructor == KeyboardEvent || typeof n == "object" && n.preventDefault && n.stopPropagation)) return n;
		func = func.caller
	}
	return null
}

ProjectGannt = {
	isInit: !1,
	events: [],
	init: function() {
		gantt.config.xml_date = "%Y-%m-%d";
		gantt.config.step = 1;
		gantt.config.scale_unit = "month";
		gantt.config.date_scale = "%Y/%m";
		gantt.config.subscales = [{
			unit: "day",
			step: 1,
			date: "%j"
		}];
		gantt.config.scale_height = 50;
		gantt.config.scale_width = 20;
		gantt.templates.date_scale = null;
		gantt.config.grid_width = 500;
		gantt.config.keep_grid_width = !1;
		gantt.config.grid_resize = !0;
		gantt.config.links = {
			finish_to_start: "1",
			start_to_start: "2",
			finish_to_finish: "3",
			start_to_finish: "4"
		};
		gantt.templates.scale_cell_class = function(n) {
			if (n.getDay() == 0 || n.getDay() == 6) return "gantt-weekend"
		};
		gantt.templates.task_cell_class = function(n, t) {
			if (t.getDay() == 0 || t.getDay() == 6) return "gantt-weekend"
		};
		gantt.templates.text_grid = function() {
			return 1
		};
		ProjectGannt.load();
		ProjectGannt.isInit = !0
	},
	load: function() {
		var n, t, i, r, u, f, e, o;
		ProjectGannt.deleteAllEvent();
		gantt.config.columns = [{
			label: "任务名称",
			name: "text",
			tree: !0,
			align: "left",
			width: "*",
			resize: !0,
			template: function(n) {
				var t = n.text;
				return n.type == "project" ? t = "<b>" + n.text + "<\/b>" : n.type == "milestone" && (t = n.progress == 1 ? "<span class='glyphicon glyphicon-flag' style='color:red' ><\/span> " + n.text : "<span class='glyphicon glyphicon-flag' ><\/span> " + n.text), t
			}
		}, {
			label: "开始日期",
			name: "start_date",
			align: "center",
			width: "100"
		}, {
			label: "工期(天)",
			name: "duration",
			align: "center",
			width: "50"
		}, {
			label: "主办人",
			name: "sponsor",
			align: "center",
			width: "100"
		}];
		gantt.config.readonly = !0;
		gantt.config.editable_proprety = "proprety_name";
		gantt.templates.task_text = function(n, t, i) {
			return Math.round(i.progress * 100) + "%"
		};
		gantt.attachEvent("onTaskDblClick", function() {});
		n = gantt.attachEvent("onTaskRowClick", function(n) {
			var i = gantt.getTask(n).isgroup,
				t;
			projectTaskDetails(n, i);
			t = getEvent();
			window.event ? t.cancelBubble = !0 : t.stopPropagation()
		});
		ProjectGannt.events.push(n);
		t = gantt.attachEvent("onTemplatesReady", function() {
			var n = document.createElement("span");
			n.className = "glyphicon glyphicon-fullscreen gantt-fullscreen";
			gantt.toggleIcon = n;
			gantt.$container.appendChild(n);
			n.onclick = function() {
				gantt.getState().fullscreen ? gantt.collapse() : gantt.expand()
			}
		});
		ProjectGannt.events.push(t);
		i = gantt.attachEvent("onExpand", function() {
			var n = gantt.toggleIcon;
			n && (n.className = n.className.replace("glyphicon-fullscreen", "glyphicon-resize-small"))
		});
		ProjectGannt.events.push(i);
		r = gantt.attachEvent("onCollapse", function() {
			var n = gantt.toggleIcon;
			n && (n.className = n.className.replace("glyphicon-resize-small", "glyphicon-fullscreen"))
		});
		ProjectGannt.events.push(r);
		u = gantt.attachEvent("onAfterTaskDrag", function(n, t) {
			var e = gantt.config.drag_mode,
				i = gantt.getTask(n),
				o = gantt.date.date_to_str("%Y-%m-%d"),
				r = i.start_date,
				u = gantt.date.add(i.start_date, i.duration - 1, "day"),
				f, s;
			i.type == "milestone" && (u = r);
			f = Math.round(i.progress * 100);
			r = o(r);
			u = o(u);
			switch (t) {
			case e.resize:
			case e.move:
				s = {
					taskId: n,
					starttime: r,
					endtime: u
				};
				(i.starttime != r || i.endtime != u) && $.ajax({
					type: "post",
					url: getDwUrl() + "DwProjectTask/UpdateGanttTaskTime",
					data: s,
					dataType: "json",
					success: function(n) {
						n.flag == "1" && (layer.msg("已更新", {
							time: 1e3
						}), ProjectGannt.refreshData())
					}
				});
				break;
			case e.progress:
				if (i.type == "project") {
					ProjectGannt.refreshData();
					break
				}
				$("#mod_updatepro").modal("show");
				$("#pro_taskId").val(n);
				$("#pro_progress").val(f);
				$("#pro_explain").val("");
				$("#mod_updatepro").find(".progress-bar").text(f + "%").css("width", f + "%")
			}
		});
		ProjectGannt.events.push(u);
		f = gantt.attachEvent("onLinkClick", function(n) {
			$("#mod_dellink").modal("show");
			var t = gantt.getLink(n),
				i = gantt.getTask(t.source),
				r = gantt.getTask(t.target);
			$("#link_id").val(t.id);
			$("#link_info").text("是否删除【" + r.text + "】的前置任务【" + i.text + "】？")
		});
		ProjectGannt.events.push(f);
		e = gantt.attachEvent("onAfterLinkUpdate", function() {});
		ProjectGannt.events.push(e);
		o = gantt.attachEvent("onAfterLinkAdd", function(n, t) {
			var i = t.source,
				r = t.target,
				u = t.type,
				f = {
					option: 1,
					pretaskid: i,
					taskid: r,
					linktype: u
				};
			$.ajax({
				type: "post",
				url: getDwUrl() + "DwProjectTask/UpdateGanttLinkType",
				data: f,
				dataType: "json",
				success: function(n) {
					n.flag == "1" ? (layer.msg("已更新", {
						time: 1e3
					}), ProjectGannt.refreshData()) : (layer.msg("关联无效", {
						time: 1e3
					}), ProjectGannt.refreshData())
				}
			})
		});
		ProjectGannt.events.push(o);
		gantt.init("gantt_here");
		gantt.parse(tasksData)
	},
	refresh: function() {
		ProjectGannt.isInit && (gantt.clearAll(), ProjectGannt.init(), ProjectGannt.changeMode(getCurGanttMode()))
	},
	deleteAllEvent: function() {
		if (ProjectGannt.events.length) {
			for (var n = 0; n < ProjectGannt.events.length; n++) gantt.detachEvent(ProjectGannt.events[n]);
			ProjectGannt.events = []
		}
	},
	changeMode: function(n) {
		switch (n) {
		case "1":
			gantt.config.scale_unit = "month";
			gantt.config.date_scale = "%Y/%m";
			gantt.config.subscales = [{
				unit: "day",
				step: 1,
				date: "%d"
			}];
			gantt.config.scale_height = 50;
			gantt.templates.date_scale = null;
			break;
		case "2":
			var t = function(n) {
					var t = gantt.date.date_to_str("%m/%d"),
						i = gantt.date.date_to_str("%Y"),
						r = gantt.date.add(gantt.date.add(n, 1, "week"), -1, "day");
					return i(n) + "年" + gantt.date.getISOWeek(n) + "周 " + t(n) + " ~ " + t(r)
				};
			gantt.config.scale_unit = "week";
			gantt.config.step = 1;
			gantt.templates.date_scale = t;
			gantt.config.subscales = [{
				unit: "day",
				step: 1,
				date: "%D"
			}];
			gantt.config.scale_height = 50;
			break;
		case "3":
			gantt.config.scale_unit = "year";
			gantt.config.step = 1;
			gantt.config.date_scale = "%Y";
			gantt.config.min_column_width = 50;
			gantt.config.scale_height = 50;
			gantt.templates.date_scale = null;
			gantt.config.subscales = [{
				unit: "month",
				step: 1,
				date: "%M"
			}]
		}
		gantt.init("gantt_here");
		gantt.render()
	},
	refreshTask: function(n) {
		gantt.refreshTask(n)
	},
	refreshData: function() {
		gantt.clearAll(), gantt.parse(tasksData)
		/*
		$.ajax({
			type: "post",
			url: getDwUrl() + "DwProjectTask/GetGanttInfo",
			data: {
				id: $("#projectId").val()
			},
			dataType: "json",
			success: function(n) {
				n.flag == 1 && (gantt.clearAll(), gantt.parse(n.data))
			},
			error: function(n, t, i) {
				alert(i)
			}
		})*/
	}
};

PROJECT_MAIN_PAGE.init();
