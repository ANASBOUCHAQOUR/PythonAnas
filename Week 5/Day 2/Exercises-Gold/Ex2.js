// This code demonstrates sequential execution of promises using async/await
// The promises will execute one after another, waiting for each to complete

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

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart();

// Expected output sequence:
// 1. "==SEQUENTIAL START=="
// 2. "starting slow promise"
// 3. "slow promise is done"
// 4. "slow"
// 5. "starting fast promise"
// 6. "fast promise is done"
// 7. "fast"
//
// Total execution time: ~3 seconds
// This is because:
// - The promises run sequentially (one after another)
// - First promise takes 2 seconds
// - Second promise takes 1 second
// - Total time = 2 + 1 = 3 seconds 