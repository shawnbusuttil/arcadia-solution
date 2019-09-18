import Basket from "../basket";

import config from "../rules/rules.json";

const FRUIT_TEA = {
	"key": "FR1",
	"name": "Fruit tea",
	"price": 3.11
};

const STRAWBERRIES = {
	"key": "SR1",
	"name": "Strawberries",
	"price": 5.00
};

function generateItem(key, name, price) {
	return { key, name, price };
}

describe("Basket", () => {
	test("adding an item", () => {
		const basket = new Basket(config.rules);

		const updatedItems = basket.add([
			generateItem(FRUIT_TEA.key, FRUIT_TEA.name, FRUIT_TEA.price),
			generateItem(STRAWBERRIES.key, STRAWBERRIES.name, STRAWBERRIES.price)
		]);
		expect(updatedItems).toEqual([FRUIT_TEA, STRAWBERRIES]);

		expect(updatedItems.length).toEqual(2);
	});

	test("getting the total", () => {
		const basket = new Basket(config.rules);
		basket.add([
			generateItem(FRUIT_TEA.key, FRUIT_TEA.name, FRUIT_TEA.price),
			generateItem(STRAWBERRIES.key, STRAWBERRIES.name, STRAWBERRIES.price),
			generateItem(STRAWBERRIES.key, STRAWBERRIES.name, STRAWBERRIES.price),
			generateItem(STRAWBERRIES.key, STRAWBERRIES.name, STRAWBERRIES.price)
		]);

		const total = basket.total();
		expect(total).toEqual(16.61);
	});
});