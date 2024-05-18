function shoppingList(input) {
  let index = 0;
  let shoppingList = input[index].split("!");
  let resultArr = [];
  index++;
  while (input[index] !== "Go Shopping!") {
    let commandArr = input[index].split(" ");
    let command = commandArr.shift();
    switch (command) {
      case "Urgent":
        let item = commandArr.shift();
        if(!shoppingList.includes(item)) {
            shoppingList.unshift(item);
        }
        break;
      case "Unnecessary":
        let item1 = commandArr.shift();
        let itemIndex = shoppingList.indexOf(item1);
        if(itemIndex !== -1) {
            shoppingList.splice(itemIndex,1);
        }
        break;
      case "Correct":
        let oldName = commandArr.shift();
        let newName = commandArr.shift();

        let itemIdx = shoppingList.indexOf(oldName);
        if(itemIdx !== -1) {
            shoppingList[itemIdx] = newName;
        }
        break;
      case "Rearrange":
        let itm = commandArr.shift();
        let itemIndexx = shoppingList.indexOf(itm);
        if(itemIndexx !== -1) {
            shoppingList.splice(itemIndexx,1);
            shoppingList.push(itm);
        }
        break;
    }
    index++;
  }

  console.log(shoppingList.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
