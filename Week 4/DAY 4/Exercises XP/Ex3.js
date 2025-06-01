const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

// Convert the JS object to a JSON string
const marioGameJSON = JSON.stringify(marioGame);

// Pretty print the JSON object
const marioGamePrettyJSON = JSON.stringify(marioGame, null, 2);

console.log("Mario Game (JSON string):");
console.log(marioGameJSON);

console.log("\nMario Game (Pretty-printed JSON):");
console.log(marioGamePrettyJSON);

// Analyze what happens to nested objects:
// When converting a JavaScript object with nested objects to JSON, the nested objects
// are also converted to their JSON representation. JSON is a format for representing
// data structures, including nested ones, in a human-readable text format.
// The structure and data within the nested objects are preserved in the JSON output. 