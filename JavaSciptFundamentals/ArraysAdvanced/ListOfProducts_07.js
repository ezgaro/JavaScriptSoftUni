function listOfProducts(arr) {
    let arr1 = arr.sort();
    let counter = 1;
    for(let s of arr1) {
        console.log(`${counter}.${s}`);
        counter++;
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);