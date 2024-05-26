// first of fetch all the element from html file to js

let username= document.getElementById("username");
let password = document.getElementById("password");
let user_error = document.getElementById("user_error");
let pass_error = document.getElementById("password_error");


// Write all the logic for form in the form() function,
// return false is written When we dont allow to submit the form, 
// when any conditon is not satisfird then write return false ,
//  by default it is true

function form(){
    if(username.value == ""){
        user_error.innerText = "Enter the User Name";
        return false;
    }
    else if(password.value == ""  ){
        pass_error.innerText = "Password is empty";
        return false;
    }
    else if(password.value.length < 8 ){
        pass_error.innerText ="Password Length should be between 8 - 16";
        return false;
    }
    else if(password.value.length > 16 ){
        pass_error.innerText ="Password Length should between 8 - 16";
        return false;
    }
    else if(password.value.search("@") < 0){
        pass_error.innerText ="use @";
        return false;
        // search() return index value where it is present;
        // if @ is not present then it will return -1 value, 
        // it is less than 0 so it will print error
         
    }
}