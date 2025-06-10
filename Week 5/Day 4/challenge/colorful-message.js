// colorful-message.js
const chalk = require('chalk').default; // Require the chalk package as default

function displayColorfulMessage() {
  const message = chalk.blue.bold('This is a colorful message using Chalk!');
  console.log(message);
}

module.exports = { displayColorfulMessage }; // Export the function 