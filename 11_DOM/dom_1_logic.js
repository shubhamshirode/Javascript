// document.body.style.backgroundColor = "orangered";
document.body.style.color="White";
document.body.style.fontSize = "25px";
console.dir(document.body.style);

let element1 =  document.getElementById("heading1");
element1.style.backgroundColor = "brown";


let element2 = document.getElementById("heading2");
element2.style.color = "purple";
element2.style.backgroundColor = "yellow";

let listItem = document.getElementById("list");
listItem.style.color="orangered";


// changing paragrafh color using tag property
let item = document.getElementsByTagName("p");
for(let i=0; i<item.length; i++){
    item[i].style.color = "navy";
}

// 
let hotElements = document.getElementsByClassName("hot");
for(let i of hotElements){
    i.style.color="grey";
}

let coldElements = document.getElementsByClassName("cold");
for(let i of coldElements){
    i.style.color = "white";
    i.style.backgroundColor = "orangered"
    i.style.fontSize = "2rem"
    i.style.padding = "1rem"
}