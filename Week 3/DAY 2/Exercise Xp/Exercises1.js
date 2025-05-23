function displayNumbersDivisible(divisor = 23) {
    let sum = 0;  
    const numbers = []; 
    // Loop from 0 to 500
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i); // Collect the number
            sum += i;        // Add to sum
        }
    }

    // Print all numbers on one line
    console.log(numbers.join(' '));
    // Print the total sum
    console.log(`Sum: ${sum}`);
}

//function exercise divisor 23
displayNumbersDivisible();

// Bonus: Try other divisors
displayNumbersDivisible(3);
displayNumbersDivisible(45);
