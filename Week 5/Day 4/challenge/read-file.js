// read-file.js
const fs = require('fs'); // Require the built-in fs module
const path = require('path'); // Require the built-in path module for robust path handling

function readFileContent() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt'); // Construct absolute path

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('\n--- Content of file-data.txt ---');
    console.log(data);
  });
}

module.exports = { readFileContent }; // Export the function