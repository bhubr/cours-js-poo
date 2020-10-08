// deux attributs : firstname et lastname
// une méthode : sayHello
const person1 = {
  firstname: 'Mary',
  lastname: 'Poppins',
  sayHello: function() {
    console.log(`Hello, I am ${this.getFullName()}!`);
  },
  getFullName: function() {
    return `${this.firstname} ${this.lastname}`;
  }
};

person1.sayHello();


const person2 = {
  firstname: 'Darth',
  lastname: 'Vader',
  sayHello: function() {
    console.log(`Hello, I am ${this.getFullName()}!`);
  },
  getFullName: function() {
    return `${this.firstname} ${this.lastname}`;
  }
};

person2.sayHello();