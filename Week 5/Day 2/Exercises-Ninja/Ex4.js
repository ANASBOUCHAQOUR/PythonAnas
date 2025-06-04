// This code demonstrates parallel execution using Promise.then
// The promises are executed independently without waiting for each other

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000);

// Expected output sequence:
// 1. (After 13 seconds) "==PARALLEL with Promise.then=="
// 2. "starting slow promise"
// 3. "starting fast promise"
// 4. "fast promise is done"
// 5. "fast"
// 6. "slow promise is done"
// 7. "slow"
//
// Total execution time: ~15 seconds
// This is because:
// - The function starts after 13 seconds (setTimeout)
// - Both promises start immediately
// - Fast promise completes in 1 second
// - Slow promise completes in 2 seconds
// - Total time = 13 + 2 = 15 seconds
//
// Important notes:
// 1. This approach doesn't handle errors (no .catch())
// 2. The promises run completely independently
// 3. There's no coordination between the promises
// 4. The order of completion and logging is not guaranteed
// 5. This is the most basic form of parallel execution 