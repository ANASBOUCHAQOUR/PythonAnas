// colorful-message.js
const chalk = require('chalk'); // Require the chalk package

function displayColorfulMessage() {
  const message = chalk.blue.bold('This is a colorful message using Chalk!');
  console.log(message);
}

module.exports = { displayColorfulMessage }; // Export the function 