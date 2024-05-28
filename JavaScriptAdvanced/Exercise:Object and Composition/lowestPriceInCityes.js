function lowestPrice(arr) {
  let products = {};

  for(let token of arr) {
    let [townName, productName, productPrice] = token.split(" | ");
    productPrice = Number(productPrice);

    if (!products[productName] || products[productName].price > productPrice) {
      products[productName] = { town: townName, price: productPrice };
    }
  }

  for (let product in products) {
    console.log(`${product} -> ${products[product].price} (${products[product].town})`);
  }
}
lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);