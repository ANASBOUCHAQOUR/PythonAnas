function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) {
      return 0;
    }
  
    let max = Number.NEGATIVE_INFINITY;
  
    for (let i = 0; i < arrayNumber.length; i++) {
      const element = arrayNumber[i];
      if (typeof element === "number" && element > max) {
        max = element;
      }
    }
  
    if (max === Number.NEGATIVE_INFINITY) {
      return 0;
    }
    return max;
  }
  console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));
  console.log(biggestNumberInArray(['a', 3, 4, 2]));          
  console.log(biggestNumberInArray([]));                      
  console.log(biggestNumberInArray(['a', 'b']));
  console.log(biggestNumberInArray([1, 2, 3, 4, 5]));
  console.log(biggestNumberInArray([-1, -2, -3, -4, -5]));
  console.log(biggestNumberInArray([10, 20, 30, 40, 50]));
  console.log(biggestNumberInArray([-10, -20, -30, -40, -50]));
  console.log(biggestNumberInArray([100, 200, 300, 400, 500]));
  console.log(biggestNumberInArray([-100, -200, -300, -400, -500]));