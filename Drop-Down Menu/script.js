let social = document.querySelector(".social")
let list = document.querySelector(".list")
let arrow = document.querySelector(".arrow")
let body = document.querySelector("body")

social.addEventListener("click",()=>{
   list.classList.toggle("active")
   arrow.classList.toggle("rotate")
})

body.addEventListener("dblclick",()=>{
    list.classList.remove("active")
   arrow.classList.remove("rotate")
})



 

