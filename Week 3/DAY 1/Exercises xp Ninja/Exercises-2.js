// Function to calculate average grade
function calculateAverage(gradesList) {
    // Check if array is empty
    if (gradesList.length === 0) {
        return 0;
    }
    
    // Calculate sum of all grades
    const sum = gradesList.reduce((total, grade) => total + grade, 0);
    
    // Calculate and return average
    return sum / gradesList.length;
}

// Function to check if student passed or failed
function checkPassStatus(average) {
    if (average >= 65) {
        return "passed";
    }
    return "failed and must repeat the course";
}

// Main function that uses both helper functions
function findAvg(gradesList) {
    // Calculate average using first function
    const average = calculateAverage(gradesList);
    
    // Get pass/fail status using second function
    const status = checkPassStatus(average);
    
    // Display results
    console.log(`Average grade: ${average.toFixed(2)}`);
    console.log(`The student has ${status}`);
}

// Test cases
console.log("Test Case 1: Passing grades");
findAvg([85, 90, 75, 80, 95]);

console.log("\nTest Case 2: Failing grades");
findAvg([45, 50, 60, 55, 40]);

console.log("\nTest Case 3: Empty array");
findAvg([]);
