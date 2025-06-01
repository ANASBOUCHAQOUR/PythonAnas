function displayStudentInfo(objUser) {
    // Destructure first and last from objUser
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

// Test the function
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// Output: 'Your full name is Elie Schoppik' 