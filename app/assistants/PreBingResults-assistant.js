function PreBingResultsAssistant(argFromPusher) {
}

PreBingResultsAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};