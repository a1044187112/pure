var $_form = $("#grant-manage-form"),
THISPAGE = {
	
	init:function(){
		this.initDom();
		this.initValidator();
	},
	
	initDom:function(){
		var res = {"INFO":"","STATUS":true,"rows":[{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":34,"time":1442214934000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":34,"time":1442214934000,"timezoneOffset":-480,"year":115},"id":"C14FCAB5790713FE0D49BCEF","isDelete":0,"name":"成品","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":43,"time":1442214943000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":43,"time":1442214943000,"timezoneOffset":-480,"year":115},"id":"C14FCAB59C3923FD9A91AA4B","isDelete":0,"name":"半成品","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":58,"time":1442214958000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":15,"month":8,"seconds":58,"time":1442214958000,"timezoneOffset":-480,"year":115},"id":"C14FCAB5D46F33FEEA5E82CC","isDelete":0,"name":"包装用品","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":16,"month":8,"seconds":15,"time":1442214975000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":16,"month":8,"seconds":15,"time":1442214975000,"timezoneOffset":-480,"year":115},"id":"C14FCAB6161F43FC4DA20F6F","isDelete":0,"name":"配件","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":3,"time":1442215023000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":3,"time":1442215023000,"timezoneOffset":-480,"year":115},"id":"C14FCAB6D55053FE24E8459B","isDelete":0,"name":"原材料","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"0","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":41,"time":1442215061000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":41,"time":1442215061000,"timezoneOffset":-480,"year":115},"id":"C14FCAB769B963FCBB5DD616","isDelete":0,"name":"智能手机","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"C14FCAB5790713FE0D49BCEF","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":55,"time":1442215075000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":17,"month":8,"seconds":55,"time":1442215075000,"timezoneOffset":-480,"year":115},"id":"C14FCAB79EB173FEC01C956B","isDelete":0,"name":"功能手机","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"C14FCAB5790713FE0D49BCEF","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"},{"beginDate":"","endDate":"","gmtCreate":{"date":14,"day":1,"hours":15,"minutes":18,"month":8,"seconds":23,"time":1442215103000,"timezoneOffset":-480,"year":115},"gmtModify":{"date":14,"day":1,"hours":15,"minutes":18,"month":8,"seconds":23,"time":1442215103000,"timezoneOffset":-480,"year":115},"id":"C14FCAB80D7783FC59BBA9D1","isDelete":0,"name":"座充","pageCount":0,"pageIndex":0,"pageSize":30,"parentId":"C14FCAB5790713FE0D49BCEF","startIndex":-30,"targetName":"BaseGoodsType","toId":"C14FBD0D719513FE0B62B0D7"}]};
		var $category = $("#grant-category");
    	var treeData = [];
    	for(i = 0;i <  res.rows.length;i++){
			var o = res.rows[i];
			if(o){
				var t = {
					id: o.id,
					name: o.name,
					parentId: o.parentId,
					typeNumber: '00'
				};
				treeData.push(t);
			}
		}
    	this.categoryTree = Public.categoryTree($category, {
    		data: treeData,
    		width: 540,
            inputWidth: 540,
            defaultSelected: null || 0,
            showRoot: !1
    	});
	},
	
	initValidator:function(){
		var $_validate = $_form.validator({
			rules:{
				
			},
			messages:{
	            required: "请填写{0}"
			},
			fields:{
				phone:'required;length[~29]',
				username:"required;",
				no: "required;"
			},
			display: function(t) {
				return $(t).closest(".form-group").find("label").text()
			},
			ignore: ":hidden",
			theme: "yellow_bottom",
			timely: 1,
			stopOnError: !0
		});
	},
	
	submit:function(){
		$_form.isValid(function(v){
			if(v){
				parent.layer.closeAll();
				return true;
			}else{
				return false;
			}
		});
	}
};
THISPAGE.init();
