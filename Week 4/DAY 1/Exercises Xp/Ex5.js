// Exercise 5: Kg and grams

// Function Declaration
function kgToGramsDeclaration(kilograms) {
  return kilograms * 1000;
}

// Invoke function declaration
console.log(`2 kg is ${kgToGramsDeclaration(2)} grams`);

// Function Expression
const kgToGramsExpression = (kilograms) => kilograms * 1000;

// Invoke function expression
console.log(`3 kg is ${kgToGramsExpression(3)} grams`);

// One-line Arrow Function
const kgToGramsArrow = (kilograms) => kilograms * 1000;

// Invoke arrow function
console.log(`4 kg is ${kgToGramsArrow(4)} grams`); 