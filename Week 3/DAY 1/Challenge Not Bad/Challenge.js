// Create a sentence with "not" and "bad"
const sentence = "The movie is not that bad, I like it";

// Find the position of "not" and "bad"
const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

// Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // Get the part before "not"
    const beforeNot = sentence.substring(0, wordNot);
    // Get the part after "bad"
    const afterBad = sentence.substring(wordBad + 3);
    // Create new sentence with "good"
    const newSentence = `${beforeNot}good${afterBad}`;
    console.log("Result:", newSentence);
} else {
    console.log("Result:", sentence);
}
