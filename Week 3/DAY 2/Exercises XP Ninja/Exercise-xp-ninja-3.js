function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test
console.log("madam:", isPalindrome("madam")); 
console.log("bob:", isPalindrome("bob")); 
console.log("kayak:", isPalindrome("kayak"));
console.log("hello:", isPalindrome("hello")); 
console.log("A man, a plan, a canal: Panama:", isPalindrome("A man, a plan, a canal: Panama"));
console.log("Was it a car or a cat I saw?:", isPalindrome("Was it a car or a cat I saw?")); 
