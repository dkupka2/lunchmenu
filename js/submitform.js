const menuList = document.getElementsByClassName("menulist")
const mondayInput = document.getElementById("mondayinput")
const tuesdayInput = document.getElementById("tuesdayinput")
const wednesdayInput = document.getElementById("wednesdayinput")
const thursdayInput = document.getElementById("thursdayinput")
const fridayInput = document.getElementById("fridayinput")
const submit = document.getElementById("submitbutton")

submit.onclick = () => {
  event.preventDefault()
  console.log("Click!")
  
  const data = {
    Monday: mondayInput.value,
    Tuesday: tuesdayInput.value,
    Wednesday: wednesdayInput.value,
    Thursday: thursdayInput.value,
    Friday: fridayInput.value
  }

  fetch("http://localhost:4000/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data)
  })
  .catch(error => {
    console.error('Error:', error)
  })

  mondayInput.value = ""
  tuesdayInput.value = ""
  wednesdayInput.value = ""
  thursdayInput.value = ""
  fridayInput.value = ""
}