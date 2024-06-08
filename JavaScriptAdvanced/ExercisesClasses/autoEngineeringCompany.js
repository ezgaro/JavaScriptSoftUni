function autoEngineering(inpArr) {
  let brands = new Map();
  inpArr.forEach((car) => {
    let [brand, model, quantity] = car.split(' | ');
    quantity = Number(quantity);
    if (!brands.has(brand)) {
      let models = new Map();
      models.set(model, quantity);
      brands.set(brand, models);
    } else {
      let models = brands.get(brand);
      if (!models.has(model)) {
        models.set(model, quantity);
      } else {
        let currentQuantity = models.get(model);
        models.set(model, currentQuantity + quantity);
      }
    }
  });

  for (let [brand, models] of brands) {
    console.log(brand);
    for (let [model, quantity] of models) {
      console.log(`###${model} -> ${quantity}`);
    }
  }
}

autoEngineering(['Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10']);