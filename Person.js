class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, I am ${this.getFullName()} and I am ${this.age} years old!`);
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

module.exports = Person;