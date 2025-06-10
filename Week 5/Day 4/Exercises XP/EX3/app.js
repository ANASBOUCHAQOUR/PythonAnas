const { readFile, writeFile } = require('./fileManager');

readFile('Hello World.txt', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err);
  }

  console.log('Read content:', data);

  writeFile('Bye World.txt', 'Writing to the file', (err) => {
    if (err) {
      return console.error('Error writing file:', err);
    }
    console.log('Successfully wrote to Bye World.txt');
  });
});