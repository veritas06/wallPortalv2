opus.Gizmo({
	name: "PixiGoogleResults",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "PixiGoogleResultsScroller",
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
					name: "PixiGoogleResultsWebView",
					ontap: "PixiGoogleResultsWebViewTap",
					url: "http://www.google.com/m/search?q=320x400&site=images&gl=us&source=mog",
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