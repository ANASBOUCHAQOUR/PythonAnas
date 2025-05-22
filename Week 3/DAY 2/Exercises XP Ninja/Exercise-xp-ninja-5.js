function getUniqueElements(arr) {
    // Using Set to get unique elements
    return [...new Set(arr)];
}

// Example from the problem
const list = [1, 2, 3, 3, 3, 3, 4, 5];
const newList = getUniqueElements(list);

console.log("Original list:", list);
console.log("New list with unique elements:", newList);

// Additional test case
const list2 = [1, 2, 3, 3, 3, 3, 4, 5];
const newList2 = getUniqueElements(list2);

console.log("\nOriginal list:", list2);
console.log("New list with unique elements:", newList2);
