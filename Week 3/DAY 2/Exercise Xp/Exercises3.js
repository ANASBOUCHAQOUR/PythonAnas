// Function to check if you have enough change to afford an item
function changeEnough(itemPrice, amountOfChange) {
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    const totalChange = (amountOfChange[0] * quarterValue) +  
                       (amountOfChange[1] * dimeValue) +      
                       (amountOfChange[2] * nickelValue) +    
                       (amountOfChange[3] * pennyValue);      

    return totalChange >= itemPrice;
}

// Test exercise    
console.log(changeEnough(4.25, [25, 20, 5, 0]));  
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 