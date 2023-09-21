let input =document.querySelector(".input")
let img = document.querySelector(".img")

img.addEventListener("click",function(){
    if(input.type == "password"){
        input.type = "text";
        img.src = "eye-open.png"
    }
    else{
        input.type = "password"
        img.src = "eye-close.png" 
    }
})