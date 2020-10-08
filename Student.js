const Person = require('./Person');

class Student extends Person {
  constructor(firstname, lastname, age, school) {
    super(firstname, lastname, age);
    this.school = school;
  }

  sayHello() {
    console.log(`${super.getGreeting()} ${this.getGreeting()}`);
  }

  getGreeting() {
    return `I'm a student in ${this.school} school!`;
  }
}

module.exports = Student;
