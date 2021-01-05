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
					viewUrl: '/app.html#/products',
					keepSelectedForChildren: true,
					children: [{
						pathSegment: ':id',
						viewUrl: '/app.html#/productDetail/:id'
					}]
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