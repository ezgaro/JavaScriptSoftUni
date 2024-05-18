function storage(input) {
    let map = new Map();

    for(let product of input) {
        let [name, qty] = product.split(' ');
        if(map.has(name)) {
            map.set(name, Number(map.get(name) + Number(qty)));
        } else {
            map.set(name, Number(qty));
        }
    }

    for(let el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
storage(
['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);