function StageAssistant() {
}

StageAssistant.prototype.setup = function() {
	this.controller.pushScene({name: "main", disableSceneScroller: true});
	this.controller.setWindowOrientation("free");
	// Setup Application Menu with an About entry
	//
	wallPortalMenuAttr = {omitDefaultItems: true};
	wallPortalMenuModel = {
		visible: true,
		items: [
			{label: "About wallPortal...", command: 'do-aboutwallPortal'},
			Mojo.Menu.editItem,
			Mojo.Menu.prefsItem,
			Mojo.Menu.helpItem
		]
	};
	this.controller.pushScene("feedList");
};

// handleCommand - Setup handlers for menus:
//
StageAssistant.prototype.handleCommand = function(event) {
	var currentScene = this.controller.activeScene();
	if(event.type == Mojo.Event.command) {
		switch(event.command) {
			case 'do-aboutwallPortal':
				currentScene.showAlertDialog({
					onChoose: function(value) {},
					title: "wallPortal v0.5.1",
					message: "Created by v3ritas (Sean McAdam)    Twitter: veritas06",
					// message: "Twitter: veritas06",
					choices:[
						{label: "Close", value:""}
					]
				});
			break;
		}
	}
};