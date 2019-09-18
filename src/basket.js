import { applyRule } from "./rules";

class Basket {
	constructor(pricingRules) {
		this.items = [];
		this.rules = pricingRules;
	}

	add(items) {
		this.items = this.items.concat(items);
		return this.items;
	}

	total() {
		return this.rules
			.reduce((cart, rule) => applyRule(cart, rule), this.items)
			.reduce((sum, item) => item.price + sum, 0);
	}
}

export default Basket;