var $select_grid = $("#select-grid"),curRow, curCol,
copyvalue_id="",
choicetype="",
WuLiaoPage = {
	
	init:function(){
		this.initDom();
		this.initGrid();
		this.addEvent();
	},
	
	initDom:function(){
		var _self = this;
		_self.$_radio_classes = $('#radio_classes');
		_self.radioClasses = _self.$_radio_classes.cssRadio({
			 callback:function(a){
			     var v = a.find('input').val();
			   
		     }
		});
	},
	
	initGrid:function(){
		var _self = this,
		e = [{
			id: "1"
		}, {
			id: "2"
		}, {
			id: "3"
		}, {
			id: "4"
		}];
		
		$select_grid.jqGrid({
			data: e,
			datatype: "clientSide",
			autowidth: !0,
			height:140,
			gridview: !0,
			rownumbers: !0,
			gridview: !0,
			onselectrow: !1,
			styleUI : 'Bootstrap',
			colModel:[{
				name: "operating",
				label: " ",
				width: 50,
			    fixed: !0,
				formatter: Public.billsOper,
				align: "center"
		    },{
				name: "goods",
				label: "物品名称",
				width: 110,
				title: !1,
				editable: !0
			},{
				name: "boxNumber",
				label: "单位",
				width: 60,
				title: !1,
				align: 'center',
				editable: !0
			},{
				name: "number",
				label: "数量",
				width: 60,
				title: !1,
				editable: !0
			},{
				name: "remark",
				label: "备注",
				width: 90,
				title: !1,
				align: 'center',
				editable: !0
			}],
			cmTemplate: {
			    sortable: !1,
				title: !1
			},
			shrinkToFit: !0,
			forceFit: !0,
			rowNum: 1e3,
			cellEdit: !0,
			forceFit: !0,
			footerrow: !0,
			userDataOnFooter: !0,
			cellsubmit: "clientArray",
			localReader: {
				root: "rows",
				records: "records",
				repeatitems: !1,
				id: "id"
			},
			jsonReader: {
				root: "rows",
				records: "records",
				repeatitems: !1,
				id: "id"
			},
			loadComplete:function(t){
				//alert(t.rows);
			},
			gridComplete:function(){
				
			},
			afterEditCell:function(t, e, i, a, n){
				//alert(e);
			},
			formatCell: function() {
				
			},
			beforeSaveCell: function(t, e, i) {
				//编辑完成后触发
				setTimeout(function() {
					$select_grid.jqGrid("editCell", curRow, 2, !0);
					$select_grid.jqGrid("setCell", curRow, 2, "");
				}, 10);
			},
			afterSaveCell: function(t, i, a, n, r){
				switch(i){
				    case "number":
				    	_self.calTotal();
				    break;
				}
			},
			userData: {
				goods: "合计：",
				number: 0
			},
		});
	},
	
	addEvent:function(){
		var _self = this;
		$('.wuliao-warp').on('click','#btn-back',function(e){
			THISPAGE.sidePanel.options.closeBtn = 1;
			THISPAGE.sidePanel.realod('addNav.html');
			e.stopImmediatePropagation();
		});
		
		//新增分录
		$('.select-table-warp').on('click', '.ui-icon-plus', function(e){
			var rowId = $(this).parent().data('id');
			var newId = $('#select-grid tbody tr').length;
			var datarow = { id: _self.newId };
			var su = $("#select-grid").jqGrid('addRowData', _self.newId, datarow, 'after', rowId);
			if(su) {
				$(this).parents('td').removeAttr('class');
				$(this).parents('tr').removeClass('selected-row ui-state-hover');
				$("#select-grid").jqGrid('resetSelection');
				_self.newId++;
			}
		});
		//删除分录
		$('.select-table-warp').on('click', '.ui-icon-trash', function(e){
			if($('#select-grid tbody tr').length === 2) {
				parent.Public.tips({type: 2, content: '至少保留一条分录！'});
				return false;
			}
			var rowId = $(this).parent().data('id');
			var su = $("#select-grid").jqGrid('delRowData', rowId);
			if(su) {
				//_self.calTotal();
			};
		});
		
		//取消分录编辑状态
		$(document).bind('click.cancel', function(e){
			console.log(curRow + " --------" + curCol);
			if(!$(e.target).closest(".ui-jqgrid-bdiv").length > 0 && curRow !== null && curCol !== null){
			   console.log(curRow + " --------" + curCol + " == " + $(e.target).closest(".ui-jqgrid-bdiv").length)
			   $("#select-grid").jqGrid("saveCell", curRow, curCol);
			   curRow = null;
			   curCol = null;
			};
		});
		
		
		this.bindEventForEnterKey();
		
		
		$('#select-goods').bind('click',function(){
			parent.Public.openWin("page/oa/approval/choicegoods.html",'选择物品',600,500,function(index,layero){
				var iframeWin = parent.window[layero.find('iframe')[0]['name']];
				iframeWin.choicegoods_submit();
			});
		});
	},
	
	calTotal:function(){
		for (var t = $select_grid.jqGrid("getDataIDs"), e = 0, i = 0, a = 0, n = 0, r = 0, o = 0, s = t.length; s > o; o++) {
			var l = t[o],
			d = $select_grid.jqGrid("getRowData", l);
			d.number && (e += parseFloat(d.number));
		}
		$select_grid.jqGrid("footerData", "set", {
			number: e
		});
	},
	
	bindEventForEnterKey:function() {
		Public.bindEnterSkip($("#add-form"), function() {
			$("#select-grid tr.jqgrow:eq(0) td:eq(0)").trigger("click")
		});
	},
	
	copyxuqiu:function(id){
		copyvalue_id=id;
		var copy_value=$("#"+id).val();
		//赋值
		textareavalue=copy_value;
		parent.Public.openWin("page/oa/approval/copyvalue.html",'申请物品备注',500,400,function(index,layero){
			var iframeWin = parent.window[layero.find('iframe')[0]['name']];
			iframeWin.copyxuqiu();
		});
		
	}
};
WuLiaoPage.init();