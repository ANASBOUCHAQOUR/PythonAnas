const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
      return new Promise((resolve, reject) => {
          const morseObj = JSON.parse(morse);
          if (Object.keys(morseObj).length === 0) {
              reject("Morse object is empty");
          } else {
              resolve(morseObj);
          }
      });
  }
  
  function toMorse(morseJS) {
      return new Promise((resolve, reject) => {
          const userInput = window.prompt("Enter a word or sentence:");
          if (userInput === null) {
              reject("No input provided");
              return;
          }
          const morseArray = [];
          for (const char of userInput.toLowerCase()) {
              if (morseJS[char]) {
                  morseArray.push(morseJS[char]);
              } else {
                  reject(`Character "${char}" does not exist in the morse object.`);
                  return;
              }
          }
          resolve(morseArray);
      });
  }
  
  function joinWords(morseTranslation) {
      const joinedMorse = morseTranslation.join("\n");
      document.body.innerHTML = `<pre>${joinedMorse}</pre>`;
  }
  
  toJs()
      .then((morseJS) => toMorse(morseJS))
      .then((morseTranslation) => joinWords(morseTranslation))
      .catch((error) => console.error("Error:", error));