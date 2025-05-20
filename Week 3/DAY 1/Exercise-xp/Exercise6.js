// Exercise 6: Rudolf

// Given object
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};

// Using for...in loop
let sentence = '';
for (const key in details) {
    sentence += `${key} ${details[key]} `;
}
console.log("Method 1 - Using for...in loop:");
console.log(sentence.trim());