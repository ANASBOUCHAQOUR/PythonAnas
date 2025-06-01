function keysAndValues(obj) {
    // Get sorted keys
    const keys = Object.keys(obj).sort();
    // Get values in the same order as sorted keys
    const values = keys.map(key => obj[key]);
    // Return both arrays
    return [keys, values];
}

// Test cases
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// Output: [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// Output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// Output: [["key1", "key2", "key3"], [true, false, undefined]]

// Additional test with unsorted keys
console.log(keysAndValues({ c: 3, a: 1, b: 2 }));
// Output: [["a", "b", "c"], [1, 2, 3]]
// Keys are sorted alphabetically regardless of input order 