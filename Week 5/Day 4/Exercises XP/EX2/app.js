// app.js

import { people } from './data.js';

// Function to calculate the average age
function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  return totalAge / personArray.length;
}

// result
const averageAge = calculateAverageAge(people);
console.log(`The average age is ${averageAge}`);