let button1 = document.getElementById("button1");
button1.onclick= () =>{
    console.log("Hello");
    console.log("Everyone..");
    console.log("have a good day");
    console.log("Bye..");

}

let button2 = document.getElementById("button2");
button2.onclick = () => {
    button2.style.backgroundColor = "blue";
    button2.innerText = "Text & BgColor Changed"
}

let button3 = document.querySelector("#button3");
button3.onclick = (event) => {
    console.log(event.target);
}

let button4 = document.querySelector("#button4");
button4.onmouseover = () => {
    button4.style.backgroundColor = "lightgreen";
    button4.innerText = "Text Change"

}

let button5 = document.querySelector("#button5");
button5.addEventListener("click",()=>{
    console.log("Button5 was clicked now")
})

let button6 = document.querySelector("#button6");
let PrintMessage = () => {
    console.log("Welcome to Side")
}
button6.addEventListener("click",PrintMessage)
