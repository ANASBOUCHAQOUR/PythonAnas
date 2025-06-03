// Exercise 1: Promise.all()
const promise1 = Promise.resolve(2);
const promise2 = 32;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Doo');
});
Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // Expected output: [2, 32, "Doo"]
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Explanation of the output:
// 1. promise1 resolves immediately with value 2
// 2. promise2 is not a promise, so it's converted to Promise.resolve(32)
// 3. promise3 resolves after 2 seconds with value 'Doo'
// 4. Promise.all() waits for all promises (including the 2-second timeout)
// 5. Finally, it returns an array [2, 32, "Doo"] in the same order as the input promises
