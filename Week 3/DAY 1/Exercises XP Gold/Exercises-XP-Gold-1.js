const numbers = [123, 8409, 100053, 333333333, 7];

for (const num of numbers) {
    if (num % 3 === 0) {
        console.log(`${num} is divisible by 3: false`);
    } else {
        console.log(`${num} is divisible by 3: true`);
    }
}