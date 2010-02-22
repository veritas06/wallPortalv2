opus.Gizmo({
	name: "PreBingResults",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "PreBingResultsScroller",
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
					name: "PreBingResultsWebView",
					url: "http://m.bing.com/search/search.aspx?A=imageresults&Q=320x480&D=Image&SCO=1",
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