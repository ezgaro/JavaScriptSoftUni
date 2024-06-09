class Person{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
}

function personAndTeacher() {
  let person = new Person('Stefan', 'svakomi@gmail.com');
  let teacher = new Person('Lilov', 'masterLilov@gmail.com', 'chemestry');

  return {
    person,
    teacher
  }
}