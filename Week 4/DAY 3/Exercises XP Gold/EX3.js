class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();  // count = 1
counterOne.increment();  // count = 2

const counterTwo = counterOne;  // counterTwo references the same object as counterOne
counterTwo.increment();         // count = 3

console.log(counterOne.count);  // Output: 3
// Why: counterTwo is not a new Counter instance, but a reference to counterOne
// Therefore, incrementing counterTwo also increments counterOne's count
// The final count is 3 because:
// 1. counterOne.increment() -> count = 1
// 2. counterOne.increment() -> count = 2
// 3. counterTwo.increment() -> count = 3 (same object) 