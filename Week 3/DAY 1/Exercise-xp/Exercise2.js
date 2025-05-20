// Exercise 2: Your favorite colors

// Create an array of favorite colors
const colors = ["Blue", "Green", "Purple", "Red", "Orange"];

// Array of suffixes for numbers
const suffixes = ["st", "nd", "rd", "th", "th"];

// Basic version: Loop through colors and log choices
console.log("Basic version:");
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus version: Using suffixes
console.log("\nBonus version with suffixes:");
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
} 