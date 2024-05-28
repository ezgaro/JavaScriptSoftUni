function storeCatalogue(arr) {
  arr = arr.sort();
  let obj = {};
  for(let product of arr) {
    let firstLetter = product.substring(0,1);
    if(!obj[firstLetter]) {
      obj[firstLetter] = [product];
    } else {
      obj[firstLetter].push(product);
    }
  }

  let sortedKeys = Object.keys(obj).sort();

  for(let letter of sortedKeys) {
    console.log(letter);
    for(let product of obj[letter]) {
      console.log(" " + product);
    }
  }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);