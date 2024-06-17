const menuName = document.getElementById("menuname")
const synth = window.speechSynthesis
const speak = document.getElementById("speak")
const output = document.getElementById('output')

let data = {
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: ""
}

let speakOut = ""

window.onload = (event) => {
  fetch("http://localhost:4000/data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data)
    speakOut = JSON.stringify(data)
    output.innerHTML = "<div class='days'>Monday<br />" + data.Monday + "</div><br />" + "<div class='days'>Tuesday<br />" + data.Tuesday + "</div><br />" + "<div class='days'>Wednesday<br />" + data.Wednesday + "</div><br />" + "<div class='days'>Thursday<br />" + data.Thursday + "</div><br />" + "<div class='days'>Friday<br />" + data.Friday + "</div><br />"
  })
  .catch(error => {
    console.error('Error:', error)
  })
}

speak.onclick = (event) => {
  event.preventDefault()
  const speakText = []

  speakText.push(menuName.textContent)
  speakText.push(speakOut)

  const utterThis = new SpeechSynthesisUtterance(speakText)

  utterThis.rate = 0.75

  synth.speak(utterThis)
}