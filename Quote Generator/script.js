let quote = document.querySelector(".quote")
let author = document.querySelector(".author")

async function getquote(){
    
let raw = await fetch(`https://api.quotable.io/random`);
let data= await raw.json()
 quote.innerHTML = '"'+data.content +'"'
 author.innerHTML = data.author
}
getquote()

function tweet(){
    window.open( href="https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by" + author.innerHTML )
}

