function isOmnipresent(arr, value) {
    return arr.every(subArray => subArray.includes(value));
}

// Test cases
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));  // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));  // false
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3));  // true
