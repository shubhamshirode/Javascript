let button = document.getElementById("btn");
let body = document.getElementById("bdy");

let flag ;
button.addEventListener("click",() => {
    if(flag==0){
        body.style.backgroundColor = "red";
        flag = 1;
    }
    else{
        body.style.backgroundColor = "white";
        flag = 0;
    }
})