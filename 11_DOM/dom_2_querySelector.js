// Query Selector

// query selectors returns first match 
let item1 = document.querySelector("li");
item1.style.color = "orange";

// query selectorAll return all the match 
// query selector for tag name
let item2 = document.querySelectorAll("p");
for(let i of item2){
    i.style.color = "navy";
    i.style.fontSize = "2rem"
}

// query selector for class name
let item3 = document.querySelectorAll(".hot");
for(let i of item3){
    i.style.color = "green";
    i.style.backgroundColor = "lightyellow";
    i.style.padding = "1rem";
}



// query selector for id name
let item4 = document.querySelector("#three");
item4.style.backgroundColor = "lightyellow";
item4.style.padding = "1rem"




// changing html text using js
item4.innerText = "Change Using JS"


let t1 = document.querySelector("#a-1");
t1.style.backgroundColor="violet";
t1.innerText = "HTML";

let t2 = document.querySelector("#a-2");
t2.style.backgroundColor = "yellow";
t2.innerText = "CSS";

let t3 = document.querySelector("#a-3");
t3.innerText = "JavaScript";


// To add Text in html using JavaScript
let t4 = document.querySelector("#a-4");
let str = " - By Suraj Singh";
t4.innerText = t4.innerText + str;


let text = document.querySelector("#heading4");
let flag = 0;
for(let i=0; i<text.length; i++){
    if(text[i]=="@"){
        flag = 1;
    }
}
if(flag == 0){
    console.log("@ is not present");
}
else if(flag == 1){
    console.log("@ is present");

}




let btn = document.createElement("button");
btn.style.backgroundColor = "lightblue";
btn.style.border = "none";
btn.style.padding = "1rem";
btn.innerText = "Click Me";

let btn2 = document.createElement("button");
btn2.style.backgroundColor = "lightblue";
btn2.style.border = "none";
btn2.style.padding = "1rem";
btn2.innerText = "Click Me";

let body = document.querySelector("#body1");
// at last 
body.append(btn);

//  Insert Elements in html using js 
body.prepend(btn2);

// before any element
// t2.before(btn);

// after any element
// t2.after(btn);











