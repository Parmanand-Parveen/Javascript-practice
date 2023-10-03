let arr= [
    {dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {dp:"https://images.unsplash.com/photo-1505535762334-d060c7df86e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1534239697798-120952b76f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1532423023994-84d96b739700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1458310336304-9b584acc9b58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}

]

let clutter = "";
 let a = Math.floor(Math.random()*10)
arr.forEach((elem,idx)=>{
    if(a>=5){
        clutter += `<div class="story w-[89px] h-[89px] border-[2px] rounded-full border-[red] overflow-hidden mr-1">
    <img id="${idx}" class="object-cover object-center h-full w-full " src="${elem.dp}" alt=""> 
 </div>`
    }
    else{
        clutter += `<div class="story w-[89px] h-[89px] border-[2px] rounded-full border-[red] overflow-hidden mr-1">
    <img id="${idx}" class="object-cover object-center h-full w-full " src="${elem.story}" alt=""> 
 </div>`
    }
})

let main_story = document.querySelector(".main_story")
 main_story.innerHTML = clutter;

 main_story.addEventListener("click",(dets)=>{
    if(a>=5){
        document.querySelector(".fullscreen").style.display="block"
    document.querySelector(".fullscreen").style.backgroundImage = `url(${arr[dets.target.id].dp})`
    }
    else{
        document.querySelector(".fullscreen").style.display="block"
    document.querySelector(".fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    }

    setTimeout(()=>{
        document.querySelector(".fullscreen").style.display="none"  
    },2000)
 })
