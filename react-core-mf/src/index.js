import React, { Component } from 'react';
import { render } from 'react-dom';
import { addInitListener } from '@luigi-project/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './views/Home.jsx';
import { Products } from './views/Products.jsx';
import { ProductDetail } from './views/ProductDetail.jsx';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		addInitListener(() => {
			console.log('Luigi Client initialized.');
		});
	}
	render() {
		return (
			<Router basename={`/app.html#`}>
				<Route path="/home" component={Home} />
				<Route path="/products" component={Products} />
				<Route path='/productDetail/:id' component={ProductDetail} />
			</Router>
		);
	}
}

render(<App />, document.getElementById('root'));