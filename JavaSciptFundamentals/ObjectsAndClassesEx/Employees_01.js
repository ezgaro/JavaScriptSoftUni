function employees(arr) {
    class Person {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
        toString() {
            return `Name: ${this.employeeName} -- Personal Number: ${this.personalNum}`;
        }
    }

    for(let employeeName of arr) {
        let personalNum = employeeName.length;
        let person = new Person(employeeName, personalNum);
        console.log(person.toString()); 
    }

}
employees([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

]);