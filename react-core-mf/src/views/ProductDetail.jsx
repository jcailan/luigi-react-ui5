import React, { useState, useEffect } from 'react';
import { ProductCollection } from '../../../ui5-mf/uimodule/webapp/model/products.json';
import { LayoutPanel, MessageStrip } from 'fundamental-react';

const NO_MATCH_PRODUCT_MSG = 'This product is not available. Please check again.';

export const ProductDetail = ({ match }) => {
	const itemId = parseInt(match.params.id);
	const [item, setItem] = useState(null);

	useEffect(() => {
		setItem(ProductCollection.find(product => product.id === itemId));
	}, [itemId]);

	const renderDetails = () => (
		<LayoutPanel>
			<LayoutPanel.Header>
				<h1 className="fd-section__title">{item.name}</h1>
			</LayoutPanel.Header>
			<LayoutPanel.Filters>
				<div>Price: &euro;{item.price}</div>
				<div>Stocks: {item.stock}</div>
			</LayoutPanel.Filters>
			<LayoutPanel.Body>
				<p>{item.description}</p>
			</LayoutPanel.Body>
		</LayoutPanel>
	);

	return (
		<section className="fd-section">
			{item
				? renderDetails()
				: <MessageStrip type='error'>{NO_MATCH_PRODUCT_MSG}</MessageStrip>
			}
		</section>
	);
};