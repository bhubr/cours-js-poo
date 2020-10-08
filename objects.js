const Person = require('./Person');
const Student = require('./Student');

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

const wilder1 = new Student('Waldo', 'Wild', 29, 'Remote');
wilder1.sayHello();
