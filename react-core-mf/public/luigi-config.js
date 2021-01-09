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
				}, {
					pathSegment: 'order',
					label: 'Order History',
					icon: 'history',
					viewUrl: 'http://localhost:8080/index.html'
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