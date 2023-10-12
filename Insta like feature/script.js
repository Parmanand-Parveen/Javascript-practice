const box = document.querySelector(".box")
const like = document.querySelector("i")



box.addEventListener("dblclick",function(){
    like.style.scale = "4"

    setTimeout(()=>{
        like.style.scale = "0"   
    },800)
})


