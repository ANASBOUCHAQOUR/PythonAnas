// Resolved promise
const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(result => console.log("Resolved with:", result));

// Rejected promise
const rejectedPromise = Promise.reject("Noo!");
rejectedPromise.catch(error => console.log("Rejected with:", error));