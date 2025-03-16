// let table = document.createElement("table")
// let trhead = document.createElement("tr");
// // let headings = ["sno","name","rollno"]

// // for(let heading of headings){
// //     let th = document.createElement("th");
// //     th.innerText=heading;
// //     trhead.appendChild(th)
// // }
// // table.appendChild(trhead);
// // console.log(table)

// let data = [
//     ['1','abhi','66'],
//     ['2','ram','77'],
//     ['3',"sai",'88'],
//     ['4','hi','99'],
//     ['5','bye','100']
// ];

// for(let element of data){
//     let tr = document.createElement("tr");
//     for(let item of element){
//         let td = document.createElement("td");
//         td.innerText=item;
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }
// // console.log(table);

// document.body.appendChild(table);

let container = document.createElement("div");

container.className="container";

let loader = document.getElementById("loader");

function fetchData(){
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>displaydata(data))
    .catch(err=>console.log(err))
}
 function displaydata(products){
    for(let obj of products){
        let item = document.createElement("div");
        item.className="item";
        item.innerHTML=`
        <img src = '${obj.image}' class = 'image'>
        <p class = 'text' > ${obj.title}-<span>${obj.price}</span></p>
        <p class = 'description'>${obj.description}</p>
        <p class = 'rating'> ${obj.rating.rate}</p>
        `;
        container.appendChild(item);
    }
    loader.remove();
    document.body.appendChild(container);
}

fetchData();