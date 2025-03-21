let container = document.getElementById("container");
let loader = document.getElementById("loader");

const url = "https://brassy-local-arrow.glitch.me/movies";

const options = {
    method :'GET',
    headers :{
        'x-rapidapi-key': 'fef551e085mshfab2ef896e92915p197abfjsn89da4d2b3393',
		'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'

    },
};


async function getdata() {
    loader.style.display="block";
    try{
        let response = await fetch(url,options);
        if(!response.ok){
            throw new Error("Invalid or failed to fetch",response.status)
        }
        let result = await response.json();
        displaydata(result);
        console.log(result);
    }catch(err){
        console.error(err.message);
    }
}

async function displaydata(obj) {
    console.log(obj);
    container.innerHTML="";

    obj.forEach(element=>{
        let item = document.createElement("div")
        item.className="item"
        item.innerHTML=`
        <img src = "${element.Poster_Link}">
        <h2> <b> <i> "${element.Series_Title}"</b> </i> </h2>
        <p> ${element.Genre}</p>
        `
        container.appendChild(item)
    })
}

window.addEventListener("DOMContentLoaded",function(){
    getdata();
})