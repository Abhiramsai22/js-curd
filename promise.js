// console.log("customer ordered....")
// function placeorder(callback){
//     setTimeout(()=>{
//         callback(true);
//     },1000)
// }
// function checkingstock(callback){
//     setTimeout(()=>{
//         callback(true);
//     },2000)
// }
// function paymentReceived(callback){
//     setTimeout(()=>{
//         callback(true);
//     },3000)
// }
// function outofdelivery(){
//     setTimeout(()=>{
//         console.log("Deliverd")
//     },2000)
// }
// placeorder((status)=>{
//     if (status){
//         console.log("order placed")
//         checkingstock((status)=>{
//             if(status){
//                 console.log("stock is available")
//                 paymentReceived((status)=>{
//                     if(status){
//                         console.log("Payment Recieved")
//                         outofdelivery();
//                     }
//                     else{
//                         console.log("payment failed")
//                     }
//                 })
//             }
//             else{
//                 console.log("stock is not availabe")
//             }
//         })
//     }
//     else{
//         console.log("order placed failed")
//     }
// })


// var promise1=new Promise((resolve,reject)=>{
//     reject("order placed sucessfully")
// })
// // promise1.then(res=>console.log(res));
// // promise1.catch(res=> console.error(res));
// promise1.then(res=>console.log(res)).catch(err=>console.log(err));

// var promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello world")
//     },1000);
//     resolve("promise 1 succes");
// });
// promise1.then((res)=>console.log(res));

// Actual way of process

// function getpromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve("hello world !");
//             reject("rejected");
//         },5000);
//     });
// }
// getpromise().then(res=>console.log(res)).catch(err=>console.error(err));


// function add(val){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(val+10);
//         },1000)
//     })
// }

// function sub(val){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(val-5)
//         }, 1000);
//     })
// }

// // add(30).then(addres=> console.log(addres));
// add(30).then(addres=>sub(addres)).then(subres=> console.log(subres));

// Promise.resolve("hello world").then(res=> console.log(res));

console.log("customer ordered");

function placeorder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("placed sucessfully");
        },2000);
    })
}

function checkingstock(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Stock is available");
            reject("stock is not available")
        },1000)
    })
}

function paymentRecieved(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("payment Recived");
        },2000);
    })
}

function outofdelivery(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Delivered sucessfully")
        }, 1000);
    })
}

// placeorder()
// .then(()=>checkingstock())
// .then(()=>paymentRecieved())
// .then(()=> outofdelivery())

placeorder()
.then(res=>{
    console.log(res);
    return checkingstock();
}).then(res=>{
    console.log(res);
    return paymentRecieved();
}).then(res=>{
    console.log(res);
    return outofdelivery();
}).then(res=>{
    console.log(res);
}).catch(err=> console.error(err));
