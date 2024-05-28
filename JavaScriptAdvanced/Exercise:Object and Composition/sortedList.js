function sortedList() {
  let arr = [];
  return {
    add: (num) => {
      arr.push(num);
      return arr.sort();
    },
    remove: (index) => {
      arr.splice(index, 1);
      return arr.sort();
    },
    get: (index) => arr[index],
    size: arr.length,
  }
}
let list = sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));