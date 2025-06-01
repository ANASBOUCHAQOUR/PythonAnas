class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Option 1: Incorrect - missing super() call
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;  // Error: Must call super() before using 'this'
//   }
// }

// Option 2: Correct - properly calls super() with name parameter
class Labrador extends Dog {
  constructor(name, size) {
    super(name);  // Correctly calls parent constructor
    this.size = size;
  }
}

// Option 3: Incorrect - tries to use 'name' before it's defined
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);  // Error: 'name' is not defined
//     this.size = size;
//   }
// }

// Option 4: Incorrect - doesn't call super() and tries to set name directly
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;  // Error: Must call super() before using 'this'
//     this.size = size;
//   }
// }

// Test the correct implementation
const myLab = new Labrador('Rex', 'large');
console.log(myLab); // Output: Labrador { name: 'Rex', size: 'large' }

// Explanation: Option 2 is correct because:
// 1. It properly extends the Dog class
// 2. It calls super(name) to initialize the parent class
// 3. It correctly sets the size property after super() 