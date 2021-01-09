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
					label: 'PRODUCTS',
					icon: 'list',
					viewUrl: '/app.html#/products',
					keepSelectedForChildren: true,
					children: [{
						pathSegment: ':id',
						viewUrl: '/app.html#/productDetail/:id'
					}]
				}, {
					pathSegment: 'order',
					label: 'ORDERHISTORY',
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
		responsiveNavigation: 'simpleMobileOnly',
		customTranslationImplementation: myTranslationProvider
	},
	lifecycleHooks: {
		luigiAfterInit: () => {
			Luigi.i18n().setCurrentLocale(defaultLocale);
		}
	},
	communication: {
		customMessagesListeners: {
			'set-language': (msg) => {
				Luigi.i18n().setCurrentLocale(msg.locale);
			}
		}
	}
});

var defaultLocale = 'en-US';
function myTranslationProvider() {
	var dict = {
		'de-DE': { PRODUCTS: 'Produkte', 'ORDERHISTORY': 'Bestellungen' },
		'en-US': { PRODUCTS: 'Products', 'ORDERHISTORY': 'Order History' }
	};
	return {
		getTranslation: function(label, interpolation, locale) {
			return dict[locale || Luigi.i18n().getCurrentLocale() || defaultLocale][label] || label;
		}
	};
};