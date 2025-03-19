// function getdata(){
//     fetch("http://localhost:2000/products")
// .then(res=>res.json())
// .then(data=>console.log(data))
// }
// getdata()


// async function getdata(){
//     try{
//     let response =  await fetch("http://localhost:2000/products");
//     let data = await response.json();
//     console.log(data)
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getdata();


let container = document.createElement("div");
document.body.appendChild(container); // Append the container to the body
let url = "https://cerulean-crystalline-beauty.glitch.me/users";

let titleinput = document.getElementById("title");
let priceinput = document.getElementById("price");
let descriptioninput = document.getElementById("description");
let idinput = document.getElementById("id");
let btn = document.getElementById("btn");

btn.addEventListener("click",async function(){
    if(titleinput.value=='' || priceinput.value=='' || descriptioninput.value==''){
        alert("enter data properly");
    }
    else{
        let method = idinput.value ? "PUT" : "POST";
        let mainurl = (method=="PUT") ? `${url}/${idinput.value}`:url;
        try{
            let response = await fetch(mainurl,{
                method,
                "headers":{
                "content-type":"application/json"
                },
                "body":JSON.stringify({
                    "title":titleinput.value,
                    "price":priceinput.value,
                    "description":descriptioninput.value
                })
            });
            if(response.ok){
                getData();
                alert((method=="PUT")?"Data updated" : "Data added")
            }
        }
        catch(err)
            {
                console.error(err);

            }
    }
});

async function getData() {
    try{
        let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayData(data); // Pass the fetched data to displayData
    }
    }
    catch(err){
        console.error(err);
    }
}

function displayData(products) {
    container.innerHTML = '';
    products.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML = `
        <p>${obj.title}</p>
        <p>${obj.price}</p>
        <p>${obj.description}</p>
        <button onclick=deletedata('${obj.id}')>Delete</button>
        <button onclick=updatedata('${obj.id}')>Update</button>
        `;
        container.appendChild(item);
    });
}
async function updatedata(id) {
    try{
    let response = await fetch(`${url}/${id}`)
    let obj = await response.json();
    titleinput.value = obj.title;
    priceinput.value = obj.price;
    descriptioninput = obj.description;
    idinput = obj.id;
    window.scroll({
        top:0,
        behavior:"smooth"
    });
    }
    catch(err){
        console.error(err);
    }
    
}

async function deletedata(id){
    try{
        let response=await fetch(`${url}/${id}`,{"method":"DELETE"})
    if(response.ok){
        getData();
        alert("Data Deleted");
    }
    }
    catch(err){
        console.error(err);
    }
}
getData();

