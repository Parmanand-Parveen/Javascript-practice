let input = document.querySelector(".input")
let qrimg = document.querySelector(".qrimg")
let btn = document.querySelector(".btn")
let imgdiv = document.querySelector(".imgdiv")

let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function generate(){
    qrimg.src = (url + input.value)
    imgdiv.classList.add("active")

} 

btn.addEventListener("click",generate)

input.addEventListener("keydown",function(e){
    if(e.key == "Enter"){
        if( input.value!== ""){
            generate()
        }
    }
})