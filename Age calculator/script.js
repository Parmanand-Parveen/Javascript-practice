let inputdata = document.querySelector(".input-data")
let calcbtn = document.querySelector(".calc-btn")
let agemsg = document.querySelector(".age-msg")
let form = document.querySelector("form")


calcbtn.addEventListener("click",function(e){
   e.preventDefault()
    let userinput = inputdata.value;
    let birthdate = new Date(userinput)

    let d1 =birthdate.getDate();
    let m1 = birthdate.getMonth()+1;
    let y1 = birthdate.getFullYear();

    console.log(d1,m1,y1)

    let today = new Date()

    let d2 =today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();
    var y3 = y2-y1;

    console.log(d2,m2,y2)

    if(m2>=m1){
        var m3 = m2-m1
    }
    else{
        y3--;
        var m3 = m2+12-m1
    } 
  
    if(d2>=d1){
        var d3 = d2-d1
        }
        else{
         m3-- ;
         d3 = getDateInMonth(y1,m1)+d2 - d1
        }

    function getDateInMonth(year,month){
          return new Date(year,month,0).getDate()
    }


    agemsg.innerHTML=`You are <span>${y3}</span> year <span>${m3}</span> month <span>${d3}</span> days old`
     setTimeout(()=>{
        agemsg.innerHTML=""
     },5000)
    form.reset() 
    
})
