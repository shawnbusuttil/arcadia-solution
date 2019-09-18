import Basket from "./basket";

import config from "./rules/rules.json";
import cart from "./cart/cart.json";

const basket = new Basket(config.rules);

for (let i = 0; i < cart.items.length; i++) {
	for (let j = 0; j < cart.items[i].quantity; j++) {
		basket.add({
			key: cart.items[i].key,
			name: cart.items[i].name,
			price: cart.items[i].price
		});
	}
}

document.querySelector(".cart").textContent = `Your total is £${basket.total()}`;