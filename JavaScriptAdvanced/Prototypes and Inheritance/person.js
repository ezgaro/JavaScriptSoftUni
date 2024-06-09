function createPerson(firstName, lastName) {
  let _firstName = firstName;
  let _lastName = lastName;

  return {
    get firstName() {
      return _firstName;
    },
    set firstName(newFirstName) {
      _firstName = newFirstName;
      this.fullName = _firstName + ' ' + _lastName;
    },
    get lastName() {
      return _lastName;
    },
    set lastName(newLastName) {
      _lastName = newLastName;
      this.fullName = _firstName + ' ' + _lastName;
    },
    get fullName() {
      return _firstName + ' ' + _lastName;
    },
    set fullName(newFullName) {
      const parts = newFullName.split(' ');
      if (parts.length === 2) {
        _firstName = parts[0];
        _lastName = parts[1];
      }
    }
  };
}

// Example usage:
let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); // Peter Ivanov
person.firstName = "George";
console.log(person.fullName); // George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); // George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); // Nikola
console.log(person.lastName); // Tesla