function isBlank(str) {
    // Checks if the string is empty or contains only whitespace
    return str.trim().length === 0;
}

// Test cases
console.log(isBlank(''));  
console.log(isBlank('abc'));   
console.log(isBlank('   '));   
console.log(isBlank('\n\t'));  
