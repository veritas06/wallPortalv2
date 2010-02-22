function MainAssistant(argFromPusher) {
}

MainAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
		// Setup Application Menu
		this.controller.setupWidget(Mojo.Menu.appMenu, wallPortalMenuAttr, wallPortalMenuModel);
	},
	activate: function() {
		// Make Application Full-Screen
		// this.controller.enableFullScreenMode(true);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	PixiBingBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("PixiBingResults");
	},
	PixiGoogleBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("PixiGoogleResults");
	},
	PreBingBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("PreBingResults");
	},
	PreFlickriPhoneBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("PreFlickriPhoneResults");
	},
	PreFlickrPreBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("PreFlickrPreResults");
	},
	PreGoogleBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("PreGoogleResults");
	},
	PrePreWallpapersBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("PrePreWallpapersResults");
	},
	FS4scrapeBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("FS4scrapeResults");
	},
	FS4walledBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("FS4walledResults");
	},
	FSwallbaseBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("FSwallbaseResults");
	},
	PixiFlickrBtnTap: function(event, inSender) {
		Mojo.Controller.stageController.pushScene("PixiFlickrResults");
	},
	picture1Tap: function(event, inSender) {
		this.controller.stageController.pushAppSupportInfoScene(); 
	}
};