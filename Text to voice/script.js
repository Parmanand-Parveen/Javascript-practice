let speech = new SpeechSynthesisUtterance()
let button = document.querySelector("button")
let select =  document.querySelector("select")

let textarea = document.querySelector("textarea")
let voices = [];

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0];

    voices.forEach((voice,i)=>{
        select.options[i]= new Option(voice.name,i)
    })
}

button.addEventListener("click",()=>{
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
})

select.addEventListener("change",()=>{
    speech.voice = voices[select.value]
})