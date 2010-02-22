opus.Gizmo({
	name: "main",
	dropTarget: true,
	ontap: "",
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgColor: ""
	},
	chrome: [
		{
			name: "wallPortal-DevHeader",
			title: "wallPortalv2",
			subtitle: "Your source for Palm Pre & Pixi wallpapers!",
			multiline: true,
			icon: "images/icon-64x64.png",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 0,
			h: 81
		},
		{
			name: "mainScroller",
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
					name: "PixiCollapsible",
					dropTarget: true,
					open: false,
					titleLabel: "Pixi (320x400)",
					openHeight: 222,
					type: "Palm.Mojo.Collapsible",
					l: 0,
					t: 0,
					h: 40,
					styles: {
						overflow: "hidden"
					},
					controls: [
						{
							name: "PixiBingBtn",
							ontap: "PixiBingBtnTap",
							onflick: "",
							onhold: "",
							label: "Bing",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 0,
							hAlign: "center"
						},
						{
							name: "PixiFlickrBtn",
							ontap: "PixiFlickrBtnTap",
							label: "Flickr: Pixi",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 120,
							hAlign: "center"
						},
						{
							name: "PixiGoogleBtn",
							ontap: "PixiGoogleBtnTap",
							label: "Google",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 180,
							hAlign: "center"
						}
					]
				},
				{
					name: "PreCollapsible",
					dropTarget: true,
					open: false,
					titleLabel: "Pre (320x480)",
					openHeight: 343,
					type: "Palm.Mojo.Collapsible",
					l: 0,
					t: 39,
					h: 40,
					styles: {
						overflow: "hidden"
					},
					controls: [
						{
							name: "PreBingBtn",
							ontap: "PreBingBtnTap",
							label: "Bing",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 0,
							hAlign: "center"
						},
						{
							name: "PreFlickriPhoneBtn",
							ontap: "PreFlickriPhoneBtnTap",
							disabled: true,
							label: "Flickr: iPhone",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 60,
							hAlign: "center"
						},
						{
							name: "PreFlickrPreBtn",
							ontap: "PreFlickrPreBtnTap",
							label: "Flickr: Pre",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 120,
							hAlign: "center"
						},
						{
							name: "PreGoogleBtn",
							ontap: "PreGoogleBtnTap",
							label: "Google",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 180,
							hAlign: "center"
						},
						{
							name: "PrePreWallpapersBtn",
							ontap: "PrePreWallpapersBtnTap",
							label: "Pre-Wallpapers",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 240,
							hAlign: "center"
						}
					]
				},
				{
					name: "FullSizeCollapsible",
					dropTarget: true,
					open: false,
					titleLabel: "Full-Size",
					openHeight: 221,
					type: "Palm.Mojo.Collapsible",
					l: 0,
					t: 79,
					h: 40,
					styles: {
						overflow: "hidden"
					},
					controls: [
						{
							name: "FS4scrapeBtn",
							ontap: "FS4scrapeBtnTap",
							label: "4scrape",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 0,
							hAlign: "center"
						},
						{
							name: "FS4walledBtn",
							ontap: "FS4walledBtnTap",
							label: "4walled",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 60,
							hAlign: "center"
						},
						{
							name: "FSwallbaseBtn",
							ontap: "FSwallbaseBtnTap",
							label: "_wallbase",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "60%",
							t: 120,
							hAlign: "center"
						}
					]
				},
				{
					name: "versionInfo",
					label: "v0.5.1-02192010",
					type: "Palm.Mojo.Label",
					l: 0,
					t: 120,
					hAlign: "center",
					styles: {
						textAlign: "center",
						fontSize: "11px"
					}
				},
				{
					name: "picture1",
					src: "images/supportButton.png",
					ontap: "picture1Tap",
					type: "Palm.Picture",
					l: 0,
					w: "60%",
					t: "170",
					h: "60%",
					hAlign: "center"
				}
			]
		}
	]
});