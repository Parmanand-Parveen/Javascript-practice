let main = document.querySelector('#main')
let cursor = document.querySelector(".cursor")


main.addEventListener("mousemove",mouse)


function mouse(dets){
    cursor.style.left= dets.x+"px";
    cursor.style.top= dets.y+"px";
   
}



