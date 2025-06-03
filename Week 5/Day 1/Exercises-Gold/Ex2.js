// Exercise 2: Analyse Promise.all()

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
    .then(result => {
        console.log(result); // Expected output: [2, 4, 6]
    });

// Analysis of the code:
// 1. timesTwoAsync is a function that:
//    - Takes a number x
//    - Returns a Promise that resolves with x * 2
//
// 2. arr.map(timesTwoAsync) creates an array of promises:
//    - [Promise(2), Promise(4), Promise(6)]
//    - Each promise resolves with the input number multiplied by 2
//
// 3. Promise.all(promiseArr):
//    - Takes the array of promises
//    - Waits for all promises to resolve
//    - Returns an array of resolved values: [2, 4, 6]
//
// The output will be [2, 4, 6] because:
// - 1 * 2 = 2
// - 2 * 2 = 4
// - 3 * 2 = 6
// All promises resolve immediately, so the output appears right away
