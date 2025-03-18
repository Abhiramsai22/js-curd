// //Defination and comparision
// //1)what is arrow function in java script,how does its syntax differ from a traditional function exprssion?
// //A)The Function which doesn't have function name and denoted by => is known as arrow function.it's increase to readability of anonymous function
// //Arrow functions are shorter and do not have their own this context.

// //question-2
// var add = (a,b)=>{
//     return a+b;
// }
// console.log(add(2,3));

// //Question3
// var square=n => n*n;

// console.log(square(4));

// //question-4
// //A)When an arrow function takes exactly one parameter, parentheses are optional.
// // This makes the function shorter and cleaner.
// // However, if there are zero or multiple parameters, parentheses are required.Multiple parameters (must use parentheses)
// //No parameters (must use parentheses)

// //question-5
// // Here are the two versions of an arrow function that calculates the cube of a number:
// // 1. Concise Body (Implicit Return)
// // No {} needed.
// // The return is implicit (automatically returned).
// const cube1 = x => x * x * x;
// console.log(cube1(3));

// // Block Body (Explicit Return)
// // Uses {} to define a block.
// // Must use return explicitly
// const cube2 = (x) => {
//     return x * x * x;
//   };
// console.log(cube2(3)); // Output: 27

// //Question-6
// var sub = (a,b)=>{
//     return a-b;
// }
// console.log(sub(5,1))

// //Question-7
// var n = ()=>{
//     console.log("Hello,world!");
// }
// n();


// function mysteriousFunction(a) {
//     let result = 0;
//     for (let i = 1; i <= a; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//     result += i * 2;
//     } else if (i % 3 === 0) {
//     result += i;
//     } else if (i % 5 === 0) {
//     result -= i;
//     }
//     }
//     return result;
//    }
   
//    console.log(mysteriousFunction(15));
   
