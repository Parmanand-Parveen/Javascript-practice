let subbtn =document.querySelector(".subbtn")
let popdiv = document.querySelector(".popdiv")
let Okbtn = document.querySelector(".Okbtn")

function openpop(){
popdiv.classList.add("openpop")
}

function closepop(){
    popdiv.classList.remove("openpop")
}

subbtn.addEventListener("click",openpop)
Okbtn.addEventListener("click",closepop)