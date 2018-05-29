
THISPAGE = {
	
	init:function(){
		this.createGrid();
		this.addEvent();
	},
	
	fileGrid:function(){
		var fileTypeEnum = {
            type1: {
                icon: "../../img/kuaipan/word.png",
                text: "doc"
            }, type2: {
                icon: "../../img/kuaipan/excel.png",
                text: "xlsx"
            }, type3: {
                icon: "../../img/kuaipan/ppt.png",
                text: "ppt"
            }, type4: {
                icon: "../../img/kuaipan/ppt.png",
                text: "xml"
            }, type5: {
                icon: "../../img/kuaipan/ppt.png",
                text: "pdf"
            }, type6: {
                icon: "../../img/kuaipan/ppt.png",
                text: "html"
            }, type7: {
                icon: "../../img/kuaipan/file.png",
                text: "文件夹"
            }
        }
        var kuaiPanData = [
            {
                "FileName": "软件安装包",
                "FileSize": 1548956,
                "FileType": 4,
                "UpDate": 1442541260867
            },
            {
                "FileName": "下载文件文档",
                "FileSize": 15956,
                "FileType": 5,
                "UpDate": 1442541060867
            }, {
                "FileName": "英语四级真题",
                "FileSize": 3144555,
                "FileType": 1,
                "UpDate": 1442541260467
            }, {
                "FileName": "angular指令作用域问题一览",
                "FileSize": 33,
                "FileType": 3,
                "UpDate": 1442141260867
            }, {
                "FileName": "工厂2020年全厂员工工资条",
                "FileSize": 131,
                "FileType": 2,
                "UpDate": 1442541260067,
            }, {
                "FileName": "文件名特别特别特别特的长长长常常常常常常文件名特别特别特别特的长长长长长长长长长长长长长长长长长长长文件名特别特别特别特的长长长长长文件名特别特别特别特的长长长长长长长长end",
                "FileSize": 76654,
                "FileType": 1,
                "UpDate": 1442541200867
            }, {
                "FileName": "文件名特别特别特别特的长长长常常常常常常长长长长长长长长长长长长长长长长长长长长长end",
                "FileSize": 76654,
                "FileType": 1,
                "UpDate": 1442541200867
            }
        ];
        var config = {
            headers: [
            {
                cellType: jch.jGrid.jCellIconText,
                width: "",
                text: "文件名",
                field: "FileName",
                sortModel: jch.jGrid.sortModelEnum.single,
                sortbyModel: jch.jGrid.sortbyModelEnum.string,
                icon: function (c, r) {
                    return fileTypeEnum["type" + r.FileType].icon;
                },
                cellHeaderCb: function (cdata, rdata) {
                    this.element.find(".sort").removeClass("sort").addClass("tokyoSort asc").removeClass("default");
                },
                cellCb: function () {
                    this.element.find("span").addClass("spanMargin");
                }
            }, {
                cellType: jch.jGrid.jCell,
                value: " ",
                width: "210px",
                cellCb: function (c, r) {
                    var $e = this.getCore();
                    var fileName = this.row.cells[1];
                    $e.wrap($("<a class='link' href='#'>"));

                    var deleteIcon = $("<div>").attr("title", "删除").addClass("btnIcon deleteIcon");
                    var uploadIcon = $("<div>").attr("title", "下载").addClass("btnIcon uploadIcon");
                    var renameIcon = $("<div>").attr("title", "重命名").addClass("btnIcon renameIcon");
                    var editIcon = $("<div>").attr("title", "编辑").addClass("btnIcon editIcon");
                    var emptyIcon = $("<div>").addClass("btnIcon empty");
                    var buttonIcon = $("<div>").append(uploadIcon).append(deleteIcon).append(renameIcon).addClass("btns");
                    if (r.FileType == 7) {
                        buttonIcon.append(emptyIcon);
                    } else {
                        buttonIcon.prepend(editIcon);
                    }
                    this.element.append(buttonIcon);
                    var renameClick = this.element.find(".renameIcon");//编辑按钮
                    renameClick.click(function () {
                        fileName.edit(true, {});
                        var $editBox = fileName.element.data("editBox");
                        //console.log($editBox);
                        $editBox.find(".ltRight").remove();
                        var ebText = $editBox.find(".ebText");
                        ebText.blur(function () {
                            var ebVal = ebText.val();
                            if (ebVal == null || ebVal.length == 0) {
                                alert("文件名不能为空");
                            } else {
                                fileName.edit(false, {
                                    result: true,
                                    cellData: $(this).val()
                                });
                            }
                        }).select();
                    });
                }
            }, {
                cellType: jch.jGrid.jCell,
                width: "100",
                text: "大小",
                field: "FileSize",
                sortModel: jch.jGrid.sortModelEnum.single,
                sortbyModel: jch.jGrid.sortbyModelEnum.number,
                value: function (c, r) {
                    if (c != null) return getFileSize(c);
                },
                cellHeaderCb: function (cdata, rdata) {
                    this.element.find(".sort").removeClass("sort").addClass("tokyoSort");
                }
            }, {
                cellType: jch.jGrid.jCell,
                width: "100",
                text: "类型",
                field: "FileType",
                sortModel: jch.jGrid.sortModelEnum.single,
                sortbyModel: jch.jGrid.sortbyModelEnum.number,
                value: function (c, r) {
                    return fileTypeEnum["type" + c].text;
                },
                cellHeaderCb: function (cdata, rdata) {
                    this.element.find(".sort").removeClass("sort").addClass("tokyoSort");
                }
            }, {
                cellType: jch.jGrid.jCell,
                width: "150",
                text: "修改日期",
                field: "UpDate",
                sortModel: jch.jGrid.sortModelEnum.single,
                sortbyModel: jch.jGrid.sortbyModelEnum.time,
                value: function (c, r) {
                    return new Date(c).toLocaleString();
                },
                cellHeaderCb: function (cdata, rdata) {
                    this.element.find(".sort").removeClass("sort").addClass("tokyoSort");
                }
            }],
            config: {
                isShowColHeader: true,
                isShowColHeaderText: true,
                isShowFooter: true,
                isStaticPage: false,
                isShowDefaultValue: true,
                defaultValue: "-"
            },
            pager: {
		        pageSize: 11
		    },
            checkable: {
                checkbox: {
                    checked: false,
                    enabled: true,
                    onCheckedChange:function(chkState, e, cdata, rdata, cell){
                    	var $tr = cell.row.element;
                    	if (chkState) {
                            $tr.addClass("hover");
                        } else {
                            $tr.removeClass("hover");
                        }
                        var $tool = $("#dm_baidupan").find("[rowtype='jRowToolBar']");
                        if (dmKuaiPanList.getCheckedRow().length > 0) {
                            //$tool.show();
                        } else {
                            //$tool.hide();
                        }
                    }
                },
                checkall: {
                    checked: false,
                    enabled: true
                },
                model: window.jch.jGrid.checkableModelEnum.multiple
            }
        }
        var dmKuaiPanList = window.jch.jGrid(config);
        $("#dm_kuaipan").append(dmKuaiPanList.element);
        var kuaipanArr = repeat(kuaiPanData, 2);
        //var kuaipanArr = repeat([], 2);
        //加载数据
        dmKuaiPanList.setData(kuaipanArr, 1, kuaipanArr.length);
        //设置进入页面按文件名升序排序
        var columnIndex = dmKuaiPanList.getHeaderRow().cells[1].cellIndex;
        var sortbyModelOrFn = jch.jGrid.sortbyModelEnum.string;
        var orderModel = jch.jGrid.orderModelEnum.asc;
        var isSingle = jch.jGrid.sortModelEnum.single;
        dmKuaiPanList.columnSort(columnIndex, sortbyModelOrFn, orderModel, isSingle);
        //设置其他排序按钮隐藏
        dmKuaiPanList.element.find(".default.tokyoSort").hide();
        //当点击其他排序方式时排序图标显示方式
        var sortBtn = dmKuaiPanList.element.find(".tokyoSort");
        var columnx = dmKuaiPanList.getHeaderRow().element;
        columnx.click(function () {
            $.map(sortBtn, function (o, i) {
                var $sortCell = $(o);
                if ($sortCell.hasClass("default")) {
                    $sortCell.hide();
                } else if ($sortCell.hasClass("asc") || $sortCell.hasClass("desc")) {
                    $sortCell.show();
                }
            });
        });
        
        $("#dm_kuaipan").delegate("tbody td[celltype='jCell']", "click", function (e) {
            e = e || window.event;
            var $tr = $(this).closest("tr");
            //var $target = $(e.target || e.srcElement);
            var jcb = $($tr).data("jRow").getCell("checkbox").element.data("jCheckBox");
            alert(jcb);
            jcb.change();
        });
	},
	
	createGrid:function(){
		var i = Public.setGrid();
		var data = [
		    {no:1,itemName:'列表名称-------------',fuze:'0000',beginDate:'2016-06-15',endDate:'2016-06-30'},
		    {no:2,itemName:'列表名称',fuze:'0000'},
		    {no:3,itemName:'列表名称',fuze:'0000'},
		    {no:1,itemName:'列表名称',fuze:'0000'},
		    {no:2,itemName:'列表名称',fuze:'0000'},
		    {no:3,itemName:'列表名称',fuze:'0000'}
		];
		$("#grid").jqGrid({
			data: data,
			datatype: "local",
			autowidth: !0,
			height: i.h - 15,
			altRows: !0,
			gridview: !0,
			styleUI : 'Bootstrap',
			multiselect: !0,
			colModel:[{
				name:'no',
				label:"编号",
				width: 60,
				fixed: !1,
				align: 'left',
				formatter:function(val, opt, row){
					var cal = val % 2 == 0 ? "badge-warning" : "";
					return '<span class="badge '+cal+'">'+val+'</span>';
				}
			},{
				name:"itemName",
				label: '名称',
				width:280,
				align: 'left',
				fixed: !1,
				formatter:function(val, opt, row){
					return '<a class="fb title" href="javascript:;" onclick="shouwItem();">'+val+'</a><br/><small class="text-muted clear text-ellipsis">2016-06-16 09:21</small>'
				}
			},{
				name:"fuze",
				label: '负责人',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"beginDate",
				label: '开始日期',
				width:130,
				fixed: !1,
				align: 'left'
			},{
				name:"endDate",
				label: '截止日期',
				width:100,
				fixed: !1,
				align: 'left',
				hidden: !0
			},{
				label: '进度',
				name: "p",
				width: 190,
				align: 'left',
				fixed: !1,
				title: !1,
				formatter:function(){
					return '<div class="progress" style="margin-bottom:0"><div class="progress-bar" role="progressbar" style="width:68%" ;="">88%</div></div>';
				}
				
			},{
				name:"state",
				label: '状态',
				width:170,
				fixed: !1,
				align: 'left'
			},{
				label: '工期预警',
				name: "w",
				width: 90,
				fixed: !1,
				align: 'center',
				title: !1
			}],
			cmTemplate: {
				sortable: !0,
				title: !1
			},
			page: 1,
			pager: "#page",
			rowNum: 100,
			rowList: [100, 200, 500],
			viewrecords: !0,
			shrinkToFit: !0,
			forceFit: !0,
			jsonReader: {
				root: "data.rows",
				records: "data.records",
				total: "data.total",
				userdata: "data.userdata",
				repeatitems: !1,
				id: "id"
			},
			loadComplete: function(a) {
			},
			gridComplete: function() {
			},
			loadError: function(a, b, c) {},
			ondblClickRow: function(a, b, c, d) {
			},
			resizeStop: function(a, b) {
			}
		});
	},
	
	addEvent:function(){
		$('#add').click(function(){
			Public.sidePanel({
				icon: 'fa-plus',
				type: 1,
				title: '添加',
				content: "addForm.html"
			});
		});
		$('#add-btn').bind('click',function(e){
			parent.Public.openWin('page/oa/form.html','表单设计页面',750,400);
		});
		Public.setAutoHeight($("#tree"));
		$(window).resize(function() {
            Public.resizeGrid()
            Public.setAutoHeight($("#tree"));
        })
	},
	
	tabEvent:function(){
		$('#myTabs a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});
	}
};

function shouwItem(){
	Public.sidePanel({
		icon: 'fa-plus',
		type: 1,
		title: '添加',
		content: "renwu/info.html"
	});
}

function repeat(arr, count) {
    if (count == undefined) return arr;
    var dst = $.extend(true, [], arr);
    for (var i = 0; i < count; i++) {
        dst = dst.concat(arr);
    }
    return dst;
};

function getFileSize(fileLength) {
    if (fileLength < Math.pow(1024, 1)) {
        return Math.round((fileLength / Math.pow(1024, 0)), 0) + "字节";
    } else if (fileLength < Math.pow(1024, 2)) {
        return Math.round((fileLength / Math.pow(1024, 1)), 0) + "KB";
    } else if (fileLength < Math.pow(1024, 3)) {
        return Math.round((fileLength / Math.pow(1024, 2)), 0) + "MB";
    } else if (fileLength < Math.pow(1024, 4)) {
        return Math.round((fileLength / Math.pow(1024, 3)), 0) + "GB";
    } else if (fileLength < Math.pow(1024, 5)) {
        return Math.round((fileLength / Math.pow(1024, 4)), 0) + "TB";
    }
    return Math.round((fileLength / Math.pow(1024, 5)), 0) + "PB";
};

THISPAGE.init();
