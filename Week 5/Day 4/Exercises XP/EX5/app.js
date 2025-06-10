const _ = require('lodash');
const math = require('./math');

// Custom module usage
const sum = math.add(7, 5);
const product = math.multiply(3, 4);

// Lodash usage
const numbers = [15, 30, 45, 60];
const average = _.mean(numbers);
const max = _.max(numbers);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Average: ${average}`);
console.log(`Max: ${max}`); 