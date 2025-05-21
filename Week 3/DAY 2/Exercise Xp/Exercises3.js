// Function to check if you have enough change to afford an item
function changeEnough(itemPrice, amountOfChange) {
    // Define the value of each coin type
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    // Calculate total change by multiplying each coin count by its value
    const totalChange = (amountOfChange[0] * quarterValue) +  // quarters
                       (amountOfChange[1] * dimeValue) +      // dimes
                       (amountOfChange[2] * nickelValue) +    // nickels
                       (amountOfChange[3] * pennyValue);      // pennies

    // Return true if total change is greater than or equal to item price
    return totalChange >= itemPrice;
}

// Test cases from the exercise
console.log(changeEnough(4.25, [25, 20, 5, 0]));  
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 

// Additional test cases
console.log(changeEnough(14.11, [2,100,0,0])); 
console.log(changeEnough(0.75, [0,0,20,5])); 
console.log(changeEnough(1.00, [4,0,0,0])); 
console.log(changeEnough(0.50, [1,2,1,5])); 