// Require modules from previous tasks
const { greet } = require('./greeting');
const { displayColorfulMessage } = require('./colorful-message');
const { readFileContent } = require('./read-file');

console.log('--- Modules loaded successfully ---');

// --- Task 1: Greet the user ---
const userName = "Node.js Challenger";
const greetingMessage = greet(userName);
console.log(greetingMessage);

// --- Task 2: Display a colorful message ---
displayColorfulMessage();

// --- Task 3: Read and display file content ---
readFileContent();