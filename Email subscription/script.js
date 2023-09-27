let msg = document.querySelector(".msg")

const scriptURL = 'https://script.google.com/macros/s/AKfycbwip_4lBjOTjX9THVEbegltKQkVCcIANr1TeelAZgfk97IK0W4916OshtBnaCMXH537sg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(msg.innerHTML="Submitted Successfully",
      setTimeout(()=>{
        msg.innerHTML = ""
      },5000))
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })