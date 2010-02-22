opus.Gizmo({
	name: "PreFlickriPhoneResults",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "PreFlickriPhoneResultsScroller",
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
					name: "PreFlickriPhoneResultsWebView",
					url: "http://m.flickr.com/#/search/advanced_QM_q_IS_palm+pre+wallpapers_AND_ss_IS_0_AND_mt_IS_all_AND_w_IS_all",
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