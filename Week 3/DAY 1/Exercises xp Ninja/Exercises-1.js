// Create two person objects with their details and BMI calculation method
const person1 = {
    fullName: "Anas Bouchaqour",
    mass: 62, // in kg
    height: 1.70, // in meters
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

const person2 = {
    fullName: "abdelali lebbar",
    mass: 90, // in kg
    height: 1.80, // in meters
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

// Function to compare BMI of two people
function compareBMI(person1, person2) {
    const bmi1 = person1.calculateBMI();
    const bmi2 = person2.calculateBMI();
    
    console.log(`${person1.fullName}'s BMI: ${bmi1.toFixed(2)}`);
    console.log(`${person2.fullName}'s BMI: ${bmi2.toFixed(2)}`);
    
    if (bmi1 > bmi2) {
        console.log(`${person1.fullName} has the larger BMI`);
    } else if (bmi2 > bmi1) {
        console.log(`${person2.fullName} has the larger BMI`);
    } else {
        console.log("Both have the same BMI");
    }
}

// Call the comparison function
compareBMI(person1, person2);
