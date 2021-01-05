Luigi.setConfig({
	navigation: {
		nodes: () => [
			{
				pathSegment: 'home',
				label: 'Home',
				icon: 'home',
				viewUrl: '/app.html#/home'
			}
		]
	},
	settings: {
		header: {
			title: 'Luigi Application',
			logo: '/logo.png'
		},
		responsiveNavigation: 'simpleMobileOnly'
	}