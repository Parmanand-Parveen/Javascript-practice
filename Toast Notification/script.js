let success = document.querySelector(".success")
let invalid = document.querySelector(".invalid")
let error = document.querySelector(".error")
let toastbox = document.querySelector(".toastbox")

success.addEventListener("click",()=>{
   let toast = document.createElement("div")
   toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> Successfully submited`
  toast.classList.add("toast")
  toastbox.appendChild(toast)
  setTimeout(()=>{
    toast.remove()
  },5000)
})


invalid.addEventListener("click",()=>{
    let toast = document.createElement("div")
    toast.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input.Check again!`
   toast.classList.add("toast2","toast")
   toastbox.appendChild(toast)
   setTimeout(()=>{
     toast.remove()
   },5000)
 })

 
error.addEventListener("click",()=>{
    let toast = document.createElement("div")
    toast.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error!`
   toast.classList.add("toast3","toast")
   toastbox.appendChild(toast)
   setTimeout(()=>{
     toast.remove()
   },5000)
 })