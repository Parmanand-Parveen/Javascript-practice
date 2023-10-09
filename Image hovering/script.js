let elem = document.querySelectorAll(".elem");

elem.forEach(val=>{
    console.log(val.childNodes)
    
    val.addEventListener("mouseenter",()=>{
       val.childNodes[2].style.opacity = 1 
    });
    val.addEventListener("mouseleave",()=>{
      val.childNodes[2].style.opacity = 0
    });
    val.addEventListener("mousemove",dets=>{
        val.childNodes[2].style.left = dets.x+"px"
      })
})

