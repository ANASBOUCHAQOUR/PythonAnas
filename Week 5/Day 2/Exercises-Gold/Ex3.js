// This code demonstrates concurrent execution of promises
// The promises start at the same time, but we wait for their results sequentially

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

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();  // Starts immediately
    const fast = resolveAfter1Second();   // Starts immediately
    console.log(await slow);              // Waits for slow to complete
    console.log(await fast);              // Waits for fast to complete
}

setTimeout(concurrentStart, 4000);  // Starts after 4 seconds

// Expected output sequence:
// 1. (After 4 seconds) "==CONCURRENT START with await=="
// 2. "starting slow promise"
// 3. "starting fast promise"
// 4. "fast promise is done"
// 5. "slow promise is done"
// 6. "slow"
// 7. "fast"
//
// Total execution time: ~6 seconds
// This is because:
// - The function starts after 4 seconds (setTimeout)
// - Both promises start immediately
// - Fast promise completes in 1 second
// - Slow promise completes in 2 seconds
// - Total time = 4 + 2 = 6 seconds
// Note: The promises run concurrently, so the total time is determined by the longest promise 