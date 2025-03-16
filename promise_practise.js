var promise1 = Promise.resolve("Helo world");
// console.log(promise1);
// promise1.then(msg=>console.log(msg));
// var promise2 = promise1.then(msg=>msg.toUpperCase())
// promise2.then(upp=>console.log(upp))

// var promise3 = Promise.reject("Rejected")
// promise3.then(msg=>console.log(msg),err=>console.error(err))

var promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 1 full filled")
    },200)
})

var promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("promise 2 full filled")
    },100)
})

var promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 3 full filled")
    }, 2000);
})



// Promise.any([promise1,promise2,promise3]).then(res=>console.log(res));

// Promise.race([promise1,promise2,promise3]).then(res=>console.log(res)).catch(err=>console.error(err))

// Promise.allSettled([promise1,promise2,promise3]).then(res=>console.log(res));

// Promise.all([promise1,promise2,promise3]).then(res=>console.log(res)).catch(err=>console.error(err))

// promise1.then(res=>
//     {
//         console.log(res);
//         promise2.then(res=>{
//             console.log(res);
//             {
// promise3.then(res=>console.log(res));
//             }
//     })
//     })

// promise1.then(res=>{
//     console.log(res);
//     return promise2;
// }).then(res=>{
//     console.log(res);
//     return promise3;
// }).then(res=>{
//     console.log(res);
// })


