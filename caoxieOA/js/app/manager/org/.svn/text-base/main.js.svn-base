THISPAGE = {
	
	init:function(){
		this.initDom();
		this.addEvent();
	},
	
	initDom:function(){
		var self = this;
		self.$_province = $("#province"),
		self.$_city = $("#city"),
		self.$_area = $("#area");
		Public.areasCombo.init('../../../js/data/areasData.js',self.$_province,self.$_city,self.$_area,function(){
			self.provinceCombo = Public.areasCombo.provinceCombo;
			self.cityCombo = Public.areasCombo.cityCombo;
			self.areaCombo = Public.areasCombo.areaCombo;
		});
	},
	
	addEvent:function(){
		$('.module-header .nav a').click(function (e) {
			e.preventDefault();
		    $(this).tab('show');
		});
	}
};

THISPAGE.init();
