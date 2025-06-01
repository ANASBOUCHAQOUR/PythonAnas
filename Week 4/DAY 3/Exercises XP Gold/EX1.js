// Function that destructures the object parameter directly in the parameters
function printFullName({ first, last }) {
    return `Your full name is ${first} ${last}`;
}

// Test the function
console.log(printFullName({first: 'Elie', last:'Schoppik'}));
// Output: 'Your full name is Elie Schoppik'

// Compare with displayStudentInfo from Exercise XP
function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// Output: 'Your full name is Elie Schoppik'
// Both functions produce the same output, but printFullName uses destructuring in parameters 