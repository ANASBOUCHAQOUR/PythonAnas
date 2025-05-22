const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter some words, separated by commas: ', (userInput) => {
    // Get user input and split into words
    const words = userInput.split(",").map(word => word.trim());

    // Find the longest word length
    let maxLength = 0;
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    // Create the border
    const border = '*'.repeat(maxLength + 4);
    console.log(border);

    // Print each word with padding
    for (const word of words) {
        console.log(`* ${word.padEnd(maxLength)} *`);
    }

    // Print the bottom border
    console.log(border);

    readline.close();
});