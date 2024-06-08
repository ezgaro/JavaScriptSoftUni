class List{
  constructor() {
    this.list = [];
  }
  add(el) {
    this.list.push(el);
  }
  remove(index) {
    if(index > this.list.length || index < 0) {
      throw new Error('Index out of bounds');
    }
    this.list.splice(index, 1);
  }
  get(index) {
    if(index > this.list.length || index < 0) {
      throw new Error('Index out of bounds');
    }
    return this.list[index];
  }
  size() {
    return this.list.length;
  }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));