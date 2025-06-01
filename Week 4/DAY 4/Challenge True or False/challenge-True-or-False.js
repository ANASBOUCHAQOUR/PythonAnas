function allTruthy(...args) {
return args.every(Boolean); // Boolean() converts each to true/false
  }  
console.log(allTruthy(1, "hello", true, []));      // true
console.log(allTruthy(1, 0, "hello"));             // false (0 is falsy)
console.log(allTruthy("yes", null, true));         // false (null is falsy)
console.log(allTruthy(true, 5, "ok", {}));         // true