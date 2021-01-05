import React from 'react';
import { MessageStrip, Avatar, LayoutPanel, LayoutGrid } from 'fundamental-react';
import { linkManager } from '@luigi-project/client';

const NO_AVAILABLE_PRODUCT_MSG = 'Unfortunately, there is no available product at this moment.';
const navigateToDetail = (id) => linkManager().navigate('/home/products/' + id);
const panelStyle = { cursor: 'pointer' };

export const List = ({ items }) => (
	(items.length === 0) ? <MessageStrip type='error'>{NO_AVAILABLE_PRODUCT_MSG}</MessageStrip>
		: items.map(({ id, name, price, icon, stock }) => {
			return (
				<LayoutPanel key={id} style={panelStyle} onClick={() => navigateToDetail(id)}>
					<LayoutPanel.Header>
						<LayoutPanel.Head title={name} />
					</LayoutPanel.Header>
					<LayoutPanel.Body>
						<LayoutGrid cols={2}>
							<div>
								<div>Price: &euro;{price}</div>
								<div>Stocks: {stock}</div>
							</div>
							<div><Avatar circle glyph={icon} size='s' /></div>
						</LayoutGrid>
					</LayoutPanel.Body>
				</LayoutPanel>
			);
		})
);