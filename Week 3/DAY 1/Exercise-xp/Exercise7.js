// Exercise 7: Secret Group

// Given array of names
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Method 1: Using map and sort
const secretName = names
    .map(name => name[0])  // Get first letter of each name
    .sort()                // Sort letters alphabetically
    .join('');            // Join letters into a string

console.log("Secret Society Name:", secretName);

// Method 2: Step by step (for understanding)
console.log("\nStep by step process:");
console.log("1. Original names:", names);

const firstLetters = names.map(name => name[0]);
console.log("2. First letters:", firstLetters);

const sortedLetters = firstLetters.sort();
console.log("3. Sorted letters:", sortedLetters);

const finalName = sortedLetters.join('');
console.log("4. Final secret name:", finalName); 