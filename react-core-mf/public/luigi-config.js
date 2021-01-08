Luigi.setConfig({
	navigation: {
		nodes: () => [
			{
				pathSegment: 'home',
				label: 'Home',
				icon: 'home',
				viewUrl: '/app.html#/home',
				children: [{
					pathSegment: 'products',
					label: 'Products',
					icon: 'list',
					viewUrl: '/app.html#/products'
				}]
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
})