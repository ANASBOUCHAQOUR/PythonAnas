// This code demonstrates concurrent execution using Promise.all
// All promises start at the same time and we wait for all of them to complete

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

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);  // Will log "slow"
        console.log(messages[1]);  // Will log "fast"
    });
}

setTimeout(concurrentPromise, 1000);

// Expected output sequence:
// 1. (After 1 second) "==CONCURRENT START with Promise.all=="
// 2. "starting slow promise"
// 3. "starting fast promise"
// 4. "fast promise is done"
// 5. "slow promise is done"
// 6. "slow"
// 7. "fast"
//
// Total execution time: ~3 seconds
// This is because:
// - The function starts after 1 second (setTimeout)
// - Both promises start immediately
// - Promise.all waits for both promises to complete
// - Fast promise takes 1 second
// - Slow promise takes 2 seconds
// - Total time = 1 + 2 = 3 seconds
// Note: The promises run concurrently, but we wait for both to complete before logging the results 