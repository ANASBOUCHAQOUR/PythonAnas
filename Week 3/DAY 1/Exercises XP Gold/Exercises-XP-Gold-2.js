// Import readline module
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Guest list object with student names and their countries
const guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};

// Prompt the user for their name
readline.question("What is your name? ", (name) => {
    const studentName = name.toLowerCase(); // convert to lowercase for matching

    // Check if the name exists in the object
    if (studentName in guestList) {
        console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
    } else {
        console.log("Hi! I'm a guest.");
    }

    // Close the readline interface
    readline.close();
});
  