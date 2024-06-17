// server.js
const express = require("express")
const server = express()
const host = "localhost"
const port = 4000

let menuData = {
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: ""
}

server.use(express.static(__dirname + "/"))
server.use(express.static(__dirname + "/html"))
server.use(express.static(__dirname + "/css"))
server.use(express.static(__dirname + "/js"))

server.use(express.json())

/*
  /
  /data
  /submitform
  /drinkmenu
  /foodmenu
*/

// instead of sending index.html, get JSON object from server's
// submitmenu and create HTML around it

server.get("/", (req, res) => {
  console.log("Body:",req.body)
  res.sendFile("index.html", { roo: __dirname + "/" })
})

server.get("/submitform", (req, res) => {
  res.sendFile("html/submitform.html", { root: __dirname + "/" })
})

server.post("/data", (req, res) => {
  res.header("Refresh", "10")
  menuData.Monday = req.body.Monday
  menuData.Tuesday = req.body.Tuesday
  menuData.Wednesday = req.body.Wednesday
  menuData.Thursday = req.body.Thursday
  menuData.Friday = req.body.Friday
  console.log(menuData)
})

server.get('/data', (req, res) => {
  res.json(menuData)
})

server.get("/drinkmenu", (req, res) => {
  res.sendFile("html/drinkmenu.html", { root: __dirname + "/" })
})

server.get("/foodmenu", (req, res) => {
  res.sendFile("html/foodmenu.html", { root: __dirname + "/" })
})

server.listen(port, (error) => {
  if (error) {
    console.log("Error:", error)
  } else {
    console.log(`Server running on http://${host}:${port}`)
  }
})