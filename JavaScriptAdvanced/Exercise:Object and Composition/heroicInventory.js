function heroicInventory(arr) {
  let result = [];
  for(let token of arr) {
    let name = token.split(' / ')[0];
    let level = token.split(' / ')[1];
    let items = token.split(' / ')[2].split(", ");
    let res = {name, level, items};
    result.push(JSON.parse(JSON.stringify(res)));
  }
  return result;
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);