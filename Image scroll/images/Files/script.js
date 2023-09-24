let gallary = document.querySelector(".gallary")
let nextbtn = document.querySelector(".nextbtn")
let backbtn = document.querySelector(".backbtn")



gallary.addEventListener("wheel",(det)=>{
    det.preventDefault()
    gallary.scrollLeft += det.deltaY
    gallary.style.scrollBehavior = "smooth";

})

nextbtn.addEventListener("click",()=>{
    gallary.scrollLeft += 800;
  gallary.style.scrollBehavior = "smooth";
})


backbtn.addEventListener("click",()=>{
    gallary.scrollLeft -= 800;
    gallary.style.scrollBehavior = "smooth";
      })