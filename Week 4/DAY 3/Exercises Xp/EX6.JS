// Part 1: Evaluate these expressions
console.log([2] === [2]);  // Output: false
// Why: Arrays are objects, and objects are compared by reference, not value
// These are two different array objects in memory

console.log({} === {});    // Output: false
// Why: Same reason as above - these are two different object references

// Part 2: Object property values
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number); // Output: 4
// Why: object2 references the same object as object1

console.log(object3.number); // Output: 4
// Why: object3 references the same object as object2 (and object1)

console.log(object4.number); // Output: 5
// Why: object4 is a separate object with its own number property

// Part 3: Animal and Mammal classes
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    sound(sound) {
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

// Create a farmerCow instance
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));
// Output: "Moooo I'm a cow, named Lily and I'm brown and white" 