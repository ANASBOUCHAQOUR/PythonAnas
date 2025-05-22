function abbrevName(str) {
    // Split the string into words
    const words = str.trim().split(' ');
    
    // If there's only one word, return it as is
    if (words.length === 1) {
        return words[0];
    }
    
    // Get the first word and its first letter
    const firstName = words[0];
    const firstInitial = firstName.charAt(0);
    
    // Get the last word
    const lastName = words[words.length - 1];
    
    // Return the abbreviated form
    return `${firstInitial}. ${lastName}`;
}

// Test cases
console.log(abbrevName("John Doe"));           // "J. Doe"
console.log(abbrevName("Robin Singh"));        // "R. Singh"
// spellchecker: disable-next-line
console.log(abbrevName("John Ronald Reuel Tolkien")); // "J. Tolkien"
console.log(abbrevName("Alice"));              // "Alice"
console.log(abbrevName("  John   Doe  "));     // "J. Doe" (handles extra spaces)
