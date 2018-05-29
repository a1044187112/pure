 var add=0;//计id
var $_form = $("#manage-form_announcementSystem");
ADDPAGE = {

		init: function() {
			this.initDom();
			this.addEvent();
			this.initValidator();
		},

		initDom: function() {
			var _self = this;
			toolbar = ['title','bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'indent', 'outdent', 'alignment','|','ol', 'ul', 'blockquote', '|','image', 'table','link', 'hr','code', 'markdown','emoji','fullscreen'];
			
            this.initSimditor("editor1",$('#note1'));
//          this.initSimditor("editor2",$('#note2'));
//          this.initSimditor("editor3",$('#note3'));
//          this.initSimditor("editor4",$('#note4'));
            
            $(".simditor").css("min-height","40px")
            $(".simditor-body").css("min-height","40px")
            $(".simditor-wrapper").css("min-height","40px")
            $(".simditor").css("margin","0")
            
           	this.editor1.setValue('11111111111111');
//         	this.editor2.setValue('22222222222222');
//         	this.editor3.setValue('333333333333');
//         	this.editor4.setValue('444444444');
           	
		},
		initSimditor:function(ed,$dom){
			var _self = this;
			var tempeditor = new Simditor({
                textarea: $dom,
                placeholder: '这里输入文字...',
                toolbar: toolbar,
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
                //defaultImage: 'img/a9.jpg'
            });
            eval("_self."+ed+"=tempeditor;")
		},

		initValidator: function() {
			var $_validate = $_form.validator({
				rules: {

				},
				messages: {
					required: "请填写{0}"
				},
				fields: {
					name: "required;",
					centen:"required"
				},
				display: function(t) {
					return $(t).closest(".ctn-wrap").find(".ui-input").text();
				},
				ignore: ":hidden",
				theme: "yellow_bottom",
				timely: 5,
				stopOnError: !0
			});
		},
		
		submit:function(){
			console.log(this.editor.getValue());
			alert(this.editor.getValue());
		},

		addEvent: function() {
            
		}
	};

ADDPAGE.init();