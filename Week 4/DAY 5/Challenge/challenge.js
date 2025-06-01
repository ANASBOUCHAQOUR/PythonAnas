function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
    
    // Sort characters and compare
    return cleanStr1.split('').sort().join('') === 
           cleanStr2.split('').sort().join('');
}

// Test cases
console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("hello", "world")); // false