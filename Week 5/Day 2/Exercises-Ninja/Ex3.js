// This code demonstrates parallel execution using async/await with Promise.all
// The promises are executed in parallel and their results are logged as they complete

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

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000);

// Expected output sequence:
// 1. (After 5 seconds) "==PARALLEL with await Promise.all=="
// 2. "starting slow promise"
// 3. "starting fast promise"
// 4. "fast promise is done"
// 5. "fast"
// 6. "slow promise is done"
// 7. "slow"
//
// Total execution time: ~7 seconds
// This is because:
// - The function starts after 5 seconds (setTimeout)
// - Both promises start immediately
// - Fast promise completes and logs in 1 second
// - Slow promise completes and logs in 2 seconds
// - Total time = 5 + 2 = 7 seconds
// Note: The promises run in parallel, and their results are logged as soon as they complete
// The order of the "done" and value logs might vary depending on timing 