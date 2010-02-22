opus.Gizmo({
	name: "PixiFlickrResults",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "PixiFlickrResultsScroller",
			snapElements: [],
			type: "Palm.Mojo.Scroller",
			l: 0,
			t: 0,
			h: "100%",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "PixiFlickrResultsWebView",
					url: "http://m.flickr.com/#/search/advanced/_QM_q_IS_palm+pixi+wallpapers",
					interrogateClicks: false,
					type: "Palm.Mojo.WebView",
					l: 0,
					t: 0,
					h: "100%"
				}
			]
		}
	]
});