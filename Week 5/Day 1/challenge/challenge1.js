// Function 1: makeAllCaps
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === "string")) {
        const uppercased = words.map(word => word.toUpperCase());
        resolve(uppercased);
      } else {
        reject("Error: Not all items are strings!");
      }
    });
  }
  
  // Function 2: sortWords
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sorted = words.sort(); // Alphabetical order
        resolve(sorted);
      } else {
        reject("Error: Array length must be greater than 4 to sort!");
      }
    });
  }
  
  // TEST
  
  //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
.catch(error => console.log(error))