import _ from "lodash";

export function applyRule(_items, rule) {
	const items = _.cloneDeep(_items);

	switch(rule.type) {
		case "BUY1GET1FREE":
			let counter = 0;

			return items.map(item => {
				if (item.key === rule.payload.product) {
					counter += 1;
		
					if (counter % 2 === 0) {
						item.price = 0;
					}

					return item;
				}

				return item;
			});
			
		case "BULKPURCHASE":
			const { product, quantity, discount } = rule.payload;

			let matchedItems = items.filter(i => i.key === product);
			let unmatchedItems = items.filter(i => i.key !== product);

			if (matchedItems.length >= quantity) {
				matchedItems = matchedItems.map(item => {
					item.price -= discount;
					return item;
				});
			}

			return [...matchedItems, ...unmatchedItems];

		default:
			return items;
	}
}