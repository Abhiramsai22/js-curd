function addData(){
    var username = document.getElementById("username");
    var message = document.getElementById("message");
    postData(username.value,message.value)
}

function postData(username,message){
    var url="http://localhost:3000/users";
    var options = {
        "method" :"POST",
        "headers" : {
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            username,
            message
        })
    }
    fetch(url,options)
    .then(response=>{
        if(response.ok){
            alert("Data added sucessfully...");
            displayData();
        }
    })
    .catch(err=>{
        alert("something fishy");
        console.error(err);
    })

}

function displayData(){
    var container = document.getElementById("container");
    fetch("http://localhost:3000/users")
    .then(response=>response.json())
    .then(data=>{
        for(var obj of data){
            // Creating elements for every new object
            var item = document.createElement("div")
            item.className="item"

            var usernamepara = document.createElement("p");
            var messagepara = document.createElement("p");

            // acessing data from obj
            var{username,message}=obj;

            // adding data in to paragraph
            usernamepara.innerText=username;
            messagepara.innerText=message;

            item.appendChild(messagepara);
            item.appendChild(usernamepara);

            container.appendChild(item);
        }
    })
}
displayData();