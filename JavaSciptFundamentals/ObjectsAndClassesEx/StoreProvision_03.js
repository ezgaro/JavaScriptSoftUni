function storeProvision(stock, orderedProducts) {
    let products = [];
    for(let i = 0 ; i < stock.length; i+= 2) {
        let productName = stock[i];
        let productQty = Number(stock[i + 1]);

        let productObj = {name: productName, qty:productQty};
        products.push(productObj);
    }


    for(let i = 0 ; i < orderedProducts.length; i+= 2) {
        let productName = orderedProducts[i];
        let productQty = Number(orderedProducts[i + 1]);

        
        let productFound = products.find(p => p.name === productName);

        if(productFound) {
            productFound.qty += productQty; 
        } else {
            let productObj = {name: productName, qty:productQty};
            products.push(productObj);
        }
    }

    products.forEach(p => console.log(`${p.name} -> ${p.qty}`));


}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ]);