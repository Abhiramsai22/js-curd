// function attachevenlistener(){
//     let count=0;
//     document.getElementById("clickme").addEventListener("click",function xyz(){
//         console.log("Button clicked",++count);
//     });
// }
// attachevenlistener();


// let a = 10
// let b=0
// try{
//     if(a==0 || b==0){
//         throw "Zero not allowed"
//         console.log("hia"); // unreachable
//     }
//     console.log(a/b) // if statement is satisfied then directlt jumps from throw to catch
// }catch(err){
//     console.warn(err);
// }

// let name='';
// let pass='';
// try{
//     if(name==''|| pass==''){
//         throw new Error("empty data is not allowed");
//     }
// }
// catch(err){
// console.error(err.message); 
// }




async function getRandomusers(){
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    if(!response.ok){
        throw new Error("somrthing went wrong")
    }
    let user = await response.json();
    displaydata(user);
}

function displaydata(user){
    let obj = user;
    let container = document.querySelector(".container");
    container.innerHTML=`
    <h2>Image</h2>
    <img src = '${obj.message}'>
    <p> Status : ${obj.status} </p>
    `
}

window.addEventListener("DOMContentLoaded",function(){
    setInterval(()=>{
        getRandomusers();
    },2000)
})

