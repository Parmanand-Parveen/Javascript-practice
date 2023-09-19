let inputbox = document.querySelector("#input-box") 
let addbtb = document.querySelector(".add")
let listcontainer = document.querySelector("#list-container")


function putdata(){
    if(inputbox.value=== ""){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value ;
        listcontainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
   inputbox.value = "";
   savedata()
}

addbtb.addEventListener("click" ,putdata)

listcontainer.addEventListener("click",function(e){
   if(e.target.tagName=== "LI"){
    e.target.classList.toggle("checked")
    savedata()
   }
   else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    savedata()
   }
});

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showdata()

inputbox.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      if (inputbox.value !== "") {
       putdata()
      }
    }
  });