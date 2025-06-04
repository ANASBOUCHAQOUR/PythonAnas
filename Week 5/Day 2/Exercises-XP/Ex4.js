// This code demonstrates the use of Promises and async/await in JavaScript
// It shows how asynchronous operations can be handled in a more readable way

// This function creates and returns a Promise that resolves after 2 seconds
// It uses setTimeout to create a delay before resolving
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');  // After 2 seconds, the Promise resolves with 'resolved'
        }, 2000);  // 2000 milliseconds = 2 seconds
    });
}

// This is an async function that demonstrates the use of await
// async functions always return a Promise
async function asyncCall() {
    console.log('calling');  // This will log immediately
    let result = await resolveAfter2Seconds();  // Wait for the Promise to resolve
    console.log(result);  // This will log after 2 seconds
}

// Call the async function
asyncCall();

// Expected output sequence:
// 1. 'calling' (logged immediately)
// 2. After 2 seconds:
//    'resolved' (logged after the Promise resolves)
// 
// This demonstrates that:
// - The code doesn't block while waiting for the Promise
// - The await keyword makes the code wait for the Promise to resolve
// - The execution continues in a sequential manner within the async function
// - The program remains responsive during the 2-second delay