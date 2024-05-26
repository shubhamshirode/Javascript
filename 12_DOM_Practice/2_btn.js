let box = document.querySelector("#container");

// fetching single button 
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let button3 = document.querySelector("#btn3");
let button4 = document.querySelector("#btn4");
let button5 = document.querySelector("#btn5");
let button6 = document.querySelector("#btn6");
let button7 = document.querySelector("#btn7");
let button8 = document.querySelector("#btn8");
let button9 = document.querySelector("#btn9");
let button10 = document.querySelector("#btn10");
let button11 = document.querySelector("#btn11");
let button12 = document.querySelector("#btn12");

// Fetching all button
let buttons = document.querySelectorAll("button");
let prebtn;
let preText;

for(let val of buttons){
    val.addEventListener("click",() => {
        if(prebtn){
            prebtn.innerText = preText;
        }
        preText =val.innerText
        val.innerText = "ColorChange";
        prebtn = val;  
})

  
    button1.addEventListener("click",() => {
        box.style.backgroundColor = "red";
    })
    
    button2.addEventListener("click", () => {
        box.style.backgroundColor = "Orange";
    })
    
    button3.addEventListener("click",()=>{
        box.style.backgroundColor = "yellow";
    })
    
    button4.addEventListener("click",()=>{
        box.style.backgroundColor = "Navy"
    })
    
    button5.addEventListener("click",()=>{
        box.style.backgroundColor = "gray"
    })
    button6.addEventListener("click",() => {
        box.style.backgroundColor = "brown";
    })
    
    button7.addEventListener("click", () => {
        box.style.backgroundColor = "purple";
    })
    
    button8.addEventListener("click",()=>{
        box.style.backgroundColor = "pink";
    })
    
    button9.addEventListener("click",()=>{
        box.style.backgroundColor = "green"
    })
    
    button10.addEventListener("click",()=>{
        box.style.backgroundColor = "lightgreen"
    })
    
    button11.addEventListener("click",()=>{
        box.style.backgroundColor = "blue"
    })
    
    button12.addEventListener("click",()=>{
        box.style.backgroundColor = "aqua"
    })
    
}
