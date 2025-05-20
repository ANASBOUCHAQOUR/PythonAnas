let userInput = prompt("Please enter a number:");
let number = Number(userInput);

while (number < 10) {
    userInput = prompt("Number is too small. Please enter a number >= 10:");
    number = Number(userInput);
}

console.log("Thank you! You entered:", number);
