class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); // Output: 'object'
// Why: When we create an instance of a class using 'new', it returns an object
// The 'typeof' operator returns 'object' for class instances 