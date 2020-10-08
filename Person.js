class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  sayHello() {
    console.log(this.getGreeting());
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  getGreeting() {
    return `Hello, I am ${this.getFullName()} and I am ${this.age} years old!`;
  }
}

module.exports = Person;