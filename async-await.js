// // Async and await

// // callbacks
// //
// // callbacks Hells 
// // promises -> then chaining
// // consice- > async and await
// // then,catch,resolve,reject,all,any,allste,race,finally


// function get()
// {
//     let promise = Promise.resolve("hello world")
//     promise.then(res=>console.log(res))
//     console.log("Function data")
// }
// get();
// console.log("hey world")

// async function functionname(){
//     console.log("hey world")
// // async return promise object 
// }
// let varfac = async()=>{
//     console.log("hey world")
//     //async return promise object
// }

// let asyncfun = async function{
//     console.log("hey world")
//   // this async return promise object
//   // async return promise object
// }

// function getdata(){
//     return Promise.resolve("heii")
// }
// getdata().then(res=>console.log(res));

// async function getdata(){
//     return "hello world!";// returning promise object
// }
// getdata().then(res=>console.log(res));


/**
 * Async keyword can be used to make the function asynchrnous and implicity returns a promise object
 * 
 * await keyword can be used in only async function and modules,await is going block below statemets
 * unitl a promise is resolve or rejected
 * 
 */

// async function natureofawait() {
//     let promise1 = new Promise((resolve,reject)=>{
//         setTimeout(resolve,9000,"promise 1 is resolved")
//         // setTimeout(()=>{
//         //     resolve("promise 1 is resolved");
//         // },000)
//     })
//     let promise2 = new Promise((resolve,reject)=>{
//         setTimeout(resolve,1000,"Promise 2 is resolved")
//         // setTimeout(() => {
//         //     resolve("promise 2 is resolved")
//         // },1000);
//     })
//     // promise1.then(res=>console.log(res))
//     // promise2.then(res=>console.log(res))
    
//     let promise1res = await promise1;
//     let promise2res = await promise2;
//     console.log(promise1res);
//     console.log(promise2res);
// }
// natureofawait();


           
      