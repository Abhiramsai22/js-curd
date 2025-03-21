
let container = document.getElementById("container");

let btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    let title = document.getElementById("title");
    let price = document.getElementById("price");
    let description = document.getElementById("description");
    if(title.value=="" || price.value=="" || description.value==""){
        alert("Enter Data properly");
    }
    else{
        let options={
            "method":"POST",
            "headers":{
                "content-Type":"application/json"
            },
            "body":JSON.stringify({
                "title":title.value,
                "price":price.value,
                "description":description.value
            })
        }
        fetch("http://localhost:8000/users",options)
        .then(res=>{
            if(res.ok){
                title.value='';
                price.value='';
                description.value='';
                getdata();
                alert("Data added")
            }
        })
    }
})

function getdata() {
    fetch("http://localhost:8000/users")
    .then(res => res.json())
    .then(data => displaydata(data))
    .catch(error => console.error("Error fetching data:", error));
}

function displaydata(products) {
    let container = document.getElementById("container");
    container.innerHTML=``;

    products.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML = `
            <p>${obj.title}</p>
            <p>${obj.description}</p>
            <button onclick=deletedata('${obj.id}')> Delete </button>

        `;
        container.appendChild(item);
    });
}

function deletedata(id){
    let options = {
        "method":"DELETE"
    }
    fetch(`http://localhost:8000/users/${id}`,options)
    .then(res=>{
        if(res.ok){
            getdata();
            alert("Data deleted")
        }
    })
    .catch(err=>console.error(err));
}

getdata();
