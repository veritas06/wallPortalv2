function PreGoogleResultsAssistant(argFromPusher) {
}

PreGoogleResultsAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};