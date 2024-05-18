function cat(input) {
    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }
        meow() {
            return `${this.catName}, age ${this.age} says Meow`;
        }
    }

    for(let el of input) {
        let [name , age] = el.split(" ");
        let cat = new Cat(name, age);
        console.log(cat.meow());
    }
}
cat(['Mellow 2', 'Tom 5']);