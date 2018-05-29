
var $_form = $("#hr-records-main-form"),THISPAGE = {
	
	init:function(){
		this.initDom();
		this.addEvent();
		this.chengImg();
		this.getTime();
		this.initValidator();
	},
	
	initDom:function(){
		sexCom = $("#sex").combo({
			data: [{
				id: 0,
				name: "男"
			}, {
				id: 1,
				name: "女"
			}],
			value: "id",
			text: "name",
			name:"gender",
			width: 220,
			defaultSelected: null || 0
		}).getCombo();
	},
	
	initValidator:function(){
		var $_validate = $_form.validator({
			rules:{
				
			},
			messages:{
	            required: "请填写{0}"
			},
			fields:{
				user_code:'required;',
				name:"required;"
			},
			display: function(t) {
				console.log($(t));
				return $(t).closest(".row-item").find("label").text()
			},
			ignore: ":hidden",
			theme: "yellow_bottom",
			timely: 1,
			stopOnError: !0
		});
	},
	
	getTime:function(){
        this.$_birthdayDate = $("#birthdayDate").val('2015-01-01');
        this.$_hiredateDate = $("#hiredateDate").val('2015-01-01');
        this.$_formalDate = $("#formalDate").val('2015-01-01');
        this.$_workDate = $("#workDate").val('2015-01-01');
        this.$_contractStartDate = $("#contractStartDate").val('2015-01-01');
        this.$_graduationDate = $("#graduationDate").val('2015-01-01');
        this.$_driveDate = $("#driveDate").val('2015-01-01');
        this.$_birthdayDate.datepicker();
        this.$_hiredateDate.datepicker();
        this.$_formalDate.datepicker();
        this.$_workDate.datepicker();
        this.$_contractStartDate.datepicker();
        this.$_graduationDate.datepicker();
        this.$_driveDate.datepicker();
	},
	
	getPost:function(){
		
	},
	
	submit:function(){
		
	},
	
	addEvent:function(){
		$('.tab-wrapper .tab-navigation a').click(function (e) {
			e.preventDefault()
			$(this).tab('show');
		});
	},
	//图片预览
	chengImg:function(){
       $.fn.extend({
          filereader:function(p){
            var dom = this, err_msg='';
            var _p = {
                type: ['jpg','jpeg','png'], //允许图片类型
                max_size: 999999999, //允许图片最大 KB
                preview: '', //预览图容器
                preview_attr : {},//预览图属性
                error:function(){alert(err_msg)}, 
                success:function(){alert('is_ok')}
            };
            var setting = $.extend(_p, p);
            
            var checkSize = function( size ){
                size = size / 1024;
                return setting.max_size >= size;
            }
            
            var checkType = function( type ){
                var t = type.split('/')[1];
                var ret = false;
                for(var i=0; i< setting.type.length; i++){
                    if(setting.type[i] == t){
                        ret = true;
                        break;
                    }
                }
                
                return ret;
            }
            
            var loadImg = function(){
                var file = dom.get(0).files[0];
                if( !checkType(file.type) ){
                    err_msg = '图片格式不对';
                    setting.error();
                    return;
                }
                
                if( !checkSize(file.size) ){
                    err_msg = '图片不能大于 ' + setting.max_size + 'KB ';
                    setting.error();
                    return;
                }
                
                var reader = new FileReader();  
                //将文件以Data URL形式读入页面  
                reader.readAsDataURL(file);  
                reader.onload=function(e){
                    //显示文件  
                    $("#changeImg").attr("src",this.result)
                }
            }
            
            dom.change(loadImg);
        }
    })
}

}
     var add=0;//计id
     //添加文件
   function add_new(){
   	    var str='<li class="upfiles_li" id="id'+add+'"><div class="upfiles_div1"><input name="name" class="ui-input"/></div>'+
   	    '<div class="upfiles_div2"><input name="path" type="file" class="upfiles_ok" value=""  name="number" id="number"/>'+
		'</div><div class="upfiles_div3"><a class="ui-btn"href="javascript:void(0);" onclick="removeElement(this);" id='+add+'>删除<a></div></li>';
		$("#upfiles_ul").append(str);
		add++;												
   }
   //移除文件
   function removeElement(e){
   	 console.log(e.id);
   	 $("#id"+e.id).remove();
   }
   

THISPAGE.init();
