let textbox = document.querySelector(".textbox")
let btn = document.querySelector(".btn") 
let note = document.querySelector(".note")



function savenote(){
    localStorage.setItem("note",note.innerHTML) 
}
           
btn.addEventListener("click",getnote)


function getnote(){
    let p = document.createElement("p")
    p.contentEditable = true;
    let img = document.createElement("img")
    img.src = "./images/delete.png"
    p.className = "textbox"
    note.appendChild(p)
    p.appendChild(img)
    savenote()
}

note.addEventListener("click",e=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
        savenote()
    }
    else if (e.target.tagName === "P"){
        console.log(e.target.tagName)
        text = document.querySelectorAll(".textbox")
        console.log(text)
        text.forEach(element => {
            element.onkeyup = function(){
                savenote()
               
            }
        }); 
    }
})

function shownote(){
    note.innerHTML= localStorage.getItem("note")
}
shownote()
