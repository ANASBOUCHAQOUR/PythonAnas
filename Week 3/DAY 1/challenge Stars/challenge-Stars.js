// Method 1: Using a single loop
console.log("Method 1: Using a single loop");
let pattern = "";
for (let i = 1; i <= 6; i++) {
    pattern += "* ";
    console.log(pattern);
}

// Method 2: Using nested loops
console.log("\nMethod 2: Using nested loops");
for (let i = 1; i <= 6; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}
