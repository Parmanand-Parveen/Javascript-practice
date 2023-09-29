let day = document.querySelector(".days")
let hour = document.querySelector(".hours")
let minute = document.querySelector(".minutes")
let second = document.querySelector(".second")

let launchdate = new Date("Oct 16, 2023 00:00:00").getTime();

var x = setInterval(()=>{
    var now = new Date().getTime();
    var distance = launchdate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 day.innerHTML = days;
 hour.innerHTML = hours;
 minute.innerHTML = minutes
 second.innerHTML  = seconds
 
},1000)