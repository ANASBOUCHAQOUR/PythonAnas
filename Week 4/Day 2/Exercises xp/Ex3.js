//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// Why: ...vegetables spreads into 'carrot' and 'potato', ...fruits spreads into 'apple' and 'orange'

//------2------
const country = "USA";
console.log([...country]); // Output: ['U', 'S', 'A']
// Why: spread operator splits string into individual characters

//------Bonus------
const newArray = [undefined, undefined];
console.log(newArray); // Output: [undefined, undefined]
// Why: creates array with two undefined values