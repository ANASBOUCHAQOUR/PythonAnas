// Exercise 5: Family

// Create a family object with key-value pairs
const family = {
    father: "John",
    mother: "Mary",
    son: "David",
    daughter: "Sarah",
    pet: "Max",
    address: "123 Family Street"
};

// Using for...in loop to console.log the keys
console.log("Family object keys:");
for (const key in family) {
    console.log(key);
}

// Using for...in loop to console.log the values
console.log("\nFamily object values:");
for (const key in family) {
    console.log(family[key]);
}

// Bonus: Show both keys and values together
console.log("\nFamily members and their details:");
for (const key in family) {
    console.log(`${key}: ${family[key]}`);
} 