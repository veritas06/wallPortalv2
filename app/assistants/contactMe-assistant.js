function ContactMeAssistant(argFromPusher) {
}

ContactMeAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};