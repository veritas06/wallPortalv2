function PixiGoogleResultsAssistant(argFromPusher) {
}

PixiGoogleResultsAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};