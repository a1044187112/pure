EUISocket = {
		
		xiswfUrl: "",
		swfStocket: "",
		swfExpressInstall:"",
	    init:function(callback){
	        EUISocket.createSocket();
			this.callback = callback;
		},
		initStock: function(host){
			qm_socket.init(host);
		},
		
		createSocket:function(){
			try{
	            var swfVersionStr = "11.1.0";
	            //var xiSwfUrlStr = "static/swf/playerProductInstall.swf";
	            var xiSwfUrlStr = this.xiswfUrl;
	            var flashvars = {};
	            var params = {};
	            params.quality = "high";
	            params.bgcolor = "#ffffff";
	            params.allowscriptaccess = "sameDomain";
	            params.allowfullscreen = "true";
	            params.allowScriptAccess = "always";
	            var attributes = {};
	            attributes.id = "QM_Socket";
	            attributes.name = "QM_Socket";
	            attributes.align = "middle";
				//swfobject.embedSWF("static/swf/socket.swf", "QM_Socket", "0", "0", swfVersionStr, "static/swf/expressInstall.swf",flashvars, params, attributes);
	            swfobject.embedSWF(this.swfStocket, "QM_Socket", "0", "0", swfVersionStr, this.swfExpressInstall,flashvars, params, attributes);
			}catch(e){
				alert("加载swf错误："+e);
			}
		},
		
		/**
		 * 订阅通知通道
		 * @returns
		 */
		subMsgToic:function(pv,type){
			try{
				qm_socket.QM_subMsgToic(pv,type);
			}catch(e){
				Public.tips({type: 1, content : "订阅通知：" + e});
			}
		},
		
		/**
		 * 订阅北斗通道
		 * @returns
		 */
		subBDToic:function(pv,type){
			qm_socket.QM_subBDToic(pv,type);
		},
		/**
		 * 订阅视频通道
		 * @returns
		 */
		subVIDEOToic: function(pv,type){
			qm_socket.QM_subVideoToic(pv,type);
		},
		
		/**
		 * 发送数据
		 * @returns
		 */
		sendToic: function(topicName,sendName,msg){
			qm_socket.QM_sendToic(topicName,sendName,msg);
		},
		
		/**
		 * 消息控制
		 */
		messageConsol: function(res){
			this.callback(res);
		}
		
};


/**
 * 接收消息
 * @param obj
 */
function QM_readToic(res){
	if(!res)return;
	res = JSON.parse(res);
	EUISocket.messageConsol(res);
}

/**
 * 连接成功
 * @param res
 */
function QM_conentSuccess(res){
	if(navigator.appName.indexOf("Microsoft") >-1){ 
		qm_socket = window["QM_Socket"];
	}else{
		qm_socket = document["QM_Socket"];
	}
	if(res){
		alert("链接成功");
		EUISocket.subMsgToic("SAME0",0);
	}
}

function MQ_conentError(e){
	Public.tips({type: 2, content : e});
}

function MQ_conent(e){
	Public.tips({type: 2, content : e});
}