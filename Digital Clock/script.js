 let hours = document.querySelector(".hours")
 let min = document.querySelector(".min")
 let sec = document.querySelector(".sec")

setInterval(() => {
    let now = new Date()

    hours.innerHTML= (now.getHours()<10?"0":"")+now.getHours()
    min.innerHTML= ( now.getMinutes()<10?"0":"")+ now.getMinutes()
    sec.innerHTML= (now.getSeconds()<10?"0":"") + now.getSeconds()
    
}, 1000);