var Evaluation = {
    init : function(parameter){
        var thisObj = {};
        start = function(parameter){
            //listen click
            thisObj.thisBindEventClick.bindEvent();
            //element init
            //output
        };

        thisObj.thisSelector = {
            img_url                 : "",   //图片路径
            delete_item             : "",   //删除按钮类名
            container_cart_select   : "",   //删除按钮父元素类名
            container_eva_btn       : "",   //选择图片按钮类名
            container_eva_sel_item  : "",   //选择图片按钮父元素类名
            img_selected            : "",   // 选中状态下图片按钮标识类名
            container_eva_sel       : "",   // 页面中已存在的图片按钮祖先元素的类名
            container_eva_btn_sel   : "",   // 动态生成当前点击对象的祖先元素的类名
            container_eva_btn_eva   : "",   // 评价提交按钮
        }
        thisObj.thisObjInit = function(parameter){
            thisObj.thisParsingJson.ParsingJson(parameter);
        },

        // 解析JSON格式参数
        thisObj.thisParsingJson = {
            ParsingJson : function(parameter){
                // alert(parameter);
                $.each(parameter,function(i,item){
                    // i是键  item是值
                    // alert(i);
                    thisObj.initSelector.initSelectorJson(parameter,i,item);

                });
            },
        }

        thisObj.initSelector = {
            initSelectorJson : function(parameter,i,item){
                    // alert(item);
                    if(i in parameter){
                        // // alert(parameter.i);
                        switch(i){

                            case "img_url":
                                thisObj.thisSelector.img_url = parameter.img_url;
                                break;
                            case  "delete_item":
                                thisObj.thisSelector.delete_item = parameter.delete_item;
                                break;
                            case "container_cart_select":
                                thisObj.thisSelector.container_cart_select = parameter.container_cart_select;
                                break;
                            case "container_eva_btn":
                                thisObj.thisSelector.container_eva_btn = parameter.container_eva_btn;
                                break;
                            case "container_eva_sel_item":
                                thisObj.thisSelector.container_eva_sel_item = parameter.container_eva_sel_item;
                                break;
                            case "img_selected":
                                thisObj.thisSelector.img_selected = parameter.img_selected;
                                break;
                            case "container_eva_sel":
                                thisObj.thisSelector.container_eva_sel = parameter.container_eva_sel;
                                break;
                            case "container_eva_btn_sel":
                                thisObj.thisSelector.container_eva_btn_sel = parameter.container_eva_btn_sel;
                                break;
                            case "container_eva_btn_eva":
                                thisObj.thisSelector.container_eva_btn_eva = parameter.container_eva_btn_eva;
                                break;
                        }
                    }
            },
        }
        

        // 绑定点击事件
        thisObj.thisBindEventClick = {
            bindEvent : function(){
                // alert("func call");
                thisObj.thisBindEventClick.bindRadioClick(); // 绑定评价按钮点击事件
                thisObj.thisBindEventClick.bindDeleteItemClick(); // 绑定删除按钮点击事件
                thisObj.thisBindEventClick.bindSubmitEvaClick(); // 绑定评价提交按钮点击事件
            },

            // 绑定评价按钮点击事件
            bindRadioClick : function(){
                $("form").submit(function() {
                      // alert($(this).serialize());
                      return false;
                    });
                // 生成评价按钮选择器
                var sel = thisObj.genSelector.genSelectorImgStatic();
                // alert(sel);
                $(sel).click(function(){
                    thisObj.thisEventProcessing.eventProcssingRadioClick(this);
                });
            },

            // 绑定删除按钮点击事件
            bindDeleteItemClick :function(){
                // 生成删除按钮选择器
                var del_sel = thisObj.genSelector.genSelectorDelete();
                $(del_sel).click(function(){
                    thisObj.thisEventProcessing.eventProcssingDeleteClick(this);
                });
            },

            bindSubmitEvaClick : function(){
                // 生成评价按钮
                var submitEvaSel = "."+thisObj.thisSelector.container_eva_btn_eva;
                $(submitEvaSel).click(function(){
                    thisObj.thisEventProcessing.eventProcssingSubmitClick(this);
                });
            },
        }

        // 处理事件
        thisObj.thisEventProcessing = {
            // 点击评价按钮处理事件
            eventProcssingRadioClick : function(this_obj){
                // 生成祖先元素已存在类名
                var parents = thisObj.genSelector.genSelectorAncStatic();
                //  生成当前点击对象祖先的类名
                var parentsDyn = thisObj.genSelector.genSelectorAncDyn();
                // 给当前点击的对面的祖先元素添加类名
                $(this_obj).parentsUntil(parents).parent().addClass("container_eva_btn_sel");
                // 生成评价按钮选择器
                var sel = thisObj.genSelector.genSelectorImgDyn();
                // 生成图片被选中选择器
                var img_selected = thisObj.genSelector.genSelectorImgSelector();
                // alert(thisObj.thisSelector.container_eva_sel);
                // 图片按钮的图片地址
                var  imgsrc = thisObj.thisSelector.img_url;
                // $(sel).attr("src",imgsrc+"3.png");
                 $(sel).each(function(){  
                    // 判断当前元素的状态  
                   if(this_obj===this){
                        if($(this_obj).hasClass(img_selected)){
                            $(this_obj).removeClass(img_selected);  // 移除选中状态的类名
                            $(this_obj).attr("src",imgsrc+"3.png");
                        }else{
                            $(this_obj).addClass(img_selected);  // 添加选中状态的类名
                            $(this_obj).attr("src",imgsrc+"4.png");
                            // alert(55);
                        }
                   }else{
                        // 将不是当前点击的对象改为非选中状态  并移除可能存在的类名
                        $(this).attr("src",imgsrc+"3.png");
                        $(this).removeClass(img_selected);
                   }
                 });
                // 移除动态类名 
                $(this_obj).parentsUntil(parents).parent().removeClass("container_eva_btn_sel");
                //$(sel).parents(thisObj.genSelector.genSelectorAncStatic()).parent().removeClass("container_eva_btn_sel")
                    
                // 将点击按钮的图片改为选中状态 有类名时为选中状态 
                // if($(this_obj).hasClass("img_selected")){  //选中状态到未选中状态
                //     $(this_obj).removeClass("img_selected");  // 移除选中状态的类名
                //     $(this_obj).attr("src",imgsrc+"3.png");
                // }else{
                //     $(this_obj).addClass("img_selected");  // 添加选中状态的类名
                //     $(this_obj).attr("src",imgsrc+"4.png");
                // }
                
            },

            // 删除按钮点击事件处理方法
            eventProcssingDeleteClick :function(this_obj){
                // 移除删除按钮下的选择按钮和评价输入框
                $(this_obj).parent().parent().next().remove();
                //  移除商品信息item
                $(this_obj).parent().parent().remove();
            },

            eventProcssingSubmitClick : function(this_obj){
                // 获取textarea 的评语
                var text = $(this_obj).parents(".container_eva_sel").prev().find(".textarea_eva").val();
                var btnText = "";
                // alert(text);
                //获取当前的评价选项
                var imgBtn = $(this_obj).parent().prevAll().find(".container_eva_btn");
                $(imgBtn).each(function(){
                    // 判断是哪一个在选中状态
                    // alert(this);
                    // alert($(this).hasClass("img_selected"));
                    if($(this).hasClass("img_selected")){
                        // alert(66);
                        var evaBtn = $(this).parent().parent().next();
                        btnText = $(evaBtn).text();
                        // alert($(this).parentsUntil(".container_eva_sel").parent().prev(".container_eva_textarea").children(".container_eva_textarea_item").children(".input_text")[0]);
                        // // 查找到对应的input 元素
                        var input = $(this).parentsUntil(".container_eva_sel").parent().prev(".container_eva_textarea").children(".container_eva_textarea_item").children(".input_text")[0];
                        $(input).val(btnText);
                    }
                });
                submitData.submitDataEva(this_obj);

            },

        }

        // 生成选择器
        thisObj.genSelector = {

            //动态生成当前点击对象的祖先元素的选择器
            genSelectorAncDyn : function(){
                return "."+thisObj.thisSelector.container_eva_btn_sel;
            },

            // 静态存在的当前点击对象的祖先元素选择器
            genSelectorAncStatic : function(){
                return "."+thisObj.thisSelector.container_eva_sel;
            },

            // 动态   每个item选择器 
            genSelectorItemDyn : function(){
                return thisObj.genSelector.genSelectorAncDyn()+" ."+thisObj.thisSelector.container_eva_sel_item;
            },

            // 静态  每个item选择器
            genSelectorItemStatic : function(){
                return thisObj.genSelector.genSelectorAncStatic()+" ."+thisObj.thisSelector.container_eva_sel_item;
            },

            // 绑定图片按钮点击事件选择器
            genSelectorImgStatic :function(){
                return thisObj.genSelector.genSelectorAncStatic()+" ."+thisObj.thisSelector.container_eva_sel_item+" ."+thisObj.thisSelector.container_eva_btn;
            },

            // 动态 图片事件选择器
            genSelectorImgDyn :function(){
                return thisObj.genSelector.genSelectorAncDyn()+" ."+thisObj.thisSelector.container_eva_sel_item+" ."+thisObj.thisSelector.container_eva_btn;
            },

            // 图片按钮被选中
            genSelectorImgSelector : function(){
                return thisObj.thisSelector.img_selected;
            },

            // 删除按钮选择器
            genSelectorDelete : function(){
                return "."+thisObj.thisSelector.container_cart_select+" ."+thisObj.thisSelector.delete_item;
            },
        }
        
        // 提交数据
        submitData = {
            submitDataEva : function(this_obj){
                CtrlElAction.isSimPost=false;
                HomeCtrlElAction.btnFunc.btnDataSubmit(this_obj);
            }
        },


        thisObj.thisObjInit(parameter);
        start();
    }
};