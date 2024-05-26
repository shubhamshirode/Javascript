let userName = document.getElementById("username");
let password = document.getElementById("password");
let rePassword = document.getElementById("re_password");


let user_error = document.getElementById("user_error");
let pass_error = document.getElementById("pass_error");
let re_pass_error = document.getElementById("re_pass_error");


function formValidation(){
    if(userName.value == ""){
        user_error.innerText = "Enter the User Name";
        return false;
    }
    else if(password.value == ""){
        pass_error.innerText = "Enter the password"; 
        return false;
    }
}