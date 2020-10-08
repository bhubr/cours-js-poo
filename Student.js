const Person = require('./Person');

class Student extends Person {
  constructor(firstname, lastname, age, school) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.school = school;
  }
}

module.exports = Student;
