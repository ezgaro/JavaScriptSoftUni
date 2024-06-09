class Person{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
  toString() {
    return `Person name: (${this.name}, email: ${this.email})`;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
  toString() {
    return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
  }

}

class Student extends Person {
  constructor(name, email, course) {
    super(name, email);
    this.course = course;
  }

  toString() {
    return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
  }
}

function toStringExtension() {
  let person = new Person('Stefan', 'svakomi@gmail.com');
  let teacher = new Teacher('Lilov', 'masterLilov@gmail.com', 'chemestry');
  let student = new Student('Govedo', 'govedoCwetanov@gmail.com', 'math');

  return {
      person,
      teacher,
      student
  }
}