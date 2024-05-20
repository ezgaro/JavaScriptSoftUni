function fruit(fruit, grams, pricePerKilo) {
    console.log(`I need $${(grams / 1000 * pricePerKilo).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);