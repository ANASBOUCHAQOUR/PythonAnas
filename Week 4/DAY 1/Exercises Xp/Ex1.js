// # 1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?


// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// Prediction for Ex1.js

// # 1
// function funcOne()
// let a = 5; if(a > 1) { a = 3; } alert(a);

// #1.1 - run in the console: funcOne()
// Prediction: The alert inside funcOne will show '3'.
// Explanation: 'a' is declared with `let` within the scope of funcOne. It starts at 5. The `if` condition (5 > 1) is true, so 'a' is reassigned to 3 within the same scope. The alert displays this updated value.

// #1.2 What will happen if the variable is declared
// with const instead of let ?
// Prediction: A TypeError will occur at the line 'a = 3;'
// Explanation: If 'a' is declared with `const`, its value cannot be reassigned. The line `a = 3;` attempts to reassign it, which is not allowed for `const` variables.


//#2
// let a = 0; (global)
// function funcTwo() { a = 5; }
// function funcThree() { alert(a); }

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// Prediction: The first alert will show '0', and the second alert will show '5'.
// Explanation: The `let a = 0;` declares a global variable 'a'. `funcThree` accesses this global 'a' (value 0). `funcTwo` also accesses the global 'a' (since no 'a' is declared inside funcTwo) and reassigns it to 5. The second call to `funcThree` now accesses the modified global 'a' (value 5).

// #2.2 What will happen if the variable is declared
// with const instead of let ?
// Prediction: A TypeError will occur at the line 'a = 5;' inside funcTwo.
// Explanation: If the global 'a' is declared with `const`, it cannot be reassigned. `funcTwo` attempts to reassign it, causing a TypeError.


//#3
// function funcFour() { window.a = "hello"; }
// function funcFive() { alert(a); }

// #3.1 - run in the console:
// funcFour()
// funcFive()
// Prediction: The alert inside funcFive will show 'hello'.
// Explanation: `funcFour` explicitly creates a property `a` on the global `window` object, setting its value to "hello". `funcFive` accesses the global scope, finds `window.a` (or just `a` in the global context), and alerts its value.

//#4
// let a = 1; (global)
// function funcSix() { let a = "test"; alert(a); }

// #4.1 - run in the console: funcSix()
// Prediction: The alert inside funcSix will show 'test'.
// Explanation: The `let a = "test";` inside `funcSix` declares a *new* variable 'a' that is local to the `funcSix` scope. This local 'a' shadows the global 'a'. The alert displays the value of the local 'a'. The global 'a' (value 1) remains unchanged.

// #4.2 What will happen if the variable is declared
// with const instead of let ?
// Prediction: If the global 'a' was `const`, no change would occur for the alert inside funcSix (it would still show 'test'). If the local 'a' inside funcSix was `const`, the alert would still show 'test'.
// Explanation: The alert inside funcSix refers to the `a` declared locally within funcSix. Whether this local `a` is `let` or `const` doesn't affect its value at the `alert` line. The global `a` is not accessed by `funcSix` at all, so changing the global `a` to `const` also wouldn't affect the alert inside funcSix.


//#5
// let a = 2; (global)
// if (true) { let a = 5; alert(a); }
// alert(a); (global)

// #5.1 - run the code in the console
// Prediction: The first alert (in the if block) will show '5'. The second alert (outside the if block) will show '2'.
// Explanation: The `let a = 2;` declares a global variable 'a'. Inside the `if` block, `let a = 5;` declares a *new* variable 'a' that is local to the block scope. The first alert accesses this block-scoped 'a' (value 5). After the block finishes, the block-scoped 'a' is gone, and the second alert accesses the global 'a' again (value 2).

// #5.2 What will happen if the variable is declared
// with const instead of let ?
// Prediction: If the global 'a' was `const`, the first alert would still show '5', and the second alert would still show '2'. If the block-scoped 'a' was `const`, the first alert would still show '5'.
// Explanation: Similar to #4, `const` respects block scope. A `const` in the global scope cannot be reassigned (though no reassignment happens here). A `const` in the block scope is local to that block. Changing `let` to `const` in either the global or block scope in this specific code snippet would not change the predicted values at the alert points, because neither variable is reassigned after its initial declaration within its scope. 