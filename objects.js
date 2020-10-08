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

const person3 = new Person('Jane', 'Austen', 20);
person3.sayHello();
const person4 = new Person('Georges', 'Abitbol', 30);
person4.sayHello();

// deux attributs : firstname et lastname
// une méthode : sayHello
const person1 = new Person('Mary', 'Poppins', 25);
person1.sayHello();


const person2 = new Person('Darth', 'Vader', 60);
person2.sayHello();