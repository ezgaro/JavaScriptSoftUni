function solution() {
  let stock = {
    carbohydrate: 0,
    flavour: 0,
    protein: 0,
    fat: 0,
  };

  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  function restock(element, quantity) {
    stock[element] += quantity;
    return "Success";
  }

  function prepare(recipe, quantity) {
    const required = {};
    for (const [element, amount] of Object.entries(recipes[recipe])) {
      required[element] = amount * quantity;
      if (stock[element] < required[element]) {
        return `Error: not enough ${element} in stock`;
      }
    }

    for (const [element, amount] of Object.entries(required)) {
      stock[element] -= amount;
    }

    return "Success";
  }

  function report() {
    return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
  }

  return function (input) {
    const [command, item, quantity] = input.split(" ");
    if (command === "restock") {
      return restock(item, Number(quantity));
    } else if (command === "prepare") {
      return prepare(item, Number(quantity));
    } else if (command === "report") {
      return report();
    }
  };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
console.log(manager("prepare turkey 1")); // Error: not enough protein in st
