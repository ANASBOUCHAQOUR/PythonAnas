// Part I - Review about arrays

// Initial array
const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg" from the people array
people.shift();
console.log("1. After removing Greg:", people);

// 2. Replace "James" with "Jason"
const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
    people[jamesIndex] = "Jason";
}
console.log("2. After replacing James with Jason:", people);

// 3. Add your name to the end of the people array
people.push("Anas");
console.log("3. After adding my name:", people);

// 4. Console.log Mary's index
const maryIndex = people.indexOf("Mary");
console.log("4. Mary's index:", maryIndex);

// 5. Make a copy of the people array using slice method
// First, let's see what the array looks like now
console.log("Current array:", people); // ["Mary", "Devon", "Jason", "Anas"]
const peopleCopy = people.slice(1, 3); // This will get ["Devon", "Jason"]
console.log("5. Copy of array (excluding Mary and my name):", peopleCopy);

// 6. Find index of "Foo"
const fooIndex = people.indexOf("Foo");
console.log("6. Index of 'Foo':", fooIndex);
console.log("   It returns -1 because 'Foo' is not in the array");

// 7. Get the last element of the array
const last = people[people.length - 1];
console.log("7. Last element:", last);

// Part II - Loops

// 8. Iterate through the people array and console.log each person
console.log("\n8. Iterating through all people:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 9. Iterate through the people array and exit after console.log "Devon"
console.log("\n9. Iterating until Devon:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
} 