/*
// part 1
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    // Call the inner function once
    addIngredients("apple", "banana", "carrot");
}

// Call the outer function
makeJuice("large");

// The code for Part I is commented out to avoid the redeclaration error with the makeJuice function in Part II.
// Uncomment this section and comment out Part II if you want to test Part I.
*/

 // part 2 
 function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    // Add 6 ingredients in total
    addIngredients("apple", "banana", "carrot");
    addIngredients("ginger", "orange", "lemon");

    // Display the result
    displayJuice();
}

// Call the function
makeJuice("medium");
