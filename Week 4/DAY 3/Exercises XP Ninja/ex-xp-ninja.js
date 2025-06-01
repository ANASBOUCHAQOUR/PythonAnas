class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
  
  // Create a new instance of the Flamingo class
  // This triggers the execution of the constructors, starting with Flamingo's
  const pet = new Flamingo();
  
  // Expected output:
  // "I'm pink. 🌸"
  // "I'm a bird. 🦢"
  // This order occurs because the console.log in the Flamingo constructor runs before super(),
  // and the console.log in the Bird constructor runs when super() is called.