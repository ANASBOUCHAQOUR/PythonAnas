// Function to display numbers divisible by a given divisor from 0 to 500, and their sum
function displayNumbersDivisible(divisor = 23) {
    let sum = 0;  // Changed from const to let since we need to modify it
    const numbers = [];  // This can stay const since we only push to it

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

// Call the function for the original exercise (divisor 23)
displayNumbersDivisible();

// Bonus: Try with other divisors
displayNumbersDivisible(3);
displayNumbersDivisible(45);
